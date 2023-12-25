import { GraphQLUpload } from "graphql-upload-ts";
import { memberIds } from "../../db_seeder/member";
import { seedContainerMeta } from "../../db_seeder/meta";
import { ogm } from "../ogm";

export const generalResolvers = {
  Upload: GraphQLUpload,
  Mutation: {
    importFirefoxBookmarks: async (_, { file }) => {
      try {
        const { createReadStream, filename, mimetype, encoding } = await file;
        // Invoking the `createReadStream` will return a Readable Stream.
        // See https://nodejs.org/api/stream.html#stream_readable_streams
        const stream = createReadStream();
        // Convert the stream to a string for JSON parsing
        const jsonString = await streamToString(stream);

        // Parse the string as JSON
        const bookmarksData = JSON.parse(jsonString);

        // Process the bookmarksData to create Collection, Bookmark, and Folder nodes in the database
        await processBookmarksData(bookmarksData);

        return true;
      } catch (error) {
        throw error;
      }
    },
  },
};

// Helper function to convert a stream into a string
function streamToString(stream: NodeJS.ReadableStream): Promise<string> {
  const chunks: Buffer[] = [];
  return new Promise((resolve, reject) => {
    stream.on("data", (chunk: Buffer) => chunks.push(Buffer.from(chunk)));
    stream.on("error", (err) => reject(err));
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });
}

async function processBookmarksData(bookmarksData) {
  const ogm_Collection = ogm.model("Collection");
  const collection = await ogm_Collection.create({
    input: {
      name: "firefox",
      // createdAt: new Date(bookmarksData.dateAdded / 1000),
      // updatedAt: new Date(bookmarksData.lastModified / 1000),
      member: {
        connect: {
          where: { node: { id: memberIds[0] } },
        },
      },
    },
  });

  const MemberMeta = ogm.model("MemberMeta");
  await MemberMeta.update({
    update: {
      collectionPositions_PUSH: collection.collections[0].id,
    },
    where: {
      member: {
        id: memberIds[0],
      },
    },
  });

  // Process children recursively
  await processChildren(bookmarksData.children, collection.collections[0].id);
}

async function processChildren(
  children,
  containerId,
  containerName = "collection"
) {
  const elementPositions: string[] = [];
  for (const child of children) {
    if (child.uri) {
      // It's a bookmark
      const bookmarkId = await createBookmark(
        child,
        containerId,
        containerName
      );
      elementPositions.push(bookmarkId);
    } else if (child.children) {
      // It's a folder
      const folderId = await createFolder(child, containerId, containerName);
      await processChildren(child.children, folderId, "folder");
      elementPositions.push(folderId);
    }
  }
  seedContainerMeta(containerName, containerId, elementPositions);
}

async function createFolder(folderData, containerId, containerName) {
  const ogm_Folder = ogm.model("Folder");
  const folder = await ogm_Folder.create({
    input: {
      name: folderData.title,
      // createdAt: new Date(folderData.dateAdded / 1000),
      // updatedAt: new Date(folderData.lastModified / 1000),
      [containerName]: {
        connect: { where: { node: { id: containerId } } },
      },
    },
  });
  return folder.folders[0].id;
}

async function createBookmark(bookmarkData, containerId, containerName) {
  const ogm_Bookmark = ogm.model("Bookmark");
  const urlParts = new URL(bookmarkData.uri);
  const bookmark = await ogm_Bookmark.create({
    input: {
      title: bookmarkData.title,
      domainName: urlParts.hostname,
      urlScheme: urlParts.protocol.replace(":", ""),
      linkPath: urlParts.pathname + urlParts.search + urlParts.hash,
      iconUri: bookmarkData.iconUri,
      // createdAt: new Date(bookmarkData.dateAdded / 1000),
      // updatedAt: new Date(bookmarkData.lastModified / 1000),
      [containerName]: {
        connect: { where: { node: { id: containerId } } },
      },
    },
  });
  return bookmark.bookmarks[0].id;
}

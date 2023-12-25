import fs from "fs";
import { GraphQLUpload } from "graphql-upload-ts";
import { finished } from "stream/promises";

export const generalResolvers = {
  Upload: GraphQLUpload,
  Mutation: {
    importFirefoxBookmarks: async (_, { file }, { driver }) => {
      try {
        const { createReadStream, filename, mimetype, encoding } = await file;
        // Invoking the `createReadStream` will return a Readable Stream.
        // See https://nodejs.org/api/stream.html#stream_readable_streams
        const stream = createReadStream();
        // This is purely for demonstration purposes and will overwrite the
        // local-file-output.txt in the current working directory on EACH upload.
        const out = fs.createWriteStream("local-file-output.txt");
        stream.pipe(out);
        await finished(out);
        return true;
      } catch (error) {
        throw error;
      }
    },
  },
};

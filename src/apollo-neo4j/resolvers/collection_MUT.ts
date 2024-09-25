import {MemberMetaSvc} from "../services/member_meta.js";
import {CollNodeSvc} from "../services/collNode.js";
import {gql} from "graphql-tag";
import {NodeSvc} from "../services/node.js";
import {BmLooseSvc} from "../services/bmLoose.js";
import {ParentMetaSvc} from "../services/parent_meta.js";
import {CollectionSvc} from "../services/collection.js";
import {Folder_SvcDb} from "../services_db/folder.js";
import {Coll_SvcDb} from "../services_db/coll.js";

export const collection_MUT_typeDefs = gql`
    type Mutation {
        createCollection(name: String!, memberId: ID!): ID
        deleteCollection(id: ID!): Int!
        deleteManyColls(ids: [ID!]!): Int!
        moveColls2CollNode(collIds: [ID!]!, destId: ID!, pos: Int): Int!
    }
`;

export const collection_MUT_Resolvers = {

    createCollection: async (_, {name}, {driver, jwt}) => {
        const tx = await driver.session().beginTransaction();
        try {
            const folderId = await Coll_SvcDb.create(name, jwt.sub, tx)

            await ParentMetaSvc.addChildPositions(jwt.sub, [folderId], parentId, position, tx)

            await tx.commit()
            return folderId;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
    deleteCollection: async (_, {id}, {driver, jwt}) => {
        const tx = await driver.session().beginTransaction();
        try {
            // Extract the nodesDeleted count from the result
            const nodesDeleted = await CollNodeSvc.deleteCascade(id, tx);
            await MemberMetaSvc.delCollPositions(jwt.sub, [id], tx);

            return nodesDeleted;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
    deleteManyColls: async (_, {ids}, {driver, jwt}) => {
        const tx = await driver.session().beginTransaction();
        try {
            // Construct and execute the Cypher query for multiple IDs
            const nDeleted = await CollNodeSvc.deleteManyCascade(ids, tx);
            await MemberMetaSvc.delCollPositions(jwt.sub, ids, tx);

            return nDeleted;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
    moveColls2CollNode: async (_, {collIds, destId, pos}, {driver, jwt}) => {
        const tx = await driver.session().beginTransaction();
        try {
            const folderIds = await CollectionSvc.moveColls2CollNode(jwt.sub, collIds, destId, tx)
            await MemberMetaSvc.delCollPositions(jwt.sub, collIds, tx)
            await ParentMetaSvc.addChildPositions(jwt.sub, folderIds, destId, pos, tx)
            await tx.commit()
            return true;
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }

    }
};

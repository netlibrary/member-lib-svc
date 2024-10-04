import {gql} from "graphql-tag";

export const collNodes_typeDefs = gql`
    union Child = Bookmark | Folder
    union Parent = Collection | Folder

    interface Parent {
        id: ID!
    }


`;

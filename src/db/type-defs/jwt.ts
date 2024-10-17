import {gql} from "graphql-tag";

export const jwt_typeDefs = gql`
    type JWT @jwt {
        sub: ID!
        roles: [String!]!
        exp: Int!
    }
`;

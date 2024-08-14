import {MemberSvc_Ogm} from "../services/member_ogm.js";
import {gql} from "graphql-tag";

export const member_QUERY_typeDefs = gql`
    type Query {
        signIn(memberName: String!, pw: String!): String!
    }
`;

export const member_QUERY_resolvers = {
    Query: {
        signIn: async (_, {memberName, pw}, {driver, ogm}) => {
            const tx = await driver.session().beginTransaction();
            try {
                const memberOgm = ogm.model("Member");
                return await MemberSvc_Ogm.signIn(memberName, pw, memberOgm);
            } catch (error) {
                await tx.rollback()
                throw error;
            } finally {
                await tx.close();
            }
        },
    }
}
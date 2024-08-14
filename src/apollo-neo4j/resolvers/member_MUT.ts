import {MemberSvc_Ogm} from "../services/member_ogm.js";

export const member_MUT_resolvers = {
    signUp: async (_, {memberName, pw}, {driver, ogm}) => {
        const tx = await driver.session().beginTransaction();
        try {
            const memberOgm = ogm.model("Member");
            MemberSvc_Ogm.signUp(memberName, pw, memberOgm);
        } catch (error) {
            await tx.rollback()
            throw error;
        } finally {
            await tx.close();
        }
    },
}
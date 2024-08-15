import {AuthSvc} from "./auth.js";
import {Model} from "@neo4j/graphql-ogm";
import {Member} from "../gen/types.js";
import {AuthenticationError} from "../../errors.js";


interface UpdateMemberInput {
    memberName?: string;
    password?: string;
    roles?: string[];
}

export const MemberSvc_Ogm = {
    signIn: async (memberName: string, password: string, ogm) => {
        try {
            const ogm_Member = ogm.model('Member');
            // Find the member by memberName
            const members = await ogm_Member.find({
                where: { memberName }
            });

            if (!members || members.length === 0) {
                throw new AuthenticationError('Invalid credentials');
            }

            const member: Member = members[0];

            // Verify the password
            const isValidPassword = await AuthSvc.comparePassword(password, member.passwordHash);

            if (!isValidPassword) {
                throw new AuthenticationError('Invalid credentials');
            }

            // If credentials are valid, create and return a JWT
            return AuthSvc.createJWT({ sub: member.id, roles: member.roles });
        } catch (error) {
            console.error('Error during sign in:', error);
            if (error instanceof AuthenticationError) {
                throw error;
            }
            throw new Error('Sign in failed');
        }
    },
    signUp: async (memberName: string, password: string, ogm) => {
        const member: Member = await MemberSvc_Ogm.create(
            memberName,
            password, ogm);

        return AuthSvc.createJWT({sub: member.id, roles: member.roles});
    },
    create: async (memberName: string, password: string, ogm): Promise<Member> => {
        const ogm_Member = ogm.model('Member');

        const passwordHash = await AuthSvc.createPwHash(password);

        const createMemberInput = {
            memberName,
            passwordHash,
            roles: ["MEMBER"],
        };

        try {
            const {members} = await ogm_Member.create({
                input: [createMemberInput]
            });

            if (!members || members.length === 0) {
                throw new Error('Member creation failed');
            }

            return members[0];
        } catch (error) {
            console.error('Error creating member:', error);
            throw new Error('Member creation failed');
        }
    },
    update: async (id: string, updateData: UpdateMemberInput, ogm): Promise<Member> => {
        const ogm_Member = ogm.model('Member');
        const {password, ...updateData2} = updateData;

        const updateMemberInput = {
            ...updateData2,
            passwordHash: password ? await AuthSvc.createPwHash(password) : undefined,
        };

        try {
            const {members} = await ogm_Member.update({
                where: {id},
                update: updateMemberInput
            });

            if (!members || members.length === 0) {
                throw new Error('Member update failed');
            }

            return members[0];
        } catch (error) {
            console.error('Error updating member:', error);
            throw new Error('Member update failed');
        }
    }
}
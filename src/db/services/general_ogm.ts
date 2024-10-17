import {Model} from "@neo4j/graphql-ogm";

export const GeneralSvc_DbOgm = {
    create: async <T>(input , ogm_Member: Model): Promise<T> => {
        const { resList } = await ogm_Member.create({
            input: [
                input
            ]
        });

        return resList[0];
    }
}
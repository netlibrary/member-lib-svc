import {bm_MUT_resolver} from "./bm_MUT.js";
import {bm_QUERY_resolver} from "./bm_QUERY.js";
import {bmLoose_MUT_resolver} from "./bmLoose_MUT.js";


export const bookmarkResolvers = {
    Mutation: {...bm_MUT_resolver, ...bmLoose_MUT_resolver},
    Query: bm_QUERY_resolver
};

export const bm_CypherSel = {
    BookmarkDl2: (alias: string, p_alias = "p", c_alias = "c") => `{
  id: ${alias}.id,
  parentId: ${p_alias}.id, 
  collectionId: ${c_alias}.id, 
  name: ${alias}.name, 
  domainName: ${alias}.domainName, 
  linkPath: ${alias}.linkPath, 
  urlScheme: ${alias}.urlScheme, 
  iconUri: ${alias}.iconUri, 
  tags: [( ${alias} )-[:HAS]->(t:Tag) | { id: t.id, name: t.name }] 
}`,
    BookmarkDl: (alias: string) => `{
  id: ${alias}.id,
  name: ${alias}.name, 
  domainName: ${alias}.domainName, 
  linkPath: ${alias}.linkPath, 
  urlScheme: ${alias}.urlScheme, 
  iconUri: ${alias}.iconUri, 
  tags: [( ${alias} )-[:HAS]->(t:Tag) | { id: t.id, name: t.name }] 
}`,

};
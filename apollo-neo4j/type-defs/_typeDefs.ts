import { gql } from 'apollo-server-express';
import { bookmark_typeDefs } from './bookmark';
import { collection_typeDefs } from './collection';
import { collectionTree_typeDefs } from './collection-tree';
import { folder_typeDefs } from './folder';
import { general_typeDefs } from './general';
import { member_typeDefs } from './member';

export const typeDefs = gql`
  ${member_typeDefs}
  ${collectionTree_typeDefs}
  ${collection_typeDefs}
  ${folder_typeDefs}
  ${bookmark_typeDefs}
  ${general_typeDefs}
`

import { gql } from 'apollo-server';
import { bookmark_typeDefs } from './bookmark';
import { folder_typeDefs } from './folder';
import { member_typeDefs } from './member';
import { container_typeDefs } from './container';
import { collection_typeDefs } from './collection';

export const typeDefs = gql`
  ${member_typeDefs}
  ${container_typeDefs}
  ${collection_typeDefs}
  ${folder_typeDefs}
  ${bookmark_typeDefs}
`

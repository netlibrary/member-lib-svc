import { gql } from 'graphql-tag';
import { bookmark_typeDefs } from './bookmark';
import { collection_typeDefs } from './collection';
import { hierarchNodes_typeDefs } from './hierarch_nodes';
import { folder_typeDefs } from './folder';
import { general_typeDefs } from './general';
import { member_typeDefs } from './member';
import {tag_typeDefs} from "./tag";

export const typeDefs = gql`
  ${member_typeDefs}
  ${hierarchNodes_typeDefs}
  ${tag_typeDefs}
  ${collection_typeDefs}
  ${folder_typeDefs}
  ${bookmark_typeDefs}
  ${general_typeDefs}
`

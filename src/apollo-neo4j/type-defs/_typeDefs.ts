import { gql } from 'graphql-tag';
import { bookmark_typeDefs } from './bookmark.js';
import { collection_typeDefs } from './collection.js';
import { hierarchNodes_typeDefs } from './hierarch_nodes.js';
import { folder_typeDefs } from './folder.js';
import { general_typeDefs } from './general.js';
import { member_typeDefs } from './member.js';
import {tag_typeDefs} from "./tag.js";

export const typeDefs = gql`
  ${member_typeDefs}
  ${hierarchNodes_typeDefs}
  ${tag_typeDefs}
  ${collection_typeDefs}
  ${folder_typeDefs}
  ${bookmark_typeDefs}
  ${general_typeDefs}
`

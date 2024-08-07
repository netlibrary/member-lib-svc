import { gql } from 'graphql-tag';
import { bookmark_typeDefs } from './bm.js';
import { collection_typeDefs } from './collection.js';
import { collNodes_typeDefs } from './coll_nodes.js';
import { folder_typeDefs } from './folder.js';
import { general_typeDefs } from './general.js';
import { member_typeDefs } from './member.js';
import {tag_typeDefs} from "./tag.js";
import {bmContainer_typeDefs} from "./bmContainer.js";

export const typeDefs = gql`
  ${member_typeDefs}
  ${collNodes_typeDefs}
  ${tag_typeDefs}
  ${collection_typeDefs}
  ${folder_typeDefs}
  ${bmContainer_typeDefs}
  ${bookmark_typeDefs}
  ${general_typeDefs}
`
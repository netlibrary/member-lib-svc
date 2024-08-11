import { gql } from 'graphql-tag';
import { bookmark_typeDefs } from './bm.js';
import { collection_typeDefs } from './collection.js';
import { collNodes_typeDefs } from './coll_nodes.js';
import { folder_typeDefs } from './folder.js';
import { general_typeDefs } from './general.js';
import { member_typeDefs } from './member.js';
import {tag_typeDefs} from "./tag.js";
import {bmLooseContainer_typeDefs} from "./bmLoose.js";
import {directive_typeDefs} from "./directive.js";

export const typeDefs = gql`
  ${directive_typeDefs}
  ${member_typeDefs}
  ${collNodes_typeDefs}
  ${tag_typeDefs}
  ${collection_typeDefs}
  ${folder_typeDefs}
  ${bmLooseContainer_typeDefs}
  ${bookmark_typeDefs}
  ${general_typeDefs}
`

import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Bookmark = {
  __typename?: 'Bookmark';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  domainName?: Maybe<Scalars['String']['output']>;
  iconUri?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  linkPath?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Parent>;
  parentConnection: BookmarkParentConnection;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  urlScheme?: Maybe<Scalars['String']['output']>;
};


export type BookmarkParentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ParentOptions>;
  where?: InputMaybe<ParentWhere>;
};


export type BookmarkParentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BookmarkParentConnectionSort>>;
  where?: InputMaybe<BookmarkParentConnectionWhere>;
};

export type BookmarkAggregateSelection = {
  __typename?: 'BookmarkAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  domainName: StringAggregateSelectionNullable;
  iconUri: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  linkPath: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  urlScheme: StringAggregateSelectionNullable;
};

export type BookmarkConnectInput = {
  parent?: InputMaybe<BookmarkParentConnectFieldInput>;
};

export type BookmarkConnectOrCreateWhere = {
  node: BookmarkUniqueWhere;
};

export type BookmarkConnectWhere = {
  node: BookmarkWhere;
};

export type BookmarkCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  domainName?: InputMaybe<Scalars['String']['input']>;
  iconUri?: InputMaybe<Scalars['String']['input']>;
  linkPath?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<BookmarkParentFieldInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  urlScheme?: InputMaybe<Scalars['String']['input']>;
};

export type BookmarkDd1 = {
  __typename?: 'BookmarkDd1';
  description?: Maybe<Scalars['String']['output']>;
  domainName: Scalars['String']['output'];
  iconUri?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  linkPath: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
  urlScheme: Scalars['String']['output'];
};

export type BookmarkDd1AggregateSelection = {
  __typename?: 'BookmarkDd1AggregateSelection';
  count: Scalars['Int']['output'];
  description: StringAggregateSelectionNullable;
  domainName: StringAggregateSelectionNonNullable;
  iconUri: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  linkPath: StringAggregateSelectionNonNullable;
  title: StringAggregateSelectionNonNullable;
  type: StringAggregateSelectionNullable;
  urlScheme: StringAggregateSelectionNonNullable;
};

export type BookmarkDd1CreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  domainName: Scalars['String']['input'];
  iconUri?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  linkPath: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
  urlScheme: Scalars['String']['input'];
};

export type BookmarkDd1Edge = {
  __typename?: 'BookmarkDd1Edge';
  cursor: Scalars['String']['output'];
  node: BookmarkDd1;
};

export type BookmarkDd1Options = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more BookmarkDd1Sort objects to sort BookmarkDd1s by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<BookmarkDd1Sort>>;
};

/** Fields to sort BookmarkDd1s by. The order in which sorts are applied is not guaranteed when specifying many fields in one BookmarkDd1Sort object. */
export type BookmarkDd1Sort = {
  description?: InputMaybe<SortDirection>;
  domainName?: InputMaybe<SortDirection>;
  iconUri?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  linkPath?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
  urlScheme?: InputMaybe<SortDirection>;
};

export type BookmarkDd1UpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  domainName?: InputMaybe<Scalars['String']['input']>;
  iconUri?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  linkPath?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  urlScheme?: InputMaybe<Scalars['String']['input']>;
};

export type BookmarkDd1Where = {
  AND?: InputMaybe<Array<BookmarkDd1Where>>;
  NOT?: InputMaybe<BookmarkDd1Where>;
  OR?: InputMaybe<Array<BookmarkDd1Where>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  domainName?: InputMaybe<Scalars['String']['input']>;
  domainName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  domainName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  domainName_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  domainName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  iconUri?: InputMaybe<Scalars['String']['input']>;
  iconUri_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  iconUri_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  iconUri_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconUri_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  linkPath?: InputMaybe<Scalars['String']['input']>;
  linkPath_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  linkPath_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  linkPath_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  linkPath_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  title_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  type_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  type_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  urlScheme?: InputMaybe<Scalars['String']['input']>;
  urlScheme_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  urlScheme_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  urlScheme_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  urlScheme_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type BookmarkDd1sConnection = {
  __typename?: 'BookmarkDd1sConnection';
  edges: Array<BookmarkDd1Edge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BookmarkDeleteInput = {
  parent?: InputMaybe<BookmarkParentDeleteFieldInput>;
};

export type BookmarkDisconnectInput = {
  parent?: InputMaybe<BookmarkParentDisconnectFieldInput>;
};

export type BookmarkEdge = {
  __typename?: 'BookmarkEdge';
  cursor: Scalars['String']['output'];
  node: Bookmark;
};

export type BookmarkOnCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  domainName?: InputMaybe<Scalars['String']['input']>;
  iconUri?: InputMaybe<Scalars['String']['input']>;
  linkPath?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  urlScheme?: InputMaybe<Scalars['String']['input']>;
};

export type BookmarkOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more BookmarkSort objects to sort Bookmarks by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<BookmarkSort>>;
};

export type BookmarkParentConnectFieldInput = {
  connect?: InputMaybe<ParentConnectInput>;
  where?: InputMaybe<ParentConnectWhere>;
};

export type BookmarkParentConnection = {
  __typename?: 'BookmarkParentConnection';
  edges: Array<BookmarkParentRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BookmarkParentConnectionSort = {
  node?: InputMaybe<ParentSort>;
};

export type BookmarkParentConnectionWhere = {
  AND?: InputMaybe<Array<BookmarkParentConnectionWhere>>;
  NOT?: InputMaybe<BookmarkParentConnectionWhere>;
  OR?: InputMaybe<Array<BookmarkParentConnectionWhere>>;
  node?: InputMaybe<ParentWhere>;
};

export type BookmarkParentCreateFieldInput = {
  node: ParentCreateInput;
};

export type BookmarkParentDeleteFieldInput = {
  delete?: InputMaybe<ParentDeleteInput>;
  where?: InputMaybe<BookmarkParentConnectionWhere>;
};

export type BookmarkParentDisconnectFieldInput = {
  disconnect?: InputMaybe<ParentDisconnectInput>;
  where?: InputMaybe<BookmarkParentConnectionWhere>;
};

export type BookmarkParentFieldInput = {
  connect?: InputMaybe<BookmarkParentConnectFieldInput>;
  create?: InputMaybe<BookmarkParentCreateFieldInput>;
};

export type BookmarkParentRelationship = {
  __typename?: 'BookmarkParentRelationship';
  cursor: Scalars['String']['output'];
  node: Parent;
};

export type BookmarkParentUpdateConnectionInput = {
  node?: InputMaybe<ParentUpdateInput>;
};

export type BookmarkParentUpdateFieldInput = {
  connect?: InputMaybe<BookmarkParentConnectFieldInput>;
  create?: InputMaybe<BookmarkParentCreateFieldInput>;
  delete?: InputMaybe<BookmarkParentDeleteFieldInput>;
  disconnect?: InputMaybe<BookmarkParentDisconnectFieldInput>;
  update?: InputMaybe<BookmarkParentUpdateConnectionInput>;
  where?: InputMaybe<BookmarkParentConnectionWhere>;
};

export type BookmarkRelationInput = {
  parent?: InputMaybe<BookmarkParentCreateFieldInput>;
};

/** Fields to sort Bookmarks by. The order in which sorts are applied is not guaranteed when specifying many fields in one BookmarkSort object. */
export type BookmarkSort = {
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  domainName?: InputMaybe<SortDirection>;
  iconUri?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  linkPath?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  urlScheme?: InputMaybe<SortDirection>;
};

export type BookmarkUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BookmarkUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  domainName?: InputMaybe<Scalars['String']['input']>;
  iconUri?: InputMaybe<Scalars['String']['input']>;
  linkPath?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<BookmarkParentUpdateFieldInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  urlScheme?: InputMaybe<Scalars['String']['input']>;
};

export type BookmarkWhere = {
  AND?: InputMaybe<Array<BookmarkWhere>>;
  NOT?: InputMaybe<BookmarkWhere>;
  OR?: InputMaybe<Array<BookmarkWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  domainName?: InputMaybe<Scalars['String']['input']>;
  domainName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  domainName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  domainName_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  domainName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  iconUri?: InputMaybe<Scalars['String']['input']>;
  iconUri_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  iconUri_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  iconUri_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconUri_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  linkPath?: InputMaybe<Scalars['String']['input']>;
  linkPath_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  linkPath_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  linkPath_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkPath_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  parentConnection?: InputMaybe<BookmarkParentConnectionWhere>;
  parentConnection_NOT?: InputMaybe<BookmarkParentConnectionWhere>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  title_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  urlScheme?: InputMaybe<Scalars['String']['input']>;
  urlScheme_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  urlScheme_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  urlScheme_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlScheme_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type BookmarksConnection = {
  __typename?: 'BookmarksConnection';
  edges: Array<BookmarkEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Child = Bookmark | Folder;

export type ChildDlGeneral = BookmarkDd1 | FolderDd1;

export type ChildWhere = {
  Bookmark?: InputMaybe<BookmarkWhere>;
  Folder?: InputMaybe<FolderWhere>;
};

export type Collection = Parent & {
  __typename?: 'Collection';
  children: Array<Child>;
  childrenConnection: ParentChildrenConnection;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  member?: Maybe<Member>;
  memberAggregate?: Maybe<CollectionMemberMemberAggregationSelection>;
  memberConnection: CollectionMemberConnection;
  name?: Maybe<Scalars['String']['output']>;
  parentMeta?: Maybe<ParentMeta>;
  parentMetaAggregate?: Maybe<CollectionParentMetaParentMetaAggregationSelection>;
  parentMetaConnection: ParentParentMetaConnection;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CollectionChildrenArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<QueryOptions>;
  where?: InputMaybe<ChildWhere>;
};


export type CollectionChildrenConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ParentChildrenConnectionWhere>;
};


export type CollectionMemberArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<MemberOptions>;
  where?: InputMaybe<MemberWhere>;
};


export type CollectionMemberAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MemberWhere>;
};


export type CollectionMemberConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CollectionMemberConnectionSort>>;
  where?: InputMaybe<CollectionMemberConnectionWhere>;
};


export type CollectionParentMetaArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ParentMetaOptions>;
  where?: InputMaybe<ParentMetaWhere>;
};


export type CollectionParentMetaAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ParentMetaWhere>;
};


export type CollectionParentMetaConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ParentParentMetaConnectionSort>>;
  where?: InputMaybe<ParentParentMetaConnectionWhere>;
};

export type CollectionAggregateSelection = {
  __typename?: 'CollectionAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CollectionChildrenConnectInput = {
  Bookmark?: InputMaybe<Array<ParentChildrenBookmarkConnectFieldInput>>;
  Folder?: InputMaybe<Array<ParentChildrenFolderConnectFieldInput>>;
};

export type CollectionChildrenCreateFieldInput = {
  Bookmark?: InputMaybe<Array<ParentChildrenBookmarkCreateFieldInput>>;
  Folder?: InputMaybe<Array<ParentChildrenFolderCreateFieldInput>>;
};

export type CollectionChildrenCreateInput = {
  Bookmark?: InputMaybe<ParentChildrenBookmarkFieldInput>;
  Folder?: InputMaybe<ParentChildrenFolderFieldInput>;
};

export type CollectionChildrenDeleteInput = {
  Bookmark?: InputMaybe<Array<ParentChildrenBookmarkDeleteFieldInput>>;
  Folder?: InputMaybe<Array<ParentChildrenFolderDeleteFieldInput>>;
};

export type CollectionChildrenDisconnectInput = {
  Bookmark?: InputMaybe<Array<ParentChildrenBookmarkDisconnectFieldInput>>;
  Folder?: InputMaybe<Array<ParentChildrenFolderDisconnectFieldInput>>;
};

export type CollectionChildrenUpdateInput = {
  Bookmark?: InputMaybe<Array<ParentChildrenBookmarkUpdateFieldInput>>;
  Folder?: InputMaybe<Array<ParentChildrenFolderUpdateFieldInput>>;
};

export type CollectionConnectInput = {
  children?: InputMaybe<CollectionChildrenConnectInput>;
  member?: InputMaybe<CollectionMemberConnectFieldInput>;
  parentMeta?: InputMaybe<ParentParentMetaConnectFieldInput>;
};

export type CollectionConnectOrCreateInput = {
  children?: InputMaybe<ParentChildrenConnectOrCreateInput>;
  member?: InputMaybe<CollectionMemberConnectOrCreateFieldInput>;
  parentMeta?: InputMaybe<ParentParentMetaConnectOrCreateFieldInput>;
};

export type CollectionConnectOrCreateWhere = {
  node: CollectionUniqueWhere;
};

export type CollectionConnectWhere = {
  node: CollectionWhere;
};

export type CollectionCreateInput = {
  children?: InputMaybe<CollectionChildrenCreateInput>;
  member?: InputMaybe<CollectionMemberFieldInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentMeta?: InputMaybe<ParentParentMetaFieldInput>;
};

export type CollectionDeleteInput = {
  children?: InputMaybe<CollectionChildrenDeleteInput>;
  member?: InputMaybe<CollectionMemberDeleteFieldInput>;
  parentMeta?: InputMaybe<ParentParentMetaDeleteFieldInput>;
};

export type CollectionDisconnectInput = {
  children?: InputMaybe<CollectionChildrenDisconnectInput>;
  member?: InputMaybe<CollectionMemberDisconnectFieldInput>;
  parentMeta?: InputMaybe<ParentParentMetaDisconnectFieldInput>;
};

export type CollectionDs1 = {
  __typename?: 'CollectionDs1';
  bookmarkCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CollectionDs1AggregateSelection = {
  __typename?: 'CollectionDs1AggregateSelection';
  bookmarkCount: IntAggregateSelectionNonNullable;
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type CollectionDs1CreateInput = {
  bookmarkCount: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type CollectionDs1Edge = {
  __typename?: 'CollectionDs1Edge';
  cursor: Scalars['String']['output'];
  node: CollectionDs1;
};

export type CollectionDs1Options = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CollectionDs1Sort objects to sort CollectionDs1s by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CollectionDs1Sort>>;
};

/** Fields to sort CollectionDs1s by. The order in which sorts are applied is not guaranteed when specifying many fields in one CollectionDs1Sort object. */
export type CollectionDs1Sort = {
  bookmarkCount?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type CollectionDs1UpdateInput = {
  bookmarkCount?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionDs1Where = {
  AND?: InputMaybe<Array<CollectionDs1Where>>;
  NOT?: InputMaybe<CollectionDs1Where>;
  OR?: InputMaybe<Array<CollectionDs1Where>>;
  bookmarkCount?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_GT?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_GTE?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  bookmarkCount_LT?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_LTE?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionDs1sConnection = {
  __typename?: 'CollectionDs1sConnection';
  edges: Array<CollectionDs1Edge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  cursor: Scalars['String']['output'];
  node: Collection;
};

export type CollectionListDs1 = {
  __typename?: 'CollectionListDs1';
  collections?: Maybe<Array<CollectionDs1>>;
};

export type CollectionListDs1AggregateSelection = {
  __typename?: 'CollectionListDs1AggregateSelection';
  count: Scalars['Int']['output'];
};

export type CollectionListDs1CreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CollectionListDs1Edge = {
  __typename?: 'CollectionListDs1Edge';
  cursor: Scalars['String']['output'];
  node: CollectionListDs1;
};

export type CollectionListDs1Options = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type CollectionListDs1UpdateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CollectionListDs1Where = {
  AND?: InputMaybe<Array<CollectionListDs1Where>>;
  NOT?: InputMaybe<CollectionListDs1Where>;
  OR?: InputMaybe<Array<CollectionListDs1Where>>;
};

export type CollectionListDs1sConnection = {
  __typename?: 'CollectionListDs1sConnection';
  edges: Array<CollectionListDs1Edge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CollectionMemberAggregateInput = {
  AND?: InputMaybe<Array<CollectionMemberAggregateInput>>;
  NOT?: InputMaybe<CollectionMemberAggregateInput>;
  OR?: InputMaybe<Array<CollectionMemberAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CollectionMemberNodeAggregationWhereInput>;
};

export type CollectionMemberConnectFieldInput = {
  connect?: InputMaybe<MemberConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<MemberConnectWhere>;
};

export type CollectionMemberConnectOrCreateFieldInput = {
  onCreate: CollectionMemberConnectOrCreateFieldInputOnCreate;
  where: MemberConnectOrCreateWhere;
};

export type CollectionMemberConnectOrCreateFieldInputOnCreate = {
  node: MemberOnCreateInput;
};

export type CollectionMemberConnection = {
  __typename?: 'CollectionMemberConnection';
  edges: Array<CollectionMemberRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CollectionMemberConnectionSort = {
  node?: InputMaybe<MemberSort>;
};

export type CollectionMemberConnectionWhere = {
  AND?: InputMaybe<Array<CollectionMemberConnectionWhere>>;
  NOT?: InputMaybe<CollectionMemberConnectionWhere>;
  OR?: InputMaybe<Array<CollectionMemberConnectionWhere>>;
  node?: InputMaybe<MemberWhere>;
};

export type CollectionMemberCreateFieldInput = {
  node: MemberCreateInput;
};

export type CollectionMemberDeleteFieldInput = {
  delete?: InputMaybe<MemberDeleteInput>;
  where?: InputMaybe<CollectionMemberConnectionWhere>;
};

export type CollectionMemberDisconnectFieldInput = {
  disconnect?: InputMaybe<MemberDisconnectInput>;
  where?: InputMaybe<CollectionMemberConnectionWhere>;
};

export type CollectionMemberFieldInput = {
  connect?: InputMaybe<CollectionMemberConnectFieldInput>;
  connectOrCreate?: InputMaybe<CollectionMemberConnectOrCreateFieldInput>;
  create?: InputMaybe<CollectionMemberCreateFieldInput>;
};

export type CollectionMemberMemberAggregationSelection = {
  __typename?: 'CollectionMemberMemberAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CollectionMemberMemberNodeAggregateSelection>;
};

export type CollectionMemberMemberNodeAggregateSelection = {
  __typename?: 'CollectionMemberMemberNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type CollectionMemberNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CollectionMemberNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CollectionMemberNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CollectionMemberNodeAggregationWhereInput>>;
};

export type CollectionMemberRelationship = {
  __typename?: 'CollectionMemberRelationship';
  cursor: Scalars['String']['output'];
  node: Member;
};

export type CollectionMemberUpdateConnectionInput = {
  node?: InputMaybe<MemberUpdateInput>;
};

export type CollectionMemberUpdateFieldInput = {
  connect?: InputMaybe<CollectionMemberConnectFieldInput>;
  connectOrCreate?: InputMaybe<CollectionMemberConnectOrCreateFieldInput>;
  create?: InputMaybe<CollectionMemberCreateFieldInput>;
  delete?: InputMaybe<CollectionMemberDeleteFieldInput>;
  disconnect?: InputMaybe<CollectionMemberDisconnectFieldInput>;
  update?: InputMaybe<CollectionMemberUpdateConnectionInput>;
  where?: InputMaybe<CollectionMemberConnectionWhere>;
};

export type CollectionOnCreateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CollectionSort objects to sort Collections by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CollectionSort>>;
};

export type CollectionParentMetaAggregateInput = {
  AND?: InputMaybe<Array<CollectionParentMetaAggregateInput>>;
  NOT?: InputMaybe<CollectionParentMetaAggregateInput>;
  OR?: InputMaybe<Array<CollectionParentMetaAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CollectionParentMetaNodeAggregationWhereInput>;
};

export type CollectionParentMetaNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CollectionParentMetaNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CollectionParentMetaNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CollectionParentMetaNodeAggregationWhereInput>>;
};

export type CollectionParentMetaParentMetaAggregationSelection = {
  __typename?: 'CollectionParentMetaParentMetaAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CollectionParentMetaParentMetaNodeAggregateSelection>;
};

export type CollectionParentMetaParentMetaNodeAggregateSelection = {
  __typename?: 'CollectionParentMetaParentMetaNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type CollectionRelationInput = {
  children?: InputMaybe<CollectionChildrenCreateFieldInput>;
  member?: InputMaybe<CollectionMemberCreateFieldInput>;
  parentMeta?: InputMaybe<ParentParentMetaCreateFieldInput>;
};

/** Fields to sort Collections by. The order in which sorts are applied is not guaranteed when specifying many fields in one CollectionSort object. */
export type CollectionSort = {
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type CollectionUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CollectionUpdateInput = {
  children?: InputMaybe<CollectionChildrenUpdateInput>;
  member?: InputMaybe<CollectionMemberUpdateFieldInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentMeta?: InputMaybe<ParentParentMetaUpdateFieldInput>;
};

export type CollectionWhere = {
  AND?: InputMaybe<Array<CollectionWhere>>;
  NOT?: InputMaybe<CollectionWhere>;
  OR?: InputMaybe<Array<CollectionWhere>>;
  /** Return Collections where all of the related ParentChildrenConnections match this filter */
  childrenConnection_ALL?: InputMaybe<ParentChildrenConnectionWhere>;
  /** Return Collections where none of the related ParentChildrenConnections match this filter */
  childrenConnection_NONE?: InputMaybe<ParentChildrenConnectionWhere>;
  /** Return Collections where one of the related ParentChildrenConnections match this filter */
  childrenConnection_SINGLE?: InputMaybe<ParentChildrenConnectionWhere>;
  /** Return Collections where some of the related ParentChildrenConnections match this filter */
  childrenConnection_SOME?: InputMaybe<ParentChildrenConnectionWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  member?: InputMaybe<MemberWhere>;
  memberAggregate?: InputMaybe<CollectionMemberAggregateInput>;
  memberConnection?: InputMaybe<CollectionMemberConnectionWhere>;
  memberConnection_NOT?: InputMaybe<CollectionMemberConnectionWhere>;
  member_NOT?: InputMaybe<MemberWhere>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  parentMeta?: InputMaybe<ParentMetaWhere>;
  parentMetaAggregate?: InputMaybe<CollectionParentMetaAggregateInput>;
  parentMetaConnection?: InputMaybe<ParentParentMetaConnectionWhere>;
  parentMetaConnection_NOT?: InputMaybe<ParentParentMetaConnectionWhere>;
  parentMeta_NOT?: InputMaybe<ParentMetaWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CollectionsConnection = {
  __typename?: 'CollectionsConnection';
  edges: Array<CollectionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CreateBookmarkDd1sMutationResponse = {
  __typename?: 'CreateBookmarkDd1sMutationResponse';
  bookmarkDd1s: Array<BookmarkDd1>;
  info: CreateInfo;
};

export type CreateBookmarkDlGeneral = {
  description?: InputMaybe<Scalars['String']['input']>;
  domainName: Scalars['String']['input'];
  iconUri?: InputMaybe<Scalars['String']['input']>;
  linkPath: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  urlScheme: Scalars['String']['input'];
};

export type CreateBookmarksMutationResponse = {
  __typename?: 'CreateBookmarksMutationResponse';
  bookmarks: Array<Bookmark>;
  info: CreateInfo;
};

export type CreateCollectionDs1sMutationResponse = {
  __typename?: 'CreateCollectionDs1sMutationResponse';
  collectionDs1s: Array<CollectionDs1>;
  info: CreateInfo;
};

export type CreateCollectionListDs1sMutationResponse = {
  __typename?: 'CreateCollectionListDs1sMutationResponse';
  collectionListDs1s: Array<CollectionListDs1>;
  info: CreateInfo;
};

export type CreateCollectionsMutationResponse = {
  __typename?: 'CreateCollectionsMutationResponse';
  collections: Array<Collection>;
  info: CreateInfo;
};

export type CreateFolderDd1sMutationResponse = {
  __typename?: 'CreateFolderDd1sMutationResponse';
  folderDd1s: Array<FolderDd1>;
  info: CreateInfo;
};

export type CreateFoldersMutationResponse = {
  __typename?: 'CreateFoldersMutationResponse';
  folders: Array<Folder>;
  info: CreateInfo;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: 'CreateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateMemberMetasMutationResponse = {
  __typename?: 'CreateMemberMetasMutationResponse';
  info: CreateInfo;
  memberMetas: Array<MemberMeta>;
};

export type CreateMembersMutationResponse = {
  __typename?: 'CreateMembersMutationResponse';
  info: CreateInfo;
  members: Array<Member>;
};

export type CreateParentMetasMutationResponse = {
  __typename?: 'CreateParentMetasMutationResponse';
  info: CreateInfo;
  parentMetas: Array<ParentMeta>;
};

export type CreateParentsChildrenMutationResponse = {
  __typename?: 'CreateParentsChildrenMutationResponse';
  info: CreateInfo;
  parentsChildren: Array<ParentsChildren>;
};

export type DateTimeAggregateSelectionNullable = {
  __typename?: 'DateTimeAggregateSelectionNullable';
  max?: Maybe<Scalars['DateTime']['output']>;
  min?: Maybe<Scalars['DateTime']['output']>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type Folder = Parent & {
  __typename?: 'Folder';
  children: Array<Child>;
  childrenConnection: ParentChildrenConnection;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Parent>;
  parentConnection: FolderParentConnection;
  parentMeta?: Maybe<ParentMeta>;
  parentMetaAggregate?: Maybe<FolderParentMetaParentMetaAggregationSelection>;
  parentMetaConnection: ParentParentMetaConnection;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type FolderChildrenArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<QueryOptions>;
  where?: InputMaybe<ChildWhere>;
};


export type FolderChildrenConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ParentChildrenConnectionWhere>;
};


export type FolderParentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ParentOptions>;
  where?: InputMaybe<ParentWhere>;
};


export type FolderParentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FolderParentConnectionSort>>;
  where?: InputMaybe<FolderParentConnectionWhere>;
};


export type FolderParentMetaArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ParentMetaOptions>;
  where?: InputMaybe<ParentMetaWhere>;
};


export type FolderParentMetaAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ParentMetaWhere>;
};


export type FolderParentMetaConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ParentParentMetaConnectionSort>>;
  where?: InputMaybe<ParentParentMetaConnectionWhere>;
};

export type FolderAggregateSelection = {
  __typename?: 'FolderAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type FolderChildrenConnectInput = {
  Bookmark?: InputMaybe<Array<ParentChildrenBookmarkConnectFieldInput>>;
  Folder?: InputMaybe<Array<ParentChildrenFolderConnectFieldInput>>;
};

export type FolderChildrenCreateFieldInput = {
  Bookmark?: InputMaybe<Array<ParentChildrenBookmarkCreateFieldInput>>;
  Folder?: InputMaybe<Array<ParentChildrenFolderCreateFieldInput>>;
};

export type FolderChildrenCreateInput = {
  Bookmark?: InputMaybe<ParentChildrenBookmarkFieldInput>;
  Folder?: InputMaybe<ParentChildrenFolderFieldInput>;
};

export type FolderChildrenDeleteInput = {
  Bookmark?: InputMaybe<Array<ParentChildrenBookmarkDeleteFieldInput>>;
  Folder?: InputMaybe<Array<ParentChildrenFolderDeleteFieldInput>>;
};

export type FolderChildrenDisconnectInput = {
  Bookmark?: InputMaybe<Array<ParentChildrenBookmarkDisconnectFieldInput>>;
  Folder?: InputMaybe<Array<ParentChildrenFolderDisconnectFieldInput>>;
};

export type FolderChildrenUpdateInput = {
  Bookmark?: InputMaybe<Array<ParentChildrenBookmarkUpdateFieldInput>>;
  Folder?: InputMaybe<Array<ParentChildrenFolderUpdateFieldInput>>;
};

export type FolderConnectInput = {
  children?: InputMaybe<FolderChildrenConnectInput>;
  parent?: InputMaybe<FolderParentConnectFieldInput>;
  parentMeta?: InputMaybe<ParentParentMetaConnectFieldInput>;
};

export type FolderConnectOrCreateInput = {
  children?: InputMaybe<ParentChildrenConnectOrCreateInput>;
  parentMeta?: InputMaybe<ParentParentMetaConnectOrCreateFieldInput>;
};

export type FolderConnectOrCreateWhere = {
  node: FolderUniqueWhere;
};

export type FolderConnectWhere = {
  node: FolderWhere;
};

export type FolderCreateInput = {
  children?: InputMaybe<FolderChildrenCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<FolderParentFieldInput>;
  parentMeta?: InputMaybe<ParentParentMetaFieldInput>;
};

export type FolderDd1 = {
  __typename?: 'FolderDd1';
  bookmarkCount?: Maybe<Scalars['Int']['output']>;
  children: Array<ChildDlGeneral>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type FolderDd1AggregateSelection = {
  __typename?: 'FolderDd1AggregateSelection';
  bookmarkCount: IntAggregateSelectionNullable;
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  type: StringAggregateSelectionNullable;
};

export type FolderDd1CreateInput = {
  bookmarkCount?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type FolderDd1Edge = {
  __typename?: 'FolderDd1Edge';
  cursor: Scalars['String']['output'];
  node: FolderDd1;
};

export type FolderDd1Options = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more FolderDd1Sort objects to sort FolderDd1s by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<FolderDd1Sort>>;
};

/** Fields to sort FolderDd1s by. The order in which sorts are applied is not guaranteed when specifying many fields in one FolderDd1Sort object. */
export type FolderDd1Sort = {
  bookmarkCount?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
};

export type FolderDd1UpdateInput = {
  bookmarkCount?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type FolderDd1Where = {
  AND?: InputMaybe<Array<FolderDd1Where>>;
  NOT?: InputMaybe<FolderDd1Where>;
  OR?: InputMaybe<Array<FolderDd1Where>>;
  bookmarkCount?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_GT?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_GTE?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  bookmarkCount_LT?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_LTE?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  type_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  type_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type FolderDd1sConnection = {
  __typename?: 'FolderDd1sConnection';
  edges: Array<FolderDd1Edge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FolderDeleteInput = {
  children?: InputMaybe<FolderChildrenDeleteInput>;
  parent?: InputMaybe<FolderParentDeleteFieldInput>;
  parentMeta?: InputMaybe<ParentParentMetaDeleteFieldInput>;
};

export type FolderDisconnectInput = {
  children?: InputMaybe<FolderChildrenDisconnectInput>;
  parent?: InputMaybe<FolderParentDisconnectFieldInput>;
  parentMeta?: InputMaybe<ParentParentMetaDisconnectFieldInput>;
};

export type FolderEdge = {
  __typename?: 'FolderEdge';
  cursor: Scalars['String']['output'];
  node: Folder;
};

export type FolderOnCreateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FolderOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more FolderSort objects to sort Folders by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<FolderSort>>;
};

export type FolderParentConnectFieldInput = {
  connect?: InputMaybe<ParentConnectInput>;
  where?: InputMaybe<ParentConnectWhere>;
};

export type FolderParentConnection = {
  __typename?: 'FolderParentConnection';
  edges: Array<FolderParentRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FolderParentConnectionSort = {
  node?: InputMaybe<ParentSort>;
};

export type FolderParentConnectionWhere = {
  AND?: InputMaybe<Array<FolderParentConnectionWhere>>;
  NOT?: InputMaybe<FolderParentConnectionWhere>;
  OR?: InputMaybe<Array<FolderParentConnectionWhere>>;
  node?: InputMaybe<ParentWhere>;
};

export type FolderParentCreateFieldInput = {
  node: ParentCreateInput;
};

export type FolderParentDeleteFieldInput = {
  delete?: InputMaybe<ParentDeleteInput>;
  where?: InputMaybe<FolderParentConnectionWhere>;
};

export type FolderParentDisconnectFieldInput = {
  disconnect?: InputMaybe<ParentDisconnectInput>;
  where?: InputMaybe<FolderParentConnectionWhere>;
};

export type FolderParentFieldInput = {
  connect?: InputMaybe<FolderParentConnectFieldInput>;
  create?: InputMaybe<FolderParentCreateFieldInput>;
};

export type FolderParentMetaAggregateInput = {
  AND?: InputMaybe<Array<FolderParentMetaAggregateInput>>;
  NOT?: InputMaybe<FolderParentMetaAggregateInput>;
  OR?: InputMaybe<Array<FolderParentMetaAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<FolderParentMetaNodeAggregationWhereInput>;
};

export type FolderParentMetaNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FolderParentMetaNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FolderParentMetaNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FolderParentMetaNodeAggregationWhereInput>>;
};

export type FolderParentMetaParentMetaAggregationSelection = {
  __typename?: 'FolderParentMetaParentMetaAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<FolderParentMetaParentMetaNodeAggregateSelection>;
};

export type FolderParentMetaParentMetaNodeAggregateSelection = {
  __typename?: 'FolderParentMetaParentMetaNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type FolderParentRelationship = {
  __typename?: 'FolderParentRelationship';
  cursor: Scalars['String']['output'];
  node: Parent;
};

export type FolderParentUpdateConnectionInput = {
  node?: InputMaybe<ParentUpdateInput>;
};

export type FolderParentUpdateFieldInput = {
  connect?: InputMaybe<FolderParentConnectFieldInput>;
  create?: InputMaybe<FolderParentCreateFieldInput>;
  delete?: InputMaybe<FolderParentDeleteFieldInput>;
  disconnect?: InputMaybe<FolderParentDisconnectFieldInput>;
  update?: InputMaybe<FolderParentUpdateConnectionInput>;
  where?: InputMaybe<FolderParentConnectionWhere>;
};

export type FolderRelationInput = {
  children?: InputMaybe<FolderChildrenCreateFieldInput>;
  parent?: InputMaybe<FolderParentCreateFieldInput>;
  parentMeta?: InputMaybe<ParentParentMetaCreateFieldInput>;
};

/** Fields to sort Folders by. The order in which sorts are applied is not guaranteed when specifying many fields in one FolderSort object. */
export type FolderSort = {
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type FolderUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type FolderUpdateInput = {
  children?: InputMaybe<FolderChildrenUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<FolderParentUpdateFieldInput>;
  parentMeta?: InputMaybe<ParentParentMetaUpdateFieldInput>;
};

export type FolderWhere = {
  AND?: InputMaybe<Array<FolderWhere>>;
  NOT?: InputMaybe<FolderWhere>;
  OR?: InputMaybe<Array<FolderWhere>>;
  /** Return Folders where all of the related ParentChildrenConnections match this filter */
  childrenConnection_ALL?: InputMaybe<ParentChildrenConnectionWhere>;
  /** Return Folders where none of the related ParentChildrenConnections match this filter */
  childrenConnection_NONE?: InputMaybe<ParentChildrenConnectionWhere>;
  /** Return Folders where one of the related ParentChildrenConnections match this filter */
  childrenConnection_SINGLE?: InputMaybe<ParentChildrenConnectionWhere>;
  /** Return Folders where some of the related ParentChildrenConnections match this filter */
  childrenConnection_SOME?: InputMaybe<ParentChildrenConnectionWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  parentConnection?: InputMaybe<FolderParentConnectionWhere>;
  parentConnection_NOT?: InputMaybe<FolderParentConnectionWhere>;
  parentMeta?: InputMaybe<ParentMetaWhere>;
  parentMetaAggregate?: InputMaybe<FolderParentMetaAggregateInput>;
  parentMetaConnection?: InputMaybe<ParentParentMetaConnectionWhere>;
  parentMetaConnection_NOT?: InputMaybe<ParentParentMetaConnectionWhere>;
  parentMeta_NOT?: InputMaybe<ParentMetaWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FoldersConnection = {
  __typename?: 'FoldersConnection';
  edges: Array<FolderEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID']['output'];
  shortest: Scalars['ID']['output'];
};

export type IntAggregateSelectionNonNullable = {
  __typename?: 'IntAggregateSelectionNonNullable';
  average: Scalars['Float']['output'];
  max: Scalars['Int']['output'];
  min: Scalars['Int']['output'];
  sum: Scalars['Int']['output'];
};

export type IntAggregateSelectionNullable = {
  __typename?: 'IntAggregateSelectionNullable';
  average?: Maybe<Scalars['Float']['output']>;
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  sum?: Maybe<Scalars['Int']['output']>;
};

export type Member = {
  __typename?: 'Member';
  collections: Array<Collection>;
  collectionsAggregate?: Maybe<MemberCollectionCollectionsAggregationSelection>;
  collectionsConnection: MemberCollectionsConnection;
  id: Scalars['ID']['output'];
  memberMeta?: Maybe<MemberMeta>;
  memberMetaAggregate?: Maybe<MemberMemberMetaMemberMetaAggregationSelection>;
  memberMetaConnection: MemberMemberMetaConnection;
};


export type MemberCollectionsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CollectionOptions>;
  where?: InputMaybe<CollectionWhere>;
};


export type MemberCollectionsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CollectionWhere>;
};


export type MemberCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MemberCollectionsConnectionSort>>;
  where?: InputMaybe<MemberCollectionsConnectionWhere>;
};


export type MemberMemberMetaArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<MemberMetaOptions>;
  where?: InputMaybe<MemberMetaWhere>;
};


export type MemberMemberMetaAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MemberMetaWhere>;
};


export type MemberMemberMetaConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MemberMemberMetaConnectionSort>>;
  where?: InputMaybe<MemberMemberMetaConnectionWhere>;
};

export type MemberAggregateSelection = {
  __typename?: 'MemberAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
};

export type MemberCollectionCollectionsAggregationSelection = {
  __typename?: 'MemberCollectionCollectionsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MemberCollectionCollectionsNodeAggregateSelection>;
};

export type MemberCollectionCollectionsNodeAggregateSelection = {
  __typename?: 'MemberCollectionCollectionsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type MemberCollectionsAggregateInput = {
  AND?: InputMaybe<Array<MemberCollectionsAggregateInput>>;
  NOT?: InputMaybe<MemberCollectionsAggregateInput>;
  OR?: InputMaybe<Array<MemberCollectionsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<MemberCollectionsNodeAggregationWhereInput>;
};

export type MemberCollectionsConnectFieldInput = {
  connect?: InputMaybe<Array<CollectionConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CollectionConnectWhere>;
};

export type MemberCollectionsConnectOrCreateFieldInput = {
  onCreate: MemberCollectionsConnectOrCreateFieldInputOnCreate;
  where: CollectionConnectOrCreateWhere;
};

export type MemberCollectionsConnectOrCreateFieldInputOnCreate = {
  node: CollectionOnCreateInput;
};

export type MemberCollectionsConnection = {
  __typename?: 'MemberCollectionsConnection';
  edges: Array<MemberCollectionsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MemberCollectionsConnectionSort = {
  node?: InputMaybe<CollectionSort>;
};

export type MemberCollectionsConnectionWhere = {
  AND?: InputMaybe<Array<MemberCollectionsConnectionWhere>>;
  NOT?: InputMaybe<MemberCollectionsConnectionWhere>;
  OR?: InputMaybe<Array<MemberCollectionsConnectionWhere>>;
  node?: InputMaybe<CollectionWhere>;
};

export type MemberCollectionsCreateFieldInput = {
  node: CollectionCreateInput;
};

export type MemberCollectionsDeleteFieldInput = {
  delete?: InputMaybe<CollectionDeleteInput>;
  where?: InputMaybe<MemberCollectionsConnectionWhere>;
};

export type MemberCollectionsDisconnectFieldInput = {
  disconnect?: InputMaybe<CollectionDisconnectInput>;
  where?: InputMaybe<MemberCollectionsConnectionWhere>;
};

export type MemberCollectionsFieldInput = {
  connect?: InputMaybe<Array<MemberCollectionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MemberCollectionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MemberCollectionsCreateFieldInput>>;
};

export type MemberCollectionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MemberCollectionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MemberCollectionsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MemberCollectionsNodeAggregationWhereInput>>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MemberCollectionsRelationship = {
  __typename?: 'MemberCollectionsRelationship';
  cursor: Scalars['String']['output'];
  node: Collection;
};

export type MemberCollectionsUpdateConnectionInput = {
  node?: InputMaybe<CollectionUpdateInput>;
};

export type MemberCollectionsUpdateFieldInput = {
  connect?: InputMaybe<Array<MemberCollectionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MemberCollectionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MemberCollectionsCreateFieldInput>>;
  delete?: InputMaybe<Array<MemberCollectionsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MemberCollectionsDisconnectFieldInput>>;
  update?: InputMaybe<MemberCollectionsUpdateConnectionInput>;
  where?: InputMaybe<MemberCollectionsConnectionWhere>;
};

export type MemberConnectInput = {
  collections?: InputMaybe<Array<MemberCollectionsConnectFieldInput>>;
  memberMeta?: InputMaybe<MemberMemberMetaConnectFieldInput>;
};

export type MemberConnectOrCreateInput = {
  collections?: InputMaybe<Array<MemberCollectionsConnectOrCreateFieldInput>>;
  memberMeta?: InputMaybe<MemberMemberMetaConnectOrCreateFieldInput>;
};

export type MemberConnectOrCreateWhere = {
  node: MemberUniqueWhere;
};

export type MemberConnectWhere = {
  node: MemberWhere;
};

export type MemberCreateInput = {
  collections?: InputMaybe<MemberCollectionsFieldInput>;
  memberMeta?: InputMaybe<MemberMemberMetaFieldInput>;
};

export type MemberDeleteInput = {
  collections?: InputMaybe<Array<MemberCollectionsDeleteFieldInput>>;
  memberMeta?: InputMaybe<MemberMemberMetaDeleteFieldInput>;
};

export type MemberDisconnectInput = {
  collections?: InputMaybe<Array<MemberCollectionsDisconnectFieldInput>>;
  memberMeta?: InputMaybe<MemberMemberMetaDisconnectFieldInput>;
};

export type MemberEdge = {
  __typename?: 'MemberEdge';
  cursor: Scalars['String']['output'];
  node: Member;
};

export type MemberMemberMetaAggregateInput = {
  AND?: InputMaybe<Array<MemberMemberMetaAggregateInput>>;
  NOT?: InputMaybe<MemberMemberMetaAggregateInput>;
  OR?: InputMaybe<Array<MemberMemberMetaAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<MemberMemberMetaNodeAggregationWhereInput>;
};

export type MemberMemberMetaConnectFieldInput = {
  connect?: InputMaybe<MemberMetaConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<MemberMetaConnectWhere>;
};

export type MemberMemberMetaConnectOrCreateFieldInput = {
  onCreate: MemberMemberMetaConnectOrCreateFieldInputOnCreate;
  where: MemberMetaConnectOrCreateWhere;
};

export type MemberMemberMetaConnectOrCreateFieldInputOnCreate = {
  node: MemberMetaOnCreateInput;
};

export type MemberMemberMetaConnection = {
  __typename?: 'MemberMemberMetaConnection';
  edges: Array<MemberMemberMetaRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MemberMemberMetaConnectionSort = {
  node?: InputMaybe<MemberMetaSort>;
};

export type MemberMemberMetaConnectionWhere = {
  AND?: InputMaybe<Array<MemberMemberMetaConnectionWhere>>;
  NOT?: InputMaybe<MemberMemberMetaConnectionWhere>;
  OR?: InputMaybe<Array<MemberMemberMetaConnectionWhere>>;
  node?: InputMaybe<MemberMetaWhere>;
};

export type MemberMemberMetaCreateFieldInput = {
  node: MemberMetaCreateInput;
};

export type MemberMemberMetaDeleteFieldInput = {
  delete?: InputMaybe<MemberMetaDeleteInput>;
  where?: InputMaybe<MemberMemberMetaConnectionWhere>;
};

export type MemberMemberMetaDisconnectFieldInput = {
  disconnect?: InputMaybe<MemberMetaDisconnectInput>;
  where?: InputMaybe<MemberMemberMetaConnectionWhere>;
};

export type MemberMemberMetaFieldInput = {
  connect?: InputMaybe<MemberMemberMetaConnectFieldInput>;
  connectOrCreate?: InputMaybe<MemberMemberMetaConnectOrCreateFieldInput>;
  create?: InputMaybe<MemberMemberMetaCreateFieldInput>;
};

export type MemberMemberMetaMemberMetaAggregationSelection = {
  __typename?: 'MemberMemberMetaMemberMetaAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MemberMemberMetaMemberMetaNodeAggregateSelection>;
};

export type MemberMemberMetaMemberMetaNodeAggregateSelection = {
  __typename?: 'MemberMemberMetaMemberMetaNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type MemberMemberMetaNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MemberMemberMetaNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MemberMemberMetaNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MemberMemberMetaNodeAggregationWhereInput>>;
};

export type MemberMemberMetaRelationship = {
  __typename?: 'MemberMemberMetaRelationship';
  cursor: Scalars['String']['output'];
  node: MemberMeta;
};

export type MemberMemberMetaUpdateConnectionInput = {
  node?: InputMaybe<MemberMetaUpdateInput>;
};

export type MemberMemberMetaUpdateFieldInput = {
  connect?: InputMaybe<MemberMemberMetaConnectFieldInput>;
  connectOrCreate?: InputMaybe<MemberMemberMetaConnectOrCreateFieldInput>;
  create?: InputMaybe<MemberMemberMetaCreateFieldInput>;
  delete?: InputMaybe<MemberMemberMetaDeleteFieldInput>;
  disconnect?: InputMaybe<MemberMemberMetaDisconnectFieldInput>;
  update?: InputMaybe<MemberMemberMetaUpdateConnectionInput>;
  where?: InputMaybe<MemberMemberMetaConnectionWhere>;
};

export type MemberMeta = {
  __typename?: 'MemberMeta';
  collectionPositions: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  member?: Maybe<Member>;
  memberAggregate?: Maybe<MemberMetaMemberMemberAggregationSelection>;
  memberConnection: MemberMetaMemberConnection;
};


export type MemberMetaMemberArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<MemberOptions>;
  where?: InputMaybe<MemberWhere>;
};


export type MemberMetaMemberAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MemberWhere>;
};


export type MemberMetaMemberConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MemberMetaMemberConnectionSort>>;
  where?: InputMaybe<MemberMetaMemberConnectionWhere>;
};

export type MemberMetaAggregateSelection = {
  __typename?: 'MemberMetaAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
};

export type MemberMetaConnectInput = {
  member?: InputMaybe<MemberMetaMemberConnectFieldInput>;
};

export type MemberMetaConnectOrCreateInput = {
  member?: InputMaybe<MemberMetaMemberConnectOrCreateFieldInput>;
};

export type MemberMetaConnectOrCreateWhere = {
  node: MemberMetaUniqueWhere;
};

export type MemberMetaConnectWhere = {
  node: MemberMetaWhere;
};

export type MemberMetaCreateInput = {
  collectionPositions: Array<Scalars['String']['input']>;
  member?: InputMaybe<MemberMetaMemberFieldInput>;
};

export type MemberMetaDeleteInput = {
  member?: InputMaybe<MemberMetaMemberDeleteFieldInput>;
};

export type MemberMetaDisconnectInput = {
  member?: InputMaybe<MemberMetaMemberDisconnectFieldInput>;
};

export type MemberMetaEdge = {
  __typename?: 'MemberMetaEdge';
  cursor: Scalars['String']['output'];
  node: MemberMeta;
};

export type MemberMetaMemberAggregateInput = {
  AND?: InputMaybe<Array<MemberMetaMemberAggregateInput>>;
  NOT?: InputMaybe<MemberMetaMemberAggregateInput>;
  OR?: InputMaybe<Array<MemberMetaMemberAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<MemberMetaMemberNodeAggregationWhereInput>;
};

export type MemberMetaMemberConnectFieldInput = {
  connect?: InputMaybe<MemberConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<MemberConnectWhere>;
};

export type MemberMetaMemberConnectOrCreateFieldInput = {
  onCreate: MemberMetaMemberConnectOrCreateFieldInputOnCreate;
  where: MemberConnectOrCreateWhere;
};

export type MemberMetaMemberConnectOrCreateFieldInputOnCreate = {
  node: MemberOnCreateInput;
};

export type MemberMetaMemberConnection = {
  __typename?: 'MemberMetaMemberConnection';
  edges: Array<MemberMetaMemberRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MemberMetaMemberConnectionSort = {
  node?: InputMaybe<MemberSort>;
};

export type MemberMetaMemberConnectionWhere = {
  AND?: InputMaybe<Array<MemberMetaMemberConnectionWhere>>;
  NOT?: InputMaybe<MemberMetaMemberConnectionWhere>;
  OR?: InputMaybe<Array<MemberMetaMemberConnectionWhere>>;
  node?: InputMaybe<MemberWhere>;
};

export type MemberMetaMemberCreateFieldInput = {
  node: MemberCreateInput;
};

export type MemberMetaMemberDeleteFieldInput = {
  delete?: InputMaybe<MemberDeleteInput>;
  where?: InputMaybe<MemberMetaMemberConnectionWhere>;
};

export type MemberMetaMemberDisconnectFieldInput = {
  disconnect?: InputMaybe<MemberDisconnectInput>;
  where?: InputMaybe<MemberMetaMemberConnectionWhere>;
};

export type MemberMetaMemberFieldInput = {
  connect?: InputMaybe<MemberMetaMemberConnectFieldInput>;
  connectOrCreate?: InputMaybe<MemberMetaMemberConnectOrCreateFieldInput>;
  create?: InputMaybe<MemberMetaMemberCreateFieldInput>;
};

export type MemberMetaMemberMemberAggregationSelection = {
  __typename?: 'MemberMetaMemberMemberAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MemberMetaMemberMemberNodeAggregateSelection>;
};

export type MemberMetaMemberMemberNodeAggregateSelection = {
  __typename?: 'MemberMetaMemberMemberNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type MemberMetaMemberNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MemberMetaMemberNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MemberMetaMemberNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MemberMetaMemberNodeAggregationWhereInput>>;
};

export type MemberMetaMemberRelationship = {
  __typename?: 'MemberMetaMemberRelationship';
  cursor: Scalars['String']['output'];
  node: Member;
};

export type MemberMetaMemberUpdateConnectionInput = {
  node?: InputMaybe<MemberUpdateInput>;
};

export type MemberMetaMemberUpdateFieldInput = {
  connect?: InputMaybe<MemberMetaMemberConnectFieldInput>;
  connectOrCreate?: InputMaybe<MemberMetaMemberConnectOrCreateFieldInput>;
  create?: InputMaybe<MemberMetaMemberCreateFieldInput>;
  delete?: InputMaybe<MemberMetaMemberDeleteFieldInput>;
  disconnect?: InputMaybe<MemberMetaMemberDisconnectFieldInput>;
  update?: InputMaybe<MemberMetaMemberUpdateConnectionInput>;
  where?: InputMaybe<MemberMetaMemberConnectionWhere>;
};

export type MemberMetaOnCreateInput = {
  collectionPositions: Array<Scalars['String']['input']>;
};

export type MemberMetaOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more MemberMetaSort objects to sort MemberMetas by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MemberMetaSort>>;
};

export type MemberMetaRelationInput = {
  member?: InputMaybe<MemberMetaMemberCreateFieldInput>;
};

/** Fields to sort MemberMetas by. The order in which sorts are applied is not guaranteed when specifying many fields in one MemberMetaSort object. */
export type MemberMetaSort = {
  id?: InputMaybe<SortDirection>;
};

export type MemberMetaUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MemberMetaUpdateInput = {
  collectionPositions?: InputMaybe<Array<Scalars['String']['input']>>;
  collectionPositions_POP?: InputMaybe<Scalars['Int']['input']>;
  collectionPositions_PUSH?: InputMaybe<Array<Scalars['String']['input']>>;
  member?: InputMaybe<MemberMetaMemberUpdateFieldInput>;
};

export type MemberMetaWhere = {
  AND?: InputMaybe<Array<MemberMetaWhere>>;
  NOT?: InputMaybe<MemberMetaWhere>;
  OR?: InputMaybe<Array<MemberMetaWhere>>;
  collectionPositions?: InputMaybe<Array<Scalars['String']['input']>>;
  collectionPositions_INCLUDES?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  member?: InputMaybe<MemberWhere>;
  memberAggregate?: InputMaybe<MemberMetaMemberAggregateInput>;
  memberConnection?: InputMaybe<MemberMetaMemberConnectionWhere>;
  memberConnection_NOT?: InputMaybe<MemberMetaMemberConnectionWhere>;
  member_NOT?: InputMaybe<MemberWhere>;
};

export type MemberMetasConnection = {
  __typename?: 'MemberMetasConnection';
  edges: Array<MemberMetaEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MemberOnCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MemberOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more MemberSort objects to sort Members by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MemberSort>>;
};

export type MemberRelationInput = {
  collections?: InputMaybe<Array<MemberCollectionsCreateFieldInput>>;
  memberMeta?: InputMaybe<MemberMemberMetaCreateFieldInput>;
};

/** Fields to sort Members by. The order in which sorts are applied is not guaranteed when specifying many fields in one MemberSort object. */
export type MemberSort = {
  id?: InputMaybe<SortDirection>;
};

export type MemberUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MemberUpdateInput = {
  collections?: InputMaybe<Array<MemberCollectionsUpdateFieldInput>>;
  memberMeta?: InputMaybe<MemberMemberMetaUpdateFieldInput>;
};

export type MemberWhere = {
  AND?: InputMaybe<Array<MemberWhere>>;
  NOT?: InputMaybe<MemberWhere>;
  OR?: InputMaybe<Array<MemberWhere>>;
  collectionsAggregate?: InputMaybe<MemberCollectionsAggregateInput>;
  /** Return Members where all of the related MemberCollectionsConnections match this filter */
  collectionsConnection_ALL?: InputMaybe<MemberCollectionsConnectionWhere>;
  /** Return Members where none of the related MemberCollectionsConnections match this filter */
  collectionsConnection_NONE?: InputMaybe<MemberCollectionsConnectionWhere>;
  /** Return Members where one of the related MemberCollectionsConnections match this filter */
  collectionsConnection_SINGLE?: InputMaybe<MemberCollectionsConnectionWhere>;
  /** Return Members where some of the related MemberCollectionsConnections match this filter */
  collectionsConnection_SOME?: InputMaybe<MemberCollectionsConnectionWhere>;
  /** Return Members where all of the related Collections match this filter */
  collections_ALL?: InputMaybe<CollectionWhere>;
  /** Return Members where none of the related Collections match this filter */
  collections_NONE?: InputMaybe<CollectionWhere>;
  /** Return Members where one of the related Collections match this filter */
  collections_SINGLE?: InputMaybe<CollectionWhere>;
  /** Return Members where some of the related Collections match this filter */
  collections_SOME?: InputMaybe<CollectionWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  memberMeta?: InputMaybe<MemberMetaWhere>;
  memberMetaAggregate?: InputMaybe<MemberMemberMetaAggregateInput>;
  memberMetaConnection?: InputMaybe<MemberMemberMetaConnectionWhere>;
  memberMetaConnection_NOT?: InputMaybe<MemberMemberMetaConnectionWhere>;
  memberMeta_NOT?: InputMaybe<MemberMetaWhere>;
};

export type MembersConnection = {
  __typename?: 'MembersConnection';
  edges: Array<MemberEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBookmarkDd1s: CreateBookmarkDd1sMutationResponse;
  createBookmarkDlGeneral?: Maybe<Scalars['ID']['output']>;
  createBookmarks: CreateBookmarksMutationResponse;
  createCollection?: Maybe<Scalars['ID']['output']>;
  createCollectionDs1s: CreateCollectionDs1sMutationResponse;
  createCollectionListDs1s: CreateCollectionListDs1sMutationResponse;
  createCollections: CreateCollectionsMutationResponse;
  createFolderDd1s: CreateFolderDd1sMutationResponse;
  createFolders: CreateFoldersMutationResponse;
  createMemberMetas: CreateMemberMetasMutationResponse;
  createMembers: CreateMembersMutationResponse;
  createParentMetas: CreateParentMetasMutationResponse;
  createParentsChildren: CreateParentsChildrenMutationResponse;
  deleteBookmark: Scalars['Int']['output'];
  deleteBookmarkDd1s: DeleteInfo;
  deleteBookmarks: DeleteInfo;
  deleteCascade?: Maybe<Scalars['Int']['output']>;
  deleteCollection: Scalars['Int']['output'];
  deleteCollectionDs1s: DeleteInfo;
  deleteCollectionListDs1s: DeleteInfo;
  deleteCollections: DeleteInfo;
  deleteFolder: Scalars['Int']['output'];
  deleteFolderDd1s: DeleteInfo;
  deleteFolders: DeleteInfo;
  deleteListCascade?: Maybe<Scalars['Int']['output']>;
  deleteMemberMetas: DeleteInfo;
  deleteMembers: DeleteInfo;
  deleteParentMetas: DeleteInfo;
  deleteParentsChildren: DeleteInfo;
  importFirefoxBookmarks?: Maybe<Scalars['Boolean']['output']>;
  updateBookmarkDd1s: UpdateBookmarkDd1sMutationResponse;
  updateBookmarks: UpdateBookmarksMutationResponse;
  updateCollectionDs1s: UpdateCollectionDs1sMutationResponse;
  updateCollectionListDs1s: UpdateCollectionListDs1sMutationResponse;
  updateCollections: UpdateCollectionsMutationResponse;
  updateFolderDd1s: UpdateFolderDd1sMutationResponse;
  updateFolders: UpdateFoldersMutationResponse;
  updateMemberMetas: UpdateMemberMetasMutationResponse;
  updateMembers: UpdateMembersMutationResponse;
  updateParentMetas: UpdateParentMetasMutationResponse;
  updateParentsChildren: UpdateParentsChildrenMutationResponse;
};


export type MutationCreateBookmarkDd1sArgs = {
  input: Array<BookmarkDd1CreateInput>;
};


export type MutationCreateBookmarkDlGeneralArgs = {
  data: CreateBookmarkDlGeneral;
};


export type MutationCreateBookmarksArgs = {
  input: Array<BookmarkCreateInput>;
};


export type MutationCreateCollectionArgs = {
  memberId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateCollectionDs1sArgs = {
  input: Array<CollectionDs1CreateInput>;
};


export type MutationCreateCollectionListDs1sArgs = {
  input: Array<CollectionListDs1CreateInput>;
};


export type MutationCreateCollectionsArgs = {
  input: Array<CollectionCreateInput>;
};


export type MutationCreateFolderDd1sArgs = {
  input: Array<FolderDd1CreateInput>;
};


export type MutationCreateFoldersArgs = {
  input: Array<FolderCreateInput>;
};


export type MutationCreateMemberMetasArgs = {
  input: Array<MemberMetaCreateInput>;
};


export type MutationCreateMembersArgs = {
  input: Array<MemberCreateInput>;
};


export type MutationCreateParentMetasArgs = {
  input: Array<ParentMetaCreateInput>;
};


export type MutationCreateParentsChildrenArgs = {
  input: Array<ParentsChildrenCreateInput>;
};


export type MutationDeleteBookmarkArgs = {
  id: Scalars['ID']['input'];
  parentId: Scalars['ID']['input'];
};


export type MutationDeleteBookmarkDd1sArgs = {
  where?: InputMaybe<BookmarkDd1Where>;
};


export type MutationDeleteBookmarksArgs = {
  delete?: InputMaybe<BookmarkDeleteInput>;
  where?: InputMaybe<BookmarkWhere>;
};


export type MutationDeleteCascadeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ID']['input'];
  memberId: Scalars['ID']['input'];
};


export type MutationDeleteCollectionDs1sArgs = {
  where?: InputMaybe<CollectionDs1Where>;
};


export type MutationDeleteCollectionListDs1sArgs = {
  where?: InputMaybe<CollectionListDs1Where>;
};


export type MutationDeleteCollectionsArgs = {
  delete?: InputMaybe<CollectionDeleteInput>;
  where?: InputMaybe<CollectionWhere>;
};


export type MutationDeleteFolderArgs = {
  id: Scalars['ID']['input'];
  parentId: Scalars['ID']['input'];
};


export type MutationDeleteFolderDd1sArgs = {
  where?: InputMaybe<FolderDd1Where>;
};


export type MutationDeleteFoldersArgs = {
  delete?: InputMaybe<FolderDeleteInput>;
  where?: InputMaybe<FolderWhere>;
};


export type MutationDeleteListCascadeArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteMemberMetasArgs = {
  delete?: InputMaybe<MemberMetaDeleteInput>;
  where?: InputMaybe<MemberMetaWhere>;
};


export type MutationDeleteMembersArgs = {
  delete?: InputMaybe<MemberDeleteInput>;
  where?: InputMaybe<MemberWhere>;
};


export type MutationDeleteParentMetasArgs = {
  delete?: InputMaybe<ParentMetaDeleteInput>;
  where?: InputMaybe<ParentMetaWhere>;
};


export type MutationDeleteParentsChildrenArgs = {
  where?: InputMaybe<ParentsChildrenWhere>;
};


export type MutationImportFirefoxBookmarksArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUpdateBookmarkDd1sArgs = {
  update?: InputMaybe<BookmarkDd1UpdateInput>;
  where?: InputMaybe<BookmarkDd1Where>;
};


export type MutationUpdateBookmarksArgs = {
  connect?: InputMaybe<BookmarkConnectInput>;
  create?: InputMaybe<BookmarkRelationInput>;
  delete?: InputMaybe<BookmarkDeleteInput>;
  disconnect?: InputMaybe<BookmarkDisconnectInput>;
  update?: InputMaybe<BookmarkUpdateInput>;
  where?: InputMaybe<BookmarkWhere>;
};


export type MutationUpdateCollectionDs1sArgs = {
  update?: InputMaybe<CollectionDs1UpdateInput>;
  where?: InputMaybe<CollectionDs1Where>;
};


export type MutationUpdateCollectionListDs1sArgs = {
  update?: InputMaybe<CollectionListDs1UpdateInput>;
  where?: InputMaybe<CollectionListDs1Where>;
};


export type MutationUpdateCollectionsArgs = {
  connect?: InputMaybe<CollectionConnectInput>;
  connectOrCreate?: InputMaybe<CollectionConnectOrCreateInput>;
  create?: InputMaybe<CollectionRelationInput>;
  delete?: InputMaybe<CollectionDeleteInput>;
  disconnect?: InputMaybe<CollectionDisconnectInput>;
  update?: InputMaybe<CollectionUpdateInput>;
  where?: InputMaybe<CollectionWhere>;
};


export type MutationUpdateFolderDd1sArgs = {
  update?: InputMaybe<FolderDd1UpdateInput>;
  where?: InputMaybe<FolderDd1Where>;
};


export type MutationUpdateFoldersArgs = {
  connect?: InputMaybe<FolderConnectInput>;
  connectOrCreate?: InputMaybe<FolderConnectOrCreateInput>;
  create?: InputMaybe<FolderRelationInput>;
  delete?: InputMaybe<FolderDeleteInput>;
  disconnect?: InputMaybe<FolderDisconnectInput>;
  update?: InputMaybe<FolderUpdateInput>;
  where?: InputMaybe<FolderWhere>;
};


export type MutationUpdateMemberMetasArgs = {
  connect?: InputMaybe<MemberMetaConnectInput>;
  connectOrCreate?: InputMaybe<MemberMetaConnectOrCreateInput>;
  create?: InputMaybe<MemberMetaRelationInput>;
  delete?: InputMaybe<MemberMetaDeleteInput>;
  disconnect?: InputMaybe<MemberMetaDisconnectInput>;
  update?: InputMaybe<MemberMetaUpdateInput>;
  where?: InputMaybe<MemberMetaWhere>;
};


export type MutationUpdateMembersArgs = {
  connect?: InputMaybe<MemberConnectInput>;
  connectOrCreate?: InputMaybe<MemberConnectOrCreateInput>;
  create?: InputMaybe<MemberRelationInput>;
  delete?: InputMaybe<MemberDeleteInput>;
  disconnect?: InputMaybe<MemberDisconnectInput>;
  update?: InputMaybe<MemberUpdateInput>;
  where?: InputMaybe<MemberWhere>;
};


export type MutationUpdateParentMetasArgs = {
  connect?: InputMaybe<ParentMetaConnectInput>;
  create?: InputMaybe<ParentMetaRelationInput>;
  delete?: InputMaybe<ParentMetaDeleteInput>;
  disconnect?: InputMaybe<ParentMetaDisconnectInput>;
  update?: InputMaybe<ParentMetaUpdateInput>;
  where?: InputMaybe<ParentMetaWhere>;
};


export type MutationUpdateParentsChildrenArgs = {
  update?: InputMaybe<ParentsChildrenUpdateInput>;
  where?: InputMaybe<ParentsChildrenWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Parent = {
  children: Array<Child>;
  childrenConnection: ParentChildrenConnection;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  parentMeta?: Maybe<ParentMeta>;
  parentMetaConnection: ParentParentMetaConnection;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ParentChildrenArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<QueryOptions>;
  where?: InputMaybe<ChildWhere>;
};


export type ParentChildrenConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ParentChildrenConnectionWhere>;
};


export type ParentParentMetaArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ParentMetaOptions>;
  where?: InputMaybe<ParentMetaWhere>;
};


export type ParentParentMetaConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ParentParentMetaConnectionSort>>;
  where?: InputMaybe<ParentParentMetaConnectionWhere>;
};

export type ParentChildrenBookmarkConnectFieldInput = {
  connect?: InputMaybe<Array<BookmarkConnectInput>>;
  where?: InputMaybe<BookmarkConnectWhere>;
};

export type ParentChildrenBookmarkConnectOrCreateFieldInput = {
  onCreate: ParentChildrenBookmarkConnectOrCreateFieldInputOnCreate;
  where: BookmarkConnectOrCreateWhere;
};

export type ParentChildrenBookmarkConnectOrCreateFieldInputOnCreate = {
  node: BookmarkOnCreateInput;
};

export type ParentChildrenBookmarkConnectionWhere = {
  AND?: InputMaybe<Array<ParentChildrenBookmarkConnectionWhere>>;
  NOT?: InputMaybe<ParentChildrenBookmarkConnectionWhere>;
  OR?: InputMaybe<Array<ParentChildrenBookmarkConnectionWhere>>;
  node?: InputMaybe<BookmarkWhere>;
};

export type ParentChildrenBookmarkCreateFieldInput = {
  node: BookmarkCreateInput;
};

export type ParentChildrenBookmarkDeleteFieldInput = {
  delete?: InputMaybe<BookmarkDeleteInput>;
  where?: InputMaybe<ParentChildrenBookmarkConnectionWhere>;
};

export type ParentChildrenBookmarkDisconnectFieldInput = {
  disconnect?: InputMaybe<BookmarkDisconnectInput>;
  where?: InputMaybe<ParentChildrenBookmarkConnectionWhere>;
};

export type ParentChildrenBookmarkFieldInput = {
  connect?: InputMaybe<Array<ParentChildrenBookmarkConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ParentChildrenBookmarkConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ParentChildrenBookmarkCreateFieldInput>>;
};

export type ParentChildrenBookmarkUpdateConnectionInput = {
  node?: InputMaybe<BookmarkUpdateInput>;
};

export type ParentChildrenBookmarkUpdateFieldInput = {
  connect?: InputMaybe<Array<ParentChildrenBookmarkConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ParentChildrenBookmarkConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ParentChildrenBookmarkCreateFieldInput>>;
  delete?: InputMaybe<Array<ParentChildrenBookmarkDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ParentChildrenBookmarkDisconnectFieldInput>>;
  update?: InputMaybe<ParentChildrenBookmarkUpdateConnectionInput>;
  where?: InputMaybe<ParentChildrenBookmarkConnectionWhere>;
};

export type ParentChildrenConnectInput = {
  Bookmark?: InputMaybe<Array<ParentChildrenBookmarkConnectFieldInput>>;
  Folder?: InputMaybe<Array<ParentChildrenFolderConnectFieldInput>>;
};

export type ParentChildrenConnectOrCreateInput = {
  Bookmark?: InputMaybe<Array<ParentChildrenBookmarkConnectOrCreateFieldInput>>;
  Folder?: InputMaybe<Array<ParentChildrenFolderConnectOrCreateFieldInput>>;
};

export type ParentChildrenConnection = {
  __typename?: 'ParentChildrenConnection';
  edges: Array<ParentChildrenRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ParentChildrenConnectionWhere = {
  Bookmark?: InputMaybe<ParentChildrenBookmarkConnectionWhere>;
  Folder?: InputMaybe<ParentChildrenFolderConnectionWhere>;
};

export type ParentChildrenDeleteInput = {
  Bookmark?: InputMaybe<Array<ParentChildrenBookmarkDeleteFieldInput>>;
  Folder?: InputMaybe<Array<ParentChildrenFolderDeleteFieldInput>>;
};

export type ParentChildrenDisconnectInput = {
  Bookmark?: InputMaybe<Array<ParentChildrenBookmarkDisconnectFieldInput>>;
  Folder?: InputMaybe<Array<ParentChildrenFolderDisconnectFieldInput>>;
};

export type ParentChildrenFolderConnectFieldInput = {
  connect?: InputMaybe<Array<FolderConnectInput>>;
  where?: InputMaybe<FolderConnectWhere>;
};

export type ParentChildrenFolderConnectOrCreateFieldInput = {
  onCreate: ParentChildrenFolderConnectOrCreateFieldInputOnCreate;
  where: FolderConnectOrCreateWhere;
};

export type ParentChildrenFolderConnectOrCreateFieldInputOnCreate = {
  node: FolderOnCreateInput;
};

export type ParentChildrenFolderConnectionWhere = {
  AND?: InputMaybe<Array<ParentChildrenFolderConnectionWhere>>;
  NOT?: InputMaybe<ParentChildrenFolderConnectionWhere>;
  OR?: InputMaybe<Array<ParentChildrenFolderConnectionWhere>>;
  node?: InputMaybe<FolderWhere>;
};

export type ParentChildrenFolderCreateFieldInput = {
  node: FolderCreateInput;
};

export type ParentChildrenFolderDeleteFieldInput = {
  delete?: InputMaybe<FolderDeleteInput>;
  where?: InputMaybe<ParentChildrenFolderConnectionWhere>;
};

export type ParentChildrenFolderDisconnectFieldInput = {
  disconnect?: InputMaybe<FolderDisconnectInput>;
  where?: InputMaybe<ParentChildrenFolderConnectionWhere>;
};

export type ParentChildrenFolderFieldInput = {
  connect?: InputMaybe<Array<ParentChildrenFolderConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ParentChildrenFolderConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ParentChildrenFolderCreateFieldInput>>;
};

export type ParentChildrenFolderUpdateConnectionInput = {
  node?: InputMaybe<FolderUpdateInput>;
};

export type ParentChildrenFolderUpdateFieldInput = {
  connect?: InputMaybe<Array<ParentChildrenFolderConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ParentChildrenFolderConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ParentChildrenFolderCreateFieldInput>>;
  delete?: InputMaybe<Array<ParentChildrenFolderDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ParentChildrenFolderDisconnectFieldInput>>;
  update?: InputMaybe<ParentChildrenFolderUpdateConnectionInput>;
  where?: InputMaybe<ParentChildrenFolderConnectionWhere>;
};

export type ParentChildrenRelationship = {
  __typename?: 'ParentChildrenRelationship';
  cursor: Scalars['String']['output'];
  node: Child;
};

export type ParentChildrenUpdateInput = {
  Bookmark?: InputMaybe<Array<ParentChildrenBookmarkUpdateFieldInput>>;
  Folder?: InputMaybe<Array<ParentChildrenFolderUpdateFieldInput>>;
};

export type ParentConnectInput = {
  _on?: InputMaybe<ParentImplementationsConnectInput>;
  children?: InputMaybe<ParentChildrenConnectInput>;
  parentMeta?: InputMaybe<ParentParentMetaConnectFieldInput>;
};

export type ParentConnectWhere = {
  node: ParentWhere;
};

export type ParentCreateInput = {
  Collection?: InputMaybe<CollectionCreateInput>;
  Folder?: InputMaybe<FolderCreateInput>;
};

export type ParentDeleteInput = {
  _on?: InputMaybe<ParentImplementationsDeleteInput>;
  children?: InputMaybe<ParentChildrenDeleteInput>;
  parentMeta?: InputMaybe<ParentParentMetaDeleteFieldInput>;
};

export type ParentDisconnectInput = {
  _on?: InputMaybe<ParentImplementationsDisconnectInput>;
  children?: InputMaybe<ParentChildrenDisconnectInput>;
  parentMeta?: InputMaybe<ParentParentMetaDisconnectFieldInput>;
};

export type ParentImplementationsConnectInput = {
  Collection?: InputMaybe<Array<CollectionConnectInput>>;
  Folder?: InputMaybe<Array<FolderConnectInput>>;
};

export type ParentImplementationsDeleteInput = {
  Collection?: InputMaybe<Array<CollectionDeleteInput>>;
  Folder?: InputMaybe<Array<FolderDeleteInput>>;
};

export type ParentImplementationsDisconnectInput = {
  Collection?: InputMaybe<Array<CollectionDisconnectInput>>;
  Folder?: InputMaybe<Array<FolderDisconnectInput>>;
};

export type ParentImplementationsUpdateInput = {
  Collection?: InputMaybe<CollectionUpdateInput>;
  Folder?: InputMaybe<FolderUpdateInput>;
};

export type ParentImplementationsWhere = {
  Collection?: InputMaybe<CollectionWhere>;
  Folder?: InputMaybe<FolderWhere>;
};

export type ParentMeta = {
  __typename?: 'ParentMeta';
  childPositions: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  parent?: Maybe<Parent>;
  parentConnection: ParentMetaParentConnection;
};


export type ParentMetaParentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ParentOptions>;
  where?: InputMaybe<ParentWhere>;
};


export type ParentMetaParentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ParentMetaParentConnectionSort>>;
  where?: InputMaybe<ParentMetaParentConnectionWhere>;
};

export type ParentMetaAggregateSelection = {
  __typename?: 'ParentMetaAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
};

export type ParentMetaConnectInput = {
  parent?: InputMaybe<ParentMetaParentConnectFieldInput>;
};

export type ParentMetaConnectOrCreateWhere = {
  node: ParentMetaUniqueWhere;
};

export type ParentMetaConnectWhere = {
  node: ParentMetaWhere;
};

export type ParentMetaCreateInput = {
  childPositions: Array<Scalars['String']['input']>;
  parent?: InputMaybe<ParentMetaParentFieldInput>;
};

export type ParentMetaDeleteInput = {
  parent?: InputMaybe<ParentMetaParentDeleteFieldInput>;
};

export type ParentMetaDisconnectInput = {
  parent?: InputMaybe<ParentMetaParentDisconnectFieldInput>;
};

export type ParentMetaEdge = {
  __typename?: 'ParentMetaEdge';
  cursor: Scalars['String']['output'];
  node: ParentMeta;
};

export type ParentMetaOnCreateInput = {
  childPositions: Array<Scalars['String']['input']>;
};

export type ParentMetaOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ParentMetaSort objects to sort ParentMetas by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ParentMetaSort>>;
};

export type ParentMetaParentConnectFieldInput = {
  connect?: InputMaybe<ParentConnectInput>;
  where?: InputMaybe<ParentConnectWhere>;
};

export type ParentMetaParentConnection = {
  __typename?: 'ParentMetaParentConnection';
  edges: Array<ParentMetaParentRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ParentMetaParentConnectionSort = {
  node?: InputMaybe<ParentSort>;
};

export type ParentMetaParentConnectionWhere = {
  AND?: InputMaybe<Array<ParentMetaParentConnectionWhere>>;
  NOT?: InputMaybe<ParentMetaParentConnectionWhere>;
  OR?: InputMaybe<Array<ParentMetaParentConnectionWhere>>;
  node?: InputMaybe<ParentWhere>;
};

export type ParentMetaParentCreateFieldInput = {
  node: ParentCreateInput;
};

export type ParentMetaParentDeleteFieldInput = {
  delete?: InputMaybe<ParentDeleteInput>;
  where?: InputMaybe<ParentMetaParentConnectionWhere>;
};

export type ParentMetaParentDisconnectFieldInput = {
  disconnect?: InputMaybe<ParentDisconnectInput>;
  where?: InputMaybe<ParentMetaParentConnectionWhere>;
};

export type ParentMetaParentFieldInput = {
  connect?: InputMaybe<ParentMetaParentConnectFieldInput>;
  create?: InputMaybe<ParentMetaParentCreateFieldInput>;
};

export type ParentMetaParentRelationship = {
  __typename?: 'ParentMetaParentRelationship';
  cursor: Scalars['String']['output'];
  node: Parent;
};

export type ParentMetaParentUpdateConnectionInput = {
  node?: InputMaybe<ParentUpdateInput>;
};

export type ParentMetaParentUpdateFieldInput = {
  connect?: InputMaybe<ParentMetaParentConnectFieldInput>;
  create?: InputMaybe<ParentMetaParentCreateFieldInput>;
  delete?: InputMaybe<ParentMetaParentDeleteFieldInput>;
  disconnect?: InputMaybe<ParentMetaParentDisconnectFieldInput>;
  update?: InputMaybe<ParentMetaParentUpdateConnectionInput>;
  where?: InputMaybe<ParentMetaParentConnectionWhere>;
};

export type ParentMetaRelationInput = {
  parent?: InputMaybe<ParentMetaParentCreateFieldInput>;
};

/** Fields to sort ParentMetas by. The order in which sorts are applied is not guaranteed when specifying many fields in one ParentMetaSort object. */
export type ParentMetaSort = {
  id?: InputMaybe<SortDirection>;
};

export type ParentMetaUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ParentMetaUpdateInput = {
  childPositions?: InputMaybe<Array<Scalars['String']['input']>>;
  childPositions_POP?: InputMaybe<Scalars['Int']['input']>;
  childPositions_PUSH?: InputMaybe<Array<Scalars['String']['input']>>;
  parent?: InputMaybe<ParentMetaParentUpdateFieldInput>;
};

export type ParentMetaWhere = {
  AND?: InputMaybe<Array<ParentMetaWhere>>;
  NOT?: InputMaybe<ParentMetaWhere>;
  OR?: InputMaybe<Array<ParentMetaWhere>>;
  childPositions?: InputMaybe<Array<Scalars['String']['input']>>;
  childPositions_INCLUDES?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  parentConnection?: InputMaybe<ParentMetaParentConnectionWhere>;
  parentConnection_NOT?: InputMaybe<ParentMetaParentConnectionWhere>;
};

export type ParentMetasConnection = {
  __typename?: 'ParentMetasConnection';
  edges: Array<ParentMetaEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ParentOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ParentSort objects to sort Parents by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<ParentSort>>>;
};

export type ParentParentMetaAggregateInput = {
  AND?: InputMaybe<Array<ParentParentMetaAggregateInput>>;
  NOT?: InputMaybe<ParentParentMetaAggregateInput>;
  OR?: InputMaybe<Array<ParentParentMetaAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ParentParentMetaNodeAggregationWhereInput>;
};

export type ParentParentMetaConnectFieldInput = {
  connect?: InputMaybe<ParentMetaConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ParentMetaConnectWhere>;
};

export type ParentParentMetaConnectOrCreateFieldInput = {
  onCreate: ParentParentMetaConnectOrCreateFieldInputOnCreate;
  where: ParentMetaConnectOrCreateWhere;
};

export type ParentParentMetaConnectOrCreateFieldInputOnCreate = {
  node: ParentMetaOnCreateInput;
};

export type ParentParentMetaConnection = {
  __typename?: 'ParentParentMetaConnection';
  edges: Array<ParentParentMetaRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ParentParentMetaConnectionSort = {
  node?: InputMaybe<ParentMetaSort>;
};

export type ParentParentMetaConnectionWhere = {
  AND?: InputMaybe<Array<ParentParentMetaConnectionWhere>>;
  NOT?: InputMaybe<ParentParentMetaConnectionWhere>;
  OR?: InputMaybe<Array<ParentParentMetaConnectionWhere>>;
  node?: InputMaybe<ParentMetaWhere>;
};

export type ParentParentMetaCreateFieldInput = {
  node: ParentMetaCreateInput;
};

export type ParentParentMetaDeleteFieldInput = {
  delete?: InputMaybe<ParentMetaDeleteInput>;
  where?: InputMaybe<ParentParentMetaConnectionWhere>;
};

export type ParentParentMetaDisconnectFieldInput = {
  disconnect?: InputMaybe<ParentMetaDisconnectInput>;
  where?: InputMaybe<ParentParentMetaConnectionWhere>;
};

export type ParentParentMetaFieldInput = {
  connect?: InputMaybe<ParentParentMetaConnectFieldInput>;
  connectOrCreate?: InputMaybe<ParentParentMetaConnectOrCreateFieldInput>;
  create?: InputMaybe<ParentParentMetaCreateFieldInput>;
};

export type ParentParentMetaNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ParentParentMetaNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ParentParentMetaNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ParentParentMetaNodeAggregationWhereInput>>;
};

export type ParentParentMetaRelationship = {
  __typename?: 'ParentParentMetaRelationship';
  cursor: Scalars['String']['output'];
  node: ParentMeta;
};

export type ParentParentMetaUpdateConnectionInput = {
  node?: InputMaybe<ParentMetaUpdateInput>;
};

export type ParentParentMetaUpdateFieldInput = {
  connect?: InputMaybe<ParentParentMetaConnectFieldInput>;
  connectOrCreate?: InputMaybe<ParentParentMetaConnectOrCreateFieldInput>;
  create?: InputMaybe<ParentParentMetaCreateFieldInput>;
  delete?: InputMaybe<ParentParentMetaDeleteFieldInput>;
  disconnect?: InputMaybe<ParentParentMetaDisconnectFieldInput>;
  update?: InputMaybe<ParentParentMetaUpdateConnectionInput>;
  where?: InputMaybe<ParentParentMetaConnectionWhere>;
};

/** Fields to sort Parents by. The order in which sorts are applied is not guaranteed when specifying many fields in one ParentSort object. */
export type ParentSort = {
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type ParentUpdateInput = {
  _on?: InputMaybe<ParentImplementationsUpdateInput>;
  children?: InputMaybe<ParentChildrenUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentMeta?: InputMaybe<ParentParentMetaUpdateFieldInput>;
};

export type ParentWhere = {
  _on?: InputMaybe<ParentImplementationsWhere>;
  /** Return Parents where all of the related ParentChildrenConnections match this filter */
  childrenConnection_ALL?: InputMaybe<ParentChildrenConnectionWhere>;
  /** Return Parents where none of the related ParentChildrenConnections match this filter */
  childrenConnection_NONE?: InputMaybe<ParentChildrenConnectionWhere>;
  /** Return Parents where one of the related ParentChildrenConnections match this filter */
  childrenConnection_SINGLE?: InputMaybe<ParentChildrenConnectionWhere>;
  /** Return Parents where some of the related ParentChildrenConnections match this filter */
  childrenConnection_SOME?: InputMaybe<ParentChildrenConnectionWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  parentMeta?: InputMaybe<ParentMetaWhere>;
  parentMetaAggregate?: InputMaybe<ParentParentMetaAggregateInput>;
  parentMetaConnection?: InputMaybe<ParentParentMetaConnectionWhere>;
  parentMetaConnection_NOT?: InputMaybe<ParentParentMetaConnectionWhere>;
  parentMeta_NOT?: InputMaybe<ParentMetaWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ParentsChildren = {
  __typename?: 'ParentsChildren';
  children: Array<ChildDlGeneral>;
  id: Scalars['ID']['output'];
};

export type ParentsChildrenAggregateSelection = {
  __typename?: 'ParentsChildrenAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
};

export type ParentsChildrenConnection = {
  __typename?: 'ParentsChildrenConnection';
  edges: Array<ParentsChildrenEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ParentsChildrenCreateInput = {
  id: Scalars['ID']['input'];
};

export type ParentsChildrenEdge = {
  __typename?: 'ParentsChildrenEdge';
  cursor: Scalars['String']['output'];
  node: ParentsChildren;
};

export type ParentsChildrenOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ParentsChildrenSort objects to sort ParentsChildren by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ParentsChildrenSort>>;
};

/** Fields to sort ParentsChildren by. The order in which sorts are applied is not guaranteed when specifying many fields in one ParentsChildrenSort object. */
export type ParentsChildrenSort = {
  id?: InputMaybe<SortDirection>;
};

export type ParentsChildrenUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ParentsChildrenWhere = {
  AND?: InputMaybe<Array<ParentsChildrenWhere>>;
  NOT?: InputMaybe<ParentsChildrenWhere>;
  OR?: InputMaybe<Array<ParentsChildrenWhere>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
};

export type Query = {
  __typename?: 'Query';
  bookmarkDd1s: Array<BookmarkDd1>;
  bookmarkDd1sAggregate: BookmarkDd1AggregateSelection;
  bookmarkDd1sConnection: BookmarkDd1sConnection;
  bookmarks: Array<Bookmark>;
  bookmarksAggregate: BookmarkAggregateSelection;
  bookmarksConnection: BookmarksConnection;
  collectionDs1s: Array<CollectionDs1>;
  collectionDs1sAggregate: CollectionDs1AggregateSelection;
  collectionDs1sConnection: CollectionDs1sConnection;
  collectionList?: Maybe<CollectionListDs1>;
  collectionListDs1s: Array<CollectionListDs1>;
  collectionListDs1sAggregate: CollectionListDs1AggregateSelection;
  collectionListDs1sConnection: CollectionListDs1sConnection;
  collections: Array<Collection>;
  collectionsAggregate: CollectionAggregateSelection;
  collectionsConnection: CollectionsConnection;
  folderDd1s: Array<FolderDd1>;
  folderDd1sAggregate: FolderDd1AggregateSelection;
  folderDd1sConnection: FolderDd1sConnection;
  folders: Array<Folder>;
  foldersAggregate: FolderAggregateSelection;
  foldersConnection: FoldersConnection;
  memberMetas: Array<MemberMeta>;
  memberMetasAggregate: MemberMetaAggregateSelection;
  memberMetasConnection: MemberMetasConnection;
  members: Array<Member>;
  membersAggregate: MemberAggregateSelection;
  membersConnection: MembersConnection;
  parentChildren: Array<ChildDlGeneral>;
  parentMetas: Array<ParentMeta>;
  parentMetasAggregate: ParentMetaAggregateSelection;
  parentMetasConnection: ParentMetasConnection;
  parentsChildren: Array<ParentsChildren>;
  parentsChildrenAggregate: ParentsChildrenAggregateSelection;
  parentsChildrenConnection: ParentsChildrenConnection;
  parentsChildrenDeep: Array<ParentsChildren>;
};


export type QueryBookmarkDd1sArgs = {
  options?: InputMaybe<BookmarkDd1Options>;
  where?: InputMaybe<BookmarkDd1Where>;
};


export type QueryBookmarkDd1sAggregateArgs = {
  where?: InputMaybe<BookmarkDd1Where>;
};


export type QueryBookmarkDd1sConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<BookmarkDd1Sort>>>;
  where?: InputMaybe<BookmarkDd1Where>;
};


export type QueryBookmarksArgs = {
  options?: InputMaybe<BookmarkOptions>;
  where?: InputMaybe<BookmarkWhere>;
};


export type QueryBookmarksAggregateArgs = {
  where?: InputMaybe<BookmarkWhere>;
};


export type QueryBookmarksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<BookmarkSort>>>;
  where?: InputMaybe<BookmarkWhere>;
};


export type QueryCollectionDs1sArgs = {
  options?: InputMaybe<CollectionDs1Options>;
  where?: InputMaybe<CollectionDs1Where>;
};


export type QueryCollectionDs1sAggregateArgs = {
  where?: InputMaybe<CollectionDs1Where>;
};


export type QueryCollectionDs1sConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CollectionDs1Sort>>>;
  where?: InputMaybe<CollectionDs1Where>;
};


export type QueryCollectionListArgs = {
  memberId: Scalars['String']['input'];
};


export type QueryCollectionListDs1sArgs = {
  options?: InputMaybe<CollectionListDs1Options>;
  where?: InputMaybe<CollectionListDs1Where>;
};


export type QueryCollectionListDs1sAggregateArgs = {
  where?: InputMaybe<CollectionListDs1Where>;
};


export type QueryCollectionListDs1sConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CollectionListDs1Where>;
};


export type QueryCollectionsArgs = {
  options?: InputMaybe<CollectionOptions>;
  where?: InputMaybe<CollectionWhere>;
};


export type QueryCollectionsAggregateArgs = {
  where?: InputMaybe<CollectionWhere>;
};


export type QueryCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CollectionSort>>>;
  where?: InputMaybe<CollectionWhere>;
};


export type QueryFolderDd1sArgs = {
  options?: InputMaybe<FolderDd1Options>;
  where?: InputMaybe<FolderDd1Where>;
};


export type QueryFolderDd1sAggregateArgs = {
  where?: InputMaybe<FolderDd1Where>;
};


export type QueryFolderDd1sConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FolderDd1Sort>>>;
  where?: InputMaybe<FolderDd1Where>;
};


export type QueryFoldersArgs = {
  options?: InputMaybe<FolderOptions>;
  where?: InputMaybe<FolderWhere>;
};


export type QueryFoldersAggregateArgs = {
  where?: InputMaybe<FolderWhere>;
};


export type QueryFoldersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FolderSort>>>;
  where?: InputMaybe<FolderWhere>;
};


export type QueryMemberMetasArgs = {
  options?: InputMaybe<MemberMetaOptions>;
  where?: InputMaybe<MemberMetaWhere>;
};


export type QueryMemberMetasAggregateArgs = {
  where?: InputMaybe<MemberMetaWhere>;
};


export type QueryMemberMetasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MemberMetaSort>>>;
  where?: InputMaybe<MemberMetaWhere>;
};


export type QueryMembersArgs = {
  options?: InputMaybe<MemberOptions>;
  where?: InputMaybe<MemberWhere>;
};


export type QueryMembersAggregateArgs = {
  where?: InputMaybe<MemberWhere>;
};


export type QueryMembersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MemberSort>>>;
  where?: InputMaybe<MemberWhere>;
};


export type QueryParentChildrenArgs = {
  id: Scalars['String']['input'];
  level: Scalars['Int']['input'];
};


export type QueryParentMetasArgs = {
  options?: InputMaybe<ParentMetaOptions>;
  where?: InputMaybe<ParentMetaWhere>;
};


export type QueryParentMetasAggregateArgs = {
  where?: InputMaybe<ParentMetaWhere>;
};


export type QueryParentMetasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ParentMetaSort>>>;
  where?: InputMaybe<ParentMetaWhere>;
};


export type QueryParentsChildrenArgs = {
  options?: InputMaybe<ParentsChildrenOptions>;
  where?: InputMaybe<ParentsChildrenWhere>;
};


export type QueryParentsChildrenAggregateArgs = {
  where?: InputMaybe<ParentsChildrenWhere>;
};


export type QueryParentsChildrenConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ParentsChildrenSort>>>;
  where?: InputMaybe<ParentsChildrenWhere>;
};


export type QueryParentsChildrenDeepArgs = {
  ids: Array<Scalars['String']['input']>;
};

/** Input type for options that can be specified on a query operation. */
export type QueryOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String']['output'];
  shortest: Scalars['String']['output'];
};

export type StringAggregateSelectionNullable = {
  __typename?: 'StringAggregateSelectionNullable';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

export type UpdateBookmarkDd1sMutationResponse = {
  __typename?: 'UpdateBookmarkDd1sMutationResponse';
  bookmarkDd1s: Array<BookmarkDd1>;
  info: UpdateInfo;
};

export type UpdateBookmarksMutationResponse = {
  __typename?: 'UpdateBookmarksMutationResponse';
  bookmarks: Array<Bookmark>;
  info: UpdateInfo;
};

export type UpdateCollectionDs1sMutationResponse = {
  __typename?: 'UpdateCollectionDs1sMutationResponse';
  collectionDs1s: Array<CollectionDs1>;
  info: UpdateInfo;
};

export type UpdateCollectionListDs1sMutationResponse = {
  __typename?: 'UpdateCollectionListDs1sMutationResponse';
  collectionListDs1s: Array<CollectionListDs1>;
  info: UpdateInfo;
};

export type UpdateCollectionsMutationResponse = {
  __typename?: 'UpdateCollectionsMutationResponse';
  collections: Array<Collection>;
  info: UpdateInfo;
};

export type UpdateFolderDd1sMutationResponse = {
  __typename?: 'UpdateFolderDd1sMutationResponse';
  folderDd1s: Array<FolderDd1>;
  info: UpdateInfo;
};

export type UpdateFoldersMutationResponse = {
  __typename?: 'UpdateFoldersMutationResponse';
  folders: Array<Folder>;
  info: UpdateInfo;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdateMemberMetasMutationResponse = {
  __typename?: 'UpdateMemberMetasMutationResponse';
  info: UpdateInfo;
  memberMetas: Array<MemberMeta>;
};

export type UpdateMembersMutationResponse = {
  __typename?: 'UpdateMembersMutationResponse';
  info: UpdateInfo;
  members: Array<Member>;
};

export type UpdateParentMetasMutationResponse = {
  __typename?: 'UpdateParentMetasMutationResponse';
  info: UpdateInfo;
  parentMetas: Array<ParentMeta>;
};

export type UpdateParentsChildrenMutationResponse = {
  __typename?: 'UpdateParentsChildrenMutationResponse';
  info: UpdateInfo;
  parentsChildren: Array<ParentsChildren>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  Child: ( Bookmark ) | ( Omit<Folder, 'children'> & { children: Array<RefType['Child']> } );
  ChildDlGeneral: ( BookmarkDd1 ) | ( Omit<FolderDd1, 'children'> & { children: Array<RefType['ChildDlGeneral']> } );
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  Parent: ( Omit<Collection, 'children'> & { children: Array<RefType['Child']> } ) | ( Omit<Folder, 'children'> & { children: Array<RefType['Child']> } );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Bookmark: ResolverTypeWrapper<Bookmark>;
  BookmarkAggregateSelection: ResolverTypeWrapper<BookmarkAggregateSelection>;
  BookmarkConnectInput: BookmarkConnectInput;
  BookmarkConnectOrCreateWhere: BookmarkConnectOrCreateWhere;
  BookmarkConnectWhere: BookmarkConnectWhere;
  BookmarkCreateInput: BookmarkCreateInput;
  BookmarkDd1: ResolverTypeWrapper<BookmarkDd1>;
  BookmarkDd1AggregateSelection: ResolverTypeWrapper<BookmarkDd1AggregateSelection>;
  BookmarkDd1CreateInput: BookmarkDd1CreateInput;
  BookmarkDd1Edge: ResolverTypeWrapper<BookmarkDd1Edge>;
  BookmarkDd1Options: BookmarkDd1Options;
  BookmarkDd1Sort: BookmarkDd1Sort;
  BookmarkDd1UpdateInput: BookmarkDd1UpdateInput;
  BookmarkDd1Where: BookmarkDd1Where;
  BookmarkDd1sConnection: ResolverTypeWrapper<BookmarkDd1sConnection>;
  BookmarkDeleteInput: BookmarkDeleteInput;
  BookmarkDisconnectInput: BookmarkDisconnectInput;
  BookmarkEdge: ResolverTypeWrapper<BookmarkEdge>;
  BookmarkOnCreateInput: BookmarkOnCreateInput;
  BookmarkOptions: BookmarkOptions;
  BookmarkParentConnectFieldInput: BookmarkParentConnectFieldInput;
  BookmarkParentConnection: ResolverTypeWrapper<BookmarkParentConnection>;
  BookmarkParentConnectionSort: BookmarkParentConnectionSort;
  BookmarkParentConnectionWhere: BookmarkParentConnectionWhere;
  BookmarkParentCreateFieldInput: BookmarkParentCreateFieldInput;
  BookmarkParentDeleteFieldInput: BookmarkParentDeleteFieldInput;
  BookmarkParentDisconnectFieldInput: BookmarkParentDisconnectFieldInput;
  BookmarkParentFieldInput: BookmarkParentFieldInput;
  BookmarkParentRelationship: ResolverTypeWrapper<BookmarkParentRelationship>;
  BookmarkParentUpdateConnectionInput: BookmarkParentUpdateConnectionInput;
  BookmarkParentUpdateFieldInput: BookmarkParentUpdateFieldInput;
  BookmarkRelationInput: BookmarkRelationInput;
  BookmarkSort: BookmarkSort;
  BookmarkUniqueWhere: BookmarkUniqueWhere;
  BookmarkUpdateInput: BookmarkUpdateInput;
  BookmarkWhere: BookmarkWhere;
  BookmarksConnection: ResolverTypeWrapper<BookmarksConnection>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Child: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Child']>;
  ChildDlGeneral: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ChildDlGeneral']>;
  ChildWhere: ChildWhere;
  Collection: ResolverTypeWrapper<Omit<Collection, 'children'> & { children: Array<ResolversTypes['Child']> }>;
  CollectionAggregateSelection: ResolverTypeWrapper<CollectionAggregateSelection>;
  CollectionChildrenConnectInput: CollectionChildrenConnectInput;
  CollectionChildrenCreateFieldInput: CollectionChildrenCreateFieldInput;
  CollectionChildrenCreateInput: CollectionChildrenCreateInput;
  CollectionChildrenDeleteInput: CollectionChildrenDeleteInput;
  CollectionChildrenDisconnectInput: CollectionChildrenDisconnectInput;
  CollectionChildrenUpdateInput: CollectionChildrenUpdateInput;
  CollectionConnectInput: CollectionConnectInput;
  CollectionConnectOrCreateInput: CollectionConnectOrCreateInput;
  CollectionConnectOrCreateWhere: CollectionConnectOrCreateWhere;
  CollectionConnectWhere: CollectionConnectWhere;
  CollectionCreateInput: CollectionCreateInput;
  CollectionDeleteInput: CollectionDeleteInput;
  CollectionDisconnectInput: CollectionDisconnectInput;
  CollectionDs1: ResolverTypeWrapper<CollectionDs1>;
  CollectionDs1AggregateSelection: ResolverTypeWrapper<CollectionDs1AggregateSelection>;
  CollectionDs1CreateInput: CollectionDs1CreateInput;
  CollectionDs1Edge: ResolverTypeWrapper<CollectionDs1Edge>;
  CollectionDs1Options: CollectionDs1Options;
  CollectionDs1Sort: CollectionDs1Sort;
  CollectionDs1UpdateInput: CollectionDs1UpdateInput;
  CollectionDs1Where: CollectionDs1Where;
  CollectionDs1sConnection: ResolverTypeWrapper<CollectionDs1sConnection>;
  CollectionEdge: ResolverTypeWrapper<CollectionEdge>;
  CollectionListDs1: ResolverTypeWrapper<CollectionListDs1>;
  CollectionListDs1AggregateSelection: ResolverTypeWrapper<CollectionListDs1AggregateSelection>;
  CollectionListDs1CreateInput: CollectionListDs1CreateInput;
  CollectionListDs1Edge: ResolverTypeWrapper<CollectionListDs1Edge>;
  CollectionListDs1Options: CollectionListDs1Options;
  CollectionListDs1UpdateInput: CollectionListDs1UpdateInput;
  CollectionListDs1Where: CollectionListDs1Where;
  CollectionListDs1sConnection: ResolverTypeWrapper<CollectionListDs1sConnection>;
  CollectionMemberAggregateInput: CollectionMemberAggregateInput;
  CollectionMemberConnectFieldInput: CollectionMemberConnectFieldInput;
  CollectionMemberConnectOrCreateFieldInput: CollectionMemberConnectOrCreateFieldInput;
  CollectionMemberConnectOrCreateFieldInputOnCreate: CollectionMemberConnectOrCreateFieldInputOnCreate;
  CollectionMemberConnection: ResolverTypeWrapper<CollectionMemberConnection>;
  CollectionMemberConnectionSort: CollectionMemberConnectionSort;
  CollectionMemberConnectionWhere: CollectionMemberConnectionWhere;
  CollectionMemberCreateFieldInput: CollectionMemberCreateFieldInput;
  CollectionMemberDeleteFieldInput: CollectionMemberDeleteFieldInput;
  CollectionMemberDisconnectFieldInput: CollectionMemberDisconnectFieldInput;
  CollectionMemberFieldInput: CollectionMemberFieldInput;
  CollectionMemberMemberAggregationSelection: ResolverTypeWrapper<CollectionMemberMemberAggregationSelection>;
  CollectionMemberMemberNodeAggregateSelection: ResolverTypeWrapper<CollectionMemberMemberNodeAggregateSelection>;
  CollectionMemberNodeAggregationWhereInput: CollectionMemberNodeAggregationWhereInput;
  CollectionMemberRelationship: ResolverTypeWrapper<CollectionMemberRelationship>;
  CollectionMemberUpdateConnectionInput: CollectionMemberUpdateConnectionInput;
  CollectionMemberUpdateFieldInput: CollectionMemberUpdateFieldInput;
  CollectionOnCreateInput: CollectionOnCreateInput;
  CollectionOptions: CollectionOptions;
  CollectionParentMetaAggregateInput: CollectionParentMetaAggregateInput;
  CollectionParentMetaNodeAggregationWhereInput: CollectionParentMetaNodeAggregationWhereInput;
  CollectionParentMetaParentMetaAggregationSelection: ResolverTypeWrapper<CollectionParentMetaParentMetaAggregationSelection>;
  CollectionParentMetaParentMetaNodeAggregateSelection: ResolverTypeWrapper<CollectionParentMetaParentMetaNodeAggregateSelection>;
  CollectionRelationInput: CollectionRelationInput;
  CollectionSort: CollectionSort;
  CollectionUniqueWhere: CollectionUniqueWhere;
  CollectionUpdateInput: CollectionUpdateInput;
  CollectionWhere: CollectionWhere;
  CollectionsConnection: ResolverTypeWrapper<CollectionsConnection>;
  CreateBookmarkDd1sMutationResponse: ResolverTypeWrapper<CreateBookmarkDd1sMutationResponse>;
  CreateBookmarkDlGeneral: CreateBookmarkDlGeneral;
  CreateBookmarksMutationResponse: ResolverTypeWrapper<CreateBookmarksMutationResponse>;
  CreateCollectionDs1sMutationResponse: ResolverTypeWrapper<CreateCollectionDs1sMutationResponse>;
  CreateCollectionListDs1sMutationResponse: ResolverTypeWrapper<CreateCollectionListDs1sMutationResponse>;
  CreateCollectionsMutationResponse: ResolverTypeWrapper<CreateCollectionsMutationResponse>;
  CreateFolderDd1sMutationResponse: ResolverTypeWrapper<CreateFolderDd1sMutationResponse>;
  CreateFoldersMutationResponse: ResolverTypeWrapper<CreateFoldersMutationResponse>;
  CreateInfo: ResolverTypeWrapper<CreateInfo>;
  CreateMemberMetasMutationResponse: ResolverTypeWrapper<CreateMemberMetasMutationResponse>;
  CreateMembersMutationResponse: ResolverTypeWrapper<CreateMembersMutationResponse>;
  CreateParentMetasMutationResponse: ResolverTypeWrapper<CreateParentMetasMutationResponse>;
  CreateParentsChildrenMutationResponse: ResolverTypeWrapper<CreateParentsChildrenMutationResponse>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeAggregateSelectionNullable: ResolverTypeWrapper<DateTimeAggregateSelectionNullable>;
  DeleteInfo: ResolverTypeWrapper<DeleteInfo>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Folder: ResolverTypeWrapper<Omit<Folder, 'children'> & { children: Array<ResolversTypes['Child']> }>;
  FolderAggregateSelection: ResolverTypeWrapper<FolderAggregateSelection>;
  FolderChildrenConnectInput: FolderChildrenConnectInput;
  FolderChildrenCreateFieldInput: FolderChildrenCreateFieldInput;
  FolderChildrenCreateInput: FolderChildrenCreateInput;
  FolderChildrenDeleteInput: FolderChildrenDeleteInput;
  FolderChildrenDisconnectInput: FolderChildrenDisconnectInput;
  FolderChildrenUpdateInput: FolderChildrenUpdateInput;
  FolderConnectInput: FolderConnectInput;
  FolderConnectOrCreateInput: FolderConnectOrCreateInput;
  FolderConnectOrCreateWhere: FolderConnectOrCreateWhere;
  FolderConnectWhere: FolderConnectWhere;
  FolderCreateInput: FolderCreateInput;
  FolderDd1: ResolverTypeWrapper<Omit<FolderDd1, 'children'> & { children: Array<ResolversTypes['ChildDlGeneral']> }>;
  FolderDd1AggregateSelection: ResolverTypeWrapper<FolderDd1AggregateSelection>;
  FolderDd1CreateInput: FolderDd1CreateInput;
  FolderDd1Edge: ResolverTypeWrapper<FolderDd1Edge>;
  FolderDd1Options: FolderDd1Options;
  FolderDd1Sort: FolderDd1Sort;
  FolderDd1UpdateInput: FolderDd1UpdateInput;
  FolderDd1Where: FolderDd1Where;
  FolderDd1sConnection: ResolverTypeWrapper<FolderDd1sConnection>;
  FolderDeleteInput: FolderDeleteInput;
  FolderDisconnectInput: FolderDisconnectInput;
  FolderEdge: ResolverTypeWrapper<FolderEdge>;
  FolderOnCreateInput: FolderOnCreateInput;
  FolderOptions: FolderOptions;
  FolderParentConnectFieldInput: FolderParentConnectFieldInput;
  FolderParentConnection: ResolverTypeWrapper<FolderParentConnection>;
  FolderParentConnectionSort: FolderParentConnectionSort;
  FolderParentConnectionWhere: FolderParentConnectionWhere;
  FolderParentCreateFieldInput: FolderParentCreateFieldInput;
  FolderParentDeleteFieldInput: FolderParentDeleteFieldInput;
  FolderParentDisconnectFieldInput: FolderParentDisconnectFieldInput;
  FolderParentFieldInput: FolderParentFieldInput;
  FolderParentMetaAggregateInput: FolderParentMetaAggregateInput;
  FolderParentMetaNodeAggregationWhereInput: FolderParentMetaNodeAggregationWhereInput;
  FolderParentMetaParentMetaAggregationSelection: ResolverTypeWrapper<FolderParentMetaParentMetaAggregationSelection>;
  FolderParentMetaParentMetaNodeAggregateSelection: ResolverTypeWrapper<FolderParentMetaParentMetaNodeAggregateSelection>;
  FolderParentRelationship: ResolverTypeWrapper<FolderParentRelationship>;
  FolderParentUpdateConnectionInput: FolderParentUpdateConnectionInput;
  FolderParentUpdateFieldInput: FolderParentUpdateFieldInput;
  FolderRelationInput: FolderRelationInput;
  FolderSort: FolderSort;
  FolderUniqueWhere: FolderUniqueWhere;
  FolderUpdateInput: FolderUpdateInput;
  FolderWhere: FolderWhere;
  FoldersConnection: ResolverTypeWrapper<FoldersConnection>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IDAggregateSelectionNonNullable: ResolverTypeWrapper<IdAggregateSelectionNonNullable>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IntAggregateSelectionNonNullable: ResolverTypeWrapper<IntAggregateSelectionNonNullable>;
  IntAggregateSelectionNullable: ResolverTypeWrapper<IntAggregateSelectionNullable>;
  Member: ResolverTypeWrapper<Member>;
  MemberAggregateSelection: ResolverTypeWrapper<MemberAggregateSelection>;
  MemberCollectionCollectionsAggregationSelection: ResolverTypeWrapper<MemberCollectionCollectionsAggregationSelection>;
  MemberCollectionCollectionsNodeAggregateSelection: ResolverTypeWrapper<MemberCollectionCollectionsNodeAggregateSelection>;
  MemberCollectionsAggregateInput: MemberCollectionsAggregateInput;
  MemberCollectionsConnectFieldInput: MemberCollectionsConnectFieldInput;
  MemberCollectionsConnectOrCreateFieldInput: MemberCollectionsConnectOrCreateFieldInput;
  MemberCollectionsConnectOrCreateFieldInputOnCreate: MemberCollectionsConnectOrCreateFieldInputOnCreate;
  MemberCollectionsConnection: ResolverTypeWrapper<MemberCollectionsConnection>;
  MemberCollectionsConnectionSort: MemberCollectionsConnectionSort;
  MemberCollectionsConnectionWhere: MemberCollectionsConnectionWhere;
  MemberCollectionsCreateFieldInput: MemberCollectionsCreateFieldInput;
  MemberCollectionsDeleteFieldInput: MemberCollectionsDeleteFieldInput;
  MemberCollectionsDisconnectFieldInput: MemberCollectionsDisconnectFieldInput;
  MemberCollectionsFieldInput: MemberCollectionsFieldInput;
  MemberCollectionsNodeAggregationWhereInput: MemberCollectionsNodeAggregationWhereInput;
  MemberCollectionsRelationship: ResolverTypeWrapper<MemberCollectionsRelationship>;
  MemberCollectionsUpdateConnectionInput: MemberCollectionsUpdateConnectionInput;
  MemberCollectionsUpdateFieldInput: MemberCollectionsUpdateFieldInput;
  MemberConnectInput: MemberConnectInput;
  MemberConnectOrCreateInput: MemberConnectOrCreateInput;
  MemberConnectOrCreateWhere: MemberConnectOrCreateWhere;
  MemberConnectWhere: MemberConnectWhere;
  MemberCreateInput: MemberCreateInput;
  MemberDeleteInput: MemberDeleteInput;
  MemberDisconnectInput: MemberDisconnectInput;
  MemberEdge: ResolverTypeWrapper<MemberEdge>;
  MemberMemberMetaAggregateInput: MemberMemberMetaAggregateInput;
  MemberMemberMetaConnectFieldInput: MemberMemberMetaConnectFieldInput;
  MemberMemberMetaConnectOrCreateFieldInput: MemberMemberMetaConnectOrCreateFieldInput;
  MemberMemberMetaConnectOrCreateFieldInputOnCreate: MemberMemberMetaConnectOrCreateFieldInputOnCreate;
  MemberMemberMetaConnection: ResolverTypeWrapper<MemberMemberMetaConnection>;
  MemberMemberMetaConnectionSort: MemberMemberMetaConnectionSort;
  MemberMemberMetaConnectionWhere: MemberMemberMetaConnectionWhere;
  MemberMemberMetaCreateFieldInput: MemberMemberMetaCreateFieldInput;
  MemberMemberMetaDeleteFieldInput: MemberMemberMetaDeleteFieldInput;
  MemberMemberMetaDisconnectFieldInput: MemberMemberMetaDisconnectFieldInput;
  MemberMemberMetaFieldInput: MemberMemberMetaFieldInput;
  MemberMemberMetaMemberMetaAggregationSelection: ResolverTypeWrapper<MemberMemberMetaMemberMetaAggregationSelection>;
  MemberMemberMetaMemberMetaNodeAggregateSelection: ResolverTypeWrapper<MemberMemberMetaMemberMetaNodeAggregateSelection>;
  MemberMemberMetaNodeAggregationWhereInput: MemberMemberMetaNodeAggregationWhereInput;
  MemberMemberMetaRelationship: ResolverTypeWrapper<MemberMemberMetaRelationship>;
  MemberMemberMetaUpdateConnectionInput: MemberMemberMetaUpdateConnectionInput;
  MemberMemberMetaUpdateFieldInput: MemberMemberMetaUpdateFieldInput;
  MemberMeta: ResolverTypeWrapper<MemberMeta>;
  MemberMetaAggregateSelection: ResolverTypeWrapper<MemberMetaAggregateSelection>;
  MemberMetaConnectInput: MemberMetaConnectInput;
  MemberMetaConnectOrCreateInput: MemberMetaConnectOrCreateInput;
  MemberMetaConnectOrCreateWhere: MemberMetaConnectOrCreateWhere;
  MemberMetaConnectWhere: MemberMetaConnectWhere;
  MemberMetaCreateInput: MemberMetaCreateInput;
  MemberMetaDeleteInput: MemberMetaDeleteInput;
  MemberMetaDisconnectInput: MemberMetaDisconnectInput;
  MemberMetaEdge: ResolverTypeWrapper<MemberMetaEdge>;
  MemberMetaMemberAggregateInput: MemberMetaMemberAggregateInput;
  MemberMetaMemberConnectFieldInput: MemberMetaMemberConnectFieldInput;
  MemberMetaMemberConnectOrCreateFieldInput: MemberMetaMemberConnectOrCreateFieldInput;
  MemberMetaMemberConnectOrCreateFieldInputOnCreate: MemberMetaMemberConnectOrCreateFieldInputOnCreate;
  MemberMetaMemberConnection: ResolverTypeWrapper<MemberMetaMemberConnection>;
  MemberMetaMemberConnectionSort: MemberMetaMemberConnectionSort;
  MemberMetaMemberConnectionWhere: MemberMetaMemberConnectionWhere;
  MemberMetaMemberCreateFieldInput: MemberMetaMemberCreateFieldInput;
  MemberMetaMemberDeleteFieldInput: MemberMetaMemberDeleteFieldInput;
  MemberMetaMemberDisconnectFieldInput: MemberMetaMemberDisconnectFieldInput;
  MemberMetaMemberFieldInput: MemberMetaMemberFieldInput;
  MemberMetaMemberMemberAggregationSelection: ResolverTypeWrapper<MemberMetaMemberMemberAggregationSelection>;
  MemberMetaMemberMemberNodeAggregateSelection: ResolverTypeWrapper<MemberMetaMemberMemberNodeAggregateSelection>;
  MemberMetaMemberNodeAggregationWhereInput: MemberMetaMemberNodeAggregationWhereInput;
  MemberMetaMemberRelationship: ResolverTypeWrapper<MemberMetaMemberRelationship>;
  MemberMetaMemberUpdateConnectionInput: MemberMetaMemberUpdateConnectionInput;
  MemberMetaMemberUpdateFieldInput: MemberMetaMemberUpdateFieldInput;
  MemberMetaOnCreateInput: MemberMetaOnCreateInput;
  MemberMetaOptions: MemberMetaOptions;
  MemberMetaRelationInput: MemberMetaRelationInput;
  MemberMetaSort: MemberMetaSort;
  MemberMetaUniqueWhere: MemberMetaUniqueWhere;
  MemberMetaUpdateInput: MemberMetaUpdateInput;
  MemberMetaWhere: MemberMetaWhere;
  MemberMetasConnection: ResolverTypeWrapper<MemberMetasConnection>;
  MemberOnCreateInput: MemberOnCreateInput;
  MemberOptions: MemberOptions;
  MemberRelationInput: MemberRelationInput;
  MemberSort: MemberSort;
  MemberUniqueWhere: MemberUniqueWhere;
  MemberUpdateInput: MemberUpdateInput;
  MemberWhere: MemberWhere;
  MembersConnection: ResolverTypeWrapper<MembersConnection>;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Parent: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Parent']>;
  ParentChildrenBookmarkConnectFieldInput: ParentChildrenBookmarkConnectFieldInput;
  ParentChildrenBookmarkConnectOrCreateFieldInput: ParentChildrenBookmarkConnectOrCreateFieldInput;
  ParentChildrenBookmarkConnectOrCreateFieldInputOnCreate: ParentChildrenBookmarkConnectOrCreateFieldInputOnCreate;
  ParentChildrenBookmarkConnectionWhere: ParentChildrenBookmarkConnectionWhere;
  ParentChildrenBookmarkCreateFieldInput: ParentChildrenBookmarkCreateFieldInput;
  ParentChildrenBookmarkDeleteFieldInput: ParentChildrenBookmarkDeleteFieldInput;
  ParentChildrenBookmarkDisconnectFieldInput: ParentChildrenBookmarkDisconnectFieldInput;
  ParentChildrenBookmarkFieldInput: ParentChildrenBookmarkFieldInput;
  ParentChildrenBookmarkUpdateConnectionInput: ParentChildrenBookmarkUpdateConnectionInput;
  ParentChildrenBookmarkUpdateFieldInput: ParentChildrenBookmarkUpdateFieldInput;
  ParentChildrenConnectInput: ParentChildrenConnectInput;
  ParentChildrenConnectOrCreateInput: ParentChildrenConnectOrCreateInput;
  ParentChildrenConnection: ResolverTypeWrapper<ParentChildrenConnection>;
  ParentChildrenConnectionWhere: ParentChildrenConnectionWhere;
  ParentChildrenDeleteInput: ParentChildrenDeleteInput;
  ParentChildrenDisconnectInput: ParentChildrenDisconnectInput;
  ParentChildrenFolderConnectFieldInput: ParentChildrenFolderConnectFieldInput;
  ParentChildrenFolderConnectOrCreateFieldInput: ParentChildrenFolderConnectOrCreateFieldInput;
  ParentChildrenFolderConnectOrCreateFieldInputOnCreate: ParentChildrenFolderConnectOrCreateFieldInputOnCreate;
  ParentChildrenFolderConnectionWhere: ParentChildrenFolderConnectionWhere;
  ParentChildrenFolderCreateFieldInput: ParentChildrenFolderCreateFieldInput;
  ParentChildrenFolderDeleteFieldInput: ParentChildrenFolderDeleteFieldInput;
  ParentChildrenFolderDisconnectFieldInput: ParentChildrenFolderDisconnectFieldInput;
  ParentChildrenFolderFieldInput: ParentChildrenFolderFieldInput;
  ParentChildrenFolderUpdateConnectionInput: ParentChildrenFolderUpdateConnectionInput;
  ParentChildrenFolderUpdateFieldInput: ParentChildrenFolderUpdateFieldInput;
  ParentChildrenRelationship: ResolverTypeWrapper<Omit<ParentChildrenRelationship, 'node'> & { node: ResolversTypes['Child'] }>;
  ParentChildrenUpdateInput: ParentChildrenUpdateInput;
  ParentConnectInput: ParentConnectInput;
  ParentConnectWhere: ParentConnectWhere;
  ParentCreateInput: ParentCreateInput;
  ParentDeleteInput: ParentDeleteInput;
  ParentDisconnectInput: ParentDisconnectInput;
  ParentImplementationsConnectInput: ParentImplementationsConnectInput;
  ParentImplementationsDeleteInput: ParentImplementationsDeleteInput;
  ParentImplementationsDisconnectInput: ParentImplementationsDisconnectInput;
  ParentImplementationsUpdateInput: ParentImplementationsUpdateInput;
  ParentImplementationsWhere: ParentImplementationsWhere;
  ParentMeta: ResolverTypeWrapper<ParentMeta>;
  ParentMetaAggregateSelection: ResolverTypeWrapper<ParentMetaAggregateSelection>;
  ParentMetaConnectInput: ParentMetaConnectInput;
  ParentMetaConnectOrCreateWhere: ParentMetaConnectOrCreateWhere;
  ParentMetaConnectWhere: ParentMetaConnectWhere;
  ParentMetaCreateInput: ParentMetaCreateInput;
  ParentMetaDeleteInput: ParentMetaDeleteInput;
  ParentMetaDisconnectInput: ParentMetaDisconnectInput;
  ParentMetaEdge: ResolverTypeWrapper<ParentMetaEdge>;
  ParentMetaOnCreateInput: ParentMetaOnCreateInput;
  ParentMetaOptions: ParentMetaOptions;
  ParentMetaParentConnectFieldInput: ParentMetaParentConnectFieldInput;
  ParentMetaParentConnection: ResolverTypeWrapper<ParentMetaParentConnection>;
  ParentMetaParentConnectionSort: ParentMetaParentConnectionSort;
  ParentMetaParentConnectionWhere: ParentMetaParentConnectionWhere;
  ParentMetaParentCreateFieldInput: ParentMetaParentCreateFieldInput;
  ParentMetaParentDeleteFieldInput: ParentMetaParentDeleteFieldInput;
  ParentMetaParentDisconnectFieldInput: ParentMetaParentDisconnectFieldInput;
  ParentMetaParentFieldInput: ParentMetaParentFieldInput;
  ParentMetaParentRelationship: ResolverTypeWrapper<ParentMetaParentRelationship>;
  ParentMetaParentUpdateConnectionInput: ParentMetaParentUpdateConnectionInput;
  ParentMetaParentUpdateFieldInput: ParentMetaParentUpdateFieldInput;
  ParentMetaRelationInput: ParentMetaRelationInput;
  ParentMetaSort: ParentMetaSort;
  ParentMetaUniqueWhere: ParentMetaUniqueWhere;
  ParentMetaUpdateInput: ParentMetaUpdateInput;
  ParentMetaWhere: ParentMetaWhere;
  ParentMetasConnection: ResolverTypeWrapper<ParentMetasConnection>;
  ParentOptions: ParentOptions;
  ParentParentMetaAggregateInput: ParentParentMetaAggregateInput;
  ParentParentMetaConnectFieldInput: ParentParentMetaConnectFieldInput;
  ParentParentMetaConnectOrCreateFieldInput: ParentParentMetaConnectOrCreateFieldInput;
  ParentParentMetaConnectOrCreateFieldInputOnCreate: ParentParentMetaConnectOrCreateFieldInputOnCreate;
  ParentParentMetaConnection: ResolverTypeWrapper<ParentParentMetaConnection>;
  ParentParentMetaConnectionSort: ParentParentMetaConnectionSort;
  ParentParentMetaConnectionWhere: ParentParentMetaConnectionWhere;
  ParentParentMetaCreateFieldInput: ParentParentMetaCreateFieldInput;
  ParentParentMetaDeleteFieldInput: ParentParentMetaDeleteFieldInput;
  ParentParentMetaDisconnectFieldInput: ParentParentMetaDisconnectFieldInput;
  ParentParentMetaFieldInput: ParentParentMetaFieldInput;
  ParentParentMetaNodeAggregationWhereInput: ParentParentMetaNodeAggregationWhereInput;
  ParentParentMetaRelationship: ResolverTypeWrapper<ParentParentMetaRelationship>;
  ParentParentMetaUpdateConnectionInput: ParentParentMetaUpdateConnectionInput;
  ParentParentMetaUpdateFieldInput: ParentParentMetaUpdateFieldInput;
  ParentSort: ParentSort;
  ParentUpdateInput: ParentUpdateInput;
  ParentWhere: ParentWhere;
  ParentsChildren: ResolverTypeWrapper<Omit<ParentsChildren, 'children'> & { children: Array<ResolversTypes['ChildDlGeneral']> }>;
  ParentsChildrenAggregateSelection: ResolverTypeWrapper<ParentsChildrenAggregateSelection>;
  ParentsChildrenConnection: ResolverTypeWrapper<ParentsChildrenConnection>;
  ParentsChildrenCreateInput: ParentsChildrenCreateInput;
  ParentsChildrenEdge: ResolverTypeWrapper<ParentsChildrenEdge>;
  ParentsChildrenOptions: ParentsChildrenOptions;
  ParentsChildrenSort: ParentsChildrenSort;
  ParentsChildrenUpdateInput: ParentsChildrenUpdateInput;
  ParentsChildrenWhere: ParentsChildrenWhere;
  Query: ResolverTypeWrapper<{}>;
  QueryOptions: QueryOptions;
  SortDirection: SortDirection;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringAggregateSelectionNonNullable: ResolverTypeWrapper<StringAggregateSelectionNonNullable>;
  StringAggregateSelectionNullable: ResolverTypeWrapper<StringAggregateSelectionNullable>;
  UpdateBookmarkDd1sMutationResponse: ResolverTypeWrapper<UpdateBookmarkDd1sMutationResponse>;
  UpdateBookmarksMutationResponse: ResolverTypeWrapper<UpdateBookmarksMutationResponse>;
  UpdateCollectionDs1sMutationResponse: ResolverTypeWrapper<UpdateCollectionDs1sMutationResponse>;
  UpdateCollectionListDs1sMutationResponse: ResolverTypeWrapper<UpdateCollectionListDs1sMutationResponse>;
  UpdateCollectionsMutationResponse: ResolverTypeWrapper<UpdateCollectionsMutationResponse>;
  UpdateFolderDd1sMutationResponse: ResolverTypeWrapper<UpdateFolderDd1sMutationResponse>;
  UpdateFoldersMutationResponse: ResolverTypeWrapper<UpdateFoldersMutationResponse>;
  UpdateInfo: ResolverTypeWrapper<UpdateInfo>;
  UpdateMemberMetasMutationResponse: ResolverTypeWrapper<UpdateMemberMetasMutationResponse>;
  UpdateMembersMutationResponse: ResolverTypeWrapper<UpdateMembersMutationResponse>;
  UpdateParentMetasMutationResponse: ResolverTypeWrapper<UpdateParentMetasMutationResponse>;
  UpdateParentsChildrenMutationResponse: ResolverTypeWrapper<UpdateParentsChildrenMutationResponse>;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Bookmark: Bookmark;
  BookmarkAggregateSelection: BookmarkAggregateSelection;
  BookmarkConnectInput: BookmarkConnectInput;
  BookmarkConnectOrCreateWhere: BookmarkConnectOrCreateWhere;
  BookmarkConnectWhere: BookmarkConnectWhere;
  BookmarkCreateInput: BookmarkCreateInput;
  BookmarkDd1: BookmarkDd1;
  BookmarkDd1AggregateSelection: BookmarkDd1AggregateSelection;
  BookmarkDd1CreateInput: BookmarkDd1CreateInput;
  BookmarkDd1Edge: BookmarkDd1Edge;
  BookmarkDd1Options: BookmarkDd1Options;
  BookmarkDd1Sort: BookmarkDd1Sort;
  BookmarkDd1UpdateInput: BookmarkDd1UpdateInput;
  BookmarkDd1Where: BookmarkDd1Where;
  BookmarkDd1sConnection: BookmarkDd1sConnection;
  BookmarkDeleteInput: BookmarkDeleteInput;
  BookmarkDisconnectInput: BookmarkDisconnectInput;
  BookmarkEdge: BookmarkEdge;
  BookmarkOnCreateInput: BookmarkOnCreateInput;
  BookmarkOptions: BookmarkOptions;
  BookmarkParentConnectFieldInput: BookmarkParentConnectFieldInput;
  BookmarkParentConnection: BookmarkParentConnection;
  BookmarkParentConnectionSort: BookmarkParentConnectionSort;
  BookmarkParentConnectionWhere: BookmarkParentConnectionWhere;
  BookmarkParentCreateFieldInput: BookmarkParentCreateFieldInput;
  BookmarkParentDeleteFieldInput: BookmarkParentDeleteFieldInput;
  BookmarkParentDisconnectFieldInput: BookmarkParentDisconnectFieldInput;
  BookmarkParentFieldInput: BookmarkParentFieldInput;
  BookmarkParentRelationship: BookmarkParentRelationship;
  BookmarkParentUpdateConnectionInput: BookmarkParentUpdateConnectionInput;
  BookmarkParentUpdateFieldInput: BookmarkParentUpdateFieldInput;
  BookmarkRelationInput: BookmarkRelationInput;
  BookmarkSort: BookmarkSort;
  BookmarkUniqueWhere: BookmarkUniqueWhere;
  BookmarkUpdateInput: BookmarkUpdateInput;
  BookmarkWhere: BookmarkWhere;
  BookmarksConnection: BookmarksConnection;
  Boolean: Scalars['Boolean']['output'];
  Child: ResolversUnionTypes<ResolversParentTypes>['Child'];
  ChildDlGeneral: ResolversUnionTypes<ResolversParentTypes>['ChildDlGeneral'];
  ChildWhere: ChildWhere;
  Collection: Omit<Collection, 'children'> & { children: Array<ResolversParentTypes['Child']> };
  CollectionAggregateSelection: CollectionAggregateSelection;
  CollectionChildrenConnectInput: CollectionChildrenConnectInput;
  CollectionChildrenCreateFieldInput: CollectionChildrenCreateFieldInput;
  CollectionChildrenCreateInput: CollectionChildrenCreateInput;
  CollectionChildrenDeleteInput: CollectionChildrenDeleteInput;
  CollectionChildrenDisconnectInput: CollectionChildrenDisconnectInput;
  CollectionChildrenUpdateInput: CollectionChildrenUpdateInput;
  CollectionConnectInput: CollectionConnectInput;
  CollectionConnectOrCreateInput: CollectionConnectOrCreateInput;
  CollectionConnectOrCreateWhere: CollectionConnectOrCreateWhere;
  CollectionConnectWhere: CollectionConnectWhere;
  CollectionCreateInput: CollectionCreateInput;
  CollectionDeleteInput: CollectionDeleteInput;
  CollectionDisconnectInput: CollectionDisconnectInput;
  CollectionDs1: CollectionDs1;
  CollectionDs1AggregateSelection: CollectionDs1AggregateSelection;
  CollectionDs1CreateInput: CollectionDs1CreateInput;
  CollectionDs1Edge: CollectionDs1Edge;
  CollectionDs1Options: CollectionDs1Options;
  CollectionDs1Sort: CollectionDs1Sort;
  CollectionDs1UpdateInput: CollectionDs1UpdateInput;
  CollectionDs1Where: CollectionDs1Where;
  CollectionDs1sConnection: CollectionDs1sConnection;
  CollectionEdge: CollectionEdge;
  CollectionListDs1: CollectionListDs1;
  CollectionListDs1AggregateSelection: CollectionListDs1AggregateSelection;
  CollectionListDs1CreateInput: CollectionListDs1CreateInput;
  CollectionListDs1Edge: CollectionListDs1Edge;
  CollectionListDs1Options: CollectionListDs1Options;
  CollectionListDs1UpdateInput: CollectionListDs1UpdateInput;
  CollectionListDs1Where: CollectionListDs1Where;
  CollectionListDs1sConnection: CollectionListDs1sConnection;
  CollectionMemberAggregateInput: CollectionMemberAggregateInput;
  CollectionMemberConnectFieldInput: CollectionMemberConnectFieldInput;
  CollectionMemberConnectOrCreateFieldInput: CollectionMemberConnectOrCreateFieldInput;
  CollectionMemberConnectOrCreateFieldInputOnCreate: CollectionMemberConnectOrCreateFieldInputOnCreate;
  CollectionMemberConnection: CollectionMemberConnection;
  CollectionMemberConnectionSort: CollectionMemberConnectionSort;
  CollectionMemberConnectionWhere: CollectionMemberConnectionWhere;
  CollectionMemberCreateFieldInput: CollectionMemberCreateFieldInput;
  CollectionMemberDeleteFieldInput: CollectionMemberDeleteFieldInput;
  CollectionMemberDisconnectFieldInput: CollectionMemberDisconnectFieldInput;
  CollectionMemberFieldInput: CollectionMemberFieldInput;
  CollectionMemberMemberAggregationSelection: CollectionMemberMemberAggregationSelection;
  CollectionMemberMemberNodeAggregateSelection: CollectionMemberMemberNodeAggregateSelection;
  CollectionMemberNodeAggregationWhereInput: CollectionMemberNodeAggregationWhereInput;
  CollectionMemberRelationship: CollectionMemberRelationship;
  CollectionMemberUpdateConnectionInput: CollectionMemberUpdateConnectionInput;
  CollectionMemberUpdateFieldInput: CollectionMemberUpdateFieldInput;
  CollectionOnCreateInput: CollectionOnCreateInput;
  CollectionOptions: CollectionOptions;
  CollectionParentMetaAggregateInput: CollectionParentMetaAggregateInput;
  CollectionParentMetaNodeAggregationWhereInput: CollectionParentMetaNodeAggregationWhereInput;
  CollectionParentMetaParentMetaAggregationSelection: CollectionParentMetaParentMetaAggregationSelection;
  CollectionParentMetaParentMetaNodeAggregateSelection: CollectionParentMetaParentMetaNodeAggregateSelection;
  CollectionRelationInput: CollectionRelationInput;
  CollectionSort: CollectionSort;
  CollectionUniqueWhere: CollectionUniqueWhere;
  CollectionUpdateInput: CollectionUpdateInput;
  CollectionWhere: CollectionWhere;
  CollectionsConnection: CollectionsConnection;
  CreateBookmarkDd1sMutationResponse: CreateBookmarkDd1sMutationResponse;
  CreateBookmarkDlGeneral: CreateBookmarkDlGeneral;
  CreateBookmarksMutationResponse: CreateBookmarksMutationResponse;
  CreateCollectionDs1sMutationResponse: CreateCollectionDs1sMutationResponse;
  CreateCollectionListDs1sMutationResponse: CreateCollectionListDs1sMutationResponse;
  CreateCollectionsMutationResponse: CreateCollectionsMutationResponse;
  CreateFolderDd1sMutationResponse: CreateFolderDd1sMutationResponse;
  CreateFoldersMutationResponse: CreateFoldersMutationResponse;
  CreateInfo: CreateInfo;
  CreateMemberMetasMutationResponse: CreateMemberMetasMutationResponse;
  CreateMembersMutationResponse: CreateMembersMutationResponse;
  CreateParentMetasMutationResponse: CreateParentMetasMutationResponse;
  CreateParentsChildrenMutationResponse: CreateParentsChildrenMutationResponse;
  DateTime: Scalars['DateTime']['output'];
  DateTimeAggregateSelectionNullable: DateTimeAggregateSelectionNullable;
  DeleteInfo: DeleteInfo;
  Float: Scalars['Float']['output'];
  Folder: Omit<Folder, 'children'> & { children: Array<ResolversParentTypes['Child']> };
  FolderAggregateSelection: FolderAggregateSelection;
  FolderChildrenConnectInput: FolderChildrenConnectInput;
  FolderChildrenCreateFieldInput: FolderChildrenCreateFieldInput;
  FolderChildrenCreateInput: FolderChildrenCreateInput;
  FolderChildrenDeleteInput: FolderChildrenDeleteInput;
  FolderChildrenDisconnectInput: FolderChildrenDisconnectInput;
  FolderChildrenUpdateInput: FolderChildrenUpdateInput;
  FolderConnectInput: FolderConnectInput;
  FolderConnectOrCreateInput: FolderConnectOrCreateInput;
  FolderConnectOrCreateWhere: FolderConnectOrCreateWhere;
  FolderConnectWhere: FolderConnectWhere;
  FolderCreateInput: FolderCreateInput;
  FolderDd1: Omit<FolderDd1, 'children'> & { children: Array<ResolversParentTypes['ChildDlGeneral']> };
  FolderDd1AggregateSelection: FolderDd1AggregateSelection;
  FolderDd1CreateInput: FolderDd1CreateInput;
  FolderDd1Edge: FolderDd1Edge;
  FolderDd1Options: FolderDd1Options;
  FolderDd1Sort: FolderDd1Sort;
  FolderDd1UpdateInput: FolderDd1UpdateInput;
  FolderDd1Where: FolderDd1Where;
  FolderDd1sConnection: FolderDd1sConnection;
  FolderDeleteInput: FolderDeleteInput;
  FolderDisconnectInput: FolderDisconnectInput;
  FolderEdge: FolderEdge;
  FolderOnCreateInput: FolderOnCreateInput;
  FolderOptions: FolderOptions;
  FolderParentConnectFieldInput: FolderParentConnectFieldInput;
  FolderParentConnection: FolderParentConnection;
  FolderParentConnectionSort: FolderParentConnectionSort;
  FolderParentConnectionWhere: FolderParentConnectionWhere;
  FolderParentCreateFieldInput: FolderParentCreateFieldInput;
  FolderParentDeleteFieldInput: FolderParentDeleteFieldInput;
  FolderParentDisconnectFieldInput: FolderParentDisconnectFieldInput;
  FolderParentFieldInput: FolderParentFieldInput;
  FolderParentMetaAggregateInput: FolderParentMetaAggregateInput;
  FolderParentMetaNodeAggregationWhereInput: FolderParentMetaNodeAggregationWhereInput;
  FolderParentMetaParentMetaAggregationSelection: FolderParentMetaParentMetaAggregationSelection;
  FolderParentMetaParentMetaNodeAggregateSelection: FolderParentMetaParentMetaNodeAggregateSelection;
  FolderParentRelationship: FolderParentRelationship;
  FolderParentUpdateConnectionInput: FolderParentUpdateConnectionInput;
  FolderParentUpdateFieldInput: FolderParentUpdateFieldInput;
  FolderRelationInput: FolderRelationInput;
  FolderSort: FolderSort;
  FolderUniqueWhere: FolderUniqueWhere;
  FolderUpdateInput: FolderUpdateInput;
  FolderWhere: FolderWhere;
  FoldersConnection: FoldersConnection;
  ID: Scalars['ID']['output'];
  IDAggregateSelectionNonNullable: IdAggregateSelectionNonNullable;
  Int: Scalars['Int']['output'];
  IntAggregateSelectionNonNullable: IntAggregateSelectionNonNullable;
  IntAggregateSelectionNullable: IntAggregateSelectionNullable;
  Member: Member;
  MemberAggregateSelection: MemberAggregateSelection;
  MemberCollectionCollectionsAggregationSelection: MemberCollectionCollectionsAggregationSelection;
  MemberCollectionCollectionsNodeAggregateSelection: MemberCollectionCollectionsNodeAggregateSelection;
  MemberCollectionsAggregateInput: MemberCollectionsAggregateInput;
  MemberCollectionsConnectFieldInput: MemberCollectionsConnectFieldInput;
  MemberCollectionsConnectOrCreateFieldInput: MemberCollectionsConnectOrCreateFieldInput;
  MemberCollectionsConnectOrCreateFieldInputOnCreate: MemberCollectionsConnectOrCreateFieldInputOnCreate;
  MemberCollectionsConnection: MemberCollectionsConnection;
  MemberCollectionsConnectionSort: MemberCollectionsConnectionSort;
  MemberCollectionsConnectionWhere: MemberCollectionsConnectionWhere;
  MemberCollectionsCreateFieldInput: MemberCollectionsCreateFieldInput;
  MemberCollectionsDeleteFieldInput: MemberCollectionsDeleteFieldInput;
  MemberCollectionsDisconnectFieldInput: MemberCollectionsDisconnectFieldInput;
  MemberCollectionsFieldInput: MemberCollectionsFieldInput;
  MemberCollectionsNodeAggregationWhereInput: MemberCollectionsNodeAggregationWhereInput;
  MemberCollectionsRelationship: MemberCollectionsRelationship;
  MemberCollectionsUpdateConnectionInput: MemberCollectionsUpdateConnectionInput;
  MemberCollectionsUpdateFieldInput: MemberCollectionsUpdateFieldInput;
  MemberConnectInput: MemberConnectInput;
  MemberConnectOrCreateInput: MemberConnectOrCreateInput;
  MemberConnectOrCreateWhere: MemberConnectOrCreateWhere;
  MemberConnectWhere: MemberConnectWhere;
  MemberCreateInput: MemberCreateInput;
  MemberDeleteInput: MemberDeleteInput;
  MemberDisconnectInput: MemberDisconnectInput;
  MemberEdge: MemberEdge;
  MemberMemberMetaAggregateInput: MemberMemberMetaAggregateInput;
  MemberMemberMetaConnectFieldInput: MemberMemberMetaConnectFieldInput;
  MemberMemberMetaConnectOrCreateFieldInput: MemberMemberMetaConnectOrCreateFieldInput;
  MemberMemberMetaConnectOrCreateFieldInputOnCreate: MemberMemberMetaConnectOrCreateFieldInputOnCreate;
  MemberMemberMetaConnection: MemberMemberMetaConnection;
  MemberMemberMetaConnectionSort: MemberMemberMetaConnectionSort;
  MemberMemberMetaConnectionWhere: MemberMemberMetaConnectionWhere;
  MemberMemberMetaCreateFieldInput: MemberMemberMetaCreateFieldInput;
  MemberMemberMetaDeleteFieldInput: MemberMemberMetaDeleteFieldInput;
  MemberMemberMetaDisconnectFieldInput: MemberMemberMetaDisconnectFieldInput;
  MemberMemberMetaFieldInput: MemberMemberMetaFieldInput;
  MemberMemberMetaMemberMetaAggregationSelection: MemberMemberMetaMemberMetaAggregationSelection;
  MemberMemberMetaMemberMetaNodeAggregateSelection: MemberMemberMetaMemberMetaNodeAggregateSelection;
  MemberMemberMetaNodeAggregationWhereInput: MemberMemberMetaNodeAggregationWhereInput;
  MemberMemberMetaRelationship: MemberMemberMetaRelationship;
  MemberMemberMetaUpdateConnectionInput: MemberMemberMetaUpdateConnectionInput;
  MemberMemberMetaUpdateFieldInput: MemberMemberMetaUpdateFieldInput;
  MemberMeta: MemberMeta;
  MemberMetaAggregateSelection: MemberMetaAggregateSelection;
  MemberMetaConnectInput: MemberMetaConnectInput;
  MemberMetaConnectOrCreateInput: MemberMetaConnectOrCreateInput;
  MemberMetaConnectOrCreateWhere: MemberMetaConnectOrCreateWhere;
  MemberMetaConnectWhere: MemberMetaConnectWhere;
  MemberMetaCreateInput: MemberMetaCreateInput;
  MemberMetaDeleteInput: MemberMetaDeleteInput;
  MemberMetaDisconnectInput: MemberMetaDisconnectInput;
  MemberMetaEdge: MemberMetaEdge;
  MemberMetaMemberAggregateInput: MemberMetaMemberAggregateInput;
  MemberMetaMemberConnectFieldInput: MemberMetaMemberConnectFieldInput;
  MemberMetaMemberConnectOrCreateFieldInput: MemberMetaMemberConnectOrCreateFieldInput;
  MemberMetaMemberConnectOrCreateFieldInputOnCreate: MemberMetaMemberConnectOrCreateFieldInputOnCreate;
  MemberMetaMemberConnection: MemberMetaMemberConnection;
  MemberMetaMemberConnectionSort: MemberMetaMemberConnectionSort;
  MemberMetaMemberConnectionWhere: MemberMetaMemberConnectionWhere;
  MemberMetaMemberCreateFieldInput: MemberMetaMemberCreateFieldInput;
  MemberMetaMemberDeleteFieldInput: MemberMetaMemberDeleteFieldInput;
  MemberMetaMemberDisconnectFieldInput: MemberMetaMemberDisconnectFieldInput;
  MemberMetaMemberFieldInput: MemberMetaMemberFieldInput;
  MemberMetaMemberMemberAggregationSelection: MemberMetaMemberMemberAggregationSelection;
  MemberMetaMemberMemberNodeAggregateSelection: MemberMetaMemberMemberNodeAggregateSelection;
  MemberMetaMemberNodeAggregationWhereInput: MemberMetaMemberNodeAggregationWhereInput;
  MemberMetaMemberRelationship: MemberMetaMemberRelationship;
  MemberMetaMemberUpdateConnectionInput: MemberMetaMemberUpdateConnectionInput;
  MemberMetaMemberUpdateFieldInput: MemberMetaMemberUpdateFieldInput;
  MemberMetaOnCreateInput: MemberMetaOnCreateInput;
  MemberMetaOptions: MemberMetaOptions;
  MemberMetaRelationInput: MemberMetaRelationInput;
  MemberMetaSort: MemberMetaSort;
  MemberMetaUniqueWhere: MemberMetaUniqueWhere;
  MemberMetaUpdateInput: MemberMetaUpdateInput;
  MemberMetaWhere: MemberMetaWhere;
  MemberMetasConnection: MemberMetasConnection;
  MemberOnCreateInput: MemberOnCreateInput;
  MemberOptions: MemberOptions;
  MemberRelationInput: MemberRelationInput;
  MemberSort: MemberSort;
  MemberUniqueWhere: MemberUniqueWhere;
  MemberUpdateInput: MemberUpdateInput;
  MemberWhere: MemberWhere;
  MembersConnection: MembersConnection;
  Mutation: {};
  PageInfo: PageInfo;
  Parent: ResolversInterfaceTypes<ResolversParentTypes>['Parent'];
  ParentChildrenBookmarkConnectFieldInput: ParentChildrenBookmarkConnectFieldInput;
  ParentChildrenBookmarkConnectOrCreateFieldInput: ParentChildrenBookmarkConnectOrCreateFieldInput;
  ParentChildrenBookmarkConnectOrCreateFieldInputOnCreate: ParentChildrenBookmarkConnectOrCreateFieldInputOnCreate;
  ParentChildrenBookmarkConnectionWhere: ParentChildrenBookmarkConnectionWhere;
  ParentChildrenBookmarkCreateFieldInput: ParentChildrenBookmarkCreateFieldInput;
  ParentChildrenBookmarkDeleteFieldInput: ParentChildrenBookmarkDeleteFieldInput;
  ParentChildrenBookmarkDisconnectFieldInput: ParentChildrenBookmarkDisconnectFieldInput;
  ParentChildrenBookmarkFieldInput: ParentChildrenBookmarkFieldInput;
  ParentChildrenBookmarkUpdateConnectionInput: ParentChildrenBookmarkUpdateConnectionInput;
  ParentChildrenBookmarkUpdateFieldInput: ParentChildrenBookmarkUpdateFieldInput;
  ParentChildrenConnectInput: ParentChildrenConnectInput;
  ParentChildrenConnectOrCreateInput: ParentChildrenConnectOrCreateInput;
  ParentChildrenConnection: ParentChildrenConnection;
  ParentChildrenConnectionWhere: ParentChildrenConnectionWhere;
  ParentChildrenDeleteInput: ParentChildrenDeleteInput;
  ParentChildrenDisconnectInput: ParentChildrenDisconnectInput;
  ParentChildrenFolderConnectFieldInput: ParentChildrenFolderConnectFieldInput;
  ParentChildrenFolderConnectOrCreateFieldInput: ParentChildrenFolderConnectOrCreateFieldInput;
  ParentChildrenFolderConnectOrCreateFieldInputOnCreate: ParentChildrenFolderConnectOrCreateFieldInputOnCreate;
  ParentChildrenFolderConnectionWhere: ParentChildrenFolderConnectionWhere;
  ParentChildrenFolderCreateFieldInput: ParentChildrenFolderCreateFieldInput;
  ParentChildrenFolderDeleteFieldInput: ParentChildrenFolderDeleteFieldInput;
  ParentChildrenFolderDisconnectFieldInput: ParentChildrenFolderDisconnectFieldInput;
  ParentChildrenFolderFieldInput: ParentChildrenFolderFieldInput;
  ParentChildrenFolderUpdateConnectionInput: ParentChildrenFolderUpdateConnectionInput;
  ParentChildrenFolderUpdateFieldInput: ParentChildrenFolderUpdateFieldInput;
  ParentChildrenRelationship: Omit<ParentChildrenRelationship, 'node'> & { node: ResolversParentTypes['Child'] };
  ParentChildrenUpdateInput: ParentChildrenUpdateInput;
  ParentConnectInput: ParentConnectInput;
  ParentConnectWhere: ParentConnectWhere;
  ParentCreateInput: ParentCreateInput;
  ParentDeleteInput: ParentDeleteInput;
  ParentDisconnectInput: ParentDisconnectInput;
  ParentImplementationsConnectInput: ParentImplementationsConnectInput;
  ParentImplementationsDeleteInput: ParentImplementationsDeleteInput;
  ParentImplementationsDisconnectInput: ParentImplementationsDisconnectInput;
  ParentImplementationsUpdateInput: ParentImplementationsUpdateInput;
  ParentImplementationsWhere: ParentImplementationsWhere;
  ParentMeta: ParentMeta;
  ParentMetaAggregateSelection: ParentMetaAggregateSelection;
  ParentMetaConnectInput: ParentMetaConnectInput;
  ParentMetaConnectOrCreateWhere: ParentMetaConnectOrCreateWhere;
  ParentMetaConnectWhere: ParentMetaConnectWhere;
  ParentMetaCreateInput: ParentMetaCreateInput;
  ParentMetaDeleteInput: ParentMetaDeleteInput;
  ParentMetaDisconnectInput: ParentMetaDisconnectInput;
  ParentMetaEdge: ParentMetaEdge;
  ParentMetaOnCreateInput: ParentMetaOnCreateInput;
  ParentMetaOptions: ParentMetaOptions;
  ParentMetaParentConnectFieldInput: ParentMetaParentConnectFieldInput;
  ParentMetaParentConnection: ParentMetaParentConnection;
  ParentMetaParentConnectionSort: ParentMetaParentConnectionSort;
  ParentMetaParentConnectionWhere: ParentMetaParentConnectionWhere;
  ParentMetaParentCreateFieldInput: ParentMetaParentCreateFieldInput;
  ParentMetaParentDeleteFieldInput: ParentMetaParentDeleteFieldInput;
  ParentMetaParentDisconnectFieldInput: ParentMetaParentDisconnectFieldInput;
  ParentMetaParentFieldInput: ParentMetaParentFieldInput;
  ParentMetaParentRelationship: ParentMetaParentRelationship;
  ParentMetaParentUpdateConnectionInput: ParentMetaParentUpdateConnectionInput;
  ParentMetaParentUpdateFieldInput: ParentMetaParentUpdateFieldInput;
  ParentMetaRelationInput: ParentMetaRelationInput;
  ParentMetaSort: ParentMetaSort;
  ParentMetaUniqueWhere: ParentMetaUniqueWhere;
  ParentMetaUpdateInput: ParentMetaUpdateInput;
  ParentMetaWhere: ParentMetaWhere;
  ParentMetasConnection: ParentMetasConnection;
  ParentOptions: ParentOptions;
  ParentParentMetaAggregateInput: ParentParentMetaAggregateInput;
  ParentParentMetaConnectFieldInput: ParentParentMetaConnectFieldInput;
  ParentParentMetaConnectOrCreateFieldInput: ParentParentMetaConnectOrCreateFieldInput;
  ParentParentMetaConnectOrCreateFieldInputOnCreate: ParentParentMetaConnectOrCreateFieldInputOnCreate;
  ParentParentMetaConnection: ParentParentMetaConnection;
  ParentParentMetaConnectionSort: ParentParentMetaConnectionSort;
  ParentParentMetaConnectionWhere: ParentParentMetaConnectionWhere;
  ParentParentMetaCreateFieldInput: ParentParentMetaCreateFieldInput;
  ParentParentMetaDeleteFieldInput: ParentParentMetaDeleteFieldInput;
  ParentParentMetaDisconnectFieldInput: ParentParentMetaDisconnectFieldInput;
  ParentParentMetaFieldInput: ParentParentMetaFieldInput;
  ParentParentMetaNodeAggregationWhereInput: ParentParentMetaNodeAggregationWhereInput;
  ParentParentMetaRelationship: ParentParentMetaRelationship;
  ParentParentMetaUpdateConnectionInput: ParentParentMetaUpdateConnectionInput;
  ParentParentMetaUpdateFieldInput: ParentParentMetaUpdateFieldInput;
  ParentSort: ParentSort;
  ParentUpdateInput: ParentUpdateInput;
  ParentWhere: ParentWhere;
  ParentsChildren: Omit<ParentsChildren, 'children'> & { children: Array<ResolversParentTypes['ChildDlGeneral']> };
  ParentsChildrenAggregateSelection: ParentsChildrenAggregateSelection;
  ParentsChildrenConnection: ParentsChildrenConnection;
  ParentsChildrenCreateInput: ParentsChildrenCreateInput;
  ParentsChildrenEdge: ParentsChildrenEdge;
  ParentsChildrenOptions: ParentsChildrenOptions;
  ParentsChildrenSort: ParentsChildrenSort;
  ParentsChildrenUpdateInput: ParentsChildrenUpdateInput;
  ParentsChildrenWhere: ParentsChildrenWhere;
  Query: {};
  QueryOptions: QueryOptions;
  String: Scalars['String']['output'];
  StringAggregateSelectionNonNullable: StringAggregateSelectionNonNullable;
  StringAggregateSelectionNullable: StringAggregateSelectionNullable;
  UpdateBookmarkDd1sMutationResponse: UpdateBookmarkDd1sMutationResponse;
  UpdateBookmarksMutationResponse: UpdateBookmarksMutationResponse;
  UpdateCollectionDs1sMutationResponse: UpdateCollectionDs1sMutationResponse;
  UpdateCollectionListDs1sMutationResponse: UpdateCollectionListDs1sMutationResponse;
  UpdateCollectionsMutationResponse: UpdateCollectionsMutationResponse;
  UpdateFolderDd1sMutationResponse: UpdateFolderDd1sMutationResponse;
  UpdateFoldersMutationResponse: UpdateFoldersMutationResponse;
  UpdateInfo: UpdateInfo;
  UpdateMemberMetasMutationResponse: UpdateMemberMetasMutationResponse;
  UpdateMembersMutationResponse: UpdateMembersMutationResponse;
  UpdateParentMetasMutationResponse: UpdateParentMetasMutationResponse;
  UpdateParentsChildrenMutationResponse: UpdateParentsChildrenMutationResponse;
  Upload: Scalars['Upload']['output'];
};

export type BookmarkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bookmark'] = ResolversParentTypes['Bookmark']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domainName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  linkPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Parent']>, ParentType, ContextType, RequireFields<BookmarkParentArgs, 'directed'>>;
  parentConnection?: Resolver<ResolversTypes['BookmarkParentConnection'], ParentType, ContextType, RequireFields<BookmarkParentConnectionArgs, 'directed'>>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  urlScheme?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkAggregateSelection'] = ResolversParentTypes['BookmarkAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  domainName?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  iconUri?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  linkPath?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  urlScheme?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkDd1Resolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkDd1'] = ResolversParentTypes['BookmarkDd1']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domainName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iconUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  linkPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  urlScheme?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkDd1AggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkDd1AggregateSelection'] = ResolversParentTypes['BookmarkDd1AggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  domainName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  iconUri?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  linkPath?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  urlScheme?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkDd1EdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkDd1Edge'] = ResolversParentTypes['BookmarkDd1Edge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['BookmarkDd1'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkDd1sConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkDd1sConnection'] = ResolversParentTypes['BookmarkDd1sConnection']> = {
  edges?: Resolver<Array<ResolversTypes['BookmarkDd1Edge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkEdge'] = ResolversParentTypes['BookmarkEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Bookmark'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkParentConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkParentConnection'] = ResolversParentTypes['BookmarkParentConnection']> = {
  edges?: Resolver<Array<ResolversTypes['BookmarkParentRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkParentRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkParentRelationship'] = ResolversParentTypes['BookmarkParentRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Parent'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarksConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarksConnection'] = ResolversParentTypes['BookmarksConnection']> = {
  edges?: Resolver<Array<ResolversTypes['BookmarkEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChildResolvers<ContextType = any, ParentType extends ResolversParentTypes['Child'] = ResolversParentTypes['Child']> = {
  __resolveType: TypeResolveFn<'Bookmark' | 'Folder', ParentType, ContextType>;
};

export type ChildDlGeneralResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChildDlGeneral'] = ResolversParentTypes['ChildDlGeneral']> = {
  __resolveType: TypeResolveFn<'BookmarkDd1' | 'FolderDd1', ParentType, ContextType>;
};

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  children?: Resolver<Array<ResolversTypes['Child']>, ParentType, ContextType, RequireFields<CollectionChildrenArgs, 'directed'>>;
  childrenConnection?: Resolver<ResolversTypes['ParentChildrenConnection'], ParentType, ContextType, RequireFields<CollectionChildrenConnectionArgs, 'directed'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<CollectionMemberArgs, 'directed'>>;
  memberAggregate?: Resolver<Maybe<ResolversTypes['CollectionMemberMemberAggregationSelection']>, ParentType, ContextType, RequireFields<CollectionMemberAggregateArgs, 'directed'>>;
  memberConnection?: Resolver<ResolversTypes['CollectionMemberConnection'], ParentType, ContextType, RequireFields<CollectionMemberConnectionArgs, 'directed'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parentMeta?: Resolver<Maybe<ResolversTypes['ParentMeta']>, ParentType, ContextType, RequireFields<CollectionParentMetaArgs, 'directed'>>;
  parentMetaAggregate?: Resolver<Maybe<ResolversTypes['CollectionParentMetaParentMetaAggregationSelection']>, ParentType, ContextType, RequireFields<CollectionParentMetaAggregateArgs, 'directed'>>;
  parentMetaConnection?: Resolver<ResolversTypes['ParentParentMetaConnection'], ParentType, ContextType, RequireFields<CollectionParentMetaConnectionArgs, 'directed'>>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionAggregateSelection'] = ResolversParentTypes['CollectionAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionDs1Resolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionDs1'] = ResolversParentTypes['CollectionDs1']> = {
  bookmarkCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionDs1AggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionDs1AggregateSelection'] = ResolversParentTypes['CollectionDs1AggregateSelection']> = {
  bookmarkCount?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionDs1EdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionDs1Edge'] = ResolversParentTypes['CollectionDs1Edge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CollectionDs1'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionDs1sConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionDs1sConnection'] = ResolversParentTypes['CollectionDs1sConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CollectionDs1Edge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionEdge'] = ResolversParentTypes['CollectionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionListDs1Resolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionListDs1'] = ResolversParentTypes['CollectionListDs1']> = {
  collections?: Resolver<Maybe<Array<ResolversTypes['CollectionDs1']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionListDs1AggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionListDs1AggregateSelection'] = ResolversParentTypes['CollectionListDs1AggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionListDs1EdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionListDs1Edge'] = ResolversParentTypes['CollectionListDs1Edge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CollectionListDs1'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionListDs1sConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionListDs1sConnection'] = ResolversParentTypes['CollectionListDs1sConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CollectionListDs1Edge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionMemberConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionMemberConnection'] = ResolversParentTypes['CollectionMemberConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CollectionMemberRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionMemberMemberAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionMemberMemberAggregationSelection'] = ResolversParentTypes['CollectionMemberMemberAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CollectionMemberMemberNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionMemberMemberNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionMemberMemberNodeAggregateSelection'] = ResolversParentTypes['CollectionMemberMemberNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionMemberRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionMemberRelationship'] = ResolversParentTypes['CollectionMemberRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionParentMetaParentMetaAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionParentMetaParentMetaAggregationSelection'] = ResolversParentTypes['CollectionParentMetaParentMetaAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CollectionParentMetaParentMetaNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionParentMetaParentMetaNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionParentMetaParentMetaNodeAggregateSelection'] = ResolversParentTypes['CollectionParentMetaParentMetaNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionsConnection'] = ResolversParentTypes['CollectionsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CollectionEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateBookmarkDd1sMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateBookmarkDd1sMutationResponse'] = ResolversParentTypes['CreateBookmarkDd1sMutationResponse']> = {
  bookmarkDd1s?: Resolver<Array<ResolversTypes['BookmarkDd1']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateBookmarksMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateBookmarksMutationResponse'] = ResolversParentTypes['CreateBookmarksMutationResponse']> = {
  bookmarks?: Resolver<Array<ResolversTypes['Bookmark']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCollectionDs1sMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCollectionDs1sMutationResponse'] = ResolversParentTypes['CreateCollectionDs1sMutationResponse']> = {
  collectionDs1s?: Resolver<Array<ResolversTypes['CollectionDs1']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCollectionListDs1sMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCollectionListDs1sMutationResponse'] = ResolversParentTypes['CreateCollectionListDs1sMutationResponse']> = {
  collectionListDs1s?: Resolver<Array<ResolversTypes['CollectionListDs1']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCollectionsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCollectionsMutationResponse'] = ResolversParentTypes['CreateCollectionsMutationResponse']> = {
  collections?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateFolderDd1sMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateFolderDd1sMutationResponse'] = ResolversParentTypes['CreateFolderDd1sMutationResponse']> = {
  folderDd1s?: Resolver<Array<ResolversTypes['FolderDd1']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateFoldersMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateFoldersMutationResponse'] = ResolversParentTypes['CreateFoldersMutationResponse']> = {
  folders?: Resolver<Array<ResolversTypes['Folder']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateInfo'] = ResolversParentTypes['CreateInfo']> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateMemberMetasMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateMemberMetasMutationResponse'] = ResolversParentTypes['CreateMemberMetasMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  memberMetas?: Resolver<Array<ResolversTypes['MemberMeta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateMembersMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateMembersMutationResponse'] = ResolversParentTypes['CreateMembersMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateParentMetasMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateParentMetasMutationResponse'] = ResolversParentTypes['CreateParentMetasMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  parentMetas?: Resolver<Array<ResolversTypes['ParentMeta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateParentsChildrenMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateParentsChildrenMutationResponse'] = ResolversParentTypes['CreateParentsChildrenMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  parentsChildren?: Resolver<Array<ResolversTypes['ParentsChildren']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DateTimeAggregateSelectionNullableResolvers<ContextType = any, ParentType extends ResolversParentTypes['DateTimeAggregateSelectionNullable'] = ResolversParentTypes['DateTimeAggregateSelectionNullable']> = {
  max?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteInfo'] = ResolversParentTypes['DeleteInfo']> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Folder'] = ResolversParentTypes['Folder']> = {
  children?: Resolver<Array<ResolversTypes['Child']>, ParentType, ContextType, RequireFields<FolderChildrenArgs, 'directed'>>;
  childrenConnection?: Resolver<ResolversTypes['ParentChildrenConnection'], ParentType, ContextType, RequireFields<FolderChildrenConnectionArgs, 'directed'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Parent']>, ParentType, ContextType, RequireFields<FolderParentArgs, 'directed'>>;
  parentConnection?: Resolver<ResolversTypes['FolderParentConnection'], ParentType, ContextType, RequireFields<FolderParentConnectionArgs, 'directed'>>;
  parentMeta?: Resolver<Maybe<ResolversTypes['ParentMeta']>, ParentType, ContextType, RequireFields<FolderParentMetaArgs, 'directed'>>;
  parentMetaAggregate?: Resolver<Maybe<ResolversTypes['FolderParentMetaParentMetaAggregationSelection']>, ParentType, ContextType, RequireFields<FolderParentMetaAggregateArgs, 'directed'>>;
  parentMetaConnection?: Resolver<ResolversTypes['ParentParentMetaConnection'], ParentType, ContextType, RequireFields<FolderParentMetaConnectionArgs, 'directed'>>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderAggregateSelection'] = ResolversParentTypes['FolderAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderDd1Resolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderDd1'] = ResolversParentTypes['FolderDd1']> = {
  bookmarkCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['ChildDlGeneral']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderDd1AggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderDd1AggregateSelection'] = ResolversParentTypes['FolderDd1AggregateSelection']> = {
  bookmarkCount?: Resolver<ResolversTypes['IntAggregateSelectionNullable'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderDd1EdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderDd1Edge'] = ResolversParentTypes['FolderDd1Edge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['FolderDd1'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderDd1sConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderDd1sConnection'] = ResolversParentTypes['FolderDd1sConnection']> = {
  edges?: Resolver<Array<ResolversTypes['FolderDd1Edge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderEdge'] = ResolversParentTypes['FolderEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Folder'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderParentConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderParentConnection'] = ResolversParentTypes['FolderParentConnection']> = {
  edges?: Resolver<Array<ResolversTypes['FolderParentRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderParentMetaParentMetaAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderParentMetaParentMetaAggregationSelection'] = ResolversParentTypes['FolderParentMetaParentMetaAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['FolderParentMetaParentMetaNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderParentMetaParentMetaNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderParentMetaParentMetaNodeAggregateSelection'] = ResolversParentTypes['FolderParentMetaParentMetaNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderParentRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderParentRelationship'] = ResolversParentTypes['FolderParentRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Parent'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FoldersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FoldersConnection'] = ResolversParentTypes['FoldersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['FolderEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdAggregateSelectionNonNullableResolvers<ContextType = any, ParentType extends ResolversParentTypes['IDAggregateSelectionNonNullable'] = ResolversParentTypes['IDAggregateSelectionNonNullable']> = {
  longest?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shortest?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IntAggregateSelectionNonNullableResolvers<ContextType = any, ParentType extends ResolversParentTypes['IntAggregateSelectionNonNullable'] = ResolversParentTypes['IntAggregateSelectionNonNullable']> = {
  average?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  max?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  min?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IntAggregateSelectionNullableResolvers<ContextType = any, ParentType extends ResolversParentTypes['IntAggregateSelectionNullable'] = ResolversParentTypes['IntAggregateSelectionNullable']> = {
  average?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = {
  collections?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<MemberCollectionsArgs, 'directed'>>;
  collectionsAggregate?: Resolver<Maybe<ResolversTypes['MemberCollectionCollectionsAggregationSelection']>, ParentType, ContextType, RequireFields<MemberCollectionsAggregateArgs, 'directed'>>;
  collectionsConnection?: Resolver<ResolversTypes['MemberCollectionsConnection'], ParentType, ContextType, RequireFields<MemberCollectionsConnectionArgs, 'directed'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  memberMeta?: Resolver<Maybe<ResolversTypes['MemberMeta']>, ParentType, ContextType, RequireFields<MemberMemberMetaArgs, 'directed'>>;
  memberMetaAggregate?: Resolver<Maybe<ResolversTypes['MemberMemberMetaMemberMetaAggregationSelection']>, ParentType, ContextType, RequireFields<MemberMemberMetaAggregateArgs, 'directed'>>;
  memberMetaConnection?: Resolver<ResolversTypes['MemberMemberMetaConnection'], ParentType, ContextType, RequireFields<MemberMemberMetaConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberAggregateSelection'] = ResolversParentTypes['MemberAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberCollectionCollectionsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberCollectionCollectionsAggregationSelection'] = ResolversParentTypes['MemberCollectionCollectionsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MemberCollectionCollectionsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberCollectionCollectionsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberCollectionCollectionsNodeAggregateSelection'] = ResolversParentTypes['MemberCollectionCollectionsNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberCollectionsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberCollectionsConnection'] = ResolversParentTypes['MemberCollectionsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MemberCollectionsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberCollectionsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberCollectionsRelationship'] = ResolversParentTypes['MemberCollectionsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberEdge'] = ResolversParentTypes['MemberEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberMemberMetaConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberMemberMetaConnection'] = ResolversParentTypes['MemberMemberMetaConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MemberMemberMetaRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberMemberMetaMemberMetaAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberMemberMetaMemberMetaAggregationSelection'] = ResolversParentTypes['MemberMemberMetaMemberMetaAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MemberMemberMetaMemberMetaNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberMemberMetaMemberMetaNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberMemberMetaMemberMetaNodeAggregateSelection'] = ResolversParentTypes['MemberMemberMetaMemberMetaNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberMemberMetaRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberMemberMetaRelationship'] = ResolversParentTypes['MemberMemberMetaRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MemberMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberMeta'] = ResolversParentTypes['MemberMeta']> = {
  collectionPositions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<MemberMetaMemberArgs, 'directed'>>;
  memberAggregate?: Resolver<Maybe<ResolversTypes['MemberMetaMemberMemberAggregationSelection']>, ParentType, ContextType, RequireFields<MemberMetaMemberAggregateArgs, 'directed'>>;
  memberConnection?: Resolver<ResolversTypes['MemberMetaMemberConnection'], ParentType, ContextType, RequireFields<MemberMetaMemberConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberMetaAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberMetaAggregateSelection'] = ResolversParentTypes['MemberMetaAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberMetaEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberMetaEdge'] = ResolversParentTypes['MemberMetaEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MemberMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberMetaMemberConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberMetaMemberConnection'] = ResolversParentTypes['MemberMetaMemberConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MemberMetaMemberRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberMetaMemberMemberAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberMetaMemberMemberAggregationSelection'] = ResolversParentTypes['MemberMetaMemberMemberAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MemberMetaMemberMemberNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberMetaMemberMemberNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberMetaMemberMemberNodeAggregateSelection'] = ResolversParentTypes['MemberMetaMemberMemberNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberMetaMemberRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberMetaMemberRelationship'] = ResolversParentTypes['MemberMetaMemberRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberMetasConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberMetasConnection'] = ResolversParentTypes['MemberMetasConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MemberMetaEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MembersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MembersConnection'] = ResolversParentTypes['MembersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MemberEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createBookmarkDd1s?: Resolver<ResolversTypes['CreateBookmarkDd1sMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateBookmarkDd1sArgs, 'input'>>;
  createBookmarkDlGeneral?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationCreateBookmarkDlGeneralArgs, 'data'>>;
  createBookmarks?: Resolver<ResolversTypes['CreateBookmarksMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateBookmarksArgs, 'input'>>;
  createCollection?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationCreateCollectionArgs, 'memberId' | 'name'>>;
  createCollectionDs1s?: Resolver<ResolversTypes['CreateCollectionDs1sMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateCollectionDs1sArgs, 'input'>>;
  createCollectionListDs1s?: Resolver<ResolversTypes['CreateCollectionListDs1sMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateCollectionListDs1sArgs, 'input'>>;
  createCollections?: Resolver<ResolversTypes['CreateCollectionsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateCollectionsArgs, 'input'>>;
  createFolderDd1s?: Resolver<ResolversTypes['CreateFolderDd1sMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateFolderDd1sArgs, 'input'>>;
  createFolders?: Resolver<ResolversTypes['CreateFoldersMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateFoldersArgs, 'input'>>;
  createMemberMetas?: Resolver<ResolversTypes['CreateMemberMetasMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateMemberMetasArgs, 'input'>>;
  createMembers?: Resolver<ResolversTypes['CreateMembersMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateMembersArgs, 'input'>>;
  createParentMetas?: Resolver<ResolversTypes['CreateParentMetasMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateParentMetasArgs, 'input'>>;
  createParentsChildren?: Resolver<ResolversTypes['CreateParentsChildrenMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateParentsChildrenArgs, 'input'>>;
  deleteBookmark?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteBookmarkArgs, 'id' | 'parentId'>>;
  deleteBookmarkDd1s?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteBookmarkDd1sArgs>>;
  deleteBookmarks?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteBookmarksArgs>>;
  deleteCascade?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteCascadeArgs, 'id'>>;
  deleteCollection?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteCollectionArgs, 'id' | 'memberId'>>;
  deleteCollectionDs1s?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteCollectionDs1sArgs>>;
  deleteCollectionListDs1s?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteCollectionListDs1sArgs>>;
  deleteCollections?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteCollectionsArgs>>;
  deleteFolder?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteFolderArgs, 'id' | 'parentId'>>;
  deleteFolderDd1s?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteFolderDd1sArgs>>;
  deleteFolders?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteFoldersArgs>>;
  deleteListCascade?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteListCascadeArgs, 'ids'>>;
  deleteMemberMetas?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteMemberMetasArgs>>;
  deleteMembers?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteMembersArgs>>;
  deleteParentMetas?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteParentMetasArgs>>;
  deleteParentsChildren?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteParentsChildrenArgs>>;
  importFirefoxBookmarks?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationImportFirefoxBookmarksArgs, 'file'>>;
  updateBookmarkDd1s?: Resolver<ResolversTypes['UpdateBookmarkDd1sMutationResponse'], ParentType, ContextType, Partial<MutationUpdateBookmarkDd1sArgs>>;
  updateBookmarks?: Resolver<ResolversTypes['UpdateBookmarksMutationResponse'], ParentType, ContextType, Partial<MutationUpdateBookmarksArgs>>;
  updateCollectionDs1s?: Resolver<ResolversTypes['UpdateCollectionDs1sMutationResponse'], ParentType, ContextType, Partial<MutationUpdateCollectionDs1sArgs>>;
  updateCollectionListDs1s?: Resolver<ResolversTypes['UpdateCollectionListDs1sMutationResponse'], ParentType, ContextType, Partial<MutationUpdateCollectionListDs1sArgs>>;
  updateCollections?: Resolver<ResolversTypes['UpdateCollectionsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateCollectionsArgs>>;
  updateFolderDd1s?: Resolver<ResolversTypes['UpdateFolderDd1sMutationResponse'], ParentType, ContextType, Partial<MutationUpdateFolderDd1sArgs>>;
  updateFolders?: Resolver<ResolversTypes['UpdateFoldersMutationResponse'], ParentType, ContextType, Partial<MutationUpdateFoldersArgs>>;
  updateMemberMetas?: Resolver<ResolversTypes['UpdateMemberMetasMutationResponse'], ParentType, ContextType, Partial<MutationUpdateMemberMetasArgs>>;
  updateMembers?: Resolver<ResolversTypes['UpdateMembersMutationResponse'], ParentType, ContextType, Partial<MutationUpdateMembersArgs>>;
  updateParentMetas?: Resolver<ResolversTypes['UpdateParentMetasMutationResponse'], ParentType, ContextType, Partial<MutationUpdateParentMetasArgs>>;
  updateParentsChildren?: Resolver<ResolversTypes['UpdateParentsChildrenMutationResponse'], ParentType, ContextType, Partial<MutationUpdateParentsChildrenArgs>>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Parent'] = ResolversParentTypes['Parent']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Folder', ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Child']>, ParentType, ContextType, RequireFields<ParentChildrenArgs, 'directed'>>;
  childrenConnection?: Resolver<ResolversTypes['ParentChildrenConnection'], ParentType, ContextType, RequireFields<ParentChildrenConnectionArgs, 'directed'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parentMeta?: Resolver<Maybe<ResolversTypes['ParentMeta']>, ParentType, ContextType, RequireFields<ParentParentMetaArgs, 'directed'>>;
  parentMetaConnection?: Resolver<ResolversTypes['ParentParentMetaConnection'], ParentType, ContextType, RequireFields<ParentParentMetaConnectionArgs, 'directed'>>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
};

export type ParentChildrenConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentChildrenConnection'] = ResolversParentTypes['ParentChildrenConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParentChildrenRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentChildrenRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentChildrenRelationship'] = ResolversParentTypes['ParentChildrenRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Child'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentMeta'] = ResolversParentTypes['ParentMeta']> = {
  childPositions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Parent']>, ParentType, ContextType, RequireFields<ParentMetaParentArgs, 'directed'>>;
  parentConnection?: Resolver<ResolversTypes['ParentMetaParentConnection'], ParentType, ContextType, RequireFields<ParentMetaParentConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentMetaAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentMetaAggregateSelection'] = ResolversParentTypes['ParentMetaAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentMetaEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentMetaEdge'] = ResolversParentTypes['ParentMetaEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParentMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentMetaParentConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentMetaParentConnection'] = ResolversParentTypes['ParentMetaParentConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParentMetaParentRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentMetaParentRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentMetaParentRelationship'] = ResolversParentTypes['ParentMetaParentRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Parent'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentMetasConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentMetasConnection'] = ResolversParentTypes['ParentMetasConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParentMetaEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentParentMetaConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentParentMetaConnection'] = ResolversParentTypes['ParentParentMetaConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParentParentMetaRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentParentMetaRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentParentMetaRelationship'] = ResolversParentTypes['ParentParentMetaRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParentMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentsChildrenResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentsChildren'] = ResolversParentTypes['ParentsChildren']> = {
  children?: Resolver<Array<ResolversTypes['ChildDlGeneral']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentsChildrenAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentsChildrenAggregateSelection'] = ResolversParentTypes['ParentsChildrenAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentsChildrenConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentsChildrenConnection'] = ResolversParentTypes['ParentsChildrenConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParentsChildrenEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentsChildrenEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentsChildrenEdge'] = ResolversParentTypes['ParentsChildrenEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParentsChildren'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  bookmarkDd1s?: Resolver<Array<ResolversTypes['BookmarkDd1']>, ParentType, ContextType, Partial<QueryBookmarkDd1sArgs>>;
  bookmarkDd1sAggregate?: Resolver<ResolversTypes['BookmarkDd1AggregateSelection'], ParentType, ContextType, Partial<QueryBookmarkDd1sAggregateArgs>>;
  bookmarkDd1sConnection?: Resolver<ResolversTypes['BookmarkDd1sConnection'], ParentType, ContextType, Partial<QueryBookmarkDd1sConnectionArgs>>;
  bookmarks?: Resolver<Array<ResolversTypes['Bookmark']>, ParentType, ContextType, Partial<QueryBookmarksArgs>>;
  bookmarksAggregate?: Resolver<ResolversTypes['BookmarkAggregateSelection'], ParentType, ContextType, Partial<QueryBookmarksAggregateArgs>>;
  bookmarksConnection?: Resolver<ResolversTypes['BookmarksConnection'], ParentType, ContextType, Partial<QueryBookmarksConnectionArgs>>;
  collectionDs1s?: Resolver<Array<ResolversTypes['CollectionDs1']>, ParentType, ContextType, Partial<QueryCollectionDs1sArgs>>;
  collectionDs1sAggregate?: Resolver<ResolversTypes['CollectionDs1AggregateSelection'], ParentType, ContextType, Partial<QueryCollectionDs1sAggregateArgs>>;
  collectionDs1sConnection?: Resolver<ResolversTypes['CollectionDs1sConnection'], ParentType, ContextType, Partial<QueryCollectionDs1sConnectionArgs>>;
  collectionList?: Resolver<Maybe<ResolversTypes['CollectionListDs1']>, ParentType, ContextType, RequireFields<QueryCollectionListArgs, 'memberId'>>;
  collectionListDs1s?: Resolver<Array<ResolversTypes['CollectionListDs1']>, ParentType, ContextType, Partial<QueryCollectionListDs1sArgs>>;
  collectionListDs1sAggregate?: Resolver<ResolversTypes['CollectionListDs1AggregateSelection'], ParentType, ContextType, Partial<QueryCollectionListDs1sAggregateArgs>>;
  collectionListDs1sConnection?: Resolver<ResolversTypes['CollectionListDs1sConnection'], ParentType, ContextType, Partial<QueryCollectionListDs1sConnectionArgs>>;
  collections?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType, Partial<QueryCollectionsArgs>>;
  collectionsAggregate?: Resolver<ResolversTypes['CollectionAggregateSelection'], ParentType, ContextType, Partial<QueryCollectionsAggregateArgs>>;
  collectionsConnection?: Resolver<ResolversTypes['CollectionsConnection'], ParentType, ContextType, Partial<QueryCollectionsConnectionArgs>>;
  folderDd1s?: Resolver<Array<ResolversTypes['FolderDd1']>, ParentType, ContextType, Partial<QueryFolderDd1sArgs>>;
  folderDd1sAggregate?: Resolver<ResolversTypes['FolderDd1AggregateSelection'], ParentType, ContextType, Partial<QueryFolderDd1sAggregateArgs>>;
  folderDd1sConnection?: Resolver<ResolversTypes['FolderDd1sConnection'], ParentType, ContextType, Partial<QueryFolderDd1sConnectionArgs>>;
  folders?: Resolver<Array<ResolversTypes['Folder']>, ParentType, ContextType, Partial<QueryFoldersArgs>>;
  foldersAggregate?: Resolver<ResolversTypes['FolderAggregateSelection'], ParentType, ContextType, Partial<QueryFoldersAggregateArgs>>;
  foldersConnection?: Resolver<ResolversTypes['FoldersConnection'], ParentType, ContextType, Partial<QueryFoldersConnectionArgs>>;
  memberMetas?: Resolver<Array<ResolversTypes['MemberMeta']>, ParentType, ContextType, Partial<QueryMemberMetasArgs>>;
  memberMetasAggregate?: Resolver<ResolversTypes['MemberMetaAggregateSelection'], ParentType, ContextType, Partial<QueryMemberMetasAggregateArgs>>;
  memberMetasConnection?: Resolver<ResolversTypes['MemberMetasConnection'], ParentType, ContextType, Partial<QueryMemberMetasConnectionArgs>>;
  members?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType, Partial<QueryMembersArgs>>;
  membersAggregate?: Resolver<ResolversTypes['MemberAggregateSelection'], ParentType, ContextType, Partial<QueryMembersAggregateArgs>>;
  membersConnection?: Resolver<ResolversTypes['MembersConnection'], ParentType, ContextType, Partial<QueryMembersConnectionArgs>>;
  parentChildren?: Resolver<Array<ResolversTypes['ChildDlGeneral']>, ParentType, ContextType, RequireFields<QueryParentChildrenArgs, 'id' | 'level'>>;
  parentMetas?: Resolver<Array<ResolversTypes['ParentMeta']>, ParentType, ContextType, Partial<QueryParentMetasArgs>>;
  parentMetasAggregate?: Resolver<ResolversTypes['ParentMetaAggregateSelection'], ParentType, ContextType, Partial<QueryParentMetasAggregateArgs>>;
  parentMetasConnection?: Resolver<ResolversTypes['ParentMetasConnection'], ParentType, ContextType, Partial<QueryParentMetasConnectionArgs>>;
  parentsChildren?: Resolver<Array<ResolversTypes['ParentsChildren']>, ParentType, ContextType, Partial<QueryParentsChildrenArgs>>;
  parentsChildrenAggregate?: Resolver<ResolversTypes['ParentsChildrenAggregateSelection'], ParentType, ContextType, Partial<QueryParentsChildrenAggregateArgs>>;
  parentsChildrenConnection?: Resolver<ResolversTypes['ParentsChildrenConnection'], ParentType, ContextType, Partial<QueryParentsChildrenConnectionArgs>>;
  parentsChildrenDeep?: Resolver<Array<ResolversTypes['ParentsChildren']>, ParentType, ContextType, RequireFields<QueryParentsChildrenDeepArgs, 'ids'>>;
};

export type StringAggregateSelectionNonNullableResolvers<ContextType = any, ParentType extends ResolversParentTypes['StringAggregateSelectionNonNullable'] = ResolversParentTypes['StringAggregateSelectionNonNullable']> = {
  longest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StringAggregateSelectionNullableResolvers<ContextType = any, ParentType extends ResolversParentTypes['StringAggregateSelectionNullable'] = ResolversParentTypes['StringAggregateSelectionNullable']> = {
  longest?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortest?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateBookmarkDd1sMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateBookmarkDd1sMutationResponse'] = ResolversParentTypes['UpdateBookmarkDd1sMutationResponse']> = {
  bookmarkDd1s?: Resolver<Array<ResolversTypes['BookmarkDd1']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateBookmarksMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateBookmarksMutationResponse'] = ResolversParentTypes['UpdateBookmarksMutationResponse']> = {
  bookmarks?: Resolver<Array<ResolversTypes['Bookmark']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCollectionDs1sMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCollectionDs1sMutationResponse'] = ResolversParentTypes['UpdateCollectionDs1sMutationResponse']> = {
  collectionDs1s?: Resolver<Array<ResolversTypes['CollectionDs1']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCollectionListDs1sMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCollectionListDs1sMutationResponse'] = ResolversParentTypes['UpdateCollectionListDs1sMutationResponse']> = {
  collectionListDs1s?: Resolver<Array<ResolversTypes['CollectionListDs1']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCollectionsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCollectionsMutationResponse'] = ResolversParentTypes['UpdateCollectionsMutationResponse']> = {
  collections?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateFolderDd1sMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateFolderDd1sMutationResponse'] = ResolversParentTypes['UpdateFolderDd1sMutationResponse']> = {
  folderDd1s?: Resolver<Array<ResolversTypes['FolderDd1']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateFoldersMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateFoldersMutationResponse'] = ResolversParentTypes['UpdateFoldersMutationResponse']> = {
  folders?: Resolver<Array<ResolversTypes['Folder']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateInfo'] = ResolversParentTypes['UpdateInfo']> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nodesDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateMemberMetasMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateMemberMetasMutationResponse'] = ResolversParentTypes['UpdateMemberMetasMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  memberMetas?: Resolver<Array<ResolversTypes['MemberMeta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateMembersMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateMembersMutationResponse'] = ResolversParentTypes['UpdateMembersMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateParentMetasMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateParentMetasMutationResponse'] = ResolversParentTypes['UpdateParentMetasMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  parentMetas?: Resolver<Array<ResolversTypes['ParentMeta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateParentsChildrenMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateParentsChildrenMutationResponse'] = ResolversParentTypes['UpdateParentsChildrenMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  parentsChildren?: Resolver<Array<ResolversTypes['ParentsChildren']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  Bookmark?: BookmarkResolvers<ContextType>;
  BookmarkAggregateSelection?: BookmarkAggregateSelectionResolvers<ContextType>;
  BookmarkDd1?: BookmarkDd1Resolvers<ContextType>;
  BookmarkDd1AggregateSelection?: BookmarkDd1AggregateSelectionResolvers<ContextType>;
  BookmarkDd1Edge?: BookmarkDd1EdgeResolvers<ContextType>;
  BookmarkDd1sConnection?: BookmarkDd1sConnectionResolvers<ContextType>;
  BookmarkEdge?: BookmarkEdgeResolvers<ContextType>;
  BookmarkParentConnection?: BookmarkParentConnectionResolvers<ContextType>;
  BookmarkParentRelationship?: BookmarkParentRelationshipResolvers<ContextType>;
  BookmarksConnection?: BookmarksConnectionResolvers<ContextType>;
  Child?: ChildResolvers<ContextType>;
  ChildDlGeneral?: ChildDlGeneralResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  CollectionAggregateSelection?: CollectionAggregateSelectionResolvers<ContextType>;
  CollectionDs1?: CollectionDs1Resolvers<ContextType>;
  CollectionDs1AggregateSelection?: CollectionDs1AggregateSelectionResolvers<ContextType>;
  CollectionDs1Edge?: CollectionDs1EdgeResolvers<ContextType>;
  CollectionDs1sConnection?: CollectionDs1sConnectionResolvers<ContextType>;
  CollectionEdge?: CollectionEdgeResolvers<ContextType>;
  CollectionListDs1?: CollectionListDs1Resolvers<ContextType>;
  CollectionListDs1AggregateSelection?: CollectionListDs1AggregateSelectionResolvers<ContextType>;
  CollectionListDs1Edge?: CollectionListDs1EdgeResolvers<ContextType>;
  CollectionListDs1sConnection?: CollectionListDs1sConnectionResolvers<ContextType>;
  CollectionMemberConnection?: CollectionMemberConnectionResolvers<ContextType>;
  CollectionMemberMemberAggregationSelection?: CollectionMemberMemberAggregationSelectionResolvers<ContextType>;
  CollectionMemberMemberNodeAggregateSelection?: CollectionMemberMemberNodeAggregateSelectionResolvers<ContextType>;
  CollectionMemberRelationship?: CollectionMemberRelationshipResolvers<ContextType>;
  CollectionParentMetaParentMetaAggregationSelection?: CollectionParentMetaParentMetaAggregationSelectionResolvers<ContextType>;
  CollectionParentMetaParentMetaNodeAggregateSelection?: CollectionParentMetaParentMetaNodeAggregateSelectionResolvers<ContextType>;
  CollectionsConnection?: CollectionsConnectionResolvers<ContextType>;
  CreateBookmarkDd1sMutationResponse?: CreateBookmarkDd1sMutationResponseResolvers<ContextType>;
  CreateBookmarksMutationResponse?: CreateBookmarksMutationResponseResolvers<ContextType>;
  CreateCollectionDs1sMutationResponse?: CreateCollectionDs1sMutationResponseResolvers<ContextType>;
  CreateCollectionListDs1sMutationResponse?: CreateCollectionListDs1sMutationResponseResolvers<ContextType>;
  CreateCollectionsMutationResponse?: CreateCollectionsMutationResponseResolvers<ContextType>;
  CreateFolderDd1sMutationResponse?: CreateFolderDd1sMutationResponseResolvers<ContextType>;
  CreateFoldersMutationResponse?: CreateFoldersMutationResponseResolvers<ContextType>;
  CreateInfo?: CreateInfoResolvers<ContextType>;
  CreateMemberMetasMutationResponse?: CreateMemberMetasMutationResponseResolvers<ContextType>;
  CreateMembersMutationResponse?: CreateMembersMutationResponseResolvers<ContextType>;
  CreateParentMetasMutationResponse?: CreateParentMetasMutationResponseResolvers<ContextType>;
  CreateParentsChildrenMutationResponse?: CreateParentsChildrenMutationResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DateTimeAggregateSelectionNullable?: DateTimeAggregateSelectionNullableResolvers<ContextType>;
  DeleteInfo?: DeleteInfoResolvers<ContextType>;
  Folder?: FolderResolvers<ContextType>;
  FolderAggregateSelection?: FolderAggregateSelectionResolvers<ContextType>;
  FolderDd1?: FolderDd1Resolvers<ContextType>;
  FolderDd1AggregateSelection?: FolderDd1AggregateSelectionResolvers<ContextType>;
  FolderDd1Edge?: FolderDd1EdgeResolvers<ContextType>;
  FolderDd1sConnection?: FolderDd1sConnectionResolvers<ContextType>;
  FolderEdge?: FolderEdgeResolvers<ContextType>;
  FolderParentConnection?: FolderParentConnectionResolvers<ContextType>;
  FolderParentMetaParentMetaAggregationSelection?: FolderParentMetaParentMetaAggregationSelectionResolvers<ContextType>;
  FolderParentMetaParentMetaNodeAggregateSelection?: FolderParentMetaParentMetaNodeAggregateSelectionResolvers<ContextType>;
  FolderParentRelationship?: FolderParentRelationshipResolvers<ContextType>;
  FoldersConnection?: FoldersConnectionResolvers<ContextType>;
  IDAggregateSelectionNonNullable?: IdAggregateSelectionNonNullableResolvers<ContextType>;
  IntAggregateSelectionNonNullable?: IntAggregateSelectionNonNullableResolvers<ContextType>;
  IntAggregateSelectionNullable?: IntAggregateSelectionNullableResolvers<ContextType>;
  Member?: MemberResolvers<ContextType>;
  MemberAggregateSelection?: MemberAggregateSelectionResolvers<ContextType>;
  MemberCollectionCollectionsAggregationSelection?: MemberCollectionCollectionsAggregationSelectionResolvers<ContextType>;
  MemberCollectionCollectionsNodeAggregateSelection?: MemberCollectionCollectionsNodeAggregateSelectionResolvers<ContextType>;
  MemberCollectionsConnection?: MemberCollectionsConnectionResolvers<ContextType>;
  MemberCollectionsRelationship?: MemberCollectionsRelationshipResolvers<ContextType>;
  MemberEdge?: MemberEdgeResolvers<ContextType>;
  MemberMemberMetaConnection?: MemberMemberMetaConnectionResolvers<ContextType>;
  MemberMemberMetaMemberMetaAggregationSelection?: MemberMemberMetaMemberMetaAggregationSelectionResolvers<ContextType>;
  MemberMemberMetaMemberMetaNodeAggregateSelection?: MemberMemberMetaMemberMetaNodeAggregateSelectionResolvers<ContextType>;
  MemberMemberMetaRelationship?: MemberMemberMetaRelationshipResolvers<ContextType>;
  MemberMeta?: MemberMetaResolvers<ContextType>;
  MemberMetaAggregateSelection?: MemberMetaAggregateSelectionResolvers<ContextType>;
  MemberMetaEdge?: MemberMetaEdgeResolvers<ContextType>;
  MemberMetaMemberConnection?: MemberMetaMemberConnectionResolvers<ContextType>;
  MemberMetaMemberMemberAggregationSelection?: MemberMetaMemberMemberAggregationSelectionResolvers<ContextType>;
  MemberMetaMemberMemberNodeAggregateSelection?: MemberMetaMemberMemberNodeAggregateSelectionResolvers<ContextType>;
  MemberMetaMemberRelationship?: MemberMetaMemberRelationshipResolvers<ContextType>;
  MemberMetasConnection?: MemberMetasConnectionResolvers<ContextType>;
  MembersConnection?: MembersConnectionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Parent?: ParentResolvers<ContextType>;
  ParentChildrenConnection?: ParentChildrenConnectionResolvers<ContextType>;
  ParentChildrenRelationship?: ParentChildrenRelationshipResolvers<ContextType>;
  ParentMeta?: ParentMetaResolvers<ContextType>;
  ParentMetaAggregateSelection?: ParentMetaAggregateSelectionResolvers<ContextType>;
  ParentMetaEdge?: ParentMetaEdgeResolvers<ContextType>;
  ParentMetaParentConnection?: ParentMetaParentConnectionResolvers<ContextType>;
  ParentMetaParentRelationship?: ParentMetaParentRelationshipResolvers<ContextType>;
  ParentMetasConnection?: ParentMetasConnectionResolvers<ContextType>;
  ParentParentMetaConnection?: ParentParentMetaConnectionResolvers<ContextType>;
  ParentParentMetaRelationship?: ParentParentMetaRelationshipResolvers<ContextType>;
  ParentsChildren?: ParentsChildrenResolvers<ContextType>;
  ParentsChildrenAggregateSelection?: ParentsChildrenAggregateSelectionResolvers<ContextType>;
  ParentsChildrenConnection?: ParentsChildrenConnectionResolvers<ContextType>;
  ParentsChildrenEdge?: ParentsChildrenEdgeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StringAggregateSelectionNonNullable?: StringAggregateSelectionNonNullableResolvers<ContextType>;
  StringAggregateSelectionNullable?: StringAggregateSelectionNullableResolvers<ContextType>;
  UpdateBookmarkDd1sMutationResponse?: UpdateBookmarkDd1sMutationResponseResolvers<ContextType>;
  UpdateBookmarksMutationResponse?: UpdateBookmarksMutationResponseResolvers<ContextType>;
  UpdateCollectionDs1sMutationResponse?: UpdateCollectionDs1sMutationResponseResolvers<ContextType>;
  UpdateCollectionListDs1sMutationResponse?: UpdateCollectionListDs1sMutationResponseResolvers<ContextType>;
  UpdateCollectionsMutationResponse?: UpdateCollectionsMutationResponseResolvers<ContextType>;
  UpdateFolderDd1sMutationResponse?: UpdateFolderDd1sMutationResponseResolvers<ContextType>;
  UpdateFoldersMutationResponse?: UpdateFoldersMutationResponseResolvers<ContextType>;
  UpdateInfo?: UpdateInfoResolvers<ContextType>;
  UpdateMemberMetasMutationResponse?: UpdateMemberMetasMutationResponseResolvers<ContextType>;
  UpdateMembersMutationResponse?: UpdateMembersMutationResponseResolvers<ContextType>;
  UpdateParentMetasMutationResponse?: UpdateParentMetasMutationResponseResolvers<ContextType>;
  UpdateParentsChildrenMutationResponse?: UpdateParentsChildrenMutationResponseResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


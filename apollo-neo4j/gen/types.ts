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

export type BmsContainer = Parent & {
  __typename?: 'BmsContainer';
  bookmarks: Array<Bookmark>;
  bookmarksAggregate?: Maybe<BmsContainerBookmarkBookmarksAggregationSelection>;
  bookmarksConnection: BmsContainerBookmarksConnection;
  id: Scalars['ID']['output'];
  member?: Maybe<Member>;
  memberAggregate?: Maybe<BmsContainerMemberMemberAggregationSelection>;
  memberConnection: BmsContainerMemberConnection;
};


export type BmsContainerBookmarksArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<BookmarkOptions>;
  where?: InputMaybe<BookmarkWhere>;
};


export type BmsContainerBookmarksAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BookmarkWhere>;
};


export type BmsContainerBookmarksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BmsContainerBookmarksConnectionSort>>;
  where?: InputMaybe<BmsContainerBookmarksConnectionWhere>;
};


export type BmsContainerMemberArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<MemberOptions>;
  where?: InputMaybe<MemberWhere>;
};


export type BmsContainerMemberAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MemberWhere>;
};


export type BmsContainerMemberConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BmsContainerMemberConnectionSort>>;
  where?: InputMaybe<BmsContainerMemberConnectionWhere>;
};

export type BmsContainerAggregateSelection = {
  __typename?: 'BmsContainerAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
};

export type BmsContainerBookmarkBookmarksAggregationSelection = {
  __typename?: 'BmsContainerBookmarkBookmarksAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<BmsContainerBookmarkBookmarksNodeAggregateSelection>;
};

export type BmsContainerBookmarkBookmarksNodeAggregateSelection = {
  __typename?: 'BmsContainerBookmarkBookmarksNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  domainName: StringAggregateSelectionNullable;
  iconUri: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  linkPath: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  urlScheme: StringAggregateSelectionNullable;
};

export type BmsContainerBookmarksAggregateInput = {
  AND?: InputMaybe<Array<BmsContainerBookmarksAggregateInput>>;
  NOT?: InputMaybe<BmsContainerBookmarksAggregateInput>;
  OR?: InputMaybe<Array<BmsContainerBookmarksAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<BmsContainerBookmarksNodeAggregationWhereInput>;
};

export type BmsContainerBookmarksConnectFieldInput = {
  connect?: InputMaybe<Array<BookmarkConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<BookmarkConnectWhere>;
};

export type BmsContainerBookmarksConnectOrCreateFieldInput = {
  onCreate: BmsContainerBookmarksConnectOrCreateFieldInputOnCreate;
  where: BookmarkConnectOrCreateWhere;
};

export type BmsContainerBookmarksConnectOrCreateFieldInputOnCreate = {
  node: BookmarkOnCreateInput;
};

export type BmsContainerBookmarksConnection = {
  __typename?: 'BmsContainerBookmarksConnection';
  edges: Array<BmsContainerBookmarksRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BmsContainerBookmarksConnectionSort = {
  node?: InputMaybe<BookmarkSort>;
};

export type BmsContainerBookmarksConnectionWhere = {
  AND?: InputMaybe<Array<BmsContainerBookmarksConnectionWhere>>;
  NOT?: InputMaybe<BmsContainerBookmarksConnectionWhere>;
  OR?: InputMaybe<Array<BmsContainerBookmarksConnectionWhere>>;
  node?: InputMaybe<BookmarkWhere>;
};

export type BmsContainerBookmarksCreateFieldInput = {
  node: BookmarkCreateInput;
};

export type BmsContainerBookmarksDeleteFieldInput = {
  delete?: InputMaybe<BookmarkDeleteInput>;
  where?: InputMaybe<BmsContainerBookmarksConnectionWhere>;
};

export type BmsContainerBookmarksDisconnectFieldInput = {
  disconnect?: InputMaybe<BookmarkDisconnectInput>;
  where?: InputMaybe<BmsContainerBookmarksConnectionWhere>;
};

export type BmsContainerBookmarksFieldInput = {
  connect?: InputMaybe<Array<BmsContainerBookmarksConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<BmsContainerBookmarksConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<BmsContainerBookmarksCreateFieldInput>>;
};

export type BmsContainerBookmarksNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BmsContainerBookmarksNodeAggregationWhereInput>>;
  NOT?: InputMaybe<BmsContainerBookmarksNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<BmsContainerBookmarksNodeAggregationWhereInput>>;
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
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  domainName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  domainName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  domainName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  domainName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  domainName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  domainName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  domainName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  domainName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  domainName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  domainName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  domainName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  domainName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  domainName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  domainName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  domainName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  iconUri_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  iconUri_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  iconUri_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  iconUri_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  iconUri_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  iconUri_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  iconUri_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  iconUri_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  iconUri_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  iconUri_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  iconUri_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  iconUri_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  iconUri_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  iconUri_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  iconUri_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  linkPath_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  linkPath_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  linkPath_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  linkPath_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  linkPath_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  linkPath_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  linkPath_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  linkPath_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  linkPath_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  linkPath_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  linkPath_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  linkPath_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  linkPath_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  linkPath_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  linkPath_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  urlScheme_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  urlScheme_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  urlScheme_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  urlScheme_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  urlScheme_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  urlScheme_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  urlScheme_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  urlScheme_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  urlScheme_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  urlScheme_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  urlScheme_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  urlScheme_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  urlScheme_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  urlScheme_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  urlScheme_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type BmsContainerBookmarksRelationship = {
  __typename?: 'BmsContainerBookmarksRelationship';
  cursor: Scalars['String']['output'];
  node: Bookmark;
};

export type BmsContainerBookmarksUpdateConnectionInput = {
  node?: InputMaybe<BookmarkUpdateInput>;
};

export type BmsContainerBookmarksUpdateFieldInput = {
  connect?: InputMaybe<Array<BmsContainerBookmarksConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<BmsContainerBookmarksConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<BmsContainerBookmarksCreateFieldInput>>;
  delete?: InputMaybe<Array<BmsContainerBookmarksDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<BmsContainerBookmarksDisconnectFieldInput>>;
  update?: InputMaybe<BmsContainerBookmarksUpdateConnectionInput>;
  where?: InputMaybe<BmsContainerBookmarksConnectionWhere>;
};

export type BmsContainerConnectInput = {
  bookmarks?: InputMaybe<Array<BmsContainerBookmarksConnectFieldInput>>;
  member?: InputMaybe<BmsContainerMemberConnectFieldInput>;
};

export type BmsContainerConnectOrCreateInput = {
  bookmarks?: InputMaybe<Array<BmsContainerBookmarksConnectOrCreateFieldInput>>;
  member?: InputMaybe<BmsContainerMemberConnectOrCreateFieldInput>;
};

export type BmsContainerConnectOrCreateWhere = {
  node: BmsContainerUniqueWhere;
};

export type BmsContainerConnectWhere = {
  node: BmsContainerWhere;
};

export type BmsContainerCreateInput = {
  bookmarks?: InputMaybe<BmsContainerBookmarksFieldInput>;
  member?: InputMaybe<BmsContainerMemberFieldInput>;
};

export type BmsContainerDeleteInput = {
  bookmarks?: InputMaybe<Array<BmsContainerBookmarksDeleteFieldInput>>;
  member?: InputMaybe<BmsContainerMemberDeleteFieldInput>;
};

export type BmsContainerDisconnectInput = {
  bookmarks?: InputMaybe<Array<BmsContainerBookmarksDisconnectFieldInput>>;
  member?: InputMaybe<BmsContainerMemberDisconnectFieldInput>;
};

export type BmsContainerEdge = {
  __typename?: 'BmsContainerEdge';
  cursor: Scalars['String']['output'];
  node: BmsContainer;
};

export type BmsContainerMemberAggregateInput = {
  AND?: InputMaybe<Array<BmsContainerMemberAggregateInput>>;
  NOT?: InputMaybe<BmsContainerMemberAggregateInput>;
  OR?: InputMaybe<Array<BmsContainerMemberAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<BmsContainerMemberNodeAggregationWhereInput>;
};

export type BmsContainerMemberConnectFieldInput = {
  connect?: InputMaybe<MemberConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<MemberConnectWhere>;
};

export type BmsContainerMemberConnectOrCreateFieldInput = {
  onCreate: BmsContainerMemberConnectOrCreateFieldInputOnCreate;
  where: MemberConnectOrCreateWhere;
};

export type BmsContainerMemberConnectOrCreateFieldInputOnCreate = {
  node: MemberOnCreateInput;
};

export type BmsContainerMemberConnection = {
  __typename?: 'BmsContainerMemberConnection';
  edges: Array<BmsContainerMemberRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BmsContainerMemberConnectionSort = {
  node?: InputMaybe<MemberSort>;
};

export type BmsContainerMemberConnectionWhere = {
  AND?: InputMaybe<Array<BmsContainerMemberConnectionWhere>>;
  NOT?: InputMaybe<BmsContainerMemberConnectionWhere>;
  OR?: InputMaybe<Array<BmsContainerMemberConnectionWhere>>;
  node?: InputMaybe<MemberWhere>;
};

export type BmsContainerMemberCreateFieldInput = {
  node: MemberCreateInput;
};

export type BmsContainerMemberDeleteFieldInput = {
  delete?: InputMaybe<MemberDeleteInput>;
  where?: InputMaybe<BmsContainerMemberConnectionWhere>;
};

export type BmsContainerMemberDisconnectFieldInput = {
  disconnect?: InputMaybe<MemberDisconnectInput>;
  where?: InputMaybe<BmsContainerMemberConnectionWhere>;
};

export type BmsContainerMemberFieldInput = {
  connect?: InputMaybe<BmsContainerMemberConnectFieldInput>;
  connectOrCreate?: InputMaybe<BmsContainerMemberConnectOrCreateFieldInput>;
  create?: InputMaybe<BmsContainerMemberCreateFieldInput>;
};

export type BmsContainerMemberMemberAggregationSelection = {
  __typename?: 'BmsContainerMemberMemberAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<BmsContainerMemberMemberNodeAggregateSelection>;
};

export type BmsContainerMemberMemberNodeAggregateSelection = {
  __typename?: 'BmsContainerMemberMemberNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type BmsContainerMemberNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BmsContainerMemberNodeAggregationWhereInput>>;
  NOT?: InputMaybe<BmsContainerMemberNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<BmsContainerMemberNodeAggregationWhereInput>>;
};

export type BmsContainerMemberRelationship = {
  __typename?: 'BmsContainerMemberRelationship';
  cursor: Scalars['String']['output'];
  node: Member;
};

export type BmsContainerMemberUpdateConnectionInput = {
  node?: InputMaybe<MemberUpdateInput>;
};

export type BmsContainerMemberUpdateFieldInput = {
  connect?: InputMaybe<BmsContainerMemberConnectFieldInput>;
  connectOrCreate?: InputMaybe<BmsContainerMemberConnectOrCreateFieldInput>;
  create?: InputMaybe<BmsContainerMemberCreateFieldInput>;
  delete?: InputMaybe<BmsContainerMemberDeleteFieldInput>;
  disconnect?: InputMaybe<BmsContainerMemberDisconnectFieldInput>;
  update?: InputMaybe<BmsContainerMemberUpdateConnectionInput>;
  where?: InputMaybe<BmsContainerMemberConnectionWhere>;
};

export type BmsContainerOnCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BmsContainerOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more BmsContainerSort objects to sort BmsContainers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<BmsContainerSort>>;
};

export type BmsContainerRelationInput = {
  bookmarks?: InputMaybe<Array<BmsContainerBookmarksCreateFieldInput>>;
  member?: InputMaybe<BmsContainerMemberCreateFieldInput>;
};

/** Fields to sort BmsContainers by. The order in which sorts are applied is not guaranteed when specifying many fields in one BmsContainerSort object. */
export type BmsContainerSort = {
  id?: InputMaybe<SortDirection>;
};

export type BmsContainerUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BmsContainerUpdateInput = {
  bookmarks?: InputMaybe<Array<BmsContainerBookmarksUpdateFieldInput>>;
  member?: InputMaybe<BmsContainerMemberUpdateFieldInput>;
};

export type BmsContainerWhere = {
  AND?: InputMaybe<Array<BmsContainerWhere>>;
  NOT?: InputMaybe<BmsContainerWhere>;
  OR?: InputMaybe<Array<BmsContainerWhere>>;
  bookmarksAggregate?: InputMaybe<BmsContainerBookmarksAggregateInput>;
  /** Return BmsContainers where all of the related BmsContainerBookmarksConnections match this filter */
  bookmarksConnection_ALL?: InputMaybe<BmsContainerBookmarksConnectionWhere>;
  /** Return BmsContainers where none of the related BmsContainerBookmarksConnections match this filter */
  bookmarksConnection_NONE?: InputMaybe<BmsContainerBookmarksConnectionWhere>;
  /** Return BmsContainers where one of the related BmsContainerBookmarksConnections match this filter */
  bookmarksConnection_SINGLE?: InputMaybe<BmsContainerBookmarksConnectionWhere>;
  /** Return BmsContainers where some of the related BmsContainerBookmarksConnections match this filter */
  bookmarksConnection_SOME?: InputMaybe<BmsContainerBookmarksConnectionWhere>;
  /** Return BmsContainers where all of the related Bookmarks match this filter */
  bookmarks_ALL?: InputMaybe<BookmarkWhere>;
  /** Return BmsContainers where none of the related Bookmarks match this filter */
  bookmarks_NONE?: InputMaybe<BookmarkWhere>;
  /** Return BmsContainers where one of the related Bookmarks match this filter */
  bookmarks_SINGLE?: InputMaybe<BookmarkWhere>;
  /** Return BmsContainers where some of the related Bookmarks match this filter */
  bookmarks_SOME?: InputMaybe<BookmarkWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  member?: InputMaybe<MemberWhere>;
  memberAggregate?: InputMaybe<BmsContainerMemberAggregateInput>;
  memberConnection?: InputMaybe<BmsContainerMemberConnectionWhere>;
  memberConnection_NOT?: InputMaybe<BmsContainerMemberConnectionWhere>;
  member_NOT?: InputMaybe<MemberWhere>;
};

export type BmsContainersConnection = {
  __typename?: 'BmsContainersConnection';
  edges: Array<BmsContainerEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BmsPaged = {
  __typename?: 'BmsPaged';
  bookmarks: Array<BookmarkDl>;
  totalCount: Scalars['Int']['output'];
};

export type BmsPagedAggregateSelection = {
  __typename?: 'BmsPagedAggregateSelection';
  count: Scalars['Int']['output'];
  totalCount: IntAggregateSelectionNonNullable;
};

export type BmsPagedCreateInput = {
  totalCount: Scalars['Int']['input'];
};

export type BmsPagedEdge = {
  __typename?: 'BmsPagedEdge';
  cursor: Scalars['String']['output'];
  node: BmsPaged;
};

export type BmsPagedOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more BmsPagedSort objects to sort BmsPageds by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<BmsPagedSort>>;
};

/** Fields to sort BmsPageds by. The order in which sorts are applied is not guaranteed when specifying many fields in one BmsPagedSort object. */
export type BmsPagedSort = {
  totalCount?: InputMaybe<SortDirection>;
};

export type BmsPagedUpdateInput = {
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  totalCount_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  totalCount_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
};

export type BmsPagedWhere = {
  AND?: InputMaybe<Array<BmsPagedWhere>>;
  NOT?: InputMaybe<BmsPagedWhere>;
  OR?: InputMaybe<Array<BmsPagedWhere>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  totalCount_GT?: InputMaybe<Scalars['Int']['input']>;
  totalCount_GTE?: InputMaybe<Scalars['Int']['input']>;
  totalCount_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalCount_LT?: InputMaybe<Scalars['Int']['input']>;
  totalCount_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type BmsPagedsConnection = {
  __typename?: 'BmsPagedsConnection';
  edges: Array<BmsPagedEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Bookmark = {
  __typename?: 'Bookmark';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  domainName?: Maybe<Scalars['String']['output']>;
  iconUri?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  linkPath?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Parent>;
  parentConnection: BookmarkParentConnection;
  tags: Array<Tag>;
  tagsAggregate?: Maybe<BookmarkTagTagsAggregationSelection>;
  tagsConnection: BookmarkTagsConnection;
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


export type BookmarkTagsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TagOptions>;
  where?: InputMaybe<TagWhere>;
};


export type BookmarkTagsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TagWhere>;
};


export type BookmarkTagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BookmarkTagsConnectionSort>>;
  where?: InputMaybe<BookmarkTagsConnectionWhere>;
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
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  urlScheme: StringAggregateSelectionNullable;
};

export type BookmarkConnectInput = {
  parent?: InputMaybe<BookmarkParentConnectFieldInput>;
  tags?: InputMaybe<Array<BookmarkTagsConnectFieldInput>>;
};

export type BookmarkConnectOrCreateInput = {
  tags?: InputMaybe<Array<BookmarkTagsConnectOrCreateFieldInput>>;
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
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<BookmarkParentFieldInput>;
  tags?: InputMaybe<BookmarkTagsFieldInput>;
  urlScheme?: InputMaybe<Scalars['String']['input']>;
};

export type BookmarkDeleteInput = {
  parent?: InputMaybe<BookmarkParentDeleteFieldInput>;
  tags?: InputMaybe<Array<BookmarkTagsDeleteFieldInput>>;
};

export type BookmarkDisconnectInput = {
  parent?: InputMaybe<BookmarkParentDisconnectFieldInput>;
  tags?: InputMaybe<Array<BookmarkTagsDisconnectFieldInput>>;
};

export type BookmarkDl = {
  __typename?: 'BookmarkDl';
  description?: Maybe<Scalars['String']['output']>;
  domainName: Scalars['String']['output'];
  iconUri?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  linkPath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tags?: Maybe<Array<TagDs>>;
  urlScheme: Scalars['String']['output'];
};

export type BookmarkDlAggregateSelection = {
  __typename?: 'BookmarkDlAggregateSelection';
  count: Scalars['Int']['output'];
  description: StringAggregateSelectionNullable;
  domainName: StringAggregateSelectionNonNullable;
  iconUri: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  linkPath: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  urlScheme: StringAggregateSelectionNonNullable;
};

export type BookmarkDlCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  domainName: Scalars['String']['input'];
  iconUri?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  linkPath: Scalars['String']['input'];
  name: Scalars['String']['input'];
  urlScheme: Scalars['String']['input'];
};

export type BookmarkDlEdge = {
  __typename?: 'BookmarkDlEdge';
  cursor: Scalars['String']['output'];
  node: BookmarkDl;
};

export type BookmarkDlOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more BookmarkDlSort objects to sort BookmarkDls by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<BookmarkDlSort>>;
};

/** Fields to sort BookmarkDls by. The order in which sorts are applied is not guaranteed when specifying many fields in one BookmarkDlSort object. */
export type BookmarkDlSort = {
  description?: InputMaybe<SortDirection>;
  domainName?: InputMaybe<SortDirection>;
  iconUri?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  linkPath?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  urlScheme?: InputMaybe<SortDirection>;
};

export type BookmarkDlUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  domainName?: InputMaybe<Scalars['String']['input']>;
  iconUri?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  linkPath?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  urlScheme?: InputMaybe<Scalars['String']['input']>;
};

export type BookmarkDlWhere = {
  AND?: InputMaybe<Array<BookmarkDlWhere>>;
  NOT?: InputMaybe<BookmarkDlWhere>;
  OR?: InputMaybe<Array<BookmarkDlWhere>>;
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
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  urlScheme?: InputMaybe<Scalars['String']['input']>;
  urlScheme_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  urlScheme_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  urlScheme_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  urlScheme_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type BookmarkDlsConnection = {
  __typename?: 'BookmarkDlsConnection';
  edges: Array<BookmarkDlEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BookmarkEdge = {
  __typename?: 'BookmarkEdge';
  cursor: Scalars['String']['output'];
  node: Bookmark;
};

export type BookmarkFilter = {
  __typename?: 'BookmarkFilter';
  bmLoose?: Maybe<Scalars['Boolean']['output']>;
  bmParentsTxt?: Maybe<Scalars['String']['output']>;
  bmTags: Array<Scalars['String']['output']>;
  bmTxt?: Maybe<Scalars['String']['output']>;
  bmUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  member?: Maybe<Member>;
  memberAggregate?: Maybe<BookmarkFilterMemberMemberAggregationSelection>;
  memberConnection: BookmarkFilterMemberConnection;
  name?: Maybe<Scalars['String']['output']>;
  sortBy?: Maybe<Scalars['String']['output']>;
  sortDir?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BookmarkFilterMemberArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<MemberOptions>;
  where?: InputMaybe<MemberWhere>;
};


export type BookmarkFilterMemberAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MemberWhere>;
};


export type BookmarkFilterMemberConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BookmarkFilterMemberConnectionSort>>;
  where?: InputMaybe<BookmarkFilterMemberConnectionWhere>;
};

export type BookmarkFilterAggregateSelection = {
  __typename?: 'BookmarkFilterAggregateSelection';
  bmParentsTxt: StringAggregateSelectionNullable;
  bmTxt: StringAggregateSelectionNullable;
  bmUrl: StringAggregateSelectionNullable;
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  sortBy: StringAggregateSelectionNullable;
  sortDir: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type BookmarkFilterConnectInput = {
  member?: InputMaybe<BookmarkFilterMemberConnectFieldInput>;
};

export type BookmarkFilterConnectOrCreateInput = {
  member?: InputMaybe<BookmarkFilterMemberConnectOrCreateFieldInput>;
};

export type BookmarkFilterConnectOrCreateWhere = {
  node: BookmarkFilterUniqueWhere;
};

export type BookmarkFilterConnectWhere = {
  node: BookmarkFilterWhere;
};

export type BookmarkFilterCreateInput = {
  bmLoose?: InputMaybe<Scalars['Boolean']['input']>;
  bmParentsTxt?: InputMaybe<Scalars['String']['input']>;
  bmTags: Array<Scalars['String']['input']>;
  bmTxt?: InputMaybe<Scalars['String']['input']>;
  bmUrl?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  member?: InputMaybe<BookmarkFilterMemberFieldInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDir?: InputMaybe<Scalars['String']['input']>;
};

export type BookmarkFilterDeleteInput = {
  member?: InputMaybe<BookmarkFilterMemberDeleteFieldInput>;
};

export type BookmarkFilterDisconnectInput = {
  member?: InputMaybe<BookmarkFilterMemberDisconnectFieldInput>;
};

export type BookmarkFilterEdge = {
  __typename?: 'BookmarkFilterEdge';
  cursor: Scalars['String']['output'];
  node: BookmarkFilter;
};

export type BookmarkFilterMemberAggregateInput = {
  AND?: InputMaybe<Array<BookmarkFilterMemberAggregateInput>>;
  NOT?: InputMaybe<BookmarkFilterMemberAggregateInput>;
  OR?: InputMaybe<Array<BookmarkFilterMemberAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<BookmarkFilterMemberNodeAggregationWhereInput>;
};

export type BookmarkFilterMemberConnectFieldInput = {
  connect?: InputMaybe<MemberConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<MemberConnectWhere>;
};

export type BookmarkFilterMemberConnectOrCreateFieldInput = {
  onCreate: BookmarkFilterMemberConnectOrCreateFieldInputOnCreate;
  where: MemberConnectOrCreateWhere;
};

export type BookmarkFilterMemberConnectOrCreateFieldInputOnCreate = {
  node: MemberOnCreateInput;
};

export type BookmarkFilterMemberConnection = {
  __typename?: 'BookmarkFilterMemberConnection';
  edges: Array<BookmarkFilterMemberRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BookmarkFilterMemberConnectionSort = {
  node?: InputMaybe<MemberSort>;
};

export type BookmarkFilterMemberConnectionWhere = {
  AND?: InputMaybe<Array<BookmarkFilterMemberConnectionWhere>>;
  NOT?: InputMaybe<BookmarkFilterMemberConnectionWhere>;
  OR?: InputMaybe<Array<BookmarkFilterMemberConnectionWhere>>;
  node?: InputMaybe<MemberWhere>;
};

export type BookmarkFilterMemberCreateFieldInput = {
  node: MemberCreateInput;
};

export type BookmarkFilterMemberDeleteFieldInput = {
  delete?: InputMaybe<MemberDeleteInput>;
  where?: InputMaybe<BookmarkFilterMemberConnectionWhere>;
};

export type BookmarkFilterMemberDisconnectFieldInput = {
  disconnect?: InputMaybe<MemberDisconnectInput>;
  where?: InputMaybe<BookmarkFilterMemberConnectionWhere>;
};

export type BookmarkFilterMemberFieldInput = {
  connect?: InputMaybe<BookmarkFilterMemberConnectFieldInput>;
  connectOrCreate?: InputMaybe<BookmarkFilterMemberConnectOrCreateFieldInput>;
  create?: InputMaybe<BookmarkFilterMemberCreateFieldInput>;
};

export type BookmarkFilterMemberMemberAggregationSelection = {
  __typename?: 'BookmarkFilterMemberMemberAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<BookmarkFilterMemberMemberNodeAggregateSelection>;
};

export type BookmarkFilterMemberMemberNodeAggregateSelection = {
  __typename?: 'BookmarkFilterMemberMemberNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type BookmarkFilterMemberNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BookmarkFilterMemberNodeAggregationWhereInput>>;
  NOT?: InputMaybe<BookmarkFilterMemberNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<BookmarkFilterMemberNodeAggregationWhereInput>>;
};

export type BookmarkFilterMemberRelationship = {
  __typename?: 'BookmarkFilterMemberRelationship';
  cursor: Scalars['String']['output'];
  node: Member;
};

export type BookmarkFilterMemberUpdateConnectionInput = {
  node?: InputMaybe<MemberUpdateInput>;
};

export type BookmarkFilterMemberUpdateFieldInput = {
  connect?: InputMaybe<BookmarkFilterMemberConnectFieldInput>;
  connectOrCreate?: InputMaybe<BookmarkFilterMemberConnectOrCreateFieldInput>;
  create?: InputMaybe<BookmarkFilterMemberCreateFieldInput>;
  delete?: InputMaybe<BookmarkFilterMemberDeleteFieldInput>;
  disconnect?: InputMaybe<BookmarkFilterMemberDisconnectFieldInput>;
  update?: InputMaybe<BookmarkFilterMemberUpdateConnectionInput>;
  where?: InputMaybe<BookmarkFilterMemberConnectionWhere>;
};

export type BookmarkFilterOnCreateInput = {
  bmLoose?: InputMaybe<Scalars['Boolean']['input']>;
  bmParentsTxt?: InputMaybe<Scalars['String']['input']>;
  bmTags: Array<Scalars['String']['input']>;
  bmTxt?: InputMaybe<Scalars['String']['input']>;
  bmUrl?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDir?: InputMaybe<Scalars['String']['input']>;
};

export type BookmarkFilterOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more BookmarkFilterSort objects to sort BookmarkFilters by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<BookmarkFilterSort>>;
};

export type BookmarkFilterRelationInput = {
  member?: InputMaybe<BookmarkFilterMemberCreateFieldInput>;
};

/** Fields to sort BookmarkFilters by. The order in which sorts are applied is not guaranteed when specifying many fields in one BookmarkFilterSort object. */
export type BookmarkFilterSort = {
  bmLoose?: InputMaybe<SortDirection>;
  bmParentsTxt?: InputMaybe<SortDirection>;
  bmTxt?: InputMaybe<SortDirection>;
  bmUrl?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  sortBy?: InputMaybe<SortDirection>;
  sortDir?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type BookmarkFilterUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BookmarkFilterUpdateInput = {
  bmLoose?: InputMaybe<Scalars['Boolean']['input']>;
  bmParentsTxt?: InputMaybe<Scalars['String']['input']>;
  bmTags?: InputMaybe<Array<Scalars['String']['input']>>;
  bmTags_POP?: InputMaybe<Scalars['Int']['input']>;
  bmTags_PUSH?: InputMaybe<Array<Scalars['String']['input']>>;
  bmTxt?: InputMaybe<Scalars['String']['input']>;
  bmUrl?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  member?: InputMaybe<BookmarkFilterMemberUpdateFieldInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDir?: InputMaybe<Scalars['String']['input']>;
};

export type BookmarkFilterWhere = {
  AND?: InputMaybe<Array<BookmarkFilterWhere>>;
  NOT?: InputMaybe<BookmarkFilterWhere>;
  OR?: InputMaybe<Array<BookmarkFilterWhere>>;
  bmLoose?: InputMaybe<Scalars['Boolean']['input']>;
  bmParentsTxt?: InputMaybe<Scalars['String']['input']>;
  bmParentsTxt_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  bmParentsTxt_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  bmParentsTxt_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bmParentsTxt_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  bmTags?: InputMaybe<Array<Scalars['String']['input']>>;
  bmTags_INCLUDES?: InputMaybe<Scalars['String']['input']>;
  bmTxt?: InputMaybe<Scalars['String']['input']>;
  bmTxt_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  bmTxt_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  bmTxt_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bmTxt_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  bmUrl?: InputMaybe<Scalars['String']['input']>;
  bmUrl_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  bmUrl_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  bmUrl_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bmUrl_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  member?: InputMaybe<MemberWhere>;
  memberAggregate?: InputMaybe<BookmarkFilterMemberAggregateInput>;
  memberConnection?: InputMaybe<BookmarkFilterMemberConnectionWhere>;
  memberConnection_NOT?: InputMaybe<BookmarkFilterMemberConnectionWhere>;
  member_NOT?: InputMaybe<MemberWhere>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortBy_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  sortBy_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  sortBy_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sortBy_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  sortDir?: InputMaybe<Scalars['String']['input']>;
  sortDir_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  sortDir_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  sortDir_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sortDir_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BookmarkFilter_In = {
  bmLoose?: InputMaybe<Scalars['Boolean']['input']>;
  bmParentsTxt?: InputMaybe<Scalars['String']['input']>;
  bmTags?: InputMaybe<Array<Scalars['String']['input']>>;
  bmTxt?: InputMaybe<Scalars['String']['input']>;
  bmUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDir?: InputMaybe<Scalars['String']['input']>;
};

export type BookmarkFiltersConnection = {
  __typename?: 'BookmarkFiltersConnection';
  edges: Array<BookmarkFilterEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BookmarkOnCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  domainName?: InputMaybe<Scalars['String']['input']>;
  iconUri?: InputMaybe<Scalars['String']['input']>;
  linkPath?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
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
  tags?: InputMaybe<Array<BookmarkTagsCreateFieldInput>>;
};

/** Fields to sort Bookmarks by. The order in which sorts are applied is not guaranteed when specifying many fields in one BookmarkSort object. */
export type BookmarkSort = {
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  domainName?: InputMaybe<SortDirection>;
  iconUri?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  linkPath?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  urlScheme?: InputMaybe<SortDirection>;
};

export type BookmarkTagTagsAggregationSelection = {
  __typename?: 'BookmarkTagTagsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<BookmarkTagTagsNodeAggregateSelection>;
};

export type BookmarkTagTagsNodeAggregateSelection = {
  __typename?: 'BookmarkTagTagsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type BookmarkTagsAggregateInput = {
  AND?: InputMaybe<Array<BookmarkTagsAggregateInput>>;
  NOT?: InputMaybe<BookmarkTagsAggregateInput>;
  OR?: InputMaybe<Array<BookmarkTagsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<BookmarkTagsNodeAggregationWhereInput>;
};

export type BookmarkTagsConnectFieldInput = {
  connect?: InputMaybe<Array<TagConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TagConnectWhere>;
};

export type BookmarkTagsConnectOrCreateFieldInput = {
  onCreate: BookmarkTagsConnectOrCreateFieldInputOnCreate;
  where: TagConnectOrCreateWhere;
};

export type BookmarkTagsConnectOrCreateFieldInputOnCreate = {
  node: TagOnCreateInput;
};

export type BookmarkTagsConnection = {
  __typename?: 'BookmarkTagsConnection';
  edges: Array<BookmarkTagsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BookmarkTagsConnectionSort = {
  node?: InputMaybe<TagSort>;
};

export type BookmarkTagsConnectionWhere = {
  AND?: InputMaybe<Array<BookmarkTagsConnectionWhere>>;
  NOT?: InputMaybe<BookmarkTagsConnectionWhere>;
  OR?: InputMaybe<Array<BookmarkTagsConnectionWhere>>;
  node?: InputMaybe<TagWhere>;
};

export type BookmarkTagsCreateFieldInput = {
  node: TagCreateInput;
};

export type BookmarkTagsDeleteFieldInput = {
  delete?: InputMaybe<TagDeleteInput>;
  where?: InputMaybe<BookmarkTagsConnectionWhere>;
};

export type BookmarkTagsDisconnectFieldInput = {
  disconnect?: InputMaybe<TagDisconnectInput>;
  where?: InputMaybe<BookmarkTagsConnectionWhere>;
};

export type BookmarkTagsFieldInput = {
  connect?: InputMaybe<Array<BookmarkTagsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<BookmarkTagsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<BookmarkTagsCreateFieldInput>>;
};

export type BookmarkTagsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BookmarkTagsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<BookmarkTagsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<BookmarkTagsNodeAggregationWhereInput>>;
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
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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

export type BookmarkTagsRelationship = {
  __typename?: 'BookmarkTagsRelationship';
  cursor: Scalars['String']['output'];
  node: Tag;
};

export type BookmarkTagsUpdateConnectionInput = {
  node?: InputMaybe<TagUpdateInput>;
};

export type BookmarkTagsUpdateFieldInput = {
  connect?: InputMaybe<Array<BookmarkTagsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<BookmarkTagsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<BookmarkTagsCreateFieldInput>>;
  delete?: InputMaybe<Array<BookmarkTagsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<BookmarkTagsDisconnectFieldInput>>;
  update?: InputMaybe<BookmarkTagsUpdateConnectionInput>;
  where?: InputMaybe<BookmarkTagsConnectionWhere>;
};

export type BookmarkUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BookmarkUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  domainName?: InputMaybe<Scalars['String']['input']>;
  iconUri?: InputMaybe<Scalars['String']['input']>;
  linkPath?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<BookmarkParentUpdateFieldInput>;
  tags?: InputMaybe<Array<BookmarkTagsUpdateFieldInput>>;
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
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  parentConnection?: InputMaybe<BookmarkParentConnectionWhere>;
  parentConnection_NOT?: InputMaybe<BookmarkParentConnectionWhere>;
  tagsAggregate?: InputMaybe<BookmarkTagsAggregateInput>;
  /** Return Bookmarks where all of the related BookmarkTagsConnections match this filter */
  tagsConnection_ALL?: InputMaybe<BookmarkTagsConnectionWhere>;
  /** Return Bookmarks where none of the related BookmarkTagsConnections match this filter */
  tagsConnection_NONE?: InputMaybe<BookmarkTagsConnectionWhere>;
  /** Return Bookmarks where one of the related BookmarkTagsConnections match this filter */
  tagsConnection_SINGLE?: InputMaybe<BookmarkTagsConnectionWhere>;
  /** Return Bookmarks where some of the related BookmarkTagsConnections match this filter */
  tagsConnection_SOME?: InputMaybe<BookmarkTagsConnectionWhere>;
  /** Return Bookmarks where all of the related Tags match this filter */
  tags_ALL?: InputMaybe<TagWhere>;
  /** Return Bookmarks where none of the related Tags match this filter */
  tags_NONE?: InputMaybe<TagWhere>;
  /** Return Bookmarks where one of the related Tags match this filter */
  tags_SINGLE?: InputMaybe<TagWhere>;
  /** Return Bookmarks where some of the related Tags match this filter */
  tags_SOME?: InputMaybe<TagWhere>;
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

export type ChildDl = BookmarkDl | FolderDl;

export type ChildWhere = {
  Bookmark?: InputMaybe<BookmarkWhere>;
  Folder?: InputMaybe<FolderWhere>;
};

export type ChildsToMove = {
  childIds: Array<Scalars['ID']['input']>;
  parentId: Scalars['ID']['input'];
};

export type Collection = Parent & {
  __typename?: 'Collection';
  children: Array<Child>;
  childrenConnection: CollectionChildrenConnection;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  member?: Maybe<Member>;
  memberAggregate?: Maybe<CollectionMemberMemberAggregationSelection>;
  memberConnection: CollectionMemberConnection;
  name?: Maybe<Scalars['String']['output']>;
  parentMeta?: Maybe<ParentMeta>;
  parentMetaAggregate?: Maybe<CollectionParentMetaParentMetaAggregationSelection>;
  parentMetaConnection: CollectionParentMetaConnection;
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
  where?: InputMaybe<CollectionChildrenConnectionWhere>;
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
  sort?: InputMaybe<Array<CollectionParentMetaConnectionSort>>;
  where?: InputMaybe<CollectionParentMetaConnectionWhere>;
};

export type CollectionAggregateSelection = {
  __typename?: 'CollectionAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CollectionChildrenBookmarkConnectFieldInput = {
  connect?: InputMaybe<Array<BookmarkConnectInput>>;
  where?: InputMaybe<BookmarkConnectWhere>;
};

export type CollectionChildrenBookmarkConnectOrCreateFieldInput = {
  onCreate: CollectionChildrenBookmarkConnectOrCreateFieldInputOnCreate;
  where: BookmarkConnectOrCreateWhere;
};

export type CollectionChildrenBookmarkConnectOrCreateFieldInputOnCreate = {
  node: BookmarkOnCreateInput;
};

export type CollectionChildrenBookmarkConnectionWhere = {
  AND?: InputMaybe<Array<CollectionChildrenBookmarkConnectionWhere>>;
  NOT?: InputMaybe<CollectionChildrenBookmarkConnectionWhere>;
  OR?: InputMaybe<Array<CollectionChildrenBookmarkConnectionWhere>>;
  node?: InputMaybe<BookmarkWhere>;
};

export type CollectionChildrenBookmarkCreateFieldInput = {
  node: BookmarkCreateInput;
};

export type CollectionChildrenBookmarkDeleteFieldInput = {
  delete?: InputMaybe<BookmarkDeleteInput>;
  where?: InputMaybe<CollectionChildrenBookmarkConnectionWhere>;
};

export type CollectionChildrenBookmarkDisconnectFieldInput = {
  disconnect?: InputMaybe<BookmarkDisconnectInput>;
  where?: InputMaybe<CollectionChildrenBookmarkConnectionWhere>;
};

export type CollectionChildrenBookmarkFieldInput = {
  connect?: InputMaybe<Array<CollectionChildrenBookmarkConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CollectionChildrenBookmarkConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CollectionChildrenBookmarkCreateFieldInput>>;
};

export type CollectionChildrenBookmarkUpdateConnectionInput = {
  node?: InputMaybe<BookmarkUpdateInput>;
};

export type CollectionChildrenBookmarkUpdateFieldInput = {
  connect?: InputMaybe<Array<CollectionChildrenBookmarkConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CollectionChildrenBookmarkConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CollectionChildrenBookmarkCreateFieldInput>>;
  delete?: InputMaybe<Array<CollectionChildrenBookmarkDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CollectionChildrenBookmarkDisconnectFieldInput>>;
  update?: InputMaybe<CollectionChildrenBookmarkUpdateConnectionInput>;
  where?: InputMaybe<CollectionChildrenBookmarkConnectionWhere>;
};

export type CollectionChildrenConnectInput = {
  Bookmark?: InputMaybe<Array<CollectionChildrenBookmarkConnectFieldInput>>;
  Folder?: InputMaybe<Array<CollectionChildrenFolderConnectFieldInput>>;
};

export type CollectionChildrenConnectOrCreateInput = {
  Bookmark?: InputMaybe<Array<CollectionChildrenBookmarkConnectOrCreateFieldInput>>;
  Folder?: InputMaybe<Array<CollectionChildrenFolderConnectOrCreateFieldInput>>;
};

export type CollectionChildrenConnection = {
  __typename?: 'CollectionChildrenConnection';
  edges: Array<CollectionChildrenRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CollectionChildrenConnectionWhere = {
  Bookmark?: InputMaybe<CollectionChildrenBookmarkConnectionWhere>;
  Folder?: InputMaybe<CollectionChildrenFolderConnectionWhere>;
};

export type CollectionChildrenCreateFieldInput = {
  Bookmark?: InputMaybe<Array<CollectionChildrenBookmarkCreateFieldInput>>;
  Folder?: InputMaybe<Array<CollectionChildrenFolderCreateFieldInput>>;
};

export type CollectionChildrenCreateInput = {
  Bookmark?: InputMaybe<CollectionChildrenBookmarkFieldInput>;
  Folder?: InputMaybe<CollectionChildrenFolderFieldInput>;
};

export type CollectionChildrenDeleteInput = {
  Bookmark?: InputMaybe<Array<CollectionChildrenBookmarkDeleteFieldInput>>;
  Folder?: InputMaybe<Array<CollectionChildrenFolderDeleteFieldInput>>;
};

export type CollectionChildrenDisconnectInput = {
  Bookmark?: InputMaybe<Array<CollectionChildrenBookmarkDisconnectFieldInput>>;
  Folder?: InputMaybe<Array<CollectionChildrenFolderDisconnectFieldInput>>;
};

export type CollectionChildrenFolderConnectFieldInput = {
  connect?: InputMaybe<Array<FolderConnectInput>>;
  where?: InputMaybe<FolderConnectWhere>;
};

export type CollectionChildrenFolderConnectOrCreateFieldInput = {
  onCreate: CollectionChildrenFolderConnectOrCreateFieldInputOnCreate;
  where: FolderConnectOrCreateWhere;
};

export type CollectionChildrenFolderConnectOrCreateFieldInputOnCreate = {
  node: FolderOnCreateInput;
};

export type CollectionChildrenFolderConnectionWhere = {
  AND?: InputMaybe<Array<CollectionChildrenFolderConnectionWhere>>;
  NOT?: InputMaybe<CollectionChildrenFolderConnectionWhere>;
  OR?: InputMaybe<Array<CollectionChildrenFolderConnectionWhere>>;
  node?: InputMaybe<FolderWhere>;
};

export type CollectionChildrenFolderCreateFieldInput = {
  node: FolderCreateInput;
};

export type CollectionChildrenFolderDeleteFieldInput = {
  delete?: InputMaybe<FolderDeleteInput>;
  where?: InputMaybe<CollectionChildrenFolderConnectionWhere>;
};

export type CollectionChildrenFolderDisconnectFieldInput = {
  disconnect?: InputMaybe<FolderDisconnectInput>;
  where?: InputMaybe<CollectionChildrenFolderConnectionWhere>;
};

export type CollectionChildrenFolderFieldInput = {
  connect?: InputMaybe<Array<CollectionChildrenFolderConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CollectionChildrenFolderConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CollectionChildrenFolderCreateFieldInput>>;
};

export type CollectionChildrenFolderUpdateConnectionInput = {
  node?: InputMaybe<FolderUpdateInput>;
};

export type CollectionChildrenFolderUpdateFieldInput = {
  connect?: InputMaybe<Array<CollectionChildrenFolderConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CollectionChildrenFolderConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CollectionChildrenFolderCreateFieldInput>>;
  delete?: InputMaybe<Array<CollectionChildrenFolderDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CollectionChildrenFolderDisconnectFieldInput>>;
  update?: InputMaybe<CollectionChildrenFolderUpdateConnectionInput>;
  where?: InputMaybe<CollectionChildrenFolderConnectionWhere>;
};

export type CollectionChildrenRelationship = {
  __typename?: 'CollectionChildrenRelationship';
  cursor: Scalars['String']['output'];
  node: Child;
};

export type CollectionChildrenUpdateInput = {
  Bookmark?: InputMaybe<Array<CollectionChildrenBookmarkUpdateFieldInput>>;
  Folder?: InputMaybe<Array<CollectionChildrenFolderUpdateFieldInput>>;
};

export type CollectionConnectInput = {
  children?: InputMaybe<CollectionChildrenConnectInput>;
  member?: InputMaybe<CollectionMemberConnectFieldInput>;
  parentMeta?: InputMaybe<CollectionParentMetaConnectFieldInput>;
};

export type CollectionConnectOrCreateInput = {
  children?: InputMaybe<CollectionChildrenConnectOrCreateInput>;
  member?: InputMaybe<CollectionMemberConnectOrCreateFieldInput>;
  parentMeta?: InputMaybe<CollectionParentMetaConnectOrCreateFieldInput>;
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
  parentMeta?: InputMaybe<CollectionParentMetaFieldInput>;
};

export type CollectionDeleteInput = {
  children?: InputMaybe<CollectionChildrenDeleteInput>;
  member?: InputMaybe<CollectionMemberDeleteFieldInput>;
  parentMeta?: InputMaybe<CollectionParentMetaDeleteFieldInput>;
};

export type CollectionDisconnectInput = {
  children?: InputMaybe<CollectionChildrenDisconnectInput>;
  member?: InputMaybe<CollectionMemberDisconnectFieldInput>;
  parentMeta?: InputMaybe<CollectionParentMetaDisconnectFieldInput>;
};

export type CollectionDs = {
  __typename?: 'CollectionDs';
  bookmarkCount: Scalars['Int']['output'];
  deepness: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CollectionDsAggregateSelection = {
  __typename?: 'CollectionDsAggregateSelection';
  bookmarkCount: IntAggregateSelectionNonNullable;
  count: Scalars['Int']['output'];
  deepness: IntAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type CollectionDsConnection = {
  __typename?: 'CollectionDsConnection';
  edges: Array<CollectionDsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CollectionDsCreateInput = {
  bookmarkCount: Scalars['Int']['input'];
  deepness: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type CollectionDsEdge = {
  __typename?: 'CollectionDsEdge';
  cursor: Scalars['String']['output'];
  node: CollectionDs;
};

export type CollectionDsList = {
  __typename?: 'CollectionDsList';
  collections?: Maybe<Array<CollectionDs>>;
};

export type CollectionDsListAggregateSelection = {
  __typename?: 'CollectionDsListAggregateSelection';
  count: Scalars['Int']['output'];
};

export type CollectionDsListCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CollectionDsListEdge = {
  __typename?: 'CollectionDsListEdge';
  cursor: Scalars['String']['output'];
  node: CollectionDsList;
};

export type CollectionDsListOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type CollectionDsListUpdateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CollectionDsListWhere = {
  AND?: InputMaybe<Array<CollectionDsListWhere>>;
  NOT?: InputMaybe<CollectionDsListWhere>;
  OR?: InputMaybe<Array<CollectionDsListWhere>>;
};

export type CollectionDsListsConnection = {
  __typename?: 'CollectionDsListsConnection';
  edges: Array<CollectionDsListEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CollectionDsOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CollectionDsSort objects to sort CollectionDs by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CollectionDsSort>>;
};

/** Fields to sort CollectionDs by. The order in which sorts are applied is not guaranteed when specifying many fields in one CollectionDsSort object. */
export type CollectionDsSort = {
  bookmarkCount?: InputMaybe<SortDirection>;
  deepness?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type CollectionDsUpdateInput = {
  bookmarkCount?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  deepness?: InputMaybe<Scalars['Int']['input']>;
  deepness_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  deepness_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionDsWhere = {
  AND?: InputMaybe<Array<CollectionDsWhere>>;
  NOT?: InputMaybe<CollectionDsWhere>;
  OR?: InputMaybe<Array<CollectionDsWhere>>;
  bookmarkCount?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_GT?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_GTE?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  bookmarkCount_LT?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_LTE?: InputMaybe<Scalars['Int']['input']>;
  deepness?: InputMaybe<Scalars['Int']['input']>;
  deepness_GT?: InputMaybe<Scalars['Int']['input']>;
  deepness_GTE?: InputMaybe<Scalars['Int']['input']>;
  deepness_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  deepness_LT?: InputMaybe<Scalars['Int']['input']>;
  deepness_LTE?: InputMaybe<Scalars['Int']['input']>;
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

export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  cursor: Scalars['String']['output'];
  node: Collection;
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

export type CollectionParentMetaConnectFieldInput = {
  connect?: InputMaybe<ParentMetaConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ParentMetaConnectWhere>;
};

export type CollectionParentMetaConnectOrCreateFieldInput = {
  onCreate: CollectionParentMetaConnectOrCreateFieldInputOnCreate;
  where: ParentMetaConnectOrCreateWhere;
};

export type CollectionParentMetaConnectOrCreateFieldInputOnCreate = {
  node: ParentMetaOnCreateInput;
};

export type CollectionParentMetaConnection = {
  __typename?: 'CollectionParentMetaConnection';
  edges: Array<CollectionParentMetaRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CollectionParentMetaConnectionSort = {
  node?: InputMaybe<ParentMetaSort>;
};

export type CollectionParentMetaConnectionWhere = {
  AND?: InputMaybe<Array<CollectionParentMetaConnectionWhere>>;
  NOT?: InputMaybe<CollectionParentMetaConnectionWhere>;
  OR?: InputMaybe<Array<CollectionParentMetaConnectionWhere>>;
  node?: InputMaybe<ParentMetaWhere>;
};

export type CollectionParentMetaCreateFieldInput = {
  node: ParentMetaCreateInput;
};

export type CollectionParentMetaDeleteFieldInput = {
  delete?: InputMaybe<ParentMetaDeleteInput>;
  where?: InputMaybe<CollectionParentMetaConnectionWhere>;
};

export type CollectionParentMetaDisconnectFieldInput = {
  disconnect?: InputMaybe<ParentMetaDisconnectInput>;
  where?: InputMaybe<CollectionParentMetaConnectionWhere>;
};

export type CollectionParentMetaFieldInput = {
  connect?: InputMaybe<CollectionParentMetaConnectFieldInput>;
  connectOrCreate?: InputMaybe<CollectionParentMetaConnectOrCreateFieldInput>;
  create?: InputMaybe<CollectionParentMetaCreateFieldInput>;
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

export type CollectionParentMetaRelationship = {
  __typename?: 'CollectionParentMetaRelationship';
  cursor: Scalars['String']['output'];
  node: ParentMeta;
};

export type CollectionParentMetaUpdateConnectionInput = {
  node?: InputMaybe<ParentMetaUpdateInput>;
};

export type CollectionParentMetaUpdateFieldInput = {
  connect?: InputMaybe<CollectionParentMetaConnectFieldInput>;
  connectOrCreate?: InputMaybe<CollectionParentMetaConnectOrCreateFieldInput>;
  create?: InputMaybe<CollectionParentMetaCreateFieldInput>;
  delete?: InputMaybe<CollectionParentMetaDeleteFieldInput>;
  disconnect?: InputMaybe<CollectionParentMetaDisconnectFieldInput>;
  update?: InputMaybe<CollectionParentMetaUpdateConnectionInput>;
  where?: InputMaybe<CollectionParentMetaConnectionWhere>;
};

export type CollectionRelationInput = {
  children?: InputMaybe<CollectionChildrenCreateFieldInput>;
  member?: InputMaybe<CollectionMemberCreateFieldInput>;
  parentMeta?: InputMaybe<CollectionParentMetaCreateFieldInput>;
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
  parentMeta?: InputMaybe<CollectionParentMetaUpdateFieldInput>;
};

export type CollectionWhere = {
  AND?: InputMaybe<Array<CollectionWhere>>;
  NOT?: InputMaybe<CollectionWhere>;
  OR?: InputMaybe<Array<CollectionWhere>>;
  /** Return Collections where all of the related CollectionChildrenConnections match this filter */
  childrenConnection_ALL?: InputMaybe<CollectionChildrenConnectionWhere>;
  /** Return Collections where none of the related CollectionChildrenConnections match this filter */
  childrenConnection_NONE?: InputMaybe<CollectionChildrenConnectionWhere>;
  /** Return Collections where one of the related CollectionChildrenConnections match this filter */
  childrenConnection_SINGLE?: InputMaybe<CollectionChildrenConnectionWhere>;
  /** Return Collections where some of the related CollectionChildrenConnections match this filter */
  childrenConnection_SOME?: InputMaybe<CollectionChildrenConnectionWhere>;
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
  parentMetaConnection?: InputMaybe<CollectionParentMetaConnectionWhere>;
  parentMetaConnection_NOT?: InputMaybe<CollectionParentMetaConnectionWhere>;
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

export type CreateBmsContainersMutationResponse = {
  __typename?: 'CreateBmsContainersMutationResponse';
  bmsContainers: Array<BmsContainer>;
  info: CreateInfo;
};

export type CreateBmsPagedsMutationResponse = {
  __typename?: 'CreateBmsPagedsMutationResponse';
  bmsPageds: Array<BmsPaged>;
  info: CreateInfo;
};

export type CreateBookmarkDl = {
  description?: InputMaybe<Scalars['String']['input']>;
  domainName: Scalars['String']['input'];
  iconUri?: InputMaybe<Scalars['String']['input']>;
  linkPath: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  urlScheme: Scalars['String']['input'];
};

export type CreateBookmarkDlsMutationResponse = {
  __typename?: 'CreateBookmarkDlsMutationResponse';
  bookmarkDls: Array<BookmarkDl>;
  info: CreateInfo;
};

export type CreateBookmarkFiltersMutationResponse = {
  __typename?: 'CreateBookmarkFiltersMutationResponse';
  bookmarkFilters: Array<BookmarkFilter>;
  info: CreateInfo;
};

export type CreateBookmarksMutationResponse = {
  __typename?: 'CreateBookmarksMutationResponse';
  bookmarks: Array<Bookmark>;
  info: CreateInfo;
};

export type CreateCollectionDsListsMutationResponse = {
  __typename?: 'CreateCollectionDsListsMutationResponse';
  collectionDsLists: Array<CollectionDsList>;
  info: CreateInfo;
};

export type CreateCollectionDsMutationResponse = {
  __typename?: 'CreateCollectionDsMutationResponse';
  collectionDs: Array<CollectionDs>;
  info: CreateInfo;
};

export type CreateCollectionsMutationResponse = {
  __typename?: 'CreateCollectionsMutationResponse';
  collections: Array<Collection>;
  info: CreateInfo;
};

export type CreateFolderDlsMutationResponse = {
  __typename?: 'CreateFolderDlsMutationResponse';
  folderDls: Array<FolderDl>;
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

export type CreateTagDsMutationResponse = {
  __typename?: 'CreateTagDsMutationResponse';
  info: CreateInfo;
  tagDs: Array<TagDs>;
};

export type CreateTagsMutationResponse = {
  __typename?: 'CreateTagsMutationResponse';
  info: CreateInfo;
  tags: Array<Tag>;
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
  childrenConnection: FolderChildrenConnection;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Parent>;
  parentConnection: FolderParentConnection;
  parentMeta?: Maybe<ParentMeta>;
  parentMetaAggregate?: Maybe<FolderParentMetaParentMetaAggregationSelection>;
  parentMetaConnection: FolderParentMetaConnection;
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
  where?: InputMaybe<FolderChildrenConnectionWhere>;
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
  sort?: InputMaybe<Array<FolderParentMetaConnectionSort>>;
  where?: InputMaybe<FolderParentMetaConnectionWhere>;
};

export type FolderAggregateSelection = {
  __typename?: 'FolderAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type FolderChildrenBookmarkConnectFieldInput = {
  connect?: InputMaybe<Array<BookmarkConnectInput>>;
  where?: InputMaybe<BookmarkConnectWhere>;
};

export type FolderChildrenBookmarkConnectOrCreateFieldInput = {
  onCreate: FolderChildrenBookmarkConnectOrCreateFieldInputOnCreate;
  where: BookmarkConnectOrCreateWhere;
};

export type FolderChildrenBookmarkConnectOrCreateFieldInputOnCreate = {
  node: BookmarkOnCreateInput;
};

export type FolderChildrenBookmarkConnectionWhere = {
  AND?: InputMaybe<Array<FolderChildrenBookmarkConnectionWhere>>;
  NOT?: InputMaybe<FolderChildrenBookmarkConnectionWhere>;
  OR?: InputMaybe<Array<FolderChildrenBookmarkConnectionWhere>>;
  node?: InputMaybe<BookmarkWhere>;
};

export type FolderChildrenBookmarkCreateFieldInput = {
  node: BookmarkCreateInput;
};

export type FolderChildrenBookmarkDeleteFieldInput = {
  delete?: InputMaybe<BookmarkDeleteInput>;
  where?: InputMaybe<FolderChildrenBookmarkConnectionWhere>;
};

export type FolderChildrenBookmarkDisconnectFieldInput = {
  disconnect?: InputMaybe<BookmarkDisconnectInput>;
  where?: InputMaybe<FolderChildrenBookmarkConnectionWhere>;
};

export type FolderChildrenBookmarkFieldInput = {
  connect?: InputMaybe<Array<FolderChildrenBookmarkConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<FolderChildrenBookmarkConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<FolderChildrenBookmarkCreateFieldInput>>;
};

export type FolderChildrenBookmarkUpdateConnectionInput = {
  node?: InputMaybe<BookmarkUpdateInput>;
};

export type FolderChildrenBookmarkUpdateFieldInput = {
  connect?: InputMaybe<Array<FolderChildrenBookmarkConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<FolderChildrenBookmarkConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<FolderChildrenBookmarkCreateFieldInput>>;
  delete?: InputMaybe<Array<FolderChildrenBookmarkDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<FolderChildrenBookmarkDisconnectFieldInput>>;
  update?: InputMaybe<FolderChildrenBookmarkUpdateConnectionInput>;
  where?: InputMaybe<FolderChildrenBookmarkConnectionWhere>;
};

export type FolderChildrenConnectInput = {
  Bookmark?: InputMaybe<Array<FolderChildrenBookmarkConnectFieldInput>>;
  Folder?: InputMaybe<Array<FolderChildrenFolderConnectFieldInput>>;
};

export type FolderChildrenConnectOrCreateInput = {
  Bookmark?: InputMaybe<Array<FolderChildrenBookmarkConnectOrCreateFieldInput>>;
  Folder?: InputMaybe<Array<FolderChildrenFolderConnectOrCreateFieldInput>>;
};

export type FolderChildrenConnection = {
  __typename?: 'FolderChildrenConnection';
  edges: Array<FolderChildrenRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FolderChildrenConnectionWhere = {
  Bookmark?: InputMaybe<FolderChildrenBookmarkConnectionWhere>;
  Folder?: InputMaybe<FolderChildrenFolderConnectionWhere>;
};

export type FolderChildrenCreateFieldInput = {
  Bookmark?: InputMaybe<Array<FolderChildrenBookmarkCreateFieldInput>>;
  Folder?: InputMaybe<Array<FolderChildrenFolderCreateFieldInput>>;
};

export type FolderChildrenCreateInput = {
  Bookmark?: InputMaybe<FolderChildrenBookmarkFieldInput>;
  Folder?: InputMaybe<FolderChildrenFolderFieldInput>;
};

export type FolderChildrenDeleteInput = {
  Bookmark?: InputMaybe<Array<FolderChildrenBookmarkDeleteFieldInput>>;
  Folder?: InputMaybe<Array<FolderChildrenFolderDeleteFieldInput>>;
};

export type FolderChildrenDisconnectInput = {
  Bookmark?: InputMaybe<Array<FolderChildrenBookmarkDisconnectFieldInput>>;
  Folder?: InputMaybe<Array<FolderChildrenFolderDisconnectFieldInput>>;
};

export type FolderChildrenFolderConnectFieldInput = {
  connect?: InputMaybe<Array<FolderConnectInput>>;
  where?: InputMaybe<FolderConnectWhere>;
};

export type FolderChildrenFolderConnectOrCreateFieldInput = {
  onCreate: FolderChildrenFolderConnectOrCreateFieldInputOnCreate;
  where: FolderConnectOrCreateWhere;
};

export type FolderChildrenFolderConnectOrCreateFieldInputOnCreate = {
  node: FolderOnCreateInput;
};

export type FolderChildrenFolderConnectionWhere = {
  AND?: InputMaybe<Array<FolderChildrenFolderConnectionWhere>>;
  NOT?: InputMaybe<FolderChildrenFolderConnectionWhere>;
  OR?: InputMaybe<Array<FolderChildrenFolderConnectionWhere>>;
  node?: InputMaybe<FolderWhere>;
};

export type FolderChildrenFolderCreateFieldInput = {
  node: FolderCreateInput;
};

export type FolderChildrenFolderDeleteFieldInput = {
  delete?: InputMaybe<FolderDeleteInput>;
  where?: InputMaybe<FolderChildrenFolderConnectionWhere>;
};

export type FolderChildrenFolderDisconnectFieldInput = {
  disconnect?: InputMaybe<FolderDisconnectInput>;
  where?: InputMaybe<FolderChildrenFolderConnectionWhere>;
};

export type FolderChildrenFolderFieldInput = {
  connect?: InputMaybe<Array<FolderChildrenFolderConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<FolderChildrenFolderConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<FolderChildrenFolderCreateFieldInput>>;
};

export type FolderChildrenFolderUpdateConnectionInput = {
  node?: InputMaybe<FolderUpdateInput>;
};

export type FolderChildrenFolderUpdateFieldInput = {
  connect?: InputMaybe<Array<FolderChildrenFolderConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<FolderChildrenFolderConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<FolderChildrenFolderCreateFieldInput>>;
  delete?: InputMaybe<Array<FolderChildrenFolderDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<FolderChildrenFolderDisconnectFieldInput>>;
  update?: InputMaybe<FolderChildrenFolderUpdateConnectionInput>;
  where?: InputMaybe<FolderChildrenFolderConnectionWhere>;
};

export type FolderChildrenRelationship = {
  __typename?: 'FolderChildrenRelationship';
  cursor: Scalars['String']['output'];
  node: Child;
};

export type FolderChildrenUpdateInput = {
  Bookmark?: InputMaybe<Array<FolderChildrenBookmarkUpdateFieldInput>>;
  Folder?: InputMaybe<Array<FolderChildrenFolderUpdateFieldInput>>;
};

export type FolderConnectInput = {
  children?: InputMaybe<FolderChildrenConnectInput>;
  parent?: InputMaybe<FolderParentConnectFieldInput>;
  parentMeta?: InputMaybe<FolderParentMetaConnectFieldInput>;
};

export type FolderConnectOrCreateInput = {
  children?: InputMaybe<FolderChildrenConnectOrCreateInput>;
  parentMeta?: InputMaybe<FolderParentMetaConnectOrCreateFieldInput>;
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
  parentMeta?: InputMaybe<FolderParentMetaFieldInput>;
};

export type FolderDeleteInput = {
  children?: InputMaybe<FolderChildrenDeleteInput>;
  parent?: InputMaybe<FolderParentDeleteFieldInput>;
  parentMeta?: InputMaybe<FolderParentMetaDeleteFieldInput>;
};

export type FolderDisconnectInput = {
  children?: InputMaybe<FolderChildrenDisconnectInput>;
  parent?: InputMaybe<FolderParentDisconnectFieldInput>;
  parentMeta?: InputMaybe<FolderParentMetaDisconnectFieldInput>;
};

export type FolderDl = {
  __typename?: 'FolderDl';
  bookmarkCount?: Maybe<Scalars['Int']['output']>;
  children: Array<ChildDl>;
  hasUnfetchedChildren?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type FolderDlAggregateSelection = {
  __typename?: 'FolderDlAggregateSelection';
  bookmarkCount: IntAggregateSelectionNullable;
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  type: StringAggregateSelectionNullable;
};

export type FolderDlCreateInput = {
  bookmarkCount?: InputMaybe<Scalars['Int']['input']>;
  hasUnfetchedChildren?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type FolderDlEdge = {
  __typename?: 'FolderDlEdge';
  cursor: Scalars['String']['output'];
  node: FolderDl;
};

export type FolderDlOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more FolderDlSort objects to sort FolderDls by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<FolderDlSort>>;
};

/** Fields to sort FolderDls by. The order in which sorts are applied is not guaranteed when specifying many fields in one FolderDlSort object. */
export type FolderDlSort = {
  bookmarkCount?: InputMaybe<SortDirection>;
  hasUnfetchedChildren?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
};

export type FolderDlUpdateInput = {
  bookmarkCount?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  hasUnfetchedChildren?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type FolderDlWhere = {
  AND?: InputMaybe<Array<FolderDlWhere>>;
  NOT?: InputMaybe<FolderDlWhere>;
  OR?: InputMaybe<Array<FolderDlWhere>>;
  bookmarkCount?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_GT?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_GTE?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  bookmarkCount_LT?: InputMaybe<Scalars['Int']['input']>;
  bookmarkCount_LTE?: InputMaybe<Scalars['Int']['input']>;
  hasUnfetchedChildren?: InputMaybe<Scalars['Boolean']['input']>;
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

export type FolderDlsConnection = {
  __typename?: 'FolderDlsConnection';
  edges: Array<FolderDlEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
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

export type FolderParentMetaConnectFieldInput = {
  connect?: InputMaybe<ParentMetaConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ParentMetaConnectWhere>;
};

export type FolderParentMetaConnectOrCreateFieldInput = {
  onCreate: FolderParentMetaConnectOrCreateFieldInputOnCreate;
  where: ParentMetaConnectOrCreateWhere;
};

export type FolderParentMetaConnectOrCreateFieldInputOnCreate = {
  node: ParentMetaOnCreateInput;
};

export type FolderParentMetaConnection = {
  __typename?: 'FolderParentMetaConnection';
  edges: Array<FolderParentMetaRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FolderParentMetaConnectionSort = {
  node?: InputMaybe<ParentMetaSort>;
};

export type FolderParentMetaConnectionWhere = {
  AND?: InputMaybe<Array<FolderParentMetaConnectionWhere>>;
  NOT?: InputMaybe<FolderParentMetaConnectionWhere>;
  OR?: InputMaybe<Array<FolderParentMetaConnectionWhere>>;
  node?: InputMaybe<ParentMetaWhere>;
};

export type FolderParentMetaCreateFieldInput = {
  node: ParentMetaCreateInput;
};

export type FolderParentMetaDeleteFieldInput = {
  delete?: InputMaybe<ParentMetaDeleteInput>;
  where?: InputMaybe<FolderParentMetaConnectionWhere>;
};

export type FolderParentMetaDisconnectFieldInput = {
  disconnect?: InputMaybe<ParentMetaDisconnectInput>;
  where?: InputMaybe<FolderParentMetaConnectionWhere>;
};

export type FolderParentMetaFieldInput = {
  connect?: InputMaybe<FolderParentMetaConnectFieldInput>;
  connectOrCreate?: InputMaybe<FolderParentMetaConnectOrCreateFieldInput>;
  create?: InputMaybe<FolderParentMetaCreateFieldInput>;
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

export type FolderParentMetaRelationship = {
  __typename?: 'FolderParentMetaRelationship';
  cursor: Scalars['String']['output'];
  node: ParentMeta;
};

export type FolderParentMetaUpdateConnectionInput = {
  node?: InputMaybe<ParentMetaUpdateInput>;
};

export type FolderParentMetaUpdateFieldInput = {
  connect?: InputMaybe<FolderParentMetaConnectFieldInput>;
  connectOrCreate?: InputMaybe<FolderParentMetaConnectOrCreateFieldInput>;
  create?: InputMaybe<FolderParentMetaCreateFieldInput>;
  delete?: InputMaybe<FolderParentMetaDeleteFieldInput>;
  disconnect?: InputMaybe<FolderParentMetaDisconnectFieldInput>;
  update?: InputMaybe<FolderParentMetaUpdateConnectionInput>;
  where?: InputMaybe<FolderParentMetaConnectionWhere>;
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
  parentMeta?: InputMaybe<FolderParentMetaCreateFieldInput>;
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
  parentMeta?: InputMaybe<FolderParentMetaUpdateFieldInput>;
};

export type FolderWhere = {
  AND?: InputMaybe<Array<FolderWhere>>;
  NOT?: InputMaybe<FolderWhere>;
  OR?: InputMaybe<Array<FolderWhere>>;
  /** Return Folders where all of the related FolderChildrenConnections match this filter */
  childrenConnection_ALL?: InputMaybe<FolderChildrenConnectionWhere>;
  /** Return Folders where none of the related FolderChildrenConnections match this filter */
  childrenConnection_NONE?: InputMaybe<FolderChildrenConnectionWhere>;
  /** Return Folders where one of the related FolderChildrenConnections match this filter */
  childrenConnection_SINGLE?: InputMaybe<FolderChildrenConnectionWhere>;
  /** Return Folders where some of the related FolderChildrenConnections match this filter */
  childrenConnection_SOME?: InputMaybe<FolderChildrenConnectionWhere>;
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
  parentMetaConnection?: InputMaybe<FolderParentMetaConnectionWhere>;
  parentMetaConnection_NOT?: InputMaybe<FolderParentMetaConnectionWhere>;
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
  bmFilters: Array<BookmarkFilter>;
  bmFiltersAggregate?: Maybe<MemberBookmarkFilterBmFiltersAggregationSelection>;
  bmFiltersConnection: MemberBmFiltersConnection;
  bmsContainer?: Maybe<BmsContainer>;
  bmsContainerAggregate?: Maybe<MemberBmsContainerBmsContainerAggregationSelection>;
  bmsContainerConnection: MemberBmsContainerConnection;
  collections: Array<Collection>;
  collectionsAggregate?: Maybe<MemberCollectionCollectionsAggregationSelection>;
  collectionsConnection: MemberCollectionsConnection;
  id: Scalars['ID']['output'];
  memberMeta?: Maybe<MemberMeta>;
  memberMetaAggregate?: Maybe<MemberMemberMetaMemberMetaAggregationSelection>;
  memberMetaConnection: MemberMemberMetaConnection;
};


export type MemberBmFiltersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<BookmarkFilterOptions>;
  where?: InputMaybe<BookmarkFilterWhere>;
};


export type MemberBmFiltersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BookmarkFilterWhere>;
};


export type MemberBmFiltersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MemberBmFiltersConnectionSort>>;
  where?: InputMaybe<MemberBmFiltersConnectionWhere>;
};


export type MemberBmsContainerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<BmsContainerOptions>;
  where?: InputMaybe<BmsContainerWhere>;
};


export type MemberBmsContainerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BmsContainerWhere>;
};


export type MemberBmsContainerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MemberBmsContainerConnectionSort>>;
  where?: InputMaybe<MemberBmsContainerConnectionWhere>;
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

export type MemberBmFiltersAggregateInput = {
  AND?: InputMaybe<Array<MemberBmFiltersAggregateInput>>;
  NOT?: InputMaybe<MemberBmFiltersAggregateInput>;
  OR?: InputMaybe<Array<MemberBmFiltersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<MemberBmFiltersNodeAggregationWhereInput>;
};

export type MemberBmFiltersConnectFieldInput = {
  connect?: InputMaybe<Array<BookmarkFilterConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<BookmarkFilterConnectWhere>;
};

export type MemberBmFiltersConnectOrCreateFieldInput = {
  onCreate: MemberBmFiltersConnectOrCreateFieldInputOnCreate;
  where: BookmarkFilterConnectOrCreateWhere;
};

export type MemberBmFiltersConnectOrCreateFieldInputOnCreate = {
  node: BookmarkFilterOnCreateInput;
};

export type MemberBmFiltersConnection = {
  __typename?: 'MemberBmFiltersConnection';
  edges: Array<MemberBmFiltersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MemberBmFiltersConnectionSort = {
  node?: InputMaybe<BookmarkFilterSort>;
};

export type MemberBmFiltersConnectionWhere = {
  AND?: InputMaybe<Array<MemberBmFiltersConnectionWhere>>;
  NOT?: InputMaybe<MemberBmFiltersConnectionWhere>;
  OR?: InputMaybe<Array<MemberBmFiltersConnectionWhere>>;
  node?: InputMaybe<BookmarkFilterWhere>;
};

export type MemberBmFiltersCreateFieldInput = {
  node: BookmarkFilterCreateInput;
};

export type MemberBmFiltersDeleteFieldInput = {
  delete?: InputMaybe<BookmarkFilterDeleteInput>;
  where?: InputMaybe<MemberBmFiltersConnectionWhere>;
};

export type MemberBmFiltersDisconnectFieldInput = {
  disconnect?: InputMaybe<BookmarkFilterDisconnectInput>;
  where?: InputMaybe<MemberBmFiltersConnectionWhere>;
};

export type MemberBmFiltersFieldInput = {
  connect?: InputMaybe<Array<MemberBmFiltersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MemberBmFiltersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MemberBmFiltersCreateFieldInput>>;
};

export type MemberBmFiltersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MemberBmFiltersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MemberBmFiltersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MemberBmFiltersNodeAggregationWhereInput>>;
  bmParentsTxt_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bmParentsTxt_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  bmParentsTxt_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  bmParentsTxt_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  bmParentsTxt_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  bmParentsTxt_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bmParentsTxt_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bmParentsTxt_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bmParentsTxt_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bmParentsTxt_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bmParentsTxt_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bmParentsTxt_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bmParentsTxt_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bmParentsTxt_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bmParentsTxt_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bmTxt_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bmTxt_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  bmTxt_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  bmTxt_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  bmTxt_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  bmTxt_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bmTxt_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bmTxt_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bmTxt_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bmTxt_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bmTxt_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bmTxt_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bmTxt_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bmTxt_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bmTxt_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bmUrl_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  bmUrl_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  bmUrl_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  bmUrl_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  bmUrl_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  bmUrl_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bmUrl_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bmUrl_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bmUrl_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bmUrl_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  bmUrl_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  bmUrl_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  bmUrl_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  bmUrl_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  bmUrl_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  sortBy_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sortBy_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sortBy_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sortBy_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sortBy_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sortBy_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sortBy_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sortBy_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sortBy_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sortBy_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sortBy_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sortBy_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sortBy_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sortBy_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sortBy_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sortDir_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sortDir_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sortDir_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sortDir_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sortDir_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sortDir_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sortDir_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sortDir_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sortDir_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sortDir_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sortDir_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sortDir_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sortDir_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sortDir_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sortDir_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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

export type MemberBmFiltersRelationship = {
  __typename?: 'MemberBmFiltersRelationship';
  cursor: Scalars['String']['output'];
  node: BookmarkFilter;
};

export type MemberBmFiltersUpdateConnectionInput = {
  node?: InputMaybe<BookmarkFilterUpdateInput>;
};

export type MemberBmFiltersUpdateFieldInput = {
  connect?: InputMaybe<Array<MemberBmFiltersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MemberBmFiltersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MemberBmFiltersCreateFieldInput>>;
  delete?: InputMaybe<Array<MemberBmFiltersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MemberBmFiltersDisconnectFieldInput>>;
  update?: InputMaybe<MemberBmFiltersUpdateConnectionInput>;
  where?: InputMaybe<MemberBmFiltersConnectionWhere>;
};

export type MemberBmsContainerAggregateInput = {
  AND?: InputMaybe<Array<MemberBmsContainerAggregateInput>>;
  NOT?: InputMaybe<MemberBmsContainerAggregateInput>;
  OR?: InputMaybe<Array<MemberBmsContainerAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<MemberBmsContainerNodeAggregationWhereInput>;
};

export type MemberBmsContainerBmsContainerAggregationSelection = {
  __typename?: 'MemberBmsContainerBmsContainerAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MemberBmsContainerBmsContainerNodeAggregateSelection>;
};

export type MemberBmsContainerBmsContainerNodeAggregateSelection = {
  __typename?: 'MemberBmsContainerBmsContainerNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
};

export type MemberBmsContainerConnectFieldInput = {
  connect?: InputMaybe<BmsContainerConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<BmsContainerConnectWhere>;
};

export type MemberBmsContainerConnectOrCreateFieldInput = {
  onCreate: MemberBmsContainerConnectOrCreateFieldInputOnCreate;
  where: BmsContainerConnectOrCreateWhere;
};

export type MemberBmsContainerConnectOrCreateFieldInputOnCreate = {
  node: BmsContainerOnCreateInput;
};

export type MemberBmsContainerConnection = {
  __typename?: 'MemberBmsContainerConnection';
  edges: Array<MemberBmsContainerRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MemberBmsContainerConnectionSort = {
  node?: InputMaybe<BmsContainerSort>;
};

export type MemberBmsContainerConnectionWhere = {
  AND?: InputMaybe<Array<MemberBmsContainerConnectionWhere>>;
  NOT?: InputMaybe<MemberBmsContainerConnectionWhere>;
  OR?: InputMaybe<Array<MemberBmsContainerConnectionWhere>>;
  node?: InputMaybe<BmsContainerWhere>;
};

export type MemberBmsContainerCreateFieldInput = {
  node: BmsContainerCreateInput;
};

export type MemberBmsContainerDeleteFieldInput = {
  delete?: InputMaybe<BmsContainerDeleteInput>;
  where?: InputMaybe<MemberBmsContainerConnectionWhere>;
};

export type MemberBmsContainerDisconnectFieldInput = {
  disconnect?: InputMaybe<BmsContainerDisconnectInput>;
  where?: InputMaybe<MemberBmsContainerConnectionWhere>;
};

export type MemberBmsContainerFieldInput = {
  connect?: InputMaybe<MemberBmsContainerConnectFieldInput>;
  connectOrCreate?: InputMaybe<MemberBmsContainerConnectOrCreateFieldInput>;
  create?: InputMaybe<MemberBmsContainerCreateFieldInput>;
};

export type MemberBmsContainerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MemberBmsContainerNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MemberBmsContainerNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MemberBmsContainerNodeAggregationWhereInput>>;
};

export type MemberBmsContainerRelationship = {
  __typename?: 'MemberBmsContainerRelationship';
  cursor: Scalars['String']['output'];
  node: BmsContainer;
};

export type MemberBmsContainerUpdateConnectionInput = {
  node?: InputMaybe<BmsContainerUpdateInput>;
};

export type MemberBmsContainerUpdateFieldInput = {
  connect?: InputMaybe<MemberBmsContainerConnectFieldInput>;
  connectOrCreate?: InputMaybe<MemberBmsContainerConnectOrCreateFieldInput>;
  create?: InputMaybe<MemberBmsContainerCreateFieldInput>;
  delete?: InputMaybe<MemberBmsContainerDeleteFieldInput>;
  disconnect?: InputMaybe<MemberBmsContainerDisconnectFieldInput>;
  update?: InputMaybe<MemberBmsContainerUpdateConnectionInput>;
  where?: InputMaybe<MemberBmsContainerConnectionWhere>;
};

export type MemberBookmarkFilterBmFiltersAggregationSelection = {
  __typename?: 'MemberBookmarkFilterBmFiltersAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MemberBookmarkFilterBmFiltersNodeAggregateSelection>;
};

export type MemberBookmarkFilterBmFiltersNodeAggregateSelection = {
  __typename?: 'MemberBookmarkFilterBmFiltersNodeAggregateSelection';
  bmParentsTxt: StringAggregateSelectionNullable;
  bmTxt: StringAggregateSelectionNullable;
  bmUrl: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
  sortBy: StringAggregateSelectionNullable;
  sortDir: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
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
  bmFilters?: InputMaybe<Array<MemberBmFiltersConnectFieldInput>>;
  bmsContainer?: InputMaybe<MemberBmsContainerConnectFieldInput>;
  collections?: InputMaybe<Array<MemberCollectionsConnectFieldInput>>;
  memberMeta?: InputMaybe<MemberMemberMetaConnectFieldInput>;
};

export type MemberConnectOrCreateInput = {
  bmFilters?: InputMaybe<Array<MemberBmFiltersConnectOrCreateFieldInput>>;
  bmsContainer?: InputMaybe<MemberBmsContainerConnectOrCreateFieldInput>;
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
  bmFilters?: InputMaybe<MemberBmFiltersFieldInput>;
  bmsContainer?: InputMaybe<MemberBmsContainerFieldInput>;
  collections?: InputMaybe<MemberCollectionsFieldInput>;
  memberMeta?: InputMaybe<MemberMemberMetaFieldInput>;
};

export type MemberDeleteInput = {
  bmFilters?: InputMaybe<Array<MemberBmFiltersDeleteFieldInput>>;
  bmsContainer?: InputMaybe<MemberBmsContainerDeleteFieldInput>;
  collections?: InputMaybe<Array<MemberCollectionsDeleteFieldInput>>;
  memberMeta?: InputMaybe<MemberMemberMetaDeleteFieldInput>;
};

export type MemberDisconnectInput = {
  bmFilters?: InputMaybe<Array<MemberBmFiltersDisconnectFieldInput>>;
  bmsContainer?: InputMaybe<MemberBmsContainerDisconnectFieldInput>;
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
  bmFilters?: InputMaybe<Array<MemberBmFiltersCreateFieldInput>>;
  bmsContainer?: InputMaybe<MemberBmsContainerCreateFieldInput>;
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
  bmFilters?: InputMaybe<Array<MemberBmFiltersUpdateFieldInput>>;
  bmsContainer?: InputMaybe<MemberBmsContainerUpdateFieldInput>;
  collections?: InputMaybe<Array<MemberCollectionsUpdateFieldInput>>;
  memberMeta?: InputMaybe<MemberMemberMetaUpdateFieldInput>;
};

export type MemberWhere = {
  AND?: InputMaybe<Array<MemberWhere>>;
  NOT?: InputMaybe<MemberWhere>;
  OR?: InputMaybe<Array<MemberWhere>>;
  bmFiltersAggregate?: InputMaybe<MemberBmFiltersAggregateInput>;
  /** Return Members where all of the related MemberBmFiltersConnections match this filter */
  bmFiltersConnection_ALL?: InputMaybe<MemberBmFiltersConnectionWhere>;
  /** Return Members where none of the related MemberBmFiltersConnections match this filter */
  bmFiltersConnection_NONE?: InputMaybe<MemberBmFiltersConnectionWhere>;
  /** Return Members where one of the related MemberBmFiltersConnections match this filter */
  bmFiltersConnection_SINGLE?: InputMaybe<MemberBmFiltersConnectionWhere>;
  /** Return Members where some of the related MemberBmFiltersConnections match this filter */
  bmFiltersConnection_SOME?: InputMaybe<MemberBmFiltersConnectionWhere>;
  /** Return Members where all of the related BookmarkFilters match this filter */
  bmFilters_ALL?: InputMaybe<BookmarkFilterWhere>;
  /** Return Members where none of the related BookmarkFilters match this filter */
  bmFilters_NONE?: InputMaybe<BookmarkFilterWhere>;
  /** Return Members where one of the related BookmarkFilters match this filter */
  bmFilters_SINGLE?: InputMaybe<BookmarkFilterWhere>;
  /** Return Members where some of the related BookmarkFilters match this filter */
  bmFilters_SOME?: InputMaybe<BookmarkFilterWhere>;
  bmsContainer?: InputMaybe<BmsContainerWhere>;
  bmsContainerAggregate?: InputMaybe<MemberBmsContainerAggregateInput>;
  bmsContainerConnection?: InputMaybe<MemberBmsContainerConnectionWhere>;
  bmsContainerConnection_NOT?: InputMaybe<MemberBmsContainerConnectionWhere>;
  bmsContainer_NOT?: InputMaybe<BmsContainerWhere>;
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
  createBmsContainers: CreateBmsContainersMutationResponse;
  createBmsPageds: CreateBmsPagedsMutationResponse;
  createBookmarkDl?: Maybe<Scalars['ID']['output']>;
  createBookmarkDls: CreateBookmarkDlsMutationResponse;
  createBookmarkFilters: CreateBookmarkFiltersMutationResponse;
  createBookmarks: CreateBookmarksMutationResponse;
  createCollection?: Maybe<Scalars['ID']['output']>;
  createCollectionDs: CreateCollectionDsMutationResponse;
  createCollectionDsLists: CreateCollectionDsListsMutationResponse;
  createCollections: CreateCollectionsMutationResponse;
  createFolder?: Maybe<Scalars['ID']['output']>;
  createFolderDls: CreateFolderDlsMutationResponse;
  createFolders: CreateFoldersMutationResponse;
  createMemberMetas: CreateMemberMetasMutationResponse;
  createMembers: CreateMembersMutationResponse;
  createParentMetas: CreateParentMetasMutationResponse;
  createParentsChildren: CreateParentsChildrenMutationResponse;
  createTagDs: CreateTagDsMutationResponse;
  createTags: CreateTagsMutationResponse;
  deleteBmsContainers: DeleteInfo;
  deleteBmsPageds: DeleteInfo;
  deleteBookmark: Scalars['Int']['output'];
  deleteBookmarkDls: DeleteInfo;
  deleteBookmarkFilters: DeleteInfo;
  deleteBookmarks: DeleteInfo;
  deleteCascade?: Maybe<Scalars['Int']['output']>;
  deleteCollection: Scalars['Int']['output'];
  deleteCollectionDs: DeleteInfo;
  deleteCollectionDsLists: DeleteInfo;
  deleteCollections: DeleteInfo;
  deleteFolder: Scalars['Int']['output'];
  deleteFolderDls: DeleteInfo;
  deleteFolders: DeleteInfo;
  deleteListCascade?: Maybe<Scalars['Int']['output']>;
  deleteManyNodes: Scalars['Int']['output'];
  deleteMemberMetas: DeleteInfo;
  deleteMembers: DeleteInfo;
  deleteParentMetas: DeleteInfo;
  deleteParentsChildren: DeleteInfo;
  deleteTagDs: DeleteInfo;
  deleteTags: DeleteInfo;
  importFirefoxBookmarks?: Maybe<Scalars['Boolean']['output']>;
  moveManyNodes: Scalars['Boolean']['output'];
  updateBmsContainers: UpdateBmsContainersMutationResponse;
  updateBmsPageds: UpdateBmsPagedsMutationResponse;
  updateBookmarkDls: UpdateBookmarkDlsMutationResponse;
  updateBookmarkFilters: UpdateBookmarkFiltersMutationResponse;
  updateBookmarks: UpdateBookmarksMutationResponse;
  updateCollectionDs: UpdateCollectionDsMutationResponse;
  updateCollectionDsLists: UpdateCollectionDsListsMutationResponse;
  updateCollections: UpdateCollectionsMutationResponse;
  updateFolderDls: UpdateFolderDlsMutationResponse;
  updateFolders: UpdateFoldersMutationResponse;
  updateMemberMetas: UpdateMemberMetasMutationResponse;
  updateMembers: UpdateMembersMutationResponse;
  updateParentMetas: UpdateParentMetasMutationResponse;
  updateParentsChildren: UpdateParentsChildrenMutationResponse;
  updateTagDs: UpdateTagDsMutationResponse;
  updateTags: UpdateTagsMutationResponse;
};


export type MutationCreateBmsContainersArgs = {
  input: Array<BmsContainerCreateInput>;
};


export type MutationCreateBmsPagedsArgs = {
  input: Array<BmsPagedCreateInput>;
};


export type MutationCreateBookmarkDlArgs = {
  data: CreateBookmarkDl;
};


export type MutationCreateBookmarkDlsArgs = {
  input: Array<BookmarkDlCreateInput>;
};


export type MutationCreateBookmarkFiltersArgs = {
  input: Array<BookmarkFilterCreateInput>;
};


export type MutationCreateBookmarksArgs = {
  input: Array<BookmarkCreateInput>;
};


export type MutationCreateCollectionArgs = {
  memberId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateCollectionDsArgs = {
  input: Array<CollectionDsCreateInput>;
};


export type MutationCreateCollectionDsListsArgs = {
  input: Array<CollectionDsListCreateInput>;
};


export type MutationCreateCollectionsArgs = {
  input: Array<CollectionCreateInput>;
};


export type MutationCreateFolderArgs = {
  name: Scalars['String']['input'];
  parentId: Scalars['ID']['input'];
  position: Scalars['Int']['input'];
};


export type MutationCreateFolderDlsArgs = {
  input: Array<FolderDlCreateInput>;
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


export type MutationCreateTagDsArgs = {
  input: Array<TagDsCreateInput>;
};


export type MutationCreateTagsArgs = {
  input: Array<TagCreateInput>;
};


export type MutationDeleteBmsContainersArgs = {
  delete?: InputMaybe<BmsContainerDeleteInput>;
  where?: InputMaybe<BmsContainerWhere>;
};


export type MutationDeleteBmsPagedsArgs = {
  where?: InputMaybe<BmsPagedWhere>;
};


export type MutationDeleteBookmarkArgs = {
  id: Scalars['ID']['input'];
  parentId: Scalars['ID']['input'];
};


export type MutationDeleteBookmarkDlsArgs = {
  where?: InputMaybe<BookmarkDlWhere>;
};


export type MutationDeleteBookmarkFiltersArgs = {
  delete?: InputMaybe<BookmarkFilterDeleteInput>;
  where?: InputMaybe<BookmarkFilterWhere>;
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


export type MutationDeleteCollectionDsArgs = {
  where?: InputMaybe<CollectionDsWhere>;
};


export type MutationDeleteCollectionDsListsArgs = {
  where?: InputMaybe<CollectionDsListWhere>;
};


export type MutationDeleteCollectionsArgs = {
  delete?: InputMaybe<CollectionDeleteInput>;
  where?: InputMaybe<CollectionWhere>;
};


export type MutationDeleteFolderArgs = {
  id: Scalars['ID']['input'];
  parentId: Scalars['ID']['input'];
};


export type MutationDeleteFolderDlsArgs = {
  where?: InputMaybe<FolderDlWhere>;
};


export type MutationDeleteFoldersArgs = {
  delete?: InputMaybe<FolderDeleteInput>;
  where?: InputMaybe<FolderWhere>;
};


export type MutationDeleteListCascadeArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteManyNodesArgs = {
  nodes: SelectedNodes;
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


export type MutationDeleteTagDsArgs = {
  where?: InputMaybe<TagDsWhere>;
};


export type MutationDeleteTagsArgs = {
  delete?: InputMaybe<TagDeleteInput>;
  where?: InputMaybe<TagWhere>;
};


export type MutationImportFirefoxBookmarksArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationMoveManyNodesArgs = {
  destinationId?: InputMaybe<Scalars['ID']['input']>;
  nodes: NodesToMove;
  position?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateBmsContainersArgs = {
  connect?: InputMaybe<BmsContainerConnectInput>;
  connectOrCreate?: InputMaybe<BmsContainerConnectOrCreateInput>;
  create?: InputMaybe<BmsContainerRelationInput>;
  delete?: InputMaybe<BmsContainerDeleteInput>;
  disconnect?: InputMaybe<BmsContainerDisconnectInput>;
  update?: InputMaybe<BmsContainerUpdateInput>;
  where?: InputMaybe<BmsContainerWhere>;
};


export type MutationUpdateBmsPagedsArgs = {
  update?: InputMaybe<BmsPagedUpdateInput>;
  where?: InputMaybe<BmsPagedWhere>;
};


export type MutationUpdateBookmarkDlsArgs = {
  update?: InputMaybe<BookmarkDlUpdateInput>;
  where?: InputMaybe<BookmarkDlWhere>;
};


export type MutationUpdateBookmarkFiltersArgs = {
  connect?: InputMaybe<BookmarkFilterConnectInput>;
  connectOrCreate?: InputMaybe<BookmarkFilterConnectOrCreateInput>;
  create?: InputMaybe<BookmarkFilterRelationInput>;
  delete?: InputMaybe<BookmarkFilterDeleteInput>;
  disconnect?: InputMaybe<BookmarkFilterDisconnectInput>;
  update?: InputMaybe<BookmarkFilterUpdateInput>;
  where?: InputMaybe<BookmarkFilterWhere>;
};


export type MutationUpdateBookmarksArgs = {
  connect?: InputMaybe<BookmarkConnectInput>;
  connectOrCreate?: InputMaybe<BookmarkConnectOrCreateInput>;
  create?: InputMaybe<BookmarkRelationInput>;
  delete?: InputMaybe<BookmarkDeleteInput>;
  disconnect?: InputMaybe<BookmarkDisconnectInput>;
  update?: InputMaybe<BookmarkUpdateInput>;
  where?: InputMaybe<BookmarkWhere>;
};


export type MutationUpdateCollectionDsArgs = {
  update?: InputMaybe<CollectionDsUpdateInput>;
  where?: InputMaybe<CollectionDsWhere>;
};


export type MutationUpdateCollectionDsListsArgs = {
  update?: InputMaybe<CollectionDsListUpdateInput>;
  where?: InputMaybe<CollectionDsListWhere>;
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


export type MutationUpdateFolderDlsArgs = {
  update?: InputMaybe<FolderDlUpdateInput>;
  where?: InputMaybe<FolderDlWhere>;
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


export type MutationUpdateTagDsArgs = {
  update?: InputMaybe<TagDsUpdateInput>;
  where?: InputMaybe<TagDsWhere>;
};


export type MutationUpdateTagsArgs = {
  connect?: InputMaybe<TagConnectInput>;
  connectOrCreate?: InputMaybe<TagConnectOrCreateInput>;
  create?: InputMaybe<TagRelationInput>;
  delete?: InputMaybe<TagDeleteInput>;
  disconnect?: InputMaybe<TagDisconnectInput>;
  update?: InputMaybe<TagUpdateInput>;
  where?: InputMaybe<TagWhere>;
};

export type NodesToMove = {
  childs: Array<ChildsToMove>;
  collectionIds: Array<Scalars['ID']['input']>;
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
  id: Scalars['ID']['output'];
};

export type ParentConnectInput = {
  _on?: InputMaybe<ParentImplementationsConnectInput>;
};

export type ParentConnectWhere = {
  node: ParentWhere;
};

export type ParentCreateInput = {
  BmsContainer?: InputMaybe<BmsContainerCreateInput>;
  Collection?: InputMaybe<CollectionCreateInput>;
  Folder?: InputMaybe<FolderCreateInput>;
};

export type ParentDeleteInput = {
  _on?: InputMaybe<ParentImplementationsDeleteInput>;
};

export type ParentDisconnectInput = {
  _on?: InputMaybe<ParentImplementationsDisconnectInput>;
};

export type ParentImplementationsConnectInput = {
  BmsContainer?: InputMaybe<Array<BmsContainerConnectInput>>;
  Collection?: InputMaybe<Array<CollectionConnectInput>>;
  Folder?: InputMaybe<Array<FolderConnectInput>>;
};

export type ParentImplementationsDeleteInput = {
  BmsContainer?: InputMaybe<Array<BmsContainerDeleteInput>>;
  Collection?: InputMaybe<Array<CollectionDeleteInput>>;
  Folder?: InputMaybe<Array<FolderDeleteInput>>;
};

export type ParentImplementationsDisconnectInput = {
  BmsContainer?: InputMaybe<Array<BmsContainerDisconnectInput>>;
  Collection?: InputMaybe<Array<CollectionDisconnectInput>>;
  Folder?: InputMaybe<Array<FolderDisconnectInput>>;
};

export type ParentImplementationsUpdateInput = {
  BmsContainer?: InputMaybe<BmsContainerUpdateInput>;
  Collection?: InputMaybe<CollectionUpdateInput>;
  Folder?: InputMaybe<FolderUpdateInput>;
};

export type ParentImplementationsWhere = {
  BmsContainer?: InputMaybe<BmsContainerWhere>;
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

/** Fields to sort Parents by. The order in which sorts are applied is not guaranteed when specifying many fields in one ParentSort object. */
export type ParentSort = {
  id?: InputMaybe<SortDirection>;
};

export type ParentUpdateInput = {
  _on?: InputMaybe<ParentImplementationsUpdateInput>;
};

export type ParentWhere = {
  _on?: InputMaybe<ParentImplementationsWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
};

export type ParentsChildren = {
  __typename?: 'ParentsChildren';
  children: Array<ChildDl>;
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
  bmsByFilter: BmsPaged;
  bmsContainers: Array<BmsContainer>;
  bmsContainersAggregate: BmsContainerAggregateSelection;
  bmsContainersConnection: BmsContainersConnection;
  bmsPageds: Array<BmsPaged>;
  bmsPagedsAggregate: BmsPagedAggregateSelection;
  bmsPagedsConnection: BmsPagedsConnection;
  bookmarkDls: Array<BookmarkDl>;
  bookmarkDlsAggregate: BookmarkDlAggregateSelection;
  bookmarkDlsConnection: BookmarkDlsConnection;
  bookmarkFilters: Array<BookmarkFilter>;
  bookmarkFiltersAggregate: BookmarkFilterAggregateSelection;
  bookmarkFiltersConnection: BookmarkFiltersConnection;
  bookmarks: Array<Bookmark>;
  bookmarksAggregate: BookmarkAggregateSelection;
  bookmarksConnection: BookmarksConnection;
  collectionDs: Array<CollectionDs>;
  collectionDsAggregate: CollectionDsAggregateSelection;
  collectionDsConnection: CollectionDsConnection;
  collectionDsLists: Array<CollectionDsList>;
  collectionDsListsAggregate: CollectionDsListAggregateSelection;
  collectionDsListsConnection: CollectionDsListsConnection;
  collectionList?: Maybe<CollectionDsList>;
  collections: Array<Collection>;
  collectionsAggregate: CollectionAggregateSelection;
  collectionsConnection: CollectionsConnection;
  folderDls: Array<FolderDl>;
  folderDlsAggregate: FolderDlAggregateSelection;
  folderDlsConnection: FolderDlsConnection;
  folders: Array<Folder>;
  foldersAggregate: FolderAggregateSelection;
  foldersConnection: FoldersConnection;
  memberMetas: Array<MemberMeta>;
  memberMetasAggregate: MemberMetaAggregateSelection;
  memberMetasConnection: MemberMetasConnection;
  members: Array<Member>;
  membersAggregate: MemberAggregateSelection;
  membersConnection: MembersConnection;
  nl_parentsChildren: Array<ParentsChildren>;
  nonHierarchBmCount: Scalars['Int']['output'];
  parentChildren: Array<ChildDl>;
  parentMetas: Array<ParentMeta>;
  parentMetasAggregate: ParentMetaAggregateSelection;
  parentMetasConnection: ParentMetasConnection;
  parentsChildren: Array<ParentsChildren>;
  parentsChildrenAggregate: ParentsChildrenAggregateSelection;
  parentsChildrenConnection: ParentsChildrenConnection;
  tagDs: Array<TagDs>;
  tagDsAggregate: TagDsAggregateSelection;
  tagDsConnection: TagDsConnection;
  tags: Array<Tag>;
  tagsAggregate: TagAggregateSelection;
  tagsConnection: TagsConnection;
};


export type QueryBmsByFilterArgs = {
  filter: BookmarkFilter_In;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type QueryBmsContainersArgs = {
  options?: InputMaybe<BmsContainerOptions>;
  where?: InputMaybe<BmsContainerWhere>;
};


export type QueryBmsContainersAggregateArgs = {
  where?: InputMaybe<BmsContainerWhere>;
};


export type QueryBmsContainersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<BmsContainerSort>>>;
  where?: InputMaybe<BmsContainerWhere>;
};


export type QueryBmsPagedsArgs = {
  options?: InputMaybe<BmsPagedOptions>;
  where?: InputMaybe<BmsPagedWhere>;
};


export type QueryBmsPagedsAggregateArgs = {
  where?: InputMaybe<BmsPagedWhere>;
};


export type QueryBmsPagedsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<BmsPagedSort>>>;
  where?: InputMaybe<BmsPagedWhere>;
};


export type QueryBookmarkDlsArgs = {
  options?: InputMaybe<BookmarkDlOptions>;
  where?: InputMaybe<BookmarkDlWhere>;
};


export type QueryBookmarkDlsAggregateArgs = {
  where?: InputMaybe<BookmarkDlWhere>;
};


export type QueryBookmarkDlsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<BookmarkDlSort>>>;
  where?: InputMaybe<BookmarkDlWhere>;
};


export type QueryBookmarkFiltersArgs = {
  options?: InputMaybe<BookmarkFilterOptions>;
  where?: InputMaybe<BookmarkFilterWhere>;
};


export type QueryBookmarkFiltersAggregateArgs = {
  where?: InputMaybe<BookmarkFilterWhere>;
};


export type QueryBookmarkFiltersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<BookmarkFilterSort>>>;
  where?: InputMaybe<BookmarkFilterWhere>;
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


export type QueryCollectionDsArgs = {
  options?: InputMaybe<CollectionDsOptions>;
  where?: InputMaybe<CollectionDsWhere>;
};


export type QueryCollectionDsAggregateArgs = {
  where?: InputMaybe<CollectionDsWhere>;
};


export type QueryCollectionDsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CollectionDsSort>>>;
  where?: InputMaybe<CollectionDsWhere>;
};


export type QueryCollectionDsListsArgs = {
  options?: InputMaybe<CollectionDsListOptions>;
  where?: InputMaybe<CollectionDsListWhere>;
};


export type QueryCollectionDsListsAggregateArgs = {
  where?: InputMaybe<CollectionDsListWhere>;
};


export type QueryCollectionDsListsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CollectionDsListWhere>;
};


export type QueryCollectionListArgs = {
  memberId: Scalars['String']['input'];
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


export type QueryFolderDlsArgs = {
  options?: InputMaybe<FolderDlOptions>;
  where?: InputMaybe<FolderDlWhere>;
};


export type QueryFolderDlsAggregateArgs = {
  where?: InputMaybe<FolderDlWhere>;
};


export type QueryFolderDlsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FolderDlSort>>>;
  where?: InputMaybe<FolderDlWhere>;
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


export type QueryNl_ParentsChildrenArgs = {
  ids: Array<Scalars['String']['input']>;
  level: Scalars['Int']['input'];
};


export type QueryNonHierarchBmCountArgs = {
  memberId: Scalars['String']['input'];
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


export type QueryTagDsArgs = {
  options?: InputMaybe<TagDsOptions>;
  where?: InputMaybe<TagDsWhere>;
};


export type QueryTagDsAggregateArgs = {
  where?: InputMaybe<TagDsWhere>;
};


export type QueryTagDsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TagDsSort>>>;
  where?: InputMaybe<TagDsWhere>;
};


export type QueryTagsArgs = {
  options?: InputMaybe<TagOptions>;
  where?: InputMaybe<TagWhere>;
};


export type QueryTagsAggregateArgs = {
  where?: InputMaybe<TagWhere>;
};


export type QueryTagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TagSort>>>;
  where?: InputMaybe<TagWhere>;
};

/** Input type for options that can be specified on a query operation. */
export type QueryOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type SelectedChilds = {
  bookmarkIds: Array<Scalars['ID']['input']>;
  folderIds: Array<Scalars['ID']['input']>;
  parentId: Scalars['ID']['input'];
};

export type SelectedNodes = {
  childs: Array<SelectedChilds>;
  collectionIds: Array<Scalars['ID']['input']>;
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

export type Tag = {
  __typename?: 'Tag';
  bookmarks: Array<Bookmark>;
  bookmarksAggregate?: Maybe<TagBookmarkBookmarksAggregationSelection>;
  bookmarksConnection: TagBookmarksConnection;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TagBookmarksArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<BookmarkOptions>;
  where?: InputMaybe<BookmarkWhere>;
};


export type TagBookmarksAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BookmarkWhere>;
};


export type TagBookmarksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TagBookmarksConnectionSort>>;
  where?: InputMaybe<TagBookmarksConnectionWhere>;
};

export type TagAggregateSelection = {
  __typename?: 'TagAggregateSelection';
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type TagBookmarkBookmarksAggregationSelection = {
  __typename?: 'TagBookmarkBookmarksAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TagBookmarkBookmarksNodeAggregateSelection>;
};

export type TagBookmarkBookmarksNodeAggregateSelection = {
  __typename?: 'TagBookmarkBookmarksNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  domainName: StringAggregateSelectionNullable;
  iconUri: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  linkPath: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  urlScheme: StringAggregateSelectionNullable;
};

export type TagBookmarksAggregateInput = {
  AND?: InputMaybe<Array<TagBookmarksAggregateInput>>;
  NOT?: InputMaybe<TagBookmarksAggregateInput>;
  OR?: InputMaybe<Array<TagBookmarksAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TagBookmarksNodeAggregationWhereInput>;
};

export type TagBookmarksConnectFieldInput = {
  connect?: InputMaybe<Array<BookmarkConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<BookmarkConnectWhere>;
};

export type TagBookmarksConnectOrCreateFieldInput = {
  onCreate: TagBookmarksConnectOrCreateFieldInputOnCreate;
  where: BookmarkConnectOrCreateWhere;
};

export type TagBookmarksConnectOrCreateFieldInputOnCreate = {
  node: BookmarkOnCreateInput;
};

export type TagBookmarksConnection = {
  __typename?: 'TagBookmarksConnection';
  edges: Array<TagBookmarksRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TagBookmarksConnectionSort = {
  node?: InputMaybe<BookmarkSort>;
};

export type TagBookmarksConnectionWhere = {
  AND?: InputMaybe<Array<TagBookmarksConnectionWhere>>;
  NOT?: InputMaybe<TagBookmarksConnectionWhere>;
  OR?: InputMaybe<Array<TagBookmarksConnectionWhere>>;
  node?: InputMaybe<BookmarkWhere>;
};

export type TagBookmarksCreateFieldInput = {
  node: BookmarkCreateInput;
};

export type TagBookmarksDeleteFieldInput = {
  delete?: InputMaybe<BookmarkDeleteInput>;
  where?: InputMaybe<TagBookmarksConnectionWhere>;
};

export type TagBookmarksDisconnectFieldInput = {
  disconnect?: InputMaybe<BookmarkDisconnectInput>;
  where?: InputMaybe<TagBookmarksConnectionWhere>;
};

export type TagBookmarksFieldInput = {
  connect?: InputMaybe<Array<TagBookmarksConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TagBookmarksConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TagBookmarksCreateFieldInput>>;
};

export type TagBookmarksNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TagBookmarksNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TagBookmarksNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TagBookmarksNodeAggregationWhereInput>>;
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
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  domainName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  domainName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  domainName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  domainName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  domainName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  domainName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  domainName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  domainName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  domainName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  domainName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  domainName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  domainName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  domainName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  domainName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  domainName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  iconUri_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  iconUri_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  iconUri_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  iconUri_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  iconUri_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  iconUri_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  iconUri_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  iconUri_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  iconUri_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  iconUri_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  iconUri_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  iconUri_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  iconUri_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  iconUri_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  iconUri_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  linkPath_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  linkPath_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  linkPath_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  linkPath_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  linkPath_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  linkPath_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  linkPath_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  linkPath_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  linkPath_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  linkPath_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  linkPath_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  linkPath_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  linkPath_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  linkPath_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  linkPath_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  urlScheme_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  urlScheme_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  urlScheme_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  urlScheme_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  urlScheme_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  urlScheme_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  urlScheme_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  urlScheme_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  urlScheme_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  urlScheme_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  urlScheme_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  urlScheme_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  urlScheme_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  urlScheme_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  urlScheme_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TagBookmarksRelationship = {
  __typename?: 'TagBookmarksRelationship';
  cursor: Scalars['String']['output'];
  node: Bookmark;
};

export type TagBookmarksUpdateConnectionInput = {
  node?: InputMaybe<BookmarkUpdateInput>;
};

export type TagBookmarksUpdateFieldInput = {
  connect?: InputMaybe<Array<TagBookmarksConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TagBookmarksConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TagBookmarksCreateFieldInput>>;
  delete?: InputMaybe<Array<TagBookmarksDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TagBookmarksDisconnectFieldInput>>;
  update?: InputMaybe<TagBookmarksUpdateConnectionInput>;
  where?: InputMaybe<TagBookmarksConnectionWhere>;
};

export type TagConnectInput = {
  bookmarks?: InputMaybe<Array<TagBookmarksConnectFieldInput>>;
};

export type TagConnectOrCreateInput = {
  bookmarks?: InputMaybe<Array<TagBookmarksConnectOrCreateFieldInput>>;
};

export type TagConnectOrCreateWhere = {
  node: TagUniqueWhere;
};

export type TagConnectWhere = {
  node: TagWhere;
};

export type TagCreateInput = {
  bookmarks?: InputMaybe<TagBookmarksFieldInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type TagDeleteInput = {
  bookmarks?: InputMaybe<Array<TagBookmarksDeleteFieldInput>>;
};

export type TagDisconnectInput = {
  bookmarks?: InputMaybe<Array<TagBookmarksDisconnectFieldInput>>;
};

export type TagDs = {
  __typename?: 'TagDs';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type TagDsAggregateSelection = {
  __typename?: 'TagDsAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type TagDsConnection = {
  __typename?: 'TagDsConnection';
  edges: Array<TagDsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TagDsCreateInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type TagDsEdge = {
  __typename?: 'TagDsEdge';
  cursor: Scalars['String']['output'];
  node: TagDs;
};

export type TagDsOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more TagDsSort objects to sort TagDs by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TagDsSort>>;
};

/** Fields to sort TagDs by. The order in which sorts are applied is not guaranteed when specifying many fields in one TagDsSort object. */
export type TagDsSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type TagDsUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TagDsWhere = {
  AND?: InputMaybe<Array<TagDsWhere>>;
  NOT?: InputMaybe<TagDsWhere>;
  OR?: InputMaybe<Array<TagDsWhere>>;
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

export type TagEdge = {
  __typename?: 'TagEdge';
  cursor: Scalars['String']['output'];
  node: Tag;
};

export type TagOnCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type TagOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more TagSort objects to sort Tags by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TagSort>>;
};

export type TagRelationInput = {
  bookmarks?: InputMaybe<Array<TagBookmarksCreateFieldInput>>;
};

/** Fields to sort Tags by. The order in which sorts are applied is not guaranteed when specifying many fields in one TagSort object. */
export type TagSort = {
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type TagUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TagUpdateInput = {
  bookmarks?: InputMaybe<Array<TagBookmarksUpdateFieldInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TagWhere = {
  AND?: InputMaybe<Array<TagWhere>>;
  NOT?: InputMaybe<TagWhere>;
  OR?: InputMaybe<Array<TagWhere>>;
  bookmarksAggregate?: InputMaybe<TagBookmarksAggregateInput>;
  /** Return Tags where all of the related TagBookmarksConnections match this filter */
  bookmarksConnection_ALL?: InputMaybe<TagBookmarksConnectionWhere>;
  /** Return Tags where none of the related TagBookmarksConnections match this filter */
  bookmarksConnection_NONE?: InputMaybe<TagBookmarksConnectionWhere>;
  /** Return Tags where one of the related TagBookmarksConnections match this filter */
  bookmarksConnection_SINGLE?: InputMaybe<TagBookmarksConnectionWhere>;
  /** Return Tags where some of the related TagBookmarksConnections match this filter */
  bookmarksConnection_SOME?: InputMaybe<TagBookmarksConnectionWhere>;
  /** Return Tags where all of the related Bookmarks match this filter */
  bookmarks_ALL?: InputMaybe<BookmarkWhere>;
  /** Return Tags where none of the related Bookmarks match this filter */
  bookmarks_NONE?: InputMaybe<BookmarkWhere>;
  /** Return Tags where one of the related Bookmarks match this filter */
  bookmarks_SINGLE?: InputMaybe<BookmarkWhere>;
  /** Return Tags where some of the related Bookmarks match this filter */
  bookmarks_SOME?: InputMaybe<BookmarkWhere>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TagsConnection = {
  __typename?: 'TagsConnection';
  edges: Array<TagEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UpdateBmsContainersMutationResponse = {
  __typename?: 'UpdateBmsContainersMutationResponse';
  bmsContainers: Array<BmsContainer>;
  info: UpdateInfo;
};

export type UpdateBmsPagedsMutationResponse = {
  __typename?: 'UpdateBmsPagedsMutationResponse';
  bmsPageds: Array<BmsPaged>;
  info: UpdateInfo;
};

export type UpdateBookmarkDlsMutationResponse = {
  __typename?: 'UpdateBookmarkDlsMutationResponse';
  bookmarkDls: Array<BookmarkDl>;
  info: UpdateInfo;
};

export type UpdateBookmarkFiltersMutationResponse = {
  __typename?: 'UpdateBookmarkFiltersMutationResponse';
  bookmarkFilters: Array<BookmarkFilter>;
  info: UpdateInfo;
};

export type UpdateBookmarksMutationResponse = {
  __typename?: 'UpdateBookmarksMutationResponse';
  bookmarks: Array<Bookmark>;
  info: UpdateInfo;
};

export type UpdateCollectionDsListsMutationResponse = {
  __typename?: 'UpdateCollectionDsListsMutationResponse';
  collectionDsLists: Array<CollectionDsList>;
  info: UpdateInfo;
};

export type UpdateCollectionDsMutationResponse = {
  __typename?: 'UpdateCollectionDsMutationResponse';
  collectionDs: Array<CollectionDs>;
  info: UpdateInfo;
};

export type UpdateCollectionsMutationResponse = {
  __typename?: 'UpdateCollectionsMutationResponse';
  collections: Array<Collection>;
  info: UpdateInfo;
};

export type UpdateFolderDlsMutationResponse = {
  __typename?: 'UpdateFolderDlsMutationResponse';
  folderDls: Array<FolderDl>;
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

export type UpdateTagDsMutationResponse = {
  __typename?: 'UpdateTagDsMutationResponse';
  info: UpdateInfo;
  tagDs: Array<TagDs>;
};

export type UpdateTagsMutationResponse = {
  __typename?: 'UpdateTagsMutationResponse';
  info: UpdateInfo;
  tags: Array<Tag>;
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
  ChildDl: ( BookmarkDl ) | ( Omit<FolderDl, 'children'> & { children: Array<RefType['ChildDl']> } );
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  Parent: ( BmsContainer ) | ( Omit<Collection, 'children'> & { children: Array<RefType['Child']> } ) | ( Omit<Folder, 'children'> & { children: Array<RefType['Child']> } );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BmsContainer: ResolverTypeWrapper<BmsContainer>;
  BmsContainerAggregateSelection: ResolverTypeWrapper<BmsContainerAggregateSelection>;
  BmsContainerBookmarkBookmarksAggregationSelection: ResolverTypeWrapper<BmsContainerBookmarkBookmarksAggregationSelection>;
  BmsContainerBookmarkBookmarksNodeAggregateSelection: ResolverTypeWrapper<BmsContainerBookmarkBookmarksNodeAggregateSelection>;
  BmsContainerBookmarksAggregateInput: BmsContainerBookmarksAggregateInput;
  BmsContainerBookmarksConnectFieldInput: BmsContainerBookmarksConnectFieldInput;
  BmsContainerBookmarksConnectOrCreateFieldInput: BmsContainerBookmarksConnectOrCreateFieldInput;
  BmsContainerBookmarksConnectOrCreateFieldInputOnCreate: BmsContainerBookmarksConnectOrCreateFieldInputOnCreate;
  BmsContainerBookmarksConnection: ResolverTypeWrapper<BmsContainerBookmarksConnection>;
  BmsContainerBookmarksConnectionSort: BmsContainerBookmarksConnectionSort;
  BmsContainerBookmarksConnectionWhere: BmsContainerBookmarksConnectionWhere;
  BmsContainerBookmarksCreateFieldInput: BmsContainerBookmarksCreateFieldInput;
  BmsContainerBookmarksDeleteFieldInput: BmsContainerBookmarksDeleteFieldInput;
  BmsContainerBookmarksDisconnectFieldInput: BmsContainerBookmarksDisconnectFieldInput;
  BmsContainerBookmarksFieldInput: BmsContainerBookmarksFieldInput;
  BmsContainerBookmarksNodeAggregationWhereInput: BmsContainerBookmarksNodeAggregationWhereInput;
  BmsContainerBookmarksRelationship: ResolverTypeWrapper<BmsContainerBookmarksRelationship>;
  BmsContainerBookmarksUpdateConnectionInput: BmsContainerBookmarksUpdateConnectionInput;
  BmsContainerBookmarksUpdateFieldInput: BmsContainerBookmarksUpdateFieldInput;
  BmsContainerConnectInput: BmsContainerConnectInput;
  BmsContainerConnectOrCreateInput: BmsContainerConnectOrCreateInput;
  BmsContainerConnectOrCreateWhere: BmsContainerConnectOrCreateWhere;
  BmsContainerConnectWhere: BmsContainerConnectWhere;
  BmsContainerCreateInput: BmsContainerCreateInput;
  BmsContainerDeleteInput: BmsContainerDeleteInput;
  BmsContainerDisconnectInput: BmsContainerDisconnectInput;
  BmsContainerEdge: ResolverTypeWrapper<BmsContainerEdge>;
  BmsContainerMemberAggregateInput: BmsContainerMemberAggregateInput;
  BmsContainerMemberConnectFieldInput: BmsContainerMemberConnectFieldInput;
  BmsContainerMemberConnectOrCreateFieldInput: BmsContainerMemberConnectOrCreateFieldInput;
  BmsContainerMemberConnectOrCreateFieldInputOnCreate: BmsContainerMemberConnectOrCreateFieldInputOnCreate;
  BmsContainerMemberConnection: ResolverTypeWrapper<BmsContainerMemberConnection>;
  BmsContainerMemberConnectionSort: BmsContainerMemberConnectionSort;
  BmsContainerMemberConnectionWhere: BmsContainerMemberConnectionWhere;
  BmsContainerMemberCreateFieldInput: BmsContainerMemberCreateFieldInput;
  BmsContainerMemberDeleteFieldInput: BmsContainerMemberDeleteFieldInput;
  BmsContainerMemberDisconnectFieldInput: BmsContainerMemberDisconnectFieldInput;
  BmsContainerMemberFieldInput: BmsContainerMemberFieldInput;
  BmsContainerMemberMemberAggregationSelection: ResolverTypeWrapper<BmsContainerMemberMemberAggregationSelection>;
  BmsContainerMemberMemberNodeAggregateSelection: ResolverTypeWrapper<BmsContainerMemberMemberNodeAggregateSelection>;
  BmsContainerMemberNodeAggregationWhereInput: BmsContainerMemberNodeAggregationWhereInput;
  BmsContainerMemberRelationship: ResolverTypeWrapper<BmsContainerMemberRelationship>;
  BmsContainerMemberUpdateConnectionInput: BmsContainerMemberUpdateConnectionInput;
  BmsContainerMemberUpdateFieldInput: BmsContainerMemberUpdateFieldInput;
  BmsContainerOnCreateInput: BmsContainerOnCreateInput;
  BmsContainerOptions: BmsContainerOptions;
  BmsContainerRelationInput: BmsContainerRelationInput;
  BmsContainerSort: BmsContainerSort;
  BmsContainerUniqueWhere: BmsContainerUniqueWhere;
  BmsContainerUpdateInput: BmsContainerUpdateInput;
  BmsContainerWhere: BmsContainerWhere;
  BmsContainersConnection: ResolverTypeWrapper<BmsContainersConnection>;
  BmsPaged: ResolverTypeWrapper<BmsPaged>;
  BmsPagedAggregateSelection: ResolverTypeWrapper<BmsPagedAggregateSelection>;
  BmsPagedCreateInput: BmsPagedCreateInput;
  BmsPagedEdge: ResolverTypeWrapper<BmsPagedEdge>;
  BmsPagedOptions: BmsPagedOptions;
  BmsPagedSort: BmsPagedSort;
  BmsPagedUpdateInput: BmsPagedUpdateInput;
  BmsPagedWhere: BmsPagedWhere;
  BmsPagedsConnection: ResolverTypeWrapper<BmsPagedsConnection>;
  Bookmark: ResolverTypeWrapper<Bookmark>;
  BookmarkAggregateSelection: ResolverTypeWrapper<BookmarkAggregateSelection>;
  BookmarkConnectInput: BookmarkConnectInput;
  BookmarkConnectOrCreateInput: BookmarkConnectOrCreateInput;
  BookmarkConnectOrCreateWhere: BookmarkConnectOrCreateWhere;
  BookmarkConnectWhere: BookmarkConnectWhere;
  BookmarkCreateInput: BookmarkCreateInput;
  BookmarkDeleteInput: BookmarkDeleteInput;
  BookmarkDisconnectInput: BookmarkDisconnectInput;
  BookmarkDl: ResolverTypeWrapper<BookmarkDl>;
  BookmarkDlAggregateSelection: ResolverTypeWrapper<BookmarkDlAggregateSelection>;
  BookmarkDlCreateInput: BookmarkDlCreateInput;
  BookmarkDlEdge: ResolverTypeWrapper<BookmarkDlEdge>;
  BookmarkDlOptions: BookmarkDlOptions;
  BookmarkDlSort: BookmarkDlSort;
  BookmarkDlUpdateInput: BookmarkDlUpdateInput;
  BookmarkDlWhere: BookmarkDlWhere;
  BookmarkDlsConnection: ResolverTypeWrapper<BookmarkDlsConnection>;
  BookmarkEdge: ResolverTypeWrapper<BookmarkEdge>;
  BookmarkFilter: ResolverTypeWrapper<BookmarkFilter>;
  BookmarkFilterAggregateSelection: ResolverTypeWrapper<BookmarkFilterAggregateSelection>;
  BookmarkFilterConnectInput: BookmarkFilterConnectInput;
  BookmarkFilterConnectOrCreateInput: BookmarkFilterConnectOrCreateInput;
  BookmarkFilterConnectOrCreateWhere: BookmarkFilterConnectOrCreateWhere;
  BookmarkFilterConnectWhere: BookmarkFilterConnectWhere;
  BookmarkFilterCreateInput: BookmarkFilterCreateInput;
  BookmarkFilterDeleteInput: BookmarkFilterDeleteInput;
  BookmarkFilterDisconnectInput: BookmarkFilterDisconnectInput;
  BookmarkFilterEdge: ResolverTypeWrapper<BookmarkFilterEdge>;
  BookmarkFilterMemberAggregateInput: BookmarkFilterMemberAggregateInput;
  BookmarkFilterMemberConnectFieldInput: BookmarkFilterMemberConnectFieldInput;
  BookmarkFilterMemberConnectOrCreateFieldInput: BookmarkFilterMemberConnectOrCreateFieldInput;
  BookmarkFilterMemberConnectOrCreateFieldInputOnCreate: BookmarkFilterMemberConnectOrCreateFieldInputOnCreate;
  BookmarkFilterMemberConnection: ResolverTypeWrapper<BookmarkFilterMemberConnection>;
  BookmarkFilterMemberConnectionSort: BookmarkFilterMemberConnectionSort;
  BookmarkFilterMemberConnectionWhere: BookmarkFilterMemberConnectionWhere;
  BookmarkFilterMemberCreateFieldInput: BookmarkFilterMemberCreateFieldInput;
  BookmarkFilterMemberDeleteFieldInput: BookmarkFilterMemberDeleteFieldInput;
  BookmarkFilterMemberDisconnectFieldInput: BookmarkFilterMemberDisconnectFieldInput;
  BookmarkFilterMemberFieldInput: BookmarkFilterMemberFieldInput;
  BookmarkFilterMemberMemberAggregationSelection: ResolverTypeWrapper<BookmarkFilterMemberMemberAggregationSelection>;
  BookmarkFilterMemberMemberNodeAggregateSelection: ResolverTypeWrapper<BookmarkFilterMemberMemberNodeAggregateSelection>;
  BookmarkFilterMemberNodeAggregationWhereInput: BookmarkFilterMemberNodeAggregationWhereInput;
  BookmarkFilterMemberRelationship: ResolverTypeWrapper<BookmarkFilterMemberRelationship>;
  BookmarkFilterMemberUpdateConnectionInput: BookmarkFilterMemberUpdateConnectionInput;
  BookmarkFilterMemberUpdateFieldInput: BookmarkFilterMemberUpdateFieldInput;
  BookmarkFilterOnCreateInput: BookmarkFilterOnCreateInput;
  BookmarkFilterOptions: BookmarkFilterOptions;
  BookmarkFilterRelationInput: BookmarkFilterRelationInput;
  BookmarkFilterSort: BookmarkFilterSort;
  BookmarkFilterUniqueWhere: BookmarkFilterUniqueWhere;
  BookmarkFilterUpdateInput: BookmarkFilterUpdateInput;
  BookmarkFilterWhere: BookmarkFilterWhere;
  BookmarkFilter_In: BookmarkFilter_In;
  BookmarkFiltersConnection: ResolverTypeWrapper<BookmarkFiltersConnection>;
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
  BookmarkTagTagsAggregationSelection: ResolverTypeWrapper<BookmarkTagTagsAggregationSelection>;
  BookmarkTagTagsNodeAggregateSelection: ResolverTypeWrapper<BookmarkTagTagsNodeAggregateSelection>;
  BookmarkTagsAggregateInput: BookmarkTagsAggregateInput;
  BookmarkTagsConnectFieldInput: BookmarkTagsConnectFieldInput;
  BookmarkTagsConnectOrCreateFieldInput: BookmarkTagsConnectOrCreateFieldInput;
  BookmarkTagsConnectOrCreateFieldInputOnCreate: BookmarkTagsConnectOrCreateFieldInputOnCreate;
  BookmarkTagsConnection: ResolverTypeWrapper<BookmarkTagsConnection>;
  BookmarkTagsConnectionSort: BookmarkTagsConnectionSort;
  BookmarkTagsConnectionWhere: BookmarkTagsConnectionWhere;
  BookmarkTagsCreateFieldInput: BookmarkTagsCreateFieldInput;
  BookmarkTagsDeleteFieldInput: BookmarkTagsDeleteFieldInput;
  BookmarkTagsDisconnectFieldInput: BookmarkTagsDisconnectFieldInput;
  BookmarkTagsFieldInput: BookmarkTagsFieldInput;
  BookmarkTagsNodeAggregationWhereInput: BookmarkTagsNodeAggregationWhereInput;
  BookmarkTagsRelationship: ResolverTypeWrapper<BookmarkTagsRelationship>;
  BookmarkTagsUpdateConnectionInput: BookmarkTagsUpdateConnectionInput;
  BookmarkTagsUpdateFieldInput: BookmarkTagsUpdateFieldInput;
  BookmarkUniqueWhere: BookmarkUniqueWhere;
  BookmarkUpdateInput: BookmarkUpdateInput;
  BookmarkWhere: BookmarkWhere;
  BookmarksConnection: ResolverTypeWrapper<BookmarksConnection>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Child: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Child']>;
  ChildDl: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ChildDl']>;
  ChildWhere: ChildWhere;
  ChildsToMove: ChildsToMove;
  Collection: ResolverTypeWrapper<Omit<Collection, 'children'> & { children: Array<ResolversTypes['Child']> }>;
  CollectionAggregateSelection: ResolverTypeWrapper<CollectionAggregateSelection>;
  CollectionChildrenBookmarkConnectFieldInput: CollectionChildrenBookmarkConnectFieldInput;
  CollectionChildrenBookmarkConnectOrCreateFieldInput: CollectionChildrenBookmarkConnectOrCreateFieldInput;
  CollectionChildrenBookmarkConnectOrCreateFieldInputOnCreate: CollectionChildrenBookmarkConnectOrCreateFieldInputOnCreate;
  CollectionChildrenBookmarkConnectionWhere: CollectionChildrenBookmarkConnectionWhere;
  CollectionChildrenBookmarkCreateFieldInput: CollectionChildrenBookmarkCreateFieldInput;
  CollectionChildrenBookmarkDeleteFieldInput: CollectionChildrenBookmarkDeleteFieldInput;
  CollectionChildrenBookmarkDisconnectFieldInput: CollectionChildrenBookmarkDisconnectFieldInput;
  CollectionChildrenBookmarkFieldInput: CollectionChildrenBookmarkFieldInput;
  CollectionChildrenBookmarkUpdateConnectionInput: CollectionChildrenBookmarkUpdateConnectionInput;
  CollectionChildrenBookmarkUpdateFieldInput: CollectionChildrenBookmarkUpdateFieldInput;
  CollectionChildrenConnectInput: CollectionChildrenConnectInput;
  CollectionChildrenConnectOrCreateInput: CollectionChildrenConnectOrCreateInput;
  CollectionChildrenConnection: ResolverTypeWrapper<CollectionChildrenConnection>;
  CollectionChildrenConnectionWhere: CollectionChildrenConnectionWhere;
  CollectionChildrenCreateFieldInput: CollectionChildrenCreateFieldInput;
  CollectionChildrenCreateInput: CollectionChildrenCreateInput;
  CollectionChildrenDeleteInput: CollectionChildrenDeleteInput;
  CollectionChildrenDisconnectInput: CollectionChildrenDisconnectInput;
  CollectionChildrenFolderConnectFieldInput: CollectionChildrenFolderConnectFieldInput;
  CollectionChildrenFolderConnectOrCreateFieldInput: CollectionChildrenFolderConnectOrCreateFieldInput;
  CollectionChildrenFolderConnectOrCreateFieldInputOnCreate: CollectionChildrenFolderConnectOrCreateFieldInputOnCreate;
  CollectionChildrenFolderConnectionWhere: CollectionChildrenFolderConnectionWhere;
  CollectionChildrenFolderCreateFieldInput: CollectionChildrenFolderCreateFieldInput;
  CollectionChildrenFolderDeleteFieldInput: CollectionChildrenFolderDeleteFieldInput;
  CollectionChildrenFolderDisconnectFieldInput: CollectionChildrenFolderDisconnectFieldInput;
  CollectionChildrenFolderFieldInput: CollectionChildrenFolderFieldInput;
  CollectionChildrenFolderUpdateConnectionInput: CollectionChildrenFolderUpdateConnectionInput;
  CollectionChildrenFolderUpdateFieldInput: CollectionChildrenFolderUpdateFieldInput;
  CollectionChildrenRelationship: ResolverTypeWrapper<Omit<CollectionChildrenRelationship, 'node'> & { node: ResolversTypes['Child'] }>;
  CollectionChildrenUpdateInput: CollectionChildrenUpdateInput;
  CollectionConnectInput: CollectionConnectInput;
  CollectionConnectOrCreateInput: CollectionConnectOrCreateInput;
  CollectionConnectOrCreateWhere: CollectionConnectOrCreateWhere;
  CollectionConnectWhere: CollectionConnectWhere;
  CollectionCreateInput: CollectionCreateInput;
  CollectionDeleteInput: CollectionDeleteInput;
  CollectionDisconnectInput: CollectionDisconnectInput;
  CollectionDs: ResolverTypeWrapper<CollectionDs>;
  CollectionDsAggregateSelection: ResolverTypeWrapper<CollectionDsAggregateSelection>;
  CollectionDsConnection: ResolverTypeWrapper<CollectionDsConnection>;
  CollectionDsCreateInput: CollectionDsCreateInput;
  CollectionDsEdge: ResolverTypeWrapper<CollectionDsEdge>;
  CollectionDsList: ResolverTypeWrapper<CollectionDsList>;
  CollectionDsListAggregateSelection: ResolverTypeWrapper<CollectionDsListAggregateSelection>;
  CollectionDsListCreateInput: CollectionDsListCreateInput;
  CollectionDsListEdge: ResolverTypeWrapper<CollectionDsListEdge>;
  CollectionDsListOptions: CollectionDsListOptions;
  CollectionDsListUpdateInput: CollectionDsListUpdateInput;
  CollectionDsListWhere: CollectionDsListWhere;
  CollectionDsListsConnection: ResolverTypeWrapper<CollectionDsListsConnection>;
  CollectionDsOptions: CollectionDsOptions;
  CollectionDsSort: CollectionDsSort;
  CollectionDsUpdateInput: CollectionDsUpdateInput;
  CollectionDsWhere: CollectionDsWhere;
  CollectionEdge: ResolverTypeWrapper<CollectionEdge>;
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
  CollectionParentMetaConnectFieldInput: CollectionParentMetaConnectFieldInput;
  CollectionParentMetaConnectOrCreateFieldInput: CollectionParentMetaConnectOrCreateFieldInput;
  CollectionParentMetaConnectOrCreateFieldInputOnCreate: CollectionParentMetaConnectOrCreateFieldInputOnCreate;
  CollectionParentMetaConnection: ResolverTypeWrapper<CollectionParentMetaConnection>;
  CollectionParentMetaConnectionSort: CollectionParentMetaConnectionSort;
  CollectionParentMetaConnectionWhere: CollectionParentMetaConnectionWhere;
  CollectionParentMetaCreateFieldInput: CollectionParentMetaCreateFieldInput;
  CollectionParentMetaDeleteFieldInput: CollectionParentMetaDeleteFieldInput;
  CollectionParentMetaDisconnectFieldInput: CollectionParentMetaDisconnectFieldInput;
  CollectionParentMetaFieldInput: CollectionParentMetaFieldInput;
  CollectionParentMetaNodeAggregationWhereInput: CollectionParentMetaNodeAggregationWhereInput;
  CollectionParentMetaParentMetaAggregationSelection: ResolverTypeWrapper<CollectionParentMetaParentMetaAggregationSelection>;
  CollectionParentMetaParentMetaNodeAggregateSelection: ResolverTypeWrapper<CollectionParentMetaParentMetaNodeAggregateSelection>;
  CollectionParentMetaRelationship: ResolverTypeWrapper<CollectionParentMetaRelationship>;
  CollectionParentMetaUpdateConnectionInput: CollectionParentMetaUpdateConnectionInput;
  CollectionParentMetaUpdateFieldInput: CollectionParentMetaUpdateFieldInput;
  CollectionRelationInput: CollectionRelationInput;
  CollectionSort: CollectionSort;
  CollectionUniqueWhere: CollectionUniqueWhere;
  CollectionUpdateInput: CollectionUpdateInput;
  CollectionWhere: CollectionWhere;
  CollectionsConnection: ResolverTypeWrapper<CollectionsConnection>;
  CreateBmsContainersMutationResponse: ResolverTypeWrapper<CreateBmsContainersMutationResponse>;
  CreateBmsPagedsMutationResponse: ResolverTypeWrapper<CreateBmsPagedsMutationResponse>;
  CreateBookmarkDl: CreateBookmarkDl;
  CreateBookmarkDlsMutationResponse: ResolverTypeWrapper<CreateBookmarkDlsMutationResponse>;
  CreateBookmarkFiltersMutationResponse: ResolverTypeWrapper<CreateBookmarkFiltersMutationResponse>;
  CreateBookmarksMutationResponse: ResolverTypeWrapper<CreateBookmarksMutationResponse>;
  CreateCollectionDsListsMutationResponse: ResolverTypeWrapper<CreateCollectionDsListsMutationResponse>;
  CreateCollectionDsMutationResponse: ResolverTypeWrapper<CreateCollectionDsMutationResponse>;
  CreateCollectionsMutationResponse: ResolverTypeWrapper<CreateCollectionsMutationResponse>;
  CreateFolderDlsMutationResponse: ResolverTypeWrapper<CreateFolderDlsMutationResponse>;
  CreateFoldersMutationResponse: ResolverTypeWrapper<CreateFoldersMutationResponse>;
  CreateInfo: ResolverTypeWrapper<CreateInfo>;
  CreateMemberMetasMutationResponse: ResolverTypeWrapper<CreateMemberMetasMutationResponse>;
  CreateMembersMutationResponse: ResolverTypeWrapper<CreateMembersMutationResponse>;
  CreateParentMetasMutationResponse: ResolverTypeWrapper<CreateParentMetasMutationResponse>;
  CreateParentsChildrenMutationResponse: ResolverTypeWrapper<CreateParentsChildrenMutationResponse>;
  CreateTagDsMutationResponse: ResolverTypeWrapper<CreateTagDsMutationResponse>;
  CreateTagsMutationResponse: ResolverTypeWrapper<CreateTagsMutationResponse>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeAggregateSelectionNullable: ResolverTypeWrapper<DateTimeAggregateSelectionNullable>;
  DeleteInfo: ResolverTypeWrapper<DeleteInfo>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Folder: ResolverTypeWrapper<Omit<Folder, 'children'> & { children: Array<ResolversTypes['Child']> }>;
  FolderAggregateSelection: ResolverTypeWrapper<FolderAggregateSelection>;
  FolderChildrenBookmarkConnectFieldInput: FolderChildrenBookmarkConnectFieldInput;
  FolderChildrenBookmarkConnectOrCreateFieldInput: FolderChildrenBookmarkConnectOrCreateFieldInput;
  FolderChildrenBookmarkConnectOrCreateFieldInputOnCreate: FolderChildrenBookmarkConnectOrCreateFieldInputOnCreate;
  FolderChildrenBookmarkConnectionWhere: FolderChildrenBookmarkConnectionWhere;
  FolderChildrenBookmarkCreateFieldInput: FolderChildrenBookmarkCreateFieldInput;
  FolderChildrenBookmarkDeleteFieldInput: FolderChildrenBookmarkDeleteFieldInput;
  FolderChildrenBookmarkDisconnectFieldInput: FolderChildrenBookmarkDisconnectFieldInput;
  FolderChildrenBookmarkFieldInput: FolderChildrenBookmarkFieldInput;
  FolderChildrenBookmarkUpdateConnectionInput: FolderChildrenBookmarkUpdateConnectionInput;
  FolderChildrenBookmarkUpdateFieldInput: FolderChildrenBookmarkUpdateFieldInput;
  FolderChildrenConnectInput: FolderChildrenConnectInput;
  FolderChildrenConnectOrCreateInput: FolderChildrenConnectOrCreateInput;
  FolderChildrenConnection: ResolverTypeWrapper<FolderChildrenConnection>;
  FolderChildrenConnectionWhere: FolderChildrenConnectionWhere;
  FolderChildrenCreateFieldInput: FolderChildrenCreateFieldInput;
  FolderChildrenCreateInput: FolderChildrenCreateInput;
  FolderChildrenDeleteInput: FolderChildrenDeleteInput;
  FolderChildrenDisconnectInput: FolderChildrenDisconnectInput;
  FolderChildrenFolderConnectFieldInput: FolderChildrenFolderConnectFieldInput;
  FolderChildrenFolderConnectOrCreateFieldInput: FolderChildrenFolderConnectOrCreateFieldInput;
  FolderChildrenFolderConnectOrCreateFieldInputOnCreate: FolderChildrenFolderConnectOrCreateFieldInputOnCreate;
  FolderChildrenFolderConnectionWhere: FolderChildrenFolderConnectionWhere;
  FolderChildrenFolderCreateFieldInput: FolderChildrenFolderCreateFieldInput;
  FolderChildrenFolderDeleteFieldInput: FolderChildrenFolderDeleteFieldInput;
  FolderChildrenFolderDisconnectFieldInput: FolderChildrenFolderDisconnectFieldInput;
  FolderChildrenFolderFieldInput: FolderChildrenFolderFieldInput;
  FolderChildrenFolderUpdateConnectionInput: FolderChildrenFolderUpdateConnectionInput;
  FolderChildrenFolderUpdateFieldInput: FolderChildrenFolderUpdateFieldInput;
  FolderChildrenRelationship: ResolverTypeWrapper<Omit<FolderChildrenRelationship, 'node'> & { node: ResolversTypes['Child'] }>;
  FolderChildrenUpdateInput: FolderChildrenUpdateInput;
  FolderConnectInput: FolderConnectInput;
  FolderConnectOrCreateInput: FolderConnectOrCreateInput;
  FolderConnectOrCreateWhere: FolderConnectOrCreateWhere;
  FolderConnectWhere: FolderConnectWhere;
  FolderCreateInput: FolderCreateInput;
  FolderDeleteInput: FolderDeleteInput;
  FolderDisconnectInput: FolderDisconnectInput;
  FolderDl: ResolverTypeWrapper<Omit<FolderDl, 'children'> & { children: Array<ResolversTypes['ChildDl']> }>;
  FolderDlAggregateSelection: ResolverTypeWrapper<FolderDlAggregateSelection>;
  FolderDlCreateInput: FolderDlCreateInput;
  FolderDlEdge: ResolverTypeWrapper<FolderDlEdge>;
  FolderDlOptions: FolderDlOptions;
  FolderDlSort: FolderDlSort;
  FolderDlUpdateInput: FolderDlUpdateInput;
  FolderDlWhere: FolderDlWhere;
  FolderDlsConnection: ResolverTypeWrapper<FolderDlsConnection>;
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
  FolderParentMetaConnectFieldInput: FolderParentMetaConnectFieldInput;
  FolderParentMetaConnectOrCreateFieldInput: FolderParentMetaConnectOrCreateFieldInput;
  FolderParentMetaConnectOrCreateFieldInputOnCreate: FolderParentMetaConnectOrCreateFieldInputOnCreate;
  FolderParentMetaConnection: ResolverTypeWrapper<FolderParentMetaConnection>;
  FolderParentMetaConnectionSort: FolderParentMetaConnectionSort;
  FolderParentMetaConnectionWhere: FolderParentMetaConnectionWhere;
  FolderParentMetaCreateFieldInput: FolderParentMetaCreateFieldInput;
  FolderParentMetaDeleteFieldInput: FolderParentMetaDeleteFieldInput;
  FolderParentMetaDisconnectFieldInput: FolderParentMetaDisconnectFieldInput;
  FolderParentMetaFieldInput: FolderParentMetaFieldInput;
  FolderParentMetaNodeAggregationWhereInput: FolderParentMetaNodeAggregationWhereInput;
  FolderParentMetaParentMetaAggregationSelection: ResolverTypeWrapper<FolderParentMetaParentMetaAggregationSelection>;
  FolderParentMetaParentMetaNodeAggregateSelection: ResolverTypeWrapper<FolderParentMetaParentMetaNodeAggregateSelection>;
  FolderParentMetaRelationship: ResolverTypeWrapper<FolderParentMetaRelationship>;
  FolderParentMetaUpdateConnectionInput: FolderParentMetaUpdateConnectionInput;
  FolderParentMetaUpdateFieldInput: FolderParentMetaUpdateFieldInput;
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
  MemberBmFiltersAggregateInput: MemberBmFiltersAggregateInput;
  MemberBmFiltersConnectFieldInput: MemberBmFiltersConnectFieldInput;
  MemberBmFiltersConnectOrCreateFieldInput: MemberBmFiltersConnectOrCreateFieldInput;
  MemberBmFiltersConnectOrCreateFieldInputOnCreate: MemberBmFiltersConnectOrCreateFieldInputOnCreate;
  MemberBmFiltersConnection: ResolverTypeWrapper<MemberBmFiltersConnection>;
  MemberBmFiltersConnectionSort: MemberBmFiltersConnectionSort;
  MemberBmFiltersConnectionWhere: MemberBmFiltersConnectionWhere;
  MemberBmFiltersCreateFieldInput: MemberBmFiltersCreateFieldInput;
  MemberBmFiltersDeleteFieldInput: MemberBmFiltersDeleteFieldInput;
  MemberBmFiltersDisconnectFieldInput: MemberBmFiltersDisconnectFieldInput;
  MemberBmFiltersFieldInput: MemberBmFiltersFieldInput;
  MemberBmFiltersNodeAggregationWhereInput: MemberBmFiltersNodeAggregationWhereInput;
  MemberBmFiltersRelationship: ResolverTypeWrapper<MemberBmFiltersRelationship>;
  MemberBmFiltersUpdateConnectionInput: MemberBmFiltersUpdateConnectionInput;
  MemberBmFiltersUpdateFieldInput: MemberBmFiltersUpdateFieldInput;
  MemberBmsContainerAggregateInput: MemberBmsContainerAggregateInput;
  MemberBmsContainerBmsContainerAggregationSelection: ResolverTypeWrapper<MemberBmsContainerBmsContainerAggregationSelection>;
  MemberBmsContainerBmsContainerNodeAggregateSelection: ResolverTypeWrapper<MemberBmsContainerBmsContainerNodeAggregateSelection>;
  MemberBmsContainerConnectFieldInput: MemberBmsContainerConnectFieldInput;
  MemberBmsContainerConnectOrCreateFieldInput: MemberBmsContainerConnectOrCreateFieldInput;
  MemberBmsContainerConnectOrCreateFieldInputOnCreate: MemberBmsContainerConnectOrCreateFieldInputOnCreate;
  MemberBmsContainerConnection: ResolverTypeWrapper<MemberBmsContainerConnection>;
  MemberBmsContainerConnectionSort: MemberBmsContainerConnectionSort;
  MemberBmsContainerConnectionWhere: MemberBmsContainerConnectionWhere;
  MemberBmsContainerCreateFieldInput: MemberBmsContainerCreateFieldInput;
  MemberBmsContainerDeleteFieldInput: MemberBmsContainerDeleteFieldInput;
  MemberBmsContainerDisconnectFieldInput: MemberBmsContainerDisconnectFieldInput;
  MemberBmsContainerFieldInput: MemberBmsContainerFieldInput;
  MemberBmsContainerNodeAggregationWhereInput: MemberBmsContainerNodeAggregationWhereInput;
  MemberBmsContainerRelationship: ResolverTypeWrapper<MemberBmsContainerRelationship>;
  MemberBmsContainerUpdateConnectionInput: MemberBmsContainerUpdateConnectionInput;
  MemberBmsContainerUpdateFieldInput: MemberBmsContainerUpdateFieldInput;
  MemberBookmarkFilterBmFiltersAggregationSelection: ResolverTypeWrapper<MemberBookmarkFilterBmFiltersAggregationSelection>;
  MemberBookmarkFilterBmFiltersNodeAggregateSelection: ResolverTypeWrapper<MemberBookmarkFilterBmFiltersNodeAggregateSelection>;
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
  NodesToMove: NodesToMove;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Parent: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Parent']>;
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
  ParentSort: ParentSort;
  ParentUpdateInput: ParentUpdateInput;
  ParentWhere: ParentWhere;
  ParentsChildren: ResolverTypeWrapper<Omit<ParentsChildren, 'children'> & { children: Array<ResolversTypes['ChildDl']> }>;
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
  SelectedChilds: SelectedChilds;
  SelectedNodes: SelectedNodes;
  SortDirection: SortDirection;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringAggregateSelectionNonNullable: ResolverTypeWrapper<StringAggregateSelectionNonNullable>;
  StringAggregateSelectionNullable: ResolverTypeWrapper<StringAggregateSelectionNullable>;
  Tag: ResolverTypeWrapper<Tag>;
  TagAggregateSelection: ResolverTypeWrapper<TagAggregateSelection>;
  TagBookmarkBookmarksAggregationSelection: ResolverTypeWrapper<TagBookmarkBookmarksAggregationSelection>;
  TagBookmarkBookmarksNodeAggregateSelection: ResolverTypeWrapper<TagBookmarkBookmarksNodeAggregateSelection>;
  TagBookmarksAggregateInput: TagBookmarksAggregateInput;
  TagBookmarksConnectFieldInput: TagBookmarksConnectFieldInput;
  TagBookmarksConnectOrCreateFieldInput: TagBookmarksConnectOrCreateFieldInput;
  TagBookmarksConnectOrCreateFieldInputOnCreate: TagBookmarksConnectOrCreateFieldInputOnCreate;
  TagBookmarksConnection: ResolverTypeWrapper<TagBookmarksConnection>;
  TagBookmarksConnectionSort: TagBookmarksConnectionSort;
  TagBookmarksConnectionWhere: TagBookmarksConnectionWhere;
  TagBookmarksCreateFieldInput: TagBookmarksCreateFieldInput;
  TagBookmarksDeleteFieldInput: TagBookmarksDeleteFieldInput;
  TagBookmarksDisconnectFieldInput: TagBookmarksDisconnectFieldInput;
  TagBookmarksFieldInput: TagBookmarksFieldInput;
  TagBookmarksNodeAggregationWhereInput: TagBookmarksNodeAggregationWhereInput;
  TagBookmarksRelationship: ResolverTypeWrapper<TagBookmarksRelationship>;
  TagBookmarksUpdateConnectionInput: TagBookmarksUpdateConnectionInput;
  TagBookmarksUpdateFieldInput: TagBookmarksUpdateFieldInput;
  TagConnectInput: TagConnectInput;
  TagConnectOrCreateInput: TagConnectOrCreateInput;
  TagConnectOrCreateWhere: TagConnectOrCreateWhere;
  TagConnectWhere: TagConnectWhere;
  TagCreateInput: TagCreateInput;
  TagDeleteInput: TagDeleteInput;
  TagDisconnectInput: TagDisconnectInput;
  TagDs: ResolverTypeWrapper<TagDs>;
  TagDsAggregateSelection: ResolverTypeWrapper<TagDsAggregateSelection>;
  TagDsConnection: ResolverTypeWrapper<TagDsConnection>;
  TagDsCreateInput: TagDsCreateInput;
  TagDsEdge: ResolverTypeWrapper<TagDsEdge>;
  TagDsOptions: TagDsOptions;
  TagDsSort: TagDsSort;
  TagDsUpdateInput: TagDsUpdateInput;
  TagDsWhere: TagDsWhere;
  TagEdge: ResolverTypeWrapper<TagEdge>;
  TagOnCreateInput: TagOnCreateInput;
  TagOptions: TagOptions;
  TagRelationInput: TagRelationInput;
  TagSort: TagSort;
  TagUniqueWhere: TagUniqueWhere;
  TagUpdateInput: TagUpdateInput;
  TagWhere: TagWhere;
  TagsConnection: ResolverTypeWrapper<TagsConnection>;
  UpdateBmsContainersMutationResponse: ResolverTypeWrapper<UpdateBmsContainersMutationResponse>;
  UpdateBmsPagedsMutationResponse: ResolverTypeWrapper<UpdateBmsPagedsMutationResponse>;
  UpdateBookmarkDlsMutationResponse: ResolverTypeWrapper<UpdateBookmarkDlsMutationResponse>;
  UpdateBookmarkFiltersMutationResponse: ResolverTypeWrapper<UpdateBookmarkFiltersMutationResponse>;
  UpdateBookmarksMutationResponse: ResolverTypeWrapper<UpdateBookmarksMutationResponse>;
  UpdateCollectionDsListsMutationResponse: ResolverTypeWrapper<UpdateCollectionDsListsMutationResponse>;
  UpdateCollectionDsMutationResponse: ResolverTypeWrapper<UpdateCollectionDsMutationResponse>;
  UpdateCollectionsMutationResponse: ResolverTypeWrapper<UpdateCollectionsMutationResponse>;
  UpdateFolderDlsMutationResponse: ResolverTypeWrapper<UpdateFolderDlsMutationResponse>;
  UpdateFoldersMutationResponse: ResolverTypeWrapper<UpdateFoldersMutationResponse>;
  UpdateInfo: ResolverTypeWrapper<UpdateInfo>;
  UpdateMemberMetasMutationResponse: ResolverTypeWrapper<UpdateMemberMetasMutationResponse>;
  UpdateMembersMutationResponse: ResolverTypeWrapper<UpdateMembersMutationResponse>;
  UpdateParentMetasMutationResponse: ResolverTypeWrapper<UpdateParentMetasMutationResponse>;
  UpdateParentsChildrenMutationResponse: ResolverTypeWrapper<UpdateParentsChildrenMutationResponse>;
  UpdateTagDsMutationResponse: ResolverTypeWrapper<UpdateTagDsMutationResponse>;
  UpdateTagsMutationResponse: ResolverTypeWrapper<UpdateTagsMutationResponse>;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BmsContainer: BmsContainer;
  BmsContainerAggregateSelection: BmsContainerAggregateSelection;
  BmsContainerBookmarkBookmarksAggregationSelection: BmsContainerBookmarkBookmarksAggregationSelection;
  BmsContainerBookmarkBookmarksNodeAggregateSelection: BmsContainerBookmarkBookmarksNodeAggregateSelection;
  BmsContainerBookmarksAggregateInput: BmsContainerBookmarksAggregateInput;
  BmsContainerBookmarksConnectFieldInput: BmsContainerBookmarksConnectFieldInput;
  BmsContainerBookmarksConnectOrCreateFieldInput: BmsContainerBookmarksConnectOrCreateFieldInput;
  BmsContainerBookmarksConnectOrCreateFieldInputOnCreate: BmsContainerBookmarksConnectOrCreateFieldInputOnCreate;
  BmsContainerBookmarksConnection: BmsContainerBookmarksConnection;
  BmsContainerBookmarksConnectionSort: BmsContainerBookmarksConnectionSort;
  BmsContainerBookmarksConnectionWhere: BmsContainerBookmarksConnectionWhere;
  BmsContainerBookmarksCreateFieldInput: BmsContainerBookmarksCreateFieldInput;
  BmsContainerBookmarksDeleteFieldInput: BmsContainerBookmarksDeleteFieldInput;
  BmsContainerBookmarksDisconnectFieldInput: BmsContainerBookmarksDisconnectFieldInput;
  BmsContainerBookmarksFieldInput: BmsContainerBookmarksFieldInput;
  BmsContainerBookmarksNodeAggregationWhereInput: BmsContainerBookmarksNodeAggregationWhereInput;
  BmsContainerBookmarksRelationship: BmsContainerBookmarksRelationship;
  BmsContainerBookmarksUpdateConnectionInput: BmsContainerBookmarksUpdateConnectionInput;
  BmsContainerBookmarksUpdateFieldInput: BmsContainerBookmarksUpdateFieldInput;
  BmsContainerConnectInput: BmsContainerConnectInput;
  BmsContainerConnectOrCreateInput: BmsContainerConnectOrCreateInput;
  BmsContainerConnectOrCreateWhere: BmsContainerConnectOrCreateWhere;
  BmsContainerConnectWhere: BmsContainerConnectWhere;
  BmsContainerCreateInput: BmsContainerCreateInput;
  BmsContainerDeleteInput: BmsContainerDeleteInput;
  BmsContainerDisconnectInput: BmsContainerDisconnectInput;
  BmsContainerEdge: BmsContainerEdge;
  BmsContainerMemberAggregateInput: BmsContainerMemberAggregateInput;
  BmsContainerMemberConnectFieldInput: BmsContainerMemberConnectFieldInput;
  BmsContainerMemberConnectOrCreateFieldInput: BmsContainerMemberConnectOrCreateFieldInput;
  BmsContainerMemberConnectOrCreateFieldInputOnCreate: BmsContainerMemberConnectOrCreateFieldInputOnCreate;
  BmsContainerMemberConnection: BmsContainerMemberConnection;
  BmsContainerMemberConnectionSort: BmsContainerMemberConnectionSort;
  BmsContainerMemberConnectionWhere: BmsContainerMemberConnectionWhere;
  BmsContainerMemberCreateFieldInput: BmsContainerMemberCreateFieldInput;
  BmsContainerMemberDeleteFieldInput: BmsContainerMemberDeleteFieldInput;
  BmsContainerMemberDisconnectFieldInput: BmsContainerMemberDisconnectFieldInput;
  BmsContainerMemberFieldInput: BmsContainerMemberFieldInput;
  BmsContainerMemberMemberAggregationSelection: BmsContainerMemberMemberAggregationSelection;
  BmsContainerMemberMemberNodeAggregateSelection: BmsContainerMemberMemberNodeAggregateSelection;
  BmsContainerMemberNodeAggregationWhereInput: BmsContainerMemberNodeAggregationWhereInput;
  BmsContainerMemberRelationship: BmsContainerMemberRelationship;
  BmsContainerMemberUpdateConnectionInput: BmsContainerMemberUpdateConnectionInput;
  BmsContainerMemberUpdateFieldInput: BmsContainerMemberUpdateFieldInput;
  BmsContainerOnCreateInput: BmsContainerOnCreateInput;
  BmsContainerOptions: BmsContainerOptions;
  BmsContainerRelationInput: BmsContainerRelationInput;
  BmsContainerSort: BmsContainerSort;
  BmsContainerUniqueWhere: BmsContainerUniqueWhere;
  BmsContainerUpdateInput: BmsContainerUpdateInput;
  BmsContainerWhere: BmsContainerWhere;
  BmsContainersConnection: BmsContainersConnection;
  BmsPaged: BmsPaged;
  BmsPagedAggregateSelection: BmsPagedAggregateSelection;
  BmsPagedCreateInput: BmsPagedCreateInput;
  BmsPagedEdge: BmsPagedEdge;
  BmsPagedOptions: BmsPagedOptions;
  BmsPagedSort: BmsPagedSort;
  BmsPagedUpdateInput: BmsPagedUpdateInput;
  BmsPagedWhere: BmsPagedWhere;
  BmsPagedsConnection: BmsPagedsConnection;
  Bookmark: Bookmark;
  BookmarkAggregateSelection: BookmarkAggregateSelection;
  BookmarkConnectInput: BookmarkConnectInput;
  BookmarkConnectOrCreateInput: BookmarkConnectOrCreateInput;
  BookmarkConnectOrCreateWhere: BookmarkConnectOrCreateWhere;
  BookmarkConnectWhere: BookmarkConnectWhere;
  BookmarkCreateInput: BookmarkCreateInput;
  BookmarkDeleteInput: BookmarkDeleteInput;
  BookmarkDisconnectInput: BookmarkDisconnectInput;
  BookmarkDl: BookmarkDl;
  BookmarkDlAggregateSelection: BookmarkDlAggregateSelection;
  BookmarkDlCreateInput: BookmarkDlCreateInput;
  BookmarkDlEdge: BookmarkDlEdge;
  BookmarkDlOptions: BookmarkDlOptions;
  BookmarkDlSort: BookmarkDlSort;
  BookmarkDlUpdateInput: BookmarkDlUpdateInput;
  BookmarkDlWhere: BookmarkDlWhere;
  BookmarkDlsConnection: BookmarkDlsConnection;
  BookmarkEdge: BookmarkEdge;
  BookmarkFilter: BookmarkFilter;
  BookmarkFilterAggregateSelection: BookmarkFilterAggregateSelection;
  BookmarkFilterConnectInput: BookmarkFilterConnectInput;
  BookmarkFilterConnectOrCreateInput: BookmarkFilterConnectOrCreateInput;
  BookmarkFilterConnectOrCreateWhere: BookmarkFilterConnectOrCreateWhere;
  BookmarkFilterConnectWhere: BookmarkFilterConnectWhere;
  BookmarkFilterCreateInput: BookmarkFilterCreateInput;
  BookmarkFilterDeleteInput: BookmarkFilterDeleteInput;
  BookmarkFilterDisconnectInput: BookmarkFilterDisconnectInput;
  BookmarkFilterEdge: BookmarkFilterEdge;
  BookmarkFilterMemberAggregateInput: BookmarkFilterMemberAggregateInput;
  BookmarkFilterMemberConnectFieldInput: BookmarkFilterMemberConnectFieldInput;
  BookmarkFilterMemberConnectOrCreateFieldInput: BookmarkFilterMemberConnectOrCreateFieldInput;
  BookmarkFilterMemberConnectOrCreateFieldInputOnCreate: BookmarkFilterMemberConnectOrCreateFieldInputOnCreate;
  BookmarkFilterMemberConnection: BookmarkFilterMemberConnection;
  BookmarkFilterMemberConnectionSort: BookmarkFilterMemberConnectionSort;
  BookmarkFilterMemberConnectionWhere: BookmarkFilterMemberConnectionWhere;
  BookmarkFilterMemberCreateFieldInput: BookmarkFilterMemberCreateFieldInput;
  BookmarkFilterMemberDeleteFieldInput: BookmarkFilterMemberDeleteFieldInput;
  BookmarkFilterMemberDisconnectFieldInput: BookmarkFilterMemberDisconnectFieldInput;
  BookmarkFilterMemberFieldInput: BookmarkFilterMemberFieldInput;
  BookmarkFilterMemberMemberAggregationSelection: BookmarkFilterMemberMemberAggregationSelection;
  BookmarkFilterMemberMemberNodeAggregateSelection: BookmarkFilterMemberMemberNodeAggregateSelection;
  BookmarkFilterMemberNodeAggregationWhereInput: BookmarkFilterMemberNodeAggregationWhereInput;
  BookmarkFilterMemberRelationship: BookmarkFilterMemberRelationship;
  BookmarkFilterMemberUpdateConnectionInput: BookmarkFilterMemberUpdateConnectionInput;
  BookmarkFilterMemberUpdateFieldInput: BookmarkFilterMemberUpdateFieldInput;
  BookmarkFilterOnCreateInput: BookmarkFilterOnCreateInput;
  BookmarkFilterOptions: BookmarkFilterOptions;
  BookmarkFilterRelationInput: BookmarkFilterRelationInput;
  BookmarkFilterSort: BookmarkFilterSort;
  BookmarkFilterUniqueWhere: BookmarkFilterUniqueWhere;
  BookmarkFilterUpdateInput: BookmarkFilterUpdateInput;
  BookmarkFilterWhere: BookmarkFilterWhere;
  BookmarkFilter_In: BookmarkFilter_In;
  BookmarkFiltersConnection: BookmarkFiltersConnection;
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
  BookmarkTagTagsAggregationSelection: BookmarkTagTagsAggregationSelection;
  BookmarkTagTagsNodeAggregateSelection: BookmarkTagTagsNodeAggregateSelection;
  BookmarkTagsAggregateInput: BookmarkTagsAggregateInput;
  BookmarkTagsConnectFieldInput: BookmarkTagsConnectFieldInput;
  BookmarkTagsConnectOrCreateFieldInput: BookmarkTagsConnectOrCreateFieldInput;
  BookmarkTagsConnectOrCreateFieldInputOnCreate: BookmarkTagsConnectOrCreateFieldInputOnCreate;
  BookmarkTagsConnection: BookmarkTagsConnection;
  BookmarkTagsConnectionSort: BookmarkTagsConnectionSort;
  BookmarkTagsConnectionWhere: BookmarkTagsConnectionWhere;
  BookmarkTagsCreateFieldInput: BookmarkTagsCreateFieldInput;
  BookmarkTagsDeleteFieldInput: BookmarkTagsDeleteFieldInput;
  BookmarkTagsDisconnectFieldInput: BookmarkTagsDisconnectFieldInput;
  BookmarkTagsFieldInput: BookmarkTagsFieldInput;
  BookmarkTagsNodeAggregationWhereInput: BookmarkTagsNodeAggregationWhereInput;
  BookmarkTagsRelationship: BookmarkTagsRelationship;
  BookmarkTagsUpdateConnectionInput: BookmarkTagsUpdateConnectionInput;
  BookmarkTagsUpdateFieldInput: BookmarkTagsUpdateFieldInput;
  BookmarkUniqueWhere: BookmarkUniqueWhere;
  BookmarkUpdateInput: BookmarkUpdateInput;
  BookmarkWhere: BookmarkWhere;
  BookmarksConnection: BookmarksConnection;
  Boolean: Scalars['Boolean']['output'];
  Child: ResolversUnionTypes<ResolversParentTypes>['Child'];
  ChildDl: ResolversUnionTypes<ResolversParentTypes>['ChildDl'];
  ChildWhere: ChildWhere;
  ChildsToMove: ChildsToMove;
  Collection: Omit<Collection, 'children'> & { children: Array<ResolversParentTypes['Child']> };
  CollectionAggregateSelection: CollectionAggregateSelection;
  CollectionChildrenBookmarkConnectFieldInput: CollectionChildrenBookmarkConnectFieldInput;
  CollectionChildrenBookmarkConnectOrCreateFieldInput: CollectionChildrenBookmarkConnectOrCreateFieldInput;
  CollectionChildrenBookmarkConnectOrCreateFieldInputOnCreate: CollectionChildrenBookmarkConnectOrCreateFieldInputOnCreate;
  CollectionChildrenBookmarkConnectionWhere: CollectionChildrenBookmarkConnectionWhere;
  CollectionChildrenBookmarkCreateFieldInput: CollectionChildrenBookmarkCreateFieldInput;
  CollectionChildrenBookmarkDeleteFieldInput: CollectionChildrenBookmarkDeleteFieldInput;
  CollectionChildrenBookmarkDisconnectFieldInput: CollectionChildrenBookmarkDisconnectFieldInput;
  CollectionChildrenBookmarkFieldInput: CollectionChildrenBookmarkFieldInput;
  CollectionChildrenBookmarkUpdateConnectionInput: CollectionChildrenBookmarkUpdateConnectionInput;
  CollectionChildrenBookmarkUpdateFieldInput: CollectionChildrenBookmarkUpdateFieldInput;
  CollectionChildrenConnectInput: CollectionChildrenConnectInput;
  CollectionChildrenConnectOrCreateInput: CollectionChildrenConnectOrCreateInput;
  CollectionChildrenConnection: CollectionChildrenConnection;
  CollectionChildrenConnectionWhere: CollectionChildrenConnectionWhere;
  CollectionChildrenCreateFieldInput: CollectionChildrenCreateFieldInput;
  CollectionChildrenCreateInput: CollectionChildrenCreateInput;
  CollectionChildrenDeleteInput: CollectionChildrenDeleteInput;
  CollectionChildrenDisconnectInput: CollectionChildrenDisconnectInput;
  CollectionChildrenFolderConnectFieldInput: CollectionChildrenFolderConnectFieldInput;
  CollectionChildrenFolderConnectOrCreateFieldInput: CollectionChildrenFolderConnectOrCreateFieldInput;
  CollectionChildrenFolderConnectOrCreateFieldInputOnCreate: CollectionChildrenFolderConnectOrCreateFieldInputOnCreate;
  CollectionChildrenFolderConnectionWhere: CollectionChildrenFolderConnectionWhere;
  CollectionChildrenFolderCreateFieldInput: CollectionChildrenFolderCreateFieldInput;
  CollectionChildrenFolderDeleteFieldInput: CollectionChildrenFolderDeleteFieldInput;
  CollectionChildrenFolderDisconnectFieldInput: CollectionChildrenFolderDisconnectFieldInput;
  CollectionChildrenFolderFieldInput: CollectionChildrenFolderFieldInput;
  CollectionChildrenFolderUpdateConnectionInput: CollectionChildrenFolderUpdateConnectionInput;
  CollectionChildrenFolderUpdateFieldInput: CollectionChildrenFolderUpdateFieldInput;
  CollectionChildrenRelationship: Omit<CollectionChildrenRelationship, 'node'> & { node: ResolversParentTypes['Child'] };
  CollectionChildrenUpdateInput: CollectionChildrenUpdateInput;
  CollectionConnectInput: CollectionConnectInput;
  CollectionConnectOrCreateInput: CollectionConnectOrCreateInput;
  CollectionConnectOrCreateWhere: CollectionConnectOrCreateWhere;
  CollectionConnectWhere: CollectionConnectWhere;
  CollectionCreateInput: CollectionCreateInput;
  CollectionDeleteInput: CollectionDeleteInput;
  CollectionDisconnectInput: CollectionDisconnectInput;
  CollectionDs: CollectionDs;
  CollectionDsAggregateSelection: CollectionDsAggregateSelection;
  CollectionDsConnection: CollectionDsConnection;
  CollectionDsCreateInput: CollectionDsCreateInput;
  CollectionDsEdge: CollectionDsEdge;
  CollectionDsList: CollectionDsList;
  CollectionDsListAggregateSelection: CollectionDsListAggregateSelection;
  CollectionDsListCreateInput: CollectionDsListCreateInput;
  CollectionDsListEdge: CollectionDsListEdge;
  CollectionDsListOptions: CollectionDsListOptions;
  CollectionDsListUpdateInput: CollectionDsListUpdateInput;
  CollectionDsListWhere: CollectionDsListWhere;
  CollectionDsListsConnection: CollectionDsListsConnection;
  CollectionDsOptions: CollectionDsOptions;
  CollectionDsSort: CollectionDsSort;
  CollectionDsUpdateInput: CollectionDsUpdateInput;
  CollectionDsWhere: CollectionDsWhere;
  CollectionEdge: CollectionEdge;
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
  CollectionParentMetaConnectFieldInput: CollectionParentMetaConnectFieldInput;
  CollectionParentMetaConnectOrCreateFieldInput: CollectionParentMetaConnectOrCreateFieldInput;
  CollectionParentMetaConnectOrCreateFieldInputOnCreate: CollectionParentMetaConnectOrCreateFieldInputOnCreate;
  CollectionParentMetaConnection: CollectionParentMetaConnection;
  CollectionParentMetaConnectionSort: CollectionParentMetaConnectionSort;
  CollectionParentMetaConnectionWhere: CollectionParentMetaConnectionWhere;
  CollectionParentMetaCreateFieldInput: CollectionParentMetaCreateFieldInput;
  CollectionParentMetaDeleteFieldInput: CollectionParentMetaDeleteFieldInput;
  CollectionParentMetaDisconnectFieldInput: CollectionParentMetaDisconnectFieldInput;
  CollectionParentMetaFieldInput: CollectionParentMetaFieldInput;
  CollectionParentMetaNodeAggregationWhereInput: CollectionParentMetaNodeAggregationWhereInput;
  CollectionParentMetaParentMetaAggregationSelection: CollectionParentMetaParentMetaAggregationSelection;
  CollectionParentMetaParentMetaNodeAggregateSelection: CollectionParentMetaParentMetaNodeAggregateSelection;
  CollectionParentMetaRelationship: CollectionParentMetaRelationship;
  CollectionParentMetaUpdateConnectionInput: CollectionParentMetaUpdateConnectionInput;
  CollectionParentMetaUpdateFieldInput: CollectionParentMetaUpdateFieldInput;
  CollectionRelationInput: CollectionRelationInput;
  CollectionSort: CollectionSort;
  CollectionUniqueWhere: CollectionUniqueWhere;
  CollectionUpdateInput: CollectionUpdateInput;
  CollectionWhere: CollectionWhere;
  CollectionsConnection: CollectionsConnection;
  CreateBmsContainersMutationResponse: CreateBmsContainersMutationResponse;
  CreateBmsPagedsMutationResponse: CreateBmsPagedsMutationResponse;
  CreateBookmarkDl: CreateBookmarkDl;
  CreateBookmarkDlsMutationResponse: CreateBookmarkDlsMutationResponse;
  CreateBookmarkFiltersMutationResponse: CreateBookmarkFiltersMutationResponse;
  CreateBookmarksMutationResponse: CreateBookmarksMutationResponse;
  CreateCollectionDsListsMutationResponse: CreateCollectionDsListsMutationResponse;
  CreateCollectionDsMutationResponse: CreateCollectionDsMutationResponse;
  CreateCollectionsMutationResponse: CreateCollectionsMutationResponse;
  CreateFolderDlsMutationResponse: CreateFolderDlsMutationResponse;
  CreateFoldersMutationResponse: CreateFoldersMutationResponse;
  CreateInfo: CreateInfo;
  CreateMemberMetasMutationResponse: CreateMemberMetasMutationResponse;
  CreateMembersMutationResponse: CreateMembersMutationResponse;
  CreateParentMetasMutationResponse: CreateParentMetasMutationResponse;
  CreateParentsChildrenMutationResponse: CreateParentsChildrenMutationResponse;
  CreateTagDsMutationResponse: CreateTagDsMutationResponse;
  CreateTagsMutationResponse: CreateTagsMutationResponse;
  DateTime: Scalars['DateTime']['output'];
  DateTimeAggregateSelectionNullable: DateTimeAggregateSelectionNullable;
  DeleteInfo: DeleteInfo;
  Float: Scalars['Float']['output'];
  Folder: Omit<Folder, 'children'> & { children: Array<ResolversParentTypes['Child']> };
  FolderAggregateSelection: FolderAggregateSelection;
  FolderChildrenBookmarkConnectFieldInput: FolderChildrenBookmarkConnectFieldInput;
  FolderChildrenBookmarkConnectOrCreateFieldInput: FolderChildrenBookmarkConnectOrCreateFieldInput;
  FolderChildrenBookmarkConnectOrCreateFieldInputOnCreate: FolderChildrenBookmarkConnectOrCreateFieldInputOnCreate;
  FolderChildrenBookmarkConnectionWhere: FolderChildrenBookmarkConnectionWhere;
  FolderChildrenBookmarkCreateFieldInput: FolderChildrenBookmarkCreateFieldInput;
  FolderChildrenBookmarkDeleteFieldInput: FolderChildrenBookmarkDeleteFieldInput;
  FolderChildrenBookmarkDisconnectFieldInput: FolderChildrenBookmarkDisconnectFieldInput;
  FolderChildrenBookmarkFieldInput: FolderChildrenBookmarkFieldInput;
  FolderChildrenBookmarkUpdateConnectionInput: FolderChildrenBookmarkUpdateConnectionInput;
  FolderChildrenBookmarkUpdateFieldInput: FolderChildrenBookmarkUpdateFieldInput;
  FolderChildrenConnectInput: FolderChildrenConnectInput;
  FolderChildrenConnectOrCreateInput: FolderChildrenConnectOrCreateInput;
  FolderChildrenConnection: FolderChildrenConnection;
  FolderChildrenConnectionWhere: FolderChildrenConnectionWhere;
  FolderChildrenCreateFieldInput: FolderChildrenCreateFieldInput;
  FolderChildrenCreateInput: FolderChildrenCreateInput;
  FolderChildrenDeleteInput: FolderChildrenDeleteInput;
  FolderChildrenDisconnectInput: FolderChildrenDisconnectInput;
  FolderChildrenFolderConnectFieldInput: FolderChildrenFolderConnectFieldInput;
  FolderChildrenFolderConnectOrCreateFieldInput: FolderChildrenFolderConnectOrCreateFieldInput;
  FolderChildrenFolderConnectOrCreateFieldInputOnCreate: FolderChildrenFolderConnectOrCreateFieldInputOnCreate;
  FolderChildrenFolderConnectionWhere: FolderChildrenFolderConnectionWhere;
  FolderChildrenFolderCreateFieldInput: FolderChildrenFolderCreateFieldInput;
  FolderChildrenFolderDeleteFieldInput: FolderChildrenFolderDeleteFieldInput;
  FolderChildrenFolderDisconnectFieldInput: FolderChildrenFolderDisconnectFieldInput;
  FolderChildrenFolderFieldInput: FolderChildrenFolderFieldInput;
  FolderChildrenFolderUpdateConnectionInput: FolderChildrenFolderUpdateConnectionInput;
  FolderChildrenFolderUpdateFieldInput: FolderChildrenFolderUpdateFieldInput;
  FolderChildrenRelationship: Omit<FolderChildrenRelationship, 'node'> & { node: ResolversParentTypes['Child'] };
  FolderChildrenUpdateInput: FolderChildrenUpdateInput;
  FolderConnectInput: FolderConnectInput;
  FolderConnectOrCreateInput: FolderConnectOrCreateInput;
  FolderConnectOrCreateWhere: FolderConnectOrCreateWhere;
  FolderConnectWhere: FolderConnectWhere;
  FolderCreateInput: FolderCreateInput;
  FolderDeleteInput: FolderDeleteInput;
  FolderDisconnectInput: FolderDisconnectInput;
  FolderDl: Omit<FolderDl, 'children'> & { children: Array<ResolversParentTypes['ChildDl']> };
  FolderDlAggregateSelection: FolderDlAggregateSelection;
  FolderDlCreateInput: FolderDlCreateInput;
  FolderDlEdge: FolderDlEdge;
  FolderDlOptions: FolderDlOptions;
  FolderDlSort: FolderDlSort;
  FolderDlUpdateInput: FolderDlUpdateInput;
  FolderDlWhere: FolderDlWhere;
  FolderDlsConnection: FolderDlsConnection;
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
  FolderParentMetaConnectFieldInput: FolderParentMetaConnectFieldInput;
  FolderParentMetaConnectOrCreateFieldInput: FolderParentMetaConnectOrCreateFieldInput;
  FolderParentMetaConnectOrCreateFieldInputOnCreate: FolderParentMetaConnectOrCreateFieldInputOnCreate;
  FolderParentMetaConnection: FolderParentMetaConnection;
  FolderParentMetaConnectionSort: FolderParentMetaConnectionSort;
  FolderParentMetaConnectionWhere: FolderParentMetaConnectionWhere;
  FolderParentMetaCreateFieldInput: FolderParentMetaCreateFieldInput;
  FolderParentMetaDeleteFieldInput: FolderParentMetaDeleteFieldInput;
  FolderParentMetaDisconnectFieldInput: FolderParentMetaDisconnectFieldInput;
  FolderParentMetaFieldInput: FolderParentMetaFieldInput;
  FolderParentMetaNodeAggregationWhereInput: FolderParentMetaNodeAggregationWhereInput;
  FolderParentMetaParentMetaAggregationSelection: FolderParentMetaParentMetaAggregationSelection;
  FolderParentMetaParentMetaNodeAggregateSelection: FolderParentMetaParentMetaNodeAggregateSelection;
  FolderParentMetaRelationship: FolderParentMetaRelationship;
  FolderParentMetaUpdateConnectionInput: FolderParentMetaUpdateConnectionInput;
  FolderParentMetaUpdateFieldInput: FolderParentMetaUpdateFieldInput;
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
  MemberBmFiltersAggregateInput: MemberBmFiltersAggregateInput;
  MemberBmFiltersConnectFieldInput: MemberBmFiltersConnectFieldInput;
  MemberBmFiltersConnectOrCreateFieldInput: MemberBmFiltersConnectOrCreateFieldInput;
  MemberBmFiltersConnectOrCreateFieldInputOnCreate: MemberBmFiltersConnectOrCreateFieldInputOnCreate;
  MemberBmFiltersConnection: MemberBmFiltersConnection;
  MemberBmFiltersConnectionSort: MemberBmFiltersConnectionSort;
  MemberBmFiltersConnectionWhere: MemberBmFiltersConnectionWhere;
  MemberBmFiltersCreateFieldInput: MemberBmFiltersCreateFieldInput;
  MemberBmFiltersDeleteFieldInput: MemberBmFiltersDeleteFieldInput;
  MemberBmFiltersDisconnectFieldInput: MemberBmFiltersDisconnectFieldInput;
  MemberBmFiltersFieldInput: MemberBmFiltersFieldInput;
  MemberBmFiltersNodeAggregationWhereInput: MemberBmFiltersNodeAggregationWhereInput;
  MemberBmFiltersRelationship: MemberBmFiltersRelationship;
  MemberBmFiltersUpdateConnectionInput: MemberBmFiltersUpdateConnectionInput;
  MemberBmFiltersUpdateFieldInput: MemberBmFiltersUpdateFieldInput;
  MemberBmsContainerAggregateInput: MemberBmsContainerAggregateInput;
  MemberBmsContainerBmsContainerAggregationSelection: MemberBmsContainerBmsContainerAggregationSelection;
  MemberBmsContainerBmsContainerNodeAggregateSelection: MemberBmsContainerBmsContainerNodeAggregateSelection;
  MemberBmsContainerConnectFieldInput: MemberBmsContainerConnectFieldInput;
  MemberBmsContainerConnectOrCreateFieldInput: MemberBmsContainerConnectOrCreateFieldInput;
  MemberBmsContainerConnectOrCreateFieldInputOnCreate: MemberBmsContainerConnectOrCreateFieldInputOnCreate;
  MemberBmsContainerConnection: MemberBmsContainerConnection;
  MemberBmsContainerConnectionSort: MemberBmsContainerConnectionSort;
  MemberBmsContainerConnectionWhere: MemberBmsContainerConnectionWhere;
  MemberBmsContainerCreateFieldInput: MemberBmsContainerCreateFieldInput;
  MemberBmsContainerDeleteFieldInput: MemberBmsContainerDeleteFieldInput;
  MemberBmsContainerDisconnectFieldInput: MemberBmsContainerDisconnectFieldInput;
  MemberBmsContainerFieldInput: MemberBmsContainerFieldInput;
  MemberBmsContainerNodeAggregationWhereInput: MemberBmsContainerNodeAggregationWhereInput;
  MemberBmsContainerRelationship: MemberBmsContainerRelationship;
  MemberBmsContainerUpdateConnectionInput: MemberBmsContainerUpdateConnectionInput;
  MemberBmsContainerUpdateFieldInput: MemberBmsContainerUpdateFieldInput;
  MemberBookmarkFilterBmFiltersAggregationSelection: MemberBookmarkFilterBmFiltersAggregationSelection;
  MemberBookmarkFilterBmFiltersNodeAggregateSelection: MemberBookmarkFilterBmFiltersNodeAggregateSelection;
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
  NodesToMove: NodesToMove;
  PageInfo: PageInfo;
  Parent: ResolversInterfaceTypes<ResolversParentTypes>['Parent'];
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
  ParentSort: ParentSort;
  ParentUpdateInput: ParentUpdateInput;
  ParentWhere: ParentWhere;
  ParentsChildren: Omit<ParentsChildren, 'children'> & { children: Array<ResolversParentTypes['ChildDl']> };
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
  SelectedChilds: SelectedChilds;
  SelectedNodes: SelectedNodes;
  String: Scalars['String']['output'];
  StringAggregateSelectionNonNullable: StringAggregateSelectionNonNullable;
  StringAggregateSelectionNullable: StringAggregateSelectionNullable;
  Tag: Tag;
  TagAggregateSelection: TagAggregateSelection;
  TagBookmarkBookmarksAggregationSelection: TagBookmarkBookmarksAggregationSelection;
  TagBookmarkBookmarksNodeAggregateSelection: TagBookmarkBookmarksNodeAggregateSelection;
  TagBookmarksAggregateInput: TagBookmarksAggregateInput;
  TagBookmarksConnectFieldInput: TagBookmarksConnectFieldInput;
  TagBookmarksConnectOrCreateFieldInput: TagBookmarksConnectOrCreateFieldInput;
  TagBookmarksConnectOrCreateFieldInputOnCreate: TagBookmarksConnectOrCreateFieldInputOnCreate;
  TagBookmarksConnection: TagBookmarksConnection;
  TagBookmarksConnectionSort: TagBookmarksConnectionSort;
  TagBookmarksConnectionWhere: TagBookmarksConnectionWhere;
  TagBookmarksCreateFieldInput: TagBookmarksCreateFieldInput;
  TagBookmarksDeleteFieldInput: TagBookmarksDeleteFieldInput;
  TagBookmarksDisconnectFieldInput: TagBookmarksDisconnectFieldInput;
  TagBookmarksFieldInput: TagBookmarksFieldInput;
  TagBookmarksNodeAggregationWhereInput: TagBookmarksNodeAggregationWhereInput;
  TagBookmarksRelationship: TagBookmarksRelationship;
  TagBookmarksUpdateConnectionInput: TagBookmarksUpdateConnectionInput;
  TagBookmarksUpdateFieldInput: TagBookmarksUpdateFieldInput;
  TagConnectInput: TagConnectInput;
  TagConnectOrCreateInput: TagConnectOrCreateInput;
  TagConnectOrCreateWhere: TagConnectOrCreateWhere;
  TagConnectWhere: TagConnectWhere;
  TagCreateInput: TagCreateInput;
  TagDeleteInput: TagDeleteInput;
  TagDisconnectInput: TagDisconnectInput;
  TagDs: TagDs;
  TagDsAggregateSelection: TagDsAggregateSelection;
  TagDsConnection: TagDsConnection;
  TagDsCreateInput: TagDsCreateInput;
  TagDsEdge: TagDsEdge;
  TagDsOptions: TagDsOptions;
  TagDsSort: TagDsSort;
  TagDsUpdateInput: TagDsUpdateInput;
  TagDsWhere: TagDsWhere;
  TagEdge: TagEdge;
  TagOnCreateInput: TagOnCreateInput;
  TagOptions: TagOptions;
  TagRelationInput: TagRelationInput;
  TagSort: TagSort;
  TagUniqueWhere: TagUniqueWhere;
  TagUpdateInput: TagUpdateInput;
  TagWhere: TagWhere;
  TagsConnection: TagsConnection;
  UpdateBmsContainersMutationResponse: UpdateBmsContainersMutationResponse;
  UpdateBmsPagedsMutationResponse: UpdateBmsPagedsMutationResponse;
  UpdateBookmarkDlsMutationResponse: UpdateBookmarkDlsMutationResponse;
  UpdateBookmarkFiltersMutationResponse: UpdateBookmarkFiltersMutationResponse;
  UpdateBookmarksMutationResponse: UpdateBookmarksMutationResponse;
  UpdateCollectionDsListsMutationResponse: UpdateCollectionDsListsMutationResponse;
  UpdateCollectionDsMutationResponse: UpdateCollectionDsMutationResponse;
  UpdateCollectionsMutationResponse: UpdateCollectionsMutationResponse;
  UpdateFolderDlsMutationResponse: UpdateFolderDlsMutationResponse;
  UpdateFoldersMutationResponse: UpdateFoldersMutationResponse;
  UpdateInfo: UpdateInfo;
  UpdateMemberMetasMutationResponse: UpdateMemberMetasMutationResponse;
  UpdateMembersMutationResponse: UpdateMembersMutationResponse;
  UpdateParentMetasMutationResponse: UpdateParentMetasMutationResponse;
  UpdateParentsChildrenMutationResponse: UpdateParentsChildrenMutationResponse;
  UpdateTagDsMutationResponse: UpdateTagDsMutationResponse;
  UpdateTagsMutationResponse: UpdateTagsMutationResponse;
  Upload: Scalars['Upload']['output'];
};

export type BmsContainerResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmsContainer'] = ResolversParentTypes['BmsContainer']> = {
  bookmarks?: Resolver<Array<ResolversTypes['Bookmark']>, ParentType, ContextType, RequireFields<BmsContainerBookmarksArgs, 'directed'>>;
  bookmarksAggregate?: Resolver<Maybe<ResolversTypes['BmsContainerBookmarkBookmarksAggregationSelection']>, ParentType, ContextType, RequireFields<BmsContainerBookmarksAggregateArgs, 'directed'>>;
  bookmarksConnection?: Resolver<ResolversTypes['BmsContainerBookmarksConnection'], ParentType, ContextType, RequireFields<BmsContainerBookmarksConnectionArgs, 'directed'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<BmsContainerMemberArgs, 'directed'>>;
  memberAggregate?: Resolver<Maybe<ResolversTypes['BmsContainerMemberMemberAggregationSelection']>, ParentType, ContextType, RequireFields<BmsContainerMemberAggregateArgs, 'directed'>>;
  memberConnection?: Resolver<ResolversTypes['BmsContainerMemberConnection'], ParentType, ContextType, RequireFields<BmsContainerMemberConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmsContainerAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmsContainerAggregateSelection'] = ResolversParentTypes['BmsContainerAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmsContainerBookmarkBookmarksAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmsContainerBookmarkBookmarksAggregationSelection'] = ResolversParentTypes['BmsContainerBookmarkBookmarksAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['BmsContainerBookmarkBookmarksNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmsContainerBookmarkBookmarksNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmsContainerBookmarkBookmarksNodeAggregateSelection'] = ResolversParentTypes['BmsContainerBookmarkBookmarksNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  domainName?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  iconUri?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  linkPath?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  urlScheme?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmsContainerBookmarksConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmsContainerBookmarksConnection'] = ResolversParentTypes['BmsContainerBookmarksConnection']> = {
  edges?: Resolver<Array<ResolversTypes['BmsContainerBookmarksRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmsContainerBookmarksRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmsContainerBookmarksRelationship'] = ResolversParentTypes['BmsContainerBookmarksRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Bookmark'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmsContainerEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmsContainerEdge'] = ResolversParentTypes['BmsContainerEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['BmsContainer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmsContainerMemberConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmsContainerMemberConnection'] = ResolversParentTypes['BmsContainerMemberConnection']> = {
  edges?: Resolver<Array<ResolversTypes['BmsContainerMemberRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmsContainerMemberMemberAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmsContainerMemberMemberAggregationSelection'] = ResolversParentTypes['BmsContainerMemberMemberAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['BmsContainerMemberMemberNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmsContainerMemberMemberNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmsContainerMemberMemberNodeAggregateSelection'] = ResolversParentTypes['BmsContainerMemberMemberNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmsContainerMemberRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmsContainerMemberRelationship'] = ResolversParentTypes['BmsContainerMemberRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmsContainersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmsContainersConnection'] = ResolversParentTypes['BmsContainersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['BmsContainerEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmsPagedResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmsPaged'] = ResolversParentTypes['BmsPaged']> = {
  bookmarks?: Resolver<Array<ResolversTypes['BookmarkDl']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmsPagedAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmsPagedAggregateSelection'] = ResolversParentTypes['BmsPagedAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmsPagedEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmsPagedEdge'] = ResolversParentTypes['BmsPagedEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['BmsPaged'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmsPagedsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmsPagedsConnection'] = ResolversParentTypes['BmsPagedsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['BmsPagedEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bookmark'] = ResolversParentTypes['Bookmark']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domainName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  linkPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Parent']>, ParentType, ContextType, RequireFields<BookmarkParentArgs, 'directed'>>;
  parentConnection?: Resolver<ResolversTypes['BookmarkParentConnection'], ParentType, ContextType, RequireFields<BookmarkParentConnectionArgs, 'directed'>>;
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<BookmarkTagsArgs, 'directed'>>;
  tagsAggregate?: Resolver<Maybe<ResolversTypes['BookmarkTagTagsAggregationSelection']>, ParentType, ContextType, RequireFields<BookmarkTagsAggregateArgs, 'directed'>>;
  tagsConnection?: Resolver<ResolversTypes['BookmarkTagsConnection'], ParentType, ContextType, RequireFields<BookmarkTagsConnectionArgs, 'directed'>>;
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
  name?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  urlScheme?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkDlResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkDl'] = ResolversParentTypes['BookmarkDl']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domainName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iconUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  linkPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['TagDs']>>, ParentType, ContextType>;
  urlScheme?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkDlAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkDlAggregateSelection'] = ResolversParentTypes['BookmarkDlAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  domainName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  iconUri?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  linkPath?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  urlScheme?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkDlEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkDlEdge'] = ResolversParentTypes['BookmarkDlEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['BookmarkDl'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkDlsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkDlsConnection'] = ResolversParentTypes['BookmarkDlsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['BookmarkDlEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkEdge'] = ResolversParentTypes['BookmarkEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Bookmark'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkFilter'] = ResolversParentTypes['BookmarkFilter']> = {
  bmLoose?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  bmParentsTxt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bmTags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  bmTxt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bmUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<BookmarkFilterMemberArgs, 'directed'>>;
  memberAggregate?: Resolver<Maybe<ResolversTypes['BookmarkFilterMemberMemberAggregationSelection']>, ParentType, ContextType, RequireFields<BookmarkFilterMemberAggregateArgs, 'directed'>>;
  memberConnection?: Resolver<ResolversTypes['BookmarkFilterMemberConnection'], ParentType, ContextType, RequireFields<BookmarkFilterMemberConnectionArgs, 'directed'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sortBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sortDir?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkFilterAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkFilterAggregateSelection'] = ResolversParentTypes['BookmarkFilterAggregateSelection']> = {
  bmParentsTxt?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  bmTxt?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  bmUrl?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  sortBy?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  sortDir?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkFilterEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkFilterEdge'] = ResolversParentTypes['BookmarkFilterEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['BookmarkFilter'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkFilterMemberConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkFilterMemberConnection'] = ResolversParentTypes['BookmarkFilterMemberConnection']> = {
  edges?: Resolver<Array<ResolversTypes['BookmarkFilterMemberRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkFilterMemberMemberAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkFilterMemberMemberAggregationSelection'] = ResolversParentTypes['BookmarkFilterMemberMemberAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['BookmarkFilterMemberMemberNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkFilterMemberMemberNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkFilterMemberMemberNodeAggregateSelection'] = ResolversParentTypes['BookmarkFilterMemberMemberNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkFilterMemberRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkFilterMemberRelationship'] = ResolversParentTypes['BookmarkFilterMemberRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkFiltersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkFiltersConnection'] = ResolversParentTypes['BookmarkFiltersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['BookmarkFilterEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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

export type BookmarkTagTagsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkTagTagsAggregationSelection'] = ResolversParentTypes['BookmarkTagTagsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['BookmarkTagTagsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkTagTagsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkTagTagsNodeAggregateSelection'] = ResolversParentTypes['BookmarkTagTagsNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkTagsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkTagsConnection'] = ResolversParentTypes['BookmarkTagsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['BookmarkTagsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkTagsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkTagsRelationship'] = ResolversParentTypes['BookmarkTagsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Tag'], ParentType, ContextType>;
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

export type ChildDlResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChildDl'] = ResolversParentTypes['ChildDl']> = {
  __resolveType: TypeResolveFn<'BookmarkDl' | 'FolderDl', ParentType, ContextType>;
};

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  children?: Resolver<Array<ResolversTypes['Child']>, ParentType, ContextType, RequireFields<CollectionChildrenArgs, 'directed'>>;
  childrenConnection?: Resolver<ResolversTypes['CollectionChildrenConnection'], ParentType, ContextType, RequireFields<CollectionChildrenConnectionArgs, 'directed'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<CollectionMemberArgs, 'directed'>>;
  memberAggregate?: Resolver<Maybe<ResolversTypes['CollectionMemberMemberAggregationSelection']>, ParentType, ContextType, RequireFields<CollectionMemberAggregateArgs, 'directed'>>;
  memberConnection?: Resolver<ResolversTypes['CollectionMemberConnection'], ParentType, ContextType, RequireFields<CollectionMemberConnectionArgs, 'directed'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parentMeta?: Resolver<Maybe<ResolversTypes['ParentMeta']>, ParentType, ContextType, RequireFields<CollectionParentMetaArgs, 'directed'>>;
  parentMetaAggregate?: Resolver<Maybe<ResolversTypes['CollectionParentMetaParentMetaAggregationSelection']>, ParentType, ContextType, RequireFields<CollectionParentMetaAggregateArgs, 'directed'>>;
  parentMetaConnection?: Resolver<ResolversTypes['CollectionParentMetaConnection'], ParentType, ContextType, RequireFields<CollectionParentMetaConnectionArgs, 'directed'>>;
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

export type CollectionChildrenConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionChildrenConnection'] = ResolversParentTypes['CollectionChildrenConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CollectionChildrenRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionChildrenRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionChildrenRelationship'] = ResolversParentTypes['CollectionChildrenRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Child'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionDsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionDs'] = ResolversParentTypes['CollectionDs']> = {
  bookmarkCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  deepness?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionDsAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionDsAggregateSelection'] = ResolversParentTypes['CollectionDsAggregateSelection']> = {
  bookmarkCount?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  deepness?: Resolver<ResolversTypes['IntAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionDsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionDsConnection'] = ResolversParentTypes['CollectionDsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CollectionDsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionDsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionDsEdge'] = ResolversParentTypes['CollectionDsEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CollectionDs'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionDsListResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionDsList'] = ResolversParentTypes['CollectionDsList']> = {
  collections?: Resolver<Maybe<Array<ResolversTypes['CollectionDs']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionDsListAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionDsListAggregateSelection'] = ResolversParentTypes['CollectionDsListAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionDsListEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionDsListEdge'] = ResolversParentTypes['CollectionDsListEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CollectionDsList'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionDsListsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionDsListsConnection'] = ResolversParentTypes['CollectionDsListsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CollectionDsListEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionEdge'] = ResolversParentTypes['CollectionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
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

export type CollectionParentMetaConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionParentMetaConnection'] = ResolversParentTypes['CollectionParentMetaConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CollectionParentMetaRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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

export type CollectionParentMetaRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionParentMetaRelationship'] = ResolversParentTypes['CollectionParentMetaRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParentMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionsConnection'] = ResolversParentTypes['CollectionsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CollectionEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateBmsContainersMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateBmsContainersMutationResponse'] = ResolversParentTypes['CreateBmsContainersMutationResponse']> = {
  bmsContainers?: Resolver<Array<ResolversTypes['BmsContainer']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateBmsPagedsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateBmsPagedsMutationResponse'] = ResolversParentTypes['CreateBmsPagedsMutationResponse']> = {
  bmsPageds?: Resolver<Array<ResolversTypes['BmsPaged']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateBookmarkDlsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateBookmarkDlsMutationResponse'] = ResolversParentTypes['CreateBookmarkDlsMutationResponse']> = {
  bookmarkDls?: Resolver<Array<ResolversTypes['BookmarkDl']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateBookmarkFiltersMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateBookmarkFiltersMutationResponse'] = ResolversParentTypes['CreateBookmarkFiltersMutationResponse']> = {
  bookmarkFilters?: Resolver<Array<ResolversTypes['BookmarkFilter']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateBookmarksMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateBookmarksMutationResponse'] = ResolversParentTypes['CreateBookmarksMutationResponse']> = {
  bookmarks?: Resolver<Array<ResolversTypes['Bookmark']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCollectionDsListsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCollectionDsListsMutationResponse'] = ResolversParentTypes['CreateCollectionDsListsMutationResponse']> = {
  collectionDsLists?: Resolver<Array<ResolversTypes['CollectionDsList']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCollectionDsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCollectionDsMutationResponse'] = ResolversParentTypes['CreateCollectionDsMutationResponse']> = {
  collectionDs?: Resolver<Array<ResolversTypes['CollectionDs']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCollectionsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCollectionsMutationResponse'] = ResolversParentTypes['CreateCollectionsMutationResponse']> = {
  collections?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateFolderDlsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateFolderDlsMutationResponse'] = ResolversParentTypes['CreateFolderDlsMutationResponse']> = {
  folderDls?: Resolver<Array<ResolversTypes['FolderDl']>, ParentType, ContextType>;
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

export type CreateTagDsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTagDsMutationResponse'] = ResolversParentTypes['CreateTagDsMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  tagDs?: Resolver<Array<ResolversTypes['TagDs']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateTagsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTagsMutationResponse'] = ResolversParentTypes['CreateTagsMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
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
  childrenConnection?: Resolver<ResolversTypes['FolderChildrenConnection'], ParentType, ContextType, RequireFields<FolderChildrenConnectionArgs, 'directed'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Parent']>, ParentType, ContextType, RequireFields<FolderParentArgs, 'directed'>>;
  parentConnection?: Resolver<ResolversTypes['FolderParentConnection'], ParentType, ContextType, RequireFields<FolderParentConnectionArgs, 'directed'>>;
  parentMeta?: Resolver<Maybe<ResolversTypes['ParentMeta']>, ParentType, ContextType, RequireFields<FolderParentMetaArgs, 'directed'>>;
  parentMetaAggregate?: Resolver<Maybe<ResolversTypes['FolderParentMetaParentMetaAggregationSelection']>, ParentType, ContextType, RequireFields<FolderParentMetaAggregateArgs, 'directed'>>;
  parentMetaConnection?: Resolver<ResolversTypes['FolderParentMetaConnection'], ParentType, ContextType, RequireFields<FolderParentMetaConnectionArgs, 'directed'>>;
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

export type FolderChildrenConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderChildrenConnection'] = ResolversParentTypes['FolderChildrenConnection']> = {
  edges?: Resolver<Array<ResolversTypes['FolderChildrenRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderChildrenRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderChildrenRelationship'] = ResolversParentTypes['FolderChildrenRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Child'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderDlResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderDl'] = ResolversParentTypes['FolderDl']> = {
  bookmarkCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['ChildDl']>, ParentType, ContextType>;
  hasUnfetchedChildren?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderDlAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderDlAggregateSelection'] = ResolversParentTypes['FolderDlAggregateSelection']> = {
  bookmarkCount?: Resolver<ResolversTypes['IntAggregateSelectionNullable'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderDlEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderDlEdge'] = ResolversParentTypes['FolderDlEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['FolderDl'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderDlsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderDlsConnection'] = ResolversParentTypes['FolderDlsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['FolderDlEdge']>, ParentType, ContextType>;
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

export type FolderParentMetaConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderParentMetaConnection'] = ResolversParentTypes['FolderParentMetaConnection']> = {
  edges?: Resolver<Array<ResolversTypes['FolderParentMetaRelationship']>, ParentType, ContextType>;
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

export type FolderParentMetaRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderParentMetaRelationship'] = ResolversParentTypes['FolderParentMetaRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParentMeta'], ParentType, ContextType>;
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
  bmFilters?: Resolver<Array<ResolversTypes['BookmarkFilter']>, ParentType, ContextType, RequireFields<MemberBmFiltersArgs, 'directed'>>;
  bmFiltersAggregate?: Resolver<Maybe<ResolversTypes['MemberBookmarkFilterBmFiltersAggregationSelection']>, ParentType, ContextType, RequireFields<MemberBmFiltersAggregateArgs, 'directed'>>;
  bmFiltersConnection?: Resolver<ResolversTypes['MemberBmFiltersConnection'], ParentType, ContextType, RequireFields<MemberBmFiltersConnectionArgs, 'directed'>>;
  bmsContainer?: Resolver<Maybe<ResolversTypes['BmsContainer']>, ParentType, ContextType, RequireFields<MemberBmsContainerArgs, 'directed'>>;
  bmsContainerAggregate?: Resolver<Maybe<ResolversTypes['MemberBmsContainerBmsContainerAggregationSelection']>, ParentType, ContextType, RequireFields<MemberBmsContainerAggregateArgs, 'directed'>>;
  bmsContainerConnection?: Resolver<ResolversTypes['MemberBmsContainerConnection'], ParentType, ContextType, RequireFields<MemberBmsContainerConnectionArgs, 'directed'>>;
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

export type MemberBmFiltersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberBmFiltersConnection'] = ResolversParentTypes['MemberBmFiltersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MemberBmFiltersRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberBmFiltersRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberBmFiltersRelationship'] = ResolversParentTypes['MemberBmFiltersRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['BookmarkFilter'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberBmsContainerBmsContainerAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberBmsContainerBmsContainerAggregationSelection'] = ResolversParentTypes['MemberBmsContainerBmsContainerAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MemberBmsContainerBmsContainerNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberBmsContainerBmsContainerNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberBmsContainerBmsContainerNodeAggregateSelection'] = ResolversParentTypes['MemberBmsContainerBmsContainerNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberBmsContainerConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberBmsContainerConnection'] = ResolversParentTypes['MemberBmsContainerConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MemberBmsContainerRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberBmsContainerRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberBmsContainerRelationship'] = ResolversParentTypes['MemberBmsContainerRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['BmsContainer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberBookmarkFilterBmFiltersAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberBookmarkFilterBmFiltersAggregationSelection'] = ResolversParentTypes['MemberBookmarkFilterBmFiltersAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MemberBookmarkFilterBmFiltersNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberBookmarkFilterBmFiltersNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberBookmarkFilterBmFiltersNodeAggregateSelection'] = ResolversParentTypes['MemberBookmarkFilterBmFiltersNodeAggregateSelection']> = {
  bmParentsTxt?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  bmTxt?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  bmUrl?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  sortBy?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  sortDir?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
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
  createBmsContainers?: Resolver<ResolversTypes['CreateBmsContainersMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateBmsContainersArgs, 'input'>>;
  createBmsPageds?: Resolver<ResolversTypes['CreateBmsPagedsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateBmsPagedsArgs, 'input'>>;
  createBookmarkDl?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationCreateBookmarkDlArgs, 'data'>>;
  createBookmarkDls?: Resolver<ResolversTypes['CreateBookmarkDlsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateBookmarkDlsArgs, 'input'>>;
  createBookmarkFilters?: Resolver<ResolversTypes['CreateBookmarkFiltersMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateBookmarkFiltersArgs, 'input'>>;
  createBookmarks?: Resolver<ResolversTypes['CreateBookmarksMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateBookmarksArgs, 'input'>>;
  createCollection?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationCreateCollectionArgs, 'memberId' | 'name'>>;
  createCollectionDs?: Resolver<ResolversTypes['CreateCollectionDsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateCollectionDsArgs, 'input'>>;
  createCollectionDsLists?: Resolver<ResolversTypes['CreateCollectionDsListsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateCollectionDsListsArgs, 'input'>>;
  createCollections?: Resolver<ResolversTypes['CreateCollectionsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateCollectionsArgs, 'input'>>;
  createFolder?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationCreateFolderArgs, 'name' | 'parentId' | 'position'>>;
  createFolderDls?: Resolver<ResolversTypes['CreateFolderDlsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateFolderDlsArgs, 'input'>>;
  createFolders?: Resolver<ResolversTypes['CreateFoldersMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateFoldersArgs, 'input'>>;
  createMemberMetas?: Resolver<ResolversTypes['CreateMemberMetasMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateMemberMetasArgs, 'input'>>;
  createMembers?: Resolver<ResolversTypes['CreateMembersMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateMembersArgs, 'input'>>;
  createParentMetas?: Resolver<ResolversTypes['CreateParentMetasMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateParentMetasArgs, 'input'>>;
  createParentsChildren?: Resolver<ResolversTypes['CreateParentsChildrenMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateParentsChildrenArgs, 'input'>>;
  createTagDs?: Resolver<ResolversTypes['CreateTagDsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateTagDsArgs, 'input'>>;
  createTags?: Resolver<ResolversTypes['CreateTagsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateTagsArgs, 'input'>>;
  deleteBmsContainers?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteBmsContainersArgs>>;
  deleteBmsPageds?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteBmsPagedsArgs>>;
  deleteBookmark?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteBookmarkArgs, 'id' | 'parentId'>>;
  deleteBookmarkDls?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteBookmarkDlsArgs>>;
  deleteBookmarkFilters?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteBookmarkFiltersArgs>>;
  deleteBookmarks?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteBookmarksArgs>>;
  deleteCascade?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteCascadeArgs, 'id'>>;
  deleteCollection?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteCollectionArgs, 'id' | 'memberId'>>;
  deleteCollectionDs?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteCollectionDsArgs>>;
  deleteCollectionDsLists?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteCollectionDsListsArgs>>;
  deleteCollections?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteCollectionsArgs>>;
  deleteFolder?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteFolderArgs, 'id' | 'parentId'>>;
  deleteFolderDls?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteFolderDlsArgs>>;
  deleteFolders?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteFoldersArgs>>;
  deleteListCascade?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteListCascadeArgs, 'ids'>>;
  deleteManyNodes?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteManyNodesArgs, 'nodes'>>;
  deleteMemberMetas?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteMemberMetasArgs>>;
  deleteMembers?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteMembersArgs>>;
  deleteParentMetas?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteParentMetasArgs>>;
  deleteParentsChildren?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteParentsChildrenArgs>>;
  deleteTagDs?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteTagDsArgs>>;
  deleteTags?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteTagsArgs>>;
  importFirefoxBookmarks?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationImportFirefoxBookmarksArgs, 'file'>>;
  moveManyNodes?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationMoveManyNodesArgs, 'nodes'>>;
  updateBmsContainers?: Resolver<ResolversTypes['UpdateBmsContainersMutationResponse'], ParentType, ContextType, Partial<MutationUpdateBmsContainersArgs>>;
  updateBmsPageds?: Resolver<ResolversTypes['UpdateBmsPagedsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateBmsPagedsArgs>>;
  updateBookmarkDls?: Resolver<ResolversTypes['UpdateBookmarkDlsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateBookmarkDlsArgs>>;
  updateBookmarkFilters?: Resolver<ResolversTypes['UpdateBookmarkFiltersMutationResponse'], ParentType, ContextType, Partial<MutationUpdateBookmarkFiltersArgs>>;
  updateBookmarks?: Resolver<ResolversTypes['UpdateBookmarksMutationResponse'], ParentType, ContextType, Partial<MutationUpdateBookmarksArgs>>;
  updateCollectionDs?: Resolver<ResolversTypes['UpdateCollectionDsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateCollectionDsArgs>>;
  updateCollectionDsLists?: Resolver<ResolversTypes['UpdateCollectionDsListsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateCollectionDsListsArgs>>;
  updateCollections?: Resolver<ResolversTypes['UpdateCollectionsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateCollectionsArgs>>;
  updateFolderDls?: Resolver<ResolversTypes['UpdateFolderDlsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateFolderDlsArgs>>;
  updateFolders?: Resolver<ResolversTypes['UpdateFoldersMutationResponse'], ParentType, ContextType, Partial<MutationUpdateFoldersArgs>>;
  updateMemberMetas?: Resolver<ResolversTypes['UpdateMemberMetasMutationResponse'], ParentType, ContextType, Partial<MutationUpdateMemberMetasArgs>>;
  updateMembers?: Resolver<ResolversTypes['UpdateMembersMutationResponse'], ParentType, ContextType, Partial<MutationUpdateMembersArgs>>;
  updateParentMetas?: Resolver<ResolversTypes['UpdateParentMetasMutationResponse'], ParentType, ContextType, Partial<MutationUpdateParentMetasArgs>>;
  updateParentsChildren?: Resolver<ResolversTypes['UpdateParentsChildrenMutationResponse'], ParentType, ContextType, Partial<MutationUpdateParentsChildrenArgs>>;
  updateTagDs?: Resolver<ResolversTypes['UpdateTagDsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateTagDsArgs>>;
  updateTags?: Resolver<ResolversTypes['UpdateTagsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateTagsArgs>>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Parent'] = ResolversParentTypes['Parent']> = {
  __resolveType: TypeResolveFn<'BmsContainer' | 'Collection' | 'Folder', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
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

export type ParentsChildrenResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentsChildren'] = ResolversParentTypes['ParentsChildren']> = {
  children?: Resolver<Array<ResolversTypes['ChildDl']>, ParentType, ContextType>;
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
  bmsByFilter?: Resolver<ResolversTypes['BmsPaged'], ParentType, ContextType, RequireFields<QueryBmsByFilterArgs, 'filter' | 'limit' | 'offset'>>;
  bmsContainers?: Resolver<Array<ResolversTypes['BmsContainer']>, ParentType, ContextType, Partial<QueryBmsContainersArgs>>;
  bmsContainersAggregate?: Resolver<ResolversTypes['BmsContainerAggregateSelection'], ParentType, ContextType, Partial<QueryBmsContainersAggregateArgs>>;
  bmsContainersConnection?: Resolver<ResolversTypes['BmsContainersConnection'], ParentType, ContextType, Partial<QueryBmsContainersConnectionArgs>>;
  bmsPageds?: Resolver<Array<ResolversTypes['BmsPaged']>, ParentType, ContextType, Partial<QueryBmsPagedsArgs>>;
  bmsPagedsAggregate?: Resolver<ResolversTypes['BmsPagedAggregateSelection'], ParentType, ContextType, Partial<QueryBmsPagedsAggregateArgs>>;
  bmsPagedsConnection?: Resolver<ResolversTypes['BmsPagedsConnection'], ParentType, ContextType, Partial<QueryBmsPagedsConnectionArgs>>;
  bookmarkDls?: Resolver<Array<ResolversTypes['BookmarkDl']>, ParentType, ContextType, Partial<QueryBookmarkDlsArgs>>;
  bookmarkDlsAggregate?: Resolver<ResolversTypes['BookmarkDlAggregateSelection'], ParentType, ContextType, Partial<QueryBookmarkDlsAggregateArgs>>;
  bookmarkDlsConnection?: Resolver<ResolversTypes['BookmarkDlsConnection'], ParentType, ContextType, Partial<QueryBookmarkDlsConnectionArgs>>;
  bookmarkFilters?: Resolver<Array<ResolversTypes['BookmarkFilter']>, ParentType, ContextType, Partial<QueryBookmarkFiltersArgs>>;
  bookmarkFiltersAggregate?: Resolver<ResolversTypes['BookmarkFilterAggregateSelection'], ParentType, ContextType, Partial<QueryBookmarkFiltersAggregateArgs>>;
  bookmarkFiltersConnection?: Resolver<ResolversTypes['BookmarkFiltersConnection'], ParentType, ContextType, Partial<QueryBookmarkFiltersConnectionArgs>>;
  bookmarks?: Resolver<Array<ResolversTypes['Bookmark']>, ParentType, ContextType, Partial<QueryBookmarksArgs>>;
  bookmarksAggregate?: Resolver<ResolversTypes['BookmarkAggregateSelection'], ParentType, ContextType, Partial<QueryBookmarksAggregateArgs>>;
  bookmarksConnection?: Resolver<ResolversTypes['BookmarksConnection'], ParentType, ContextType, Partial<QueryBookmarksConnectionArgs>>;
  collectionDs?: Resolver<Array<ResolversTypes['CollectionDs']>, ParentType, ContextType, Partial<QueryCollectionDsArgs>>;
  collectionDsAggregate?: Resolver<ResolversTypes['CollectionDsAggregateSelection'], ParentType, ContextType, Partial<QueryCollectionDsAggregateArgs>>;
  collectionDsConnection?: Resolver<ResolversTypes['CollectionDsConnection'], ParentType, ContextType, Partial<QueryCollectionDsConnectionArgs>>;
  collectionDsLists?: Resolver<Array<ResolversTypes['CollectionDsList']>, ParentType, ContextType, Partial<QueryCollectionDsListsArgs>>;
  collectionDsListsAggregate?: Resolver<ResolversTypes['CollectionDsListAggregateSelection'], ParentType, ContextType, Partial<QueryCollectionDsListsAggregateArgs>>;
  collectionDsListsConnection?: Resolver<ResolversTypes['CollectionDsListsConnection'], ParentType, ContextType, Partial<QueryCollectionDsListsConnectionArgs>>;
  collectionList?: Resolver<Maybe<ResolversTypes['CollectionDsList']>, ParentType, ContextType, RequireFields<QueryCollectionListArgs, 'memberId'>>;
  collections?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType, Partial<QueryCollectionsArgs>>;
  collectionsAggregate?: Resolver<ResolversTypes['CollectionAggregateSelection'], ParentType, ContextType, Partial<QueryCollectionsAggregateArgs>>;
  collectionsConnection?: Resolver<ResolversTypes['CollectionsConnection'], ParentType, ContextType, Partial<QueryCollectionsConnectionArgs>>;
  folderDls?: Resolver<Array<ResolversTypes['FolderDl']>, ParentType, ContextType, Partial<QueryFolderDlsArgs>>;
  folderDlsAggregate?: Resolver<ResolversTypes['FolderDlAggregateSelection'], ParentType, ContextType, Partial<QueryFolderDlsAggregateArgs>>;
  folderDlsConnection?: Resolver<ResolversTypes['FolderDlsConnection'], ParentType, ContextType, Partial<QueryFolderDlsConnectionArgs>>;
  folders?: Resolver<Array<ResolversTypes['Folder']>, ParentType, ContextType, Partial<QueryFoldersArgs>>;
  foldersAggregate?: Resolver<ResolversTypes['FolderAggregateSelection'], ParentType, ContextType, Partial<QueryFoldersAggregateArgs>>;
  foldersConnection?: Resolver<ResolversTypes['FoldersConnection'], ParentType, ContextType, Partial<QueryFoldersConnectionArgs>>;
  memberMetas?: Resolver<Array<ResolversTypes['MemberMeta']>, ParentType, ContextType, Partial<QueryMemberMetasArgs>>;
  memberMetasAggregate?: Resolver<ResolversTypes['MemberMetaAggregateSelection'], ParentType, ContextType, Partial<QueryMemberMetasAggregateArgs>>;
  memberMetasConnection?: Resolver<ResolversTypes['MemberMetasConnection'], ParentType, ContextType, Partial<QueryMemberMetasConnectionArgs>>;
  members?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType, Partial<QueryMembersArgs>>;
  membersAggregate?: Resolver<ResolversTypes['MemberAggregateSelection'], ParentType, ContextType, Partial<QueryMembersAggregateArgs>>;
  membersConnection?: Resolver<ResolversTypes['MembersConnection'], ParentType, ContextType, Partial<QueryMembersConnectionArgs>>;
  nl_parentsChildren?: Resolver<Array<ResolversTypes['ParentsChildren']>, ParentType, ContextType, RequireFields<QueryNl_ParentsChildrenArgs, 'ids' | 'level'>>;
  nonHierarchBmCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<QueryNonHierarchBmCountArgs, 'memberId'>>;
  parentChildren?: Resolver<Array<ResolversTypes['ChildDl']>, ParentType, ContextType, RequireFields<QueryParentChildrenArgs, 'id' | 'level'>>;
  parentMetas?: Resolver<Array<ResolversTypes['ParentMeta']>, ParentType, ContextType, Partial<QueryParentMetasArgs>>;
  parentMetasAggregate?: Resolver<ResolversTypes['ParentMetaAggregateSelection'], ParentType, ContextType, Partial<QueryParentMetasAggregateArgs>>;
  parentMetasConnection?: Resolver<ResolversTypes['ParentMetasConnection'], ParentType, ContextType, Partial<QueryParentMetasConnectionArgs>>;
  parentsChildren?: Resolver<Array<ResolversTypes['ParentsChildren']>, ParentType, ContextType, Partial<QueryParentsChildrenArgs>>;
  parentsChildrenAggregate?: Resolver<ResolversTypes['ParentsChildrenAggregateSelection'], ParentType, ContextType, Partial<QueryParentsChildrenAggregateArgs>>;
  parentsChildrenConnection?: Resolver<ResolversTypes['ParentsChildrenConnection'], ParentType, ContextType, Partial<QueryParentsChildrenConnectionArgs>>;
  tagDs?: Resolver<Array<ResolversTypes['TagDs']>, ParentType, ContextType, Partial<QueryTagDsArgs>>;
  tagDsAggregate?: Resolver<ResolversTypes['TagDsAggregateSelection'], ParentType, ContextType, Partial<QueryTagDsAggregateArgs>>;
  tagDsConnection?: Resolver<ResolversTypes['TagDsConnection'], ParentType, ContextType, Partial<QueryTagDsConnectionArgs>>;
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType, Partial<QueryTagsArgs>>;
  tagsAggregate?: Resolver<ResolversTypes['TagAggregateSelection'], ParentType, ContextType, Partial<QueryTagsAggregateArgs>>;
  tagsConnection?: Resolver<ResolversTypes['TagsConnection'], ParentType, ContextType, Partial<QueryTagsConnectionArgs>>;
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

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  bookmarks?: Resolver<Array<ResolversTypes['Bookmark']>, ParentType, ContextType, RequireFields<TagBookmarksArgs, 'directed'>>;
  bookmarksAggregate?: Resolver<Maybe<ResolversTypes['TagBookmarkBookmarksAggregationSelection']>, ParentType, ContextType, RequireFields<TagBookmarksAggregateArgs, 'directed'>>;
  bookmarksConnection?: Resolver<ResolversTypes['TagBookmarksConnection'], ParentType, ContextType, RequireFields<TagBookmarksConnectionArgs, 'directed'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagAggregateSelection'] = ResolversParentTypes['TagAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagBookmarkBookmarksAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagBookmarkBookmarksAggregationSelection'] = ResolversParentTypes['TagBookmarkBookmarksAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TagBookmarkBookmarksNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagBookmarkBookmarksNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagBookmarkBookmarksNodeAggregateSelection'] = ResolversParentTypes['TagBookmarkBookmarksNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  domainName?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  iconUri?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  linkPath?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNullable'], ParentType, ContextType>;
  urlScheme?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagBookmarksConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagBookmarksConnection'] = ResolversParentTypes['TagBookmarksConnection']> = {
  edges?: Resolver<Array<ResolversTypes['TagBookmarksRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagBookmarksRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagBookmarksRelationship'] = ResolversParentTypes['TagBookmarksRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Bookmark'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagDsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagDs'] = ResolversParentTypes['TagDs']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagDsAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagDsAggregateSelection'] = ResolversParentTypes['TagDsAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagDsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagDsConnection'] = ResolversParentTypes['TagDsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['TagDsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagDsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagDsEdge'] = ResolversParentTypes['TagDsEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['TagDs'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagEdge'] = ResolversParentTypes['TagEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Tag'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagsConnection'] = ResolversParentTypes['TagsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['TagEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateBmsContainersMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateBmsContainersMutationResponse'] = ResolversParentTypes['UpdateBmsContainersMutationResponse']> = {
  bmsContainers?: Resolver<Array<ResolversTypes['BmsContainer']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateBmsPagedsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateBmsPagedsMutationResponse'] = ResolversParentTypes['UpdateBmsPagedsMutationResponse']> = {
  bmsPageds?: Resolver<Array<ResolversTypes['BmsPaged']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateBookmarkDlsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateBookmarkDlsMutationResponse'] = ResolversParentTypes['UpdateBookmarkDlsMutationResponse']> = {
  bookmarkDls?: Resolver<Array<ResolversTypes['BookmarkDl']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateBookmarkFiltersMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateBookmarkFiltersMutationResponse'] = ResolversParentTypes['UpdateBookmarkFiltersMutationResponse']> = {
  bookmarkFilters?: Resolver<Array<ResolversTypes['BookmarkFilter']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateBookmarksMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateBookmarksMutationResponse'] = ResolversParentTypes['UpdateBookmarksMutationResponse']> = {
  bookmarks?: Resolver<Array<ResolversTypes['Bookmark']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCollectionDsListsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCollectionDsListsMutationResponse'] = ResolversParentTypes['UpdateCollectionDsListsMutationResponse']> = {
  collectionDsLists?: Resolver<Array<ResolversTypes['CollectionDsList']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCollectionDsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCollectionDsMutationResponse'] = ResolversParentTypes['UpdateCollectionDsMutationResponse']> = {
  collectionDs?: Resolver<Array<ResolversTypes['CollectionDs']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCollectionsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCollectionsMutationResponse'] = ResolversParentTypes['UpdateCollectionsMutationResponse']> = {
  collections?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateFolderDlsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateFolderDlsMutationResponse'] = ResolversParentTypes['UpdateFolderDlsMutationResponse']> = {
  folderDls?: Resolver<Array<ResolversTypes['FolderDl']>, ParentType, ContextType>;
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

export type UpdateTagDsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTagDsMutationResponse'] = ResolversParentTypes['UpdateTagDsMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  tagDs?: Resolver<Array<ResolversTypes['TagDs']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateTagsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTagsMutationResponse'] = ResolversParentTypes['UpdateTagsMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  BmsContainer?: BmsContainerResolvers<ContextType>;
  BmsContainerAggregateSelection?: BmsContainerAggregateSelectionResolvers<ContextType>;
  BmsContainerBookmarkBookmarksAggregationSelection?: BmsContainerBookmarkBookmarksAggregationSelectionResolvers<ContextType>;
  BmsContainerBookmarkBookmarksNodeAggregateSelection?: BmsContainerBookmarkBookmarksNodeAggregateSelectionResolvers<ContextType>;
  BmsContainerBookmarksConnection?: BmsContainerBookmarksConnectionResolvers<ContextType>;
  BmsContainerBookmarksRelationship?: BmsContainerBookmarksRelationshipResolvers<ContextType>;
  BmsContainerEdge?: BmsContainerEdgeResolvers<ContextType>;
  BmsContainerMemberConnection?: BmsContainerMemberConnectionResolvers<ContextType>;
  BmsContainerMemberMemberAggregationSelection?: BmsContainerMemberMemberAggregationSelectionResolvers<ContextType>;
  BmsContainerMemberMemberNodeAggregateSelection?: BmsContainerMemberMemberNodeAggregateSelectionResolvers<ContextType>;
  BmsContainerMemberRelationship?: BmsContainerMemberRelationshipResolvers<ContextType>;
  BmsContainersConnection?: BmsContainersConnectionResolvers<ContextType>;
  BmsPaged?: BmsPagedResolvers<ContextType>;
  BmsPagedAggregateSelection?: BmsPagedAggregateSelectionResolvers<ContextType>;
  BmsPagedEdge?: BmsPagedEdgeResolvers<ContextType>;
  BmsPagedsConnection?: BmsPagedsConnectionResolvers<ContextType>;
  Bookmark?: BookmarkResolvers<ContextType>;
  BookmarkAggregateSelection?: BookmarkAggregateSelectionResolvers<ContextType>;
  BookmarkDl?: BookmarkDlResolvers<ContextType>;
  BookmarkDlAggregateSelection?: BookmarkDlAggregateSelectionResolvers<ContextType>;
  BookmarkDlEdge?: BookmarkDlEdgeResolvers<ContextType>;
  BookmarkDlsConnection?: BookmarkDlsConnectionResolvers<ContextType>;
  BookmarkEdge?: BookmarkEdgeResolvers<ContextType>;
  BookmarkFilter?: BookmarkFilterResolvers<ContextType>;
  BookmarkFilterAggregateSelection?: BookmarkFilterAggregateSelectionResolvers<ContextType>;
  BookmarkFilterEdge?: BookmarkFilterEdgeResolvers<ContextType>;
  BookmarkFilterMemberConnection?: BookmarkFilterMemberConnectionResolvers<ContextType>;
  BookmarkFilterMemberMemberAggregationSelection?: BookmarkFilterMemberMemberAggregationSelectionResolvers<ContextType>;
  BookmarkFilterMemberMemberNodeAggregateSelection?: BookmarkFilterMemberMemberNodeAggregateSelectionResolvers<ContextType>;
  BookmarkFilterMemberRelationship?: BookmarkFilterMemberRelationshipResolvers<ContextType>;
  BookmarkFiltersConnection?: BookmarkFiltersConnectionResolvers<ContextType>;
  BookmarkParentConnection?: BookmarkParentConnectionResolvers<ContextType>;
  BookmarkParentRelationship?: BookmarkParentRelationshipResolvers<ContextType>;
  BookmarkTagTagsAggregationSelection?: BookmarkTagTagsAggregationSelectionResolvers<ContextType>;
  BookmarkTagTagsNodeAggregateSelection?: BookmarkTagTagsNodeAggregateSelectionResolvers<ContextType>;
  BookmarkTagsConnection?: BookmarkTagsConnectionResolvers<ContextType>;
  BookmarkTagsRelationship?: BookmarkTagsRelationshipResolvers<ContextType>;
  BookmarksConnection?: BookmarksConnectionResolvers<ContextType>;
  Child?: ChildResolvers<ContextType>;
  ChildDl?: ChildDlResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  CollectionAggregateSelection?: CollectionAggregateSelectionResolvers<ContextType>;
  CollectionChildrenConnection?: CollectionChildrenConnectionResolvers<ContextType>;
  CollectionChildrenRelationship?: CollectionChildrenRelationshipResolvers<ContextType>;
  CollectionDs?: CollectionDsResolvers<ContextType>;
  CollectionDsAggregateSelection?: CollectionDsAggregateSelectionResolvers<ContextType>;
  CollectionDsConnection?: CollectionDsConnectionResolvers<ContextType>;
  CollectionDsEdge?: CollectionDsEdgeResolvers<ContextType>;
  CollectionDsList?: CollectionDsListResolvers<ContextType>;
  CollectionDsListAggregateSelection?: CollectionDsListAggregateSelectionResolvers<ContextType>;
  CollectionDsListEdge?: CollectionDsListEdgeResolvers<ContextType>;
  CollectionDsListsConnection?: CollectionDsListsConnectionResolvers<ContextType>;
  CollectionEdge?: CollectionEdgeResolvers<ContextType>;
  CollectionMemberConnection?: CollectionMemberConnectionResolvers<ContextType>;
  CollectionMemberMemberAggregationSelection?: CollectionMemberMemberAggregationSelectionResolvers<ContextType>;
  CollectionMemberMemberNodeAggregateSelection?: CollectionMemberMemberNodeAggregateSelectionResolvers<ContextType>;
  CollectionMemberRelationship?: CollectionMemberRelationshipResolvers<ContextType>;
  CollectionParentMetaConnection?: CollectionParentMetaConnectionResolvers<ContextType>;
  CollectionParentMetaParentMetaAggregationSelection?: CollectionParentMetaParentMetaAggregationSelectionResolvers<ContextType>;
  CollectionParentMetaParentMetaNodeAggregateSelection?: CollectionParentMetaParentMetaNodeAggregateSelectionResolvers<ContextType>;
  CollectionParentMetaRelationship?: CollectionParentMetaRelationshipResolvers<ContextType>;
  CollectionsConnection?: CollectionsConnectionResolvers<ContextType>;
  CreateBmsContainersMutationResponse?: CreateBmsContainersMutationResponseResolvers<ContextType>;
  CreateBmsPagedsMutationResponse?: CreateBmsPagedsMutationResponseResolvers<ContextType>;
  CreateBookmarkDlsMutationResponse?: CreateBookmarkDlsMutationResponseResolvers<ContextType>;
  CreateBookmarkFiltersMutationResponse?: CreateBookmarkFiltersMutationResponseResolvers<ContextType>;
  CreateBookmarksMutationResponse?: CreateBookmarksMutationResponseResolvers<ContextType>;
  CreateCollectionDsListsMutationResponse?: CreateCollectionDsListsMutationResponseResolvers<ContextType>;
  CreateCollectionDsMutationResponse?: CreateCollectionDsMutationResponseResolvers<ContextType>;
  CreateCollectionsMutationResponse?: CreateCollectionsMutationResponseResolvers<ContextType>;
  CreateFolderDlsMutationResponse?: CreateFolderDlsMutationResponseResolvers<ContextType>;
  CreateFoldersMutationResponse?: CreateFoldersMutationResponseResolvers<ContextType>;
  CreateInfo?: CreateInfoResolvers<ContextType>;
  CreateMemberMetasMutationResponse?: CreateMemberMetasMutationResponseResolvers<ContextType>;
  CreateMembersMutationResponse?: CreateMembersMutationResponseResolvers<ContextType>;
  CreateParentMetasMutationResponse?: CreateParentMetasMutationResponseResolvers<ContextType>;
  CreateParentsChildrenMutationResponse?: CreateParentsChildrenMutationResponseResolvers<ContextType>;
  CreateTagDsMutationResponse?: CreateTagDsMutationResponseResolvers<ContextType>;
  CreateTagsMutationResponse?: CreateTagsMutationResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DateTimeAggregateSelectionNullable?: DateTimeAggregateSelectionNullableResolvers<ContextType>;
  DeleteInfo?: DeleteInfoResolvers<ContextType>;
  Folder?: FolderResolvers<ContextType>;
  FolderAggregateSelection?: FolderAggregateSelectionResolvers<ContextType>;
  FolderChildrenConnection?: FolderChildrenConnectionResolvers<ContextType>;
  FolderChildrenRelationship?: FolderChildrenRelationshipResolvers<ContextType>;
  FolderDl?: FolderDlResolvers<ContextType>;
  FolderDlAggregateSelection?: FolderDlAggregateSelectionResolvers<ContextType>;
  FolderDlEdge?: FolderDlEdgeResolvers<ContextType>;
  FolderDlsConnection?: FolderDlsConnectionResolvers<ContextType>;
  FolderEdge?: FolderEdgeResolvers<ContextType>;
  FolderParentConnection?: FolderParentConnectionResolvers<ContextType>;
  FolderParentMetaConnection?: FolderParentMetaConnectionResolvers<ContextType>;
  FolderParentMetaParentMetaAggregationSelection?: FolderParentMetaParentMetaAggregationSelectionResolvers<ContextType>;
  FolderParentMetaParentMetaNodeAggregateSelection?: FolderParentMetaParentMetaNodeAggregateSelectionResolvers<ContextType>;
  FolderParentMetaRelationship?: FolderParentMetaRelationshipResolvers<ContextType>;
  FolderParentRelationship?: FolderParentRelationshipResolvers<ContextType>;
  FoldersConnection?: FoldersConnectionResolvers<ContextType>;
  IDAggregateSelectionNonNullable?: IdAggregateSelectionNonNullableResolvers<ContextType>;
  IntAggregateSelectionNonNullable?: IntAggregateSelectionNonNullableResolvers<ContextType>;
  IntAggregateSelectionNullable?: IntAggregateSelectionNullableResolvers<ContextType>;
  Member?: MemberResolvers<ContextType>;
  MemberAggregateSelection?: MemberAggregateSelectionResolvers<ContextType>;
  MemberBmFiltersConnection?: MemberBmFiltersConnectionResolvers<ContextType>;
  MemberBmFiltersRelationship?: MemberBmFiltersRelationshipResolvers<ContextType>;
  MemberBmsContainerBmsContainerAggregationSelection?: MemberBmsContainerBmsContainerAggregationSelectionResolvers<ContextType>;
  MemberBmsContainerBmsContainerNodeAggregateSelection?: MemberBmsContainerBmsContainerNodeAggregateSelectionResolvers<ContextType>;
  MemberBmsContainerConnection?: MemberBmsContainerConnectionResolvers<ContextType>;
  MemberBmsContainerRelationship?: MemberBmsContainerRelationshipResolvers<ContextType>;
  MemberBookmarkFilterBmFiltersAggregationSelection?: MemberBookmarkFilterBmFiltersAggregationSelectionResolvers<ContextType>;
  MemberBookmarkFilterBmFiltersNodeAggregateSelection?: MemberBookmarkFilterBmFiltersNodeAggregateSelectionResolvers<ContextType>;
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
  ParentMeta?: ParentMetaResolvers<ContextType>;
  ParentMetaAggregateSelection?: ParentMetaAggregateSelectionResolvers<ContextType>;
  ParentMetaEdge?: ParentMetaEdgeResolvers<ContextType>;
  ParentMetaParentConnection?: ParentMetaParentConnectionResolvers<ContextType>;
  ParentMetaParentRelationship?: ParentMetaParentRelationshipResolvers<ContextType>;
  ParentMetasConnection?: ParentMetasConnectionResolvers<ContextType>;
  ParentsChildren?: ParentsChildrenResolvers<ContextType>;
  ParentsChildrenAggregateSelection?: ParentsChildrenAggregateSelectionResolvers<ContextType>;
  ParentsChildrenConnection?: ParentsChildrenConnectionResolvers<ContextType>;
  ParentsChildrenEdge?: ParentsChildrenEdgeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StringAggregateSelectionNonNullable?: StringAggregateSelectionNonNullableResolvers<ContextType>;
  StringAggregateSelectionNullable?: StringAggregateSelectionNullableResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  TagAggregateSelection?: TagAggregateSelectionResolvers<ContextType>;
  TagBookmarkBookmarksAggregationSelection?: TagBookmarkBookmarksAggregationSelectionResolvers<ContextType>;
  TagBookmarkBookmarksNodeAggregateSelection?: TagBookmarkBookmarksNodeAggregateSelectionResolvers<ContextType>;
  TagBookmarksConnection?: TagBookmarksConnectionResolvers<ContextType>;
  TagBookmarksRelationship?: TagBookmarksRelationshipResolvers<ContextType>;
  TagDs?: TagDsResolvers<ContextType>;
  TagDsAggregateSelection?: TagDsAggregateSelectionResolvers<ContextType>;
  TagDsConnection?: TagDsConnectionResolvers<ContextType>;
  TagDsEdge?: TagDsEdgeResolvers<ContextType>;
  TagEdge?: TagEdgeResolvers<ContextType>;
  TagsConnection?: TagsConnectionResolvers<ContextType>;
  UpdateBmsContainersMutationResponse?: UpdateBmsContainersMutationResponseResolvers<ContextType>;
  UpdateBmsPagedsMutationResponse?: UpdateBmsPagedsMutationResponseResolvers<ContextType>;
  UpdateBookmarkDlsMutationResponse?: UpdateBookmarkDlsMutationResponseResolvers<ContextType>;
  UpdateBookmarkFiltersMutationResponse?: UpdateBookmarkFiltersMutationResponseResolvers<ContextType>;
  UpdateBookmarksMutationResponse?: UpdateBookmarksMutationResponseResolvers<ContextType>;
  UpdateCollectionDsListsMutationResponse?: UpdateCollectionDsListsMutationResponseResolvers<ContextType>;
  UpdateCollectionDsMutationResponse?: UpdateCollectionDsMutationResponseResolvers<ContextType>;
  UpdateCollectionsMutationResponse?: UpdateCollectionsMutationResponseResolvers<ContextType>;
  UpdateFolderDlsMutationResponse?: UpdateFolderDlsMutationResponseResolvers<ContextType>;
  UpdateFoldersMutationResponse?: UpdateFoldersMutationResponseResolvers<ContextType>;
  UpdateInfo?: UpdateInfoResolvers<ContextType>;
  UpdateMemberMetasMutationResponse?: UpdateMemberMetasMutationResponseResolvers<ContextType>;
  UpdateMembersMutationResponse?: UpdateMembersMutationResponseResolvers<ContextType>;
  UpdateParentMetasMutationResponse?: UpdateParentMetasMutationResponseResolvers<ContextType>;
  UpdateParentsChildrenMutationResponse?: UpdateParentsChildrenMutationResponseResolvers<ContextType>;
  UpdateTagDsMutationResponse?: UpdateTagDsMutationResponseResolvers<ContextType>;
  UpdateTagsMutationResponse?: UpdateTagsMutationResponseResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


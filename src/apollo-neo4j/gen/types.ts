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

export type BmLooseContainer = Parent & {
  __typename?: 'BmLooseContainer';
  bookmarks: Array<Bookmark>;
  bookmarksAggregate?: Maybe<BmLooseContainerBookmarkBookmarksAggregationSelection>;
  bookmarksConnection: BmLooseContainerBookmarksConnection;
  id: Scalars['ID']['output'];
  member: Member;
  memberAggregate?: Maybe<BmLooseContainerMemberMemberAggregationSelection>;
  memberConnection: BmLooseContainerMemberConnection;
};


export type BmLooseContainerBookmarksArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<BookmarkOptions>;
  where?: InputMaybe<BookmarkWhere>;
};


export type BmLooseContainerBookmarksAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BookmarkWhere>;
};


export type BmLooseContainerBookmarksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BmLooseContainerBookmarksConnectionSort>>;
  where?: InputMaybe<BmLooseContainerBookmarksConnectionWhere>;
};


export type BmLooseContainerMemberArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<MemberOptions>;
  where?: InputMaybe<MemberWhere>;
};


export type BmLooseContainerMemberAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MemberWhere>;
};


export type BmLooseContainerMemberConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BmLooseContainerMemberConnectionSort>>;
  where?: InputMaybe<BmLooseContainerMemberConnectionWhere>;
};

export type BmLooseContainerAggregateSelection = {
  __typename?: 'BmLooseContainerAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelection;
};

export type BmLooseContainerBookmarkBookmarksAggregationSelection = {
  __typename?: 'BmLooseContainerBookmarkBookmarksAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<BmLooseContainerBookmarkBookmarksNodeAggregateSelection>;
};

export type BmLooseContainerBookmarkBookmarksNodeAggregateSelection = {
  __typename?: 'BmLooseContainerBookmarkBookmarksNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  description: StringAggregateSelection;
  domainName: StringAggregateSelection;
  iconUri: StringAggregateSelection;
  id: IdAggregateSelection;
  linkPath: StringAggregateSelection;
  name: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
  urlScheme: StringAggregateSelection;
};

export type BmLooseContainerBookmarksAggregateInput = {
  AND?: InputMaybe<Array<BmLooseContainerBookmarksAggregateInput>>;
  NOT?: InputMaybe<BmLooseContainerBookmarksAggregateInput>;
  OR?: InputMaybe<Array<BmLooseContainerBookmarksAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<BmLooseContainerBookmarksNodeAggregationWhereInput>;
};

export type BmLooseContainerBookmarksConnectFieldInput = {
  connect?: InputMaybe<Array<BookmarkConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<BookmarkConnectWhere>;
};

export type BmLooseContainerBookmarksConnectOrCreateFieldInput = {
  onCreate: BmLooseContainerBookmarksConnectOrCreateFieldInputOnCreate;
  where: BookmarkConnectOrCreateWhere;
};

export type BmLooseContainerBookmarksConnectOrCreateFieldInputOnCreate = {
  node: BookmarkOnCreateInput;
};

export type BmLooseContainerBookmarksConnection = {
  __typename?: 'BmLooseContainerBookmarksConnection';
  edges: Array<BmLooseContainerBookmarksRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BmLooseContainerBookmarksConnectionSort = {
  node?: InputMaybe<BookmarkSort>;
};

export type BmLooseContainerBookmarksConnectionWhere = {
  AND?: InputMaybe<Array<BmLooseContainerBookmarksConnectionWhere>>;
  NOT?: InputMaybe<BmLooseContainerBookmarksConnectionWhere>;
  OR?: InputMaybe<Array<BmLooseContainerBookmarksConnectionWhere>>;
  node?: InputMaybe<BookmarkWhere>;
};

export type BmLooseContainerBookmarksCreateFieldInput = {
  node: BookmarkCreateInput;
};

export type BmLooseContainerBookmarksDeleteFieldInput = {
  delete?: InputMaybe<BookmarkDeleteInput>;
  where?: InputMaybe<BmLooseContainerBookmarksConnectionWhere>;
};

export type BmLooseContainerBookmarksDisconnectFieldInput = {
  disconnect?: InputMaybe<BookmarkDisconnectInput>;
  where?: InputMaybe<BmLooseContainerBookmarksConnectionWhere>;
};

export type BmLooseContainerBookmarksFieldInput = {
  connect?: InputMaybe<Array<BmLooseContainerBookmarksConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<BmLooseContainerBookmarksConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<BmLooseContainerBookmarksCreateFieldInput>>;
};

export type BmLooseContainerBookmarksNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BmLooseContainerBookmarksNodeAggregationWhereInput>>;
  NOT?: InputMaybe<BmLooseContainerBookmarksNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<BmLooseContainerBookmarksNodeAggregationWhereInput>>;
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

export type BmLooseContainerBookmarksRelationship = {
  __typename?: 'BmLooseContainerBookmarksRelationship';
  cursor: Scalars['String']['output'];
  node: Bookmark;
};

export type BmLooseContainerBookmarksUpdateConnectionInput = {
  node?: InputMaybe<BookmarkUpdateInput>;
};

export type BmLooseContainerBookmarksUpdateFieldInput = {
  connect?: InputMaybe<Array<BmLooseContainerBookmarksConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<BmLooseContainerBookmarksConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<BmLooseContainerBookmarksCreateFieldInput>>;
  delete?: InputMaybe<Array<BmLooseContainerBookmarksDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<BmLooseContainerBookmarksDisconnectFieldInput>>;
  update?: InputMaybe<BmLooseContainerBookmarksUpdateConnectionInput>;
  where?: InputMaybe<BmLooseContainerBookmarksConnectionWhere>;
};

export type BmLooseContainerConnectInput = {
  bookmarks?: InputMaybe<Array<BmLooseContainerBookmarksConnectFieldInput>>;
  member?: InputMaybe<BmLooseContainerMemberConnectFieldInput>;
};

export type BmLooseContainerConnectOrCreateInput = {
  bookmarks?: InputMaybe<Array<BmLooseContainerBookmarksConnectOrCreateFieldInput>>;
  member?: InputMaybe<BmLooseContainerMemberConnectOrCreateFieldInput>;
};

export type BmLooseContainerConnectOrCreateWhere = {
  node: BmLooseContainerUniqueWhere;
};

export type BmLooseContainerConnectWhere = {
  node: BmLooseContainerWhere;
};

export type BmLooseContainerCreateInput = {
  bookmarks?: InputMaybe<BmLooseContainerBookmarksFieldInput>;
  member?: InputMaybe<BmLooseContainerMemberFieldInput>;
};

export type BmLooseContainerDeleteInput = {
  bookmarks?: InputMaybe<Array<BmLooseContainerBookmarksDeleteFieldInput>>;
  member?: InputMaybe<BmLooseContainerMemberDeleteFieldInput>;
};

export type BmLooseContainerDisconnectInput = {
  bookmarks?: InputMaybe<Array<BmLooseContainerBookmarksDisconnectFieldInput>>;
  member?: InputMaybe<BmLooseContainerMemberDisconnectFieldInput>;
};

export type BmLooseContainerEdge = {
  __typename?: 'BmLooseContainerEdge';
  cursor: Scalars['String']['output'];
  node: BmLooseContainer;
};

export type BmLooseContainerMemberAggregateInput = {
  AND?: InputMaybe<Array<BmLooseContainerMemberAggregateInput>>;
  NOT?: InputMaybe<BmLooseContainerMemberAggregateInput>;
  OR?: InputMaybe<Array<BmLooseContainerMemberAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<BmLooseContainerMemberNodeAggregationWhereInput>;
};

export type BmLooseContainerMemberConnectFieldInput = {
  connect?: InputMaybe<MemberConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<MemberConnectWhere>;
};

export type BmLooseContainerMemberConnectOrCreateFieldInput = {
  onCreate: BmLooseContainerMemberConnectOrCreateFieldInputOnCreate;
  where: MemberConnectOrCreateWhere;
};

export type BmLooseContainerMemberConnectOrCreateFieldInputOnCreate = {
  node: MemberOnCreateInput;
};

export type BmLooseContainerMemberConnection = {
  __typename?: 'BmLooseContainerMemberConnection';
  edges: Array<BmLooseContainerMemberRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BmLooseContainerMemberConnectionSort = {
  node?: InputMaybe<MemberSort>;
};

export type BmLooseContainerMemberConnectionWhere = {
  AND?: InputMaybe<Array<BmLooseContainerMemberConnectionWhere>>;
  NOT?: InputMaybe<BmLooseContainerMemberConnectionWhere>;
  OR?: InputMaybe<Array<BmLooseContainerMemberConnectionWhere>>;
  node?: InputMaybe<MemberWhere>;
};

export type BmLooseContainerMemberCreateFieldInput = {
  node: MemberCreateInput;
};

export type BmLooseContainerMemberDeleteFieldInput = {
  delete?: InputMaybe<MemberDeleteInput>;
  where?: InputMaybe<BmLooseContainerMemberConnectionWhere>;
};

export type BmLooseContainerMemberDisconnectFieldInput = {
  disconnect?: InputMaybe<MemberDisconnectInput>;
  where?: InputMaybe<BmLooseContainerMemberConnectionWhere>;
};

export type BmLooseContainerMemberFieldInput = {
  connect?: InputMaybe<BmLooseContainerMemberConnectFieldInput>;
  connectOrCreate?: InputMaybe<BmLooseContainerMemberConnectOrCreateFieldInput>;
  create?: InputMaybe<BmLooseContainerMemberCreateFieldInput>;
};

export type BmLooseContainerMemberMemberAggregationSelection = {
  __typename?: 'BmLooseContainerMemberMemberAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<BmLooseContainerMemberMemberNodeAggregateSelection>;
};

export type BmLooseContainerMemberMemberNodeAggregateSelection = {
  __typename?: 'BmLooseContainerMemberMemberNodeAggregateSelection';
  id: IdAggregateSelection;
  memberName: StringAggregateSelection;
  passwordHash: StringAggregateSelection;
};

export type BmLooseContainerMemberNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BmLooseContainerMemberNodeAggregationWhereInput>>;
  NOT?: InputMaybe<BmLooseContainerMemberNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<BmLooseContainerMemberNodeAggregationWhereInput>>;
  memberName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  memberName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type BmLooseContainerMemberRelationship = {
  __typename?: 'BmLooseContainerMemberRelationship';
  cursor: Scalars['String']['output'];
  node: Member;
};

export type BmLooseContainerMemberUpdateConnectionInput = {
  node?: InputMaybe<MemberUpdateInput>;
};

export type BmLooseContainerMemberUpdateFieldInput = {
  connect?: InputMaybe<BmLooseContainerMemberConnectFieldInput>;
  connectOrCreate?: InputMaybe<BmLooseContainerMemberConnectOrCreateFieldInput>;
  create?: InputMaybe<BmLooseContainerMemberCreateFieldInput>;
  delete?: InputMaybe<BmLooseContainerMemberDeleteFieldInput>;
  disconnect?: InputMaybe<BmLooseContainerMemberDisconnectFieldInput>;
  update?: InputMaybe<BmLooseContainerMemberUpdateConnectionInput>;
  where?: InputMaybe<BmLooseContainerMemberConnectionWhere>;
};

export type BmLooseContainerOnCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BmLooseContainerOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more BmLooseContainerSort objects to sort BmLooseContainers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<BmLooseContainerSort>>;
};

export type BmLooseContainerRelationInput = {
  bookmarks?: InputMaybe<Array<BmLooseContainerBookmarksCreateFieldInput>>;
  member?: InputMaybe<BmLooseContainerMemberCreateFieldInput>;
};

/** Fields to sort BmLooseContainers by. The order in which sorts are applied is not guaranteed when specifying many fields in one BmLooseContainerSort object. */
export type BmLooseContainerSort = {
  id?: InputMaybe<SortDirection>;
};

export type BmLooseContainerUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BmLooseContainerUpdateInput = {
  bookmarks?: InputMaybe<Array<BmLooseContainerBookmarksUpdateFieldInput>>;
  member?: InputMaybe<BmLooseContainerMemberUpdateFieldInput>;
};

export type BmLooseContainerWhere = {
  AND?: InputMaybe<Array<BmLooseContainerWhere>>;
  NOT?: InputMaybe<BmLooseContainerWhere>;
  OR?: InputMaybe<Array<BmLooseContainerWhere>>;
  bookmarksAggregate?: InputMaybe<BmLooseContainerBookmarksAggregateInput>;
  /** Return BmLooseContainers where all of the related BmLooseContainerBookmarksConnections match this filter */
  bookmarksConnection_ALL?: InputMaybe<BmLooseContainerBookmarksConnectionWhere>;
  /** Return BmLooseContainers where none of the related BmLooseContainerBookmarksConnections match this filter */
  bookmarksConnection_NONE?: InputMaybe<BmLooseContainerBookmarksConnectionWhere>;
  /** Return BmLooseContainers where one of the related BmLooseContainerBookmarksConnections match this filter */
  bookmarksConnection_SINGLE?: InputMaybe<BmLooseContainerBookmarksConnectionWhere>;
  /** Return BmLooseContainers where some of the related BmLooseContainerBookmarksConnections match this filter */
  bookmarksConnection_SOME?: InputMaybe<BmLooseContainerBookmarksConnectionWhere>;
  /** Return BmLooseContainers where all of the related Bookmarks match this filter */
  bookmarks_ALL?: InputMaybe<BookmarkWhere>;
  /** Return BmLooseContainers where none of the related Bookmarks match this filter */
  bookmarks_NONE?: InputMaybe<BookmarkWhere>;
  /** Return BmLooseContainers where one of the related Bookmarks match this filter */
  bookmarks_SINGLE?: InputMaybe<BookmarkWhere>;
  /** Return BmLooseContainers where some of the related Bookmarks match this filter */
  bookmarks_SOME?: InputMaybe<BookmarkWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  member?: InputMaybe<MemberWhere>;
  memberAggregate?: InputMaybe<BmLooseContainerMemberAggregateInput>;
  memberConnection?: InputMaybe<BmLooseContainerMemberConnectionWhere>;
  memberConnection_NOT?: InputMaybe<BmLooseContainerMemberConnectionWhere>;
  member_NOT?: InputMaybe<MemberWhere>;
};

export type BmLooseContainersConnection = {
  __typename?: 'BmLooseContainersConnection';
  edges: Array<BmLooseContainerEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BmsPaged = {
  __typename?: 'BmsPaged';
  bookmarks: Array<BookmarkDl2>;
  totalCount: Scalars['Int']['output'];
};

export type BmsPagedAggregateSelection = {
  __typename?: 'BmsPagedAggregateSelection';
  count: Scalars['Int']['output'];
  totalCount: IntAggregateSelection;
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
  member: Member;
  memberAggregate?: Maybe<BookmarkMemberMemberAggregationSelection>;
  memberConnection: BookmarkMemberConnection;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Parent>;
  parentAggregate?: Maybe<BookmarkParentParentAggregationSelection>;
  parentConnection: BookmarkParentConnection;
  tags: Array<Tag>;
  tagsAggregate?: Maybe<BookmarkTagTagsAggregationSelection>;
  tagsConnection: BookmarkTagsConnection;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  urlScheme?: Maybe<Scalars['String']['output']>;
};


export type BookmarkMemberArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<MemberOptions>;
  where?: InputMaybe<MemberWhere>;
};


export type BookmarkMemberAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MemberWhere>;
};


export type BookmarkMemberConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BookmarkMemberConnectionSort>>;
  where?: InputMaybe<BookmarkMemberConnectionWhere>;
};


export type BookmarkParentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ParentOptions>;
  where?: InputMaybe<ParentWhere>;
};


export type BookmarkParentAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
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
  createdAt: DateTimeAggregateSelection;
  description: StringAggregateSelection;
  domainName: StringAggregateSelection;
  iconUri: StringAggregateSelection;
  id: IdAggregateSelection;
  linkPath: StringAggregateSelection;
  name: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
  urlScheme: StringAggregateSelection;
};

export type BookmarkConnectInput = {
  member?: InputMaybe<BookmarkMemberConnectFieldInput>;
  parent?: InputMaybe<BookmarkParentConnectFieldInput>;
  tags?: InputMaybe<Array<BookmarkTagsConnectFieldInput>>;
};

export type BookmarkConnectOrCreateInput = {
  member?: InputMaybe<BookmarkMemberConnectOrCreateFieldInput>;
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
  id: Scalars['ID']['input'];
  linkPath?: InputMaybe<Scalars['String']['input']>;
  member?: InputMaybe<BookmarkMemberFieldInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<BookmarkParentFieldInput>;
  tags?: InputMaybe<BookmarkTagsFieldInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  urlScheme?: InputMaybe<Scalars['String']['input']>;
};

export type BookmarkDeleteInput = {
  member?: InputMaybe<BookmarkMemberDeleteFieldInput>;
  parent?: InputMaybe<BookmarkParentDeleteFieldInput>;
  tags?: InputMaybe<Array<BookmarkTagsDeleteFieldInput>>;
};

export type BookmarkDisconnectInput = {
  member?: InputMaybe<BookmarkMemberDisconnectFieldInput>;
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

export type BookmarkDl2 = {
  __typename?: 'BookmarkDl2';
  collectionId?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  domainName: Scalars['String']['output'];
  iconUri?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  linkPath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['ID']['output']>;
  tags?: Maybe<Array<TagDs>>;
  urlScheme: Scalars['String']['output'];
};

export type BookmarkDl2AggregateSelection = {
  __typename?: 'BookmarkDl2AggregateSelection';
  collectionId: IdAggregateSelection;
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  domainName: StringAggregateSelection;
  iconUri: StringAggregateSelection;
  id: IdAggregateSelection;
  linkPath: StringAggregateSelection;
  name: StringAggregateSelection;
  parentId: IdAggregateSelection;
  urlScheme: StringAggregateSelection;
};

export type BookmarkDl2CreateInput = {
  collectionId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  domainName: Scalars['String']['input'];
  iconUri?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  linkPath: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  urlScheme: Scalars['String']['input'];
};

export type BookmarkDl2Edge = {
  __typename?: 'BookmarkDl2Edge';
  cursor: Scalars['String']['output'];
  node: BookmarkDl2;
};

export type BookmarkDl2Options = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more BookmarkDl2Sort objects to sort BookmarkDl2s by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<BookmarkDl2Sort>>;
};

/** Fields to sort BookmarkDl2s by. The order in which sorts are applied is not guaranteed when specifying many fields in one BookmarkDl2Sort object. */
export type BookmarkDl2Sort = {
  collectionId?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  domainName?: InputMaybe<SortDirection>;
  iconUri?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  linkPath?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  parentId?: InputMaybe<SortDirection>;
  urlScheme?: InputMaybe<SortDirection>;
};

export type BookmarkDl2UpdateInput = {
  collectionId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  domainName?: InputMaybe<Scalars['String']['input']>;
  iconUri?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  linkPath?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  urlScheme?: InputMaybe<Scalars['String']['input']>;
};

export type BookmarkDl2Where = {
  AND?: InputMaybe<Array<BookmarkDl2Where>>;
  NOT?: InputMaybe<BookmarkDl2Where>;
  OR?: InputMaybe<Array<BookmarkDl2Where>>;
  collectionId?: InputMaybe<Scalars['ID']['input']>;
  collectionId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  collectionId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  collectionId_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  collectionId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
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
  parentId?: InputMaybe<Scalars['ID']['input']>;
  parentId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  parentId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  parentId_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  urlScheme?: InputMaybe<Scalars['String']['input']>;
  urlScheme_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  urlScheme_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  urlScheme_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  urlScheme_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type BookmarkDl2sConnection = {
  __typename?: 'BookmarkDl2sConnection';
  edges: Array<BookmarkDl2Edge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BookmarkDlAggregateSelection = {
  __typename?: 'BookmarkDlAggregateSelection';
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  domainName: StringAggregateSelection;
  iconUri: StringAggregateSelection;
  id: IdAggregateSelection;
  linkPath: StringAggregateSelection;
  name: StringAggregateSelection;
  urlScheme: StringAggregateSelection;
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
  bmParentsTxt: StringAggregateSelection;
  bmTxt: StringAggregateSelection;
  bmUrl: StringAggregateSelection;
  count: Scalars['Int']['output'];
  createdAt: DateTimeAggregateSelection;
  description: StringAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  sortBy: StringAggregateSelection;
  sortDir: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  id: IdAggregateSelection;
  memberName: StringAggregateSelection;
  passwordHash: StringAggregateSelection;
};

export type BookmarkFilterMemberNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BookmarkFilterMemberNodeAggregationWhereInput>>;
  NOT?: InputMaybe<BookmarkFilterMemberNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<BookmarkFilterMemberNodeAggregationWhereInput>>;
  memberName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  memberName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  bmParents?: InputMaybe<Array<Scalars['ID']['input']>>;
  bmTags?: InputMaybe<Array<Scalars['ID']['input']>>;
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

export type BookmarkMemberAggregateInput = {
  AND?: InputMaybe<Array<BookmarkMemberAggregateInput>>;
  NOT?: InputMaybe<BookmarkMemberAggregateInput>;
  OR?: InputMaybe<Array<BookmarkMemberAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<BookmarkMemberNodeAggregationWhereInput>;
};

export type BookmarkMemberConnectFieldInput = {
  connect?: InputMaybe<MemberConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<MemberConnectWhere>;
};

export type BookmarkMemberConnectOrCreateFieldInput = {
  onCreate: BookmarkMemberConnectOrCreateFieldInputOnCreate;
  where: MemberConnectOrCreateWhere;
};

export type BookmarkMemberConnectOrCreateFieldInputOnCreate = {
  node: MemberOnCreateInput;
};

export type BookmarkMemberConnection = {
  __typename?: 'BookmarkMemberConnection';
  edges: Array<BookmarkMemberRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BookmarkMemberConnectionSort = {
  node?: InputMaybe<MemberSort>;
};

export type BookmarkMemberConnectionWhere = {
  AND?: InputMaybe<Array<BookmarkMemberConnectionWhere>>;
  NOT?: InputMaybe<BookmarkMemberConnectionWhere>;
  OR?: InputMaybe<Array<BookmarkMemberConnectionWhere>>;
  node?: InputMaybe<MemberWhere>;
};

export type BookmarkMemberCreateFieldInput = {
  node: MemberCreateInput;
};

export type BookmarkMemberDeleteFieldInput = {
  delete?: InputMaybe<MemberDeleteInput>;
  where?: InputMaybe<BookmarkMemberConnectionWhere>;
};

export type BookmarkMemberDisconnectFieldInput = {
  disconnect?: InputMaybe<MemberDisconnectInput>;
  where?: InputMaybe<BookmarkMemberConnectionWhere>;
};

export type BookmarkMemberFieldInput = {
  connect?: InputMaybe<BookmarkMemberConnectFieldInput>;
  connectOrCreate?: InputMaybe<BookmarkMemberConnectOrCreateFieldInput>;
  create?: InputMaybe<BookmarkMemberCreateFieldInput>;
};

export type BookmarkMemberMemberAggregationSelection = {
  __typename?: 'BookmarkMemberMemberAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<BookmarkMemberMemberNodeAggregateSelection>;
};

export type BookmarkMemberMemberNodeAggregateSelection = {
  __typename?: 'BookmarkMemberMemberNodeAggregateSelection';
  id: IdAggregateSelection;
  memberName: StringAggregateSelection;
  passwordHash: StringAggregateSelection;
};

export type BookmarkMemberNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BookmarkMemberNodeAggregationWhereInput>>;
  NOT?: InputMaybe<BookmarkMemberNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<BookmarkMemberNodeAggregationWhereInput>>;
  memberName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  memberName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type BookmarkMemberRelationship = {
  __typename?: 'BookmarkMemberRelationship';
  cursor: Scalars['String']['output'];
  node: Member;
};

export type BookmarkMemberUpdateConnectionInput = {
  node?: InputMaybe<MemberUpdateInput>;
};

export type BookmarkMemberUpdateFieldInput = {
  connect?: InputMaybe<BookmarkMemberConnectFieldInput>;
  connectOrCreate?: InputMaybe<BookmarkMemberConnectOrCreateFieldInput>;
  create?: InputMaybe<BookmarkMemberCreateFieldInput>;
  delete?: InputMaybe<BookmarkMemberDeleteFieldInput>;
  disconnect?: InputMaybe<BookmarkMemberDisconnectFieldInput>;
  update?: InputMaybe<BookmarkMemberUpdateConnectionInput>;
  where?: InputMaybe<BookmarkMemberConnectionWhere>;
};

export type BookmarkOnCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  domainName?: InputMaybe<Scalars['String']['input']>;
  iconUri?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  linkPath?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  urlScheme?: InputMaybe<Scalars['String']['input']>;
};

export type BookmarkOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more BookmarkSort objects to sort Bookmarks by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<BookmarkSort>>;
};

export type BookmarkParentAggregateInput = {
  AND?: InputMaybe<Array<BookmarkParentAggregateInput>>;
  NOT?: InputMaybe<BookmarkParentAggregateInput>;
  OR?: InputMaybe<Array<BookmarkParentAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<BookmarkParentNodeAggregationWhereInput>;
};

export type BookmarkParentConnectFieldInput = {
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
  where?: InputMaybe<BookmarkParentConnectionWhere>;
};

export type BookmarkParentDisconnectFieldInput = {
  where?: InputMaybe<BookmarkParentConnectionWhere>;
};

export type BookmarkParentFieldInput = {
  connect?: InputMaybe<BookmarkParentConnectFieldInput>;
  create?: InputMaybe<BookmarkParentCreateFieldInput>;
};

export type BookmarkParentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BookmarkParentNodeAggregationWhereInput>>;
  NOT?: InputMaybe<BookmarkParentNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<BookmarkParentNodeAggregationWhereInput>>;
};

export type BookmarkParentParentAggregationSelection = {
  __typename?: 'BookmarkParentParentAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<BookmarkParentParentNodeAggregateSelection>;
};

export type BookmarkParentParentNodeAggregateSelection = {
  __typename?: 'BookmarkParentParentNodeAggregateSelection';
  id: IdAggregateSelection;
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
  member?: InputMaybe<BookmarkMemberCreateFieldInput>;
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
  createdAt: DateTimeAggregateSelection;
  description: StringAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  domainName?: InputMaybe<Scalars['String']['input']>;
  iconUri?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  linkPath?: InputMaybe<Scalars['String']['input']>;
  member?: InputMaybe<BookmarkMemberUpdateFieldInput>;
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
  member?: InputMaybe<MemberWhere>;
  memberAggregate?: InputMaybe<BookmarkMemberAggregateInput>;
  memberConnection?: InputMaybe<BookmarkMemberConnectionWhere>;
  memberConnection_NOT?: InputMaybe<BookmarkMemberConnectionWhere>;
  member_NOT?: InputMaybe<MemberWhere>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<ParentWhere>;
  parentAggregate?: InputMaybe<BookmarkParentAggregateInput>;
  parentConnection?: InputMaybe<BookmarkParentConnectionWhere>;
  parentConnection_NOT?: InputMaybe<BookmarkParentConnectionWhere>;
  parent_NOT?: InputMaybe<ParentWhere>;
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

export type ChildDlWhere = {
  BookmarkDl?: InputMaybe<BookmarkDlWhere>;
  FolderDl?: InputMaybe<FolderDlWhere>;
};

export type ChildWhere = {
  Bookmark?: InputMaybe<BookmarkWhere>;
  Folder?: InputMaybe<FolderWhere>;
};

export type ChildsToMove = {
  childIds: Array<Scalars['ID']['input']>;
  parentId: Scalars['ID']['input'];
};

export type CollBmCount = {
  __typename?: 'CollBmCount';
  bmCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
};

export type CollBmCountAggregateSelection = {
  __typename?: 'CollBmCountAggregateSelection';
  bmCount: IntAggregateSelection;
  count: Scalars['Int']['output'];
  id: IdAggregateSelection;
};

export type CollBmCountCreateInput = {
  bmCount: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
};

export type CollBmCountEdge = {
  __typename?: 'CollBmCountEdge';
  cursor: Scalars['String']['output'];
  node: CollBmCount;
};

export type CollBmCountOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CollBmCountSort objects to sort CollBmCounts by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CollBmCountSort>>;
};

/** Fields to sort CollBmCounts by. The order in which sorts are applied is not guaranteed when specifying many fields in one CollBmCountSort object. */
export type CollBmCountSort = {
  bmCount?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
};

export type CollBmCountUpdateInput = {
  bmCount?: InputMaybe<Scalars['Int']['input']>;
  bmCount_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  bmCount_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CollBmCountWhere = {
  AND?: InputMaybe<Array<CollBmCountWhere>>;
  NOT?: InputMaybe<CollBmCountWhere>;
  OR?: InputMaybe<Array<CollBmCountWhere>>;
  bmCount?: InputMaybe<Scalars['Int']['input']>;
  bmCount_GT?: InputMaybe<Scalars['Int']['input']>;
  bmCount_GTE?: InputMaybe<Scalars['Int']['input']>;
  bmCount_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  bmCount_LT?: InputMaybe<Scalars['Int']['input']>;
  bmCount_LTE?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
};

export type CollBmCountsConnection = {
  __typename?: 'CollBmCountsConnection';
  edges: Array<CollBmCountEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Collection = Parent & {
  __typename?: 'Collection';
  children: Array<Child>;
  childrenConnection: CollectionChildrenConnection;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  member: Member;
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
  createdAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
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
  id: Scalars['ID']['input'];
  member?: InputMaybe<CollectionMemberFieldInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentMeta?: InputMaybe<CollectionParentMetaFieldInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  bookmarkCount: IntAggregateSelection;
  count: Scalars['Int']['output'];
  deepness: IntAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
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
  id: IdAggregateSelection;
  memberName: StringAggregateSelection;
  passwordHash: StringAggregateSelection;
};

export type CollectionMemberNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CollectionMemberNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CollectionMemberNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CollectionMemberNodeAggregationWhereInput>>;
  memberName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  memberName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  id: IdAggregateSelection;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
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
  /** Return Collections where all of the related Children match this filter */
  children_ALL?: InputMaybe<ChildWhere>;
  /** Return Collections where none of the related Children match this filter */
  children_NONE?: InputMaybe<ChildWhere>;
  /** Return Collections where one of the related Children match this filter */
  children_SINGLE?: InputMaybe<ChildWhere>;
  /** Return Collections where some of the related Children match this filter */
  children_SOME?: InputMaybe<ChildWhere>;
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

export type CreateBmLooseContainersMutationResponse = {
  __typename?: 'CreateBmLooseContainersMutationResponse';
  bmLooseContainers: Array<BmLooseContainer>;
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

export type CreateBookmarkDl2sMutationResponse = {
  __typename?: 'CreateBookmarkDl2sMutationResponse';
  bookmarkDl2s: Array<BookmarkDl2>;
  info: CreateInfo;
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

export type CreateCollBmCountsMutationResponse = {
  __typename?: 'CreateCollBmCountsMutationResponse';
  collBmCounts: Array<CollBmCount>;
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

export type CreateParentDsMutationResponse = {
  __typename?: 'CreateParentDsMutationResponse';
  info: CreateInfo;
  parentDs: Array<ParentDs>;
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

export type CreateTagDlsMutationResponse = {
  __typename?: 'CreateTagDlsMutationResponse';
  info: CreateInfo;
  tagDls: Array<TagDl>;
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

export type DateTimeAggregateSelection = {
  __typename?: 'DateTimeAggregateSelection';
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
  member: Member;
  memberAggregate?: Maybe<FolderMemberMemberAggregationSelection>;
  memberConnection: FolderMemberConnection;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Parent>;
  parentAggregate?: Maybe<FolderParentParentAggregationSelection>;
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


export type FolderMemberArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<MemberOptions>;
  where?: InputMaybe<MemberWhere>;
};


export type FolderMemberAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MemberWhere>;
};


export type FolderMemberConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FolderMemberConnectionSort>>;
  where?: InputMaybe<FolderMemberConnectionWhere>;
};


export type FolderParentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ParentOptions>;
  where?: InputMaybe<ParentWhere>;
};


export type FolderParentAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
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
  createdAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
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
  member?: InputMaybe<FolderMemberConnectFieldInput>;
  parent?: InputMaybe<FolderParentConnectFieldInput>;
  parentMeta?: InputMaybe<FolderParentMetaConnectFieldInput>;
};

export type FolderConnectOrCreateInput = {
  children?: InputMaybe<FolderChildrenConnectOrCreateInput>;
  member?: InputMaybe<FolderMemberConnectOrCreateFieldInput>;
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
  id: Scalars['ID']['input'];
  member?: InputMaybe<FolderMemberFieldInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<FolderParentFieldInput>;
  parentMeta?: InputMaybe<FolderParentMetaFieldInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FolderDeleteInput = {
  children?: InputMaybe<FolderChildrenDeleteInput>;
  member?: InputMaybe<FolderMemberDeleteFieldInput>;
  parent?: InputMaybe<FolderParentDeleteFieldInput>;
  parentMeta?: InputMaybe<FolderParentMetaDeleteFieldInput>;
};

export type FolderDisconnectInput = {
  children?: InputMaybe<FolderChildrenDisconnectInput>;
  member?: InputMaybe<FolderMemberDisconnectFieldInput>;
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
  bookmarkCount: IntAggregateSelection;
  count: Scalars['Int']['output'];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
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

export type FolderMemberAggregateInput = {
  AND?: InputMaybe<Array<FolderMemberAggregateInput>>;
  NOT?: InputMaybe<FolderMemberAggregateInput>;
  OR?: InputMaybe<Array<FolderMemberAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<FolderMemberNodeAggregationWhereInput>;
};

export type FolderMemberConnectFieldInput = {
  connect?: InputMaybe<MemberConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<MemberConnectWhere>;
};

export type FolderMemberConnectOrCreateFieldInput = {
  onCreate: FolderMemberConnectOrCreateFieldInputOnCreate;
  where: MemberConnectOrCreateWhere;
};

export type FolderMemberConnectOrCreateFieldInputOnCreate = {
  node: MemberOnCreateInput;
};

export type FolderMemberConnection = {
  __typename?: 'FolderMemberConnection';
  edges: Array<FolderMemberRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FolderMemberConnectionSort = {
  node?: InputMaybe<MemberSort>;
};

export type FolderMemberConnectionWhere = {
  AND?: InputMaybe<Array<FolderMemberConnectionWhere>>;
  NOT?: InputMaybe<FolderMemberConnectionWhere>;
  OR?: InputMaybe<Array<FolderMemberConnectionWhere>>;
  node?: InputMaybe<MemberWhere>;
};

export type FolderMemberCreateFieldInput = {
  node: MemberCreateInput;
};

export type FolderMemberDeleteFieldInput = {
  delete?: InputMaybe<MemberDeleteInput>;
  where?: InputMaybe<FolderMemberConnectionWhere>;
};

export type FolderMemberDisconnectFieldInput = {
  disconnect?: InputMaybe<MemberDisconnectInput>;
  where?: InputMaybe<FolderMemberConnectionWhere>;
};

export type FolderMemberFieldInput = {
  connect?: InputMaybe<FolderMemberConnectFieldInput>;
  connectOrCreate?: InputMaybe<FolderMemberConnectOrCreateFieldInput>;
  create?: InputMaybe<FolderMemberCreateFieldInput>;
};

export type FolderMemberMemberAggregationSelection = {
  __typename?: 'FolderMemberMemberAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<FolderMemberMemberNodeAggregateSelection>;
};

export type FolderMemberMemberNodeAggregateSelection = {
  __typename?: 'FolderMemberMemberNodeAggregateSelection';
  id: IdAggregateSelection;
  memberName: StringAggregateSelection;
  passwordHash: StringAggregateSelection;
};

export type FolderMemberNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FolderMemberNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FolderMemberNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FolderMemberNodeAggregationWhereInput>>;
  memberName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  memberName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type FolderMemberRelationship = {
  __typename?: 'FolderMemberRelationship';
  cursor: Scalars['String']['output'];
  node: Member;
};

export type FolderMemberUpdateConnectionInput = {
  node?: InputMaybe<MemberUpdateInput>;
};

export type FolderMemberUpdateFieldInput = {
  connect?: InputMaybe<FolderMemberConnectFieldInput>;
  connectOrCreate?: InputMaybe<FolderMemberConnectOrCreateFieldInput>;
  create?: InputMaybe<FolderMemberCreateFieldInput>;
  delete?: InputMaybe<FolderMemberDeleteFieldInput>;
  disconnect?: InputMaybe<FolderMemberDisconnectFieldInput>;
  update?: InputMaybe<FolderMemberUpdateConnectionInput>;
  where?: InputMaybe<FolderMemberConnectionWhere>;
};

export type FolderOnCreateInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FolderOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more FolderSort objects to sort Folders by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<FolderSort>>;
};

export type FolderParentAggregateInput = {
  AND?: InputMaybe<Array<FolderParentAggregateInput>>;
  NOT?: InputMaybe<FolderParentAggregateInput>;
  OR?: InputMaybe<Array<FolderParentAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<FolderParentNodeAggregationWhereInput>;
};

export type FolderParentConnectFieldInput = {
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
  where?: InputMaybe<FolderParentConnectionWhere>;
};

export type FolderParentDisconnectFieldInput = {
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
  id: IdAggregateSelection;
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

export type FolderParentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FolderParentNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FolderParentNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FolderParentNodeAggregationWhereInput>>;
};

export type FolderParentParentAggregationSelection = {
  __typename?: 'FolderParentParentAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<FolderParentParentNodeAggregateSelection>;
};

export type FolderParentParentNodeAggregateSelection = {
  __typename?: 'FolderParentParentNodeAggregateSelection';
  id: IdAggregateSelection;
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
  member?: InputMaybe<FolderMemberCreateFieldInput>;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  member?: InputMaybe<FolderMemberUpdateFieldInput>;
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
  /** Return Folders where all of the related Children match this filter */
  children_ALL?: InputMaybe<ChildWhere>;
  /** Return Folders where none of the related Children match this filter */
  children_NONE?: InputMaybe<ChildWhere>;
  /** Return Folders where one of the related Children match this filter */
  children_SINGLE?: InputMaybe<ChildWhere>;
  /** Return Folders where some of the related Children match this filter */
  children_SOME?: InputMaybe<ChildWhere>;
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
  memberAggregate?: InputMaybe<FolderMemberAggregateInput>;
  memberConnection?: InputMaybe<FolderMemberConnectionWhere>;
  memberConnection_NOT?: InputMaybe<FolderMemberConnectionWhere>;
  member_NOT?: InputMaybe<MemberWhere>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<ParentWhere>;
  parentAggregate?: InputMaybe<FolderParentAggregateInput>;
  parentConnection?: InputMaybe<FolderParentConnectionWhere>;
  parentConnection_NOT?: InputMaybe<FolderParentConnectionWhere>;
  parentMeta?: InputMaybe<ParentMetaWhere>;
  parentMetaAggregate?: InputMaybe<FolderParentMetaAggregateInput>;
  parentMetaConnection?: InputMaybe<FolderParentMetaConnectionWhere>;
  parentMetaConnection_NOT?: InputMaybe<FolderParentMetaConnectionWhere>;
  parentMeta_NOT?: InputMaybe<ParentMetaWhere>;
  parent_NOT?: InputMaybe<ParentWhere>;
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

export type IdAggregateSelection = {
  __typename?: 'IDAggregateSelection';
  longest?: Maybe<Scalars['ID']['output']>;
  shortest?: Maybe<Scalars['ID']['output']>;
};

export type IntAggregateSelection = {
  __typename?: 'IntAggregateSelection';
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
  bmsContainer?: Maybe<BmLooseContainer>;
  bmsContainerAggregate?: Maybe<MemberBmLooseContainerBmsContainerAggregationSelection>;
  bmsContainerConnection: MemberBmsContainerConnection;
  bookmarks: Array<Bookmark>;
  bookmarksAggregate?: Maybe<MemberBookmarkBookmarksAggregationSelection>;
  bookmarksConnection: MemberBookmarksConnection;
  collections: Array<Collection>;
  collectionsAggregate?: Maybe<MemberCollectionCollectionsAggregationSelection>;
  collectionsConnection: MemberCollectionsConnection;
  folders: Array<Folder>;
  foldersAggregate?: Maybe<MemberFolderFoldersAggregationSelection>;
  foldersConnection: MemberFoldersConnection;
  id: Scalars['ID']['output'];
  memberMeta?: Maybe<MemberMeta>;
  memberMetaAggregate?: Maybe<MemberMemberMetaMemberMetaAggregationSelection>;
  memberMetaConnection: MemberMemberMetaConnection;
  memberName: Scalars['String']['output'];
  passwordHash: Scalars['String']['output'];
  roles: Array<Scalars['String']['output']>;
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
  options?: InputMaybe<BmLooseContainerOptions>;
  where?: InputMaybe<BmLooseContainerWhere>;
};


export type MemberBmsContainerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BmLooseContainerWhere>;
};


export type MemberBmsContainerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MemberBmsContainerConnectionSort>>;
  where?: InputMaybe<MemberBmsContainerConnectionWhere>;
};


export type MemberBookmarksArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<BookmarkOptions>;
  where?: InputMaybe<BookmarkWhere>;
};


export type MemberBookmarksAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BookmarkWhere>;
};


export type MemberBookmarksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MemberBookmarksConnectionSort>>;
  where?: InputMaybe<MemberBookmarksConnectionWhere>;
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


export type MemberFoldersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FolderOptions>;
  where?: InputMaybe<FolderWhere>;
};


export type MemberFoldersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FolderWhere>;
};


export type MemberFoldersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MemberFoldersConnectionSort>>;
  where?: InputMaybe<MemberFoldersConnectionWhere>;
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
  id: IdAggregateSelection;
  memberName: StringAggregateSelection;
  passwordHash: StringAggregateSelection;
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

export type MemberBmLooseContainerBmsContainerAggregationSelection = {
  __typename?: 'MemberBmLooseContainerBmsContainerAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MemberBmLooseContainerBmsContainerNodeAggregateSelection>;
};

export type MemberBmLooseContainerBmsContainerNodeAggregateSelection = {
  __typename?: 'MemberBmLooseContainerBmsContainerNodeAggregateSelection';
  id: IdAggregateSelection;
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

export type MemberBmsContainerConnectFieldInput = {
  connect?: InputMaybe<BmLooseContainerConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<BmLooseContainerConnectWhere>;
};

export type MemberBmsContainerConnectOrCreateFieldInput = {
  onCreate: MemberBmsContainerConnectOrCreateFieldInputOnCreate;
  where: BmLooseContainerConnectOrCreateWhere;
};

export type MemberBmsContainerConnectOrCreateFieldInputOnCreate = {
  node: BmLooseContainerOnCreateInput;
};

export type MemberBmsContainerConnection = {
  __typename?: 'MemberBmsContainerConnection';
  edges: Array<MemberBmsContainerRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MemberBmsContainerConnectionSort = {
  node?: InputMaybe<BmLooseContainerSort>;
};

export type MemberBmsContainerConnectionWhere = {
  AND?: InputMaybe<Array<MemberBmsContainerConnectionWhere>>;
  NOT?: InputMaybe<MemberBmsContainerConnectionWhere>;
  OR?: InputMaybe<Array<MemberBmsContainerConnectionWhere>>;
  node?: InputMaybe<BmLooseContainerWhere>;
};

export type MemberBmsContainerCreateFieldInput = {
  node: BmLooseContainerCreateInput;
};

export type MemberBmsContainerDeleteFieldInput = {
  delete?: InputMaybe<BmLooseContainerDeleteInput>;
  where?: InputMaybe<MemberBmsContainerConnectionWhere>;
};

export type MemberBmsContainerDisconnectFieldInput = {
  disconnect?: InputMaybe<BmLooseContainerDisconnectInput>;
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
  node: BmLooseContainer;
};

export type MemberBmsContainerUpdateConnectionInput = {
  node?: InputMaybe<BmLooseContainerUpdateInput>;
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

export type MemberBookmarkBookmarksAggregationSelection = {
  __typename?: 'MemberBookmarkBookmarksAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MemberBookmarkBookmarksNodeAggregateSelection>;
};

export type MemberBookmarkBookmarksNodeAggregateSelection = {
  __typename?: 'MemberBookmarkBookmarksNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  description: StringAggregateSelection;
  domainName: StringAggregateSelection;
  iconUri: StringAggregateSelection;
  id: IdAggregateSelection;
  linkPath: StringAggregateSelection;
  name: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
  urlScheme: StringAggregateSelection;
};

export type MemberBookmarkFilterBmFiltersAggregationSelection = {
  __typename?: 'MemberBookmarkFilterBmFiltersAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MemberBookmarkFilterBmFiltersNodeAggregateSelection>;
};

export type MemberBookmarkFilterBmFiltersNodeAggregateSelection = {
  __typename?: 'MemberBookmarkFilterBmFiltersNodeAggregateSelection';
  bmParentsTxt: StringAggregateSelection;
  bmTxt: StringAggregateSelection;
  bmUrl: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  description: StringAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  sortBy: StringAggregateSelection;
  sortDir: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type MemberBookmarksAggregateInput = {
  AND?: InputMaybe<Array<MemberBookmarksAggregateInput>>;
  NOT?: InputMaybe<MemberBookmarksAggregateInput>;
  OR?: InputMaybe<Array<MemberBookmarksAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<MemberBookmarksNodeAggregationWhereInput>;
};

export type MemberBookmarksConnectFieldInput = {
  connect?: InputMaybe<Array<BookmarkConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<BookmarkConnectWhere>;
};

export type MemberBookmarksConnectOrCreateFieldInput = {
  onCreate: MemberBookmarksConnectOrCreateFieldInputOnCreate;
  where: BookmarkConnectOrCreateWhere;
};

export type MemberBookmarksConnectOrCreateFieldInputOnCreate = {
  node: BookmarkOnCreateInput;
};

export type MemberBookmarksConnection = {
  __typename?: 'MemberBookmarksConnection';
  edges: Array<MemberBookmarksRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MemberBookmarksConnectionSort = {
  node?: InputMaybe<BookmarkSort>;
};

export type MemberBookmarksConnectionWhere = {
  AND?: InputMaybe<Array<MemberBookmarksConnectionWhere>>;
  NOT?: InputMaybe<MemberBookmarksConnectionWhere>;
  OR?: InputMaybe<Array<MemberBookmarksConnectionWhere>>;
  node?: InputMaybe<BookmarkWhere>;
};

export type MemberBookmarksCreateFieldInput = {
  node: BookmarkCreateInput;
};

export type MemberBookmarksDeleteFieldInput = {
  delete?: InputMaybe<BookmarkDeleteInput>;
  where?: InputMaybe<MemberBookmarksConnectionWhere>;
};

export type MemberBookmarksDisconnectFieldInput = {
  disconnect?: InputMaybe<BookmarkDisconnectInput>;
  where?: InputMaybe<MemberBookmarksConnectionWhere>;
};

export type MemberBookmarksFieldInput = {
  connect?: InputMaybe<Array<MemberBookmarksConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MemberBookmarksConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MemberBookmarksCreateFieldInput>>;
};

export type MemberBookmarksNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MemberBookmarksNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MemberBookmarksNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MemberBookmarksNodeAggregationWhereInput>>;
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

export type MemberBookmarksRelationship = {
  __typename?: 'MemberBookmarksRelationship';
  cursor: Scalars['String']['output'];
  node: Bookmark;
};

export type MemberBookmarksUpdateConnectionInput = {
  node?: InputMaybe<BookmarkUpdateInput>;
};

export type MemberBookmarksUpdateFieldInput = {
  connect?: InputMaybe<Array<MemberBookmarksConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MemberBookmarksConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MemberBookmarksCreateFieldInput>>;
  delete?: InputMaybe<Array<MemberBookmarksDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MemberBookmarksDisconnectFieldInput>>;
  update?: InputMaybe<MemberBookmarksUpdateConnectionInput>;
  where?: InputMaybe<MemberBookmarksConnectionWhere>;
};

export type MemberCollectionCollectionsAggregationSelection = {
  __typename?: 'MemberCollectionCollectionsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MemberCollectionCollectionsNodeAggregateSelection>;
};

export type MemberCollectionCollectionsNodeAggregateSelection = {
  __typename?: 'MemberCollectionCollectionsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
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
  bookmarks?: InputMaybe<Array<MemberBookmarksConnectFieldInput>>;
  collections?: InputMaybe<Array<MemberCollectionsConnectFieldInput>>;
  folders?: InputMaybe<Array<MemberFoldersConnectFieldInput>>;
  memberMeta?: InputMaybe<MemberMemberMetaConnectFieldInput>;
};

export type MemberConnectOrCreateInput = {
  bmFilters?: InputMaybe<Array<MemberBmFiltersConnectOrCreateFieldInput>>;
  bmsContainer?: InputMaybe<MemberBmsContainerConnectOrCreateFieldInput>;
  bookmarks?: InputMaybe<Array<MemberBookmarksConnectOrCreateFieldInput>>;
  collections?: InputMaybe<Array<MemberCollectionsConnectOrCreateFieldInput>>;
  folders?: InputMaybe<Array<MemberFoldersConnectOrCreateFieldInput>>;
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
  bookmarks?: InputMaybe<MemberBookmarksFieldInput>;
  collections?: InputMaybe<MemberCollectionsFieldInput>;
  folders?: InputMaybe<MemberFoldersFieldInput>;
  memberMeta?: InputMaybe<MemberMemberMetaFieldInput>;
  memberName: Scalars['String']['input'];
  passwordHash: Scalars['String']['input'];
  roles: Array<Scalars['String']['input']>;
};

export type MemberDeleteInput = {
  bmFilters?: InputMaybe<Array<MemberBmFiltersDeleteFieldInput>>;
  bmsContainer?: InputMaybe<MemberBmsContainerDeleteFieldInput>;
  bookmarks?: InputMaybe<Array<MemberBookmarksDeleteFieldInput>>;
  collections?: InputMaybe<Array<MemberCollectionsDeleteFieldInput>>;
  folders?: InputMaybe<Array<MemberFoldersDeleteFieldInput>>;
  memberMeta?: InputMaybe<MemberMemberMetaDeleteFieldInput>;
};

export type MemberDisconnectInput = {
  bmFilters?: InputMaybe<Array<MemberBmFiltersDisconnectFieldInput>>;
  bmsContainer?: InputMaybe<MemberBmsContainerDisconnectFieldInput>;
  bookmarks?: InputMaybe<Array<MemberBookmarksDisconnectFieldInput>>;
  collections?: InputMaybe<Array<MemberCollectionsDisconnectFieldInput>>;
  folders?: InputMaybe<Array<MemberFoldersDisconnectFieldInput>>;
  memberMeta?: InputMaybe<MemberMemberMetaDisconnectFieldInput>;
};

export type MemberEdge = {
  __typename?: 'MemberEdge';
  cursor: Scalars['String']['output'];
  node: Member;
};

export type MemberFolderFoldersAggregationSelection = {
  __typename?: 'MemberFolderFoldersAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MemberFolderFoldersNodeAggregateSelection>;
};

export type MemberFolderFoldersNodeAggregateSelection = {
  __typename?: 'MemberFolderFoldersNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type MemberFoldersAggregateInput = {
  AND?: InputMaybe<Array<MemberFoldersAggregateInput>>;
  NOT?: InputMaybe<MemberFoldersAggregateInput>;
  OR?: InputMaybe<Array<MemberFoldersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<MemberFoldersNodeAggregationWhereInput>;
};

export type MemberFoldersConnectFieldInput = {
  connect?: InputMaybe<Array<FolderConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<FolderConnectWhere>;
};

export type MemberFoldersConnectOrCreateFieldInput = {
  onCreate: MemberFoldersConnectOrCreateFieldInputOnCreate;
  where: FolderConnectOrCreateWhere;
};

export type MemberFoldersConnectOrCreateFieldInputOnCreate = {
  node: FolderOnCreateInput;
};

export type MemberFoldersConnection = {
  __typename?: 'MemberFoldersConnection';
  edges: Array<MemberFoldersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MemberFoldersConnectionSort = {
  node?: InputMaybe<FolderSort>;
};

export type MemberFoldersConnectionWhere = {
  AND?: InputMaybe<Array<MemberFoldersConnectionWhere>>;
  NOT?: InputMaybe<MemberFoldersConnectionWhere>;
  OR?: InputMaybe<Array<MemberFoldersConnectionWhere>>;
  node?: InputMaybe<FolderWhere>;
};

export type MemberFoldersCreateFieldInput = {
  node: FolderCreateInput;
};

export type MemberFoldersDeleteFieldInput = {
  delete?: InputMaybe<FolderDeleteInput>;
  where?: InputMaybe<MemberFoldersConnectionWhere>;
};

export type MemberFoldersDisconnectFieldInput = {
  disconnect?: InputMaybe<FolderDisconnectInput>;
  where?: InputMaybe<MemberFoldersConnectionWhere>;
};

export type MemberFoldersFieldInput = {
  connect?: InputMaybe<Array<MemberFoldersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MemberFoldersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MemberFoldersCreateFieldInput>>;
};

export type MemberFoldersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MemberFoldersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MemberFoldersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MemberFoldersNodeAggregationWhereInput>>;
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

export type MemberFoldersRelationship = {
  __typename?: 'MemberFoldersRelationship';
  cursor: Scalars['String']['output'];
  node: Folder;
};

export type MemberFoldersUpdateConnectionInput = {
  node?: InputMaybe<FolderUpdateInput>;
};

export type MemberFoldersUpdateFieldInput = {
  connect?: InputMaybe<Array<MemberFoldersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MemberFoldersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MemberFoldersCreateFieldInput>>;
  delete?: InputMaybe<Array<MemberFoldersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MemberFoldersDisconnectFieldInput>>;
  update?: InputMaybe<MemberFoldersUpdateConnectionInput>;
  where?: InputMaybe<MemberFoldersConnectionWhere>;
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
  id: IdAggregateSelection;
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
  id: IdAggregateSelection;
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
  id: IdAggregateSelection;
  memberName: StringAggregateSelection;
  passwordHash: StringAggregateSelection;
};

export type MemberMetaMemberNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MemberMetaMemberNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MemberMetaMemberNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MemberMetaMemberNodeAggregationWhereInput>>;
  memberName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  memberName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  memberName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  memberName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  memberName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  passwordHash_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  passwordHash_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  memberName: Scalars['String']['input'];
  passwordHash: Scalars['String']['input'];
  roles: Array<Scalars['String']['input']>;
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
  bookmarks?: InputMaybe<Array<MemberBookmarksCreateFieldInput>>;
  collections?: InputMaybe<Array<MemberCollectionsCreateFieldInput>>;
  folders?: InputMaybe<Array<MemberFoldersCreateFieldInput>>;
  memberMeta?: InputMaybe<MemberMemberMetaCreateFieldInput>;
};

/** Fields to sort Members by. The order in which sorts are applied is not guaranteed when specifying many fields in one MemberSort object. */
export type MemberSort = {
  id?: InputMaybe<SortDirection>;
  memberName?: InputMaybe<SortDirection>;
  passwordHash?: InputMaybe<SortDirection>;
};

export type MemberUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
  memberName?: InputMaybe<Scalars['String']['input']>;
};

export type MemberUpdateInput = {
  bmFilters?: InputMaybe<Array<MemberBmFiltersUpdateFieldInput>>;
  bmsContainer?: InputMaybe<MemberBmsContainerUpdateFieldInput>;
  bookmarks?: InputMaybe<Array<MemberBookmarksUpdateFieldInput>>;
  collections?: InputMaybe<Array<MemberCollectionsUpdateFieldInput>>;
  folders?: InputMaybe<Array<MemberFoldersUpdateFieldInput>>;
  memberMeta?: InputMaybe<MemberMemberMetaUpdateFieldInput>;
  memberName?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
  roles_POP?: InputMaybe<Scalars['Int']['input']>;
  roles_PUSH?: InputMaybe<Array<Scalars['String']['input']>>;
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
  bmsContainer?: InputMaybe<BmLooseContainerWhere>;
  bmsContainerAggregate?: InputMaybe<MemberBmsContainerAggregateInput>;
  bmsContainerConnection?: InputMaybe<MemberBmsContainerConnectionWhere>;
  bmsContainerConnection_NOT?: InputMaybe<MemberBmsContainerConnectionWhere>;
  bmsContainer_NOT?: InputMaybe<BmLooseContainerWhere>;
  bookmarksAggregate?: InputMaybe<MemberBookmarksAggregateInput>;
  /** Return Members where all of the related MemberBookmarksConnections match this filter */
  bookmarksConnection_ALL?: InputMaybe<MemberBookmarksConnectionWhere>;
  /** Return Members where none of the related MemberBookmarksConnections match this filter */
  bookmarksConnection_NONE?: InputMaybe<MemberBookmarksConnectionWhere>;
  /** Return Members where one of the related MemberBookmarksConnections match this filter */
  bookmarksConnection_SINGLE?: InputMaybe<MemberBookmarksConnectionWhere>;
  /** Return Members where some of the related MemberBookmarksConnections match this filter */
  bookmarksConnection_SOME?: InputMaybe<MemberBookmarksConnectionWhere>;
  /** Return Members where all of the related Bookmarks match this filter */
  bookmarks_ALL?: InputMaybe<BookmarkWhere>;
  /** Return Members where none of the related Bookmarks match this filter */
  bookmarks_NONE?: InputMaybe<BookmarkWhere>;
  /** Return Members where one of the related Bookmarks match this filter */
  bookmarks_SINGLE?: InputMaybe<BookmarkWhere>;
  /** Return Members where some of the related Bookmarks match this filter */
  bookmarks_SOME?: InputMaybe<BookmarkWhere>;
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
  foldersAggregate?: InputMaybe<MemberFoldersAggregateInput>;
  /** Return Members where all of the related MemberFoldersConnections match this filter */
  foldersConnection_ALL?: InputMaybe<MemberFoldersConnectionWhere>;
  /** Return Members where none of the related MemberFoldersConnections match this filter */
  foldersConnection_NONE?: InputMaybe<MemberFoldersConnectionWhere>;
  /** Return Members where one of the related MemberFoldersConnections match this filter */
  foldersConnection_SINGLE?: InputMaybe<MemberFoldersConnectionWhere>;
  /** Return Members where some of the related MemberFoldersConnections match this filter */
  foldersConnection_SOME?: InputMaybe<MemberFoldersConnectionWhere>;
  /** Return Members where all of the related Folders match this filter */
  folders_ALL?: InputMaybe<FolderWhere>;
  /** Return Members where none of the related Folders match this filter */
  folders_NONE?: InputMaybe<FolderWhere>;
  /** Return Members where one of the related Folders match this filter */
  folders_SINGLE?: InputMaybe<FolderWhere>;
  /** Return Members where some of the related Folders match this filter */
  folders_SOME?: InputMaybe<FolderWhere>;
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
  memberName?: InputMaybe<Scalars['String']['input']>;
  memberName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  memberName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  memberName_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  memberName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  passwordHash_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  passwordHash_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  passwordHash_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  passwordHash_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
  roles_INCLUDES?: InputMaybe<Scalars['String']['input']>;
};

export type MembersConnection = {
  __typename?: 'MembersConnection';
  edges: Array<MemberEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBmLooseContainers: CreateBmLooseContainersMutationResponse;
  createBmsPageds: CreateBmsPagedsMutationResponse;
  createBookmarkDl?: Maybe<Scalars['ID']['output']>;
  createBookmarkDl2s: CreateBookmarkDl2sMutationResponse;
  createBookmarkDls: CreateBookmarkDlsMutationResponse;
  createBookmarkFilters: CreateBookmarkFiltersMutationResponse;
  createBookmarks: CreateBookmarksMutationResponse;
  createCollBmCounts: CreateCollBmCountsMutationResponse;
  createCollection?: Maybe<Scalars['ID']['output']>;
  createCollectionDs: CreateCollectionDsMutationResponse;
  createCollectionDsLists: CreateCollectionDsListsMutationResponse;
  createCollections: CreateCollectionsMutationResponse;
  createFolder?: Maybe<Scalars['ID']['output']>;
  createFolderDls: CreateFolderDlsMutationResponse;
  createFolders: CreateFoldersMutationResponse;
  createMemberMetas: CreateMemberMetasMutationResponse;
  createMembers: CreateMembersMutationResponse;
  createParentDs: CreateParentDsMutationResponse;
  createParentMetas: CreateParentMetasMutationResponse;
  createParentsChildren: CreateParentsChildrenMutationResponse;
  createTagDls: CreateTagDlsMutationResponse;
  createTagDs: CreateTagDsMutationResponse;
  createTags: CreateTagsMutationResponse;
  deleteAllBms: Scalars['Int']['output'];
  deleteAllLooseBms: Scalars['Int']['output'];
  deleteBmLooseContainers: DeleteInfo;
  deleteBmsPageds: DeleteInfo;
  deleteBookmark: Scalars['Int']['output'];
  deleteBookmarkDl2s: DeleteInfo;
  deleteBookmarkDls: DeleteInfo;
  deleteBookmarkFilters: DeleteInfo;
  deleteBookmarks: DeleteInfo;
  deleteCascade?: Maybe<Scalars['Int']['output']>;
  deleteCollBmCounts: DeleteInfo;
  deleteCollBookmark: Scalars['Int']['output'];
  deleteCollection: Scalars['Int']['output'];
  deleteCollectionDs: DeleteInfo;
  deleteCollectionDsLists: DeleteInfo;
  deleteCollections: DeleteInfo;
  deleteFolder: Scalars['Int']['output'];
  deleteFolderDls: DeleteInfo;
  deleteFolders: DeleteInfo;
  deleteHierarchBmsXGetCollBmCounts?: Maybe<Array<CollBmCount>>;
  deleteListCascade?: Maybe<Scalars['Int']['output']>;
  deleteManyBms: Scalars['Int']['output'];
  deleteManyColls: Scalars['Int']['output'];
  deleteManyNodes: Scalars['Int']['output'];
  deleteMemberMetas: DeleteInfo;
  deleteMembers: DeleteInfo;
  deleteParentDs: DeleteInfo;
  deleteParentMetas: DeleteInfo;
  deleteParentsChildren: DeleteInfo;
  deleteTagDls: DeleteInfo;
  deleteTagDs: DeleteInfo;
  deleteTags: DeleteInfo;
  importFirefoxBookmarks?: Maybe<Scalars['Boolean']['output']>;
  moveAllBms: Scalars['Int']['output'];
  moveBmsToBLC: Scalars['Int']['output'];
  moveCollBmsInContainer: Scalars['Int']['output'];
  moveCollNodes2CollNode: Scalars['Int']['output'];
  moveColls2CollNode: Scalars['Int']['output'];
  moveLooseBms2CollNode: Scalars['Int']['output'];
  moveManyNodes: Scalars['Boolean']['output'];
  updateBmLooseContainers: UpdateBmLooseContainersMutationResponse;
  updateBmsPageds: UpdateBmsPagedsMutationResponse;
  updateBookmarkDl2s: UpdateBookmarkDl2sMutationResponse;
  updateBookmarkDls: UpdateBookmarkDlsMutationResponse;
  updateBookmarkFilters: UpdateBookmarkFiltersMutationResponse;
  updateBookmarks: UpdateBookmarksMutationResponse;
  updateCollBmCounts: UpdateCollBmCountsMutationResponse;
  updateCollectionDs: UpdateCollectionDsMutationResponse;
  updateCollectionDsLists: UpdateCollectionDsListsMutationResponse;
  updateCollections: UpdateCollectionsMutationResponse;
  updateFolderDls: UpdateFolderDlsMutationResponse;
  updateFolders: UpdateFoldersMutationResponse;
  updateMemberMetas: UpdateMemberMetasMutationResponse;
  updateMembers: UpdateMembersMutationResponse;
  updateParentDs: UpdateParentDsMutationResponse;
  updateParentMetas: UpdateParentMetasMutationResponse;
  updateParentsChildren: UpdateParentsChildrenMutationResponse;
  updateTagDls: UpdateTagDlsMutationResponse;
  updateTagDs: UpdateTagDsMutationResponse;
  updateTags: UpdateTagsMutationResponse;
};


export type MutationCreateBmLooseContainersArgs = {
  input: Array<BmLooseContainerCreateInput>;
};


export type MutationCreateBmsPagedsArgs = {
  input: Array<BmsPagedCreateInput>;
};


export type MutationCreateBookmarkDlArgs = {
  data: CreateBookmarkDl;
};


export type MutationCreateBookmarkDl2sArgs = {
  input: Array<BookmarkDl2CreateInput>;
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


export type MutationCreateCollBmCountsArgs = {
  input: Array<CollBmCountCreateInput>;
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


export type MutationCreateParentDsArgs = {
  input: Array<ParentDsCreateInput>;
};


export type MutationCreateParentMetasArgs = {
  input: Array<ParentMetaCreateInput>;
};


export type MutationCreateParentsChildrenArgs = {
  input: Array<ParentsChildrenCreateInput>;
};


export type MutationCreateTagDlsArgs = {
  input: Array<TagDlCreateInput>;
};


export type MutationCreateTagDsArgs = {
  input: Array<TagDsCreateInput>;
};


export type MutationCreateTagsArgs = {
  input: Array<TagCreateInput>;
};


export type MutationDeleteBmLooseContainersArgs = {
  delete?: InputMaybe<BmLooseContainerDeleteInput>;
  where?: InputMaybe<BmLooseContainerWhere>;
};


export type MutationDeleteBmsPagedsArgs = {
  where?: InputMaybe<BmsPagedWhere>;
};


export type MutationDeleteBookmarkArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBookmarkDl2sArgs = {
  where?: InputMaybe<BookmarkDl2Where>;
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


export type MutationDeleteCollBmCountsArgs = {
  where?: InputMaybe<CollBmCountWhere>;
};


export type MutationDeleteCollBookmarkArgs = {
  id: Scalars['ID']['input'];
  parentId: Scalars['ID']['input'];
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ID']['input'];
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


export type MutationDeleteHierarchBmsXGetCollBmCountsArgs = {
  input?: InputMaybe<Array<SelectedBms>>;
};


export type MutationDeleteListCascadeArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteManyBmsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationDeleteManyCollsArgs = {
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


export type MutationDeleteParentDsArgs = {
  where?: InputMaybe<ParentDsWhere>;
};


export type MutationDeleteParentMetasArgs = {
  delete?: InputMaybe<ParentMetaDeleteInput>;
  where?: InputMaybe<ParentMetaWhere>;
};


export type MutationDeleteParentsChildrenArgs = {
  where?: InputMaybe<ParentsChildrenWhere>;
};


export type MutationDeleteTagDlsArgs = {
  where?: InputMaybe<TagDlWhere>;
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


export type MutationMoveAllBmsArgs = {
  destId: Scalars['ID']['input'];
  pos?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationMoveBmsToBlcArgs = {
  nodes: SelectedNodes;
};


export type MutationMoveCollBmsInContainerArgs = {
  nodes: SelectedNodes;
};


export type MutationMoveCollNodes2CollNodeArgs = {
  destId: Scalars['ID']['input'];
  parentChildsList: Array<ParentChilds>;
  pos?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationMoveColls2CollNodeArgs = {
  collIds: Array<Scalars['ID']['input']>;
  destId: Scalars['ID']['input'];
  pos?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationMoveLooseBms2CollNodeArgs = {
  destId: Scalars['ID']['input'];
  pos?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationMoveManyNodesArgs = {
  destinationId?: InputMaybe<Scalars['ID']['input']>;
  nodes: NodesToMove;
  position?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateBmLooseContainersArgs = {
  connect?: InputMaybe<BmLooseContainerConnectInput>;
  connectOrCreate?: InputMaybe<BmLooseContainerConnectOrCreateInput>;
  create?: InputMaybe<BmLooseContainerRelationInput>;
  delete?: InputMaybe<BmLooseContainerDeleteInput>;
  disconnect?: InputMaybe<BmLooseContainerDisconnectInput>;
  update?: InputMaybe<BmLooseContainerUpdateInput>;
  where?: InputMaybe<BmLooseContainerWhere>;
};


export type MutationUpdateBmsPagedsArgs = {
  update?: InputMaybe<BmsPagedUpdateInput>;
  where?: InputMaybe<BmsPagedWhere>;
};


export type MutationUpdateBookmarkDl2sArgs = {
  update?: InputMaybe<BookmarkDl2UpdateInput>;
  where?: InputMaybe<BookmarkDl2Where>;
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


export type MutationUpdateCollBmCountsArgs = {
  update?: InputMaybe<CollBmCountUpdateInput>;
  where?: InputMaybe<CollBmCountWhere>;
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


export type MutationUpdateParentDsArgs = {
  update?: InputMaybe<ParentDsUpdateInput>;
  where?: InputMaybe<ParentDsWhere>;
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


export type MutationUpdateTagDlsArgs = {
  update?: InputMaybe<TagDlUpdateInput>;
  where?: InputMaybe<TagDlWhere>;
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

export type ParentAggregateSelection = {
  __typename?: 'ParentAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelection;
};

export type ParentChilds = {
  childIds: Array<Scalars['ID']['input']>;
  parentId: Scalars['ID']['input'];
};

export type ParentConnectWhere = {
  node: ParentWhere;
};

export type ParentCreateInput = {
  BmLooseContainer?: InputMaybe<BmLooseContainerCreateInput>;
  Collection?: InputMaybe<CollectionCreateInput>;
  Folder?: InputMaybe<FolderCreateInput>;
};

export type ParentDs = {
  __typename?: 'ParentDs';
  bmCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['ID']['output']>;
};

export type ParentDsAggregateSelection = {
  __typename?: 'ParentDsAggregateSelection';
  bmCount: IntAggregateSelection;
  count: Scalars['Int']['output'];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  parentId: IdAggregateSelection;
};

export type ParentDsConnection = {
  __typename?: 'ParentDsConnection';
  edges: Array<ParentDsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ParentDsCreateInput = {
  bmCount: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

export type ParentDsEdge = {
  __typename?: 'ParentDsEdge';
  cursor: Scalars['String']['output'];
  node: ParentDs;
};

export type ParentDsOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ParentDsSort objects to sort ParentDs by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ParentDsSort>>;
};

/** Fields to sort ParentDs by. The order in which sorts are applied is not guaranteed when specifying many fields in one ParentDsSort object. */
export type ParentDsSort = {
  bmCount?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  parentId?: InputMaybe<SortDirection>;
};

export type ParentDsUpdateInput = {
  bmCount?: InputMaybe<Scalars['Int']['input']>;
  bmCount_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  bmCount_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

export type ParentDsWhere = {
  AND?: InputMaybe<Array<ParentDsWhere>>;
  NOT?: InputMaybe<ParentDsWhere>;
  OR?: InputMaybe<Array<ParentDsWhere>>;
  bmCount?: InputMaybe<Scalars['Int']['input']>;
  bmCount_GT?: InputMaybe<Scalars['Int']['input']>;
  bmCount_GTE?: InputMaybe<Scalars['Int']['input']>;
  bmCount_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  bmCount_LT?: InputMaybe<Scalars['Int']['input']>;
  bmCount_LTE?: InputMaybe<Scalars['Int']['input']>;
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
  parentId?: InputMaybe<Scalars['ID']['input']>;
  parentId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  parentId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  parentId_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
};

export type ParentEdge = {
  __typename?: 'ParentEdge';
  cursor: Scalars['String']['output'];
  node: Parent;
};

export enum ParentImplementation {
  BmLooseContainer = 'BmLooseContainer',
  Collection = 'Collection',
  Folder = 'Folder'
}

export type ParentMeta = {
  __typename?: 'ParentMeta';
  childPositions: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  parent?: Maybe<Parent>;
  parentAggregate?: Maybe<ParentMetaParentParentAggregationSelection>;
  parentConnection: ParentMetaParentConnection;
};


export type ParentMetaParentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ParentOptions>;
  where?: InputMaybe<ParentWhere>;
};


export type ParentMetaParentAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
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
  id: IdAggregateSelection;
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

export type ParentMetaParentAggregateInput = {
  AND?: InputMaybe<Array<ParentMetaParentAggregateInput>>;
  NOT?: InputMaybe<ParentMetaParentAggregateInput>;
  OR?: InputMaybe<Array<ParentMetaParentAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ParentMetaParentNodeAggregationWhereInput>;
};

export type ParentMetaParentConnectFieldInput = {
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
  where?: InputMaybe<ParentMetaParentConnectionWhere>;
};

export type ParentMetaParentDisconnectFieldInput = {
  where?: InputMaybe<ParentMetaParentConnectionWhere>;
};

export type ParentMetaParentFieldInput = {
  connect?: InputMaybe<ParentMetaParentConnectFieldInput>;
  create?: InputMaybe<ParentMetaParentCreateFieldInput>;
};

export type ParentMetaParentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ParentMetaParentNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ParentMetaParentNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ParentMetaParentNodeAggregationWhereInput>>;
};

export type ParentMetaParentParentAggregationSelection = {
  __typename?: 'ParentMetaParentParentAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ParentMetaParentParentNodeAggregateSelection>;
};

export type ParentMetaParentParentNodeAggregateSelection = {
  __typename?: 'ParentMetaParentParentNodeAggregateSelection';
  id: IdAggregateSelection;
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
  parent?: InputMaybe<ParentWhere>;
  parentAggregate?: InputMaybe<ParentMetaParentAggregateInput>;
  parentConnection?: InputMaybe<ParentMetaParentConnectionWhere>;
  parentConnection_NOT?: InputMaybe<ParentMetaParentConnectionWhere>;
  parent_NOT?: InputMaybe<ParentWhere>;
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
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ParentWhere = {
  AND?: InputMaybe<Array<ParentWhere>>;
  NOT?: InputMaybe<ParentWhere>;
  OR?: InputMaybe<Array<ParentWhere>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  typename_IN?: InputMaybe<Array<ParentImplementation>>;
};

export type ParentsChildren = {
  __typename?: 'ParentsChildren';
  children: Array<ChildDl>;
  id: Scalars['ID']['output'];
};

export type ParentsChildrenAggregateSelection = {
  __typename?: 'ParentsChildrenAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelection;
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

export type ParentsConnection = {
  __typename?: 'ParentsConnection';
  edges: Array<ParentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  bmLooseContainers: Array<BmLooseContainer>;
  bmLooseContainersAggregate: BmLooseContainerAggregateSelection;
  bmLooseContainersConnection: BmLooseContainersConnection;
  bmsByFilter: BmsPaged;
  bmsPageds: Array<BmsPaged>;
  bmsPagedsAggregate: BmsPagedAggregateSelection;
  bmsPagedsConnection: BmsPagedsConnection;
  bookmarkDl2s: Array<BookmarkDl2>;
  bookmarkDl2sAggregate: BookmarkDl2AggregateSelection;
  bookmarkDl2sConnection: BookmarkDl2sConnection;
  bookmarkDls: Array<BookmarkDl>;
  bookmarkDlsAggregate: BookmarkDlAggregateSelection;
  bookmarkDlsConnection: BookmarkDlsConnection;
  bookmarkFilters: Array<BookmarkFilter>;
  bookmarkFiltersAggregate: BookmarkFilterAggregateSelection;
  bookmarkFiltersConnection: BookmarkFiltersConnection;
  bookmarks: Array<Bookmark>;
  bookmarksAggregate: BookmarkAggregateSelection;
  bookmarksConnection: BookmarksConnection;
  childDls: Array<ChildDl>;
  children: Array<Child>;
  collBmCounts: Array<CollBmCount>;
  collBmCountsAggregate: CollBmCountAggregateSelection;
  collBmCountsConnection: CollBmCountsConnection;
  collectionDs: Array<CollectionDs>;
  collectionDsAggregate: CollectionDsAggregateSelection;
  collectionDsConnection: CollectionDsConnection;
  collectionDsLists: Array<CollectionDsList>;
  collectionDsListsAggregate: CollectionDsListAggregateSelection;
  collectionDsListsConnection: CollectionDsListsConnection;
  collectionList?: Maybe<CollectionDsList>;
  collections: Array<Collection>;
  collectionsAggregate: CollectionAggregateSelection;
  collectionsByBmIdsXBmCounts?: Maybe<Array<CollBmCount>>;
  collectionsConnection: CollectionsConnection;
  folderDls: Array<FolderDl>;
  folderDlsAggregate: FolderDlAggregateSelection;
  folderDlsConnection: FolderDlsConnection;
  folders: Array<Folder>;
  foldersAggregate: FolderAggregateSelection;
  foldersConnection: FoldersConnection;
  looseBmCount: Scalars['Int']['output'];
  memberMetas: Array<MemberMeta>;
  memberMetasAggregate: MemberMetaAggregateSelection;
  memberMetasConnection: MemberMetasConnection;
  members: Array<Member>;
  membersAggregate: MemberAggregateSelection;
  membersConnection: MembersConnection;
  nl_parentsChildren: Array<ParentsChildren>;
  parentChildren: Array<ChildDl>;
  parentDs: Array<ParentDs>;
  parentDsAggregate: ParentDsAggregateSelection;
  parentDsConnection: ParentDsConnection;
  parentMetas: Array<ParentMeta>;
  parentMetasAggregate: ParentMetaAggregateSelection;
  parentMetasConnection: ParentMetasConnection;
  parents: Array<Parent>;
  parentsAggregate: ParentAggregateSelection;
  parentsByFilter?: Maybe<Array<ParentDs>>;
  parentsChildren: Array<ParentsChildren>;
  parentsChildrenAggregate: ParentsChildrenAggregateSelection;
  parentsChildrenConnection: ParentsChildrenConnection;
  parentsConnection: ParentsConnection;
  signIn: Scalars['String']['output'];
  tagDls: Array<TagDl>;
  tagDlsAggregate: TagDlAggregateSelection;
  tagDlsConnection: TagDlsConnection;
  tagDs: Array<TagDs>;
  tagDsAggregate: TagDsAggregateSelection;
  tagDsConnection: TagDsConnection;
  tagList?: Maybe<Array<TagDl>>;
  tags: Array<Tag>;
  tagsAggregate: TagAggregateSelection;
  tagsConnection: TagsConnection;
};


export type QueryBmLooseContainersArgs = {
  options?: InputMaybe<BmLooseContainerOptions>;
  where?: InputMaybe<BmLooseContainerWhere>;
};


export type QueryBmLooseContainersAggregateArgs = {
  where?: InputMaybe<BmLooseContainerWhere>;
};


export type QueryBmLooseContainersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<BmLooseContainerSort>>>;
  where?: InputMaybe<BmLooseContainerWhere>;
};


export type QueryBmsByFilterArgs = {
  filter: BookmarkFilter_In;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
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


export type QueryBookmarkDl2sArgs = {
  options?: InputMaybe<BookmarkDl2Options>;
  where?: InputMaybe<BookmarkDl2Where>;
};


export type QueryBookmarkDl2sAggregateArgs = {
  where?: InputMaybe<BookmarkDl2Where>;
};


export type QueryBookmarkDl2sConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<BookmarkDl2Sort>>>;
  where?: InputMaybe<BookmarkDl2Where>;
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


export type QueryChildDlsArgs = {
  options?: InputMaybe<QueryOptions>;
  where?: InputMaybe<ChildDlWhere>;
};


export type QueryChildrenArgs = {
  options?: InputMaybe<QueryOptions>;
  where?: InputMaybe<ChildWhere>;
};


export type QueryCollBmCountsArgs = {
  options?: InputMaybe<CollBmCountOptions>;
  where?: InputMaybe<CollBmCountWhere>;
};


export type QueryCollBmCountsAggregateArgs = {
  where?: InputMaybe<CollBmCountWhere>;
};


export type QueryCollBmCountsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CollBmCountSort>>>;
  where?: InputMaybe<CollBmCountWhere>;
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


export type QueryCollectionsByBmIdsXBmCountsArgs = {
  ids: Array<Scalars['String']['input']>;
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


export type QueryLooseBmCountArgs = {
  memberId: Scalars['String']['input'];
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


export type QueryParentChildrenArgs = {
  id: Scalars['String']['input'];
  level: Scalars['Int']['input'];
};


export type QueryParentDsArgs = {
  options?: InputMaybe<ParentDsOptions>;
  where?: InputMaybe<ParentDsWhere>;
};


export type QueryParentDsAggregateArgs = {
  where?: InputMaybe<ParentDsWhere>;
};


export type QueryParentDsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ParentDsSort>>>;
  where?: InputMaybe<ParentDsWhere>;
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


export type QueryParentsArgs = {
  options?: InputMaybe<ParentOptions>;
  where?: InputMaybe<ParentWhere>;
};


export type QueryParentsAggregateArgs = {
  where?: InputMaybe<ParentWhere>;
};


export type QueryParentsByFilterArgs = {
  limit: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  offset: Scalars['Int']['input'];
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


export type QueryParentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ParentSort>>>;
  where?: InputMaybe<ParentWhere>;
};


export type QuerySignInArgs = {
  memberName: Scalars['String']['input'];
  pw: Scalars['String']['input'];
};


export type QueryTagDlsArgs = {
  options?: InputMaybe<TagDlOptions>;
  where?: InputMaybe<TagDlWhere>;
};


export type QueryTagDlsAggregateArgs = {
  where?: InputMaybe<TagDlWhere>;
};


export type QueryTagDlsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TagDlSort>>>;
  where?: InputMaybe<TagDlWhere>;
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


export type QueryTagListArgs = {
  memberId: Scalars['String']['input'];
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

export type SelectedBms = {
  bmIds: Array<Scalars['ID']['input']>;
  parentId: Scalars['ID']['input'];
};

export type SelectedChilds = {
  bookmarkIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  folderIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  parentId: Scalars['ID']['input'];
};

export type SelectedNodes = {
  childs?: InputMaybe<Array<SelectedChilds>>;
  collectionIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelection = {
  __typename?: 'StringAggregateSelection';
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
  createdAt: DateTimeAggregateSelection;
  description: StringAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type TagBookmarkBookmarksAggregationSelection = {
  __typename?: 'TagBookmarkBookmarksAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TagBookmarkBookmarksNodeAggregateSelection>;
};

export type TagBookmarkBookmarksNodeAggregateSelection = {
  __typename?: 'TagBookmarkBookmarksNodeAggregateSelection';
  createdAt: DateTimeAggregateSelection;
  description: StringAggregateSelection;
  domainName: StringAggregateSelection;
  iconUri: StringAggregateSelection;
  id: IdAggregateSelection;
  linkPath: StringAggregateSelection;
  name: StringAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
  urlScheme: StringAggregateSelection;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TagDeleteInput = {
  bookmarks?: InputMaybe<Array<TagBookmarksDeleteFieldInput>>;
};

export type TagDisconnectInput = {
  bookmarks?: InputMaybe<Array<TagBookmarksDisconnectFieldInput>>;
};

export type TagDl = {
  __typename?: 'TagDl';
  count: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type TagDlAggregateSelection = {
  __typename?: 'TagDlAggregateSelection';
  count: IntAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type TagDlCreateInput = {
  count: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type TagDlEdge = {
  __typename?: 'TagDlEdge';
  cursor: Scalars['String']['output'];
  node: TagDl;
};

export type TagDlOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more TagDlSort objects to sort TagDls by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TagDlSort>>;
};

/** Fields to sort TagDls by. The order in which sorts are applied is not guaranteed when specifying many fields in one TagDlSort object. */
export type TagDlSort = {
  count?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type TagDlUpdateInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  count_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  count_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TagDlWhere = {
  AND?: InputMaybe<Array<TagDlWhere>>;
  NOT?: InputMaybe<TagDlWhere>;
  OR?: InputMaybe<Array<TagDlWhere>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
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

export type TagDlsConnection = {
  __typename?: 'TagDlsConnection';
  edges: Array<TagDlEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TagDs = {
  __typename?: 'TagDs';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type TagDsAggregateSelection = {
  __typename?: 'TagDsAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
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
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
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

export type UpdateBmLooseContainersMutationResponse = {
  __typename?: 'UpdateBmLooseContainersMutationResponse';
  bmLooseContainers: Array<BmLooseContainer>;
  info: UpdateInfo;
};

export type UpdateBmsPagedsMutationResponse = {
  __typename?: 'UpdateBmsPagedsMutationResponse';
  bmsPageds: Array<BmsPaged>;
  info: UpdateInfo;
};

export type UpdateBookmarkDl2sMutationResponse = {
  __typename?: 'UpdateBookmarkDl2sMutationResponse';
  bookmarkDl2s: Array<BookmarkDl2>;
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

export type UpdateCollBmCountsMutationResponse = {
  __typename?: 'UpdateCollBmCountsMutationResponse';
  collBmCounts: Array<CollBmCount>;
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

export type UpdateParentDsMutationResponse = {
  __typename?: 'UpdateParentDsMutationResponse';
  info: UpdateInfo;
  parentDs: Array<ParentDs>;
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

export type UpdateTagDlsMutationResponse = {
  __typename?: 'UpdateTagDlsMutationResponse';
  info: UpdateInfo;
  tagDls: Array<TagDl>;
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
  Parent: ( BmLooseContainer ) | ( Omit<Collection, 'children'> & { children: Array<RefType['Child']> } ) | ( Omit<Folder, 'children'> & { children: Array<RefType['Child']> } );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BmLooseContainer: ResolverTypeWrapper<BmLooseContainer>;
  BmLooseContainerAggregateSelection: ResolverTypeWrapper<BmLooseContainerAggregateSelection>;
  BmLooseContainerBookmarkBookmarksAggregationSelection: ResolverTypeWrapper<BmLooseContainerBookmarkBookmarksAggregationSelection>;
  BmLooseContainerBookmarkBookmarksNodeAggregateSelection: ResolverTypeWrapper<BmLooseContainerBookmarkBookmarksNodeAggregateSelection>;
  BmLooseContainerBookmarksAggregateInput: BmLooseContainerBookmarksAggregateInput;
  BmLooseContainerBookmarksConnectFieldInput: BmLooseContainerBookmarksConnectFieldInput;
  BmLooseContainerBookmarksConnectOrCreateFieldInput: BmLooseContainerBookmarksConnectOrCreateFieldInput;
  BmLooseContainerBookmarksConnectOrCreateFieldInputOnCreate: BmLooseContainerBookmarksConnectOrCreateFieldInputOnCreate;
  BmLooseContainerBookmarksConnection: ResolverTypeWrapper<BmLooseContainerBookmarksConnection>;
  BmLooseContainerBookmarksConnectionSort: BmLooseContainerBookmarksConnectionSort;
  BmLooseContainerBookmarksConnectionWhere: BmLooseContainerBookmarksConnectionWhere;
  BmLooseContainerBookmarksCreateFieldInput: BmLooseContainerBookmarksCreateFieldInput;
  BmLooseContainerBookmarksDeleteFieldInput: BmLooseContainerBookmarksDeleteFieldInput;
  BmLooseContainerBookmarksDisconnectFieldInput: BmLooseContainerBookmarksDisconnectFieldInput;
  BmLooseContainerBookmarksFieldInput: BmLooseContainerBookmarksFieldInput;
  BmLooseContainerBookmarksNodeAggregationWhereInput: BmLooseContainerBookmarksNodeAggregationWhereInput;
  BmLooseContainerBookmarksRelationship: ResolverTypeWrapper<BmLooseContainerBookmarksRelationship>;
  BmLooseContainerBookmarksUpdateConnectionInput: BmLooseContainerBookmarksUpdateConnectionInput;
  BmLooseContainerBookmarksUpdateFieldInput: BmLooseContainerBookmarksUpdateFieldInput;
  BmLooseContainerConnectInput: BmLooseContainerConnectInput;
  BmLooseContainerConnectOrCreateInput: BmLooseContainerConnectOrCreateInput;
  BmLooseContainerConnectOrCreateWhere: BmLooseContainerConnectOrCreateWhere;
  BmLooseContainerConnectWhere: BmLooseContainerConnectWhere;
  BmLooseContainerCreateInput: BmLooseContainerCreateInput;
  BmLooseContainerDeleteInput: BmLooseContainerDeleteInput;
  BmLooseContainerDisconnectInput: BmLooseContainerDisconnectInput;
  BmLooseContainerEdge: ResolverTypeWrapper<BmLooseContainerEdge>;
  BmLooseContainerMemberAggregateInput: BmLooseContainerMemberAggregateInput;
  BmLooseContainerMemberConnectFieldInput: BmLooseContainerMemberConnectFieldInput;
  BmLooseContainerMemberConnectOrCreateFieldInput: BmLooseContainerMemberConnectOrCreateFieldInput;
  BmLooseContainerMemberConnectOrCreateFieldInputOnCreate: BmLooseContainerMemberConnectOrCreateFieldInputOnCreate;
  BmLooseContainerMemberConnection: ResolverTypeWrapper<BmLooseContainerMemberConnection>;
  BmLooseContainerMemberConnectionSort: BmLooseContainerMemberConnectionSort;
  BmLooseContainerMemberConnectionWhere: BmLooseContainerMemberConnectionWhere;
  BmLooseContainerMemberCreateFieldInput: BmLooseContainerMemberCreateFieldInput;
  BmLooseContainerMemberDeleteFieldInput: BmLooseContainerMemberDeleteFieldInput;
  BmLooseContainerMemberDisconnectFieldInput: BmLooseContainerMemberDisconnectFieldInput;
  BmLooseContainerMemberFieldInput: BmLooseContainerMemberFieldInput;
  BmLooseContainerMemberMemberAggregationSelection: ResolverTypeWrapper<BmLooseContainerMemberMemberAggregationSelection>;
  BmLooseContainerMemberMemberNodeAggregateSelection: ResolverTypeWrapper<BmLooseContainerMemberMemberNodeAggregateSelection>;
  BmLooseContainerMemberNodeAggregationWhereInput: BmLooseContainerMemberNodeAggregationWhereInput;
  BmLooseContainerMemberRelationship: ResolverTypeWrapper<BmLooseContainerMemberRelationship>;
  BmLooseContainerMemberUpdateConnectionInput: BmLooseContainerMemberUpdateConnectionInput;
  BmLooseContainerMemberUpdateFieldInput: BmLooseContainerMemberUpdateFieldInput;
  BmLooseContainerOnCreateInput: BmLooseContainerOnCreateInput;
  BmLooseContainerOptions: BmLooseContainerOptions;
  BmLooseContainerRelationInput: BmLooseContainerRelationInput;
  BmLooseContainerSort: BmLooseContainerSort;
  BmLooseContainerUniqueWhere: BmLooseContainerUniqueWhere;
  BmLooseContainerUpdateInput: BmLooseContainerUpdateInput;
  BmLooseContainerWhere: BmLooseContainerWhere;
  BmLooseContainersConnection: ResolverTypeWrapper<BmLooseContainersConnection>;
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
  BookmarkDl2: ResolverTypeWrapper<BookmarkDl2>;
  BookmarkDl2AggregateSelection: ResolverTypeWrapper<BookmarkDl2AggregateSelection>;
  BookmarkDl2CreateInput: BookmarkDl2CreateInput;
  BookmarkDl2Edge: ResolverTypeWrapper<BookmarkDl2Edge>;
  BookmarkDl2Options: BookmarkDl2Options;
  BookmarkDl2Sort: BookmarkDl2Sort;
  BookmarkDl2UpdateInput: BookmarkDl2UpdateInput;
  BookmarkDl2Where: BookmarkDl2Where;
  BookmarkDl2sConnection: ResolverTypeWrapper<BookmarkDl2sConnection>;
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
  BookmarkMemberAggregateInput: BookmarkMemberAggregateInput;
  BookmarkMemberConnectFieldInput: BookmarkMemberConnectFieldInput;
  BookmarkMemberConnectOrCreateFieldInput: BookmarkMemberConnectOrCreateFieldInput;
  BookmarkMemberConnectOrCreateFieldInputOnCreate: BookmarkMemberConnectOrCreateFieldInputOnCreate;
  BookmarkMemberConnection: ResolverTypeWrapper<BookmarkMemberConnection>;
  BookmarkMemberConnectionSort: BookmarkMemberConnectionSort;
  BookmarkMemberConnectionWhere: BookmarkMemberConnectionWhere;
  BookmarkMemberCreateFieldInput: BookmarkMemberCreateFieldInput;
  BookmarkMemberDeleteFieldInput: BookmarkMemberDeleteFieldInput;
  BookmarkMemberDisconnectFieldInput: BookmarkMemberDisconnectFieldInput;
  BookmarkMemberFieldInput: BookmarkMemberFieldInput;
  BookmarkMemberMemberAggregationSelection: ResolverTypeWrapper<BookmarkMemberMemberAggregationSelection>;
  BookmarkMemberMemberNodeAggregateSelection: ResolverTypeWrapper<BookmarkMemberMemberNodeAggregateSelection>;
  BookmarkMemberNodeAggregationWhereInput: BookmarkMemberNodeAggregationWhereInput;
  BookmarkMemberRelationship: ResolverTypeWrapper<BookmarkMemberRelationship>;
  BookmarkMemberUpdateConnectionInput: BookmarkMemberUpdateConnectionInput;
  BookmarkMemberUpdateFieldInput: BookmarkMemberUpdateFieldInput;
  BookmarkOnCreateInput: BookmarkOnCreateInput;
  BookmarkOptions: BookmarkOptions;
  BookmarkParentAggregateInput: BookmarkParentAggregateInput;
  BookmarkParentConnectFieldInput: BookmarkParentConnectFieldInput;
  BookmarkParentConnection: ResolverTypeWrapper<BookmarkParentConnection>;
  BookmarkParentConnectionSort: BookmarkParentConnectionSort;
  BookmarkParentConnectionWhere: BookmarkParentConnectionWhere;
  BookmarkParentCreateFieldInput: BookmarkParentCreateFieldInput;
  BookmarkParentDeleteFieldInput: BookmarkParentDeleteFieldInput;
  BookmarkParentDisconnectFieldInput: BookmarkParentDisconnectFieldInput;
  BookmarkParentFieldInput: BookmarkParentFieldInput;
  BookmarkParentNodeAggregationWhereInput: BookmarkParentNodeAggregationWhereInput;
  BookmarkParentParentAggregationSelection: ResolverTypeWrapper<BookmarkParentParentAggregationSelection>;
  BookmarkParentParentNodeAggregateSelection: ResolverTypeWrapper<BookmarkParentParentNodeAggregateSelection>;
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
  ChildDlWhere: ChildDlWhere;
  ChildWhere: ChildWhere;
  ChildsToMove: ChildsToMove;
  CollBmCount: ResolverTypeWrapper<CollBmCount>;
  CollBmCountAggregateSelection: ResolverTypeWrapper<CollBmCountAggregateSelection>;
  CollBmCountCreateInput: CollBmCountCreateInput;
  CollBmCountEdge: ResolverTypeWrapper<CollBmCountEdge>;
  CollBmCountOptions: CollBmCountOptions;
  CollBmCountSort: CollBmCountSort;
  CollBmCountUpdateInput: CollBmCountUpdateInput;
  CollBmCountWhere: CollBmCountWhere;
  CollBmCountsConnection: ResolverTypeWrapper<CollBmCountsConnection>;
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
  CreateBmLooseContainersMutationResponse: ResolverTypeWrapper<CreateBmLooseContainersMutationResponse>;
  CreateBmsPagedsMutationResponse: ResolverTypeWrapper<CreateBmsPagedsMutationResponse>;
  CreateBookmarkDl: CreateBookmarkDl;
  CreateBookmarkDl2sMutationResponse: ResolverTypeWrapper<CreateBookmarkDl2sMutationResponse>;
  CreateBookmarkDlsMutationResponse: ResolverTypeWrapper<CreateBookmarkDlsMutationResponse>;
  CreateBookmarkFiltersMutationResponse: ResolverTypeWrapper<CreateBookmarkFiltersMutationResponse>;
  CreateBookmarksMutationResponse: ResolverTypeWrapper<CreateBookmarksMutationResponse>;
  CreateCollBmCountsMutationResponse: ResolverTypeWrapper<CreateCollBmCountsMutationResponse>;
  CreateCollectionDsListsMutationResponse: ResolverTypeWrapper<CreateCollectionDsListsMutationResponse>;
  CreateCollectionDsMutationResponse: ResolverTypeWrapper<CreateCollectionDsMutationResponse>;
  CreateCollectionsMutationResponse: ResolverTypeWrapper<CreateCollectionsMutationResponse>;
  CreateFolderDlsMutationResponse: ResolverTypeWrapper<CreateFolderDlsMutationResponse>;
  CreateFoldersMutationResponse: ResolverTypeWrapper<CreateFoldersMutationResponse>;
  CreateInfo: ResolverTypeWrapper<CreateInfo>;
  CreateMemberMetasMutationResponse: ResolverTypeWrapper<CreateMemberMetasMutationResponse>;
  CreateMembersMutationResponse: ResolverTypeWrapper<CreateMembersMutationResponse>;
  CreateParentDsMutationResponse: ResolverTypeWrapper<CreateParentDsMutationResponse>;
  CreateParentMetasMutationResponse: ResolverTypeWrapper<CreateParentMetasMutationResponse>;
  CreateParentsChildrenMutationResponse: ResolverTypeWrapper<CreateParentsChildrenMutationResponse>;
  CreateTagDlsMutationResponse: ResolverTypeWrapper<CreateTagDlsMutationResponse>;
  CreateTagDsMutationResponse: ResolverTypeWrapper<CreateTagDsMutationResponse>;
  CreateTagsMutationResponse: ResolverTypeWrapper<CreateTagsMutationResponse>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeAggregateSelection: ResolverTypeWrapper<DateTimeAggregateSelection>;
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
  FolderMemberAggregateInput: FolderMemberAggregateInput;
  FolderMemberConnectFieldInput: FolderMemberConnectFieldInput;
  FolderMemberConnectOrCreateFieldInput: FolderMemberConnectOrCreateFieldInput;
  FolderMemberConnectOrCreateFieldInputOnCreate: FolderMemberConnectOrCreateFieldInputOnCreate;
  FolderMemberConnection: ResolverTypeWrapper<FolderMemberConnection>;
  FolderMemberConnectionSort: FolderMemberConnectionSort;
  FolderMemberConnectionWhere: FolderMemberConnectionWhere;
  FolderMemberCreateFieldInput: FolderMemberCreateFieldInput;
  FolderMemberDeleteFieldInput: FolderMemberDeleteFieldInput;
  FolderMemberDisconnectFieldInput: FolderMemberDisconnectFieldInput;
  FolderMemberFieldInput: FolderMemberFieldInput;
  FolderMemberMemberAggregationSelection: ResolverTypeWrapper<FolderMemberMemberAggregationSelection>;
  FolderMemberMemberNodeAggregateSelection: ResolverTypeWrapper<FolderMemberMemberNodeAggregateSelection>;
  FolderMemberNodeAggregationWhereInput: FolderMemberNodeAggregationWhereInput;
  FolderMemberRelationship: ResolverTypeWrapper<FolderMemberRelationship>;
  FolderMemberUpdateConnectionInput: FolderMemberUpdateConnectionInput;
  FolderMemberUpdateFieldInput: FolderMemberUpdateFieldInput;
  FolderOnCreateInput: FolderOnCreateInput;
  FolderOptions: FolderOptions;
  FolderParentAggregateInput: FolderParentAggregateInput;
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
  FolderParentNodeAggregationWhereInput: FolderParentNodeAggregationWhereInput;
  FolderParentParentAggregationSelection: ResolverTypeWrapper<FolderParentParentAggregationSelection>;
  FolderParentParentNodeAggregateSelection: ResolverTypeWrapper<FolderParentParentNodeAggregateSelection>;
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
  IDAggregateSelection: ResolverTypeWrapper<IdAggregateSelection>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IntAggregateSelection: ResolverTypeWrapper<IntAggregateSelection>;
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
  MemberBmLooseContainerBmsContainerAggregationSelection: ResolverTypeWrapper<MemberBmLooseContainerBmsContainerAggregationSelection>;
  MemberBmLooseContainerBmsContainerNodeAggregateSelection: ResolverTypeWrapper<MemberBmLooseContainerBmsContainerNodeAggregateSelection>;
  MemberBmsContainerAggregateInput: MemberBmsContainerAggregateInput;
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
  MemberBookmarkBookmarksAggregationSelection: ResolverTypeWrapper<MemberBookmarkBookmarksAggregationSelection>;
  MemberBookmarkBookmarksNodeAggregateSelection: ResolverTypeWrapper<MemberBookmarkBookmarksNodeAggregateSelection>;
  MemberBookmarkFilterBmFiltersAggregationSelection: ResolverTypeWrapper<MemberBookmarkFilterBmFiltersAggregationSelection>;
  MemberBookmarkFilterBmFiltersNodeAggregateSelection: ResolverTypeWrapper<MemberBookmarkFilterBmFiltersNodeAggregateSelection>;
  MemberBookmarksAggregateInput: MemberBookmarksAggregateInput;
  MemberBookmarksConnectFieldInput: MemberBookmarksConnectFieldInput;
  MemberBookmarksConnectOrCreateFieldInput: MemberBookmarksConnectOrCreateFieldInput;
  MemberBookmarksConnectOrCreateFieldInputOnCreate: MemberBookmarksConnectOrCreateFieldInputOnCreate;
  MemberBookmarksConnection: ResolverTypeWrapper<MemberBookmarksConnection>;
  MemberBookmarksConnectionSort: MemberBookmarksConnectionSort;
  MemberBookmarksConnectionWhere: MemberBookmarksConnectionWhere;
  MemberBookmarksCreateFieldInput: MemberBookmarksCreateFieldInput;
  MemberBookmarksDeleteFieldInput: MemberBookmarksDeleteFieldInput;
  MemberBookmarksDisconnectFieldInput: MemberBookmarksDisconnectFieldInput;
  MemberBookmarksFieldInput: MemberBookmarksFieldInput;
  MemberBookmarksNodeAggregationWhereInput: MemberBookmarksNodeAggregationWhereInput;
  MemberBookmarksRelationship: ResolverTypeWrapper<MemberBookmarksRelationship>;
  MemberBookmarksUpdateConnectionInput: MemberBookmarksUpdateConnectionInput;
  MemberBookmarksUpdateFieldInput: MemberBookmarksUpdateFieldInput;
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
  MemberFolderFoldersAggregationSelection: ResolverTypeWrapper<MemberFolderFoldersAggregationSelection>;
  MemberFolderFoldersNodeAggregateSelection: ResolverTypeWrapper<MemberFolderFoldersNodeAggregateSelection>;
  MemberFoldersAggregateInput: MemberFoldersAggregateInput;
  MemberFoldersConnectFieldInput: MemberFoldersConnectFieldInput;
  MemberFoldersConnectOrCreateFieldInput: MemberFoldersConnectOrCreateFieldInput;
  MemberFoldersConnectOrCreateFieldInputOnCreate: MemberFoldersConnectOrCreateFieldInputOnCreate;
  MemberFoldersConnection: ResolverTypeWrapper<MemberFoldersConnection>;
  MemberFoldersConnectionSort: MemberFoldersConnectionSort;
  MemberFoldersConnectionWhere: MemberFoldersConnectionWhere;
  MemberFoldersCreateFieldInput: MemberFoldersCreateFieldInput;
  MemberFoldersDeleteFieldInput: MemberFoldersDeleteFieldInput;
  MemberFoldersDisconnectFieldInput: MemberFoldersDisconnectFieldInput;
  MemberFoldersFieldInput: MemberFoldersFieldInput;
  MemberFoldersNodeAggregationWhereInput: MemberFoldersNodeAggregationWhereInput;
  MemberFoldersRelationship: ResolverTypeWrapper<MemberFoldersRelationship>;
  MemberFoldersUpdateConnectionInput: MemberFoldersUpdateConnectionInput;
  MemberFoldersUpdateFieldInput: MemberFoldersUpdateFieldInput;
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
  ParentAggregateSelection: ResolverTypeWrapper<ParentAggregateSelection>;
  ParentChilds: ParentChilds;
  ParentConnectWhere: ParentConnectWhere;
  ParentCreateInput: ParentCreateInput;
  ParentDs: ResolverTypeWrapper<ParentDs>;
  ParentDsAggregateSelection: ResolverTypeWrapper<ParentDsAggregateSelection>;
  ParentDsConnection: ResolverTypeWrapper<ParentDsConnection>;
  ParentDsCreateInput: ParentDsCreateInput;
  ParentDsEdge: ResolverTypeWrapper<ParentDsEdge>;
  ParentDsOptions: ParentDsOptions;
  ParentDsSort: ParentDsSort;
  ParentDsUpdateInput: ParentDsUpdateInput;
  ParentDsWhere: ParentDsWhere;
  ParentEdge: ResolverTypeWrapper<ParentEdge>;
  ParentImplementation: ParentImplementation;
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
  ParentMetaParentAggregateInput: ParentMetaParentAggregateInput;
  ParentMetaParentConnectFieldInput: ParentMetaParentConnectFieldInput;
  ParentMetaParentConnection: ResolverTypeWrapper<ParentMetaParentConnection>;
  ParentMetaParentConnectionSort: ParentMetaParentConnectionSort;
  ParentMetaParentConnectionWhere: ParentMetaParentConnectionWhere;
  ParentMetaParentCreateFieldInput: ParentMetaParentCreateFieldInput;
  ParentMetaParentDeleteFieldInput: ParentMetaParentDeleteFieldInput;
  ParentMetaParentDisconnectFieldInput: ParentMetaParentDisconnectFieldInput;
  ParentMetaParentFieldInput: ParentMetaParentFieldInput;
  ParentMetaParentNodeAggregationWhereInput: ParentMetaParentNodeAggregationWhereInput;
  ParentMetaParentParentAggregationSelection: ResolverTypeWrapper<ParentMetaParentParentAggregationSelection>;
  ParentMetaParentParentNodeAggregateSelection: ResolverTypeWrapper<ParentMetaParentParentNodeAggregateSelection>;
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
  ParentsConnection: ResolverTypeWrapper<ParentsConnection>;
  Query: ResolverTypeWrapper<{}>;
  QueryOptions: QueryOptions;
  SelectedBms: SelectedBms;
  SelectedChilds: SelectedChilds;
  SelectedNodes: SelectedNodes;
  SortDirection: SortDirection;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringAggregateSelection: ResolverTypeWrapper<StringAggregateSelection>;
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
  TagDl: ResolverTypeWrapper<TagDl>;
  TagDlAggregateSelection: ResolverTypeWrapper<TagDlAggregateSelection>;
  TagDlCreateInput: TagDlCreateInput;
  TagDlEdge: ResolverTypeWrapper<TagDlEdge>;
  TagDlOptions: TagDlOptions;
  TagDlSort: TagDlSort;
  TagDlUpdateInput: TagDlUpdateInput;
  TagDlWhere: TagDlWhere;
  TagDlsConnection: ResolverTypeWrapper<TagDlsConnection>;
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
  UpdateBmLooseContainersMutationResponse: ResolverTypeWrapper<UpdateBmLooseContainersMutationResponse>;
  UpdateBmsPagedsMutationResponse: ResolverTypeWrapper<UpdateBmsPagedsMutationResponse>;
  UpdateBookmarkDl2sMutationResponse: ResolverTypeWrapper<UpdateBookmarkDl2sMutationResponse>;
  UpdateBookmarkDlsMutationResponse: ResolverTypeWrapper<UpdateBookmarkDlsMutationResponse>;
  UpdateBookmarkFiltersMutationResponse: ResolverTypeWrapper<UpdateBookmarkFiltersMutationResponse>;
  UpdateBookmarksMutationResponse: ResolverTypeWrapper<UpdateBookmarksMutationResponse>;
  UpdateCollBmCountsMutationResponse: ResolverTypeWrapper<UpdateCollBmCountsMutationResponse>;
  UpdateCollectionDsListsMutationResponse: ResolverTypeWrapper<UpdateCollectionDsListsMutationResponse>;
  UpdateCollectionDsMutationResponse: ResolverTypeWrapper<UpdateCollectionDsMutationResponse>;
  UpdateCollectionsMutationResponse: ResolverTypeWrapper<UpdateCollectionsMutationResponse>;
  UpdateFolderDlsMutationResponse: ResolverTypeWrapper<UpdateFolderDlsMutationResponse>;
  UpdateFoldersMutationResponse: ResolverTypeWrapper<UpdateFoldersMutationResponse>;
  UpdateInfo: ResolverTypeWrapper<UpdateInfo>;
  UpdateMemberMetasMutationResponse: ResolverTypeWrapper<UpdateMemberMetasMutationResponse>;
  UpdateMembersMutationResponse: ResolverTypeWrapper<UpdateMembersMutationResponse>;
  UpdateParentDsMutationResponse: ResolverTypeWrapper<UpdateParentDsMutationResponse>;
  UpdateParentMetasMutationResponse: ResolverTypeWrapper<UpdateParentMetasMutationResponse>;
  UpdateParentsChildrenMutationResponse: ResolverTypeWrapper<UpdateParentsChildrenMutationResponse>;
  UpdateTagDlsMutationResponse: ResolverTypeWrapper<UpdateTagDlsMutationResponse>;
  UpdateTagDsMutationResponse: ResolverTypeWrapper<UpdateTagDsMutationResponse>;
  UpdateTagsMutationResponse: ResolverTypeWrapper<UpdateTagsMutationResponse>;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BmLooseContainer: BmLooseContainer;
  BmLooseContainerAggregateSelection: BmLooseContainerAggregateSelection;
  BmLooseContainerBookmarkBookmarksAggregationSelection: BmLooseContainerBookmarkBookmarksAggregationSelection;
  BmLooseContainerBookmarkBookmarksNodeAggregateSelection: BmLooseContainerBookmarkBookmarksNodeAggregateSelection;
  BmLooseContainerBookmarksAggregateInput: BmLooseContainerBookmarksAggregateInput;
  BmLooseContainerBookmarksConnectFieldInput: BmLooseContainerBookmarksConnectFieldInput;
  BmLooseContainerBookmarksConnectOrCreateFieldInput: BmLooseContainerBookmarksConnectOrCreateFieldInput;
  BmLooseContainerBookmarksConnectOrCreateFieldInputOnCreate: BmLooseContainerBookmarksConnectOrCreateFieldInputOnCreate;
  BmLooseContainerBookmarksConnection: BmLooseContainerBookmarksConnection;
  BmLooseContainerBookmarksConnectionSort: BmLooseContainerBookmarksConnectionSort;
  BmLooseContainerBookmarksConnectionWhere: BmLooseContainerBookmarksConnectionWhere;
  BmLooseContainerBookmarksCreateFieldInput: BmLooseContainerBookmarksCreateFieldInput;
  BmLooseContainerBookmarksDeleteFieldInput: BmLooseContainerBookmarksDeleteFieldInput;
  BmLooseContainerBookmarksDisconnectFieldInput: BmLooseContainerBookmarksDisconnectFieldInput;
  BmLooseContainerBookmarksFieldInput: BmLooseContainerBookmarksFieldInput;
  BmLooseContainerBookmarksNodeAggregationWhereInput: BmLooseContainerBookmarksNodeAggregationWhereInput;
  BmLooseContainerBookmarksRelationship: BmLooseContainerBookmarksRelationship;
  BmLooseContainerBookmarksUpdateConnectionInput: BmLooseContainerBookmarksUpdateConnectionInput;
  BmLooseContainerBookmarksUpdateFieldInput: BmLooseContainerBookmarksUpdateFieldInput;
  BmLooseContainerConnectInput: BmLooseContainerConnectInput;
  BmLooseContainerConnectOrCreateInput: BmLooseContainerConnectOrCreateInput;
  BmLooseContainerConnectOrCreateWhere: BmLooseContainerConnectOrCreateWhere;
  BmLooseContainerConnectWhere: BmLooseContainerConnectWhere;
  BmLooseContainerCreateInput: BmLooseContainerCreateInput;
  BmLooseContainerDeleteInput: BmLooseContainerDeleteInput;
  BmLooseContainerDisconnectInput: BmLooseContainerDisconnectInput;
  BmLooseContainerEdge: BmLooseContainerEdge;
  BmLooseContainerMemberAggregateInput: BmLooseContainerMemberAggregateInput;
  BmLooseContainerMemberConnectFieldInput: BmLooseContainerMemberConnectFieldInput;
  BmLooseContainerMemberConnectOrCreateFieldInput: BmLooseContainerMemberConnectOrCreateFieldInput;
  BmLooseContainerMemberConnectOrCreateFieldInputOnCreate: BmLooseContainerMemberConnectOrCreateFieldInputOnCreate;
  BmLooseContainerMemberConnection: BmLooseContainerMemberConnection;
  BmLooseContainerMemberConnectionSort: BmLooseContainerMemberConnectionSort;
  BmLooseContainerMemberConnectionWhere: BmLooseContainerMemberConnectionWhere;
  BmLooseContainerMemberCreateFieldInput: BmLooseContainerMemberCreateFieldInput;
  BmLooseContainerMemberDeleteFieldInput: BmLooseContainerMemberDeleteFieldInput;
  BmLooseContainerMemberDisconnectFieldInput: BmLooseContainerMemberDisconnectFieldInput;
  BmLooseContainerMemberFieldInput: BmLooseContainerMemberFieldInput;
  BmLooseContainerMemberMemberAggregationSelection: BmLooseContainerMemberMemberAggregationSelection;
  BmLooseContainerMemberMemberNodeAggregateSelection: BmLooseContainerMemberMemberNodeAggregateSelection;
  BmLooseContainerMemberNodeAggregationWhereInput: BmLooseContainerMemberNodeAggregationWhereInput;
  BmLooseContainerMemberRelationship: BmLooseContainerMemberRelationship;
  BmLooseContainerMemberUpdateConnectionInput: BmLooseContainerMemberUpdateConnectionInput;
  BmLooseContainerMemberUpdateFieldInput: BmLooseContainerMemberUpdateFieldInput;
  BmLooseContainerOnCreateInput: BmLooseContainerOnCreateInput;
  BmLooseContainerOptions: BmLooseContainerOptions;
  BmLooseContainerRelationInput: BmLooseContainerRelationInput;
  BmLooseContainerSort: BmLooseContainerSort;
  BmLooseContainerUniqueWhere: BmLooseContainerUniqueWhere;
  BmLooseContainerUpdateInput: BmLooseContainerUpdateInput;
  BmLooseContainerWhere: BmLooseContainerWhere;
  BmLooseContainersConnection: BmLooseContainersConnection;
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
  BookmarkDl2: BookmarkDl2;
  BookmarkDl2AggregateSelection: BookmarkDl2AggregateSelection;
  BookmarkDl2CreateInput: BookmarkDl2CreateInput;
  BookmarkDl2Edge: BookmarkDl2Edge;
  BookmarkDl2Options: BookmarkDl2Options;
  BookmarkDl2Sort: BookmarkDl2Sort;
  BookmarkDl2UpdateInput: BookmarkDl2UpdateInput;
  BookmarkDl2Where: BookmarkDl2Where;
  BookmarkDl2sConnection: BookmarkDl2sConnection;
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
  BookmarkMemberAggregateInput: BookmarkMemberAggregateInput;
  BookmarkMemberConnectFieldInput: BookmarkMemberConnectFieldInput;
  BookmarkMemberConnectOrCreateFieldInput: BookmarkMemberConnectOrCreateFieldInput;
  BookmarkMemberConnectOrCreateFieldInputOnCreate: BookmarkMemberConnectOrCreateFieldInputOnCreate;
  BookmarkMemberConnection: BookmarkMemberConnection;
  BookmarkMemberConnectionSort: BookmarkMemberConnectionSort;
  BookmarkMemberConnectionWhere: BookmarkMemberConnectionWhere;
  BookmarkMemberCreateFieldInput: BookmarkMemberCreateFieldInput;
  BookmarkMemberDeleteFieldInput: BookmarkMemberDeleteFieldInput;
  BookmarkMemberDisconnectFieldInput: BookmarkMemberDisconnectFieldInput;
  BookmarkMemberFieldInput: BookmarkMemberFieldInput;
  BookmarkMemberMemberAggregationSelection: BookmarkMemberMemberAggregationSelection;
  BookmarkMemberMemberNodeAggregateSelection: BookmarkMemberMemberNodeAggregateSelection;
  BookmarkMemberNodeAggregationWhereInput: BookmarkMemberNodeAggregationWhereInput;
  BookmarkMemberRelationship: BookmarkMemberRelationship;
  BookmarkMemberUpdateConnectionInput: BookmarkMemberUpdateConnectionInput;
  BookmarkMemberUpdateFieldInput: BookmarkMemberUpdateFieldInput;
  BookmarkOnCreateInput: BookmarkOnCreateInput;
  BookmarkOptions: BookmarkOptions;
  BookmarkParentAggregateInput: BookmarkParentAggregateInput;
  BookmarkParentConnectFieldInput: BookmarkParentConnectFieldInput;
  BookmarkParentConnection: BookmarkParentConnection;
  BookmarkParentConnectionSort: BookmarkParentConnectionSort;
  BookmarkParentConnectionWhere: BookmarkParentConnectionWhere;
  BookmarkParentCreateFieldInput: BookmarkParentCreateFieldInput;
  BookmarkParentDeleteFieldInput: BookmarkParentDeleteFieldInput;
  BookmarkParentDisconnectFieldInput: BookmarkParentDisconnectFieldInput;
  BookmarkParentFieldInput: BookmarkParentFieldInput;
  BookmarkParentNodeAggregationWhereInput: BookmarkParentNodeAggregationWhereInput;
  BookmarkParentParentAggregationSelection: BookmarkParentParentAggregationSelection;
  BookmarkParentParentNodeAggregateSelection: BookmarkParentParentNodeAggregateSelection;
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
  ChildDlWhere: ChildDlWhere;
  ChildWhere: ChildWhere;
  ChildsToMove: ChildsToMove;
  CollBmCount: CollBmCount;
  CollBmCountAggregateSelection: CollBmCountAggregateSelection;
  CollBmCountCreateInput: CollBmCountCreateInput;
  CollBmCountEdge: CollBmCountEdge;
  CollBmCountOptions: CollBmCountOptions;
  CollBmCountSort: CollBmCountSort;
  CollBmCountUpdateInput: CollBmCountUpdateInput;
  CollBmCountWhere: CollBmCountWhere;
  CollBmCountsConnection: CollBmCountsConnection;
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
  CreateBmLooseContainersMutationResponse: CreateBmLooseContainersMutationResponse;
  CreateBmsPagedsMutationResponse: CreateBmsPagedsMutationResponse;
  CreateBookmarkDl: CreateBookmarkDl;
  CreateBookmarkDl2sMutationResponse: CreateBookmarkDl2sMutationResponse;
  CreateBookmarkDlsMutationResponse: CreateBookmarkDlsMutationResponse;
  CreateBookmarkFiltersMutationResponse: CreateBookmarkFiltersMutationResponse;
  CreateBookmarksMutationResponse: CreateBookmarksMutationResponse;
  CreateCollBmCountsMutationResponse: CreateCollBmCountsMutationResponse;
  CreateCollectionDsListsMutationResponse: CreateCollectionDsListsMutationResponse;
  CreateCollectionDsMutationResponse: CreateCollectionDsMutationResponse;
  CreateCollectionsMutationResponse: CreateCollectionsMutationResponse;
  CreateFolderDlsMutationResponse: CreateFolderDlsMutationResponse;
  CreateFoldersMutationResponse: CreateFoldersMutationResponse;
  CreateInfo: CreateInfo;
  CreateMemberMetasMutationResponse: CreateMemberMetasMutationResponse;
  CreateMembersMutationResponse: CreateMembersMutationResponse;
  CreateParentDsMutationResponse: CreateParentDsMutationResponse;
  CreateParentMetasMutationResponse: CreateParentMetasMutationResponse;
  CreateParentsChildrenMutationResponse: CreateParentsChildrenMutationResponse;
  CreateTagDlsMutationResponse: CreateTagDlsMutationResponse;
  CreateTagDsMutationResponse: CreateTagDsMutationResponse;
  CreateTagsMutationResponse: CreateTagsMutationResponse;
  DateTime: Scalars['DateTime']['output'];
  DateTimeAggregateSelection: DateTimeAggregateSelection;
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
  FolderMemberAggregateInput: FolderMemberAggregateInput;
  FolderMemberConnectFieldInput: FolderMemberConnectFieldInput;
  FolderMemberConnectOrCreateFieldInput: FolderMemberConnectOrCreateFieldInput;
  FolderMemberConnectOrCreateFieldInputOnCreate: FolderMemberConnectOrCreateFieldInputOnCreate;
  FolderMemberConnection: FolderMemberConnection;
  FolderMemberConnectionSort: FolderMemberConnectionSort;
  FolderMemberConnectionWhere: FolderMemberConnectionWhere;
  FolderMemberCreateFieldInput: FolderMemberCreateFieldInput;
  FolderMemberDeleteFieldInput: FolderMemberDeleteFieldInput;
  FolderMemberDisconnectFieldInput: FolderMemberDisconnectFieldInput;
  FolderMemberFieldInput: FolderMemberFieldInput;
  FolderMemberMemberAggregationSelection: FolderMemberMemberAggregationSelection;
  FolderMemberMemberNodeAggregateSelection: FolderMemberMemberNodeAggregateSelection;
  FolderMemberNodeAggregationWhereInput: FolderMemberNodeAggregationWhereInput;
  FolderMemberRelationship: FolderMemberRelationship;
  FolderMemberUpdateConnectionInput: FolderMemberUpdateConnectionInput;
  FolderMemberUpdateFieldInput: FolderMemberUpdateFieldInput;
  FolderOnCreateInput: FolderOnCreateInput;
  FolderOptions: FolderOptions;
  FolderParentAggregateInput: FolderParentAggregateInput;
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
  FolderParentNodeAggregationWhereInput: FolderParentNodeAggregationWhereInput;
  FolderParentParentAggregationSelection: FolderParentParentAggregationSelection;
  FolderParentParentNodeAggregateSelection: FolderParentParentNodeAggregateSelection;
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
  IDAggregateSelection: IdAggregateSelection;
  Int: Scalars['Int']['output'];
  IntAggregateSelection: IntAggregateSelection;
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
  MemberBmLooseContainerBmsContainerAggregationSelection: MemberBmLooseContainerBmsContainerAggregationSelection;
  MemberBmLooseContainerBmsContainerNodeAggregateSelection: MemberBmLooseContainerBmsContainerNodeAggregateSelection;
  MemberBmsContainerAggregateInput: MemberBmsContainerAggregateInput;
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
  MemberBookmarkBookmarksAggregationSelection: MemberBookmarkBookmarksAggregationSelection;
  MemberBookmarkBookmarksNodeAggregateSelection: MemberBookmarkBookmarksNodeAggregateSelection;
  MemberBookmarkFilterBmFiltersAggregationSelection: MemberBookmarkFilterBmFiltersAggregationSelection;
  MemberBookmarkFilterBmFiltersNodeAggregateSelection: MemberBookmarkFilterBmFiltersNodeAggregateSelection;
  MemberBookmarksAggregateInput: MemberBookmarksAggregateInput;
  MemberBookmarksConnectFieldInput: MemberBookmarksConnectFieldInput;
  MemberBookmarksConnectOrCreateFieldInput: MemberBookmarksConnectOrCreateFieldInput;
  MemberBookmarksConnectOrCreateFieldInputOnCreate: MemberBookmarksConnectOrCreateFieldInputOnCreate;
  MemberBookmarksConnection: MemberBookmarksConnection;
  MemberBookmarksConnectionSort: MemberBookmarksConnectionSort;
  MemberBookmarksConnectionWhere: MemberBookmarksConnectionWhere;
  MemberBookmarksCreateFieldInput: MemberBookmarksCreateFieldInput;
  MemberBookmarksDeleteFieldInput: MemberBookmarksDeleteFieldInput;
  MemberBookmarksDisconnectFieldInput: MemberBookmarksDisconnectFieldInput;
  MemberBookmarksFieldInput: MemberBookmarksFieldInput;
  MemberBookmarksNodeAggregationWhereInput: MemberBookmarksNodeAggregationWhereInput;
  MemberBookmarksRelationship: MemberBookmarksRelationship;
  MemberBookmarksUpdateConnectionInput: MemberBookmarksUpdateConnectionInput;
  MemberBookmarksUpdateFieldInput: MemberBookmarksUpdateFieldInput;
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
  MemberFolderFoldersAggregationSelection: MemberFolderFoldersAggregationSelection;
  MemberFolderFoldersNodeAggregateSelection: MemberFolderFoldersNodeAggregateSelection;
  MemberFoldersAggregateInput: MemberFoldersAggregateInput;
  MemberFoldersConnectFieldInput: MemberFoldersConnectFieldInput;
  MemberFoldersConnectOrCreateFieldInput: MemberFoldersConnectOrCreateFieldInput;
  MemberFoldersConnectOrCreateFieldInputOnCreate: MemberFoldersConnectOrCreateFieldInputOnCreate;
  MemberFoldersConnection: MemberFoldersConnection;
  MemberFoldersConnectionSort: MemberFoldersConnectionSort;
  MemberFoldersConnectionWhere: MemberFoldersConnectionWhere;
  MemberFoldersCreateFieldInput: MemberFoldersCreateFieldInput;
  MemberFoldersDeleteFieldInput: MemberFoldersDeleteFieldInput;
  MemberFoldersDisconnectFieldInput: MemberFoldersDisconnectFieldInput;
  MemberFoldersFieldInput: MemberFoldersFieldInput;
  MemberFoldersNodeAggregationWhereInput: MemberFoldersNodeAggregationWhereInput;
  MemberFoldersRelationship: MemberFoldersRelationship;
  MemberFoldersUpdateConnectionInput: MemberFoldersUpdateConnectionInput;
  MemberFoldersUpdateFieldInput: MemberFoldersUpdateFieldInput;
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
  ParentAggregateSelection: ParentAggregateSelection;
  ParentChilds: ParentChilds;
  ParentConnectWhere: ParentConnectWhere;
  ParentCreateInput: ParentCreateInput;
  ParentDs: ParentDs;
  ParentDsAggregateSelection: ParentDsAggregateSelection;
  ParentDsConnection: ParentDsConnection;
  ParentDsCreateInput: ParentDsCreateInput;
  ParentDsEdge: ParentDsEdge;
  ParentDsOptions: ParentDsOptions;
  ParentDsSort: ParentDsSort;
  ParentDsUpdateInput: ParentDsUpdateInput;
  ParentDsWhere: ParentDsWhere;
  ParentEdge: ParentEdge;
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
  ParentMetaParentAggregateInput: ParentMetaParentAggregateInput;
  ParentMetaParentConnectFieldInput: ParentMetaParentConnectFieldInput;
  ParentMetaParentConnection: ParentMetaParentConnection;
  ParentMetaParentConnectionSort: ParentMetaParentConnectionSort;
  ParentMetaParentConnectionWhere: ParentMetaParentConnectionWhere;
  ParentMetaParentCreateFieldInput: ParentMetaParentCreateFieldInput;
  ParentMetaParentDeleteFieldInput: ParentMetaParentDeleteFieldInput;
  ParentMetaParentDisconnectFieldInput: ParentMetaParentDisconnectFieldInput;
  ParentMetaParentFieldInput: ParentMetaParentFieldInput;
  ParentMetaParentNodeAggregationWhereInput: ParentMetaParentNodeAggregationWhereInput;
  ParentMetaParentParentAggregationSelection: ParentMetaParentParentAggregationSelection;
  ParentMetaParentParentNodeAggregateSelection: ParentMetaParentParentNodeAggregateSelection;
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
  ParentsConnection: ParentsConnection;
  Query: {};
  QueryOptions: QueryOptions;
  SelectedBms: SelectedBms;
  SelectedChilds: SelectedChilds;
  SelectedNodes: SelectedNodes;
  String: Scalars['String']['output'];
  StringAggregateSelection: StringAggregateSelection;
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
  TagDl: TagDl;
  TagDlAggregateSelection: TagDlAggregateSelection;
  TagDlCreateInput: TagDlCreateInput;
  TagDlEdge: TagDlEdge;
  TagDlOptions: TagDlOptions;
  TagDlSort: TagDlSort;
  TagDlUpdateInput: TagDlUpdateInput;
  TagDlWhere: TagDlWhere;
  TagDlsConnection: TagDlsConnection;
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
  UpdateBmLooseContainersMutationResponse: UpdateBmLooseContainersMutationResponse;
  UpdateBmsPagedsMutationResponse: UpdateBmsPagedsMutationResponse;
  UpdateBookmarkDl2sMutationResponse: UpdateBookmarkDl2sMutationResponse;
  UpdateBookmarkDlsMutationResponse: UpdateBookmarkDlsMutationResponse;
  UpdateBookmarkFiltersMutationResponse: UpdateBookmarkFiltersMutationResponse;
  UpdateBookmarksMutationResponse: UpdateBookmarksMutationResponse;
  UpdateCollBmCountsMutationResponse: UpdateCollBmCountsMutationResponse;
  UpdateCollectionDsListsMutationResponse: UpdateCollectionDsListsMutationResponse;
  UpdateCollectionDsMutationResponse: UpdateCollectionDsMutationResponse;
  UpdateCollectionsMutationResponse: UpdateCollectionsMutationResponse;
  UpdateFolderDlsMutationResponse: UpdateFolderDlsMutationResponse;
  UpdateFoldersMutationResponse: UpdateFoldersMutationResponse;
  UpdateInfo: UpdateInfo;
  UpdateMemberMetasMutationResponse: UpdateMemberMetasMutationResponse;
  UpdateMembersMutationResponse: UpdateMembersMutationResponse;
  UpdateParentDsMutationResponse: UpdateParentDsMutationResponse;
  UpdateParentMetasMutationResponse: UpdateParentMetasMutationResponse;
  UpdateParentsChildrenMutationResponse: UpdateParentsChildrenMutationResponse;
  UpdateTagDlsMutationResponse: UpdateTagDlsMutationResponse;
  UpdateTagDsMutationResponse: UpdateTagDsMutationResponse;
  UpdateTagsMutationResponse: UpdateTagsMutationResponse;
  Upload: Scalars['Upload']['output'];
};

export type BmLooseContainerResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmLooseContainer'] = ResolversParentTypes['BmLooseContainer']> = {
  bookmarks?: Resolver<Array<ResolversTypes['Bookmark']>, ParentType, ContextType, RequireFields<BmLooseContainerBookmarksArgs, 'directed'>>;
  bookmarksAggregate?: Resolver<Maybe<ResolversTypes['BmLooseContainerBookmarkBookmarksAggregationSelection']>, ParentType, ContextType, RequireFields<BmLooseContainerBookmarksAggregateArgs, 'directed'>>;
  bookmarksConnection?: Resolver<ResolversTypes['BmLooseContainerBookmarksConnection'], ParentType, ContextType, RequireFields<BmLooseContainerBookmarksConnectionArgs, 'directed'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<ResolversTypes['Member'], ParentType, ContextType, RequireFields<BmLooseContainerMemberArgs, 'directed'>>;
  memberAggregate?: Resolver<Maybe<ResolversTypes['BmLooseContainerMemberMemberAggregationSelection']>, ParentType, ContextType, RequireFields<BmLooseContainerMemberAggregateArgs, 'directed'>>;
  memberConnection?: Resolver<ResolversTypes['BmLooseContainerMemberConnection'], ParentType, ContextType, RequireFields<BmLooseContainerMemberConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmLooseContainerAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmLooseContainerAggregateSelection'] = ResolversParentTypes['BmLooseContainerAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmLooseContainerBookmarkBookmarksAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmLooseContainerBookmarkBookmarksAggregationSelection'] = ResolversParentTypes['BmLooseContainerBookmarkBookmarksAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['BmLooseContainerBookmarkBookmarksNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmLooseContainerBookmarkBookmarksNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmLooseContainerBookmarkBookmarksNodeAggregateSelection'] = ResolversParentTypes['BmLooseContainerBookmarkBookmarksNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  domainName?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  iconUri?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  linkPath?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
  urlScheme?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmLooseContainerBookmarksConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmLooseContainerBookmarksConnection'] = ResolversParentTypes['BmLooseContainerBookmarksConnection']> = {
  edges?: Resolver<Array<ResolversTypes['BmLooseContainerBookmarksRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmLooseContainerBookmarksRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmLooseContainerBookmarksRelationship'] = ResolversParentTypes['BmLooseContainerBookmarksRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Bookmark'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmLooseContainerEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmLooseContainerEdge'] = ResolversParentTypes['BmLooseContainerEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['BmLooseContainer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmLooseContainerMemberConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmLooseContainerMemberConnection'] = ResolversParentTypes['BmLooseContainerMemberConnection']> = {
  edges?: Resolver<Array<ResolversTypes['BmLooseContainerMemberRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmLooseContainerMemberMemberAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmLooseContainerMemberMemberAggregationSelection'] = ResolversParentTypes['BmLooseContainerMemberMemberAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['BmLooseContainerMemberMemberNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmLooseContainerMemberMemberNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmLooseContainerMemberMemberNodeAggregateSelection'] = ResolversParentTypes['BmLooseContainerMemberMemberNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  memberName?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  passwordHash?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmLooseContainerMemberRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmLooseContainerMemberRelationship'] = ResolversParentTypes['BmLooseContainerMemberRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmLooseContainersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmLooseContainersConnection'] = ResolversParentTypes['BmLooseContainersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['BmLooseContainerEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmsPagedResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmsPaged'] = ResolversParentTypes['BmsPaged']> = {
  bookmarks?: Resolver<Array<ResolversTypes['BookmarkDl2']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BmsPagedAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BmsPagedAggregateSelection'] = ResolversParentTypes['BmsPagedAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['IntAggregateSelection'], ParentType, ContextType>;
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
  member?: Resolver<ResolversTypes['Member'], ParentType, ContextType, RequireFields<BookmarkMemberArgs, 'directed'>>;
  memberAggregate?: Resolver<Maybe<ResolversTypes['BookmarkMemberMemberAggregationSelection']>, ParentType, ContextType, RequireFields<BookmarkMemberAggregateArgs, 'directed'>>;
  memberConnection?: Resolver<ResolversTypes['BookmarkMemberConnection'], ParentType, ContextType, RequireFields<BookmarkMemberConnectionArgs, 'directed'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Parent']>, ParentType, ContextType, RequireFields<BookmarkParentArgs, 'directed'>>;
  parentAggregate?: Resolver<Maybe<ResolversTypes['BookmarkParentParentAggregationSelection']>, ParentType, ContextType, RequireFields<BookmarkParentAggregateArgs, 'directed'>>;
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
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  domainName?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  iconUri?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  linkPath?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
  urlScheme?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
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

export type BookmarkDl2Resolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkDl2'] = ResolversParentTypes['BookmarkDl2']> = {
  collectionId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domainName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iconUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  linkPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['TagDs']>>, ParentType, ContextType>;
  urlScheme?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkDl2AggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkDl2AggregateSelection'] = ResolversParentTypes['BookmarkDl2AggregateSelection']> = {
  collectionId?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  domainName?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  iconUri?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  linkPath?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  parentId?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  urlScheme?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkDl2EdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkDl2Edge'] = ResolversParentTypes['BookmarkDl2Edge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['BookmarkDl2'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkDl2sConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkDl2sConnection'] = ResolversParentTypes['BookmarkDl2sConnection']> = {
  edges?: Resolver<Array<ResolversTypes['BookmarkDl2Edge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkDlAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkDlAggregateSelection'] = ResolversParentTypes['BookmarkDlAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  domainName?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  iconUri?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  linkPath?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  urlScheme?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
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
  bmParentsTxt?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  bmTxt?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  bmUrl?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  sortBy?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  sortDir?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  memberName?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  passwordHash?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
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

export type BookmarkMemberConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkMemberConnection'] = ResolversParentTypes['BookmarkMemberConnection']> = {
  edges?: Resolver<Array<ResolversTypes['BookmarkMemberRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkMemberMemberAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkMemberMemberAggregationSelection'] = ResolversParentTypes['BookmarkMemberMemberAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['BookmarkMemberMemberNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkMemberMemberNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkMemberMemberNodeAggregateSelection'] = ResolversParentTypes['BookmarkMemberMemberNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  memberName?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  passwordHash?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkMemberRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkMemberRelationship'] = ResolversParentTypes['BookmarkMemberRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkParentConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkParentConnection'] = ResolversParentTypes['BookmarkParentConnection']> = {
  edges?: Resolver<Array<ResolversTypes['BookmarkParentRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkParentParentAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkParentParentAggregationSelection'] = ResolversParentTypes['BookmarkParentParentAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['BookmarkParentParentNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkParentParentNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkParentParentNodeAggregateSelection'] = ResolversParentTypes['BookmarkParentParentNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
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
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
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

export type CollBmCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollBmCount'] = ResolversParentTypes['CollBmCount']> = {
  bmCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollBmCountAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollBmCountAggregateSelection'] = ResolversParentTypes['CollBmCountAggregateSelection']> = {
  bmCount?: Resolver<ResolversTypes['IntAggregateSelection'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollBmCountEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollBmCountEdge'] = ResolversParentTypes['CollBmCountEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CollBmCount'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollBmCountsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollBmCountsConnection'] = ResolversParentTypes['CollBmCountsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CollBmCountEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  children?: Resolver<Array<ResolversTypes['Child']>, ParentType, ContextType, RequireFields<CollectionChildrenArgs, 'directed'>>;
  childrenConnection?: Resolver<ResolversTypes['CollectionChildrenConnection'], ParentType, ContextType, RequireFields<CollectionChildrenConnectionArgs, 'directed'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  member?: Resolver<ResolversTypes['Member'], ParentType, ContextType, RequireFields<CollectionMemberArgs, 'directed'>>;
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
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
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
  bookmarkCount?: Resolver<ResolversTypes['IntAggregateSelection'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  deepness?: Resolver<ResolversTypes['IntAggregateSelection'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  memberName?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  passwordHash?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
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

export type CreateBmLooseContainersMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateBmLooseContainersMutationResponse'] = ResolversParentTypes['CreateBmLooseContainersMutationResponse']> = {
  bmLooseContainers?: Resolver<Array<ResolversTypes['BmLooseContainer']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateBmsPagedsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateBmsPagedsMutationResponse'] = ResolversParentTypes['CreateBmsPagedsMutationResponse']> = {
  bmsPageds?: Resolver<Array<ResolversTypes['BmsPaged']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateBookmarkDl2sMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateBookmarkDl2sMutationResponse'] = ResolversParentTypes['CreateBookmarkDl2sMutationResponse']> = {
  bookmarkDl2s?: Resolver<Array<ResolversTypes['BookmarkDl2']>, ParentType, ContextType>;
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

export type CreateCollBmCountsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCollBmCountsMutationResponse'] = ResolversParentTypes['CreateCollBmCountsMutationResponse']> = {
  collBmCounts?: Resolver<Array<ResolversTypes['CollBmCount']>, ParentType, ContextType>;
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

export type CreateParentDsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateParentDsMutationResponse'] = ResolversParentTypes['CreateParentDsMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  parentDs?: Resolver<Array<ResolversTypes['ParentDs']>, ParentType, ContextType>;
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

export type CreateTagDlsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTagDlsMutationResponse'] = ResolversParentTypes['CreateTagDlsMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  tagDls?: Resolver<Array<ResolversTypes['TagDl']>, ParentType, ContextType>;
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

export type DateTimeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DateTimeAggregateSelection'] = ResolversParentTypes['DateTimeAggregateSelection']> = {
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
  member?: Resolver<ResolversTypes['Member'], ParentType, ContextType, RequireFields<FolderMemberArgs, 'directed'>>;
  memberAggregate?: Resolver<Maybe<ResolversTypes['FolderMemberMemberAggregationSelection']>, ParentType, ContextType, RequireFields<FolderMemberAggregateArgs, 'directed'>>;
  memberConnection?: Resolver<ResolversTypes['FolderMemberConnection'], ParentType, ContextType, RequireFields<FolderMemberConnectionArgs, 'directed'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Parent']>, ParentType, ContextType, RequireFields<FolderParentArgs, 'directed'>>;
  parentAggregate?: Resolver<Maybe<ResolversTypes['FolderParentParentAggregationSelection']>, ParentType, ContextType, RequireFields<FolderParentAggregateArgs, 'directed'>>;
  parentConnection?: Resolver<ResolversTypes['FolderParentConnection'], ParentType, ContextType, RequireFields<FolderParentConnectionArgs, 'directed'>>;
  parentMeta?: Resolver<Maybe<ResolversTypes['ParentMeta']>, ParentType, ContextType, RequireFields<FolderParentMetaArgs, 'directed'>>;
  parentMetaAggregate?: Resolver<Maybe<ResolversTypes['FolderParentMetaParentMetaAggregationSelection']>, ParentType, ContextType, RequireFields<FolderParentMetaAggregateArgs, 'directed'>>;
  parentMetaConnection?: Resolver<ResolversTypes['FolderParentMetaConnection'], ParentType, ContextType, RequireFields<FolderParentMetaConnectionArgs, 'directed'>>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderAggregateSelection'] = ResolversParentTypes['FolderAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
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
  bookmarkCount?: Resolver<ResolversTypes['IntAggregateSelection'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
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

export type FolderMemberConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderMemberConnection'] = ResolversParentTypes['FolderMemberConnection']> = {
  edges?: Resolver<Array<ResolversTypes['FolderMemberRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderMemberMemberAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderMemberMemberAggregationSelection'] = ResolversParentTypes['FolderMemberMemberAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['FolderMemberMemberNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderMemberMemberNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderMemberMemberNodeAggregateSelection'] = ResolversParentTypes['FolderMemberMemberNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  memberName?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  passwordHash?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderMemberRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderMemberRelationship'] = ResolversParentTypes['FolderMemberRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderParentMetaRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderParentMetaRelationship'] = ResolversParentTypes['FolderParentMetaRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParentMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderParentParentAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderParentParentAggregationSelection'] = ResolversParentTypes['FolderParentParentAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['FolderParentParentNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderParentParentNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FolderParentParentNodeAggregateSelection'] = ResolversParentTypes['FolderParentParentNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
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

export type IdAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['IDAggregateSelection'] = ResolversParentTypes['IDAggregateSelection']> = {
  longest?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  shortest?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IntAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['IntAggregateSelection'] = ResolversParentTypes['IntAggregateSelection']> = {
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
  bmsContainer?: Resolver<Maybe<ResolversTypes['BmLooseContainer']>, ParentType, ContextType, RequireFields<MemberBmsContainerArgs, 'directed'>>;
  bmsContainerAggregate?: Resolver<Maybe<ResolversTypes['MemberBmLooseContainerBmsContainerAggregationSelection']>, ParentType, ContextType, RequireFields<MemberBmsContainerAggregateArgs, 'directed'>>;
  bmsContainerConnection?: Resolver<ResolversTypes['MemberBmsContainerConnection'], ParentType, ContextType, RequireFields<MemberBmsContainerConnectionArgs, 'directed'>>;
  bookmarks?: Resolver<Array<ResolversTypes['Bookmark']>, ParentType, ContextType, RequireFields<MemberBookmarksArgs, 'directed'>>;
  bookmarksAggregate?: Resolver<Maybe<ResolversTypes['MemberBookmarkBookmarksAggregationSelection']>, ParentType, ContextType, RequireFields<MemberBookmarksAggregateArgs, 'directed'>>;
  bookmarksConnection?: Resolver<ResolversTypes['MemberBookmarksConnection'], ParentType, ContextType, RequireFields<MemberBookmarksConnectionArgs, 'directed'>>;
  collections?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<MemberCollectionsArgs, 'directed'>>;
  collectionsAggregate?: Resolver<Maybe<ResolversTypes['MemberCollectionCollectionsAggregationSelection']>, ParentType, ContextType, RequireFields<MemberCollectionsAggregateArgs, 'directed'>>;
  collectionsConnection?: Resolver<ResolversTypes['MemberCollectionsConnection'], ParentType, ContextType, RequireFields<MemberCollectionsConnectionArgs, 'directed'>>;
  folders?: Resolver<Array<ResolversTypes['Folder']>, ParentType, ContextType, RequireFields<MemberFoldersArgs, 'directed'>>;
  foldersAggregate?: Resolver<Maybe<ResolversTypes['MemberFolderFoldersAggregationSelection']>, ParentType, ContextType, RequireFields<MemberFoldersAggregateArgs, 'directed'>>;
  foldersConnection?: Resolver<ResolversTypes['MemberFoldersConnection'], ParentType, ContextType, RequireFields<MemberFoldersConnectionArgs, 'directed'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  memberMeta?: Resolver<Maybe<ResolversTypes['MemberMeta']>, ParentType, ContextType, RequireFields<MemberMemberMetaArgs, 'directed'>>;
  memberMetaAggregate?: Resolver<Maybe<ResolversTypes['MemberMemberMetaMemberMetaAggregationSelection']>, ParentType, ContextType, RequireFields<MemberMemberMetaAggregateArgs, 'directed'>>;
  memberMetaConnection?: Resolver<ResolversTypes['MemberMemberMetaConnection'], ParentType, ContextType, RequireFields<MemberMemberMetaConnectionArgs, 'directed'>>;
  memberName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  passwordHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberAggregateSelection'] = ResolversParentTypes['MemberAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  memberName?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  passwordHash?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
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

export type MemberBmLooseContainerBmsContainerAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberBmLooseContainerBmsContainerAggregationSelection'] = ResolversParentTypes['MemberBmLooseContainerBmsContainerAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MemberBmLooseContainerBmsContainerNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberBmLooseContainerBmsContainerNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberBmLooseContainerBmsContainerNodeAggregateSelection'] = ResolversParentTypes['MemberBmLooseContainerBmsContainerNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
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
  node?: Resolver<ResolversTypes['BmLooseContainer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberBookmarkBookmarksAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberBookmarkBookmarksAggregationSelection'] = ResolversParentTypes['MemberBookmarkBookmarksAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MemberBookmarkBookmarksNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberBookmarkBookmarksNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberBookmarkBookmarksNodeAggregateSelection'] = ResolversParentTypes['MemberBookmarkBookmarksNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  domainName?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  iconUri?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  linkPath?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
  urlScheme?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberBookmarkFilterBmFiltersAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberBookmarkFilterBmFiltersAggregationSelection'] = ResolversParentTypes['MemberBookmarkFilterBmFiltersAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MemberBookmarkFilterBmFiltersNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberBookmarkFilterBmFiltersNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberBookmarkFilterBmFiltersNodeAggregateSelection'] = ResolversParentTypes['MemberBookmarkFilterBmFiltersNodeAggregateSelection']> = {
  bmParentsTxt?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  bmTxt?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  bmUrl?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  sortBy?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  sortDir?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberBookmarksConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberBookmarksConnection'] = ResolversParentTypes['MemberBookmarksConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MemberBookmarksRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberBookmarksRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberBookmarksRelationship'] = ResolversParentTypes['MemberBookmarksRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Bookmark'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberCollectionCollectionsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberCollectionCollectionsAggregationSelection'] = ResolversParentTypes['MemberCollectionCollectionsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MemberCollectionCollectionsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberCollectionCollectionsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberCollectionCollectionsNodeAggregateSelection'] = ResolversParentTypes['MemberCollectionCollectionsNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
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

export type MemberFolderFoldersAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberFolderFoldersAggregationSelection'] = ResolversParentTypes['MemberFolderFoldersAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MemberFolderFoldersNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberFolderFoldersNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberFolderFoldersNodeAggregateSelection'] = ResolversParentTypes['MemberFolderFoldersNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberFoldersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberFoldersConnection'] = ResolversParentTypes['MemberFoldersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MemberFoldersRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberFoldersRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberFoldersRelationship'] = ResolversParentTypes['MemberFoldersRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Folder'], ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  memberName?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  passwordHash?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
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
  createBmLooseContainers?: Resolver<ResolversTypes['CreateBmLooseContainersMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateBmLooseContainersArgs, 'input'>>;
  createBmsPageds?: Resolver<ResolversTypes['CreateBmsPagedsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateBmsPagedsArgs, 'input'>>;
  createBookmarkDl?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationCreateBookmarkDlArgs, 'data'>>;
  createBookmarkDl2s?: Resolver<ResolversTypes['CreateBookmarkDl2sMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateBookmarkDl2sArgs, 'input'>>;
  createBookmarkDls?: Resolver<ResolversTypes['CreateBookmarkDlsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateBookmarkDlsArgs, 'input'>>;
  createBookmarkFilters?: Resolver<ResolversTypes['CreateBookmarkFiltersMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateBookmarkFiltersArgs, 'input'>>;
  createBookmarks?: Resolver<ResolversTypes['CreateBookmarksMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateBookmarksArgs, 'input'>>;
  createCollBmCounts?: Resolver<ResolversTypes['CreateCollBmCountsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateCollBmCountsArgs, 'input'>>;
  createCollection?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationCreateCollectionArgs, 'memberId' | 'name'>>;
  createCollectionDs?: Resolver<ResolversTypes['CreateCollectionDsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateCollectionDsArgs, 'input'>>;
  createCollectionDsLists?: Resolver<ResolversTypes['CreateCollectionDsListsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateCollectionDsListsArgs, 'input'>>;
  createCollections?: Resolver<ResolversTypes['CreateCollectionsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateCollectionsArgs, 'input'>>;
  createFolder?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationCreateFolderArgs, 'name' | 'parentId' | 'position'>>;
  createFolderDls?: Resolver<ResolversTypes['CreateFolderDlsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateFolderDlsArgs, 'input'>>;
  createFolders?: Resolver<ResolversTypes['CreateFoldersMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateFoldersArgs, 'input'>>;
  createMemberMetas?: Resolver<ResolversTypes['CreateMemberMetasMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateMemberMetasArgs, 'input'>>;
  createMembers?: Resolver<ResolversTypes['CreateMembersMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateMembersArgs, 'input'>>;
  createParentDs?: Resolver<ResolversTypes['CreateParentDsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateParentDsArgs, 'input'>>;
  createParentMetas?: Resolver<ResolversTypes['CreateParentMetasMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateParentMetasArgs, 'input'>>;
  createParentsChildren?: Resolver<ResolversTypes['CreateParentsChildrenMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateParentsChildrenArgs, 'input'>>;
  createTagDls?: Resolver<ResolversTypes['CreateTagDlsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateTagDlsArgs, 'input'>>;
  createTagDs?: Resolver<ResolversTypes['CreateTagDsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateTagDsArgs, 'input'>>;
  createTags?: Resolver<ResolversTypes['CreateTagsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateTagsArgs, 'input'>>;
  deleteAllBms?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  deleteAllLooseBms?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  deleteBmLooseContainers?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteBmLooseContainersArgs>>;
  deleteBmsPageds?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteBmsPagedsArgs>>;
  deleteBookmark?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteBookmarkArgs, 'id'>>;
  deleteBookmarkDl2s?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteBookmarkDl2sArgs>>;
  deleteBookmarkDls?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteBookmarkDlsArgs>>;
  deleteBookmarkFilters?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteBookmarkFiltersArgs>>;
  deleteBookmarks?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteBookmarksArgs>>;
  deleteCascade?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteCascadeArgs, 'id'>>;
  deleteCollBmCounts?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteCollBmCountsArgs>>;
  deleteCollBookmark?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteCollBookmarkArgs, 'id' | 'parentId'>>;
  deleteCollection?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteCollectionArgs, 'id'>>;
  deleteCollectionDs?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteCollectionDsArgs>>;
  deleteCollectionDsLists?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteCollectionDsListsArgs>>;
  deleteCollections?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteCollectionsArgs>>;
  deleteFolder?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteFolderArgs, 'id' | 'parentId'>>;
  deleteFolderDls?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteFolderDlsArgs>>;
  deleteFolders?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteFoldersArgs>>;
  deleteHierarchBmsXGetCollBmCounts?: Resolver<Maybe<Array<ResolversTypes['CollBmCount']>>, ParentType, ContextType, Partial<MutationDeleteHierarchBmsXGetCollBmCountsArgs>>;
  deleteListCascade?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteListCascadeArgs, 'ids'>>;
  deleteManyBms?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MutationDeleteManyBmsArgs>>;
  deleteManyColls?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteManyCollsArgs, 'ids'>>;
  deleteManyNodes?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteManyNodesArgs, 'nodes'>>;
  deleteMemberMetas?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteMemberMetasArgs>>;
  deleteMembers?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteMembersArgs>>;
  deleteParentDs?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteParentDsArgs>>;
  deleteParentMetas?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteParentMetasArgs>>;
  deleteParentsChildren?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteParentsChildrenArgs>>;
  deleteTagDls?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteTagDlsArgs>>;
  deleteTagDs?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteTagDsArgs>>;
  deleteTags?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteTagsArgs>>;
  importFirefoxBookmarks?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationImportFirefoxBookmarksArgs, 'file'>>;
  moveAllBms?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationMoveAllBmsArgs, 'destId'>>;
  moveBmsToBLC?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationMoveBmsToBlcArgs, 'nodes'>>;
  moveCollBmsInContainer?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationMoveCollBmsInContainerArgs, 'nodes'>>;
  moveCollNodes2CollNode?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationMoveCollNodes2CollNodeArgs, 'destId' | 'parentChildsList'>>;
  moveColls2CollNode?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationMoveColls2CollNodeArgs, 'collIds' | 'destId'>>;
  moveLooseBms2CollNode?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationMoveLooseBms2CollNodeArgs, 'destId'>>;
  moveManyNodes?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationMoveManyNodesArgs, 'nodes'>>;
  updateBmLooseContainers?: Resolver<ResolversTypes['UpdateBmLooseContainersMutationResponse'], ParentType, ContextType, Partial<MutationUpdateBmLooseContainersArgs>>;
  updateBmsPageds?: Resolver<ResolversTypes['UpdateBmsPagedsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateBmsPagedsArgs>>;
  updateBookmarkDl2s?: Resolver<ResolversTypes['UpdateBookmarkDl2sMutationResponse'], ParentType, ContextType, Partial<MutationUpdateBookmarkDl2sArgs>>;
  updateBookmarkDls?: Resolver<ResolversTypes['UpdateBookmarkDlsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateBookmarkDlsArgs>>;
  updateBookmarkFilters?: Resolver<ResolversTypes['UpdateBookmarkFiltersMutationResponse'], ParentType, ContextType, Partial<MutationUpdateBookmarkFiltersArgs>>;
  updateBookmarks?: Resolver<ResolversTypes['UpdateBookmarksMutationResponse'], ParentType, ContextType, Partial<MutationUpdateBookmarksArgs>>;
  updateCollBmCounts?: Resolver<ResolversTypes['UpdateCollBmCountsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateCollBmCountsArgs>>;
  updateCollectionDs?: Resolver<ResolversTypes['UpdateCollectionDsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateCollectionDsArgs>>;
  updateCollectionDsLists?: Resolver<ResolversTypes['UpdateCollectionDsListsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateCollectionDsListsArgs>>;
  updateCollections?: Resolver<ResolversTypes['UpdateCollectionsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateCollectionsArgs>>;
  updateFolderDls?: Resolver<ResolversTypes['UpdateFolderDlsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateFolderDlsArgs>>;
  updateFolders?: Resolver<ResolversTypes['UpdateFoldersMutationResponse'], ParentType, ContextType, Partial<MutationUpdateFoldersArgs>>;
  updateMemberMetas?: Resolver<ResolversTypes['UpdateMemberMetasMutationResponse'], ParentType, ContextType, Partial<MutationUpdateMemberMetasArgs>>;
  updateMembers?: Resolver<ResolversTypes['UpdateMembersMutationResponse'], ParentType, ContextType, Partial<MutationUpdateMembersArgs>>;
  updateParentDs?: Resolver<ResolversTypes['UpdateParentDsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateParentDsArgs>>;
  updateParentMetas?: Resolver<ResolversTypes['UpdateParentMetasMutationResponse'], ParentType, ContextType, Partial<MutationUpdateParentMetasArgs>>;
  updateParentsChildren?: Resolver<ResolversTypes['UpdateParentsChildrenMutationResponse'], ParentType, ContextType, Partial<MutationUpdateParentsChildrenArgs>>;
  updateTagDls?: Resolver<ResolversTypes['UpdateTagDlsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateTagDlsArgs>>;
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
  __resolveType: TypeResolveFn<'BmLooseContainer' | 'Collection' | 'Folder', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type ParentAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentAggregateSelection'] = ResolversParentTypes['ParentAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentDsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentDs'] = ResolversParentTypes['ParentDs']> = {
  bmCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentDsAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentDsAggregateSelection'] = ResolversParentTypes['ParentDsAggregateSelection']> = {
  bmCount?: Resolver<ResolversTypes['IntAggregateSelection'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  parentId?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentDsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentDsConnection'] = ResolversParentTypes['ParentDsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParentDsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentDsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentDsEdge'] = ResolversParentTypes['ParentDsEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParentDs'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentEdge'] = ResolversParentTypes['ParentEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Parent'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentMeta'] = ResolversParentTypes['ParentMeta']> = {
  childPositions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Parent']>, ParentType, ContextType, RequireFields<ParentMetaParentArgs, 'directed'>>;
  parentAggregate?: Resolver<Maybe<ResolversTypes['ParentMetaParentParentAggregationSelection']>, ParentType, ContextType, RequireFields<ParentMetaParentAggregateArgs, 'directed'>>;
  parentConnection?: Resolver<ResolversTypes['ParentMetaParentConnection'], ParentType, ContextType, RequireFields<ParentMetaParentConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentMetaAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentMetaAggregateSelection'] = ResolversParentTypes['ParentMetaAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
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

export type ParentMetaParentParentAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentMetaParentParentAggregationSelection'] = ResolversParentTypes['ParentMetaParentParentAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ParentMetaParentParentNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParentMetaParentParentNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentMetaParentParentNodeAggregateSelection'] = ResolversParentTypes['ParentMetaParentParentNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
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

export type ParentsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParentsConnection'] = ResolversParentTypes['ParentsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ParentEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  bmLooseContainers?: Resolver<Array<ResolversTypes['BmLooseContainer']>, ParentType, ContextType, Partial<QueryBmLooseContainersArgs>>;
  bmLooseContainersAggregate?: Resolver<ResolversTypes['BmLooseContainerAggregateSelection'], ParentType, ContextType, Partial<QueryBmLooseContainersAggregateArgs>>;
  bmLooseContainersConnection?: Resolver<ResolversTypes['BmLooseContainersConnection'], ParentType, ContextType, Partial<QueryBmLooseContainersConnectionArgs>>;
  bmsByFilter?: Resolver<ResolversTypes['BmsPaged'], ParentType, ContextType, RequireFields<QueryBmsByFilterArgs, 'filter' | 'limit' | 'offset'>>;
  bmsPageds?: Resolver<Array<ResolversTypes['BmsPaged']>, ParentType, ContextType, Partial<QueryBmsPagedsArgs>>;
  bmsPagedsAggregate?: Resolver<ResolversTypes['BmsPagedAggregateSelection'], ParentType, ContextType, Partial<QueryBmsPagedsAggregateArgs>>;
  bmsPagedsConnection?: Resolver<ResolversTypes['BmsPagedsConnection'], ParentType, ContextType, Partial<QueryBmsPagedsConnectionArgs>>;
  bookmarkDl2s?: Resolver<Array<ResolversTypes['BookmarkDl2']>, ParentType, ContextType, Partial<QueryBookmarkDl2sArgs>>;
  bookmarkDl2sAggregate?: Resolver<ResolversTypes['BookmarkDl2AggregateSelection'], ParentType, ContextType, Partial<QueryBookmarkDl2sAggregateArgs>>;
  bookmarkDl2sConnection?: Resolver<ResolversTypes['BookmarkDl2sConnection'], ParentType, ContextType, Partial<QueryBookmarkDl2sConnectionArgs>>;
  bookmarkDls?: Resolver<Array<ResolversTypes['BookmarkDl']>, ParentType, ContextType, Partial<QueryBookmarkDlsArgs>>;
  bookmarkDlsAggregate?: Resolver<ResolversTypes['BookmarkDlAggregateSelection'], ParentType, ContextType, Partial<QueryBookmarkDlsAggregateArgs>>;
  bookmarkDlsConnection?: Resolver<ResolversTypes['BookmarkDlsConnection'], ParentType, ContextType, Partial<QueryBookmarkDlsConnectionArgs>>;
  bookmarkFilters?: Resolver<Array<ResolversTypes['BookmarkFilter']>, ParentType, ContextType, Partial<QueryBookmarkFiltersArgs>>;
  bookmarkFiltersAggregate?: Resolver<ResolversTypes['BookmarkFilterAggregateSelection'], ParentType, ContextType, Partial<QueryBookmarkFiltersAggregateArgs>>;
  bookmarkFiltersConnection?: Resolver<ResolversTypes['BookmarkFiltersConnection'], ParentType, ContextType, Partial<QueryBookmarkFiltersConnectionArgs>>;
  bookmarks?: Resolver<Array<ResolversTypes['Bookmark']>, ParentType, ContextType, Partial<QueryBookmarksArgs>>;
  bookmarksAggregate?: Resolver<ResolversTypes['BookmarkAggregateSelection'], ParentType, ContextType, Partial<QueryBookmarksAggregateArgs>>;
  bookmarksConnection?: Resolver<ResolversTypes['BookmarksConnection'], ParentType, ContextType, Partial<QueryBookmarksConnectionArgs>>;
  childDls?: Resolver<Array<ResolversTypes['ChildDl']>, ParentType, ContextType, Partial<QueryChildDlsArgs>>;
  children?: Resolver<Array<ResolversTypes['Child']>, ParentType, ContextType, Partial<QueryChildrenArgs>>;
  collBmCounts?: Resolver<Array<ResolversTypes['CollBmCount']>, ParentType, ContextType, Partial<QueryCollBmCountsArgs>>;
  collBmCountsAggregate?: Resolver<ResolversTypes['CollBmCountAggregateSelection'], ParentType, ContextType, Partial<QueryCollBmCountsAggregateArgs>>;
  collBmCountsConnection?: Resolver<ResolversTypes['CollBmCountsConnection'], ParentType, ContextType, Partial<QueryCollBmCountsConnectionArgs>>;
  collectionDs?: Resolver<Array<ResolversTypes['CollectionDs']>, ParentType, ContextType, Partial<QueryCollectionDsArgs>>;
  collectionDsAggregate?: Resolver<ResolversTypes['CollectionDsAggregateSelection'], ParentType, ContextType, Partial<QueryCollectionDsAggregateArgs>>;
  collectionDsConnection?: Resolver<ResolversTypes['CollectionDsConnection'], ParentType, ContextType, Partial<QueryCollectionDsConnectionArgs>>;
  collectionDsLists?: Resolver<Array<ResolversTypes['CollectionDsList']>, ParentType, ContextType, Partial<QueryCollectionDsListsArgs>>;
  collectionDsListsAggregate?: Resolver<ResolversTypes['CollectionDsListAggregateSelection'], ParentType, ContextType, Partial<QueryCollectionDsListsAggregateArgs>>;
  collectionDsListsConnection?: Resolver<ResolversTypes['CollectionDsListsConnection'], ParentType, ContextType, Partial<QueryCollectionDsListsConnectionArgs>>;
  collectionList?: Resolver<Maybe<ResolversTypes['CollectionDsList']>, ParentType, ContextType, RequireFields<QueryCollectionListArgs, 'memberId'>>;
  collections?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType, Partial<QueryCollectionsArgs>>;
  collectionsAggregate?: Resolver<ResolversTypes['CollectionAggregateSelection'], ParentType, ContextType, Partial<QueryCollectionsAggregateArgs>>;
  collectionsByBmIdsXBmCounts?: Resolver<Maybe<Array<ResolversTypes['CollBmCount']>>, ParentType, ContextType, RequireFields<QueryCollectionsByBmIdsXBmCountsArgs, 'ids'>>;
  collectionsConnection?: Resolver<ResolversTypes['CollectionsConnection'], ParentType, ContextType, Partial<QueryCollectionsConnectionArgs>>;
  folderDls?: Resolver<Array<ResolversTypes['FolderDl']>, ParentType, ContextType, Partial<QueryFolderDlsArgs>>;
  folderDlsAggregate?: Resolver<ResolversTypes['FolderDlAggregateSelection'], ParentType, ContextType, Partial<QueryFolderDlsAggregateArgs>>;
  folderDlsConnection?: Resolver<ResolversTypes['FolderDlsConnection'], ParentType, ContextType, Partial<QueryFolderDlsConnectionArgs>>;
  folders?: Resolver<Array<ResolversTypes['Folder']>, ParentType, ContextType, Partial<QueryFoldersArgs>>;
  foldersAggregate?: Resolver<ResolversTypes['FolderAggregateSelection'], ParentType, ContextType, Partial<QueryFoldersAggregateArgs>>;
  foldersConnection?: Resolver<ResolversTypes['FoldersConnection'], ParentType, ContextType, Partial<QueryFoldersConnectionArgs>>;
  looseBmCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<QueryLooseBmCountArgs, 'memberId'>>;
  memberMetas?: Resolver<Array<ResolversTypes['MemberMeta']>, ParentType, ContextType, Partial<QueryMemberMetasArgs>>;
  memberMetasAggregate?: Resolver<ResolversTypes['MemberMetaAggregateSelection'], ParentType, ContextType, Partial<QueryMemberMetasAggregateArgs>>;
  memberMetasConnection?: Resolver<ResolversTypes['MemberMetasConnection'], ParentType, ContextType, Partial<QueryMemberMetasConnectionArgs>>;
  members?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType, Partial<QueryMembersArgs>>;
  membersAggregate?: Resolver<ResolversTypes['MemberAggregateSelection'], ParentType, ContextType, Partial<QueryMembersAggregateArgs>>;
  membersConnection?: Resolver<ResolversTypes['MembersConnection'], ParentType, ContextType, Partial<QueryMembersConnectionArgs>>;
  nl_parentsChildren?: Resolver<Array<ResolversTypes['ParentsChildren']>, ParentType, ContextType, RequireFields<QueryNl_ParentsChildrenArgs, 'ids' | 'level'>>;
  parentChildren?: Resolver<Array<ResolversTypes['ChildDl']>, ParentType, ContextType, RequireFields<QueryParentChildrenArgs, 'id' | 'level'>>;
  parentDs?: Resolver<Array<ResolversTypes['ParentDs']>, ParentType, ContextType, Partial<QueryParentDsArgs>>;
  parentDsAggregate?: Resolver<ResolversTypes['ParentDsAggregateSelection'], ParentType, ContextType, Partial<QueryParentDsAggregateArgs>>;
  parentDsConnection?: Resolver<ResolversTypes['ParentDsConnection'], ParentType, ContextType, Partial<QueryParentDsConnectionArgs>>;
  parentMetas?: Resolver<Array<ResolversTypes['ParentMeta']>, ParentType, ContextType, Partial<QueryParentMetasArgs>>;
  parentMetasAggregate?: Resolver<ResolversTypes['ParentMetaAggregateSelection'], ParentType, ContextType, Partial<QueryParentMetasAggregateArgs>>;
  parentMetasConnection?: Resolver<ResolversTypes['ParentMetasConnection'], ParentType, ContextType, Partial<QueryParentMetasConnectionArgs>>;
  parents?: Resolver<Array<ResolversTypes['Parent']>, ParentType, ContextType, Partial<QueryParentsArgs>>;
  parentsAggregate?: Resolver<ResolversTypes['ParentAggregateSelection'], ParentType, ContextType, Partial<QueryParentsAggregateArgs>>;
  parentsByFilter?: Resolver<Maybe<Array<ResolversTypes['ParentDs']>>, ParentType, ContextType, RequireFields<QueryParentsByFilterArgs, 'limit' | 'name' | 'offset'>>;
  parentsChildren?: Resolver<Array<ResolversTypes['ParentsChildren']>, ParentType, ContextType, Partial<QueryParentsChildrenArgs>>;
  parentsChildrenAggregate?: Resolver<ResolversTypes['ParentsChildrenAggregateSelection'], ParentType, ContextType, Partial<QueryParentsChildrenAggregateArgs>>;
  parentsChildrenConnection?: Resolver<ResolversTypes['ParentsChildrenConnection'], ParentType, ContextType, Partial<QueryParentsChildrenConnectionArgs>>;
  parentsConnection?: Resolver<ResolversTypes['ParentsConnection'], ParentType, ContextType, Partial<QueryParentsConnectionArgs>>;
  signIn?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QuerySignInArgs, 'memberName' | 'pw'>>;
  tagDls?: Resolver<Array<ResolversTypes['TagDl']>, ParentType, ContextType, Partial<QueryTagDlsArgs>>;
  tagDlsAggregate?: Resolver<ResolversTypes['TagDlAggregateSelection'], ParentType, ContextType, Partial<QueryTagDlsAggregateArgs>>;
  tagDlsConnection?: Resolver<ResolversTypes['TagDlsConnection'], ParentType, ContextType, Partial<QueryTagDlsConnectionArgs>>;
  tagDs?: Resolver<Array<ResolversTypes['TagDs']>, ParentType, ContextType, Partial<QueryTagDsArgs>>;
  tagDsAggregate?: Resolver<ResolversTypes['TagDsAggregateSelection'], ParentType, ContextType, Partial<QueryTagDsAggregateArgs>>;
  tagDsConnection?: Resolver<ResolversTypes['TagDsConnection'], ParentType, ContextType, Partial<QueryTagDsConnectionArgs>>;
  tagList?: Resolver<Maybe<Array<ResolversTypes['TagDl']>>, ParentType, ContextType, RequireFields<QueryTagListArgs, 'memberId'>>;
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType, Partial<QueryTagsArgs>>;
  tagsAggregate?: Resolver<ResolversTypes['TagAggregateSelection'], ParentType, ContextType, Partial<QueryTagsAggregateArgs>>;
  tagsConnection?: Resolver<ResolversTypes['TagsConnection'], ParentType, ContextType, Partial<QueryTagsConnectionArgs>>;
};

export type StringAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StringAggregateSelection'] = ResolversParentTypes['StringAggregateSelection']> = {
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
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagBookmarkBookmarksAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagBookmarkBookmarksAggregationSelection'] = ResolversParentTypes['TagBookmarkBookmarksAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TagBookmarkBookmarksNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagBookmarkBookmarksNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagBookmarkBookmarksNodeAggregateSelection'] = ResolversParentTypes['TagBookmarkBookmarksNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  domainName?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  iconUri?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  linkPath?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeAggregateSelection'], ParentType, ContextType>;
  urlScheme?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
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

export type TagDlResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagDl'] = ResolversParentTypes['TagDl']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagDlAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagDlAggregateSelection'] = ResolversParentTypes['TagDlAggregateSelection']> = {
  count?: Resolver<ResolversTypes['IntAggregateSelection'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagDlEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagDlEdge'] = ResolversParentTypes['TagDlEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['TagDl'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagDlsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagDlsConnection'] = ResolversParentTypes['TagDlsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['TagDlEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagDsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagDs'] = ResolversParentTypes['TagDs']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagDsAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagDsAggregateSelection'] = ResolversParentTypes['TagDsAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
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

export type UpdateBmLooseContainersMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateBmLooseContainersMutationResponse'] = ResolversParentTypes['UpdateBmLooseContainersMutationResponse']> = {
  bmLooseContainers?: Resolver<Array<ResolversTypes['BmLooseContainer']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateBmsPagedsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateBmsPagedsMutationResponse'] = ResolversParentTypes['UpdateBmsPagedsMutationResponse']> = {
  bmsPageds?: Resolver<Array<ResolversTypes['BmsPaged']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateBookmarkDl2sMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateBookmarkDl2sMutationResponse'] = ResolversParentTypes['UpdateBookmarkDl2sMutationResponse']> = {
  bookmarkDl2s?: Resolver<Array<ResolversTypes['BookmarkDl2']>, ParentType, ContextType>;
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

export type UpdateCollBmCountsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCollBmCountsMutationResponse'] = ResolversParentTypes['UpdateCollBmCountsMutationResponse']> = {
  collBmCounts?: Resolver<Array<ResolversTypes['CollBmCount']>, ParentType, ContextType>;
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

export type UpdateParentDsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateParentDsMutationResponse'] = ResolversParentTypes['UpdateParentDsMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  parentDs?: Resolver<Array<ResolversTypes['ParentDs']>, ParentType, ContextType>;
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

export type UpdateTagDlsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTagDlsMutationResponse'] = ResolversParentTypes['UpdateTagDlsMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  tagDls?: Resolver<Array<ResolversTypes['TagDl']>, ParentType, ContextType>;
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
  BmLooseContainer?: BmLooseContainerResolvers<ContextType>;
  BmLooseContainerAggregateSelection?: BmLooseContainerAggregateSelectionResolvers<ContextType>;
  BmLooseContainerBookmarkBookmarksAggregationSelection?: BmLooseContainerBookmarkBookmarksAggregationSelectionResolvers<ContextType>;
  BmLooseContainerBookmarkBookmarksNodeAggregateSelection?: BmLooseContainerBookmarkBookmarksNodeAggregateSelectionResolvers<ContextType>;
  BmLooseContainerBookmarksConnection?: BmLooseContainerBookmarksConnectionResolvers<ContextType>;
  BmLooseContainerBookmarksRelationship?: BmLooseContainerBookmarksRelationshipResolvers<ContextType>;
  BmLooseContainerEdge?: BmLooseContainerEdgeResolvers<ContextType>;
  BmLooseContainerMemberConnection?: BmLooseContainerMemberConnectionResolvers<ContextType>;
  BmLooseContainerMemberMemberAggregationSelection?: BmLooseContainerMemberMemberAggregationSelectionResolvers<ContextType>;
  BmLooseContainerMemberMemberNodeAggregateSelection?: BmLooseContainerMemberMemberNodeAggregateSelectionResolvers<ContextType>;
  BmLooseContainerMemberRelationship?: BmLooseContainerMemberRelationshipResolvers<ContextType>;
  BmLooseContainersConnection?: BmLooseContainersConnectionResolvers<ContextType>;
  BmsPaged?: BmsPagedResolvers<ContextType>;
  BmsPagedAggregateSelection?: BmsPagedAggregateSelectionResolvers<ContextType>;
  BmsPagedEdge?: BmsPagedEdgeResolvers<ContextType>;
  BmsPagedsConnection?: BmsPagedsConnectionResolvers<ContextType>;
  Bookmark?: BookmarkResolvers<ContextType>;
  BookmarkAggregateSelection?: BookmarkAggregateSelectionResolvers<ContextType>;
  BookmarkDl?: BookmarkDlResolvers<ContextType>;
  BookmarkDl2?: BookmarkDl2Resolvers<ContextType>;
  BookmarkDl2AggregateSelection?: BookmarkDl2AggregateSelectionResolvers<ContextType>;
  BookmarkDl2Edge?: BookmarkDl2EdgeResolvers<ContextType>;
  BookmarkDl2sConnection?: BookmarkDl2sConnectionResolvers<ContextType>;
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
  BookmarkMemberConnection?: BookmarkMemberConnectionResolvers<ContextType>;
  BookmarkMemberMemberAggregationSelection?: BookmarkMemberMemberAggregationSelectionResolvers<ContextType>;
  BookmarkMemberMemberNodeAggregateSelection?: BookmarkMemberMemberNodeAggregateSelectionResolvers<ContextType>;
  BookmarkMemberRelationship?: BookmarkMemberRelationshipResolvers<ContextType>;
  BookmarkParentConnection?: BookmarkParentConnectionResolvers<ContextType>;
  BookmarkParentParentAggregationSelection?: BookmarkParentParentAggregationSelectionResolvers<ContextType>;
  BookmarkParentParentNodeAggregateSelection?: BookmarkParentParentNodeAggregateSelectionResolvers<ContextType>;
  BookmarkParentRelationship?: BookmarkParentRelationshipResolvers<ContextType>;
  BookmarkTagTagsAggregationSelection?: BookmarkTagTagsAggregationSelectionResolvers<ContextType>;
  BookmarkTagTagsNodeAggregateSelection?: BookmarkTagTagsNodeAggregateSelectionResolvers<ContextType>;
  BookmarkTagsConnection?: BookmarkTagsConnectionResolvers<ContextType>;
  BookmarkTagsRelationship?: BookmarkTagsRelationshipResolvers<ContextType>;
  BookmarksConnection?: BookmarksConnectionResolvers<ContextType>;
  Child?: ChildResolvers<ContextType>;
  ChildDl?: ChildDlResolvers<ContextType>;
  CollBmCount?: CollBmCountResolvers<ContextType>;
  CollBmCountAggregateSelection?: CollBmCountAggregateSelectionResolvers<ContextType>;
  CollBmCountEdge?: CollBmCountEdgeResolvers<ContextType>;
  CollBmCountsConnection?: CollBmCountsConnectionResolvers<ContextType>;
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
  CreateBmLooseContainersMutationResponse?: CreateBmLooseContainersMutationResponseResolvers<ContextType>;
  CreateBmsPagedsMutationResponse?: CreateBmsPagedsMutationResponseResolvers<ContextType>;
  CreateBookmarkDl2sMutationResponse?: CreateBookmarkDl2sMutationResponseResolvers<ContextType>;
  CreateBookmarkDlsMutationResponse?: CreateBookmarkDlsMutationResponseResolvers<ContextType>;
  CreateBookmarkFiltersMutationResponse?: CreateBookmarkFiltersMutationResponseResolvers<ContextType>;
  CreateBookmarksMutationResponse?: CreateBookmarksMutationResponseResolvers<ContextType>;
  CreateCollBmCountsMutationResponse?: CreateCollBmCountsMutationResponseResolvers<ContextType>;
  CreateCollectionDsListsMutationResponse?: CreateCollectionDsListsMutationResponseResolvers<ContextType>;
  CreateCollectionDsMutationResponse?: CreateCollectionDsMutationResponseResolvers<ContextType>;
  CreateCollectionsMutationResponse?: CreateCollectionsMutationResponseResolvers<ContextType>;
  CreateFolderDlsMutationResponse?: CreateFolderDlsMutationResponseResolvers<ContextType>;
  CreateFoldersMutationResponse?: CreateFoldersMutationResponseResolvers<ContextType>;
  CreateInfo?: CreateInfoResolvers<ContextType>;
  CreateMemberMetasMutationResponse?: CreateMemberMetasMutationResponseResolvers<ContextType>;
  CreateMembersMutationResponse?: CreateMembersMutationResponseResolvers<ContextType>;
  CreateParentDsMutationResponse?: CreateParentDsMutationResponseResolvers<ContextType>;
  CreateParentMetasMutationResponse?: CreateParentMetasMutationResponseResolvers<ContextType>;
  CreateParentsChildrenMutationResponse?: CreateParentsChildrenMutationResponseResolvers<ContextType>;
  CreateTagDlsMutationResponse?: CreateTagDlsMutationResponseResolvers<ContextType>;
  CreateTagDsMutationResponse?: CreateTagDsMutationResponseResolvers<ContextType>;
  CreateTagsMutationResponse?: CreateTagsMutationResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DateTimeAggregateSelection?: DateTimeAggregateSelectionResolvers<ContextType>;
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
  FolderMemberConnection?: FolderMemberConnectionResolvers<ContextType>;
  FolderMemberMemberAggregationSelection?: FolderMemberMemberAggregationSelectionResolvers<ContextType>;
  FolderMemberMemberNodeAggregateSelection?: FolderMemberMemberNodeAggregateSelectionResolvers<ContextType>;
  FolderMemberRelationship?: FolderMemberRelationshipResolvers<ContextType>;
  FolderParentConnection?: FolderParentConnectionResolvers<ContextType>;
  FolderParentMetaConnection?: FolderParentMetaConnectionResolvers<ContextType>;
  FolderParentMetaParentMetaAggregationSelection?: FolderParentMetaParentMetaAggregationSelectionResolvers<ContextType>;
  FolderParentMetaParentMetaNodeAggregateSelection?: FolderParentMetaParentMetaNodeAggregateSelectionResolvers<ContextType>;
  FolderParentMetaRelationship?: FolderParentMetaRelationshipResolvers<ContextType>;
  FolderParentParentAggregationSelection?: FolderParentParentAggregationSelectionResolvers<ContextType>;
  FolderParentParentNodeAggregateSelection?: FolderParentParentNodeAggregateSelectionResolvers<ContextType>;
  FolderParentRelationship?: FolderParentRelationshipResolvers<ContextType>;
  FoldersConnection?: FoldersConnectionResolvers<ContextType>;
  IDAggregateSelection?: IdAggregateSelectionResolvers<ContextType>;
  IntAggregateSelection?: IntAggregateSelectionResolvers<ContextType>;
  Member?: MemberResolvers<ContextType>;
  MemberAggregateSelection?: MemberAggregateSelectionResolvers<ContextType>;
  MemberBmFiltersConnection?: MemberBmFiltersConnectionResolvers<ContextType>;
  MemberBmFiltersRelationship?: MemberBmFiltersRelationshipResolvers<ContextType>;
  MemberBmLooseContainerBmsContainerAggregationSelection?: MemberBmLooseContainerBmsContainerAggregationSelectionResolvers<ContextType>;
  MemberBmLooseContainerBmsContainerNodeAggregateSelection?: MemberBmLooseContainerBmsContainerNodeAggregateSelectionResolvers<ContextType>;
  MemberBmsContainerConnection?: MemberBmsContainerConnectionResolvers<ContextType>;
  MemberBmsContainerRelationship?: MemberBmsContainerRelationshipResolvers<ContextType>;
  MemberBookmarkBookmarksAggregationSelection?: MemberBookmarkBookmarksAggregationSelectionResolvers<ContextType>;
  MemberBookmarkBookmarksNodeAggregateSelection?: MemberBookmarkBookmarksNodeAggregateSelectionResolvers<ContextType>;
  MemberBookmarkFilterBmFiltersAggregationSelection?: MemberBookmarkFilterBmFiltersAggregationSelectionResolvers<ContextType>;
  MemberBookmarkFilterBmFiltersNodeAggregateSelection?: MemberBookmarkFilterBmFiltersNodeAggregateSelectionResolvers<ContextType>;
  MemberBookmarksConnection?: MemberBookmarksConnectionResolvers<ContextType>;
  MemberBookmarksRelationship?: MemberBookmarksRelationshipResolvers<ContextType>;
  MemberCollectionCollectionsAggregationSelection?: MemberCollectionCollectionsAggregationSelectionResolvers<ContextType>;
  MemberCollectionCollectionsNodeAggregateSelection?: MemberCollectionCollectionsNodeAggregateSelectionResolvers<ContextType>;
  MemberCollectionsConnection?: MemberCollectionsConnectionResolvers<ContextType>;
  MemberCollectionsRelationship?: MemberCollectionsRelationshipResolvers<ContextType>;
  MemberEdge?: MemberEdgeResolvers<ContextType>;
  MemberFolderFoldersAggregationSelection?: MemberFolderFoldersAggregationSelectionResolvers<ContextType>;
  MemberFolderFoldersNodeAggregateSelection?: MemberFolderFoldersNodeAggregateSelectionResolvers<ContextType>;
  MemberFoldersConnection?: MemberFoldersConnectionResolvers<ContextType>;
  MemberFoldersRelationship?: MemberFoldersRelationshipResolvers<ContextType>;
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
  ParentAggregateSelection?: ParentAggregateSelectionResolvers<ContextType>;
  ParentDs?: ParentDsResolvers<ContextType>;
  ParentDsAggregateSelection?: ParentDsAggregateSelectionResolvers<ContextType>;
  ParentDsConnection?: ParentDsConnectionResolvers<ContextType>;
  ParentDsEdge?: ParentDsEdgeResolvers<ContextType>;
  ParentEdge?: ParentEdgeResolvers<ContextType>;
  ParentMeta?: ParentMetaResolvers<ContextType>;
  ParentMetaAggregateSelection?: ParentMetaAggregateSelectionResolvers<ContextType>;
  ParentMetaEdge?: ParentMetaEdgeResolvers<ContextType>;
  ParentMetaParentConnection?: ParentMetaParentConnectionResolvers<ContextType>;
  ParentMetaParentParentAggregationSelection?: ParentMetaParentParentAggregationSelectionResolvers<ContextType>;
  ParentMetaParentParentNodeAggregateSelection?: ParentMetaParentParentNodeAggregateSelectionResolvers<ContextType>;
  ParentMetaParentRelationship?: ParentMetaParentRelationshipResolvers<ContextType>;
  ParentMetasConnection?: ParentMetasConnectionResolvers<ContextType>;
  ParentsChildren?: ParentsChildrenResolvers<ContextType>;
  ParentsChildrenAggregateSelection?: ParentsChildrenAggregateSelectionResolvers<ContextType>;
  ParentsChildrenConnection?: ParentsChildrenConnectionResolvers<ContextType>;
  ParentsChildrenEdge?: ParentsChildrenEdgeResolvers<ContextType>;
  ParentsConnection?: ParentsConnectionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StringAggregateSelection?: StringAggregateSelectionResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  TagAggregateSelection?: TagAggregateSelectionResolvers<ContextType>;
  TagBookmarkBookmarksAggregationSelection?: TagBookmarkBookmarksAggregationSelectionResolvers<ContextType>;
  TagBookmarkBookmarksNodeAggregateSelection?: TagBookmarkBookmarksNodeAggregateSelectionResolvers<ContextType>;
  TagBookmarksConnection?: TagBookmarksConnectionResolvers<ContextType>;
  TagBookmarksRelationship?: TagBookmarksRelationshipResolvers<ContextType>;
  TagDl?: TagDlResolvers<ContextType>;
  TagDlAggregateSelection?: TagDlAggregateSelectionResolvers<ContextType>;
  TagDlEdge?: TagDlEdgeResolvers<ContextType>;
  TagDlsConnection?: TagDlsConnectionResolvers<ContextType>;
  TagDs?: TagDsResolvers<ContextType>;
  TagDsAggregateSelection?: TagDsAggregateSelectionResolvers<ContextType>;
  TagDsConnection?: TagDsConnectionResolvers<ContextType>;
  TagDsEdge?: TagDsEdgeResolvers<ContextType>;
  TagEdge?: TagEdgeResolvers<ContextType>;
  TagsConnection?: TagsConnectionResolvers<ContextType>;
  UpdateBmLooseContainersMutationResponse?: UpdateBmLooseContainersMutationResponseResolvers<ContextType>;
  UpdateBmsPagedsMutationResponse?: UpdateBmsPagedsMutationResponseResolvers<ContextType>;
  UpdateBookmarkDl2sMutationResponse?: UpdateBookmarkDl2sMutationResponseResolvers<ContextType>;
  UpdateBookmarkDlsMutationResponse?: UpdateBookmarkDlsMutationResponseResolvers<ContextType>;
  UpdateBookmarkFiltersMutationResponse?: UpdateBookmarkFiltersMutationResponseResolvers<ContextType>;
  UpdateBookmarksMutationResponse?: UpdateBookmarksMutationResponseResolvers<ContextType>;
  UpdateCollBmCountsMutationResponse?: UpdateCollBmCountsMutationResponseResolvers<ContextType>;
  UpdateCollectionDsListsMutationResponse?: UpdateCollectionDsListsMutationResponseResolvers<ContextType>;
  UpdateCollectionDsMutationResponse?: UpdateCollectionDsMutationResponseResolvers<ContextType>;
  UpdateCollectionsMutationResponse?: UpdateCollectionsMutationResponseResolvers<ContextType>;
  UpdateFolderDlsMutationResponse?: UpdateFolderDlsMutationResponseResolvers<ContextType>;
  UpdateFoldersMutationResponse?: UpdateFoldersMutationResponseResolvers<ContextType>;
  UpdateInfo?: UpdateInfoResolvers<ContextType>;
  UpdateMemberMetasMutationResponse?: UpdateMemberMetasMutationResponseResolvers<ContextType>;
  UpdateMembersMutationResponse?: UpdateMembersMutationResponseResolvers<ContextType>;
  UpdateParentDsMutationResponse?: UpdateParentDsMutationResponseResolvers<ContextType>;
  UpdateParentMetasMutationResponse?: UpdateParentMetasMutationResponseResolvers<ContextType>;
  UpdateParentsChildrenMutationResponse?: UpdateParentsChildrenMutationResponseResolvers<ContextType>;
  UpdateTagDlsMutationResponse?: UpdateTagDlsMutationResponseResolvers<ContextType>;
  UpdateTagDsMutationResponse?: UpdateTagDsMutationResponseResolvers<ContextType>;
  UpdateTagsMutationResponse?: UpdateTagsMutationResponseResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


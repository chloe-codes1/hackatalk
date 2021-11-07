/**
 * @generated SignedSource<<ffc3e860a3906598fcfba9b4581d91db>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest, Query} from 'relay-runtime';

import {FragmentRefs} from 'relay-runtime';

export type ChannelCreateFriendsPaginationQuery$variables = {
  after?: string | null;
  first: number;
  includeMe?: boolean | null;
  searchText?: string | null;
};
export type ChannelCreateFriendsPaginationQueryVariables =
  ChannelCreateFriendsPaginationQuery$variables;
export type ChannelCreateFriendsPaginationQuery$data = {
  readonly ' $fragmentSpreads': FragmentRefs<'ChannelCreate_friends'>;
};
export type ChannelCreateFriendsPaginationQueryResponse =
  ChannelCreateFriendsPaginationQuery$data;
export type ChannelCreateFriendsPaginationQuery = {
  variables: ChannelCreateFriendsPaginationQueryVariables;
  response: ChannelCreateFriendsPaginationQuery$data;
};

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'after',
      },
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'first',
      },
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'includeMe',
      },
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'searchText',
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'after',
        variableName: 'after',
      },
      {
        kind: 'Variable',
        name: 'first',
        variableName: 'first',
      },
      {
        kind: 'Variable',
        name: 'includeMe',
        variableName: 'includeMe',
      },
      {
        kind: 'Variable',
        name: 'searchText',
        variableName: 'searchText',
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'ChannelCreateFriendsPaginationQuery',
      selections: [
        {
          args: v1 /*: any*/,
          kind: 'FragmentSpread',
          name: 'ChannelCreate_friends',
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'ChannelCreateFriendsPaginationQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: 'UserConnection',
          kind: 'LinkedField',
          name: 'friends',
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'UserEdge',
              kind: 'LinkedField',
              name: 'edges',
              plural: true,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'cursor',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'User',
                  kind: 'LinkedField',
                  name: 'node',
                  plural: false,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'id',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'nickname',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'name',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'thumbURL',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'photoURL',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'statusMessage',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'isOnline',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'hasBlocked',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: '__typename',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: 'PageInfo',
              kind: 'LinkedField',
              name: 'pageInfo',
              plural: false,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'hasNextPage',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'endCursor',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: v1 /*: any*/,
          filters: ['searchText', 'includeMe'],
          handle: 'connection',
          key: 'ChannelCreate_friends',
          kind: 'LinkedHandle',
          name: 'friends',
        },
      ],
    },
    params: {
      cacheID: 'deb52b2fec2b3ae81cff263321d86cf7',
      id: null,
      metadata: {},
      name: 'ChannelCreateFriendsPaginationQuery',
      operationKind: 'query',
      text: 'query ChannelCreateFriendsPaginationQuery(\n  $after: String\n  $first: Int!\n  $includeMe: Boolean\n  $searchText: String\n) {\n  ...ChannelCreate_friends_1KCjMM\n}\n\nfragment ChannelCreate_friends_1KCjMM on Query {\n  friends(first: $first, after: $after, searchText: $searchText, includeMe: $includeMe) {\n    edges {\n      cursor\n      node {\n        id\n        nickname\n        name\n        thumbURL\n        photoURL\n        ...UserListItem_user\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment UserListItem_user on User {\n  id\n  photoURL\n  nickname\n  name\n  statusMessage\n  isOnline\n  hasBlocked\n}\n',
    },
  };
})();

(node as any).hash = 'fe06fac4a0bd71842541f11ccd811a28';

export default node;

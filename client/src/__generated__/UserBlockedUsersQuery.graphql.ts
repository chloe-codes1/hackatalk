/**
 * @generated SignedSource<<f30cd1ae22430e9dd12bdc9d096efb61>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserBlockedUsersQuery$variables = {};
export type UserBlockedUsersQueryVariables = UserBlockedUsersQuery$variables;
export type UserBlockedUsersQuery$data = {
  readonly blockedUsers: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ProfileModal_user" | "UserListItem_user">;
  } | null> | null;
};
export type UserBlockedUsersQueryResponse = UserBlockedUsersQuery$data;
export type UserBlockedUsersQuery = {
  variables: UserBlockedUsersQueryVariables;
  response: UserBlockedUsersQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserBlockedUsersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "blockedUsers",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ProfileModal_user"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserListItem_user"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserBlockedUsersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "blockedUsers",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "photoURL",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "nickname",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hasBlocked",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "statusMessage",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isFriend",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isOnline",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7bd15cc4e160652eb15d970256188c5b",
    "id": null,
    "metadata": {},
    "name": "UserBlockedUsersQuery",
    "operationKind": "query",
    "text": "query UserBlockedUsersQuery {\n  blockedUsers {\n    id\n    ...ProfileModal_user\n    ...UserListItem_user\n  }\n}\n\nfragment ProfileModal_user on User {\n  id\n  photoURL\n  name\n  nickname\n  hasBlocked\n  statusMessage\n  isFriend\n}\n\nfragment UserListItem_user on User {\n  id\n  photoURL\n  nickname\n  name\n  statusMessage\n  isOnline\n  hasBlocked\n}\n"
  }
};
})();

(node as any).hash = "de6f1c0db8178def0afba2a4c90484fc";

export default node;

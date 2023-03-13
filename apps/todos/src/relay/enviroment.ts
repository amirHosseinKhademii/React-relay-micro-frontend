import {
  Environment,
  Network,
  RecordSource,
  Store,
  Observable,
  RequestParameters,
  Variables,
  GraphQLResponse,
} from "relay-runtime";

//import { SubscriptionClient } from "subscriptions-transport-ws";

import { createClient } from "graphql-ws";

const user = localStorage.getItem("user");
const token = user ? JSON.parse(user).token : "";

const wsClient = createClient({
  url: "ws://localhost:3001/graphql",
  connectionParams: {
    websocket: true,
    headers: {
      authorization: token,
    },
  },
  on: {
    closed: () => console.log("ws closed"),
    connected: () => console.log("ws connected"),
    error: (err) => console.log("ws crashed"),
    // connecting: () => console.log("ws connecting"),
    // opened: () => console.log("ws opened"),
    // ping: () => console.log("ws ping"),
    // pong: () => console.log("ws pong"),
    // message: (msg) => console.log({ msg }),
  },
});

const subscribe = (
  request: RequestParameters,
  variables: Variables
): Observable<GraphQLResponse> => {
  return Observable.create((sink: any) => {
    return wsClient.subscribe(
      {
        operationName: request.name,
        query: request.text!,
        variables,
      },
      sink
    );
  });
};

// const subscriptionClient = new SubscriptionClient(
//   "ws://localhost:3001/graphql",
//   {
//     reconnect: true,
//     connectionCallback: (er, res) => console.log({ er, res }),
//   }
// );

// const subscribe = (
//   request: RequestParameters,
//   variables: Variables
// ): Observable<GraphQLResponse> => {
//   const subscribeObservable = subscriptionClient.request({
//     query: request.text!,
//     operationName: request.name,
//     variables,
//   }) as any;
//   // Important: Convert subscriptions-transport-ws observable type to Relay's
//   return Observable.from(subscribeObservable);
// };

const operations = (operation: RequestParameters, variables: Variables) => {
  return fetch("http://localhost:3001/graphql", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
};

const store = new Store(new RecordSource());

const network = Network.create(operations, subscribe);

// 5
export const environment = new Environment({
  network,
  store,
});

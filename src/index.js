import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import Pages from "./pages";
import GlobalStyles from "./styles";

const client = new ApolloClient({
  uri: "https://odyssey-lift-off-part5-server-production-ee16.up.railway.app/",
  cache: new InMemoryCache(),
  name: "web",
  version: "1.0",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);

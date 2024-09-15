'use client'
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useTokenStore } from '@/lib/token.store';

const httpLink = createHttpLink({
  uri: 'https://api.escuelajs.co/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = useTokenStore.getState().tokens?.access;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
const ApolloAppProvider = (
  { children }: Readonly<{ children: React.ReactNode; }>
) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default ApolloAppProvider;

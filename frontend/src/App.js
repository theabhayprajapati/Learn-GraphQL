import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client'
import DisplayData from './DisplayData'
import css from './App.css'
export default function App() {
  // here we have to initail the variable for the apollo client
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <DisplayData />
    </ApolloProvider>
  )
}
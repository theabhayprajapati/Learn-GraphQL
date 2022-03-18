const { ApolloServer } = require('apollo-server')

const { typeDefs } = require('./schema/type-defs');
const { resolvers } = require('./schema/resolvers');

// the names for the typeDefs and resolvers are not arbitrary
// what is meaning of arbitrary?
// the names are used to identify the type of data that is being returned
const server = new ApolloServer({ typeDefs, resolvers })


server.listen().then(({ url }) => {
    console.log('Server is running on ' + url)
})


    
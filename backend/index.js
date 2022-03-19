
// ? Here simple stuff is done that: 
    // ? 1. We imported ApolloServer
const { ApolloServer } = require('apollo-server')

const { typeDefs } = require('./schema/type-defs');
const { resolvers } = require('./schema/resolvers');

// the names for the typeDefs and resolvers are not arbitrary
// what is meaning of arbitrary?
//? the names are used to identify the type of data that is being returned

// * we are creating a new instance of ApolloServer and names as server here, ApolloServer requires two arguments
// * 1. typeDefs: the typeDefs is the schema of the data, the response when we get is of this type.
// * 2. resolvers: the resolvers is the data that is being returned, when we request the data from the server.
// ? so we imported this form other files, just fot neatness, we can import it from other files.
// ? but can could do all the same thing in this file.
// todo: Move after reading/ and understaning this here more to lsTypes Def file.
const server = new ApolloServer({ typeDefs, resolvers })


server.listen().then(({ url }) => {
    console.log('Server is running on ' + url)
})


    
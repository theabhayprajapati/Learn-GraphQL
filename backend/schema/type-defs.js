// ? 3: gql is required for making schema's.
const { gql } = require('apollo-server')
//! what is typeDefs:
// * A schema is a collection of type definitions (hence the typeDefs) / schema is a structure of data and it's types.
const typeDefs = gql`
    # creating type called User
    type User {
        # these tags are case sensitive so it should be same in databasetoo.
        id: ID!
        name: String!
        email: String!
        age: Int
        friend: [User]
        favoriteMovie: [Movie]  
    }

    # //* this is GET request
    type Query {
        users: [User!]!
        user(id: ID!): User
        movies: [Movie!]!
        movie(name: String!): Movie 
    }

    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isCinema: Boolean!
    }
    # //? Doing mutation here
    # //? Mutation is REST is POST request.
    input createUserInput {
        name: String!
        email: String!
        age: Int
    }
    input updateUserInput{
        id: ID!
        name: String!
    }
    type Mutation {
        createUser(input: createUserInput): User
        updateUsername(input: updateUserInput): User
        deleteUser(id: ID!): User
    }
 `


module.exports = { typeDefs }
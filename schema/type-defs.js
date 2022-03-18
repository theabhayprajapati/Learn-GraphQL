const { gql } = require('apollo-server')

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

    input createUserInput {
        name: String!
        email: String!
        age: Int
    }
    # //? Every GraphQL data which should add, alterdata, delete, etc should be a TYPE mutation
    type Mutation {
        # adding new user
        createUser(input: createUserInput): User
    }
 `


module.exports = { typeDefs }
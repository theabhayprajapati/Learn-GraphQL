const { gql } = require('apollo-server')

const typeDefs = gql`
    # creating type called User
    type User {
        # these tags are case sensitive so it should be same in databasetoo.
        id: ID!
        name: Names!
        email: String!
        age: Int!
        friend: [User]
    }

    type Query {
        users: [User!]!
        user(id: ID!): User
    }
    
    # creating enum type called Names
    enum Names {
        John
        Abhay   
        Jane
    }
 `


module.exports = { typeDefs }
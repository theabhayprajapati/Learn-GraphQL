const { userData } = require('../fakedata')
const { movieData } = require('../fakemovies')
const resolvers = {
    Query: {
        // ?user resolvers
        users: () => {
            return userData
        },

        // detailing with parent and args for the query

        user: (parent, args) => {
            console.log(args)
            return userData.find(user => user.id === args.id)
        },


        // ?movie resolvers
        movies: () => {
            return movieData
        },

        movie: (parent, args) => {
            console.log(args)
            return movieData.find(movie => movie.name === args.name)
        }
    },
    // ?user resolvers
    User: {
        // filter movies to get after 2000 and 2020
        favoriteMovie: (parent, args) => {
            return movieData.filter(movie => movie.yearOfPublication >= 1994 && movie.yearOfPublication <= 2000)
        }
    },

    // mutation
    Mutation: {
        // ?createUser resolvers
        createUser: (parent, args) => {
            console.log('args', args)
            const newUser = {
                id: '6',
                name: args.input.name,
                email: args.input.email,
                age: args.input.age,
            }
            userData.push(newUser)
            return newUser
        }
    }
}

// exprot
module.exports = { resolvers }
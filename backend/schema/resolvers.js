// ? getting data from these two files...
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

    // ?Mutation Type
    Mutation: {
        createUser: (parent, args) => {
            console.log('args', args);
            const user = args.input
            user.id = userData.length + 1
            userData.push(user)
            return user
        },
        updateUsername: (parent, args) => {
            console.log('args', args);
            const user = userData.find(user => user.id === args.input.id ? user.name = args.input.name : console.log('notfound'));
            console.log(user);

            return user
        },
        deleteUser: (parent, args) => {
            console.log('args', args)
            const user = userData.find(user => user.id === args.id ? userData.splice(userData.indexOf(user), 1) : console.log('notfound'));
            console.log(user);
            return user
        }
    },
}
// exprot
module.exports = { resolvers }
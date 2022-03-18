const { userData } = require('../fakedata')
const resolvers = {
    Query: {
        users: () => {
            return userData
        },

        // detailing with parent and args for the query

        user: (parent, args) => {
            console.log(args)
            return userData.find(user => user.id === args.id)
        }
    },
}

// exprot
module.exports = { resolvers }
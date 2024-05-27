//const {gql} = require()

const typeDefs = `
    type User {
    id: ID
    authId: String
    name: String
    email: String
    }

    type Query{
        user: User
    }
    type Mutation{
        addComment: User
    }
`;

module.exports = typeDefs;
//    favorites: []
// comments: [Comments]
//recipes: [Recipes]
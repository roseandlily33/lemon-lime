//const {User} = require('../models/user.mongo');
const resolvers = {
    Query: {
        user: async(parent, args, context) => {
            console.log('P', parent, 'A', args, 'C', context);

            //const user = await User.findById({_id: args.userId})
            console.log('User');
            return;
        }
    },
    Mutation: {
        addComment: async(parent, args, context) => {
            console.log('Adding a commnet', args);
            return;
        }
    }
};

module.exports = resolvers;
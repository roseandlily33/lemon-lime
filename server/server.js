const http = require('http');
const app = require('./src/app');
const { ApolloServer } =  require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const {connectToMongoose} = require('./src/utils/connection');
const {typeDefs, resolvers} = require('./src/schemas');

const PORT = process.env.PORT || 8000;

const serverApollo = new ApolloServer({
    typeDefs,
    resolvers,
  });

const server = http.createServer(app);

async function startServer (){
    await connectToMongoose();
    server.listen(PORT, () => {
        console.log('Listening on port mongoose', PORT)
    });
    const { url } = await startStandaloneServer(serverApollo, { listen: { port: 4000 } });
    console.log(`🚀 Server listening at graphql: ${url}`);
}

startServer();
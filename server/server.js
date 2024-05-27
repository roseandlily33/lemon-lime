const http = require('http');
const app = require('./app');
require('dotenv').config();

const {connectToMongoose} = require('./utils/connection');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer (){
    await connectToMongoose();
    await server.listen(PORT, () => {
        console.log('Listening on port mongoose', PORT)
    });
}

startServer();
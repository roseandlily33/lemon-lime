const http = require('http');
const app = require('./app');
const {connectToMongoose} = require('./utils/connection');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer (){
    await connectToMongoose();
    server.listen(PORT, () => {
        console.log('Listening on port', PORT)
    });
}
//Hello
startServer();
const app = require('./app');
require('dotenv').config();

const {connectToMongoose} = require('./utils/connection');

const PORT = process.env.PORT || 8000;

async function startServer (){
    await connectToMongoose();
    await app.listen(PORT, () => {
        console.log('Listening on port mongoose', PORT)
    });
}

startServer();
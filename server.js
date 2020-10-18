const express = require('express');
const {
    graphqlHTTP,
} = require('express-graphql');
const {
    schema,
} = require('./schema/schema');

app = express();
const PORT = 5000;
var root = { hello: () => 'Hello world!' };

app.use('/graphql', graphqlHTTP(
    {
        schema: schema,
        rootValue: root,
        graphiql: true
    }
))

app.listen(PORT, () => console.log(`SERVER LISTENING AT PORT ${PORT}`))
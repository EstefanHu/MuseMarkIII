'use strict';
const express = requir('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

require('dotenv').config();

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const uri = process.env.DB_CONNECTION;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
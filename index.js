// https://srhussain99.medium.com/using-graphql-with-nodejs-and-mongodb-to-perform-crud-operations-55a3c20260f3

const bodyParser = require('body-parser');
const express  = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server');
const { default: mongoose } = require('mongoose');
// const url = "mongodb://localhost:27017/";
const schema = require('./graphQLSchema');

const server = new ApolloServer({
    typeDefs: schema.typeDefs,
    resolvers: schema.resolvers
});

server.listen({port: 9000}).then(({url}) => console.log(`Server running at ${url}`));
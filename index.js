const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schemas/schema');
const { Query } = require('./resolvers/Query');
const { Mutation } = require('./resolvers/Mutation');
const { Category } = require('./resolvers/Category');
const { Product } = require('./resolvers/Product');
const { db } = require('./mocks/db');

// console.log(categories);

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
    Mutation,
  },
  context: {
    // context allows database to be accessible with the resolvers without importing it in each resolver
    db,
  },
});

server.listen().then(({ url }) => {
  console.log('running at ' + url);
});

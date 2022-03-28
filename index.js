const { ApolloServer } = require("apollo-server");
const { products, categories } = require("./db");
const { Product } = require("./resolvers/Product");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { typeDefs } = require("./schemas/schema");

// console.log(categories);

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
  },
  context: {
    // context allows database to be accessible with the resolvers without importing it in each resolver
    categories,
    products,
  },
});

server.listen().then(({ url }) => {
  console.log("running at" + url);
});

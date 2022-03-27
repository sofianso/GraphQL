const { ApolloServer } = require("apollo-server");
const { products } = require("./db");
const { typeDefs } = require("./schemas/products_schema");

const resolvers = {
  //resolvers can have 3 parameters: parent args and context
  Query: {
    products: () => products,
    product: (parent, args, context) => {
      //find func allows the resolver to find a particular item based on productId
      const productId = args.id;
      return (product = products.find((product) => product.id === productId));
    },
    categories: () => categories,
    category: (parent, args, context) => {
      //find func allows the resolver to find a particular item based on productId
      const categoryId = args.id;
      return (category = categories.find(
        (category) => category.id === categoryId
      ));
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("running at" + url);
});

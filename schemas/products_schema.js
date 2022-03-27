const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    products: [Product!]!
    """
    returns a single product page
    """
    product(id: ID!): Product
    """
    categories should not return an empty array or null
    """
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    category: Category
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`;

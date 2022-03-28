exports.Product = {
  category: ({ categoryId }, args, { categories }) => {
    return categories.filter((product) => category.id === categoryId);
  },
};

// exports.Product = {
//   category: ({ categoryId }, args, { db }) => {
//     return db.categories.find((category) => category.id === categoryId);
//   },
//   reviews: ({ id }, args, { db }) => {
//     return db.reviews.filter((review) => review.productId === id);
//   },
// };

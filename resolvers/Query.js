exports.Query = {
  products: (parent, args, { products }) => products,
  product: (parent, { id }, { products }) => {
    //find func allows the resolver to find a particular item based on productId
    return (product = products.find((product) => product.id === id));
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) => {
    //find func allows the resolver to find a particular item based on productId
    return categories.find((category) => category.id === id);
  },
};

// exports.Query = {
//   hello: (parent, args, context) => "World",
//   products: (parent, { filter }, { db }) => {
//     let filteredProducts = db.products;
//     if (filter) {
//       const { onSale, avgRating } = filter;
//       if (onSale) {
//         filteredProducts = filteredProducts.filter((product) => {
//           return product.onSale;
//         });
//       }
//       if ([1, 2, 3, 4, 5].includes(avgRating)) {
//         filteredProducts = filteredProducts.filter((product) => {
//           let sumRating = 0;
//           let numberOfReviews = 0;
//           db.reviews.forEach((review) => {
//             if (review.productId === product.id) {
//               sumRating += review.rating;
//               numberOfReviews++;
//             }
//           });
//           const avgProductRating = sumRating / numberOfReviews;

//           return avgProductRating >= avgRating;
//         });
//       }
//     }

//     return filteredProducts;
//   },
//   product: (parent, { id }, { db }) => {
//     return db.products.find((product) => product.id === id);
//   },
//   categories: (parent, args, { db }) => db.categories,
//   category: (parent, { id }, { db }) => {
//     return db.categories.find((category) => category.id === id);
//   },
// };

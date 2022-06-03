const products=[
	{
		id: 'redshoe',
		description: 'Red shoe',
		price: 42.12,
    reviews: [],
	},
	{
		id: 'bluejeans',
		description: 'Blue Jeans',
		price: 55.55,
    reviews: [],
	}
];

function getAllProducts(){
  return products;
}

function getProductsByPrice(min, max){
  return products.filter((product) => {
    return product.price >= min &product.price <= max;
  });
}

function getProductsById(id){
  return products.find((product) => {
    return product.id === id;
  });
}

function addNewProduct(id, description, price){
  const newProduct = {
    id: id,
		description: description,
		price:price,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment){
  const matchProduct = getProductsById(id);
  
  if(matchProduct){
    const review = {
      rating: rating,
      comment: comment,
    }
    matchProduct.reviews.push(review);
    return matchProduct;
  }
  
}
module.exports ={
  getAllProducts,
  getProductsByPrice,
  getProductsById,
  addNewProduct,
  addNewProductReview,
};
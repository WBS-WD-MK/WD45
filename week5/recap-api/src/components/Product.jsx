import React from 'react';

const Product = ({ product }) => {
  return (
    <>
      {Object.keys(product).length > 0 ? (
        <div>
          <h2>{product.title}</h2>
          <div>
            <img src={product.thumbnail} />
            <div>
              {product.rating} | {product.price}
            </div>
          </div>
          <p>{product.description}</p>
          <div>
            {product.images.map(image => (
              <img key={image} src={image} alt={product.title} width={200} />
            ))}
            {/* <img key={product.images[0]} src={product.images[0]} alt={product.title} /> */}
          </div>
        </div>
      ) : (
        <p>no product to show....</p>
      )}
    </>
  );
};

export default Product;

/*
{
"id": 1,
"title": "iPhone 9",
"description": "An apple mobile which is nothing like apple",
"price": 549,
"discountPercentage": 12.96,
"rating": 4.69,
"stock": 94,
"brand": "Apple",
"category": "smartphones",
"thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
"images": [
"https://i.dummyjson.com/data/products/1/1.jpg",
"https://i.dummyjson.com/data/products/1/2.jpg",
"https://i.dummyjson.com/data/products/1/3.jpg",
"https://i.dummyjson.com/data/products/1/4.jpg",
"https://i.dummyjson.com/data/products/1/thumbnail.jpg"
]
},
*/

// ProductList.js

import React, { useMemo } from 'react';

const ProductList = ({ searchQuery }) => {
  // Assuming products is an array of objects fetched from JSON
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
    { id: 5, name: 'Product 5', price: 50 },
    { id: 6, name: 'Product 6', price: 60 },
    { id: 7, name: 'Product 7', price: 70 },
    // Add more products here
  ];

  const filteredProducts = useMemo(() => {
    const query = searchQuery ? searchQuery.toLowerCase() : ''; // Ensure searchQuery is always a string
    return products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
  }, [products, searchQuery]);

  return (
    <div>
      {filteredProducts.map(product => (
        <div key={product.id} className="border border-gray-300 p-4 mb-4">
          <h3 className="font-semibold">{product.name}</h3>
          <p>Price: ${product.price}</p>
          {/* Add more product details here */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;

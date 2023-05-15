  import React, { useEffect, useState } from 'react';
  import Image from 'next/image';
  import Product from './Product';

  function ProductFeed() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      // Fetch products from the API
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []);

    // Group products by category
    const groupedProducts = products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {});

    return (
      <div>
        {Object.entries(groupedProducts).map(([category, products]) => (
          <div key={category}>
            <center><h1>{category}</h1></center>
            <div className="grid grid-cols-4 gap-2 ">
              {products.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  category={product.category}
                  image={product.image}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  export default ProductFeed;

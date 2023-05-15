import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, addToCart }) {
  const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
  const [hasPrime] = useState(Math.random() < 0.5);
  const [image, setImage] = useState('');

  useEffect(() => {
    // Fetch the product data including the image from the Fake Store API
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setImage(data.image);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  return (
    <div className="flex flex-col w-80 mx-auto bg-black bg-opacity-60 rounded-lg shadow-lg overflow-hidden" style={{ border: "0.5px solid grey" }}>
      <div className="relative pb-3/4">
        {image && (
          <Image src={image} layout="fill" objectFit="cover" alt={title} />
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <img src={image} alt="Error loading the display" />
        <p className="text-white uppercase text-xs mb-1">{category}</p>
        <h2 className="text-white font-medium mb-1">{title}</h2>
        <div className="flex items-center mb-1">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 w-5 text-blue" />
            ))}
        </div>
        <p className="text-white text-sm mb-2 line-clamp-3">{description}</p>
        <div className="flex items-center mb-2">
          <Currency quantity={price + 800} currency="INR" />
        </div>
        <button
          className="bg-blue-500 text-white py-2 rounded-lg font-medium transition-colors duration-300 hover:bg-blue-600"
          onClick={() => addToCart({ id, title, price, description, category, image })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;

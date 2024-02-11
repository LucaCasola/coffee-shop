import React from 'react';

const Card = ({ imgSrc, altText, price, itemName }) => (
  <div className="w-96 h-96 border-4 border-green-500 rounded-lg">
    <img className="block mx-auto h-2/3 w-full rounded-t-lg mt-8" src={imgSrc} alt={altText} />
    <hr className="border-2 border-green-500"/>
    <div className="p-5">
      <p className="mb-3 font-normal text-lg">{itemName}</p>
      <div className="flex justify-between">
        <p className="mb-3 font-normal">{price}</p>
        <a href="shoppingCart" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Add to cart
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
);

export default Card;
import React from 'react';
import { Link } from "gatsby";


const ProductCard = ({ id, product }) => (
  <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60" id={id}>
<div className="flex flex-wrap mx-auto justify-center">
    <Link to={ product.path} className="text-center text-secondary-default text-xl sm:text-xl font-medium title-font mb-2 ">{ product.title }
    </Link>
    </div>

    <p className="text-center mt-4 bg-white leading-relaxed text-base mb-4">{ product.content }</p>
    <div className="flex flex-wrap mx-auto justify-center">
    <Link to={ product.path } className="text-primary-lighter inline-flex items-center">Conocer más
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
  </div>
);

export default ProductCard;

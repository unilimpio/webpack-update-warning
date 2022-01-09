import React from 'react';

const sizes = {
  default: `py-3 px-6`,
  sm: `py-2 px-2`,
  md: `py-3 px-6 text-md`,
  lg: `py-4 px-12 text-lg`,
  xl: `py-5 px-16 text-lg`
};



const Button = ({ children, className = "", size, type = "button", formaction = "", onClick=""}) => {

  return (
    <button
      type={ type }
      onClick={onClick}
      className={`
        ${sizes[size] || sizes.default}
        ${className}


    `}

    >

      {children}

    </button>
  );
};

export default Button;

import React from 'react';

const SplitSection = ({ id, className, primarySlot, secondarySlot, reverseOrder }) => (
  <section id={id} className={` ${className}`}>
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">{primarySlot}</div>
      <div
        className={`mt-10 md:mt-0 w-full md:w-1/2 ${reverseOrder && `order-last lg:order-first`}`}
      >
        {secondarySlot}
      </div>
    </div>
  </section>
);

export default SplitSection;

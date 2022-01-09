import React from 'react';

import FeaturesGridItem from "./FeaturesGridItem";
import featuresData from '../data/features-data';

const FeaturesGridSection = ({ title, heading, intro }) => (
  
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">{ title }</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        { heading }
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        { intro }
      </p>
    </div>

    <div className="grid grid-cols-2 justify-items-auto sm:grid-cols-6">
      
      {featuresData.map(feature => (
         
              <FeaturesGridItem feature={feature} />
            
      ))}
        

      
    </div>
  </div>  

  
);

export default FeaturesGridSection;

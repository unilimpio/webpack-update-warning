import React from 'react';

import featuresData from '../data/features-data';
import FeatureCard from '../components/FeatureCard';


const Features = ({ feature }) => (

  <section id="features" className="py-10 md:py-20 bg-gradient-to-br from-gray-200 via-white to-gray-200 ">
        <div className="container mx-auto">
          <div className="w-full bg-fill bg-no-repeat bg-products">
            <h2 className="text-4xl font-semibold text-center text-primary-normal">Nuestra propuesta de valor</h2>
            <p className="md:w-2/3 mx-auto text-2xl font-light text-center my-4 pr-10 pl-10 mb-10 text-gray-700">
              Mucho más que un proveedor de productos de limpieza, nos motiva ser aliados estratégicos de nuestros clientes.<br/>
              Al elegirnos, usted recibe los siguientes beneficios:
            </p>
          </div>

          <div className="flex flex-wrap justify-center">

              {featuresData.map((feature,index) =>
              <div key={index} className="w-full p-4 lg:w-1/3">
                <FeatureCard feature={feature} />
              </div>
              )}


          </div>
        </div>
  </section>


);

export default Features;
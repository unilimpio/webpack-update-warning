import React from 'react';
import { Link } from 'gatsby';

import PageData from '../data/faq-data';


const Faq = ({className}) => (
<section className={` ${ className }`}>
  <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
      <div>
        <h2 className="text-3xl font-extrabold text-primary">
          Preguntas Frecuentes (FAQ)
        </h2>
        <p className="mt-4 text-lg text-gray-500">No puede encontrar la información que necesita, contacte nuestro <Link to="#call-center" className="font-medium text-primary-lighter ">call center</Link></p>
      </div>
      <div className="mt-12 lg:mt-0 lg:col-span-2">
        <dl className="space-y-12">

        {PageData.map(faq => (
          <div key={ faq.anchor } id={ faq.anchor } >
            <dt className="text-lg leading-6 font-medium text-secondary-lighter">
              { faq.title }
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              { faq.content }
            </dd>
          </div>
        ))}

        </dl>
      </div>
    </div>
  </div>
</section>
);

export default Faq;

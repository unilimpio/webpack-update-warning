import React from 'react';

import { StaticImage } from "gatsby-plugin-image"

const SplitSectionB2b = ({className}) => (
  <section id="b2b" className={`bg-gradient-to-br from-white via-gray-400 to-white   ${className}`}>
    <div className="container mx-auto items-center flex flex-col lg:flex-row">
      <div className="lg:w-1/2">

              <div className="bg-white bg-opacity-50 rounded-lg   px-6 pt-8 pb-6 ml-25">
                <h3 className="text-3xl font-semibold leading-tight text-center">Plataforma e-commerce B2B para realizar sus pedidos</h3>
                <p className="mt-8 text-lg font-light leading-relaxed text-justify">
                  Realice sus pedidos de forma rápida y fácil, al alcance de un clic, gracias a nuestra plataforma B2B, disponible 24/7 durante los 365 días del año.
                </p>
                <div className="flex flex-wrap mx-auto justify-center">
                <a href="https://unilimpio.app/ecommerce/" className="mt-4 text-primary-lighter inline-flex items-center">Conozca más
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                </div>
              </div>
      </div>
      <div className="mt-10 lg:mt-0 w-full lg:w-1/2 order-last lg:order-first">

      <StaticImage src="../images/b2b.jpg"
                  className=""
                  alt="ealice sus pedidos f{acilmente a cualquier hora desde nuestro portal B2B dispomnible para clientes corporativos."
                  placeholder="blurred"
                  layout="fullWidth"
                   />
            

      </div>
    </div>
  </section>
);

export default SplitSectionB2b;

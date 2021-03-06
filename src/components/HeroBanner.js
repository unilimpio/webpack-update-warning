import React from 'react';

import { Link } from 'gatsby';

import Button from './Button';



const HeroBanner = () => (


<section id="hero-banner" className={`bg-blog-banner-8 bg-fill bg-right-bottom bg-no-repeat m-0 p-0`}>
        <div className="container mt-0 mx-auto ">
          <div className="bg-gradient-to-r from-white">
            <div className="">

              <div className="bg-white bg-opacity-50 text-center pt-12 p-8 md:text-left md:w-2/5 md:pr-12">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-center">
                Some nice catching phrase
                </h1>
                <p className="text-lg lg:text-xl mt-6 font-normal text-justify text-gray-700">
                  SOme more nice bla bla.
                </p>
                <div className="flex flex-wrap mx-auto justify-center mt-8 md:mt-12 mb-20">

                <Link to="/soluciones-por-sector">
                  <Button className=" bg-primary-default text-white hover:bg-primary-lighter rounded-lg active:bg-primary-darker focus:outline-none" size="lg">CLick me now!</Button>
                </Link>
                </div>

                <p className="mt-4 text-gray-600"></p>
              </div>
            </div>
          </div>
        </div>
  </section>

);


export default HeroBanner

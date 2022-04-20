import React from 'react';
import { Link } from 'gatsby';


import { StaticImage } from "gatsby-plugin-image"


import Layout from '../components/layout/Layoutexport-en';

import Features from "../components/Featuresexport-en";
import Button from '../components/Button';

import SplitSection from '../components/SplitSection';

import NewsletterSub from "../components/NewsletterSub";



import HeroBanner from "../components/HeroExport-en"

const seo={
  title: "Exportamos productos para la higiene de manos e higiene industrial para el ambito profesional FOR EXPORT",
  desc:  "Fabricamos y comercializamos productos para la region y el mundo",
  image: "productos.jpg",
  pathname: "/export-en/",
}

const siteVerOpts = [

  {
    label: 'International',
    value: '',

  },


  {
    label: 'Ecuador',
    value: '/',

  },


];

const langOpts = [

  {
    label: 'EN',
    value: '',

  },


  {
    label: 'ES',
    value: '/export-es/',

  },


];

const Export = ({  location }) => {




  return(

<Layout location={location} crumbLabel="Export Home" siteVerOpts={siteVerOpts} langOpts={langOpts} alternates>



<HeroBanner />

<Features />


<section id="sellos de calidad" className="bg-primary-default mt-20">
  <div className="container mx-auto sm:flex ">
    <div className=" w-full sm:flex-1 ">
      <h2 className=" pl-5 mx-auto text-2xl font-semibold text-center text-white sm:text-center mb-0 p-px pb-10 pt-10 ">
      We comply with national and international certifications that guarantee the quality of our products:
      </h2>
   </div>
    <div className="w-full sm:flex-1 ">
     <div className="grid grid-cols-4 gap-4 pt-10 pb-10 pl-10 pr-10">
       <div class="flex flex-grow flex-shrink justify-center">
          <StaticImage src="../images/logo-issa.jpg"
                    className="flex justify-center my-4"
                    alt="Unilimpio es una empresa con responsabilidad social empresarial."
                    placeholder="blurred"
                    layout="constrained"/>
      </div>
        <div class="flex flex-grow flex-shrink justify-center">
          <StaticImage src="../images/logo-iso.jpg"
                    className="flex justify-center my-4"
                    alt="Unilimpio es una empresa con responsabilidad social empresarial."
                    placeholder="blurred"
                    layout="constrained"/>
        </div>
        <div class="flex flex-grow flex-shrink justify-center">
          <StaticImage src="../images/sello-bpm.jpg"
                    className="flex justify-center my-4"
                    alt="Unilimpio es una empresa con responsabilidad social empresarial."
                    placeholder="blurred"
                    layout="constrained"/>
        </div>
        <div class="flex flex-grow flex-shrink justify-center">
          <StaticImage src="../images/sello-mucho-mejor-ecuador.jpg"
                    className="flex justify-center my-4"
                    alt="Unilimpio es una empresa con responsabilidad social empresarial."
                    placeholder="blurred"
                    layout="constrained"/>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="productos" className="pt-20 mb-20 ">
  <div className="container mx-auto bg-white bg-opacity-50">
    <h2 className="text-4xl font-semibold text-center text-primary-normal">Professional Hygiene Products</h2>
    <h3 className="md:w-2/3 mx-auto text-3xl font-semilight text-center my-4 pr-10 pl-10 mb-10 text-primary-default">International quality</h3>
    <SplitSection
        primarySlot={
          <div className=" my-4  px-6 py-6 mx-6">
          <p className="md:w-full text-left leading-relaxed text-lg text-gray-700 text-center ">
          We manufacture and export to the entire Central and South American region hygienic products of the highest quality for the most demanding markets and industries. Our constant innovation has allowed us to enter markets in the region.
          </p>
          <Link to="/export/en/products">
        <Button className="flex mx-auto mt-16 text-white  border-0 py-2 px-8 bg-primary-default shadow-md hover:bg-primary-lighter rounded text-lg">Discover our products </Button>
      </Link>
  </div>


        }
        secondarySlot={
          <StaticImage src="../images/productos-de-exportacion-unilimpio.jpg"
                      className=""
                      alt="Productos de alta calidad para exportación"
                      placeholder="blurred"
                      layout="constrained"
                       />
        }/>

  </div>
</section>


<SplitSection id="rse"
      reverseOrder className="bg-gradient-to-r from-secondary-lighter via-white to-secondary-lighter py-4 my-20 mt-4"
      primarySlot={
        <div className="bg-white bg-opacity-50 rounded-lg my-12  px-6 py-6 mx-6">
          <h3 className="text-3xl font-semibold leading-tight text-center">
          We are a socially responsible company
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed text-center">
          We are a responsible, transparent and supportive company. Our company has been recognized locally for its corporate social responsibility management. We are part of the UN Global Compact and adhere to the Global Reporting Initiative.
          </p>
          <div className="flex flex-wrap mx-auto justify-center">
          <Link to="/export/en/social-responsability" className="mt-4 text-primary-default inline-flex items-center text-lg">Learn more
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
        </div>

      }
      secondarySlot={
        <StaticImage src="../images/responsabilidad-social-banner-prueba.jpg"
                    className="flex justify-center my-4 mx-4"
                    alt="Unilimpio es una empresa con responsabilidad social empresarial."
                    placeholder="blurred"
                    layout="constrained"
        />

}
/>

<section id="our clients " className="bg-primary-default py-12">
<div class="bg-primary-default">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <p class="text-center  text-5xl font-semibold text-white">
    Our main allies in Ecuador
    </p><br/>
    <div class="mt-6 grid grid-cols-2 gap-6 md:grid-cols-6 lg:mt-8">
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-kfc.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada KFC"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-br.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Baskin Robbins"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-cf.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Corporación Favorita"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-kywi.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Kywi"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-jv.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Juan Valdez"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-hanaska.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Hanaska"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-cn.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Cervecería Nacional"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-ts.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Tesalia Spring Company"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-pn.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Pronaca"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-cb.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Cinnabon"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-mc.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa Mi Comisariato"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-bc.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Big Cola"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
    </div>
  </div>
</div>
</section>






<section id="contact" className="my-10">
  <div className="w-full mx-auto  py-8 px-2 sm:px-8 lg:px-40 bg-white bg-opacity-50 text-center">
    <div className="mx:auto bg-gray-300 bg-opacity-50 rounded-xl py-4">
      <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-primary-default">¡REQUEST A QUOTE NOW!</h2>
      <p className="mx-auto mt-8 mb-2 text-xl font-normal px-2 sm:px-4 md:px-40">
      Our consultants will be happy to contact you to provide you with more information about our professional hygiene products and to send you a quotation.
      </p>
      <div className="flex flex-wrap mx-auto justify-center">
         <Link to="/export/en/contact/">
          <Button className="text-white mt-4 mb-4 rounded-xl transition duration-200 ease-in-out bg-primary-default shadow-md hover:bg-secondary-lighter hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 focus:outline-none" size="lg" type="submit">Quote</Button>
        </Link>

      </div>
    </div>
  </div>
</section>


<NewsletterSub/>

  </Layout>

)

}




export default Export

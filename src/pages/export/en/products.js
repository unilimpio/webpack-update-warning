
import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import Button from '../../../components/Button';

import Layout from '../../../components/layout/Layoutexport-en';

import SplitSection from '../../../components/SplitSection';
import NewsletterSub from "../../../components/NewsletterSub";
import { Link } from 'gatsby';






const seo={
  title: "Professional Hygiene products for Export",
  desc:  "We manufacture hygienic solutions of the best quality for the whole region and the world",
  image: "productos.jpg",
  pathname: "/export/en/products/",
}

const siteVerOpts = [

  {
    label: 'International',
    value: null,

  },


  {
    label: 'Ecuador',
    value: '/productos/',

  },


];

const langOpts = [

  {
    label: 'EN',
    value: null,

  },


  {
    label: 'ES',
    value: '/export/productos/',

  },


];

const Products = ({location}) => (

          <Layout location={location} crumbLabel="Products for export"
                  siteVerOpts={siteVerOpts} langOpts={langOpts}
                  title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>

<section id="productos" className="">
              <div className="">
               <h1 className="text-5xl font-semibold text-center mb-2">Professional Hygiene Products</h1>
                <h2 className="text-4xl font-semibold text-center mb-6 text-primary-lighter">International quality</h2>
                <SplitSection
                    primarySlot={
                      <div className="bg-gray-200 rounded-xl  my-10  px-6 py-6 mx-6">
                        <h2 className="text-xl font-semibold text-center mb-4 my-10 text-primary-default">We manufacture and export hygienic products to the entire Central and South American region</h2>
                        <p className="md:w-full text-left leading-relaxed text-base text-gray-700 text-justify pr-10 pl-10">
                          We manufacture the highest quality products for the most demanding markets and industries. Our constant innovation has allowed us to enter markets in the region.<br/>
                        Our plant located in Quito-Ecuador, has all the certifications and recognitions required to access the most demanding markets, such as BPM, BPA, ISO 9001.
                        </p>
                      </div>
                    }
                    secondarySlot={
                      <StaticImage src="../../images/productos-de-exportacion-unilimpio.jpg"
                                  className=""
                                  alt="Productos de limpieza"
                                  placeholder="blurred"
                                  layout="constrained"
                                   />

                    }/>

              </div>
            </section>





            <section id="categorias productos" className=" mt-0">
<h2 className="text-primary-default font-medium title-font text-center  text-3xl mt-6 ">Export Product Offering </h2>
<div class="relative bg-white px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div class="absolute inset-0">
    <div class="bg-white h-1/3 sm:h-2/3"></div>
  </div>
  <div class="relative max-w-7xl mx-auto">

    <div class=" max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">


        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
              <p class="text-lg font-semibold text-secondary-lighter text-center">Hand Hygiene
             </p>
             <div className="flex flex-wrap">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../hand-washing-dispensing-system'>Hand Washing Dispensing System
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="flex flex-wrap ">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../dispensing-system-for-hand-disinfection'>Dispensing System for Hand Disinfection
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="flex flex-wrap">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../antibacterial-liquid-soap'>Antibacterial Liquid Soap
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="flex flex-wrap">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../antibacterial-gel'>Antibacterial Gel
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="flex flex-wrap">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../foam-soap'>Foam Soap
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>

          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">

        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
              <p class="text-lg font-semibold text-secondary-lighter text-center">Food Industry
              </p>
              <div className="flex flex-wrap">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../bacterac-surface-sanitizer-and-disinfectant'>Bacterac Surface Sanitizer and Disinfectant
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="flex flex-wrap">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../digrizz'>Digrizz
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="flex flex-wrap">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../organic-100'>Organic 100
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="flex flex-wrap">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../disinfectant-wipes'>Disinfectant Wipes
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="flex flex-wrap">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../workpro-cleaning-cloths'>Workpro Cleaning Cloths
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">

            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">

        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
              <p class="text-lg font-semibold text-secondary-lighter text-center">Dispensers</p>
              <div className="flex flex-wrap ">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../toilet-paper-dispenser'> Toilet Paper Dispenser
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="flex flex-wrap">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../z-towel-dispenser'>Z Towel Dispenser
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">

            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</div>
</section>


            <section id="boton descargar catalogo" className="">
                <div className="w-full mx-auto mb-10">
                  <a href="../../../files/catalogo-exportacion-unilimpio.pdf" target="_blank" rel="noopener" className="">
                    <Button className="flex mx-auto mt-16 text-white bg-primary-default border-0 py-2 px-8 focus:outline-none hover:bg-primary-lighter rounded text-lg"  >Download Catalog </Button>
                    </a>
                </div>
            </section>
            <NewsletterSub/>

          </Layout>

)
export default Products


import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import Button from '../../../components/Button';

import ProductCard from '../../../components/ProductCard';
import Layout from '../../../components/layout/Layoutexport-en';



import LeadForm from "../../../components/LeadForm";
import SplitSectionB2b from '../../../components/SplitSectionB2b';
import SplitSection from '../../../components/SplitSection';
import NewsletterSub from "../../../components/NewsletterSub";
import { Link } from 'gatsby';






const seo={
  title: "Professional Hygiene products for Export",
  desc:  "We manufacture hygienic solutions of the best quality for the whole region and the world",
  image: "productos.jpg",
  pathname: "/export/en/products",
}

const siteVerOpts = [

  {
    label: 'International',
    value: null,

  },


  {
    label: 'Ecuador',
    value: '/productos',

  },


];

const langOpts = [

  {
    label: 'EN',
    value: null,

  },


  {
    label: 'ES',
    value: '/export/productos',

  },


];

const Products = ({location}) => (

          <Layout location={location} crumbLabel="Productos"
                  siteVerOpts={siteVerOpts} langOpts={langOpts}
                  title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>

            <section id="productos" className="">
              <div className="">
                <h1 className="text-5xl font-semibold text-center mb-6">Professional Hygiene products for Export</h1><br/>
                <SplitSection
                    primarySlot={
                      <div className="bg-gray-200 rounded-xl  my-10  px-6 py-6 mx-6">
                        <h2 className="text-xl font-semibold text-center mb-4 my-10">We are certified manufacturers of top quality professional hygiene products and solutions.</h2>
                        <p className="md:w-full text-left leading-relaxed text-base text-gray-700 text-justify pr-10 pl-10">
                          Our products are manufactured in our facility located in Quito Ecuador, which complies with the most strict requirements for every market in the region, such as Cosmetic grade GMP, ISO 9001:2018, carbon footprint, and more.
                        </p>
                      </div>
                    }
                    secondarySlot={
                      <StaticImage src="../../../images/productos-categorias.jpg"
                                  className=""
                                  alt="Productos de limpieza"
                                  placeholder="blurred"
                                  layout="constrained"
                                   />

                    }/>
                <div className="w-full">
                  <h2 className="text-primary-lighter font-medium title-font text-center my-10 text-decoration: underline text-3xl ">
                  Professional Hygiene products for Export</h2>
                  <div className="flex flex-wrap">

                    <Link className="mx-auto" to='../lotion-soap-sealed-cartdridge'>Lotion Soap Sealed Cartdridge for Dispenser</Link>

                  </div>

                </div>
                <div className="w-full mx-auto mb-20">


                  <a href="../../files/catalogo-institucional.pdf" className="">
                    <Button className="flex mx-auto mt-16 text-white bg-secondary-lighter border-0 py-2 px-8 focus:outline-none hover:bg-primary-lighter rounded text-lg">
                    Download the pdf export catalog </Button>
                    </a>
                </div>
              </div>
            </section>


            <NewsletterSub/>

          </Layout>

)
export default Products

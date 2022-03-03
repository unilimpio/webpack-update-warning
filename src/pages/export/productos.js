
import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import Button from '../../components/Button';

import ProductCard from '../../components/ProductCard';
import Layout from '../../components/layout/Layoutexport';



import LeadForm from "../../components/LeadForm";
import SplitSectionB2b from '../../components/SplitSectionB2b';
import SplitSection from '../../components/SplitSection';
import NewsletterSub from "../../components/NewsletterSub";
import { Link } from 'gatsby';






const seo={
  title: "Productos de exportacion",
  desc:  "Fabricamos y comercializamos productos para la region y el mundo",
  image: "productos.jpg",
  pathname: "/export/productos",
}

const siteVerOpts = [

  {
    label: 'Internacional',
    value: null,

  },


  {
    label: 'Ecuador',
    value: '/productos',

  },


];

const langOpts = [

  {
    label: 'ES',
    value: null,

  },


  {
    label: 'EN',
    value: '/export/en/products',

  },


];

const Products = ({location}) => (

          <Layout location={location} crumbLabel="Productos"
            siteVerOpts={siteVerOpts} langOpts={langOpts}
            title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>

            <section id="productos" className="">
              <div className="">
                <h1 className="text-5xl font-semibold text-center mb-6">Productos de higiene profesional para la región</h1><br/>
                <SplitSection
                    primarySlot={
                      <div className="bg-gray-200 rounded-xl  my-10  px-6 py-6 mx-6">
                        <h2 className="text-xl font-semibold text-center mb-4 my-10">Fabricamos y exportamos a toda la región centro y sudamericana productos higiénicos</h2>
                        <p className="md:w-full text-left leading-relaxed text-base text-gray-700 text-justify pr-10 pl-10">
                          Fabricamos productos de la más alta calidad para los mercados y las industrias más exigentes. Nuestra innovación constante nos ha permitido entrar en mercados de la región.
                          Nuestra planta ubicada en QUito, Ecuador, cuenta con todas las certificaciones y reconocimientos requeridos para acceder a los mercados más exigentes, ocmo son BPM, BPA, ISO 9001:!400.
                        </p>
                      </div>
                    }
                    secondarySlot={
                      <StaticImage src="../../images/productos-categorias.jpg"
                                  className=""
                                  alt="Productos de limpieza"
                                  placeholder="blurred"
                                  layout="constrained"
                                   />

                    }/>
                <div className="w-full">
                  <h2 className="text-primary-lighter font-medium title-font text-center my-10 text-decoration: underline text-3xl ">Portafolio de Productos de Limpieza</h2>
                  <div className="flex flex-wrap">

                    <Link className="mx-auto" to='../jabon-liquido-recarga'>Jabon Liquido Recarga</Link>

                  </div>

                </div>
                <div className="w-full mx-auto mb-20">


                  <a href="../files/catalogo-institucional.pdf" className="">
                    <Button className="flex mx-auto mt-16 text-white bg-secondary-lighter border-0 py-2 px-8 focus:outline-none hover:bg-primary-lighter rounded text-lg">Descargue el Catálogo Institucional </Button>
                    </a>
                </div>
              </div>
            </section>


            <NewsletterSub/>

          </Layout>

)
export default Products

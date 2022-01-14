

import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import Button from '../components/Button';

import ProductCard from '../components/ProductCard';
import Layout from '../components/layout/Layout';


import ProductsData from '../data/products-data';
import LeadForm from "../components/LeadForm";
import SplitSectionB2b from '../components/SplitSectionB2b';
import SplitSection from '../components/SplitSection';
import NewsletterSub from "../components/NewsletterSub";

import CatalogoInst from '../files/catalogo-institucional.pdf';




const seo={
  title: "Productos de limpieza",
  desc:  "Fabricamos y comercializamos productos líderes del mercado, reconocidos por su calidad, innovación, y excelente costo en uso. Adaptamos nuestra oferta de productos a las necesidades específicas de cada cliente, a través de un asesoramiento profesional, seguimiento y entrenamiento permanentes.",
  image: "productos.jpg",
  pathname: "/productos",
}

const Productos = ({location}) => (

          <Layout location={location} crumbLabel="Productos" title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>

            <section id="productos" className="pt-6">
              <div className="">
                <h1 className="text-5xl font-semibold text-center mb-6">Productos de Limpieza</h1>
                <SplitSection
                    primarySlot={
                      <div className="px-8 py-10 bg-gray-200 rounded-xl">
                        <h2 className="text-xl font-semibold text-center mb-4">Disponemos de un portafolio completo de productos de limpieza para resolver todas sus necesidades de higiene institucional.</h2>
                        <p className="md:w-full text-left leading-relaxed text-base text-gray-700 text-justify">
                          Fabricamos y comercializamos productos líderes del mercado, reconocidos por su calidad, innovación, y excelente costo en uso.
                          Adaptamos nuestra oferta de productos a las necesidades específicas de cada cliente, a través de un asesoramiento profesional, seguimiento y entrenamiento permanentes.
                        </p>
                      </div>
                    }
                    secondarySlot={
                      <StaticImage src="../images/productos-categorias.jpg"
                                  className=""
                                  alt="Productos de limpieza"
                                  placeholder="blurred"
                                  layout="constrained"
                                   />

                    }/>
                <div className="w-full">
                  <h2 className="text-primary-lighter font-medium title-font text-center my-10 text-decoration: underline text-3xl ">Portafolio de Productos de Limpieza</h2>
                  <div className="flex flex-wrap">

                    {ProductsData.map((product, index) => (

                          <ProductCard product={ product } key={ index } />

                    ))}

                  </div>

                </div>
                <div className="w-full mx-auto mb-20">
                  <Link to={CatalogoInst} target="_blank" rel="noreferrer" />
                    <Button className="flex mx-auto mt-16 text-white bg-primary-lighter border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Descargue el Catálogo Institucional completo </Button>

                </div>
              </div>
            </section>

            <SplitSectionB2b/>

            <LeadForm/>
            <NewsletterSub/>

          </Layout>

)
export default Productos

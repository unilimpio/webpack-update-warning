
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout/Layout';
import FeatureCard from '../../components/FeatureCard';

import featuresData from '../../data/productos/linea-profesional/features-data';
import { StaticImage } from "gatsby-plugin-image"
import SplitSection from '../../components/SplitSection';
import SplitSectionB2b from '../../components/SplitSectionB2b';

import LeadForm from '../../components/LeadForm';
import NewsletterSub from '../../components/NewsletterSub'

const siteVerOpts = [

  {
    label: 'Ecuador',
    value: null,


  },

  {
    label: 'Internacional',
    value: '/',


  },
];

const langOpts = [


  {
    label: 'ES',
    value: null,

  },


  {
    label: 'EN',
    value: `/export/en/products`,

  },


];

const seo={
  title: "Línea Profesional",
  desc:  "Accesorios para la limpieza de pisos, vidrios, paredes en grandes superficies para eliminar el polvo y la suciedad provocada por el tránsito continuo de gente.",
  image: "linea-profesional.jpg",
  pathname: "/linea-profesional",
}
export default function Named ({location}) {


  return(
  <Layout location={location} crumbLabel="Equipos y accesorios profesionales"
  siteVerOpts={siteVerOpts} langOpts={langOpts}
  title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>


<section id="product-line" className="pt-6 bg-gradient-to-br from-gray-300 via-white to-gray-300">
  <div className="container mx-auto">
    <h1 className="text-center sm:text-4xl text-4xl font-bold title-font mb-8">Línea Profesional</h1>
    <SplitSection className=""
        primarySlot={
          <div className="bg-white bg-opacity-50 rounded-xl p-8">
            <h2 className="text-xl text-primary-lighter mb-5">Implementos profesionales de limpieza para asegurar entornos limpios y seguros.</h2>
            <p className="md:w-full text-left leading-relaxed text-base text-gray-700 text-justify">
            Accesorios para la limpieza de pisos, vidrios, paredes en grandes superficies para eliminar el polvo y la suciedad provocada por el tránsito continuo de gente.

            </p>
          </div>
        }
        secondarySlot={
          <StaticImage src="../../images/linea-profesional.jpg"
          className=""
          alt="Implementos profesionales para la limpieza. Unilimpio"
          placeholder="blurred"
          layout="constrained"
           />
        }/>
    <div className="w-full">
      <h2 className="font-medium title-font text-center my-10 text-decoration: underline text-3xl">Categorías</h2>
      <div className="flex flex-wrap">
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Mopas de Limpieza
          </h3>
          <Link   to="/productos/linea-profesional/mopa-polvo-acrilica" className="text-primary-lighter inline-flex items-center">
          Mopa Polvo Acrílica
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/linea-profesional/mopa-humeda-microfibra-velcro" className="text-primary-lighter inline-flex items-center">
          Mopa Húmeda Microfibra Velcro
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/linea-profesional/mopa-vertical-secado" className="text-primary-lighter inline-flex items-center">
          Mopa Vertical Secado
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Coche de Limpieza
          </h3>
          <Link  to="/productos/linea-profesional/coche-exprimidor" className="text-primary-lighter inline-flex items-center">
              Coche Exprimidor
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Paños de Limpieza
          </h3>
          <Link   to="/productos/linea-profesional/panos-microfibra" className="text-primary-lighter inline-flex items-center">
              Paños Microfibra
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Escurridores
          </h3>
          <Link   to="/productos/linea-profesional/escurridor-para-vidrio" className="text-primary-lighter inline-flex items-center">
              Escurridor para Vidrio
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/linea-profesional/escurridor-de-piso" className="text-primary-lighter inline-flex items-center">
              Escurridor de Piso
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
        </div>


      </div>
    </div>

  </div>
</section>


<section id="features" className="py-10 md:py-20 ">
      <div className="container mx-auto">
        <div className="w-full bg-fill bg-no-repeat bg-products">
          <h2 className="text-3xl font-semibold text-center">¿Por qué elegir nuestros implementos profesionales de limpieza?</h2>
          <p className="md:w-2/3 mx-auto text-center my-5 text-2xl">
          Al elegirnos, usted recibe los siguientes beneficios:
          </p>
        </div>

        <div className="flex flex-wrap justify-center">

            {featuresData.map(feature => (
            <div key={feature.featureName} className="w-full p-4 lg:w-1/3">
              <FeatureCard feature={feature} />
            </div>
            ))}


        </div>
      </div>
</section>

<SplitSectionB2b/>

<LeadForm/>
<NewsletterSub/>


  </Layout>
)}

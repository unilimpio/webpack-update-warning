
import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout/Layout';
import FeatureCard from '../../components/FeatureCard';

import LeadForm from "../../components/LeadForm";
import featuresData from '../../data/productos/higiene-de-manos/features-data';


import PictureWebp from "../../components/PictureWebp";
import SplitSection from '../../components/SplitSection';
import SplitSectionB2b from '../../components/SplitSectionB2b';
import NewsletterSub from '../../components/NewsletterSub'

const seo={
  title: "Higiene de Manos",
  desc:  "Productos de alta calidad para el lavado y desinfección de manos para uso doméstico e institucional.",
  image: "higiene-de-manos.jpg",
  pathname: "/higiene-de-manos",
}

export default function Named  ({location})  {

  return(
  <Layout location={location} crumbLabel="Higiene de Manos"
  title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>


<section id="product-line" className="pt-6 bg-gradient-to-br from-gray-300 via-white to-gray-300">
  <div className="container mx-auto">
    <h1 className="text-center sm:text-4xl text-4xl font-bold title-font mb-8">Higiene y Desinfección de Manos</h1>
    <SplitSection className=""
        primarySlot={
          <div className="bg-white bg-opacity-50 rounded-xl p-8">
            <h2 className="text-xl text-blue-500 mb-5">Productos de alta calidad para el lavado y desinfección de manos para uso doméstico e institucional.</h2>
            <p className="md:w-full text-left leading-relaxed text-base text-gray-700 text-justify">
            Nuestros productos para la higiene y desinfección de manos son desarrollados con formulas con un poderoso efecto bactericida y viricida. Sus ingredientes antimicrobianos de última generación eliminan el 99,9% de gérmenes causantes de enfermedades en 30 segundos. Expertos médicos a nivel mundial recomiendan el lavado y desinfección de manos constantes para prevenir el contagio de enfermedades causadas por microrganismos patógenos, incluyendo virus envueltos como el SARS-CoV2, causante de la enfermedad Covid-19.<br/>


            </p>
          </div>
        }
        secondarySlot={
          <PictureWebp className="float-right" path="" filename="higiene-de-manos" description="Higiene y desinfección de manos Unilimpio"/>
        }/>
    <div className="w-full">
      <h2 className="font-medium title-font text-center my-10 text-decoration: underline text-3xl">Categorías</h2>
      <div className="flex flex-wrap">
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Jabón Líquido Antibacterial Dr.Clean
          </h3>
          <Link  to="/productos/higiene-de-manos/jabon-liquido-autodispensado" className=" text-blue-500  inline-flex items-center">
              Jabón Líquido Antibacterial Autodispensado
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link to="/productos/higiene-de-manos/jabon-liquido-para-relleno" className="text-blue-500  inline-flex items-center">
              Jabón Líquido Antibacterial para Relleno
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/higiene-de-manos/jabon-liquido-en-sachet" className="text-blue-500  inline-flex items-center">
              Jabón Líquido Antibacterial en Sachet para Dispensador
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>

        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Gel Antibacterial Dr.Clean
          </h3>
          <Link  to="/productos/higiene-de-manos/gel-antibacterial-autodispensado" className="text-blue-500 inline-flex items-center text-left">
              Gel Antibacterial Autodispensado
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/higiene-de-manos/gel-antibacterial-para-relleno" className="text-blue-500 inline-flex items-center text-left">
             Gel Antibacterial para Relleno
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/higiene-de-manos/gel-antibacterial-en-sachet" className="text-blue-500 inline-flex items-center text-left">
              Gel Antibacterial en Sachet para Dispensador
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/higiene-de-manos/alcohol-para-manos" className="text-blue-500 inline-flex items-center">
              Alcohol para Manos
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
          <h2 className="text-3xl font-semibold text-center bold">¿Por qué elegir nuestros productos para la higiene y desinfección de manos?</h2>
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

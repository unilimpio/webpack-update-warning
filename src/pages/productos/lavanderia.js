
import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout/Layout';
import FeatureCard from '../../components/FeatureCard';

import featuresData from '../../data/productos/lavanderia/features-data';

import PictureWebp from "../../components/PictureWebp";
import SplitSection from '../../components/SplitSection';
import SplitSectionB2b from '../../components/SplitSectionB2b';
import LeadForm from '../../components/LeadForm';
import NewsletterSub from '../../components/NewsletterSub';

const seo={
  title: "Lavandería",
  desc:  "Productos químicos para el lavado de prendas seguros y amigables con el medio ambiente.",
  image: "lavanderia.jpg",
  pathname: "/lavanderia",
}

export default function Named  ({location})  {


  return(
  <Layout location={location} crumbLabel="Lavanderia"
  title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>


<section id="product-line" className="pt-6 bg-gradient-to-br from-gray-300 via-white to-gray-300">
  <div className="container mx-auto">
    <h1 className="text-center sm:text-4xl text-4xl font-bold title-font mb-8">Lavandería</h1>
    <SplitSection className=""
        primarySlot={
          <div className="bg-white bg-opacity-50 rounded-xl p-8">
            <h2 className="text-xl text-primary-lighter mb-5">Productos químicos para el lavado de prendas seguros y amigables con el medio ambiente.</h2>
            <p className="md:w-full text-left leading-relaxed text-base text-gray-700 text-justify">
            Suavizante de ropa y detergentes líquidos y en polvo para el lavado textil. Ideal para la limpieza de telas manchadas con grasa de alimentos, sudor y residuos. Sus componentes activos son productos naturales biodegradables, que no son agresivos con las manos ni con el medio ambiente. Para uso doméstico, institucional e industrial. <br/>

            </p>
          </div>
        }
        secondarySlot={
          <PictureWebp className="float-right" path="" filename="lavanderia" description="Productos de lavandería "/>
        }/>
    <div className="w-full">
      <h2 className="font-medium title-font text-center my-10 text-decoration: underline text-3xl">Categorías</h2>
      <div className="flex flex-wrap">
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Detergentes
          </h3>
          <Link   to="/productos/lavanderia/detergente-liquido-enzimatico" className="text-primary-lighter inline-flex items-center">
              Detergente Líquido Enzimático
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/lavanderia/detergente-liquido-biosolutions" className="text-primary-lighter inline-flex items-center">
              Detergente Líquido Biosolutions
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/lavanderia/detergente-en-polvo" className="text-primary-lighter inline-flex items-center">
              Detergente en Polvo Unilimpio
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>

        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Suavizantes
          </h3>
          <Link  to="/productos/lavanderia/suavizante-de-ropa" className="text-primary-lighter inline-flex items-center">
              Suavizante Líquido
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
          <h2 className="text-3xl font-semibold text-center">¿Por qué elegir nuestros productos para el lavado de prendas?</h2>
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
)
}

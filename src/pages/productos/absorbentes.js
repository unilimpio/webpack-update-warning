
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout/Layout';
import FeatureCard from '../../components/FeatureCard';
import featuresData from '../../data/productos/absorbentes/features-data';
import { StaticImage } from "gatsby-plugin-image"
import SplitSection from '../../components/SplitSection';
import SplitSectionB2b from '../../components/SplitSectionB2b';
import LeadForm from '../../components/LeadForm';
import NewsletterSub from '../../components/NewsletterSub';

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
  title: "Absorbentes",
  desc:  "Nuestra línea de absorbentes son desarrollados con materia prima de la mejor calidad y amigables con el ambiente.",
  image: "absorbentes.jpg",
  pathname: "/absorbentes",
}


export default function Named ({location}) {

  return(
  
  <Layout location={location} crumbLabel="Absorbentes"
  siteVerOpts={siteVerOpts} langOpts={langOpts}
  title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>


<section id="product-line" className="pt-6 bg-gradient-to-br from-gray-300 via-white to-gray-300">
  <div className="container mx-auto">
    <h1 className="text-center sm:text-4xl text-4xl font-bold title-font mb-8">Absorbentes</h1><br/>
    <SplitSection className=""
        primarySlot={
          <div className="bg-white bg-opacity-50 rounded-xl p-10">
            <h2 className="text-xl text-primary-lighter mb-5">Desarrollados con materia prima de la mejor calidad y amigables con el ambiente.</h2>
            <p className="md:w-full text-left leading-relaxed text-base text-gray-700 text-justify ">
            Nuestra línea de absorbentes ha sido creada para tener un máximo poder de absorción y retención de líquidos. Elaborada con soluciones ecológicas de higiene en suavidad y textura para mayor bienestar en cuidado personal. Procesos socialmente responsables.<br/>


            </p>
          </div>
        }
        secondarySlot={
           <StaticImage src="../../images/absorbentes.jpg"
        className=""
        alt="papel higienico jumbo, toalla z, toallas de mano, limpion industrial, center pull de la empresa Unilimpio"
        placeholder="blurred"
        layout="constrained"
         />
    
        }/>
    <div className="w-full">
      <h2 className="font-medium title-font text-center my-10 text-decoration: underline text-3xl">Categorías</h2>
      <div className="flex flex-wrap">
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 ">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Toallas de Manos
          </h3>
          <Link to="/productos/absorbentes/toalla-z-interfoliada-bio" className="text-primary-lighter inline-flex items-center">
              Toalla Z Bio Interfoliada
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/absorbentes/toalla-de-manos-bio" className="text-primary-lighter inline-flex items-center">
             Toalla de Manos Bio 
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/absorbentes/toalla-de-manos-center-pull" className="text-primary-lighter inline-flex items-center">
            Toalla de Manos Center Pull
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/absorbentes/limpion-industrial" className="text-primary-lighter inline-flex items-center">
            Limpión Industrial
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>

        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-3 text-center">
            Papel Higiénico
          </h3>
          <Link   to="/productos/absorbentes/papel-higienico-jumbo-bio" className="text-primary-lighter inline-flex items-center">
              Papel Higiénico Jumbo Bio
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>



        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-3 text-center">
            Servilletas
          </h3>
          <Link   to="/productos/absorbentes/servilleta-bio" className="text-primary-lighter inline-flex items-center">
             Servilleta Bio
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/absorbentes/servilleta-dispensada" className="text-primary-lighter inline-flex items-center">
             Servilleta en Z Dispensada
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
          <h2 className="text-3xl font-semibold text-center">¿Por qué elegir nuestros absorbentes?</h2>
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

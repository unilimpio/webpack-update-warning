
import React from 'react';
import { Link } from 'gatsby';


import Layout from '../../components/layout/Layout';
import FeatureCard from '../../components/FeatureCard';
import featuresData from '../../data/productos/dispensadores/features-data';
import { StaticImage } from "gatsby-plugin-image"
import SplitSection from '../../components/SplitSection';
import SplitSectionB2b from '../../components/SplitSectionB2b';
import LeadForm from '../../components/LeadForm';
import NewsletterSub from '../../components/NewsletterSub'

const siteVerOpts = [

  {
    label: 'Ecuador',
    value: '',


  },

  {
    label: 'Internacional',
    value: '/',


  },
];

const langOpts = [


  {
    label: 'ES',
    value: '',

  },


  {
    label: 'EN',
    value: `/export/en/products`,

  },


];

const seo={
  title: "Dispensadores",
  desc:  "Contamos con una gran variedad de dispensadores modernos y elegantes diseños que se adaptan facilmente a sus necesidades de uso. Ideal para dosificar y economizar el producto.",
  image: "dispensadores.jpg",
  pathname: "/dispensadores",
}

export default function Named ({location}) {


  return(
  <Layout location={location} crumbLabel="Dispensadores"
  siteVerOpts={siteVerOpts} langOpts={langOpts}
  title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>


<section id="product-line" className="pt-6 bg-gradient-to-br from-gray-300 via-white to-gray-300">
  <div className="container mx-auto">
    <h1 className="text-center sm:text-4xl text-4xl font-bold title-font mb-8">Dispensadores</h1>
    <SplitSection className=""
        primarySlot={
          <div className="bg-white bg-opacity-50 rounded-xl p-8 text-justify">
            <h2 className="text-xl text-primary-lighter mb-5">Una amplia línea de dispensadores para sus diferentes necesidades.</h2>
            <p className="md:w-full text-left leading-relaxed text-base text-gray-700 text-justify">
              Contamos con una gran variedad de dispensadores modernos y elegantes diseños que se adaptan facilmente a sus necesidades de uso. Ideal para dosificar y economizar el producto.<br/>


            </p>
          </div>
        }
        secondarySlot={
          <StaticImage src="../../images/dispensadores.jpg"
                      className=""
                      alt="dispensadores de jabon, alcohol, gel, toallas de manos Unilimpio"
                      placeholder="blurred"
                      layout="constrained"
                       />
        }/>
    <div className="w-full">
      <h2 className="font-medium title-font text-center my-10 text-decoration: underline text-3xl">Categorías</h2>
      <div className="flex flex-wrap">
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
           Dispensador de Jabón 
          </h3>
          <Link  to="/productos/dispensadores/jabon-liquido" className="text-primary-lighter inline-flex items-center">
            Jabón Líquido
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/dispensadores/jabon-espuma" className="text-primary-lighter inline-flex items-center">
            Jabón Espuma
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/dispensadores/jabon-liquido-automatico" className="text-primary-lighter inline-flex items-center">
            Jabón Líquido Automático
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/dispensadores/jabon-espuma-automatico" className="text-primary-lighter inline-flex items-center">
            Jabón Espuma Automático
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
        </div>

        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
           Dispensador de Gel Antibacterial 
          </h3>
          <Link  to="/productos/dispensadores/gel-antibacterial" className="text-primary-lighter inline-flex items-center">
            Gel Antibacterial 
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/dispensadores/gel-antibacterial-automatico" className="text-primary-lighter inline-flex items-center">
            Gel Antibacterial Automático
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
        </div>

        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
           Dispensador de Alcohol
          </h3>
          <Link  to="/productos/dispensadores/alcohol" className="text-primary-lighter inline-flex items-center">
           Alcohol Spray
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Dispensador de Papel Higiénico
          </h3>
          <Link  to="/productos/dispensadores/papel-higienico-jumbo-unilimpio" className="text-primary-lighter inline-flex items-center">
              Papel Higiénico Jumbo Unilimpio
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/dispensadores/papel-higienico-jumbo-de-lujo" className="text-primary-lighter inline-flex items-center">
              Papel Higiénico Jumbo de Lujo
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/dispensadores/papel-higienico-jumbo-premium" className="text-primary-lighter inline-flex items-center">
               Papel Higiénico Jumbo Premium
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Dispensador de Toallas
          </h3>

          <Link to="/productos/dispensadores/toalla-z-unilimpio" className="text-primary-lighter inline-flex items-center">
              Toalla Z Unilimpio
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/dispensadores/toalla-z-de-lujo" className="text-primary-lighter inline-flex items-center">
              Toalla Z de Lujo
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link to="/productos/dispensadores/toalla-center-pull" className="text-primary-lighter inline-flex items-center">
              Toalla Center pull de Lujo
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
          <h2 className="text-3xl font-semibold text-center">¿Por qué elegir nuestro dispensadores?</h2>
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
<NewsletterSub />



  </Layout>
)}

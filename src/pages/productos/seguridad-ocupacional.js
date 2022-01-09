
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout/Layout';
import FeatureCard from '../../components/FeatureCard';
import featuresData from '../../data/productos/seguridad-ocupacional/features-data';
import PictureWebp from "../../components/PictureWebp";
import SplitSection from '../../components/SplitSection';
import SplitSectionB2b from '../../components/SplitSectionB2b';

import LeadForm from '../../components/LeadForm';
import NewsletterSub from '../../components/NewsletterSub'

const seo={
  title: "Seguridad Ocupacional",
  desc:  "Equipos de protección personal para la seguridad física de sus colaboradores.",
  image: "seguridad-ocupacional.jpg",
  pathname: "/seguridad-ocupacional",
}

export default function Named  ({location})  {

  return(
  <Layout location={location} crumbLabel="Seguridad Ocupacional"
  title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>


<section id="product-line" className="pt-6 bg-gradient-to-br from-gray-300 via-white to-gray-300">
  <div className="container mx-auto">
    <h1 className="text-center sm:text-4xl text-4xl font-bold title-font mb-8">Seguridad Ocupacional</h1>
    <SplitSection className=""
        primarySlot={
          <div className="bg-white bg-opacity-50 rounded-xl p-8">
            <h2 className="text-xl text-blue-500 mb-5">Equipos de protección física para sus colaboradores</h2>
            <p className="md:w-full text-left leading-relaxed text-base text-gray-700 text-justify">
            Equipos de protección individual para garantizar la total seguridad en todos los puestos de trabajo. Equipos de uso obligatorio que se encargan de evitar o minimizar los riesgos para así garantizar la seguridad y la salud del trabajador ante todos los riesgos que se encuentre expuesto.

            </p>
          </div>
        }
        secondarySlot={
          <PictureWebp className="float-right" path="" filename="seguridad-ocupacional" description="Equipos de seguridad ocupacional "/>
        }/>
    <div className="w-full">
      <h2 className="font-medium title-font text-center mt-10 mb-4 text-decoration: underline text-3xl">Categorías</h2>
      <p className="text-gray-500 text-center text-md">Debajo encontrará los prinicpales productos en esta línea.</p>
      <div className="flex flex-wrap">
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Mascarillas
          </h3>
          <Link  to="/productos/seguridad-ocupacional/mascarilla-KN95" className="text-blue-500 inline-flex items-center">
          Mascarrilla KN95
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>


        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Guantes
          </h3>
          <Link   to="/productos/seguridad-ocupacional/guantes-de-nitrilo" className="text-blue-500 inline-flex items-center">
              Guantes de Nitrilo
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/seguridad-ocupacional/guantes-latex-corrugado-shadow" className="text-blue-500 inline-flex items-center">
          Guante Latex Recubierto Corrugado Shadow
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/seguridad-ocupacional/guantes-latex-corrugado-cloud" className="text-blue-500 inline-flex items-center">
          Guante Latex Recubierto Corrugado Cloud
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/seguridad-ocupacional/guantes-latex-corrugado-rifle" className="text-blue-500 inline-flex items-center">
          Guante Latex Recubierto Corrugado Rifle
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/seguridad-ocupacional/guantes-latex-corrugado-wave" className="text-blue-500 inline-flex items-center">
          Guante Latex Recubierto Corrugado Wave
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/seguridad-ocupacional/guantes-latex-corrugado-blue-sky" className="text-blue-500 inline-flex items-center">
          Guante Latex Recubierto Corrugado Blue Sky
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
        </div>

        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Trajes de Seguridad
          </h3>
          <Link   to="/productos/seguridad-ocupacional/traje-de-seguridad" className="text-blue-500 inline-flex items-center">
          Traje de Seguridad Completo
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Botas de Seguridad
          </h3>
          <Link  to="/productos/seguridad-ocupacional/bota-industrial-pvc" className="text-blue-500 inline-flex items-center">
          Bota Industrial de PVC  Punta de Acero
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/seguridad-ocupacional/botin-contratista-dielectrico" className="text-blue-500 inline-flex items-center">
          Botín Contratista Dieléctrico Punta de Acero
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
          <h2 className="text-3xl font-semibold text-center">¿Por qué elegir nuestros equipos de seguridad ocupacional?</h2>
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

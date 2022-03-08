
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout/Layout';
import { StaticImage } from "gatsby-plugin-image"
import SplitSection from '../../components/SplitSection';

import LeadForm from '../../components/LeadForm';

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
  title: "Soluciones Sector Alto Tráfico",
  desc:  "Las mejores soluciones para sector alto tráfico",
  image: "soluciones-alto-trafico.jpg",
  pathname: "/alto-trafico", 
}


export default function Named ({location}) {

  return(
  <Layout location={location} crumbLabel="Alto Trafico"
  siteVerOpts={siteVerOpts} langOpts={langOpts}
  title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>

    
<section id="product-line" className="pt-6 bg-gradient-to-br from-gray-300 via-white to-gray-300">
  <div className="container mx-auto">
    <h1 className="text-center sm:text-4xl text-4xl font-bold title-font mb-8">Soluciones para sector Alto Tráfico</h1>
    <SplitSection className=""
        primarySlot={
          <div className="bg-white bg-opacity-50 rounded-xl p-10">
            <h2 className="text-xl text-primary-lighter mb-5">Las mejores soluciones pensadas para el bienestar de sus visitantes. </h2>
            <p className="md:w-full text-left leading-relaxed text-base text-gray-700 text-justify ">
            Contamos con un amplio portafolio de productos de limpieza para que pueda encontrar todas las soluciones a sus problemas de limpieza. Le asesoramos en los procedimientos adecuados para garantizar la higiene y desinfección de áreas y superficies, brindando así seguridad a sus visitantes a través de productos de limpieza de la más alta calidad y soluciones de higiene adecuadas. <br/>
          
              
            </p>
          </div>
        }
        secondarySlot={
          <StaticImage src="../../images/soluciones-alto-trafico.jpg"
          className=""
          alt="soluciones de limpieza para el sector alto trafico "
          placeholder="blurred"
          layout="constrained"
           />
        }/>
        
        <div className="w-full">
      <h2 className="font-medium title-font text-center my-10 text-decoration: underline text-3xl">Productos de Limpieza Recomendados</h2>        
      <div className="flex flex-wrap">
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 ">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Productos Químicos
          </h3>
          <Link   to="/productos/quimicos/amonio-cuaternario-de-quinta-generacion-ozz" className="text-primary-lighter inline-flex items-center">Amonio Cuaternario al 10%
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link to="/productos/quimicos/desinfectante-con-amonio-cuaternario" className="text-primary-lighter inline-flex items-center">
              Desinfectante con Amonio Cuaternario Ozz
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/quimicos/alcohol-multipropositos" className="text-primary-lighter inline-flex items-center">
              Alcohol al 72%
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/quimicos/cloro-liquido-ozz" className="text-primary-lighter inline-flex items-center">
              Cloro líquido al 5.5%
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/quimicos/desinfectante-liquido" className="text-primary-lighter inline-flex items-center">
              Desinfectante líquido 
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link> <br/>
        </div>

        
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-3 text-center">
            Higiene de Manos
          </h3>
          <Link to="/productos/higiene-de-manos/jabon-liquido-para-relleno" className="text-primary-lighter  inline-flex items-center">
              Jabón Líquido Antibacterial para Relleno
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/higiene-de-manos/jabon-liquido-en-sachet" className="text-primary-lighter  inline-flex items-center">
              Jabón Líquido Antibacterial en Sachet para Dispensador 
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/higiene-de-manos/gel-antibacterial-para-relleno" className="text-primary-lighter inline-flex items-center text-left">
             Gel Antibacterial para Relleno
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/higiene-de-manos/gel-antibacterial-en-sachet" className="text-primary-lighter inline-flex items-center text-left">
              Gel Antibacterial en Sachet para Dispensador 
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/higiene-de-manos/alcohol-antimicrobiano" className="text-primary-lighter inline-flex items-center">
              Alcohol Antimicrobiano
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
        </div>  

        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 ">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Absorbentes
          </h3>
          <Link to="/productos/absorbentes/toalla-z-interfoliada-bio" className="text-primary-lighter inline-flex items-center">
              Toalla Z Bio Interfoliada
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/absorbentes/toalla-de-manos-bio" className="text-primary-lighter inline-flex items-center">
             Toalla de Manos Bio x2 unidades  
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/absorbentes/toalla-de-manos-center-pull" className="text-primary-lighter inline-flex items-center">
            Toalla de Manos Center Pull
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/absorbentes/papel-higienico-jumbo-bio" className="text-primary-lighter inline-flex items-center">
              Papel Higiénico Jumbo Bio
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          </div> 

          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-3 text-center">
            Lavandería
          </h3>
          <Link   to="/productos/lavanderia/detergente-en-polvo" className="text-primary-lighter inline-flex items-center">
              Detergente en Polvo Unilimpio
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/lavanderia/detergente-liquido-enzimatico" className="text-primary-lighter inline-flex items-center">
              Detergente Líquido Enzimático
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
        </div>  

        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-3 text-center">
            Dispensadores
          </h3>
          <Link   to="/productos/dispensadores/jabon-liquido" className="text-primary-lighter inline-flex items-center">Jabón Líquido  
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/dispensadores/jabon-espuma" className="text-primary-lighter inline-flex items-center">Jabón Espuma 
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/dispensadores/gel-antibacterial" className="text-primary-lighter inline-flex items-center">Gel Antibacterial  
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/dispensadores/papel-higienico-jumbo-unilimpio" className="text-primary-lighter inline-flex items-center">Papel Higiénico Jumbo Unilimpio
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/dispensadores/papel-higienico-jumbo-de-lujo" className="text-primary-lighter inline-flex items-center">
              Papel Higiénico Jumbo de Lujo
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/dispensadores/papel-higienico-jumbo-premium" className="text-primary-lighter inline-flex items-center">
               Papel Higiénico Jumbo Premium
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/dispensadores/toalla-z-unilimpio" className="text-primary-lighter inline-flex items-center">Toalla en Z Unilimpio
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/dispensadores/toalla-z-de-lujo" className="text-primary-lighter inline-flex items-center">
              Toalla Z de Lujo
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/dispensadores/toalla-center-pull" className="text-primary-lighter inline-flex items-center">Toalla Center Pull 
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
        </div>

        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Secadores de Manos 
          </h3>
          <Link   to="/productos/secadores-de-manos/expair-automatico" className="text-primary-lighter inline-flex items-center">
          Secador de Manos Expair Automático
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/secadores-de-manos/supair-automatico" className="text-primary-lighter inline-flex items-center">
          Secador de Manos Supair Automático
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
            
        </div>

        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-3 text-center">
            Línea Profesional
          </h3>
          <Link   to="/productos/linea-profesional/mopa-polvo-acrilica" className="text-primary-lighter inline-flex items-center">
          Mopa Polvo Acrílica
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/linea-profesional/mopa-humeda-microfibra-velcro" className="text-primary-lighter inline-flex items-center">
          Mopa Húmeda Microfibra Velcro
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/linea-profesional/mopa-vertical-secado" className="text-primary-lighter inline-flex items-center">
          Mopa Vertical Secado
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/> 
          <Link  to="/productos/linea-profesional/coche-exprimidor" className="text-primary-lighter inline-flex items-center">
              Coche Exprimidor
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/> 
          <Link   to="/productos/linea-profesional/panos-microfibra" className="text-primary-lighter inline-flex items-center">
              Paños Microfibra
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/> 
          <Link   to="/productos/linea-profesional/escurridor-para-vidrio" className="text-primary-lighter inline-flex items-center">
              Escurridor para Vidrio
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/> 
          <Link   to="/productos/linea-profesional/escurridor-de-piso" className="text-primary-lighter inline-flex items-center">
              Escurridor de Piso
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/> 
        </div> 
      
      </div>
    </div>
             
  </div>  
</section>

<br/><br/>

    
<LeadForm/>


</Layout>
)}


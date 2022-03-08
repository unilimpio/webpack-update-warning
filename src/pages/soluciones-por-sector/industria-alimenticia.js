
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
  title: "Soluciones Industria Alimenticia",
  desc:  "Las mejores soluciones para la industria alimenticia",
  image: "soluciones-industria-alimenticia.jpg",
  pathname: "/industria-alimenticia", 
}


export default function Named ({location}) {

  return(
  <Layout location={location} crumbLabel="Industria Alimenticia"
  siteVerOpts={siteVerOpts} langOpts={langOpts}
  title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>

    
<section id="product-line" className="pt-6 bg-gradient-to-br from-gray-300 via-white to-gray-300">
  <div className="container mx-auto">
    <h1 className="text-center sm:text-4xl text-4xl font-bold title-font mb-8">Soluciones para Industria Alimenticia</h1>
    <SplitSection className=""
        primarySlot={
          <div className="bg-white bg-opacity-50 rounded-xl p-10">
            <h2 className="text-xl text-primary-lighter mb-5">Las mejores soluciones pensadas para el bienestar de sus colaboradores y clientes. </h2>
            <p className="md:w-full text-left leading-relaxed text-base text-gray-700 text-justify ">
            Sabemos que necesita un proceso de inocuidad alimentaria eficiente en su empresa y para sus clientes, por eso somos su mejor aliado, contamos con los productos y asesorías adecuadas que le garantizan la  implementación de  procedimientos de limpieza prácticos y sencillos que le apoyan en su operación. En Unilimpio encuentra las mejores soluciones de higiene de acuerdo a los más altos estándares de calidad del mercado.<br/>
          
              
            </p>
          </div>
        }
        secondarySlot={
          <StaticImage src="../../images/soluciones-industria-alimenticia.jpg"
          className=""
          alt="soluciones de limpieza para el sector industrial alimenticia"
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
            Línea Ailmenticia
          </h3>
          <Link   to="/productos/quimicos/digrizz-ozz" className="text-primary-lighter inline-flex items-center">
              Detergente Concentrado Multiusos Digrizz Ozz
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/quimicos/lavavajilla-neutro" className="text-primary-lighter inline-flex items-center">
              Lavavajilla Neutro Ozz 
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/quimicos/limpiador-de-areas-frias" className="text-primary-lighter inline-flex items-center">
              Limpiador de Áreas FrÍas 
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/quimicos/limpiador-de-hornos-y-parrillas-en-caliente" className="text-primary-lighter inline-flex items-center">
             Limpiador de Hornos y Parrillas en Caliente 
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/quimicos/limpiador-desincrustante-acido-ozz" className="text-primary-lighter inline-flex items-center">
              Limpiador Desincrustante Ácido Ozz
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/quimicos/limpiador-removedor-caustico" className="text-primary-lighter inline-flex items-center">
              Limpiador Removedor Cáustico  
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/quimicos/sanitizante-de-superficies-bacterac-ozz" className="text-primary-lighter inline-flex items-center">
              Sanitizante de Superficies Duras Bacterac de Grado Alimenticio  
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/> 
          <Link  to="/productos/quimicos/sanitizante-peracetico" className="text-primary-lighter inline-flex items-center">
              Sanitizante peracético al 15%
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/quimicos/sanitizante-y-desinfectante-organic-100" className="text-primary-lighter inline-flex items-center">
              Sanitizante y Desinfectante Organic 100 
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
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
          <Link  to="/productos/absorbentes/limpion-industrial" className="text-primary-lighter inline-flex items-center">
            Limpión Industrial 
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
          <Link   to="/productos/absorbentes/servilleta-bio" className="text-primary-lighter inline-flex items-center">
             Servilleta Bio  
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/absorbentes/servilleta-dispensada" className="text-primary-lighter inline-flex items-center">
             Servilleta en Z Dispensada  
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
        </div> 

        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-3 text-center">
            Lavandería
          </h3>
          <Link   to="/productos/lavanderia/detergente-liquido-enzimatico" className="text-primary-lighter inline-flex items-center">
              Detergente Líquido Enzimático
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/lavanderia/detergente-en-polvo" className="text-primary-lighter inline-flex items-center">
              Detergente en Polvo Unilimpio
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
          <Link   to="/productos/dispensadores/toalla-z-unilimpio" className="text-primary-lighter inline-flex items-center">Toalla en Z Unilimpio
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


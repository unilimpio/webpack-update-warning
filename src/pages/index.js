import React from 'react';
import { Link } from 'gatsby';


import Layout from '../components/layout/Layout';
import FeatureCard from '../components/FeatureCard';



import featuresData from '../data/features-data';

import PictureWebp from "../components/PictureWebp";
import Button from '../components/Button';

import SplitSection from '../components/SplitSection';
import LeadForm from "../components/LeadForm";
import NewsletterSub from "../components/NewsletterSub";
import Testimonials from "../components/Testimonials";

import LogoDump from "../components/ClientesLogos";





const IndexPage = ({ location }) => (

<Layout location={location} crumbLabel="Inicio" >

<section id="hero-banner" className="bg-hero-banner-5 bg-fill bg-right-bottom bg-no-repeat m-0 p-0">
      <div className="container mt-0 mx-auto ">
        <div className="bg-gradient-to-r from-white">
          <div className="">

            <div className="bg-white bg-opacity-50 text-center pt-12 p-8 md:text-left md:w-2/5 md:pr-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-center">
              Mucho más en higiene Institucional
              </h1>
              <p className="text-lg lg:text-xl mt-6 font-normal text-justify text-gray-500">
                Somos su aliado en higiene institucional, con nosotros podrá mejorar la satisfacción de sus usuarios, clientes y colaboradores a través de soluciones adecuadas de higiene.
              </p>
              <div className="flex flex-wrap mx-auto justify-center mt-8 md:mt-12 mb-20">
              
              <Link to="/soluciones">
                <Button className=" bg-primary-default text-white hover:bg-primary-lighter rounded-lg active:bg-primary-darker focus:outline-none" size="lg">Soluciones para su negocio</Button>
              </Link>
              </div>
             
              <p className="mt-4 text-gray-600"></p>
            </div>
          </div>
        </div>
      </div>
</section>

<section id="features" className="py-10 md:py-20 bg-gradient-to-br from-gray-200 via-white to-gray-200 ">
      <div className="container mx-auto">
        <div className="w-full bg-fill bg-no-repeat bg-products">
          <h2 className="text-4xl font-semibold text-center text-primary-normal">Nuestra propuesta de valor</h2>
          <p className="md:w-2/3 mx-auto text-2xl font-light text-center my-4 pr-10 pl-10 mb-10 text-gray-700">
            Mucho más que un proveedor de productos de limpieza, nos motiva ser aliados estratégicos de nuestros clientes.<br/>
            Al elegirnos, usted recibe los siguientes beneficios:
          </p>
        </div>

        <div className="flex flex-wrap justify-center">

            {featuresData.map((feature,index) =>
            <div key={index} className="w-full p-4 lg:w-1/3">
              <FeatureCard feature={feature} />
            </div>
            )}


        </div>
      </div>
</section>

<section id="productos" className="pt-20 mb-20  ">
  <div className="container mx-auto bg-white bg-opacity-50">
    <h2 className="text-center sm:text-3xl text-2xl font-medium title-font mt-3 mb-10 pr-8 pl-8">Un portafolio completo y especializado de productos de limpieza</h2>
    <SplitSection
        primarySlot={
          <div className="">
          <p className="md:w-full text-left leading-relaxed text-lg text-gray-700 text-justify pr-10 pl-10">
          Fabricamos y comercializamos productos líderes del mercado, reconocidos por su calidad, innovación, y excelente costo en uso.
          Adaptamos nuestra oferta de productos a las necesidades específicas de cada cliente, a través de un asesoramiento profesional, seguimiento y entrenamiento permanentes.
          </p>
          <Link to="/productos">
        <Button className="flex mx-auto mt-16 text-white bg-primary-lighter border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Descubra nuestros productos  </Button>
      </Link>
  </div>
  

        }
        secondarySlot={
          <PictureWebp className="float-right" path="" filename="productos" description="Productos de limpieza"/>
        }/>

  </div>
</section>


<SplitSection id="rse"
      reverseOrder className="bg-gradient-to-br from-primary-default via-white to-primary-default  py-4 my-20"
      primarySlot={
        <div className="pl-8 pr-6 pt-8 pb-6 bg-white bg-opacity-50 rounded-lg ">
          <h2 className="mt-2  text-3xl  sm:text-4xl  text-center text-2xl font-semibold leading-tight ">
           Marca Blanca 
          </h2>
          <p className="mt-3 text-lg text-gray-700 text-center">
          Fabricamos productos de la más alta calidad con su marca. 
          </p>
          <div className="flex flex-wrap mx-auto justify-center">  
           <Link to="/contactenos" className="mt-4 text-primary-lighter inline-flex items-center text-lg">Más información
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
      </div>
        </div>
      }
      secondarySlot={<PictureWebp className="" filename="marca-blanca" description="realizamos linea blanca"/>}
/>



<SplitSection id="services"
       className="bg-gradient-to-br from-blue-200 via-white to-blue-200 mb-0 py-4 my-20 "
      primarySlot={
        <div className="bg-white bg-opacity-50 rounded-lg   px-6 pt-8 pb-6 ml-25">
          <h3 className="text-3xl font-semibold leading-tight mb-10 text-center">Servicios de limpieza y desinfección Especializados</h3>
          <p className="mt-8 text-xl font-light leading-relaxed text-justify">
            Brindamos servicios especializados para ayudarle a resolver hasta sus necesidades más complejas en higiene institucional, todo esto con un solo proveedor.
          </p>
          <div className="flex flex-wrap mx-auto justify-center">
          <Link to="/servicios" className="mt-4 text-primary-lighter inline-flex items-center text-lg">Conocer más
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
        </div>
      }
      secondarySlot={<PictureWebp className="" filename="servicio-cazabacterias" description="Técnicos cazabacterias realizando una desinfección profunda de lugares con aglomeración de personas y poca ventilación natural y exposición a la luz solar, como medida de prevención de la transmisión indirecta del COVID-19."/>}
/>

<SplitSection id="rse"
      reverseOrder className="bg-gradient-to-r from-green-200 via-white to-green-100 py-4 my-20 mt-4"
      primarySlot={
        <div className="pl-8 pr-6 pt-8 pb-6 bg-white bg-opacity-50 rounded-lg">
          <h3 className="text-3xl font-semibold leading-tight text-center">
            Somos una empresa socialmente responsable
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed text-justify">
          Somos una empresa responsable, transparente y solidaria. Nuestra empresa ha sido reconocida a nivel local por su gestión en responsabilidad social empresarial. Formamos parte del UN Global Compact y nos adherimos al Global Reporting Initiative.
          </p>
          <div className="flex flex-wrap mx-auto justify-center">
          <Link to="/responsabilidad-social" className="mt-4 text-primary-lighter inline-flex items-center text-lg">Conocer más
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
        </div>
      }
      secondarySlot={<PictureWebp className="" filename="responsabilidad-social-banner" description="Unilimpio es una empresa con responsabilidad social empresarial"/>}
/>

<LogoDump className="mt-20 "/>

<Testimonials className="mt-20 mb-20 "/>


<LeadForm/>
<NewsletterSub/>



  </Layout>

)

  export default IndexPage

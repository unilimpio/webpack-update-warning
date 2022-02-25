import React from 'react';
import { Link } from 'gatsby';


import { StaticImage } from "gatsby-plugin-image"


import Layout from '../../components/layout/Layoutexport';

import Features from "../../components/Features";
import Button from '../../components/Button';

import SplitSection from '../../components/SplitSection';
import LeadForm from "../../components/LeadForm";
import NewsletterSub from "../../components/NewsletterSub";
import Testimonials from "../../components/Testimonials";

import LogoDump from "../../components/ClientesLogos";
import HeroBanner from "../../components/HeroBanner"

const seo={
  title: "Exportamos productos para la higiene de manos e higiene industrial para el ambito profesional FOR EXPORT",
  desc:  "Fabricamos y comercializamos productos para la region y el mundo",
  image: "productos.jpg",
  pathname: "/export/for-export",
}


const Forexport = ({  location }) => {




  return(

<Layout location={location} crumbLabel="Export Home" >



<HeroBanner />

<Features />

<section id="productos" className="pt-20 mb-20 ">
  <div className="container mx-auto bg-white bg-opacity-50">
    <h2 className="text-4xl font-semibold text-center text-primary-normal">Productos de Limpieza</h2>
    <h3 className="md:w-2/3 mx-auto text-2xl font-semilight text-center my-4 pr-10 pl-10 mb-10 text-primary-default">Un portafolio completo y especializado de productos de limpieza</h3>
    <SplitSection
        primarySlot={
          <div className=" my-4  px-6 py-6 mx-6">
          <p className="md:w-full text-left leading-relaxed text-lg text-gray-700 text-center ">
          Fabricamos y comercializamos productos de limpieza líderes del mercado, reconocidos por su calidad, innovación, y excelente costo en uso.
          Adaptamos nuestra oferta de productos a las necesidades específicas de cada cliente, a través de un asesoramiento profesional, seguimiento y entrenamiento permanentes.
          </p>
          <Link to="/export/products">
        <Button className="flex mx-auto mt-16 text-white  border-0 py-2 px-8 bg-primary-default shadow-md hover:bg-primary-lighter rounded text-lg">Descubra nuestros productos  </Button>
      </Link>
  </div>


        }
        secondarySlot={
          <StaticImage src="../../images/productos.jpg"
                      className=""
                      alt="Productos de limpieza"
                      placeholder="blurred"
                      layout="constrained"
                       />
        }/>

  </div>
</section>


<SplitSection id="rse"
      reverseOrder className="bg-gradient-to-br from-primary-default via-white to-primary-default  py-4 my-20"
      primarySlot={
        <div className=" bg-white bg-opacity-50 rounded-lg my-10  px-6 py-6 mx-6">
          <h2 className="mt-2  text-3xl  sm:text-4xl  text-center text-2xl font-semibold leading-tight text-primary-default ">
           Marca Blanca
          </h2>
          <p className="mt-3 text-lg text-gray-900 text-center py-8">
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
      secondarySlot={<StaticImage src="../../images/marca-blanca.jpg"
                  className="flex justify-center"
                  alt="Marca BLanca: Somos su aliado ideal para la realización de su producto con su marca."
                  placeholder="blurred"
                  layout="constrained"
                   />}
/>





<SplitSection id="rse"
      reverseOrder className="bg-gradient-to-r from-green-200 via-white to-green-100 py-4 my-20 mt-4"
      primarySlot={
        <div className="bg-white bg-opacity-50 rounded-lg my-4  px-6 py-6 mx-6">
          <h3 className="text-3xl font-semibold leading-tight text-center">
            Somos una empresa socialmente responsable
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed text-center">
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
      secondarySlot={
        <StaticImage src="../../images/responsabilidad-social-banner.jpg"
                    className="flex justify-center my-4"
                    alt="Unilimpio es una empresa con responsabilidad social empresarial."
                    placeholder="blurred"
                    layout="constrained"
        />

}
/>

<LogoDump className="mt-20 "/>

<LeadForm/>
<NewsletterSub/>

  </Layout>

)

}




export default Forexport

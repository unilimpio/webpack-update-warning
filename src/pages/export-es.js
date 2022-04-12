import React from 'react';
import { Link } from 'gatsby';


import { StaticImage } from "gatsby-plugin-image"


import Layout from '../components/layout/Layoutexport';

import Features from "../components/Featuresexport";
import Button from '../components/Button';

import SplitSection from '../components/SplitSection';
import NewsletterSub from "../components/NewsletterSub";


import HeroBanner from "../components/HeroExport"

const seo={
  title: "Exportamos productos para la higiene de manos e higiene industrial para el ambito profesional FOR EXPORT",
  desc:  "Fabricamos y comercializamos productos para la region y el mundo",
  image: "productos.jpg",
  pathname: "/export-es/",
}

const siteVerOpts = [

  {
    label: 'Internacional',
    value: null,

  },


  {
    label: 'Ecuador',
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
    value: '/export-en/',

  },


];


const Export = ({  location }) => {




  return(

<Layout location={location} crumbLabel="Home Exportación"
        siteVerOpts={siteVerOpts} langOpts={langOpts} alternates>



<HeroBanner />

<Features />


<section id="sellos de calidad" className="bg-primary-default mt-20">
  <div className="container mx-auto sm:flex ">
    <div className=" w-full sm:flex-1 ">
      <h2 className=" pl-5 mx-auto text-2xl font-semibold text-center text-white sm:text-center mb-0 p-px pt-10 pb-10 ">
      Cumplimos con certificaciones nacionales e internacionales que avalan la calidad de nuestros productos:
      </h2>
   </div>
    <div className="w-full sm:flex-1 ">
     <div className="grid grid-cols-4 gap-4 pt-10 pb-10 pl-10 pr-10">
       <div class="flex flex-grow flex-shrink justify-center">
          <StaticImage src="../images/logo-issa.jpg"
                    className="flex justify-center my-4"
                    alt="Unilimpio es una empresa con responsabilidad social empresarial."
                    placeholder="blurred"
                    layout="constrained"/>
      </div>
        <div class="flex flex-grow flex-shrink justify-center">
          <StaticImage src="../images/logo-iso.jpg"
                    className="flex justify-center my-4"
                    alt="Unilimpio es una empresa con responsabilidad social empresarial."
                    placeholder="blurred"
                    layout="constrained"/>
        </div>
        <div class="flex flex-grow flex-shrink justify-center">
          <StaticImage src="../images/sello-bpm.jpg"
                    className="flex justify-center my-4"
                    alt="Unilimpio es una empresa con responsabilidad social empresarial."
                    placeholder="blurred"
                    layout="constrained"/>
        </div>
        <div class="flex flex-grow flex-shrink justify-center">
          <StaticImage src="../images/sello-mucho-mejor-ecuador.jpg"
                    className="flex justify-center my-4"
                    alt="Unilimpio es una empresa con responsabilidad social empresarial."
                    placeholder="blurred"
                    layout="constrained"/>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="productos" className="pt-20 mb-20 ">
  <div className="container mx-auto bg-white bg-opacity-50">
    <h2 className="text-4xl font-semibold text-center text-primary-normal">Productos de Higiene Profesional</h2>
    <h3 className="md:w-2/3 mx-auto text-3xl font-semilight text-center my-4 pr-10 pl-10 mb-10 text-primary-default">De calidad Internacional</h3>
    <SplitSection
        primarySlot={
          <div className=" my-4  px-6 py-6 mx-6">
          <p className="md:w-full text-left leading-relaxed text-lg text-gray-700 text-center ">
          Fabricamos y exportamos a toda la región centro y sudamericana productos higiénicos de la más alta calidad para los mercados y las industrias más exigentes. Nuestra innovación constante nos ha permitido entrar en mercados de la región.
          </p>
          <Link to="/export/productos">
        <Button className="flex mx-auto mt-16 text-white  border-0 py-2 px-8 bg-primary-default shadow-md hover:bg-primary-lighter rounded text-lg">Descubra nuestros productos  </Button>
      </Link>
  </div>


        }
        secondarySlot={
          <StaticImage src="../images/productos-de-exportacion-unilimpio.jpg"
                      className=""
                      alt="Productos de alta calidad para exportación"
                      placeholder="blurred"
                      layout="constrained"
                       />
        }/>

  </div>
</section>




<SplitSection id="rse"
      reverseOrder className="bg-gradient-to-r from-secondary-lighter via-white to-secondary-lighter  py-4 my-20 mt-4"
      primarySlot={
        <div className="bg-white bg-opacity-50 rounded-lg my-4  px-6 py-6 mx-6">
          <h3 className="text-3xl font-semibold leading-tight text-center">
            Somos una empresa socialmente responsable
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed text-center">
          Somos una empresa responsable, transparente y solidaria. Nuestra empresa ha sido reconocida a nivel local por su gestión en responsabilidad social empresarial. Formamos parte del UN Global Compact y nos adherimos al Global Reporting Initiative.
          </p>
          <div className="flex flex-wrap mx-auto justify-center">
          <Link to="/export/responsabilidad-social" className="mt-4 text-primary-default inline-flex items-center text-lg">Conocer más
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
        </div>
      }
      secondarySlot={
        <StaticImage src="../images/responsabilidad-social-banner.jpg"
                    className="flex justify-center my-4"
                    alt="Unilimpio es una empresa con responsabilidad social empresarial."
                    placeholder="blurred"
                    layout="constrained"
        />

}
/>


<section id="nuestros clientes" className="bg-primary-default py-12">
<div class="bg-primary-default">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <p class="text-center  text-5xl font-semibold text-white">
    Nuestros principales aliados en Ecuador
    </p><br/>
    <div class="mt-6 grid grid-cols-2 gap-6 md:grid-cols-6 lg:mt-8">
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-kfc.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada KFC"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-br.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Baskin Robbins"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-cf.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Corporación Favorita"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-kywi.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Kywi"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-jv.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Juan Valdez"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-hanaska.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Hanaska"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-cn.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Cervecería Nacional"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-ts.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Tesalia Spring Company"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-pn.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Pronaca"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-cb.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Cinnabon"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-mc.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa Mi Comisariato"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <StaticImage src="../images/logo-bc.jpg"
                    className="flex justify-center my-4"
                    alt="Logo de nuestra empresa aliada Big Cola"
                    placeholder="blurred"
                    layout="constrained" />
      </div>
    </div>
  </div>
</div>
</section>






<section id="contactenos" className="relative bg-white mt-20">
<div class="relative bg-white">
  <div class="absolute inset-0">
    <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-200"></div>
  </div>
  <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
    <div class="bg-gray-200 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
      <div class="max-w-lg mx-auto">
        <h2 class="text-4xl font-bold  text-primary-default sm:text-2xl">
        ¡SOLICITE UNA COTIZACIÓN AHORA!
        </h2>
        <dl class="mt-8 text-xl text-primary-default">
          <div>
            <dd>
              <p>Nuestros asesores están gustosos de ponerse en contacto con usted para brindarle mayor información y agendar una cita.</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div class="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
      <div class="max-w-lg mx-auto lg:max-w-none">
        <form name="lead" action="/gracias" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="grid grid-cols-1 gap-y-6">
          <div>
            <label for="full-name" class="sr-only">Nombre</label>
            <input type="text" name="nombre" id="nombre" autocomplete="name" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Nombre"/>
          </div>
          <div>
            <label for="phone" class="sr-only">Teléfono</label>
            <input type="text" name="phone" id="país" autocomplete="tel" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="País"/>
          </div>
          <div>
            <label for="email" class="sr-only">Email</label>
            <input id="email" name="email" type="email" autocomplete="email" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Correo"/>
          </div>
          <div>
            <label for="phone" class="sr-only">Teléfono</label>
            <input type="text" name="phone" id="phone" autocomplete="tel" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Teléfono"/>
          </div>

          <div>
            <label for="mensaje" class="sr-only">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="4" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" placeholder="Mensaje"></textarea>
          </div>
          <div>
            <button type="submit" class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary-default hover:bg-primary-lighter focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</section>

<NewsletterSub/>

  </Layout>

)

}




export default Export

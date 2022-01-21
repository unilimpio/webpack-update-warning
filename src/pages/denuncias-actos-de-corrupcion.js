import React from 'react';
import Layout from '../components/layout/Layout';
import { StaticImage } from "gatsby-plugin-image"

import NewsletterSub from '../components/NewsletterSub';

import WhatsappIcon from '../svg/WhatsappIcon';


const seo={
  title: "Unilimpio ha declarado y formalizado su compromiso de luchar contra la corrupción en cada uno de los encadenamientos productivos a los que pertenecemos.",
  image: "",
  pathname: "/denuncias-actos-de-corrupcion", 
}

export default function Named  ({location}) {

  return(
    <Layout location={location} crumbLabel="Denuncia actos de corrupción"
      title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>


<div class="bg-fixed" >

<StaticImage src="../images/denuncia-actos-de-corrupcion.jpg"
            className="object-contain"
            alt="Unilimpio ha declarado y formalizado su compromiso de luchar contra la corrupción en cada uno de los encadenamientos productivos a los que pertenecemos."
            placeholder="blurred"
            layout="fullWidth"
             />


</div>

      
          <section class="bg-white flex justify-center ">
           <div class="max-w-7xl mx-10 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div class="max-w-3xl mx-auto text-center">
             <h1 class="text-5xl font-semibold text-primary-default ">Denuncia Actos de Corrupción </h1><br/>
              <p className=" italic font-mormal text-center text-primary-default text-xl ">"En Unilimpio contribuimos con la sociedad y el desarrollo económico haciendo negocios de forma ética y transparente, sin ceder ante solicitud de coimas para ganar licitaciones o contratos". </p>
             </div>
           </div>
          </section>
      
      
      <section id="complaintform" className="container mx-auto bg-white ">
      <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-2">
        <div class="relative max-w-xl mx-auto">
          
          <div class="text-center">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">  
            </h2>
            <p class="mt-4 text-xl leading-6 text-primary-lighter ">
              Ayúdanos denunciando cualquier tipo de corrupción o actos en contra de nuestros principios, de los cuales hayas sido testigo.
            </p><br/><br/>
          </div>
          <form name="complaint" action="/gracias-denuncias" method="POST" data-netlify="true" className="mt-9 grid grid-cols-1 gap-y-6 sm:gap-x-8">
                  <input type="hidden" name="form-name" value="complaint" />
                  <div>
                    <label for="first_name" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <div className="mt-1">
                      <input type="text" name="first_name" id="first_name" autocomplete="given-name" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
                    </div>
                  </div>
                  <div>
                    <label for="last_name" className="block text-sm font-medium text-gray-700">Apellido</label>
                    <div className="mt-1">
                      <input type="text" name="last_name" id="last_name" autocomplete="family-name" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1">
                      <input id="email" name="email" type="email" autocomplete="email" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
                    </div>
                  </div>
      
                  <div>
                    
                      <label for="mobile" className="block text-sm font-medium text-gray-700">Teléfono móvil</label>
                      
                    <div className="mt-1">
                      <input type="text" name="mobile" id="mobile" autocomplete="cel" aria-describedby="phone_description" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label for="how_can_we_help" className="block text-sm font-medium text-gray-700">Escribe tu denuncia aquí</label>
                      <span id="how_can_we_help_description" className="text-sm text-gray-500">Max. 500 caractéres</span>
                    </div>
                    <div className="mt-1">
                      <textarea id="how_can_we_help" name="how_can_we_help" aria-describedby="how_can_we_help_description" rows="4" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
                    </div>
                  </div>
                 
                  <div className="text-right sm:col-span-2">
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-lighter hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                      Enviar
                    </button>
                  </div>
                
                </form>
              </div>
            </div>
      </section>

<NewsletterSub/>


</Layout>

)}

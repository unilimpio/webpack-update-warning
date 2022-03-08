import React from 'react';
import Layout from '../../components/layout/Layoutexport';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import NewsletterSub from "../../components/NewsletterSub";
import Button from "../../components/Button";
import Ubicaciones from '../../data/contact/ubicaciones';


const seo={
  title: "Contact Us",
  desc:  "Contactenos hoy.",
  image: "productos.jpg",
  pathname: "/export/contacto",
}

const siteVerOpts = [

  {
    label: 'Internacional',
    value: null,

  },


  {
    label: 'Ecuador',
    value: '/contactenos',

  },


];

const langOpts = [

  {
    label: 'ES',
    value: null,

  },


  {
    label: 'EN',
    value: '/export/en/contact',

  },


];

const Contact = ({location}) => (




  <Layout location={location} crumbLabel="Contáctenos"
          siteVerOpts={siteVerOpts} langOpts={langOpts}
            title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>



<section className="bg-white flex justify-center">
  <div className="max-w-7xl mx-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-semibold text-primary-default ">¡Solicite una cotización AHORA!</h1>
    </div> 
    </div> 
</section>

<section id="contactenos" className="relative bg-white mt-2">
<div class="relative bg-white">
  <div class="absolute inset-0">
    <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-200"></div>
  </div>
  <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
    <div class="bg-gray-200 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
      <div class="max-w-lg mx-auto">
      
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



<section className="bg-gray-100">
  <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div className="divide-y-2 divide-gray-200">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <h2 className="text-2xl font-extrabold text-primary-default sm:text-3xl">
          Nuestras ubicaciones
        </h2>
        <h3> Contamos con 3 oficinas comerciales y centros de operación a nivel nacional para brindarle máxima disponibilidad y agilidad .</h3>
        <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">

          {Ubicaciones.map(ubicacion => (
            <div key={ubicacion.id} className="">
              <h3 className="text-lg leading-6 font-medium text-primary-lighter">
                { ubicacion.name}
              </h3>
              <dl className="mt-2 text-base text-gray-700">
                <div>
                  <dt className="sr-only">
                    Dirección
                  </dt>
                  <dd>
                    { ubicacion.direccion }<br/>
                    { ubicacion.sector }<br/>
                    { ubicacion.codigoPostal }<br/>
                    { ubicacion.ciudad }
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">
                    Email
                  </dt>
                  <dd>
                    <a href={`mailto:${ ubicacion.email }`}>email</a>
                  </dd>
                </div>
                <div className="mt-1">
                  <dt className="sr-only">
                    Teléfono(s)
                  </dt>
                  <dd>
                    { ubicacion.telefonos }
                  </dd>
                </div>
              </dl>
            </div>
          ))}

        </div>
      </div>
      
    </div>
  </div>
</section>


<NewsletterSub/>



    </Layout>

  );

  export default Contact;

import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'gatsby';



import PictureWebp from '../components/PictureWebp';
import NewsletterSub from "../components/NewsletterSub";
import Button from "../components/Button";

import Ubicaciones from '../data/contact/ubicaciones';
import DzsQuito from '../data/contact/dzs-quito'
import DzsGuayaquil from '../data/contact/dzs-guayaquil'
import DzsCuenca from '../data/contact/dzs-cuenca'
import DzsElOro from '../data/contact/dzs-el-oro'
import DzsSantoDomingo from '../data/contact/dzs-santo-domingo'
import DzsSantaElena from '../data/contact/dzs-santa-elena'

const seo={
  title: "Contáctenos",
  desc:  "Canales de contacto. Estamos listos para atendelro directamente o a través nuestra extensa red de Distribuidores de productos de limpieza en QUito, Guayaquil y Cuenca y a nivel nacional.",
  image: "productos.jpg",
  pathname: "/contact",
}

export default function Named ({location}) {


  return(

  <Layout location={location} crumbLabel="Contáctenos"
  title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>


<section id="leadform" className="container mx-auto bg-white">
  <div className="flex flex-col-reverse sm:flex-row bg-gradient-to-r from-neutral-lighter rounded-lg">
    <div className="w-full sm:w-1/2 pt-12 pb-16 px-4 ">
      <div className="pr-8">
        <div className="">
          <h1>Contáctenos</h1>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-6 text-primary text-center">
            Permítanos ser su aliado en higiene institucional
          </h2>
          <p className="my-4 text-lg text-gray-700">
            Estamos listos para atender sus inquietudes por llamada telefónica o realizar un diagnóstico sin costo.<br/>
            Por favor complete el formulario adjunto para que un asesor se contacte con usted enseguida.
          </p>
          <form name="lead" action="/gracias" method="POST" data-netlify="true" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <input type="hidden" name="form-name" value="lead" />
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Nombre</label>
              <div className="mt-1">
                <input type="text" name="first_name" id="first_name" autocomplete="given-name" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
              </div>
            </div>
            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Apellido</label>
              <div className="mt-1">
                <input type="text" name="last_name" id="last_name" autocomplete="family-name" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">Empresa</label>
              <div className="mt-1">
                <input type="text" name="company" id="company" autocomplete="organization" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1">
                <input id="email" name="email" type="email" autocomplete="email" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
              </div>
            </div>

            <div>

                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Teléfono móvil</label>

              <div className="mt-1">
                <input type="text" name="mobile" id="mobile" autocomplete="cel" aria-describedby="phone_description" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono convencional</label>
                <span id="phone_description" className="text-right text-sm text-gray-500">Opcional</span>
              </div>

              <div className="mt-1">

                <input type="text" name="phone" id="phone" autocomplete="tel" aria-describedby="phone_description" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex justify-between">
                <label htmlFor="how_can_we_help" className="block text-sm font-medium text-gray-700">¿En qué podemos ayudarle?</label>
                <span id="how_can_we_help_description" className="text-sm text-gray-500">Max. 500 caractéres</span>
              </div>
              <div className="mt-1">
                <textarea id="how_can_we_help" name="how_can_we_help" aria-describedby="how_can_we_help_description" rows="4" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
            <p className="my-auto mr-4 text-sm text-gray-700 text-justify">
             *Este formulario no es para enviar hojas de vida. Si deseas conocer nuestras oportunidades laborables visíta nuestra sección <Link to="/trabaja-con-nosotros">Trabaja con nosotros</Link>. Si envías tu hoja de vida por este medio NO será tomada en cuenta.
          </p>
          </div>
            <div className="text-right sm:col-span-2">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-lighter hover:bg-primary-lighter focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Enviar
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>

    <div className="flex-col-reverse sm:flex-row inset-0 w-full md:w-1/2">
      <div className="inset-y-0 right-0">
        <PictureWebp path="../../" className="" filename="call-center" description="servicio al cliente unilimpio, nuestros operadores están listos para atenderlo."/>
      </div>
    </div>
  </div>
</section>


<section className="bg-white">
  <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="sm:col-span-2 text-center">
      <h2 className="text-2xl font-bold mb-8 text-primary sm:text-3xl">
        ¿Es cliente de Unilimpio?
      </h2>
    </div>
    <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
      <div>

        <div className="mt-3">
          <h3 className="text-lg font-bold text-primary-lighter sm:text-2xl text-center">Para realizar sus pedidos </h3>
          <p className="mt-3 text-lg text-gray-700">
           ingrese a nuestra plataforma B2B de forma rápida y sencilla.
          </p>
        </div>
        <div className="mt-9">
          <div className="flex">
            <a href="https://unilimpio.app/ecommerce" target="_blank" rel="noreferrer"><Button className="flex mx-auto mt-10 mb-4  text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Acceder al Portal B2B</Button></a>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 md:mt-3">
        <h3 className="text-lg font-bold text-primary-lighter sm:text-2xl text-center">
          ¿Necesita ayuda?
        </h3>
        <div className="mt-3">
          <p className="text-lg text-gray-700 mb-10">
          Si necesita asistencia por favor visite nuestro <Link to="/centro-de-ayuda">Centro de Ayuda</Link>.
          </p>
        </div>
        <div className="mt-9">
          <div className="flex">
            <div className="flex-shrink-0 mt-6">

              <svg className="h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="ml-3 text-base text-gray-700">
              <h3>En Ecuador</h3>
              <p>
              1800 UNILIM (864 546)
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
            <svg className="h-6 w-6 text-blue-500" version="1.1"  xmlns="http://www.w3.org/2000/svg"
	              viewBox="0 0 54 54" stroke="none" fill="currentColor">
                <g>
	                <path  strokeLinecap="round" strokeLinejoin="round" d="M18.9,6.3c2.6-1.1,5.3-1.7,8.2-1.7c2.8,0,5.6,0.6,8.2,1.7c2.6,1.1,4.8,2.6,6.7,4.5c1.9,1.9,3.4,4.1,4.5,6.7
                        c1.1,2.6,1.7,5.3,1.7,8.2c0,2.8-0.6,5.6-1.7,8.2s-2.6,4.8-4.5,6.7c-1.9,1.9-4.1,3.4-6.7,4.5s-5.3,1.7-8.2,1.7
                        c-3.6,0-7-0.9-10.2-2.6L5.2,47.9L9,36.6c-2-3.3-3-6.9-3-10.9c0-2.8,0.6-5.6,1.7-8.2c1.1-2.6,2.6-4.8,4.5-6.7
                        C14,8.9,16.3,7.5,18.9,6.3z M27,43.2c2.4,0,4.6-0.5,6.8-1.4c2.2-0.9,4-2.2,5.6-3.7s2.8-3.4,3.7-5.6s1.4-4.4,1.4-6.8
                        s-0.5-4.6-1.4-6.8c-0.9-2.2-2.2-4-3.7-5.6s-3.4-2.8-5.6-3.7c-2.2-0.9-4.4-1.4-6.8-1.4c-2.4,0-4.6,0.5-6.8,1.4
                        c-2.2,0.9-4,2.2-5.6,3.7s-2.8,3.4-3.7,5.6c-0.9,2.2-1.4,4.4-1.4,6.8c0,3.8,1.1,7.2,3.3,10.3l-2.2,6.5l6.8-2.1
                        C20.3,42.3,23.6,43.2,27,43.2z M31.2,29.8c0.7-0.9,1.2-1.4,1.5-1.4c0.2,0,1.1,0.4,2.7,1.2c1.6,0.8,2.4,1.3,2.5,1.5
                        c0,0.1,0.1,0.2,0.1,0.4c0,0.6-0.2,1.3-0.5,2.1c-0.3,0.7-1,1.3-2,1.8c-1,0.5-2,0.7-2.8,0.7c-1.1,0-2.8-0.6-5.3-1.7
                        c-1.8-0.8-3.4-1.9-4.7-3.3c-1.3-1.4-2.7-3.1-4.1-5.2c-1.3-2-2-3.8-2-5.4v-0.2c0.1-1.7,0.7-3.2,2.1-4.4c0.4-0.4,0.9-0.6,1.5-0.6
                        c0.1,0,0.3,0,0.5,0c0.2,0,0.4,0,0.5,0c0.4,0,0.6,0.1,0.7,0.2c0.1,0.1,0.3,0.4,0.4,0.8c0.1,0.4,0.5,1.2,0.9,2.5
                        c0.5,1.3,0.7,2,0.7,2.1c0,0.4-0.3,0.9-1,1.6c-0.6,0.7-1,1.1-1,1.3c0,0.1,0,0.3,0.1,0.4c0.6,1.4,1.6,2.6,2.8,3.8
                        c1,1,2.4,1.9,4.2,2.8c0.2,0.1,0.4,0.2,0.6,0.2C30,31.1,30.5,30.7,31.2,29.8z"/>
                  </g>
            </svg>

            </div>
            <div className="ml-3 text-base text-gray-700 mt-1">

              <p>
              +593 99 734-5385
              </p>
              <p className="mt-1">
                Lun-Vie 9am a 5pm GMT-5
              </p>
            </div>
          </div>
          <div className="mt-6 flex">
            <div className="flex-shrink-0">

              <svg className="h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-3 text-base text-gray-700">
              <a href="mailto:info@unilimpio.com">info</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="bg-gray-100">
  <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div className="divide-y-2 divide-gray-200">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">
          Nuestras ubicaciones
        </h2>
        <h3> Contamos con 3 oficinas comerciales y centros de operación a nivel nacional para brindarle máxima disponibilidad y agilidad .</h3>
        <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">

          {Ubicaciones.map(ubicacion => (
            <div key={ubicacion.name} className="">
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
      <div id="distaut" className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
        <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">
          Distribuidores Zonales Autorizados
        </h2>
        <h3 className="text-gray-600">Ampliamos nuestra cobertura y flexibilidad gracias a nuestra extensa red de Distribuidores Autorizados de productos de limpieza en Quito, Guayaquil, Cuenca y a nivel nacional.</h3>

        <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
          <div className="sm:col-span-2">
            <h3 className="text-2xl leading-6 font-medium">
              Quito
            </h3>
          </div>
          {DzsQuito.map(dz => (

            <div key={dz.name}>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
              {dz.zona}
              </h3>
              <h4 className="mt-2 text-base text-primary-default">{dz.name}</h4>
              <div className="mt-2 text-base text-gray-700">
                <p>
                  {dz.contacto}
                </p>
                <p className="mt-1">
                  {dz.movil}
                </p>
                <p className="mt-1">
                  {dz.convencional}
                </p>
                <p className="mt-1">
                  <a href={`mailto:${dz.email}`}>email</a>
                </p>

              </div>
            </div>
          ))}
            <div className="sm:col-span-2">
            <h3 className="text-2xl leading-6 font-medium">
              Guayaquil
            </h3>
          </div>
          {DzsGuayaquil.map(dz => (

            <div key={dz.name}>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
              {dz.zona}
              </h3>
              <h4>{dz.name}</h4>
              <div className="mt-2 text-base text-gray-700">
                <p>
                  {dz.contacto}
                </p>
                <p className="mt-1">
                  {dz.movil}
                </p>
                <p className="mt-1">
                  {dz.convencional}
                </p>
                <p className="mt-1">
                  <a href={`mailto:${dz.email}`}>email</a>
                </p>

              </div>
            </div>
          ))}
           <div className="sm:col-span-2">
            <h3 className="text-2xl leading-6 font-medium">
              Cuenca
            </h3>
          </div>
          {DzsCuenca.map(dz => (

            <div key={dz.name}>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
              {dz.zona}
              </h3>
              <h4>{dz.name}</h4>
              <div className="mt-2 text-base text-gray-700">
                <p>
                  {dz.contacto}
                </p>
                <p className="mt-1">
                  {dz.movil}
                </p>
                <p className="mt-1">
                  {dz.convencional}
                </p>
                <p className="mt-1">
                  <a href={`mailto:${dz.email}`}>email</a>
                </p>

              </div>
            </div>
          ))}
           <div className="sm:col-span-2">
            <h3 className="text-2xl leading-6 font-medium">
              El Oro
            </h3>
          </div>
          {DzsElOro.map(dz => (

            <div key={dz.name}>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
              {dz.zona}
              </h3>
              <h4>{dz.name}</h4>
              <div className="mt-2 text-base text-gray-700">
                <p>
                  {dz.contacto}
                </p>
                <p className="mt-1">
                  {dz.movil}
                </p>
                <p className="mt-1">
                  {dz.convencional}
                </p>
                <p className="mt-1">
                  <a href={`mailto:${dz.email}`}>email</a>
                </p>

              </div>
            </div>
          ))}
          <div className="sm:col-span-2">
            <h3 className="text-2xl leading-6 font-medium">
              Santo Domingo / Quevedo
            </h3>
          </div>
          {DzsSantoDomingo.map(dz => (

            <div key={dz.name}>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
              {dz.zona}
              </h3>
              <h4>{dz.name}</h4>
              <div className="mt-2 text-base text-gray-700">
                <p>
                  {dz.contacto}
                </p>
                <p className="mt-1">
                  {dz.movil}
                </p>
                <p className="mt-1">
                  {dz.convencional}
                </p>
                <p className="mt-1">
                  <a href={`mailto:${dz.email}`}>email</a>
                </p>

              </div>
            </div>
          ))}
          <div className="sm:col-span-2">
            <h3 className="text-2xl leading-6 font-medium">
              Santa Elena
            </h3>
          </div>
          {DzsSantaElena.map(dz => (

            <div key={dz.name}>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
              {dz.zona}
              </h3>
              <h4>{dz.name}</h4>
              <div className="mt-2 text-base text-gray-700">
                <p>
                  {dz.contacto}
                </p>
                <p className="mt-1">
                  {dz.movil}
                </p>
                <p className="mt-1">
                  {dz.convencional}
                </p>
                <p className="mt-1">
                  <a href={`mailto:${dz.email}`}>email</a>
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

<NewsletterSub/>



    </Layout>

  )}

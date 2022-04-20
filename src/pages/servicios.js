import React from 'react';

import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout/Layout';

import LeadForm from "../components/LeadForm";
import NewsletterSub from "../components/NewsletterSub";

const siteVerOpts = [

  {
    label: 'Ecuador',
    value: '',


  },

  {
    label: 'Internacional',
    value: '/export-es/',


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
  title: "Servicios especializados",
  desc:  "Nuestros servicios especializados son un complemento ideal a nuestra oferta de productos de limpieza para clientes institucionales con mayores exigencias y buscando tener un solo aliado que resuelva todas sus necesidaes de higiene institucional.",
  image: "servicios.jpg",
  pathname: "/servicios/",
}

 const Servicios = ({location}) =>  (

  <Layout location={location} crumbLabel="Servicios"
  siteVerOpts={siteVerOpts} langOpts={langOpts}
  title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>




  <StaticImage src="../images/servicios.jpg"
              className="object-contain"
              alt="Servicios especializados de Unilimpio"
              placeholder="blurred"
              layout="fullWidth"
               />

<section className="bg-white flex justify-center">
  <div className="max-w-7xl mx-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-2xl md:text-5xl font-semibold sm:text-center text-primary-default">Servicios Especializados</h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700 mb-10 ">
        Nuestros servicios especializados son un complemento ideal a nuestra oferta de productos para clientes institucionales con mayores exigencias y buscando tener un solo aliado que resuelva todas sus necesidaes de higiene institucional.

      </p>
      </div>

    <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
      <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div className="p-6 mb-10">
          <h2 className="text-lg leading-6 font-medium text-primary-lighter text-center">Servicio de Limpieza y desinfección profunda de baños</h2>
          <p className="mt-4 text-base text-gray-700 ">
            Servicio profesional de Limpieza y desinfección de servicios higiénicos de alto tráfico.
          </p>


          <p className="mt-8">
            <span className="text-4xl font-extrabold text-gray-900"></span>
            <span className="text-base font-bold text-gray-500"></span>
          </p>

        </div>
        <div className="pt-6 pb-8 px-6">
          <h3 className="text-base font-medium text-secondary  font-semibold tracking-wide uppercase">Incluye:</h3>
          <ul className="mt-6 space-y-4">
            <li className="flex space-x-3">

              <svg className="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700">Limpieza profunda de superficies duras y no porozas usando detergentes e implementos de acción mecánica de uso profesional.</span>
            </li>

            <li className="flex space-x-3">

              <svg className="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700">Limpieza completa de baterias sanitarias.</span>
            </li>

            <li className="flex space-x-3">

              <svg className="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700 ">Remoción de incrustaciones utilizando acción química y mecánica con agua a alta presión.</span>
            </li>

            <li className="flex space-x-3">

              <svg className="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700 ">Desinfección del área utilizando amonio cuaternario de quinta generación.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div className="p-6">
          <h2 className="text-lg leading-6 font-medium text-primary-lighter text-center">Servicio de desinfección y descontaminación profesional</h2>
          <p className="mt-4 text-base text-gray-700">Desinfección y descontaminación de áreas contaminadas, como habitaciones de hospital, ascensores, pasillos, y en general áreas de alto tráfico con afluencia de pacientes/personas y/o poca ventilación.</p>
          <p className="mt-8">
            <span className="text-4xl font-extrabold text-gray-900"></span>
            <span className="text-base font-medium text-gray-500"></span>
          </p>

        </div>
        <div className="pt-6 pb-8 px-6">
          <h3 className="text-base font-medium text-secondary  font-semibold tracking-wide uppercase">Incluye:</h3>
          <ul className="mt-6 space-y-4">
            <li className="flex space-x-3">

              <svg className="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700">Eliminación de restos orgánicos/sólidos potencialmente contaminados.</span>
            </li>

            <li className="flex space-x-3">

              <svg className="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700 ">Reducción de carga viral/microbiana utilizando sistemas de aspersión/nebulización y desinfectante a base de amonio cuanternario de quinta generación.</span>
            </li>

            <li className="flex space-x-3">

              <svg className="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700 ">Desinfección de superficies duras no porozas horizontales y verticales utilizando aspersión/nebulización en combinación con acción mecánica manual.</span>
            </li>
            <li className="flex space-x-3">

              <svg className="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700 ">Disposición segura de residuos sólidos contaminados, equipos e implementos utilizados durante el servicio.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div className="p-6 mb-10">
          <h2 className="text-lg leading-6 font-medium text-primary-lighter text-center">Programa de Eliminación de Olores</h2>
          <p className="mt-4 text-base text-gray-700 ">Con este servicio usted podrá controlar y eliminar malos olores en sus servicios higiénicos.<br/>
          &nbsp;
          </p>

          <p className="mt-8">
            <span className="text-4xl font-extrabold text-gray-900"></span>
            <span className="text-base font-medium text-gray-500"></span>


          </p>

        </div>
        <div className="pt-6 pb-8 px-6">
          <h3 className="text-base font-medium text-secondary  font-semibold tracking-wide uppercase">Incluye:</h3>
          <ul className="mt-6 space-y-4">
            <li className="flex space-x-3">

              <svg className="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700 ">Dotación de dispensadores automáticos para desinfección de baterias sanitarias.</span>
            </li>

            <li className="flex space-x-3">

              <svg className="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700 ">Servicio técnico para instalación y programación de los dispensadores.</span>
            </li>

            <li className="flex space-x-3">

              <svg className="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700 ">Revisión periódica y mantenimiento sin costo de dispensadores cuando sea requerido.</span>
            </li>

            <li className="flex space-x-3">

              <svg className="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700 ">Reposición periódica de solución desinfectante y desodorizante.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div className="p-6">
          <h2 className="text-lg leading-6 font-medium text-primary-lighter text-center">Programa de Aromatización de Ambientes y Marketing Olfativo</h2>
          <p className="mt-4 text-base text-gray-700 ">Mejore considerablemente la imagen de su organización brindando áreas siempre fragantes. Posibilidad de personalizar fragancias para reforzar el posicionamiento de su marca.</p>
          <p className="mt-8">
            <span className="text-4xl font-extrabold text-gray-900"></span>
            <span className="text-base font-medium text-gray-500"></span>
          </p>

        </div>
        <div className="pt-6 pb-8 px-6">
          <h3 className="text-base font-medium text-secondary  font-semibold tracking-wide uppercase">Incluye:</h3>
          <ul className="mt-6 space-y-4">
            <li className="flex space-x-3">

              <svg className="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700 ">Dotación de dispensadores/difusores de fragancia.</span>
            </li>

            <li className="flex space-x-3">

              <svg className="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700 ">Servicio técnico para la instalación y configuración de los equipos.</span>
            </li>

            <li className="flex space-x-3">

              <svg className="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700 ">Asesoría para la selección y personalización de fragancias (cuando aplique).</span>
            </li>

            <li className="flex space-x-3">

              <svg className="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700 ">Revisión periódica de equipos y mantenimiento según sea necesario.</span>
            </li>

            <li className="flex space-x-3">

              <svg className="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700 ">Recarga de fragancia en equipos disensadores/difusores.</span>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<LeadForm/>
<NewsletterSub/>

  </Layout>
);

export default Servicios;

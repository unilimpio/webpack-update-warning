import React from 'react';


import Layout from '../components/layout/Layout';
import PictureWebp from "../components/PictureWebp";
import LeadForm from "../components/LeadForm";
import NewsletterSub from "../components/NewsletterSub";

const seo={
  title: "Servicios especializados",
  desc:  "Nuestros servicios especializados son un complemento ideal a nuestra oferta de productos de limpieza para clientes institucionales con mayores exigencias y buscando tener un solo aliado que resuelva todas sus necesidaes de higiene institucional.",
  image: "servicios.jpg",
  pathname: "/servicios",
}

 const Servicios = ({location}) =>  (


  <Layout location={location} crumbLabel="Servicios" title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>

    <PictureWebp className="object-contain" filename="servicios" description="servicios especializados de Unilimpio"/>







<section class="bg-white">
  <div class="max-w-7xl mx-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-2xl md:text-5xl font-semibold sm:text-center">Servicios Especializados</h1>
      <p class="mt-4 text-lg md:text-xl text-gray-700 mb-10 ">
        Nuestros servicios especializados son un complemento ideal a nuestra oferta de productos para clientes institucionales con mayores exigencias y buscando tener un solo aliado que resuelva todas sus necesidaes de higiene institucional.

      </p>
      </div>

    <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
      <div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div class="p-6 mb-10">
          <h2 class="text-lg leading-6 font-medium text-primary-lighter text-center">Servicio de Limpieza y desinfección profunda de baños</h2>
          <p class="mt-4 text-base text-gray-700 ">
            Servicio profesional de Limpieza y desinfección de servicios higiénicos de alto tráfico.
          </p>


          <p class="mt-8">
            <span class="text-4xl font-extrabold text-gray-900"></span>
            <span class="text-base font-bold text-gray-500"></span>
          </p>

        </div>
        <div class="pt-6 pb-8 px-6">
          <h3 class="text-base font-medium text-secondary  font-semibold tracking-wide uppercase">Incluye:</h3>
          <ul class="mt-6 space-y-4">
            <li class="flex space-x-3">

              <svg class="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700">Limpieza profunda de superficies duras y no porozas usando detergentes e implementos de acción mecánica de uso profesional.</span>
            </li>

            <li class="flex space-x-3">

              <svg class="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700">Limpieza completa de baterias sanitarias.</span>
            </li>

            <li class="flex space-x-3">

              <svg class="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700 ">Remoción de incrustaciones utilizando acción química y mecánica con agua a alta presión.</span>
            </li>

            <li class="flex space-x-3">

              <svg class="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700 ">Desinfección del área utilizando amonio cuaternario de quinta generación.</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div class="p-6">
          <h2 class="text-lg leading-6 font-medium text-primary-lighter text-center">Servicio de desinfección y descontaminación profesional</h2>
          <p class="mt-4 text-base text-gray-700">Desinfección y descontaminación de áreas contaminadas, como habitaciones de hospital, ascensores, pasillos, y en general áreas de alto tráfico con afluencia de pacientes/personas y/o poca ventilación.</p>
          <p class="mt-8">
            <span class="text-4xl font-extrabold text-gray-900"></span>
            <span class="text-base font-medium text-gray-500"></span>
          </p>

        </div>
        <div class="pt-6 pb-8 px-6">
          <h3 class="text-base font-medium text-secondary  font-semibold tracking-wide uppercase">Incluye:</h3>
          <ul class="mt-6 space-y-4">
            <li class="flex space-x-3">

              <svg class="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700">Eliminación de restos orgánicos/sólidos potencialmente contaminados.</span>
            </li>

            <li class="flex space-x-3">

              <svg class="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700 ">Reducción de carga viral/microbiana utilizando sistemas de aspersión/nebulización y desinfectante a bse de amonio cuanternario de quinta generación.</span>
            </li>

            <li class="flex space-x-3">

              <svg class="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700 ">Desinfección de superficies duras no porozas horizontales y verticales utilizando aspersión/nebulización en combinación con acción mecánica manual.</span>
            </li>
            <li class="flex space-x-3">

              <svg class="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700 ">Disposición segura de residuos sólidos contaminados, equipos e implementos utilizados durante el servicio.</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div class="p-6 mb-10">
          <h2 class="text-lg leading-6 font-medium text-primary-lighter text-center">Programa de Eliminación de Olores</h2>
          <p class="mt-4 text-base text-gray-700 ">Con este servicio usted podrá controlar y eliminar malos olores en sus servicios higiénicos.<br/>
          &nbsp;
          </p>

          <p class="mt-8">
            <span class="text-4xl font-extrabold text-gray-900"></span>
            <span class="text-base font-medium text-gray-500"></span>


          </p>

        </div>
        <div class="pt-6 pb-8 px-6">
          <h3 class="text-base font-medium text-secondary  font-semibold tracking-wide uppercase">Incluye:</h3>
          <ul class="mt-6 space-y-4">
            <li class="flex space-x-3">

              <svg class="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700 ">Dotación de dispensadores automáticos para desinfección de baterias sanitarias.</span>
            </li>

            <li class="flex space-x-3">

              <svg class="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700 ">Servicio técnico para instalación y programación de los dispensadores.</span>
            </li>

            <li class="flex space-x-3">

              <svg class="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700 ">Revisión periódica y mantenimiento sin costo de dispensadores cuando sea requerido.</span>
            </li>

            <li class="flex space-x-3">

              <svg class="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700 ">Reposición periódica de solución desinfectante y desodorizante.</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div class="p-6">
          <h2 class="text-lg leading-6 font-medium text-primary-lighter text-center">Programa de Aromatización de Ambientes y Marketing Olfativo</h2>
          <p class="mt-4 text-base text-gray-700 ">Mejore considerablemente la imagen de su organización brindando areas siempre fragantes. Posibilidad de personalizar fragancias para reforzar e posicionamiento de su marca.</p>
          <p class="mt-8">
            <span class="text-4xl font-extrabold text-gray-900"></span>
            <span class="text-base font-medium text-gray-500"></span>
          </p>

        </div>
        <div class="pt-6 pb-8 px-6">
          <h3 class="text-base font-medium text-secondary  font-semibold tracking-wide uppercase">Incluye:</h3>
          <ul class="mt-6 space-y-4">
            <li class="flex space-x-3">

              <svg class="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700 ">Dotación de dispensadores/difusores de fragancia.</span>
            </li>

            <li class="flex space-x-3">

              <svg class="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700 ">Servicio técnico para la instalación y configuración de los equipos.</span>
            </li>

            <li class="flex space-x-3">

              <svg class="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700 ">Asesoría para la selección y personalización de fragancias (cuando aplique).</span>
            </li>

            <li class="flex space-x-3">

              <svg class="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700 ">Revisión periódica de equipos y mantenimiento según sea necesario.</span>
            </li>

            <li class="flex space-x-3">

              <svg class="flex-shrink-0 h-5 w-5 text-secondary-default" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-700 ">Recarga de fragancia en equipos disensadores/difusores.</span>
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

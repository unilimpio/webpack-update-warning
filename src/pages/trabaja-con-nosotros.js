import React from 'react';


import Layout from '../components/layout/Layout';
import NewsletterSub from "../components/NewsletterSub";
import { StaticImage } from "gatsby-plugin-image"

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
  title: "Trabaja con nosotros",
  desc:  "En esta sección encuentra todos los puestos vacantes que la empresa Unilimpio necesita",
  image: "grupo-unilimpio.jpg",
  pathname: "/trabaja-con-nosotros",

}


const jobs = [
  {
    id: 1,
  titulo: "Auxiliar en Mantenimiento ",
  descripcion:
    "Realizar una revisión general, verificando que las máquinas y equipos se encuentren trabajando en óptimas condiciones. Realizar los mantenimientos preventivos en equipos y máquinas según Cronograma de Mantenimiento. Tener los repuestos, materiales e insumos necesarios, previamente antes de realizar la actividad de mantenimiento. Realizar el cronograma de mantenimiento Preventivo. Solicitar cotizaciones de trabajos, materiales, equipos o repuestos necesarios para la realización de su trabajo.",
    requisitos: " Bachiller técnico en mecánica, electricidad, mantenimiento industrial, electromecánico. Experiencia: Mínimo un año en cargos similares. Residir en la ciudad de Quito. Competencias: Trabajo en equipo, trabajo a presión, iniciativa, proactividad, orientación al resultado. Otros conocimientos: Office, autocad, internet, básicos de electricidad, conocimientos de normas de seguridad industrial, operación de maquinaria industrial.",
  },

  

  {
    id: 7,
  titulo: "Auxiliar en Mantenimiento ",
  descripcion:
    "Realizar una revisión general, verificando que las máquinas y equipos se encuentren trabajando en óptimas condiciones. Realizar los mantenimientos preventivos en equipos y máquinas según Cronograma de Mantenimiento. Tener los repuestos, materiales e insumos necesarios, previamente antes de realizar la actividad de mantenimiento. Realizar el cronograma de mantenimiento Preventivo. Solicitar cotizaciones de trabajos, materiales, equipos o repuestos necesarios para la realización de su trabajo.",
    requisitos: " Bachiller técnico en mecánica, electricidad, mantenimiento industrial, electromecánico. Experiencia: Mínimo un año en cargos similares. Residir en la ciudad de Quito. Competencias: Trabajo en equipo, trabajo a presión, iniciativa, proactividad, orientación al resultado. Otros conocimientos: Office, autocad, internet, básicos de electricidad, conocimientos de normas de seguridad industrial, operación de maquinaria industrial.",

}


]

export default function Named ({location})  {

  return(



  <Layout location={location} crumbLabel="Trabaja con Nosotros"
  siteVerOpts={siteVerOpts} langOpts={langOpts}
  title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>

<div class="bg-fixed" >

    <StaticImage src="../images/trabaja-con-nosotros.jpg"
                className="object-contain"
                alt="Vacantes disponibles en Unilimpio"
                placeholder="blurred"
                layout="fullWidth"
                 />


    </div>



    <section id="intro" class="bg-white mt-0 flex justify-center">
  <div class="max-w-7xl mx-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-5xl font-semibold text-blue ">Trabaja con Nosotros </h1>
      <p class="mt-4 text-xl text-gray-700 mb-0">Eres una persona orientada a resultados y te apasionan los retos? Entonces, te estamos buscando. ¡Nos encantaría que formes parte de nuestra familia Unilennials! <br/>En este espacio encontrarás todas las oportunidades laborables que tenemos en Unilimpio. *Aplica únicamente si cumples con todos los requisitos.
  </p>
    </div>
    </div>
</section>

<section id="vacantes" className="bg-gray-50 pt-0">
      <div className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl text-center font-bold text-primary-lighter">Oportunidades laborables</h2>
        <div className="mt-8">
          <dl className="divide-y divide-gray-400">
            {jobs.map((job) => (
              <div key={job.id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                <dt className="text-lg text-left font-bold text-primary-default md:col-span-5">{job.titulo}</dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base text-gray-700">
                    <span className="font-bold text-secondary-lighter">Descripción:<br/> </span>{job.descripcion} <br/>
                    <span className="font-bold text-secondary-lighter">Requisitos:<br/></span>{job.requisitos} <br/>
                    <span className="text-primary-default text-lg text-extrabold">La empresa ofrece una remuneración competitiva de acuerdo al perfil del candidato, beneficios de ley, incentivos, seguro privado contra accidentes personales, entre otros. <br/> Si te interesa aplicar a este puesto, envía tu hoja de vida y una carta de motivación al correo talentohumano@unilimpio.com</span>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>


    <NewsletterSub/>
  </Layout>
)}

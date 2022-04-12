import React from 'react';
import Layout from '../../../components/layout/Layoutexport';

import { StaticImage } from "gatsby-plugin-image"
import NewsletterSub from "../../../components/NewsletterSub";





const seo={
  title: "About Us",
  desc:  "Descubra nuestra historia",
  image: "productos.jpg",
  pathname: "/export/es/acerca-de/",
  alternateEn: "/export/en/about-us/",
  alternateEs: "/export/es/acerca-de/",
  alternateEsec: "/quienes-somos/",
  alternateDefault: "/export/es/acerca-de/"
}

const siteVerOpts = [

  {
    label: 'Internacional',
    value: null,

  },


  {
    label: 'Ecuador',
    value: '/quienes-somos/',

  },


];

const langOpts = [

  {
    label: 'ES',
    value: null,

  },


  {
    label: 'EN',
    value: '/export/en/about-us/',

  },


];

const AboutUs = ({location}) => (




  <Layout location={location} crumbLabel="Acerca de"
          siteVerOpts={siteVerOpts} langOpts={langOpts}
          alternates alternateEn={seo.alternateEn} alternateEs={seo.alternateEs} alternateEsec={seo.alternateEsec} alternateDefault={seo.alternateDefault}
            title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>


    <StaticImage src="../../../images/foto-dron-unilimpio.jpg"
                className="object-contain"
                alt="Acerca de Unilimpio: en la imagen todos los colaboradores de Unilimpio oficina Matriz."
                placeholder="blurred"
                layout="fullWidth"
                 />

    <section id="presentacion" className="bg-white flex justify-center">
  <div className="max-w-7xl mx-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-5xl font-semibold text-primary-default ">Somos Salud y Bienestar</h1>
      <p className="mt-4 text-xl text-gray-700 mb-6">Somos una empresa orgullosamente Ecuatoriana, que desde hace más de 3 décadas brindamos salud y bienestar a las personas a través de limpieza e higiene.
  </p>
    </div>
    </div>
</section>





<section id="historia" className="bg-gradient-to-r from-blue-400 via-white to-blue-100 mt-20 flex justify-center">
  <div className="max-w-7xl mx-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-primary-lighter text-center ">NUESTRA HISTORIA</h2>
      <p className="mt-4 text-lg text-gray-700 mb-20 font-normal text-justify">Unilimpio S.A es una empresa Ecuatoriana que nació en 1986. Nos dedicamos a proveer sistemas de limpieza para la industria, las instituciones y el hogar. Nuestro propósito es proveer bienestar a las personas a través de soluciones de higiene.
          <br/> <br/>
Tras 34 años, nos hemos convertido en un grupo empresarial constituido por empresas especializadas en diferentes campos de la higiene, con operaciones en Colombia y Ecuador; y exportaciones a Perú.
<br/> <br/>
Nos diferenciamos de la competencia por tener el más amplio portafolio de productos de limpieza, asesores profesionales en limpieza, buenas prácticas de manufactura, de calidad y de seguridad alimentaria.
 </p>

<h1 className=" italic font-semibold text-center text-primary text-xl ">"La higiene es bienestar, es salud" </h1>
    </div>
    </div>
</section>



<section className="bg-gray-200 pt-12 sm:pt-16 mb-20 mt-20">
  <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 ">
    <div className="max-w-4xl mx-auto text-center ">
      <h2 className="text-3xl font-bold mt-0 text-center text-primary-lighter mb-12  ">
        MEJORA CONSTANTE
      </h2>
    </div>
  </div>
  <div className="bg-gray-200 py-px pb-12 sm:pb-16">
    <div className="relative ">
      <div className="absolute inset-0 h-1/2 bg-gray-200"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
            <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-normal text-gray-700">
              Certificación ISO 9001
              </dt>
              <dd className="order-1 text-4xl font-semibold text-secondary-lighter ">
                2001
              </dd>
            </div>
            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-normal text-gray-700">
              Miembro de la Internacional Sanitary Supply Association ISSA
              </dt>
              <dd className="order-1 text-4xl font-semibold text-secondary-lighter">
                2009
              </dd>
            </div>
            <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
              <dt className="order-2 mt-2 text-lg leading-6 font-normal text-gray-700">
              Adopción de Estándares ISO 4500 e ISO 14000
              </dt>
              <dd className="order-1 text-4xl font-semibold text-secondary-lighter">
                2012
              </dd>
            </div>
            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-normal text-gray-700">
              Responsabilidad Social con el marco de conducta de ISO 26000
              </dt>
              <dd className="order-1 text-4xl font-semibold text-secondary-lighter">
                2016
              </dd>
            </div>
            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-normal text-gray-700">
              Miembro del Pacto Global de Naciones Unidas
              </dt>
              <dd className="order-1 text-4xl font-semibold text-secondary-lighter">
                2018
              </dd>
            </div>
            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-normal text-gray-700">
              Certificación en Buenas Prácticas de Manufactura
              </dt>
              <dd className="order-1 text-4xl font-semibold text-secondary-lighter">
                2019
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="grupo empresarial Unilimpio" className="bg-white flex justify-center mt-2">
  <div className="max-w-7xl mx-10 py-2 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div className="max-w-3xl mx-auto text-center flex justify-center">
      <h1 className="text-3xl font-bold mt-0 text-center text-primary-lighter  ">NUESTRA FILOSOFÍA</h1>
    </div>
    </div>
</section>


<section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  mx-6 mt-0">
  <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
    <div className="flex-1 flex flex-col p-8">
    <StaticImage src="../../../images/nuestro-proposito.jpg"
                    className="flex justify-center mx-6"
                    alt="Misión de Unilimpio"
                    placeholder="blurred"
                    layout="constrained"
        />
      <h3 className="mt-6 text-secondary  text-lg font-bold ">Nuestro Propósito</h3><br/>
      <dl className="mt-1 flex-grow flex flex-col justify-between">
        <dt className="sr-only">Title</dt>
        <dd className="text-gray-700 text-base text-center">El bienestar de las personas a través de la higiene.</dd>
        <dt className="sr-only">Role</dt>
        <dd className="mt-3">

        </dd>
      </dl>
    </div>
  </li>

  <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
    <div className="flex-1 flex flex-col p-8">
    <StaticImage src="../../../images/nuestro-futuro.jpg"
                    className="flex justify-center mx-6"
                    alt="Visión de Unilimpio"
                    placeholder="blurred"
                    layout="constrained"
        />
      <h3 className="mt-6 text-secondary  text-lg font-bold">Nuestro Futuro</h3><br/>
      <dl className="mt-1 flex-grow flex flex-col justify-between">
        <dt className="sr-only">Title</dt>
        <dd className="text-gray-700 text-base text-center">Ser la primera opción de higiene institucional reconocida por su oferta de valor y su Responsabilidad Social. </dd>
        <dt className="sr-only">Role</dt>
        <dd className="mt-3">

        </dd>
      </dl>
    </div>

  </li>

  <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
    <div className="flex-1 flex flex-col p-8">
    <StaticImage src="../../../images/valores-corporativos.jpg"
                    className="flex justify-center mx-6"
                    alt="Valores corporativos de Unilimpio"
                    placeholder="blurred"
                    layout="constrained"
        />
      <h3 className="mt-6 text-secondary  text-lg font-bold">Nuestros Valores Corporativos</h3><br/>
      <dl className="mt-1 flex-grow flex flex-col justify-between">
        <dt className="sr-only">Title</dt>
        <dd className="text-gray-700 text-base text-justify"><li>Enfoque en el cliente</li><li>Mejora permanente e innovación</li> <li>trabajo en equipo para conseguir resultados</li> <li>Transparencia, honestidad, coraje y fe</li> <li>Sustentables (Pacto Global y ODS)</li> </dd>
        <dt className="sr-only">Role</dt>
        <dd className="mt-3">
        </dd>
      </dl>
    </div>
  </li>
</section>






<NewsletterSub/>

</Layout>
);

export default AboutUs;

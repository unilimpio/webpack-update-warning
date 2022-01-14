

import React from 'react';
import Button from '../components/Button';
import Layout from '../components/layout/Layout';


import { Link } from 'gatsby';
import PictureWebp from "../components/PictureWebp";



import LeadForm from '../components/LeadForm';
import NewsletterSub from '../components/NewsletterSub';


const seo={
  title: "Soluciones por industria",
  desc:  "En Unilimpio estamos listos para atender cualquier necesidad que requiera su industria, contamos con asesores profesionales especializados en cada sector y con el más amplio portafolio de productos de limpieza para brindarle la solución más adecuada.",
  image: "segmentos.jpg",
  pathname: "/soluciones-por-sector",
}

const Soluciones = ({location}) => (



  <Layout location={location} crumbLabel="Soluciones por Sector"
  title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>

    <PictureWebp className="object-contain" filename="segmentos" description="soluciones por industria"/>







<section className="bg-white">
  <div className="max-w-7xl mx-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-5xl font-semibold text-blue ">Soluciones por Industria</h1>
      <p className="mt-4 text-xl text-gray-700 mb-20">En Unilimpio estamos listos para atender cualquier necesidad que requiera su industria, contamos con asesores profesionales especializados en cada sector y con el más amplio portafolio de limpieza para brindarle la solución más adecuada.   </p>
    </div>
    <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
      <div className="flex">

        <svg className="flex-shrink-0 h-6 w-6 text-green-500 text-right  " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <div className="ml-3">
          <dt className="text-2xl leading-6 font-medium  text-center text-primary-lighter mb-6">
            Alto Tráfico
          </dt>
          <dd className="mt-2 text-base text-gray-700 text-justify">
          Soluciones óptimas para mantener espacios de uso público totalmente desinfectados y sanitizados. Nuestros productos son altamente concentrados, lo que genera un gran rendimiento y un bajo costo en uso.  Por último, entrenamos y capacitamos al personal de limpieza en el manejo adecuado de soluciones químicas para evitar el desperdicio.
          </dd>
          <Link to="/soluciones-por-sector/alto-trafico" className="mt-4 text-primary-lighter inline-flex items-center pl-10 ">Conocer más
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
        </div>
      </div>

      <div className="flex">

        <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <div className="ml-3">
          <dt className="text-2xl leading-6 font-medium text-primary-lighter text-center mb-6">
            Industria Alimenticia
          </dt>
          <dd className="mt-2 text-base text-gray-700 text-justify">
            Productos con certificación, cuentan con notificación/registro sanitario, y cumplen con especificaciones nacionales e internacionales. Nuestros productos químicos son altamente concentrados, lo que genera un gran rendimiento y un bajo costo en uso. Usados con dosificadores, se garantiza y controla el rendimiento de nuestras soluciones químicas. Capacitamos al personal de limpieza para evitar el desperdicio de producto.
          </dd>
          <Link to="/soluciones-por-sector/industria-alimenticia" className="mt-4 text-primary-lighter inline-flex items-center pl-10 ">Conocer más
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
        </div>
      </div>

      <div className="flex">

        <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <div className="ml-3">
          <dt className="text-2xl leading-6 font-medium text-primary-lighter text-center mb-6">
            Educación
          </dt>
          <dd className="mt-2 text-base text-gray-700 text-justify">
          Las más altas medidas de seguridad para el estudiante y el cuerpo docente con espacios educativos libres de virus y bacterias. Contamos con un amplio portafolio de productos de limpieza e higiene de manos para satisfacer sus necesidades.
          </dd>
          <Link to="/soluciones-por-sector/educacion" className="mt-4 text-primary-lighter inline-flex items-center pl-10 ">Conocer más
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
        </div>
      </div>

      <div className="flex">

        <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <div className="ml-3">
          <dt className="text-2xl leading-6 font-medium text-primary-lighter text-center mb-6">
            Servicios de Limpieza
          </dt>
          <dd className="mt-2 text-base text-gray-700 text-justify">
          Todos nuestros productos cumplen con los requisitos de calidad y seguridad. Son productos concentrados desarrollados con un enfoque de máximo rendimiento para la reducción de costo y mayor durabilidad. Son productos biodegradables.
          </dd>
          <Link to="/soluciones-por-sector/servicios-de-limpieza" className="mt-4 text-primary-lighter inline-flex items-center pl-10 ">Conocer más
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
        </div>
      </div>
    </dl>
  </div>
</section>



<div className="w-full mx-auto mb-10 mt-8">
      <Link to="/productos">
        <Button className="flex mx-auto mt-16 text-white bg-primary-lighter border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Descubra nuestros productos  </Button>
      </Link>
    </div>



<LeadForm/>
<NewsletterSub/>


  </Layout>
);
export default Soluciones;

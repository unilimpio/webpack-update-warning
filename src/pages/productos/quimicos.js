
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout/Layout';
import FeatureCard from '../../components/FeatureCard';
import featuresData from '../../data/productos/quimicos/features-data';
import PictureWebp from "../../components/PictureWebp";
import SplitSection from '../../components/SplitSection';
import SplitSectionB2b from '../../components/SplitSectionB2b';
import LeadForm from '../../components/LeadForm';

import NewsletterSub from '../../components/NewsletterSub';


const seo={
  title: "Químicos",
  desc:  "Productos químicos altamente concentrados y amigables con el ambiente. Elaborados bajo éstrictos estándares de calidad e inocuidad. Soluciones químicas para limpieza, desinfección y descontaminación de superficies.",
  image: "quimicos.jpg",
  pathname: "/quimicos",
}

export default function Named  ({location})  {

  return(
  <Layout location={location} crumbLabel="Productos Químicos"
  title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>

<section id="product-line" className="pt-6 bg-gradient-to-br from-gray-300 via-white to-gray-300">
  <div className="container mx-auto">
    <h1 className="text-center sm:text-4xl text-4xl font-bold title-font mb-8">Productos Químicos</h1>
    <SplitSection className=""
        primarySlot={
          <div className="bg-white bg-opacity-50 rounded-xl p-8 text-justify px-10">
            <h2 className="text-xl text-blue-500 mb-5">Productos químicos seguros y amigables con el medio ambiente.</h2>
            <p className="md:w-full text-left leading-relaxed text-base text-gray-700 text-justify">
              Nuestros productos químicos han sido desarrollados utilizando tecnología alemana de última generación, cuyo enfoque en seguridad del usuario y minimización del impacto ambiental la hacen líder en el mundo en el ámbito de la química fina.<br/>
              Nuestras fórmulas químicas son:

            </p>
            <ul className="list-disc ml-8">
                <li>Altamente concentradas, de alto rendimiento y desempeño.</li>
                <li>Seguras para los usuarios: no contienen ingredientes potencialmente tóxicos o carcinogénicos.</li>
                <li>Amigables con el medio ambiente: usamos únicamente materias primas biodegradables, priorizando aquellas de origen vegetal, y no utilizamos ingredientes potencialmente tóxicos o bioacumulativos.</li>
              </ul>
          </div>
        }
        secondarySlot={
          <PictureWebp className="float-right" path="" filename="productos-quimicos" description="Productos quimicos Unilimpio"/>
        }/>
    <div className="w-full">
      <h2 className="font-medium title-font text-center my-10 text-decoration: underline text-3xl">Categorías</h2>
      <div className="flex flex-wrap">
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Desinfección de superficies
          </h3>
          <Link to="/productos/quimicos/amonio-cuaternario" className="text-blue-500 inline-flex items-center">
              Amonio Cuaternario 5ta Generación al 10%
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link to="/productos/quimicos/desinfectante-de-superficies-con-amonio-cuaternario" className="text-blue-500 inline-flex items-center">
              Desinfectante de Superficies Ozz con Amonio Cuaternario
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/quimicos/alcohol-antiseptico" className="text-blue-500 inline-flex items-center">
              Alcohol al 72%
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/quimicos/cloro-liquido-ozz" className="text-blue-500 inline-flex items-center">
              Cloro líquido al 5.5%
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/quimicos/desinfectante-liquido" className="text-blue-500 inline-flex items-center">
              Desinfectante líquido concentrado
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/quimicos/sanitizante-peracetico" className="text-blue-500 inline-flex items-center">
              Sanitizante peracético al 15%
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>

        </div>


        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Desengrasantes
          </h3>
          <Link  to="/productos/quimicos/digrizz-ozz" className="text-blue-500 inline-flex items-center text">
              Detergente concentrado Digrizz
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/quimicos/arrasagrasa-multiusos" className="text-blue-500 inline-flex items-center ">
              Arrasagrasa multiusos
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>

          <Link  to="/productos/quimicos/desengrasante-tornado" className="text-blue-500 inline-flex items-center text-center">
              Desengrasante Tornado
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>

          </Link><br/>
          </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Línea Alimenticia
          </h3>
          <Link   to="/productos/quimicos/lavavajilla-neutro" className="text-blue-500 inline-flex items-center">
              Lavavajilla Neutro Ozz
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/quimicos/organic-100" className="text-blue-500 inline-flex items-center">
              Organic 100
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>

          </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h3 className="text-lg sm:text-xl font-medium title-font mb-2 text-center">
            Cuidado de Superficies
          </h3>
          <Link   to="/productos/quimicos/cera-liquida" className="text-blue-500 inline-flex items-center">
              Cera Autobrillante Ozz
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link   to="/productos/quimicos/brilla-muebles" className="text-blue-500 inline-flex items-center">
              Limpia Muebles Ozz
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>
          <Link  to="/productos/quimicos/limpiador-pisos-flotantes" className="text-blue-500 inline-flex items-center">
              Limpiador de Piso Flotante Ozz
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link><br/>

        </div>

      </div>
    </div>

  </div>
</section>


<section id="features" className="py-10 md:py-20 ">
      <div className="container mx-auto">
        <div className="w-full bg-fill bg-no-repeat bg-products">
          <h2 className="text-3xl font-semibold text-center">¿Por qué elegir nuestro productos químicos?</h2>
          <p className="md:w-2/3 mx-auto text-center my-5 text-2xl">
          Al elegirnos, usted recibe los siguientes beneficios:
          </p>
        </div>

        <div className="flex flex-wrap justify-center">

            {featuresData.map(feature => (
            <div key={feature.featureName} className="w-full p-4 lg:w-1/3">
              <FeatureCard feature={feature} />
            </div>
            ))}


        </div>
      </div>
</section>

<SplitSectionB2b/>

<LeadForm/>
<NewsletterSub/>



  </Layout>
)}

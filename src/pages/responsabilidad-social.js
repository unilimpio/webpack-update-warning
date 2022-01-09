import React from 'react';


import Layout from '../components/layout/Layout';

import PictureWebp from "../components/PictureWebp";
import Button from '../components/Button';


import SplitSection from '../components/SplitSection';
import NewsletterSub from '../components/NewsletterSub';


import InformeGri2018 from "../files/informe-gri-unilimpio-2018.pdf";
import InformeCOP2018 from "../files/informe-cop-unilimpio-2018.pdf";
import InformeCOP2019 from "../files/informe-cop-unilimpio-2019.pdf";


const seo={
  title: "Responsabilidad Social ",
  desc:  "Somos una empresa responsable, transparente y solidaria. Nuestra empresa ha sido reconocida a nivel local por su gestión en responsabilidad social empresarial. Formamos parte del UN Global Compact y nos adherimos al Global Reporting Initiative.",
  image: "resppnsabilidad-social-banner.jpg",
  pathname: "/responsabilidad-social",
}


 const ResponsabilidadSocial = ({location}) => (





  <Layout location={location} crumbLabel="Responsabilidad Social Empresarial"
          title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>



    <div class="bg-fixed" >

    <PictureWebp  filename="responsabilidad-social" description="responsabilidad social unilimpio"/>

    </div>

    <section class="bg-white">
  <div class="max-w-7xl mx-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-5xl font-semibold text-blue ">Responsabilidad Social Empresarial</h1>
      <h1 className=" italic font-mormal text-center text-primary text-xl ">"Construyendo hoy nuestro legado para las futuras generaciones" </h1>

    </div>

        </div>
       </section>




        <SplitSection id="rse"
      reverseOrder className="bg-gradient-to-r from-green-100 via-white to-green-200 mt-12 "
      primarySlot={
        <div className="bg-white bg-opacity-50 rounded-lg   px-6 pt-8 pb-6 ml-25">
          <h2 className="text-3xl text-center font-semibold leading-tight text-blue-500  ml-30">
          La Sustentabilidad como factor de éxito
          </h2>
          <p className="mt-8 text-base font-normal text-justify leading-relaxed ">
          En Unilimpio creemos firmemente que ser sustentables es el único modelo de gestión de empresas que es válido hoy por hoy. Ninguna ganancia económica el día de hoy puede justificar el comprometer los recursos y medios de subsistencia de las futuras generaciones.
          </p>

        </div>
      }
      secondarySlot={<PictureWebp filename="siembra-de-arboles" description="Unilimpio es una empresa con responsabilidad social empresarial"/>}
/>

<SplitSection id="services"
       className="bg-gradient-to-r from-blue-200 via-white to-blue-100 mt-12"

      primarySlot={
        <div className="bg-white bg-opacity-50 rounded-lg   px-6 pt-8 pb-6 ml-25 ">
          <h2 className="text-3xl text-center font-semibold leading-tight text-blue-500  ml-30">Compromiso de lucha contra la corrupción</h2>
          <p className="mt-8 text-base font-normal text-justify leading-relaxed ">
          Unilimpio ha declarado y formalizado su compromiso de luchar contra la corrupción en cada uno de los encadenamientos productivos a los que pertenecemos. Contribuimos con la sociedad y el desarrollo económico haciendo negocios de forma ética y transparente, sin ceder ante solicitud de coimas para ganar licitaciones o contratos. Así mismo pertenecemos a una alianza de empresas, tanto de Ecuador como de la región, entre las cuales compartimos el mismo llamado a la acción y el mismo código moral.
          </p>


        </div>
      }
      secondarySlot={<PictureWebp className="" filename="corrupcion" description="compromiso de lucha contra la corrupción"/>}
/>




<SplitSection id="rse"
      reverseOrder className="bg-gradient-to-r from-green-100 via-white to-green-200 mt-12"
      primarySlot={
        <div className="bg-white bg-opacity-50 rounded-lg px-6 pt-8 pb-6 ml-25 mb-4">
          <h2 className="text-3xl text-center font-semibold leading-tight text-blue-500  ml-30">
            Transparencia
          </h2>
          <p className="mt-8 text-base font-normal text-justify leading-relaxed  ">
          En una época en la que cualquiera puede llamarse amigable con el medio ambiente, en Unilimpio creemos en la necesidad de comunicarnos con nuestras partes interesadas de una forma honesta, clara y transparente sobre los esfuerzos que realizamos día a día para lograr que nuestra operación sea cada vez más sustentable. Para esto, a partir del año 2018 nos hemos adherido a GRI (Global Reporting Iniciative), modelo Internacional de transparencia en la comunicación de información relacionada a desarrollo económico y sustentabilidad.
          </p>
          <div className="w-full mx-auto mb-20">
      <a href={ InformeGri2018 } target="_blank" rel="noreferrer">
        <Button className="flex mx-auto mt-10 mb-4  text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Informe GRI 2018 </Button>
      </a>
    </div>
        </div>
      }
      secondarySlot={<PictureWebp filename="transparencia" description="Unilimpio es una empresa con responsabilidad social empresarial"/>}
/>


<SplitSection id="services"
       className="bg-gradient-to-r from-blue-200 via-white to-blue-100 mt-12"

      primarySlot={
        <div className="bg-white bg-opacity-50 rounded-lg   px-6 pt-8 pb-6 ml-25 ">
          <h2 className="text-3xl text-center font-semibold leading-tight text-blue-500  ml-30">Adheridos al Pacto Global</h2>
          <p className="mt-8 text-base font-normal text-justify leading-relaxed ">
          Desde 2018, Unilimpio forma parte del Pacto Global iniciativa global que cuenta con el auspicio de las Naciones Unidas y que busca que las organizaciones privadas a nivel mundial se involucren activamente en la consecución de los Objetivos de Desarrollo Sustentable (ODS) para el 2030.
          </p>
          <div className="w-full mx-auto mb-20">
      <a href={ InformeCOP2018 } target="_blank" rel="noreferrer">
        <Button className="flex mx-auto mt-10 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Informe COP 2018 </Button>
      </a>
    </div>
    <div className="w-full mx-auto mb-20">
      <a href={ InformeCOP2019 } target="_blank" rel="noreferrer">
        <Button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Informe COP 2019</Button>
      </a>
    </div>

        </div>
      }
      secondarySlot={<PictureWebp className="" filename="pacto-global" description="Técnicos cazabacterias realizando una desinfección profunda de lugares con aglomeración de personas y poca ventilación natural y exposición a la luz solar, como medida de prevención de la transmisión indirecta del COVID-19."/>}
/>
<NewsletterSub/>
  </Layout>
);
export default ResponsabilidadSocial;

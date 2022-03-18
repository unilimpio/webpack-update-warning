import React from 'react';
import { StaticImage } from "gatsby-plugin-image"


import Layout from '../../components/layout/Layoutexport';


import NewsletterSub from "../../components/NewsletterSub";







const seo={
  title: "Responsabilidad Social Empresarial",
  desc:  "Somos una empresa con responsabilidad social empresarial, conoce más",
  image: "",
  pathname: "/export/responsabilidad-social",
}

const siteVerOpts = [

  {
    label: 'Internacional',
    value: null,

  },


  {
    label: 'Ecuador',
    value: '/responsabilidad-social',

  },


];

const langOpts = [

  {
    label: 'ES',
    value: null,

  },


  {
    label: 'EN',
    value: '/export/en/social-responsability',

  },


];

const RSE = ({location}) => (

          <Layout location={location} crumbLabel="Responsabilidad Social Empresarial"
            siteVerOpts={siteVerOpts} langOpts={langOpts}
            title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>



    <div class="bg-fixed" >

    <StaticImage src="../images/responsabilidad-social.jpg"
                className="object-contain"
                alt="Unilimpio es una empresa con Resposabilidad Social"
                placeholder="blurred"
                layout="fullWidth"
                 />

  
    </div>

    <section class="bg-white flex justify-center">
  <div class="max-w-7xl mx-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-5xl font-semibold text-blue ">Responsabilidad Social Empresarial</h1><br/>
      <h1 className=" italic font-mormal text-center text-primary text-xl ">"Construyendo hoy nuestro legado para las futuras generaciones" </h1>

    </div>

        </div>
       </section>




<section id="responsabilidad social" className="">
<div class="bg-white">
  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
      <div class="space-y-5 sm:space-y-4">
        <h2 class="text-5xl font-semibold tracking-tight sm:text-4xl text-primary-lighter text-center">La RSE forma parte de nuestro ADN</h2>
        <p class="text-xl text-gray-500"></p>
      </div>
      <div class="lg:col-span-2">
        <ul role="list" class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
          <li class="sm:py-8">
            <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
              <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <StaticImage src="../../images/logo-onu-mujeres.jpg"
                    className="flex justify-center mx-6"
                    alt="Misión de Unilimpio"
                    placeholder="blurred"
                    layout="constrained"/>
              </div>
              <div class="sm:col-span-2">
                <div class="space-y-4">
                  <div class="text-2xl leading-6 font-semibold space-y-1">
                    <h3>ONU MUJERES</h3>
                  </div>
                  <div class="text-lg">
                    <p class="text-gray-700">En el 2019 se firmó el acuerdo con ONU Mujeres en ratificación a nuestro compromiso con la construcción de mejores comunidades empresariales.</p>
                  </div>
                  <ul role="list" class="flex space-x-5">
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="sm:py-8">
            <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
              <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <StaticImage src="../../images/pacto-global-logo.jpg"
                    className="flex justify-center mx-6"
                    alt="Misión de Unilimpio"
                    placeholder="blurred"
                    layout="constrained"/>
              </div>
              <div class="sm:col-span-2">
                <div class="space-y-4">
                  <div class="text-2xl leading-6 font-semibold space-y-1">
                    <h3>PACTO GLOBAL NNUU</h3>
                  </div>
                  <div class="text-lg">
                    <p class="text-gray-700">Somos una empresa en cuyo ADN llevamos la Responsabilidad Social Empresarial, por ello desde el 2017 somos parte del Pacto Global de las NNUU, apoyando activamente los ODS 4 y 12.</p>
                  </div>
                  <ul role="list" class="flex space-x-5">
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="sm:py-8">
            <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
              <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <StaticImage src="../../images/huella-de-carbono.jpg"
                    className="flex justify-center mx-6"
                    alt="Misión de Unilimpio"
                    placeholder="blurred"
                    layout="constrained"/>
              </div>
              <div class="sm:col-span-2">
                <div class="space-y-4">
                  <div class="text-2xl leading-6 font-semibold space-y-1">
                    <h3>CARBONO CERO</h3>
                  </div>
                  <div class="text-lg">
                    <p class="text-gray-700">Trabajamos en la medición de Huella de Carbono siguiendo las orientaciones y principios de la norma ISO 14064-1:2018, siendo reconocida como uno de los estándares más importantes a nivel internacional.</p>
                  </div>
                  <ul role="list" class="flex space-x-5">
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="sm:py-8">
            <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
              <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <StaticImage src="../../images/reciclaje.jpg"
                    className="flex justify-center mx-6"
                    alt="Misión de Unilimpio"
                    placeholder="blurred"
                    layout="constrained"/>
              </div>
              <div class="sm:col-span-2">
                <div class="space-y-4">
                  <div class="text-2xl leading-6 font-semibold space-y-1">
                    <h3>100% RECICLABLES</h3>
                  </div>
                  <div class="text-lg">
                    <p class="text-gray-700">El 100% de los empaques utilizados para los productos fabricados por Unilimpio están hechos de materiales reciclables, el desafío está principalmente en lograr que más gente en el país deseche nuestros envases de forma separada para que sean aprovechados mediante procesos de reciclaje. Para esto, Unilimpio ha incluido leyendas gráficas en cada etiqueta de sus productos indicando claramente los materiales reciclables de los que están hechos los empaques para ayudar al consumidor a desecharlos correctamente en fin de ciclo.</p>
                  </div>
                  <ul role="list" class="flex space-x-5">
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="sm:py-8">
            <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
              <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <StaticImage src="../../images/inclusivos.jpg"
                    className="flex justify-center mx-6"
                    alt="Misión de Unilimpio"
                    placeholder="blurred"
                    layout="constrained"/>
              </div>
              <div class="sm:col-span-2">
                <div class="space-y-4">
                  <div class="text-2xl leading-6 font-semibold space-y-1">
                    <h3>INCLUSIVOS</h3>
                  </div>
                  <div class="text-lg">
                    <p class="text-gray-700">Dentro de nuestra empresa, los trabajadores son informados sobre la no discriminación a nadie, especialmente a sus compañeros y sobre no cometer actos violentos al interior de su círculo familiar. Para fortalecer este punto nuestro calendario de capacitaciones incluye temas como abuso infantil, violencia de género y discriminación.</p>
                  </div>
                  <ul role="list" class="flex space-x-5">
                  </ul>
                </div>
              </div>
            </div>
          </li>
         
        </ul>
      </div>
    </div>
  </div>
</div>
</section>




<NewsletterSub/>

          </Layout>

)
export default RSE

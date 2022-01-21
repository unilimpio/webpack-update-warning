import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout/Layout';

import SplitSection from '../components/SplitSection';
import NewsletterSub from '../components/NewsletterSub';


const seo={
  title: "¿Quiénes Somos?",
  desc:  "Somos su aliado en higiene institucional, con nosotros podrá mejorar la satisfacción de sus usuarios, clientes y colaboradores a través de soluciones adecuadas de higiene y desinfección con nuestros productos de limpieza.",
  image: "grupo-unilimpio.jpg",
  pathname: "/quienes-somos",
}

const QuienesSomos = ({ location }) => (


  <Layout location={location} crumbLabel="Quienes Somos" title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>

    <StaticImage src="../images/grupo-unilimpio.jpg"
                className="object-contain"
                alt="Acerca de Unilimpio: en la imagen todos los colaboradores de Unilimpio oficina Matriz."
                placeholder="blurred"
                layout="fullWidth"
                 />

    <section id="presentacion" className="bg-white flex justify-center">
  <div className="max-w-7xl mx-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-5xl font-semibold text-blue ">Somos Salud y Bienestar</h1>
      <p className="mt-4 text-xl text-gray-700 mb-6">Somos una empresa orgullosamente Ecuatoriana, que desde hace más de 3 décadas brindamos salud y bienestar a las personas a través de limpieza e higiene.
  </p>
    </div>
    </div>
</section>



        <SplitSection id="video"
      reverseOrder className="bg-gradient-to-r from-gray-100 via-white to-gray-500 px-2   "
      primarySlot={
        <div className="bg-white bg-opacity-50 rounded-lg  my-20  px-6 py-12 mx-6">

          <p className="mt-1.5 text-xl font-normal leading-relaxed text-center ">
          Reportaje realizado por Mucho Mejor Ecuador sobre el proceso de fabricación de nuestros productos de limpieza.
          </p>

        </div>
      }
      secondarySlot={<iframe className="pl-14 w-2/3" title="youtube video" width="100%" height="100%" src="https://www.youtube.com/embed/B412e9m5H2g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" description="video responsabilidad social unilimpio float-right" allowfullscreen ></iframe>}
/>



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

<section id="grupo empresarial Unilimpio" className="bg-white flex justify-center">
  <div className="max-w-7xl mx-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mt-0 text-center text-primary-lighter  underline ">GRUPO EMPRESARIAL UNILIMPIO</h1>
      <p className="mt-4 text-xl text-gray-700 ">Tras 34 años en el mercado, nos hemos convertido en un Grupo Empresarial constituido por empresas especializadas en diferentes campos de la higiene:
  </p>
    </div>
    </div>
</section>

<section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 mx-20 mb-24  ">
  <li className="col-span-1 flex flex-col  text-center bg-white rounded-lg shadow divide-y divide-gray-200">
    <div className="flex-1 flex flex-col p-8 ">
    <StaticImage src="../images/logo-unilimpio.svg"
                className="mx-auto"
                alt="Acerca de Unilimpio:imagen del logo de la empresa Unilimpio SA"
                placeholder="blurred"
                layout="fixed"
                width={200}
                 />

      <h3 className="mt-6 text-white  text-lg font-bold bg-primary-default ">UNILIMPIO</h3>
      <dl className="mt-1 flex-grow flex flex-col justify-between ">
        <dt className="sr-only">Title</dt>
        <dd className="text-gray-700 text-base text-center  ">Empresa con las mejores y más rentables soluciones de higiene institucional para su negocio.</dd>
        <dt className="sr-only">Role</dt>
        <dd className="mt-3">

        </dd>
      </dl>
    </div>
  </li>

  <li className="col-span-1 flex flex-col  text-center bg-white rounded-lg shadow divide-y divide-gray-200">
    <div className="flex-1 flex flex-col p-8">

    <StaticImage src="../images/grupo-empresarial-tecnoclean.jpg"
                className="mx-auto"
                alt="Empresa de lavado profesional Tecno clean"
                placeholder="blurred"
                layout="fixed"
                width={400}
                 />
   
      <h3 className="mt-6 text-white bg-primary-default  text-lg font-bold">TECNO CLEAN</h3>
      <dl className="mt-1 flex-grow flex flex-col justify-between">
        <dt className="sr-only">Title</dt>
        <dd className="text-gray-700 text-base text-center">Empresa que ofrece productos especializados de limpieza e higiene textil.</dd>
        <dt className="sr-only">Role</dt>
        <dd className="mt-3">

        </dd>
      </dl>
    </div>

  </li>
  
</section>



<section className="bg-gray-200 pt-12 sm:pt-16 mb-20">
  <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 ">
    <div className="max-w-4xl mx-auto text-center ">
      <h2 className="text-3xl font-bold mt-0 text-center text-primary-lighter mb-12 underline ">
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
              Certificación ISO 4500 e ISO 14000
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
  <div className="max-w-7xl mx-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div className="max-w-3xl mx-auto text-center flex justify-center">
      <h1 className="text-3xl font-bold mt-0 text-center text-primary-lighter  underline ">NUESTRA FILOSOFÍA</h1>
    </div>
    </div>
</section>


<section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mx-20">
  <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
    <div className="flex-1 flex flex-col p-8">
    <StaticImage src="../images/nuestro-proposito.jpg"
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
    <StaticImage src="../images/nuestro-futuro.jpg"
                    className="flex justify-center mx-6"
                    alt="Visión de Unilimpio"
                    placeholder="blurred"
                    layout="constrained"
        />
      <h3 className="mt-6 text-secondary  text-lg font-bold">Nuestro Futuro</h3><br/>
      <dl className="mt-1 flex-grow flex flex-col justify-between">
        <dt className="sr-only">Title</dt>
        <dd className="text-gray-700 text-base text-justify">Ser la primera opción de higiene institucional reconocida por su oferta de valor y su Responsabilidad Social. </dd>
        <dt className="sr-only">Role</dt>
        <dd className="mt-3">

        </dd>
      </dl>
    </div>

  </li>

  <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
    <div className="flex-1 flex flex-col p-8">
    <StaticImage src="../images/valores-corporativos.jpg"
                    className="flex justify-center mx-6"
                    alt="Valores corporativos de Unilimpio"
                    placeholder="blurred"
                    layout="constrained"
        />
      <h3 className="mt-6 text-secondary  text-lg font-bold">Nuestros Valores Corporativos</h3><br/>
      <dl className="mt-1 flex-grow flex flex-col justify-between">
        <dt className="sr-only">Title</dt>
        <dd className="text-gray-700 text-base text-justify"><li>Enfoque en el cliente</li><li>Mejora permanente e innovación</li> <li>trabajo en equipo para conseguir resultados</li> <li>Transparencia, honestidad, coraje y fé</li> <li>Sustentables (Pacto Global y ODS)</li> </dd>
        <dt className="sr-only">Role</dt>
        <dd className="mt-3">
        </dd>
      </dl>
    </div>
  </li>
</section>



<section className="  bg-gradient-to-r from-gray-200 via-white to-gray-300 mt-10">
  <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
    <div className="space-y-12">
      <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 className="text-4xl font-bold mt-10 text-center text-primary-lighter">NUESTRAS MARCAS</h2>

      </div>
      <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-4 lg:max-w-5xl">
        <li>
          <div className="space-y-6 object-center">
          <div> <StaticImage src="../images/biosolutions.jpg"
                    className=""
                    alt="marca ecologica biosolutions"
                    placeholder="blurred"
                    layout="constrained"
        /></div>
        
            <div className="space-y-2">
              <div className="text-lg leading-6 font-medium space-y-1 font-bold">
                <h3>BIOSOLUTIONS</h3>
                <dd className="text-gray-700 text-sm font-normal px-4 text-center">Marca de productos ecológicos para el cuidado del hogar e institucional, desarrollados para minimizar el impacto ambiental. </dd>
              </div>

            </div>
          </div>
        </li>

        <li>
          <div className="space-y-6">
          <div> <StaticImage src="../images/unilimpio.jpg"
                    className=""
                    alt="marca de quimicos unilimpio"
                    placeholder="blurred"
                    layout="constrained"
        /></div>
      
            <div className="space-y-2">
              <div className="text-lg leading-6 font-medium space-y-1 font-bold">
                <h3>UNILIMPIO</h3>
                <dd className="text-gray-700 text-sm font-normal px-4 text-center">Empresa ecuatoriana especializada en el desarrollo y fabricación de productos innovadores para la limpieza, mantenimiento y cuidado personal.  </dd>

              </div>

            </div>
          </div>
        </li>

        <li>
          <div className="space-y-6">
          <div> <StaticImage src="../images/sanitisu.jpg"
                    className=""
                    alt="marca de absorbentes sanitisu"
                    placeholder="blurred"
                    layout="constrained"
        /></div>
            <div className="space-y-2">
              <div className="text-lg leading-6 font-medium space-y-1 font-bold">
                <h3>SANITISÚ</h3>
                <dd className="text-gray-700 text-sm font-normal px-4 text-center">Marca de absorbentes ecológicos para la limpieza de manos.  </dd>
              </div>

            </div>
          </div>
        </li>
        <li>
          <div className="space-y-6">
          <div> <StaticImage src="../images/dr-clean.jpg"
                    className=""
                    alt="marca de jabon, gel, alcohol de manos dr.clean"
                    placeholder="blurred"
                    layout="constrained"
        /></div>
            <div className="space-y-2">
              <div className="text-lg leading-6 font-medium space-y-1 font-bold">
                <h3>DR.CLEAN</h3>
                <dd className="text-gray-700 text-sm font-normal px-4 text-center">Marca de productos de higiene y desinfección de manos. </dd>
              </div>

            </div>
          </div>
        </li>
        <li>
          <div className="space-y-6">
          <div> <StaticImage src="../images/ozz.jpg"
                    className=""
                    alt="marca de quimicos, desinfectantes ozz"
                    placeholder="blurred"
                    layout="constrained"
        /></div>
            <div className="space-y-2">
              <div className="text-lg leading-6 font-medium space-y-1 font-bold">
                <h3>OZZ</h3>
                <dd className="text-gray-700 text-sm font-normal px-4 text-center">Marca de productos innovadores para la limpieza, mantenimiento y cuidado personal. </dd>
              </div>

            </div>
          </div>
        </li>

        <li>
          <div className="space-y-6">
          <div> <StaticImage src="../images/tts-cleaning.jpg"
                    className=""
                    alt="marca de accesorios profesionales para limpieza tts cleaning"
                    placeholder="blurred"
                    layout="constrained"
        /></div>
            <div className="space-y-2">
              <div className="text-lg leading-6 font-medium space-y-1 font-bold">
                <h3>TTS Cleaning</h3>
                <dd className="text-gray-700 text-sm font-normal px-4 text-center">TTS Cleaning es una empresa italiana, con el tiempo se ha convertido en el punto de referencia de la limpieza profesional.</dd>
              </div>

            </div>
          </div>
        </li>

        <li>
          <div className="space-y-6">
          <div> <StaticImage src="../images/bobson.jpg"
                    className=""
                    alt="marca de dispensadores bobson"
                    placeholder="blurred"
                    layout="constrained"
        /></div>
            <div className="space-y-2">
              <div className="text-lg leading-6 font-medium space-y-1 font-bold">
                <h3>BOBSON</h3>
                <dd className="text-gray-700 text-sm font-normal px-4 text-center">Marca de dispensadores de jabón, gel, papel higiénico, toallas de mano.  </dd>
              </div>

            </div>
          </div>
        </li>

        <li>
          <div className="space-y-6">
          <div> <StaticImage src="../images/tecno-clean.jpg"
                    className=""
                    alt="soluciones integrales personalizadas para su lavandería; contribuyendo a la limpieza, higiene, cuidado, conservación y preservación textil de sus prendas."
                    placeholder="blurred"
                    layout="constrained"
        /></div>
            <div className="space-y-2">
              <div className="text-lg leading-6 font-medium space-y-1 font-bold">
                <h3>TECNO CLEAN</h3>
                <dd className="text-gray-700 text-sm font-normal px-4 text-center">Empresa dedicada a la fabricación y comercialización de productos de limpieza e higiene textil. </dd>
              </div>

            </div>
          </div>
        </li>


      </ul>
    </div>
  </div>
</section>

<SplitSection id="rse"
      reverseOrder className="bg-gradient-to-br from-primary-default via-white to-primary-default  py-4 my-20"
      primarySlot={
        <div className="bg-white bg-opacity-50 rounded-lg my-10  px-6 py-6 mx-6">
          <h2 className="mt-2  text-3xl  sm:text-4xl  text-center text-2xl font-semibold leading-tight ">
           Marca Blanca
          </h2>
          <p className="mt-3 text-lg text-gray-700 text-center py-8">
          Fabricamos productos de la más alta calidad con su marca.
          </p>
          <div className="flex flex-wrap mx-auto justify-center">
      <Link to="/contactenos" className="mt-4 text-primary-lighter inline-flex items-center text-lg">Más información
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
      </div>
        </div>
      }
      secondarySlot={<StaticImage src="../images/marca-blanca.jpg"
      className="flex justify-center"
      alt="Marca BLanca: Somos su aliado ideal para la realización de su producto con su marca."
      placeholder="blurred"
      layout="constrained"
       />}
/>


<NewsletterSub/>

</Layout>
);

export default QuienesSomos;

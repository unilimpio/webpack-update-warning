
import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import Button from '../../components/Button';

import Layout from '../../components/layout/Layoutexport';

import SplitSection from '../../components/SplitSection';
import NewsletterSub from "../../components/NewsletterSub";
import { Link } from 'gatsby';






const seo={
  title: "Productos de exportacion",
  desc:  "Fabricamos y comercializamos productos para la region y el mundo",
  image: "productos.jpg",
  pathname: "/export/productos",
}

const siteVerOpts = [

  {
    label: 'Internacional',
    value: null,

  },


  {
    label: 'Ecuador',
    value: '/productos/',

  },


];

const langOpts = [

  {
    label: 'ES',
    value: null,

  },


  {
    label: 'EN',
    value: '/export/en/products/',

  },


];

const Products = ({location}) => (

          <Layout location={location} crumbLabel="Productos de Exportación"
            siteVerOpts={siteVerOpts} langOpts={langOpts}
            title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>

            <section id="productos" className="">
              <div className="">
               <h1 className="text-5xl font-semibold text-center mb-2">Productos de Higiene Profesional</h1>
                <h2 className="text-4xl font-semibold text-center mb-6 text-primary-lighter">de calidad Internacional</h2>
                <SplitSection
                    primarySlot={
                      <div className="bg-gray-200 rounded-xl  my-10  px-6 py-6 mx-6">
                        <h2 className="text-xl font-semibold text-center mb-4 my-10 text-primary-default">Fabricamos y exportamos a toda la región centro y sudamericana productos higiénicos</h2>
                        <p className="md:w-full text-left leading-relaxed text-base text-gray-700 text-justify pr-10 pl-10">
                          Fabricamos productos de la más alta calidad para los mercados y las industrias más exigentes. Nuestra innovación constante nos ha permitido entrar en mercados de la región.<br/>
                          Nuestra planta ubicada en Quito-Ecuador, cuenta con todas las certificaciones y reconocimientos requeridos para acceder a los mercados más exigentes, como son BPM, BPA, ISO 9001.
                        </p>
                      </div>
                    }
                    secondarySlot={
                      <StaticImage src="../../images/productos-de-exportacion-unilimpio.jpg"
                                  className=""
                                  alt="Productos de limpieza"
                                  placeholder="blurred"
                                  layout="constrained"
                                   />

                    }/>

              </div>
            </section>






<section id="categorias productos" className=" mt-0">
<h2 className="text-primary-default font-medium title-font text-center  text-3xl mt-6 ">Oferta de Productos de Exportación </h2>
<div class="relative bg-white px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div class="absolute inset-0">
    <div class="bg-white h-1/3 sm:h-2/3"></div>
  </div>
  <div class="relative max-w-7xl mx-auto">

    <div class=" max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">


        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
              <p class="text-lg font-semibold text-secondary-lighter text-center">Higiene de Manos
             </p>
             <div className="flex flex-wrap ">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../sistema-dispensado-para-lavado-de-manos'>Sistema Dispensado para Lavado de Manos
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="flex flex-wrap  ">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../sistema-dispensado-para-desinfeccion-de-manos'>Sistema Dispensado para Desinfección de Manos
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="flex flex-wrap ">
                <Link className="mx-auto text-primary-default inline-flex items-center " to='../jabon-liquido-antibacterial'>Jabón Líquido Antibacterial
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="flex flex-wrap">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../gel-antibacterial'>Gel Antibacterial
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="flex flex-wrap">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../jabon-espuma'>Jabón Espuma
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>

          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">

        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
              <p class="text-lg font-semibold text-secondary-lighter text-center">Industria Alimenticia
              </p>
              <div className="flex flex-wrap">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../bacterac-sanitizante-y-desinfectante-de-superficies'>Bacterac Sanitizante y Desinfectante de Superficies
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="flex flex-wrap">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../digrizz'>Digrizz
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="flex flex-wrap">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../organic-100'>Organic 100
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="flex flex-wrap">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../toallas-humedas-desinfectantes'>Toallas Húmedas Desinfectantes
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="flex flex-wrap">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../panos-reutilizables-workpro'>Paños de Limpieza Workpro
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">

            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">

        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
              <p class="text-lg font-semibold text-secondary-lighter text-center">Dispensadores</p>
              <div className="flex flex-wrap ">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../dispensador-papel-higienico-unilimpio'>Dispensador de Papel Higiénico Jumbo
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="flex flex-wrap">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../dispensador-toalla-z-unilimpio'>Dispensador de Toalla Z
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">

            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</div>
</section>


            <section id="boton descargar catalogo" className="">
                <div className="w-full mx-auto mb-10">
                  <a href="../../files/catalogo-exportacion-unilimpio.pdf" target="_blank" rel="noopener" className="">
                    <Button className="flex mx-auto mt-16 text-white bg-primary-default border-0 py-2 px-8 focus:outline-none hover:bg-primary-lighter rounded text-lg"  >Descargar Catálogo </Button>
                    </a>
                </div>
            </section>

            <NewsletterSub/>

          </Layout>

)
export default Products

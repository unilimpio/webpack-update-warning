
import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import Button from '../../../components/Button';

import Layout from '../../../components/layout/Layoutexport';

import SplitSection from '../../../components/SplitSection';
import NewsletterSub from "../../../components/NewsletterSub";
import { Link } from 'gatsby';






const seo={
  title: "Productos de exportacion",
  desc:  "Fabricamos y comercializamos productos para la region y el mundo",
  image: "productos.jpg",
  pathname: "/export/es/productos/",
  alternateEn: "/export/en/products/",
  alternateEs: "/export/es/productos/",
  alternateEsec: "/productos/",
  alternateDefault: "/export/es/productos/"
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
            alternates alternateEn={seo.alternateEn} alternateEs={seo.alternateEs} alternateEsec={seo.alternateEsec} alternateDefault={seo.alternateDefault}
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
                      <StaticImage src="../../../images/productos-de-exportacion-unilimpio.jpg"
                                  className=""
                                  alt="Productos de limpieza"
                                  placeholder="blurred"
                                  layout="constrained"
                                   />

                    }/>

              </div>
            </section>






<section id="categorias productos" className=" mt-16">
<h2 className="text-primary-default font-medium title-font text-center  text-3xl">Oferta de Productos de Exportación </h2>
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
             <div className=" ">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../sistema-dispensado-lavado-de-manos'>Sistema Dispensado para Lavado de Manos
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className=" ">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../sistema-dispensado-desinfeccion-de-manos'>Sistema Dispensado para Desinfección de Manos
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className=" ">
                <Link className="mx-auto text-primary-default inline-flex items-center " to='../jabon-liquido-antibacterial'>Jabón Líquido Antibacterial
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../gel-antibacterial'>Gel Antibacterial
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="">
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
              <div className="">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../bacterac-sanitizante-y-desinfectante-de-superficies'>Bacterac Sanitizante y Desinfectante de Superficies
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../digrizz'>Digrizz
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../organic-100'>Organic 100
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../toallas-humedas-desinfectantes'>Toallas Húmedas Desinfectantes
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="">
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
              <div className=" ">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../dispensador-papel-higienico-unilimpio'> Dispensador de Papel Higiénico Jumbo
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
              </div>
              <div className="">
                <Link className="mx-auto text-primary-default inline-flex items-center" to='../dispensador-toalla-z-unilimpio'>
                  Dispensador de Toalla Z
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
                  <a href="../../../files/catalogo-exportacion-unilimpio.pdf" target="_blank" rel="noopener" className="">
                    <Button className="flex mx-auto mt-16 text-white bg-primary-default border-0 py-2 px-8 focus:outline-none hover:bg-primary-lighter rounded text-lg"  >Descargar Catálogo </Button>

                    </a>
                </div>
            </section>


<section id="contacto" className="my-10">
  <div className="w-full mx-auto  py-8 px-2 sm:px-8 lg:px-40 bg-white bg-opacity-50 text-center">
    <div className="mx:auto bg-gray-300 bg-opacity-50 rounded-xl py-4">
      <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-primary-default">¡SOLICITE UNA COTIZACIÓN AHORA!</h2>
      <p className="mx-auto mt-8 mb-2 text-xl font-normal px-2 sm:px-4 md:px-40">
       Nuestros asesores están gustosos de ponerse en contacto con usted para brindarle mayor información de nuestros productos de higiene profesional y enviarle una cotización.
      </p>
      <div className="flex flex-wrap mx-auto justify-center">
         <Link to="/export/contacto/">
          <Button className="text-white mt-4 mb-4 rounded-xl transition duration-200 ease-in-out bg-primary-default shadow-md hover:bg-secondary-lighter hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 focus:outline-none" size="lg" type="submit">Cotizar</Button>
        </Link>
      </div>
    </div>
  </div>
</section>

            <NewsletterSub/>

          </Layout>

)
export default Products

import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'gatsby';


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
    title: "Unilimpio",
    desc:  "Somos su aliado en higiene institucional, con nosotros podrá mejorar la satisfacción de sus usuarios, clientes y colaboradores a través de soluciones adecuadas de higiene y desinfección con nuestros productos de limpieza.",
    image: "productos.jpg",
    pathname: "/index",
  }

export default function Named  ({location})  {

  return(
    <Layout location={location} crumbLabel=""
    siteVerOpts={siteVerOpts} langOpts={langOpts}
    title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>

        <section id="" className="p-10">


                    <div className="container font-serif text-center">
                    <h3 className="mt-8 text-6xl text-gray-500 text-md">404</h3>
                        <h1 className=" text-2xl text-primary font-bold">Página no encontrada</h1   >

                        <p>Lo sentimos. La página que has intentado consultar no existe o no está disponible en este momento.<br/>
                            Quizás quieras intentar navegar usando el menú superior o intentar algúnas de las siguientes sugerencias:
                            </p>
                            <ul className="my-4">

                                <li><Link className="" to="/blog">Blog</Link></li>
                                <li><Link className="" to="/productos">Productos</Link></li>
                            </ul>


                            <p className="mt-8">¿Necesitas ayuda?, Visita nuestro <span><Link className="" to="/centro-de-ayuda">Centro de Ayuda</Link></span> para encontrar maneras de obtener asistencia.</p>


                    </div>



        </section>

    </Layout>
)
  }

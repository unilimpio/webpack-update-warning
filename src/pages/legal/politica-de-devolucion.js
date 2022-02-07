import React from 'react';
import Layout from '../../components/layout/Layout';


import PageData from "../../data/politica-de-devolucion";


const seo={
    title: "Política de Devolución",
    desc:  "En nuestra sección política de devolución se describe nuestros términos y condiciones bajo los que usted puede devolver un producto adquirido.",
    image: "",
    pathname: "/politica-de-devolucion",
  }

export default function  Named  ({location}) {

  return(
    <Layout location={location} crumbLabel="Politica de devolución">

        <section id="" className="p-10">

                {PageData.map(data => (
                    <div className="container font-serif">
                        <h1 className="text-lg font-bold">{ data.title }</h1>
                        <p>{ data.content }</p>
                    </div>
                ))}


        </section>

    </Layout>
)}

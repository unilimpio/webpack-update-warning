import React from 'react';
import Layout from '../../components/layout/Layout';


import PageData from "../../data/privacy-policy-data";

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
    title: "Política de Privacidad",
    desc:  "En nuestra sección política de privacidad se explica cómo nuestra empresa maneja toda información y datos personales que usted, como cliente, haya ingresado en nuestra plataforma. ",
    image: "",
    pathname: "/politica-de-privacidad",
  }


export default function Named  ({location})  {

  return(
    <Layout location={location} crumbLabel="Politica de Privacidad"
    siteVerOpts={siteVerOpts} langOpts={langOpts}
    >
      
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

import React from 'react';
import Layout from '../components/layout/Layout';

import NewsletterSub from '../components/NewsletterSub';


import PageData from "../data/gracias";
const seo={
    title: "Gracias por su interés en nosotros",
    desc:  "",
    image: "",
    pathname: "/gracias",
  }

 export default function Named ({location}) {


   return(
    <Layout location={location} crumbLabel="Gracias"
    title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>

        <section id="" className="p-10">

                {PageData.map(data => (
                    <div className="container font-serif">
                        <h1 className="text-lg font-bold">{ data.title }</h1>
                        <p>{ data.content }</p>
                    </div>
                ))}


        </section>

        <NewsletterSub/>

    </Layout>
  )}

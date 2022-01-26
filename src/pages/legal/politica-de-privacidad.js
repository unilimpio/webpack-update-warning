import React from 'react';
import Layout from '../../components/layout/Layout';


import PageData from "../../data/privacy-policy-data";


const seo={
    title: "Conozca nuestra política de privacidad",
    desc:  "En nuestra sección política de privacidad se explica cómo nuestra empresa maneja toda información y datos personales que usted, como cliente, haya ingresado en nuestra plataforma. ",
    image: "",
    pathname: "/politica-de-privacidad",
  }


export default function Named  ({location})  {

  return(
    <Layout location={location} crumbLabel="Política de privacidad">
      
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

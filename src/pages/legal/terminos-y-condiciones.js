import React from 'react';
import Layout from '../../components/layout/Layout';


import PageData from "../../data/terminos-y-condiciones";



export default function Named  ({location})  {

  return(
    <Layout location={location} crumbLabel="Términos y condiciones" >

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

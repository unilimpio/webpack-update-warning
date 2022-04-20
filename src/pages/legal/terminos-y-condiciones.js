import React from 'react';
import Layout from '../../components/layout/Layout';


import PageData from "../../data/terminos-y-condiciones";

const siteVerOpts = [

    {
      label: 'Ecuador',
      value: '',
  
  
    },
  
    {
      label: 'Internacional',
      value: '/',
  
  
    },
  ];
  
  const langOpts = [
  
  
    {
      label: 'ES',
      value: '',
  
    },
  
  
    {
      label: 'EN',
      value: `/export/en/products`,
  
    },
  
  
  ];

export default function Named  ({location})  {

  return(
    <Layout location={location} crumbLabel="Terminos y Condiciones"
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

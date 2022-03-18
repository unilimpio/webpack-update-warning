
import React from 'react';
import { StaticImage } from "gatsby-plugin-image"



import Layout from '../../../components/layout/Layoutexport-en';

import NewsletterSub from "../../../components/NewsletterSub";







const seo={
  title: "Social Responsability",
  desc:  "",
  image: "",
  pathname: "/export/en/denounces-acts-of-corrupcion",
}

const siteVerOpts = [

  {
    label: 'International',
    value: null,

  },


  {
    label: 'Ecuador',
    value: '/denuncias-actos-de-corrupcion',

  },


];

const langOpts = [

  {
    label: 'EN',
    value: null,

  },


  {
    label: 'ES',
    value: '/export/denuncias-actos-de-corrupcion',

  },


];

const Denounces = ({location}) => (

          <Layout location={location} crumbLabel="Denounces"
                  siteVerOpts={siteVerOpts} langOpts={langOpts}
                  title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>

<div className="bg-fixed" >

<StaticImage src="../images/denuncia-actos-de-corrupcion.jpg"
            className="object-contain"
            alt="Actos de Corrupción"
            placeholder="blurred"
            layout="fullWidth"
             />


</div>

          <section className="bg-white flex justify-center ">
           <div className="max-w-7xl mx-10 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
             <h1 className="text-5xl font-semibold text-primary-default ">Reporting Acts of Corruption </h1><br/>
              <p className=" italic font-mormal text-center text-primary-default text-xl ">"At Unilimpio we contribute to society and economic development by doing business in an ethical and transparent manner, without giving in to requests for bribes to win bids or contracts". </p>
             </div>
           </div>
          </section>


      <section id="complaintform" className="container mx-auto bg-white ">
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-2">
        <div className="relative max-w-xl mx-auto">

          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            </h2>
            <p className="mt-4 text-xl leading-6 text-primary-lighter ">
            Help us by reporting any type of corruption or acts against our principles that you have witnessed. Please fill out the following information to follow up on your report.
            </p><br/><br/>
          </div>
          <form name="complaint" action="/gracias-denuncias" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="mt-9 grid grid-cols-1 gap-y-6 sm:gap-x-8">
                  <input type="hidden" name="form-name" value="complaint" />

                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Name</label>
                    <div className="mt-1">
                      <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                    <div className="mt-1">
                      <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                    <div className="mt-1">
                      <input id="email" name="email" type="email" autoComplete="email" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
                    </div>
                  </div>

                  <div>

                      <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Phone</label>

                    <div className="mt-1">
                      <input type="text" name="mobile" id="mobile" autoComplete="tel" aria-describedby="phone_description" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="how_can_we_help" className="block text-sm font-medium text-gray-700">Write your complaint here</label>
                      <span id="how_can_we_help_description" className="text-sm text-gray-500">500 characters</span>
                    </div>
                    <div className="mt-1">
                      <textarea id="how_can_we_help" name="how_can_we_help" aria-describedby="how_can_we_help_description" rows="4" className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
                    </div>
                  </div>

                  <div className="text-right sm:col-span-2">
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-lighter hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                      Send
                    </button>
                  </div>
                  <div className="invisible">
                    <label htmlFor="bot-field">
                      Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
      </section>

            <NewsletterSub/>

          </Layout>

)
export default Denounces

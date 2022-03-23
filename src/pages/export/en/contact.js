import React from 'react';
import Layout from '../../../components/layout/Layoutexport-en';
import { StaticImage } from "gatsby-plugin-image"
import NewsletterSub from "../../../components/NewsletterSub";




const seo={
  title: "Contact Us",
  desc:  "Contactenos hoy.",
  image: "productos.jpg",
  pathname: "/export/en/contact",
}

const siteVerOpts = [

  {
    label: 'International',
    value: null,

  },


  {
    label: 'Ecuador',
    value: '/contactenos',

  },


];

const langOpts = [

  {
    label: 'EN',
    value: null,

  },


  {
    label: 'ES',
    value: '/export/contacto',

  },


];

const Contact = ({location}) => (




  <Layout location={location} crumbLabel="Contact"
          siteVerOpts={siteVerOpts} langOpts={langOpts}
          title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>


<div class="bg-fixed" >

<StaticImage src="../../images/banner-contactenos.jpg"
            className="object-contain"
            alt="Solicite una cotización con Unilimpio"
            placeholder="blurred"
            layout="fullWidth"
             />


</div>

<section className="bg-white flex justify-center">
  <div className="max-w-7xl mx-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-semibold text-primary-default ">¡Request a quote NOW!</h1>
    </div> 
    </div> 
</section>


<section id="contactenos" className="relative bg-white mt-4">
<div class="relative bg-white">
  <div class="absolute inset-0">
    <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-200"></div>
  </div>
  <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
    <div class="bg-gray-200 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
      <div class="max-w-lg mx-auto">
        
        <dl class="mt-8 text-xl text-primary-default">
          <div>
            <dd>
              <p>Our advisors will be happy to contact you for further information and to schedule an appointment.</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div class="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
      <div class="max-w-lg mx-auto lg:max-w-none">
        <form name="lead" action="/gracias" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="grid grid-cols-1 gap-y-6">
          <div>
            <label for="full-name" class="sr-only">Nombre</label>
            <input type="text" name="nombre" id="nombre" autocomplete="name" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Name"/>
          </div>
          <div>
            <label for="phone" class="sr-only">Teléfono</label>
            <input type="text" name="phone" id="país" autocomplete="tel" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Country"/>
          </div>
          <div>
            <label for="email" class="sr-only">Email</label>
            <input id="email" name="email" type="email" autocomplete="email" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="E-mail"/>
          </div>
          <div>
            <label for="phone" class="sr-only">Teléfono</label>
            <input type="text" name="phone" id="phone" autocomplete="tel" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Phone"/>
          </div>
         
          <div>
            <label for="mensaje" class="sr-only">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="4" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" placeholder="Message"></textarea>
          </div>
          <div>
            <button type="submit" class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary-default hover:bg-primary-lighter focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</section>




<NewsletterSub/>



    </Layout>

  );

  export default Contact;

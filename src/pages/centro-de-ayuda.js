import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'gatsby';



import Faq from '../components/Faq';
import NewsletterSub from '../components/NewsletterSub';

import WhatsappIcon from '../svg/WhatsappIcon';


const seo={
  title: "Centro de Ayuda",
  desc:  "Si usted es cliente de Unilimpio y necesita ayuda por favor contacte nuestro call center, nuestros asesores estarán gustosos de brindarle asistencia. También le invitamos a consultar la sección de Preguntas Frecuentes debajo, puede que la respuesta que necesita se encuentre ahí.",
  image: "",
  pathname: "/centro-de-ayuda", 
}

export default function Named  ({location}) {

  return(
    <Layout location={location} crumbLabel="Centro de Ayuda"
      title={seo.title} desc={seo.desc} banner={seo.image} pathname={seo.pathname}>




  <div className="bg-white divide-y divide-gray-500 mx-auto py-16 px-4">

      <div className="mt-10">
        <h1 className="text-2xl md:text-5xl font-bold text-primary-lighter sm:text-3xl text-center">
          Centro de ayuda
        </h1>

          <p className="text-lg text-gray-700 mt-3 mb-10 text-center">
          Si usted es cliente de Unilimpio y necesita ayuda por favor contacte nuestro <Link to="#call-center" className="text-primary-lighter inline-flex">call center</Link>, nuestros asesores estarán gustosos de brindarle asistencia.<br/>
          También le invitamos a consultar la sección de Preguntas Frecuentes debajo, puede que la respuesta que necesita se encuentre ahí.
          </p>

      </div>

      <div className="">
        <Faq classNameName="bg-white"/>
      </div>

      <div id="call-center" className="py-16 px-8 lg:grid lg:grid-cols-3 lg:gap-8">
        <span>
        <h2 className="text-2xl font-extrabold text-primary-default sm:text-3xl">
          Call Center
        </h2>
        <p className="">
          Contacte nuestro call center, estaremos gustosos de brindarle asistencia, atendemos de <b>8h30am - 5h00pm LUN-VIE</b> para una respuesta inmediata.
        </p>
        </span>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
          <div>
            <h3 className="text-lg leading-6 font-medium text-secondary">
              Teléfonos:
            </h3>
            <dl className="mt-2 text-base text-gray-500">
              <div>
                <dt className="sr-only">
                  Telefono
                </dt>
                <dd>
                  1800 UNILIMPIO (864-546)
                </dd>
              </div>

            </dl>
          </div>
          <div>
            <div className="flex">

            <div className="flex-row text-secondary-lighter"><WhatsappIcon/></div>
            <div className="flex-row"><h3 className="text-lg leading-6 font-medium text-secondary">
              WhatsApp
            </h3></div>
            </div>
            <dl className="mt-2 text-base text-gray-500">
              <div>
                <dt className="sr-only">
                  whatsapp
                </dt>
                <dd>
                  +593 99 7345385
                </dd>
              </div>

            </dl>
          </div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-secondary">
              E-mail
            </h3>
            <dl className="mt-2 text-base text-gray-500">
              <div>
                <dt className="sr-only">
                  Email
                </dt>
                <dd>
                  info@unilimpio.com
                </dd>
              </div>

            </dl>
          </div>
          
        </div>
      </div>

  </div>

<NewsletterSub/>


</Layout>

)}

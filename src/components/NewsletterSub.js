import React from 'react';
import Mailchimp from '../components/Mailchimp';



const NewsletterSub = ({className}) => (

  <section id="newslettersub" className="mt-12 py-12 bg-gradient-to-b from-blue-400 to-primary-normal">

    <div className="container flex flex-col sm:flex-row">
      <div className="py-8 w-full sm:w-2/3">
        <h2 className="text-center sm:text-right text-white text-lg font-bold">Suscríbase a nuestra Newsletter</h2>
        <p className="text-center sm:text-right text-white my-2">
          Manténgase actualizado con artículos de interés, <br/>novedades de Unilimpio  y nuestras últimas promociones.

        </p>
      </div>
      <Mailchimp/>


    </div>


  </section>
);

export default NewsletterSub;

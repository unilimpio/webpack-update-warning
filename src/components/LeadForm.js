import React from 'react';
import { Link } from 'gatsby';
import Button from '../components/Button';


const LeadForm = ({className}) => (
  <section id="leadform" className={`mt-10 bg-right md:bg-center bg-no-repeat bg-fill ${ className }`}>
  <div className="w-full mx-auto  py-8 px-2 sm:px-8 lg:px-40 bg-white bg-opacity-50 text-center">
    <div className="mx:auto bg-white bg-opacity-50 rounded-xl ">
      <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold">¡Estamos listos para atenderlo!</h2>
      <p className="mx-auto mt-8 mb-2 text-xl font-normal px-2 sm:px-4 md:px-40">
       Nuestros asesores están gustosos de ponerse en contacto con usted para brindarle mayor información y agendar una cita.
      </p>
      <div className="flex flex-wrap mx-auto justify-center">
         <Link to="/contactenos#leadform">
          <Button className="animate-pulse text-white mt-4 mb-4 rounded-xl transition duration-200 ease-in-out bg-secondary-default shadow-md hover:bg-secondary-lighter hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 focus:outline-none" size="lg" type="submit">Deseo ser contactado por un asesor</Button>
        </Link>
      </div>
    </div>
  </div>
</section>
);

export default LeadForm;

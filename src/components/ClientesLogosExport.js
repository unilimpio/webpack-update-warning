import React from 'react';

import PictureWebp from './PictureWebp';


import PageData from '../data/clientesexport-logos-data';

const ClientesLogos = ({className}) => (
<section className={`bg-primary-default ${ className } `}>
  <div className="container mx-auto sm:flex ">
    <div className=" w-full sm:flex-1 ">
      <h2 className=" pl-5 mx-auto text-3xl font-bold text-white text-center sm:text-left mb-0 p-px pt-10 ">
      Nuestros principales aliados en Ecuador
      </h2>
   </div>
    <div className="w-full sm:flex-1 ">
     <div className="grid grid-cols-5 gap-4 pt-10 pb-10 pl-10 pr-10">
          {PageData.map(logo => (
           <div key={logo.filename} className=" flex flex-grow flex-shrink justify-center ">
              <PictureWebp filename={logo.filename} description={logo.description} className=""/>
            </div>


          ))}
         </div>

    </div>
  </div>
</section>
);

export default ClientesLogos;

import React from 'react';
import { Link } from "gatsby";
import SocialIcons from "../SocialIcons";
import LogoUni from "../../svg/LogoUni";


const Footer = () => (

  <footer className="text-white bg-primary-normal">


  <div className="container px-5 pb-24 pt-4 mx-auto z-0">
    <div className="flex flex-wrap md:text-left text-center">
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <div className="w-28 lg:w-30 mx-auto mb-8"><LogoUni/></div>

      </div>
      <div className="lg:w-1/4 sm:w-1/2 w-full px-4 text-center sm:text-left">
        <h3 className="text-lg font-bold tracking-widest mb-3">CONTACT US</h3>
        <nav className="list-none mb-10">
        <ul>
          <li className="text-white">
            De los eucaliptos E1-140<br/>
            y psje. Juncos<br/>
            170307<br/>
            Quito, Ecuador
          </li>
          <li className="text-white">
          Consultations, information, suggestions: <Link to="/export/en/contact" className="text-white underline hover:no-underline">write us</Link>.
          </li>
          </ul>
        </nav>
      </div>
      
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h4 className="title-font font-bold tracking-widest text-sm mb-3">PRODUCTS</h4>
          <nav className="list-none mb-10">
          <ul>
            <li>
            <Link to="/export/en/antibacterial-liquid-soap" className="text-white hover:text-gray-400">Antibacterial Liquid Soap</Link>
            </li>
            <li>
            <Link to="/export/en/antibacterial-gel" className="text-white hover:text-gray-400">Antibacterial Gel</Link>
            </li>
            <li>
              <Link to="/export/en/bacterac-surface-sanitizer-and-disinfectant" className="text-white hover:text-gray-400"> Quaternary Ammonium Disinfectant</Link>
            </li>
            <li>
            <Link to="/export/en/dispensador-toalla-z-unilimpio" className="text-white hover:text-gray-400">Z Towel Dispenser</Link>
            </li>
            </ul>
          </nav>


      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
      <h4 className="title-font font-bold tracking-widest text-sm mb-3">ABOUT US</h4>
        <nav className="list-none mb-10">
        <ul>
          <li>
           <Link to="/export/en/about-us/" className="text-white hover:text-gray-400"> About us </Link>
          </li>
          <li>
           <Link to="/responsabilidad-social" className="text-white hover:text-gray-400"> Social Responsibility</Link>
          </li>
          <li>
            <Link to="/denuncias-actos-de-corrupcion#complaintform" className="text-white hover:text-gray-400">Denounces acts of corruption</Link>
          </li>
          </ul>
        </nav>
        <h4 className="title-font font-bold text-secondary tracking-widest text-sm mb-3">FOLLOW US ON SOCIAL NETWORKS</h4>
        <SocialIcons color="#FFFFFF"/>
      </div>

      <div className="lg:w-1/6 md:w-1/2 w-full px-4">


      </div>
    </div>
  </div>

  <div className="bg-gray-700">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">
          © 1999-2021 Unilimpio - All rights reserved
          <br/>


      </p>
      <span className="flex pl-4 text-gray-100 text-sm text-center sm:text-left">
        <Link className="flex-col sm:flex-row" to="/legal/terminos-y-condiciones">Terms and conditions of use</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link className="flex-col sm:flex-row" to="/legal/politica-de-privacidad">Privacy Policy</Link>
      </span>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">UNILIMPIO - Mucho más en higiene Institucional</span>
    </div>
  </div>
</footer>
);

export default Footer;

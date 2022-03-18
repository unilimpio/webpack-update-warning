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
        <h3 className="text-lg font-bold tracking-widest mb-3">CONTÁCTENOS</h3>
        <nav className="list-none mb-10">
        <ul>
          <li className="text-white">
            De los eucaliptos E1-140<br/>
            y psje. Juncos<br/>
            170307<br/>
            Quito, Ecuador
          </li>
          <li className="text-white">
            Consultas, información, sugerencias: <Link to="/export/contacto" className="text-white underline hover:no-underline">escríbanos</Link>.
          </li>
          </ul>
        </nav>
      </div>
      
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h4 className="title-font font-bold tracking-widest text-sm mb-3">PRODUCTOS</h4>
          <nav className="list-none mb-10">
          <ul>
            <li>
            <Link to="/export/jabon-liquido-antibacterial" className="text-white hover:text-gray-400">Jabón Líquido antibacterial</Link>
            </li>
            <li>
            <Link to="/export/gel-antibacterial" className="text-white hover:text-gray-400">Gel Antibacterial</Link>
            </li>
            <li>
              <Link to="/export/bacterac-sanitizante-y-desinfectante-de-superficies" className="text-white hover:text-gray-400"> Desinfectante con Amonio cuaternario</Link>
            </li>
            <li>
            <Link to="/export/dispensador-toalla-z-unilimpio" className="text-white hover:text-gray-400">Dispensador de Toalla Z</Link>
            </li>
            </ul>
          </nav>


      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
      <h4 className="title-font font-bold tracking-widest text-sm mb-3">ACERCA DE</h4>
        <nav className="list-none mb-10">
        <ul>
          <li>
           <Link to="/export/acerca-de/" className="text-white hover:text-gray-400"> Sobre Nosotros </Link>
          </li>
          <li>
           <Link to="/export/responsabilidad-social" className="text-white hover:text-gray-400"> Responsabilidad Social</Link>
          </li>
          <li>
            <Link to="/export/denuncias-actos-de-corrupcion" className="text-white hover:text-gray-400">Denuncia actos de corrupción</Link>
          </li>
          </ul>
        </nav>
        <h4 className="title-font font-bold text-secondary tracking-widest text-sm mb-3">SÍGANOS EN REDES SOCIALES</h4>
        <SocialIcons color="#FFFFFF"/>
      </div>

      <div className="lg:w-1/6 md:w-1/2 w-full px-4">


      </div>
    </div>
  </div>

  <div className="bg-gray-700">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">
          © 1999-2021 Unilimpio - Todos los derechos reservados
          <br/>


      </p>
      <span className="flex pl-4 text-gray-100 text-sm text-center sm:text-left">
        <Link className="flex-col sm:flex-row" to="/legal/terminos-y-condiciones">Términos y condiciones de uso</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link className="flex-col sm:flex-row" to="/legal/politica-de-privacidad">Política de privacidad</Link>
      </span>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">UNILIMPIO - Mucho más en higiene Institucional</span>
    </div>
  </div>
</footer>
);

export default Footer;

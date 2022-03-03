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
            <span className="text-primary-xlighter">Para pedidos y servicio al cliente:</span><br/>
            En Ecuador, llámenos sin costo: <br/>
            1800 UNILIM (864-546)<br/>
            ó Chatee con un operador:<br/>
            Whats-app: +593 99 7345385<br/>
          </li>
          <li className="text-white">
          <span className="text-primary-xlighter">Horario de atención:</span><br/>
          Lun - Vie, 8:30 - 17:00 GMT -5:00.
          </li>
          <li className="text-white">
            Consultas, información, sugerencias: <Link to="/contactenos" className="text-white underline hover:no-underline">escríbanos</Link>.
          </li>
          </ul>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h4 className="font-bold tracking-widest text-sm mb-3">SERVICIO AL CLIENTE</h4>
        <nav className="list-none mb-10">
        <ul>
          <li>
            <Link to="/contactenos#distribuidores" className="text-white hover:text-gray-400">Distribuidores autorizados</Link>
          </li>
          <li>
            <a href="https://store.unilimpio.com" target="_blank"  rel="noreferrer" className="text-white hover:text-gray-400">Portal B2B</a>
          </li>


          <li>
            <Link to="/legal/politica-de-devolucion" className="text-white hover:text-gray-400">Política de devolución</Link>
          </li>
          <li>
            <Link to="/centro-de-ayuda#donde-esta-mi-pedido" className="text-white hover:text-gray-400">¿Donde está mi pedido?</Link>
          </li>
          <li>
            <Link to="/centro-de-ayuda" className="text-white hover:text-gray-400">Centro de Ayuda</Link>
          </li>
          <li>
           <a href="http://sap.unilimpio.com:1993" target="_blank"  rel="noreferrer" className="text-white hover:text-gray-400"> Facturación Electrónica</a>
          </li>
          </ul>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h4 className="title-font font-bold tracking-widest text-sm mb-3">PRODUCTOS DE LIMPIEZA</h4>
          <nav className="list-none mb-10">
          <ul>
            <li>
              <Link to="/productos/quimicos" className="text-white hover:text-gray-400">Productos Químicos</Link>
            </li>
            <li>
              <Link to="/productos/quimicos/alcohol-multipropositos" className="text-white hover:text-gray-400"> Alcohol Multipropósitos</Link>
            </li>
            <li>
              <Link to="/productos/quimicos/amonio-cuaternario-de-quinta-generacion-ozz" className="text-white hover:text-gray-400"> Amonio cuaternario</Link>
            </li>
            <li>
            <Link to="/productos/higiene-de-manos/jabon-liquido-para-relleno" className="text-white hover:text-gray-400">Jabón Líquido de manos</Link>
            </li>
            <li>
            <Link to="/productos/higiene-de-manos/gel-antibacterial-con-valvula" className="text-white hover:text-gray-400">Gel Antibacterial</Link>
            </li>
            <li>
            <Link to="/productos/higiene-de-manos/gel-antibacterial-para-relleno" className="text-white hover:text-gray-400">Alcohol en gel para Manos</Link>
            </li>
            <li>
            <Link to="/productos/higiene-de-manos/alcohol-antimicrobiano" className="text-white hover:text-gray-400">Alcohol Antimicrobiano</Link>
            </li>
            <li>
              <Link to="/productos/lavanderia/detergente-liquido-enzimatico" className="text-white hover:text-gray-400">Detergente Enzimático</Link>
            </li>
            <li>
            <Link to="/productos/dispensadores" className="text-white hover:text-gray-400">Dispensadores</Link>
            </li>
            <li>
            <Link to="/productos/absorbentes/toalla-z-interfoliada-bio" className="text-white hover:text-gray-400">Toalla de manos en Z</Link>
            </li>
            </ul>
          </nav>


      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
      <h4 className="title-font font-bold tracking-widest text-sm mb-3">ACERCA DE</h4>
        <nav className="list-none mb-10">
        <ul>
          <li>
           <Link to="/quienes-somos" className="text-white hover:text-gray-400"> Presentación</Link>
          </li>
          <li>
           <Link to="/quienes-somos#historia" className="text-white hover:text-gray-400"> Historia</Link>
          </li>
          <li>
           <Link to="/responsabilidad-social" className="text-white hover:text-gray-400"> Responsabilidad Social</Link>
          </li>
          <li>
            <Link to="/denuncias-actos-de-corrupcion#complaintform" className="text-white hover:text-gray-400">Denuncia actos de corrupción</Link>
          </li>
          <li>
           <Link to="/trabaja-con-nosotros" className="text-white hover:text-gray-400"> Trabaja con nosotros</Link>
          </li>
          <li>
           <Link to="/blog" className="text-white hover:text-gray-400"> Blog</Link>
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

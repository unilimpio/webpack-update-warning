import React from 'react';
import { Link } from "gatsby";


const Footer = () => (

  <footer className="text-white bg-primary-normal">


  <div className="container px-5 pb-24 pt-4 mx-auto z-0">
    <div className="flex flex-wrap md:text-left text-center">
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <div className="w-28 lg:w-30 mx-auto mb-8"></div>

      </div>
      <div className="lg:w-1/4 sm:w-1/2 w-full px-4 text-center sm:text-left">
        <h3 className="text-lg font-bold tracking-widest mb-3">This is the footer</h3>
        <nav className="list-none mb-10">
        <ul>
          <li className="text-white">
            Some address
            COuntry
          </li>



          </ul>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h4 className="font-bold tracking-widest text-sm mb-3">CUSTOMER SERVICEE</h4>
        <nav className="list-none mb-10">
        <ul>
          <li>
            <Link to="/contactenos/#distribuidores" className="text-white hover:text-gray-400">Link 1</Link>
          </li>
          <li>
            <a href="https://store.unilimpio.com" target="_blank"  rel="noreferrer" className="text-white hover:text-gray-400">Link 2</a>
          </li>



          </ul>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h4 className="title-font font-bold tracking-widest text-sm mb-3">More...</h4>
          <nav className="list-none mb-10">
          <ul>
            <li>
              <Link to="" className="text-white hover:text-gray-400">Link</Link>
            </li>
            <li>
              <Link to="" className="text-white hover:text-gray-400">Link</Link>
            </li>

            </ul>
          </nav>


      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
      <h4 className="title-font font-bold tracking-widest text-sm mb-3">About</h4>
        <nav className="list-none mb-10">
        <ul>
          <li>
           <Link to="" className="text-white hover:text-gray-400"> Link</Link>
          </li>
          <li>
           <Link to="" className="text-white hover:text-gray-400"> Link</Link>
          </li>

          </ul>
        </nav>

      </div>

      <div className="lg:w-1/6 md:w-1/2 w-full px-4">


      </div>
    </div>
  </div>

  <div className="bg-gray-700">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">
          © The best company
          <br/>


      </p>
      <span className="flex pl-4 text-gray-100 text-sm text-center sm:text-left">
        <Link className="flex-col sm:flex-row" to="/legal/terms">Terms</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link className="flex-col sm:flex-row" to="/legal/privacy-policy">Privacy Policy</Link>
      </span>
    </div>
  </div>
</footer>
);

export default Footer;

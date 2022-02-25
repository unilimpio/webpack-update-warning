import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import HomeIcon from "../../svg/HomeIcon"
import Button from "../Button"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: "";
    color: transparent;
    background: #075985;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {

    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 15px 0;
    font-size: 1rem;
    :after {
      position: absolute;
      bottom: 15%;
      left: 0;
      right: 0;

    }

  }
`
const NavbarLinks = () => {
  return (
    <>

    <div className="flex-col">
      <div className="flex-1">
        <span className="text-gray-600 text-xs">Version del sitio: </span> <Link to="/" className="text-gray-600 text-xs">Ecuador</Link><span className="text-gray-600 text-xs"> | International</span>
      </div>
      <div className="flex-1">
        <NavItem to="/export/home" className="hover:no-underline"><HomeIcon className="h-6 w-6"/></NavItem>
        <NavItem to="/export/products" className="hover:no-underline">Productos de Limpieza</NavItem>


        <NavItem to="/about-us" className="hover:no-underline">Acerca de</NavItem>


        <Link to="/export/contact">
          <Button className="text-white rounded-md transition duration-300 ease-in-out bg-primary-lighter shadow-md hover:bg-primary-xlighter hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 focus:outline-none" size="sm" >Contáctenos</Button>
        </Link>
       </div>


      </div>
    </>
  )
}

export default NavbarLinks

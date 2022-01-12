import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
    font-size: 1.2rem;

  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/" className="hover:no-underline">Inicio</NavItem>
      <NavItem to="/productos" className="hover:no-underline">Productos</NavItem>
      <Link to="https://shop.unilimpio.com/">
        <Button className="rounded-md px-4 text-white transition duration-300 ease-in-out bg-secondary-default shadow-md hover:bg-secondary-lighter hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 focus:outline-none" size="sm" >Tienda Hogar</Button>
      </Link>
      <NavItem to="/soluciones" className="hover:no-underline">Soluciones</NavItem>
      <NavItem to="/servicios" className="hover:no-underline">Servicios</NavItem>
      <NavItem to="/contact" className="hover:no-underline">Contáctenos</NavItem>
      <NavItem to="/blog" className="hover:no-underline">Blog</NavItem>

      <Link to="/contact#leadform">
        <Button className="text-white rounded-md transition duration-300 ease-in-out bg-primary-lighter shadow-md hover:bg-primary-xlighter hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 focus:outline-none" size="sm" >Comuníquese con un asesor</Button>
      </Link>

    </>
  )
}

export default NavbarLinks

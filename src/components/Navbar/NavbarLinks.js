import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import HomeIcon from "../../svg/HomeIcon"

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



        <NavItem to="/" className="hover:no-underline"><HomeIcon className="h-6 w-6"/></NavItem>
        <NavItem to="/" className="hover:no-underline">Link 1</NavItem>

        <NavItem to="/blog" className="hover:no-underline">Blog</NavItem>




    </>
  )
}

export default NavbarLinks

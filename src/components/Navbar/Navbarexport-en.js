import React, { useState, useEffect } from "react"
import styled from "styled-components"
import SiteverLinks from "./SiteverLinksexport-en"
import NavbarLinks from "./NavbarLinksexport-en"
import Logo from "./Logo"


const Navigation = styled.nav`
  height: 12vh;
  display: flex;
  justify-content: flex-start;
  background-color: #fff;
  position: relative;


  font-size: 0.8em;
  font-weight: lighter;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 2vw ;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {

    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 1vw;

  @media (max-width: 768px) {
    display: flex;


  }
`

const Navbox = styled.div`
  display: flex;
  height: 92%;

  align-items: center;


  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 4vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`
const Navboxgrow = styled.div`
  display: flex;
  height: 92%;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;



  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;

    padding-top: 4vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 25px;
  height: 1px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 25px;
    height: 1px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = ({siteVerOpts, langOpts}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleVisibility = () => {

      setNavbarOpen(false);

  };

  useEffect(() => {
    window.addEventListener("resize", toggleVisibility);
  });

  return (
    <Navigation>
      <Logo />
      <Toggle className="absolute right-2"
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox className="bg-gradient-to-br from-neutral-300 via-white to-neutral-300">

            <div className="">
              <SiteverLinks  siteVerOpts={siteVerOpts} langOpts={langOpts}/>
            </div>

              <NavbarLinks />


        </Navbox>
      ) : (
        <Navboxgrow open>
        <div className="flex-col">
          <div className="absolute right-0 -top-2">
            <SiteverLinks  siteVerOpts={siteVerOpts} langOpts={langOpts}/>
          </div>
          <div className="">
            <NavbarLinks />
          </div>
        </div>
        </Navboxgrow>
      )}
    </Navigation>
  )
}

export default Navbar

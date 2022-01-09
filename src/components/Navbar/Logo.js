// Logo.js
import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"
import LogoUni from '../../svg/LogoUni'

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 90px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 36px;
  }
`
const Logo = () => {
  

  return (
    <LogoWrap className ="flex-shrink" as={ Link } to="/">
      <LogoUni className="h-12 sm:h-16 md:h-20 xl:h-22"/>
    </LogoWrap>
  )
}

export default Logo
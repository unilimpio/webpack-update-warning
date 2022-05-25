// Logo.js
import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 90px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 36px;
  }
`
const Logo = ({target}) => {


return (
    <LogoWrap className ="flex-shrink" as={ Link } to={`/${target}`}>
    </LogoWrap>
  )
}

export default Logo

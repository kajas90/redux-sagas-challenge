import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  margin-left: auto;
  
  & > * {
    margin: 0 10px;
  }
`

const Menu = ({ children}) => <NavWrapper>{children}</NavWrapper>

export default Menu

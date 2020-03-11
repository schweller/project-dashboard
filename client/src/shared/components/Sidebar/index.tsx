import React from 'react';
import styled from 'styled-components';

const Sidebar = () =>
  <StyledNav>    
    <InnerNavigation>
      <li>Dashboard</li>
      <li>Epics</li>
      <li>Stories</li>
      <li>Projects</li>
    </InnerNavigation>
  </StyledNav>

const StyledNav =  styled.nav`
  background: pink;
  box-sizing: border-box;
  height: 100%;
  left: 0;
  overflow-y: auto;
  padding: 74px 0 0;
  position: fixed;
  top: 0;
  transition: background-color 120ms ease-in-out,padding-top .6s ease-in-out,width 250ms ease-in-out;
  width: 80px;
  // &:hover {
  //   width: 200px;
  // }
`

const InnerNavigation = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  > li {
    display: flex;
    padding: 10px 0;
    height: 60px;
    align-items: center;
    border-bottom: 1px solid black;
    &:hover {
      background: gray;
    }
  }
`

export default Sidebar;

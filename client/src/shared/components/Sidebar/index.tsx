import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faStickyNote
} from "@fortawesome/free-solid-svg-icons";

const dashboardIcon = <FontAwesomeIcon icon={faTachometerAlt} size="2x" />;
const storiesIcon = <FontAwesomeIcon icon={faStickyNote} size="2x" />;

const Sidebar = () => (
  <StyledNav>
    <InnerNavigation>
      <li>
        {dashboardIcon}
        <InnerNavigationLabel>Dashboard</InnerNavigationLabel>
      </li>
      <li>
        {storiesIcon}
        <InnerNavigationLabel>Stories</InnerNavigationLabel>
      </li>
    </InnerNavigation>
  </StyledNav>
);

const StyledNav = styled.nav`
  background: #f7f7f7;
  border-right: 1px solid #d0d0d0;
  box-sizing: border-box;
  height: 100%;
  left: 0;
  overflow-y: auto;
  padding: 74px 0 0;
  position: fixed;
  top: 0;
  transition: background-color 120ms ease-in-out, padding-top 0.6s ease-in-out,
    width 250ms ease-in-out;
  width: 80px;
  // &:hover {
  //   width: 200px;
  // }
`;

const InnerNavigation = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 10px;
    height: 60px;
    border-top: 1px solid #d0d0d0;
    color: purple;
    &:first-child {
      border: none;
    }
  }
`;

const InnerNavigationLabel = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  margin-top: 10px;
`;

export default Sidebar;

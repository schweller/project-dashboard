import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Sidebar from 'shared/components/Sidebar'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    min-height: 100%;
    min-width: 768px;
  }

  body {
    box-sizing: border-box;
    margin: 0;
  }
`

const App = () =>
  <>
    <GlobalStyle/>
    <AppHeader>
      <AppName>Project Dashboard</AppName>
      <AppDescription>An open-source dashboard built with React and Typescript.</AppDescription>
    </AppHeader>
    <AppContent>
      <Sidebar/>
    </AppContent>
  </>

const AppHeader = styled.div`
  display: flex;
  background: aqua;
  height: 64px;
  left: 0;
  position: fixed;
  top: 0;
  transition: top .6s ease-in-out;
  width: 100%;
  z-index: 10;
`

const AppContent = styled.div`
  display: flex;
`

const AppName = styled.h1`
  font-family: 'Major Mono Display', monospace;
  font-size: 24px;
  align-self: flex-end;
`

const AppDescription = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 300;
  align-self: flex-end;
`
export default App

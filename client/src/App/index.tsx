import React from 'react'
import styled from 'styled-components'

const App = () => 
  <div>
    <AppName>Project Dashboard</AppName>
    <AppDescription>An open-source dashboard built with React and Typescript.</AppDescription>
  </div>

const AppName = styled.h1`
  font-family: 'Major Mono Display', monospace;
  font-size: 24px;
`

const AppDescription = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 300;
`

export default App

import React from 'react'
import RandomPasswordGenerator from './Component/RandomPasswordGenerator';
import Watermark from './Component/Watermark';
import { MainWrapper } from './Style/Style';

const App = () => {
  return (
    <MainWrapper>
      <RandomPasswordGenerator />
      <Watermark />
    </MainWrapper>
  )
}

export default App
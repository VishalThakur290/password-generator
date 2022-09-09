import React from 'react';
import { WatermarkDetails } from '../Style/Style';

const Watermark = () => {
  return (
    <WatermarkDetails>Made with <span style={{ color: 'red' }}>&#10084;</span> by <a target="_blank" rel="noreferrer" href='https://www.instagram.com/vishal.thakur25/'>Vishal Thakur</a></WatermarkDetails>
  )
}

export default Watermark
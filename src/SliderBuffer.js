import Slider from './components/slider'
import images from './images';
import React ,{useState}from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar';

function SliderBuffer() {
  
  return (
    <>
    <div >
        <Slider slides={images}  autoPlay={3} />
    </div>
    
    </>
  );
}

export default SliderBuffer;

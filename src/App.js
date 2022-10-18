// import './App.css';
import Slider from './components/slider'
import images from './images';
import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar';
import SliderBuffer from './SliderBuffer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomepageBody from './components/HomepageBody'
import NavbarNew from './components/NavbarNew';
import { css, jsx } from '@emotion/core'

function App() {
  return (
    <div className="App">
      <Navbar
      />
      <SliderBuffer/>
      <HomepageBody/>
    </div>
  );
}

const dropCss= css`
.dropdown-menu {
  background: red;
  width: 50px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: start;
}

.dropdown-menu li {
  background: #1888ff;
  cursor: pointer;
}


.dropdown-menu.clicked {
  display: none;
}

.dropdown-link {
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: black;
  padding: 16px;
}
`

export default App;

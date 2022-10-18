/** @jsx jsx */
import React, { memo, useState }from 'react'
import { css, jsx } from '@emotion/core'
import Logo from '../img/ComponentTMP_0-image13.png'
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import MarketDropdown from './MarketDropdown';



function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [dropdownMarket, setDropdownMarket] = useState(false);
    

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
        setDropdown(false);
        } else {
        setDropdown(true);
        }
    };
    
    const onMouseEnterMarket = () => {
        if (window.innerWidth < 960) {
        setDropdownMarket(false);
        } else {
        setDropdownMarket(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
        setDropdown(false);
        } else {
        setDropdown(false);
        }
    };

    const onMouseLeaveMarket = () => {
        if (window.innerWidth < 960) {
        setDropdownMarket(false);
        } else {
        setDropdownMarket(false);
        }
    };




  return (
    <nav 
        css={css`
          width: 100%;
          background-color: transparent; 
          display: flex;
          position: absolute;
          z-index: 2;
          `} 
        className="navbar"
    >
            <div css={ContainerCSS} className="navbar-container">
                <a href="/" className="navbar-logo">
                    <img
                        css={css`
                            height: 30px;
                            margin-top: 12px;
                            margin-left: 80px;
                        `}
                        src={Logo}/>
                </a>
                <ul 
                    css={css`
                      float: right;
                      margin-right: 20px;
                      display: flex;
                      font-size: 14px;
                    `} 
                    className="nav-menu"
                >
                    <li css={ListCSS} className="nav-item"  onMouseEnter={onMouseEnterMarket} onMouseLeave={onMouseLeaveMarket}>
                        <a css={aCSS} >
                            Market Place <i css={css`color: #0097f4;`} className='fas fa-caret-down' />
                        </a>
                        {dropdownMarket && <MarketDropdown />}
                    </li>
                    <li css={ListCSS}  className="nav-item">
                        <a css={aCSS} href="/" className="nav-links">
                            About Us
                        </a>
                    </li>
                    <li css={ListCSS}  className="nav-item"  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <a css={aCSS} className="nav-links">
                            Resources <i css={css`color: #0097f4;`} className='fas fa-caret-down' />
                        </a>
                        {dropdown && <Dropdown />}
                    </li>
                    <li css={ListCSS}  className="nav-item">
                        <a css={aCSS} href="/" className="nav-links">
                            Pricing
                        </a>
                    </li>
                    <li css={ListCSS}  className="nav-item">
                        <a css={aCSS} href="/" className="nav-links">
                            Sign In
                        </a>
                    </li>
                    <li css={ListButtonCSS}  className="nav-item">
                        <a href="/" className="nav-links">
                            <button
                            css={css`
                                border-radius: 20px;
                                width: 120px;
                                margin-top: -4.5px !important;
                                height: 40px;
                                border-style: none;
                                background-color: #0097f4;
                                color: #ffffff;
                                font-weight: bold;
                            `}
                            >Sign Up</button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
  );
}

const ContainerCSS = css`
    width: 100vw;
    font-family: ArialMT, Arial;
    font-size: 13px;
`
const ListCSS = css`
    list-style-type: none;
    margin-top: 5px;
    margin-right: 30px;
    
    padding: 10px;
`
const ListButtonCSS = css`
    list-style-type: none;
    margin-right: 10px;
    right: 10px;
    padding: 5px;
`

const UlCSS = css`
    float: right;
    margin-right: 10px;
    display: flex;
`

const NavCSS = css`
    width: 100vw;
    color: transparent;
    position: absolute;
`
const NavMenuCSS = css`
    float: right;
    margin-right: 20px;
    right: 20px;
    padding-right: 20px;
`

const aCSS = css`
    text-decoration: none;
    color: black;
    font-weight: bold;
    margin-top: 2px;
`

const nCSS = css`
li{
  list-style-type: none;
  margin-top: 5px;
  margin-right: 10px;
  right: 10px;
  padding: 5px;
}

a{
  text-decoration: none;
}


.navbar-container{
  width: 100vw;
  
}



ul{
  float: right;
  margin-right: 10px;
  display: flex;
}

.navbar{
  width: 100vw;
  background-color: #f8f8f8;
  position: absolute;
} 
`
const dropCss= css`
.dropdown-menu {
  background: red;
  width: 200px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: start;
}

.navbar-container{
    width: 100vw;
    font-family: ArialMT, Arial;
    font-size: 13px;
}

.dropdown-menu li {
  background: #1888ff;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background: #5cabff;
}

.dropdown-menu.clicked {
  display: none;
}

.dropdown-link {
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #fff;
  padding: 16px;
}
`
export default Navbar



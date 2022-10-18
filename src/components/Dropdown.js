/** @jsx jsx */

import React, {memo, useState } from 'react';
import { css, jsx } from '@emotion/core'
// import { MenuItems } from './MenuItems';
// import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const MenuItems = [
    {
      title: 'Marketplace',
      path: '/marketplace',
      cName: 'dropdown-link',
      detail: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
    },
    {
      title: 'Blogstore',
      path: '/blogstore',
      cName: 'dropdown-link',
       detail: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
    },
    {
      title: 'Wallet',
      path: '/wallet',
      cName: 'dropdown-link',
       detail: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
    }
  ];

  return (
    <>
      <ul
        css={css`
          position: absolute; 
          box-shadow: 0 2px 3px 0 rgb(34 36 38 / 15%); 
          margin-left: -100px; 
          border-radius: 15px; 
          width: 500px; 
          margin-top: 15px; 
          background-color:#ffffff; 
          border: 1px solid rgba(34,36,38,.15);
          display: flex;
          font-family:SegoeUI-Bold, Segoe UI;
          `}
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >

        <div
          css={
               css`
                    margin-right: 30px;
                    margin-top: 30px;
               `
             }
        >
          <div
            css={
               css`
                    font-weight: bold;
                    margin-bottom: 10px;
                    font-size: 19px;
               `
             }
          >
            Resources
          </div>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </div>
        <div
          css={
               css`
                background-color: #e5f5f7;
                padding-bottom: 30px;
                padding-left: 50px;
                border-radius:0px 15px 15px 0px; 
               `
             }
        >
        {MenuItems.map((item, index) => {
          return (
            <li 
             css={
               css`list-style: none;
                    margin-top: 30px;
                    margin-right: 30px;
               `
             }
            key={index}>
              <a
                css={
                  css`text-decoration: none;
                      color: #0097f4;
                      font-size: 14px;
                      font-weight: 600;
                  `
                }
                className={item.cName}
                href={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </a>
              <div
                css={
                  css`
                        margin-top: 10px;
                  `
                }
              >
                {item.detail}
              </div>
            </li>
          );
        })}
        </div>
      </ul>
      <div
        css={css`
            height: 10px;
            width: 10px;
            background-color: #ffffff; 
            position: absolute;
            border-left: 1px solid rgba(34,36,38,.15);
            border-top: 1px solid rgba(34,36,38,.15);
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            margin-top: 10px;
        `}
      >
      </div>
    </>
  );
}

const dropCss= css`
.dropdown-menu {
  background: red;
  width: 200px;
  position: absolute;
  margin-top: 80px;
  list-style: none;
  text-align: start;
}



.dropdown-menu li {
  background: #1888ff;
  cursor: pointer;
  float: right !important;
  left: 0 !important;
  margin-left: -30px !important;
  margin-top: 20px
}


.dropdown-menu.clicked {
  display: none;
}

.dropdown-link {
  display: block;
  text-align: center;
  text-decoration: none;
  color: black;
  padding: 16px;
  left: 0 !important;
  margin-left: -30px !important;
  margin-top: 20px
}
`

export default Dropdown;

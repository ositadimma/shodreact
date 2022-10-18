/** @jsx jsx */
import React, { memo } from 'react'
import { css, jsx } from '@emotion/core'
import SliderImage from '../img/ComponentTMP_0-image.png'

const Slide = ({ content, width }) => {
  return (
    <div
      css={css`
        height: 100%;
        width: ${width}px;
        padding-top: 100px;
        background-color: #f8f8f8;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        font-family: SegoeUI-Bold, Segoe UI;
      `}
    >
      <div
        css={css`
        display: flex;
        `}
      >
      <div> 
      <div
        css={css`
        margin-top: 80px;
        margin-left: 80px;
        width: 40vw;
        letter-spacing: 1px;
        font-size: 50px;
      `}>Modern Technology for<br/> eCommerce and Business</div>
      <div
        css={css`
        margin-top: 30px;
        margin-left: 80px;
        border-radius: 50px;
        width: 100px;
        font-size: 18px;
        height: 25px;
      `}
      >{content[0]}<br/>{content[1]}</div>
      <div
        css={css`
        display: flex;
        `}
      >
        <button 
          css={css`
          margin-top: 80px;
          margin-left: 80px;
          margin-right: 20px;
          width: 200px;
          height: 50px;
          border-radius: 50px;
          border-style: solid;
          border-color: #45bb64;
          border-width: 5px;
        `}
        >Learn More</button>
        <button
          css={css`
          margin-top: 80px;
          height: 50px;
          border-radius: 50px;
          width: 200px;
          border-style: solid;
          border-color: #0097f4;
          border-width: 5px;
        `}
        >Sign Up</button>
      </div>
      </div> 
      <div>
        <img 
          css={css`
            height: 250px;
            width: 500px;
            margin-top: 50px;
            margin-left: 120px
          `}
          src={SliderImage}></img>
        </div>
     </div>
      
    </div>
  )
}

export default memo(Slide)

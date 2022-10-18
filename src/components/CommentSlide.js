/** @jsx jsx */
import React, { memo } from 'react'
import { css, jsx } from '@emotion/core'
import imageIcon from '../img/image.png'


const Slide = ({ content, width }) => {
  return (
    <div
      css={css`
        height: 100%;
        width: ${width}px;
        padding-top: 120px;
        background-size: cover;
        background-repeat: no-repeat;
        font-family: SegoeUI-Bold, Segoe UI;
        display: flex;
        margin-left: 50px;
      `}
    >
      <div
        css={css`
        height: 70px;
        width: 350px;
        padding-top: 120px;
        font-family: SegoeUI-Bold, Segoe UI;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
       
        margin-right: 40px;
      `}
      >
      <div
        css={css`
            padding-left: 25px;
        `}
      >
        <div 
            css={css`
            margin-top: -100px;
            display: flex;
        `}
        >
            <div>
                <img
                  css={
                    css`
                      height: 60px;
                      width: 60px;
                    `
                  }
                  src={imageIcon}
                ></img>
            </div>
            <div
              css={css`
                      margin-left: 20px;
                      font-size: 15px;
                      margin-top: 13px;
                  `}
            >
                <div
                  css={
                    css`
                     font-weight: bold;
                    `
                  }
                >
                  Joseph Jackson
                </div>
                <div
                  css={
                    css`
                    font-size: 13px;
                    `
                  }
                >
                  Product Manager
                </div>
            </div>
        </div>
        <div>
            Auto Flow makes it easy to draw stunning<br/> flows for creating WireFrames, UserFlows,<br/> FlowCharts and Design guides. With
        </div>
      </div>
      </div>
      <div
        css={css`
        height: 70px;
        width: 350px;
        padding-top: 120px;
        font-family: SegoeUI-Bold, Segoe UI;
        
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
      `}
      >
        <div
           css={css`
              padding-left: 25px;
          `}
        >
            <div 
            css={css`
            margin-top: -100px;
            display: flex;
        `}
        >
            <div>
                <img
                  css={
                    css`
                      height: 60px;
                      width: 60px;
                    `
                  }
                  src={imageIcon}
                ></img>
            </div>
            <div
              css={css`
                      margin-left: 20px;
                      font-size: 15px;
                      margin-top: 13px;
                  `}
            >
                <div
                  css={
                    css`
                     font-weight: bold;
                    `
                  }
                >
                  Joseph Jackson
                </div>
                <div
                  css={
                    css`
                     font-size: 13px;
                    `
                  }
                >Product Manager</div>
            </div>
        </div>
        <div>
            Auto Flow makes it easy to draw stunning<br/> flows for creating WireFrames, UserFlows,<br/> FlowCharts and Design guides. With
        </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Slide)

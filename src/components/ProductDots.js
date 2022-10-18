/** @jsx jsx */
import React, { memo } from 'react'
import { css, jsx } from '@emotion/core'

const Dot = ({ active }) => {
  return (
    <span
      css={css`
        padding: 5px;
        margin-right: 5px;
        cursor: pointer;
        border-radius: 50%;
        background: ${active ? '#0097f4' : '#e5f5f7'};
        

      `}
    />
  )
}

const MemoDot = memo(Dot)

const Dots = ({ slides, activeSlide }) => {
  return (
    <div
      css={css`
        position: absolute;
        bottom: 25px;
        width: 100%;
        display: flex;
        margin-left: 50px;
      `}
    >
      {slides.map((slide, i) => (
        <MemoDot key={slide} active={activeSlide === i} />
      ))}
    </div>
  )
}

export default Dots

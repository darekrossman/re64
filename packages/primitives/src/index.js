import React from 'react'
import styled from 'react-emotion'
import {
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
  ratio,
  space,
  width,
  fontSize,
  color,
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  flex,
  justifySelf,
  alignSelf,
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  position,
  borders,
  borderColor,
  borderRadius,
  responsiveStyle
} from 'styled-system'

export const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${flex}
  ${justifySelf}
  ${alignSelf}
  ${display}
  ${maxWidth}
  ${minWidth}
  ${height}
  ${maxHeight}
  ${minHeight}
  ${size}
  ${ratio}
  ${position}
  ${borders}
  ${borderColor}
  ${borderRadius}
`

export const Flex = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flexWrap}
  ${flexBasis}
  ${flexDirection}
  ${flex}
  ${justifySelf}
  ${alignSelf}
  ${display}
  ${maxWidth}
  ${minWidth}
  ${height}
  ${maxHeight}
  ${minHeight}
  ${size}
  ${ratio}
  ${position}
  ${borders}
  ${borderColor}
  ${borderRadius}
`
Flex.defaultProps = {
  display: `flex`
}

export const Input = styled.input`
  appearance: none;
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${flex}
  ${justifySelf}
  ${alignSelf}
  ${display}
  ${maxWidth}
  ${minWidth}
  ${height}
  ${maxHeight}
  ${minHeight}
  ${size}
  ${ratio}
  ${position}
  ${borders}
  ${borderColor}
  ${borderRadius}
`
Input.defaultProps = {
  border: 0,
  p: 0,
  m: 0,
  minWidth: 0,
  fontSize: '1rem',
  fontFamily: 'inherit'
}

export const Button = styled.button`
  appearance: none;
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${flex}
  ${justifySelf}
  ${alignSelf}
  ${display}
  ${maxWidth}
  ${minWidth}
  ${height}
  ${maxHeight}
  ${minHeight}
  ${size}
  ${ratio}
  ${fontFamily}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
  ${letterSpacing}
  ${position}
  ${borders}
  ${borderColor}
  ${borderRadius}
`
Button.defaultProps = {
  display: 'inline-block',
  bg: 'transparent',
  height: 40,
  px: 3,
  fontSize: 1,
  fontWeight: `bold`,
  border: 0
}

export const Text = styled.p`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${flex}
  ${justifySelf}
  ${alignSelf}
  ${display}
  ${maxWidth}
  ${minWidth}
  ${height}
  ${maxHeight}
  ${minHeight}
  ${size}
  ${ratio}
  ${fontFamily}
  ${textAlign}
  ${lineHeight}
  ${fontWeight}
  ${letterSpacing}
  ${position}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${responsiveStyle({
    prop: `fontStyle`,
    cssProperty: `fontStyle`
  })}
`
Text.defaultProps = {
  m: 0,
  p: 0,
  fontWeight: 400,
  fontSize: 1,
  lineHeight: '1.5em'
}

export const Heading = ({ is = `h1`, ...props }) =>
  React.createElement(Text.withComponent(is), props)
Heading.defaultProps = {
  m: 0,
  p: 0,
  fontWeight: 400,
  fontSize: 2,
  lineHeight: '1.5em'
}

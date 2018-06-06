import React from "react"
import styled from "react-emotion"
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
  responsiveStyle,
} from "styled-system"

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
  display: `flex`,
}

export const Input = styled.input`
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

export const Button = styled.button`
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
  height: 40,
  px: 3,
  fontWeight: `bold`,
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
    cssProperty: `fontStyle`,
  })}
`

export const Heading = ({ is = `h1`, ...props }) =>
  React.createElement(Text.withComponent(is), props)

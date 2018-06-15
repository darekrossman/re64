import facepaint from 'facepaint'
import injectGlobalStyles from './global-style'

// Breakpoints
const breakpoints = ['40em', '52em', '64em']

export const mq = facepaint(breakpoints.map(bp => `@media(min-width: ${bp})`))

// Typographic Scale (numbers are converted to px values)
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72]

// Spacing Scale (used for margin and padding)
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const colors = {
  primary: '#71a637',
  secondary: '#f47b20',
  tertiary: '#1A75BB',
  gray: ['#111', '#4e4e4e', '#aaa', '#ddd', '#f5f5f5', '#fafafa']
}

const theme = {
  breakpoints,
  colors,
  fontSizes,
  space
}

injectGlobalStyles(theme)

export default theme

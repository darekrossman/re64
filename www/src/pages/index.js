import React from 'react'
import styled from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import Playground from 'component-playground'
import theme from '../theme'
import { Box, Flex, Text, Button } from '@re64/primitives'
import Example from 'raw-loader!../../../docs/code/code.example'

const Wrapper = styled(Box)`
  .playground {
    display: flex;
  }
  .playgroundCode {
    flex: 1;
  }
  .playgroundPreview {
    flex: 1;
    background: #fff;
  }
`

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <Text>re64</Text>
        <Playground
          codeText={Example}
          context={{}}
          scope={{ React, Box, Text, ThemeProvider, theme }}
        />
      </Wrapper>
    )
  }
}

const ThemedHome = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
)

export default ThemedHome

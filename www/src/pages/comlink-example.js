import React from 'react'
import styled from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'
import { Box, Flex, Text, Button } from '@re64/primitives'
import Example from 'raw-loader!../../../docs/code/code.example'

import { Comlink } from '../comlink.es6.min'

const initApi = (name, src, root) => {
  window[name] = new Promise(function(resolve) {
    var iframe = document.createElement('iframe')
    // iframe.style.visibility = 'hidden'
    iframe.src = src
    iframe.style.border = 0
    root.appendChild(iframe)
    iframe.onload = function iframeLoaded() {
      resolve(Comlink.proxy(iframe.contentWindow))
    }
  })
}

const Wrapper = styled(Box)`
  pre {
    color: #fff;
    margin: 0;
  }
`

class ComlinkExampleComponent extends React.Component {
  state = { info: null }

  async componentDidMount() {
    initApi('myComlinkApi', 'https://bow-tire.glitch.me', this.root)

    let i = 0
    while (!window.myComlinkApi && i++ < 20) await new Promise(a => setTimeout(a, 20))
    const api = await window.myComlinkApi

    await api.info(Comlink.proxyValue(this.receiveRemoteInfo))
  }

  receiveRemoteInfo = info => {
    console.log(info)
    // this.setState({ info: JSON.parse(info) })
  }

  render() {
    const { info } = this.state
    return (
      <Wrapper height="100vh" bg="yellow">
        <Flex flexDirection="column" align="stretch" bg="#2b2b2b" height="100vh">
          <Box
            fontSize="0.9em"
            py={3}
            px={4}
            css={`
              overflow: auto;
            `}>
            <pre>
              <code>OnlyNaturalPet Proxy Sandbox</code>
            </pre>
          </Box>
          <Box
            flex={1}
            width="100%"
            innerRef={n => (this.root = n)}
            css={`
              iframe {
                width: 100vw;
                height: 100%;
                background: #fff;
              }
            `}
          />
        </Flex>
      </Wrapper>
    )
  }
}

const ComlinkExample = () => (
  <ThemeProvider theme={theme}>
    <ComlinkExampleComponent />
  </ThemeProvider>
)

export default ComlinkExample

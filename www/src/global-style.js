import { injectGlobal } from 'emotion'

export default theme => {
  injectGlobal`
    @import "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/codemirror.min.css";
    @import "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/theme/monokai.min.css";

    html {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased; 
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    body {
      background: ${theme.colors.gray[0]};
      color: #f2f2f2;
    }

    body, h1, h2, h3, h4, h5, h6, p, ol, ul, input, button, blockquote {
      margin: 0;
      padding: 0;
      font-weight: 400;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 16px;
      line-height: 1.5;
    }

    ol, ul {
      list-style: none;
    }

    input {
      border: 0;
      padding: 0;
      margin: 0;
    }

    input[type="text"] {
      appearance: none;
      min-width: 0;
      font-size: 1rem;
      font-family: inherit;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    button {
      appearance: none;
      background-color: transparent;
      border: 0;
      padding: 0;
      text-align: center;
      display: inline-block;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    svg {
      display: block;
      margin: auto;
    }
  `
}

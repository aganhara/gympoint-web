import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;

    &.btn {
      padding:6px;
      border-radius: 4px;

      &.btn-primary {
        background: #de3b3b;
        border-color: #de3b3b !important;
        box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset, rgb(222, 59, 59) 0px 0px !important;
        color: #fff;
      }
    }
  }

  ul {
    list-style: none;
  }
`;

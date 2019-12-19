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
        background: #ee4d64;
        border-color: #ee4d64 !important;
        box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset, rgb(238, 77, 100) 0px 0px !important;
        color: #fff;
        /* width: 100%; */
      }
    }
  }

  ul {
    list-style: none;
  }

  input[readonly] {
    background: #eee;
  }

  .sweet-alert.answer-dialog {
    textarea {
      font: 16px 'Roboto', sans-serif;
      width: 100%;
      border-radius: 4px;
      padding: 10px;
      color: #595959;
    }
    .btn-primary {
      width: 100%;
      margin-right: 0!important;
    }
  }
`;

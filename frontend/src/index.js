// =============== react =============== 
import React from 'react';
import ReactDOM from 'react-dom';
// ============== styles ===============
import 'antd/dist/antd.css'
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from './styles/GlobalStyle'
// ============ translation ============
import './i18n';

// ============== routes ===============
import Routes from "./routes";



ReactDOM.render(
    <>
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </>,
  document.getElementById('root')
);

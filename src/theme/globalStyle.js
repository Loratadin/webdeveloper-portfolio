import { injectGlobal } from 'styled-components';
import media from './media';
import { black } from './variables';

/* eslint-disable */
injectGlobal`
   @import url('https://fonts.googleapis.com/css?family=Orbitron');
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
   img, table, tr, td {
    border: none;
   }
   ol, ul {
    list-style-type: none;
   }
   table {
    border-collapse: collapse;
    border-spacing: 0;
   }
   body {
    font-family: 'Orbitron', sans-serif;
    font-size: 14px;
    color: ${black};
    line-height: 1.8;
    ${media.tablet`
    font-size: 18px;
    `}
    ${media.desktop`
    font-size: 20px;
    `}
    ${media.monitor`
    font-size: 26px;
    `}
   }
   #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
   }
`
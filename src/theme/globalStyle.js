import { injectGlobal } from 'styled-components';
import media from './media';

/* eslint-disable */
injectGlobal`
   @import url('https://fonts.googleapis.com/css?family=Orbitron');
   body {
    font-family: 'Orbitron', sans-serif;
    font-size: 14px;
    color: #424242;
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
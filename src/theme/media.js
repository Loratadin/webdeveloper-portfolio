import { css } from 'styled-components';

const sizes = {
   phone: 376,
   tablet: 768,
   desctop: 992,
   monitor: 1170
};

function phone(...args) {
 return css`
    @media(max-width: ${sizes.phone}px) {
     ${css(...args)}
    }
 `;
}

function tablet(...args) {
 return css`
    @media(max-width: ${sizes.tablet}px) {
     ${css(...args)}
    }
 `;
}

function desctop(...args) {
 return css`
    @media(max-width: ${sizes.desctop}px) {
     ${css(...args)}
    }
 `;
}

function monitor(...args) {
 return css`
    @media(max-width: ${sizes.monitor}px) {
     ${css(...args)}
    }
 `;
}

const media = {
 phone
};

export default media;
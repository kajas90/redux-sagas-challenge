import { css } from 'styled-components';

const sizes = {
  desktop: 1000,
  tablet: 700
};

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return accumulator;
}, {});

export default media;

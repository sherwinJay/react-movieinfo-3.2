import { css, cx } from '@emotion/css';

// movie content css
export const contentContainer = css`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2.5em 1em;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-template-rows: repeat(2, auto);
  grid-gap: 1.5em;

  & h4{
   color: #c9173d; 
  }
  
  @media screen and (max-width: 600px) {
    max-width: 100%;
    overflow: auto;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    /* grid-template-rows: 1fr 1fr; */
  }

  @media screen and (max-width: 480px) {
    padding: 1.25em 1em;
  }
`;

export const castContainer = css`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;

  @media screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 2;
    max-width: 600px;
    overflow: auto;
  }
`;
export const sideContentContainer = css`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;

  @media screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;
export const recommendationContainer = css`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;

  @media screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`;
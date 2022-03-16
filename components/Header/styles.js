import { css, cx } from '@emotion/css';

export const mainHeaderContainer = css`
  background-color: #1b1f3a;
  align-self: start;
`;
export const mainHeader = css`
  display: grid;
  padding: 1em;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: 70% 30%;
  align-items: center;

  /* @media screen and (max-width: 480px) {
    width: 100%;
  } */
`;
export const mainLogo = css`
  color: #c9173d;
  font-weight: bold;
  font-size: 2em;
`;

export const searchContainer = css`
  display: block;
    @media screen and (max-width: 900px) {
      display: none !important;
    }
`;

export const mobileMenu = css`
  display: none;
  justify-self: end;
    @media screen and (max-width: 900px) {
      display: block;
    }
`;
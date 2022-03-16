import { css, cx } from '@emotion/css';

export const sidebar = css`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1em;
  color: #fff;
  height: fit-content;

  & h4 {
    margin: 0;
    line-height: 28px;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;

    & h2 {
      font-size: 1.15rem;
    }

  }
`;
export const prodCompany = css`
  margin-bottom: 0.3em;
`;
export const crewContainer = css`
  margin-bottom: 0.6em;

`;
export const crewJob = css`
  font-style: italic;
  font-size: 0.8rem;
  line-height: 0.9em;

  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
  }
`;
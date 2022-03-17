import { css, cx } from '@emotion/css';

export const displayContent = (showContent) => css`
  display: ${showContent ? "block" : "none"};
  color: #000;
 `;

export const formContainer = css`
  position: relative;
`;
export const inputStyle = css`
  width: 100%;
  padding: 0.6em 1em;
  border-radius: 1em;
  border: 1px solid #000;
  outline: none;
  & :focus{
    outline: none;
  }
`;
export const movieListContainer = css`
  position: absolute;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  z-index: 5;
  overflow: hidden;
  margin-top: 5px;


  & li a{
    padding: 0.4em 1.5em;
    display: block;
    border-bottom: 1px solid #eee;

    &:hover{
      background-color: #dedede;
    }
  }
`;
export const noResult = css`
  padding: 20px;
`;

export const mediaType = css`
  font-size: 0.7rem;
  font-style: italic;
  color: #777;
`;
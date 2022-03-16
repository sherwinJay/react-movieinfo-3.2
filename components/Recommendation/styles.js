import { css, cx } from '@emotion/css';

export const recommendationTitle = css`
  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const recommendContainer = css`

  overflow-x: scroll;
  padding: 2.5em 1em;
  color: #fff;
  transition: all 0.8s ease-in-out;

  & h2 {
    margin-top: 0;
  }

  &::-webkit-scrollbar{
    height: 14px;
  }
  &::-webkit-scrollbar-track{
    border: 2px #070717 solid;
    box-shadow: inset 0 0 10px #070717;
    background-color: #0C0B20;
  }
  &::-webkit-scrollbar-thumb{
    background: linear-gradient(#f14066, #c9173d);
    border-radius: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
    &::-webkit-scrollbar{
      height: 7px;
    }
  }
`;


export const recommendThumbnailContainer = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1em;
  width: fit-content;
`;

export const recommendThumbnailInfo = css`

  background-color: #1c1a3e;
  border-radius: 0.7em;
  overflow: hidden;

`;

export const recommendThumbnails = css`

  position: relative;
  min-width: 18.7em;
  min-height: 10.5em;
  transition: all .5s ease-in-out;
 
  & img {
    min-height: 10.5em;
    inset: 100% 0 0 50% !important;
  }

`;

export const recommendThumbnailsImg = css`
  /* width: 150px; */
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%,-50%);
  object-fit: cover;
  top: 50%;
  left: 50%;
  position: absolute;
`;


export const noImg = css`
  /* width: 300px;
  height: 169px; */
  height: 10.5em !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f14066;
  margin-bottom: 6px;
`;

export const thumbnailTitle = css`
  padding: 0.5em 0.5em 0.9em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

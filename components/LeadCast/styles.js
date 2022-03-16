import { css, cx } from '@emotion/css';

export const leadCastTitle = css`
  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const castContainer = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1em;
  overflow-x: scroll;
  padding-bottom: 1.5em;
  color: #fff !important;


  & li {
    background-color: #1c1a3e;
    border-radius: 0.7em;
    overflow: hidden;
    min-width: 9.6em;
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
    border-radius: 0.5em;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
    &::-webkit-scrollbar{
      height: 7px;
    }
  }
`;

export const castImgContainer = css`
  position: relative;
  overflow: hidden;
  transition: all .5s ease-in-out;

`;

export const castImg = css`
  /* width: 150px; */
  width: 100%;
  height: 100%;
  transform: translate(-50%,-50%);
  object-fit: cover;
  top: 50%;
  left: 50%;
  position: absolute;

`;

export const noCastImg = css`
  /* height: 231px;
  max-height: 231px;
  width: 154px; */
  height: 14.45em !important;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f14066;
`;

export const castName = css`
  font-weight: bold;
`;

export const castNameContainer = css`
  padding: 7px 9px;
  line-height: 18px;
  & p {
      font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    & p {
      font-size: 11px;
    }
  }
  
`;

export const noCast = css`
  background: none !important;
`;
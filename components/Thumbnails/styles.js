
import { css, cx } from '@emotion/css';

export const categoryTitleContainer = css`
  color: #c9173d;
  font-size: 1.25rem;
  margin: 0.5em 0;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    margin-top: 1.2em;
  }
`;

export const thumbnailsContainer = css`
  display: grid;
  /* grid-auto-flow: column; */
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 15px;
  transition: 0.2s all ease-in-out;
  color: #fff;
  min-height: 230px;

  @media screen and (max-width: 900px) {
    min-height: 175px;
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto auto;
    min-height: 300px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
    min-height: 200px;
  }
`;

export const thumbnailsContainer2 = css`
  display: grid;
  grid: 180px 180px / repeat(5, 1fr);
  grid-gap: 15px;
  transition: 0.2s all ease-in-out;
  color: #fff;

  & img {
    height: 100% !important;
  }

  & > li:first-child{
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  } 
  
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 130px);

    & > li:first-child{
      grid-column-start: 1;
      grid-column-end: 4;
    } 
  }

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 80px);
    font-size: 0.5rem;

  }
`;

export const thumbnailContainer = css`
  position: relative;
  border-radius: 0.5em;
  overflow: hidden;
  min-height: 100%;
  max-height: 225px;
  
  &:hover > div {
    background-color: rgba(0,0,0,0.7);
    display: grid;
    place-content: center;
  }

  & img {
    min-height: 225px;
    inset: 100% 0 0 50% !important;
  }
`;

export const thumbnailImgContainer = css`
  position: relative;
  border-radius: 0.5em;
  overflow: hidden;
  min-height: 100%;
  max-height: 225px;
  transition: all .5s ease-in-out;
  
  &:hover > div {
    background-color: rgba(0,0,0,0.7); 
    display: grid;
    place-content: center;
  }

  & img {
    min-height: 225px;
    inset: 100% 0 0 50% !important;
  }
`;

export const thumbnailImg = css`
  /* width: 150px; */
  width: 100%;
  height: 100%;
  transform: translate(-50%,-50%);
  object-fit: cover;
  top: 50%;
  left: 50%;
  position: absolute;
`;

export const thumbnailInfo = css`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.6em;
  display: none;
  width: 100%;
  height: 100%;
  transition: all .5s ease-in-out;
  text-align: center;
  
  & h4 {
    font-size: 0.8rem;
    position: absolute;
    top: 2em;
    left: 0.5em;
  }

  & p {
    padding: 0 1rem;
  }

  @media screen and (max-width: 480px) {
    & p {
      display: none;
    }
  }
`;

export const viewBtn = css`
  background-color: #c9173d;
  padding: 0.3em 1em;
  width: auto;
  margin: 0.5em auto;
  border-radius: 0.5em;
  text-align: center;

  @media screen and (max-width: 480px) {
      white-space: nowrap;
      padding: 0.3em 0.4em;
  }
`;
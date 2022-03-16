import { css, cx } from '@emotion/css';

export const bannerWrapper = css`
  height: 520px;
  position: relative;
  background-color: #000;
  & img {
      opacity: 0.5;
  }
  & nav.awssld__bullets {
    position: absolute;
    bottom: 15px !important;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    & button {
      background-color: #c9173d;
    }
  }

  @media screen and (max-width: 900px) {
    height: auto;
    font-size: 0.75rem;
  }

  @media screen and (max-width: 480px) {
    & nav.awssld__bullets {
      position: absolute;
      bottom: 5px !important;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
    }

    & nav.awssld__bullets button {
      width: 8px;
      height: 8px;
    }

  }
  
`;
export const movieTitle = css`
  font-size: 3.5rem;
  line-height: 3rem;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 900px) {
    font-size: 2rem;
    line-height: 1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
    line-height: 0.5rem;
  }
  
`;
export const movieDetails = css`
  position: relative;
  z-index: 3;
`;
export const movieOverview = css`
  color: #fff;
  padding: 10px 20px;
  width: 800px;
  margin: 0 auto;
  line-height: 22px;
  text-align: center;
  position: relative;
  z-index: 3;

  @media screen and (max-width: 900px) {
    width: 85%;
    max-height: 125px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;
export const trailer = css`
  color: #fff;
  padding: 10px 15px;
  margin: 10px auto;
  border: 1px #fff solid;
  border-radius: 20px;
  text-align: center;
  display: block;
  width: fit-content;
  position: relative;
  z-index: 3;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: #c9173d;
    border: 1px #c9173d solid;
  }
`;
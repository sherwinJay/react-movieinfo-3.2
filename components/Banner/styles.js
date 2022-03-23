import { css, cx } from '@emotion/css';

export const bannerBg2 = css`
  padding: 1.8em;

  @media screen and (max-width: 600px) {
   padding: 0;
  }
`;

export const bannerContainer = css`
  display: grid;
  grid-template-columns: 280px fit-content(100%);
  grid-gap: 1em;
  max-height: 480px;
  height: 480px;

  & p{
    line-height: 1.35rem;
  }


  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
    grid-template-rows: 1fr;
    align-items: center;
    overflow: hidden;

    & > span {
      display: none !important;
    }

  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    max-height: 400px;
    height: 400px;
  }
`;

export const bannerInfo = css`
  color: #fff;
  & h2 {
    margin: 0.4em 0;
    font-size: 2.4rem;
  }

  @media screen and (max-width: 900px) {
    & h2 {
      margin-top: 0;
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 480px) {
    & h2 {
      margin-top: 0;
      font-size: 1.2rem;
    }
  }
`;
export const moviePoster = css`
  border-radius: 20px;
  width: 280px;
  height: 420px;
  max-height: 420px;
  overflow: hidden;

  @media screen and (max-width: 900px) {
    display: none !important;
  }
`;
export const noMoviePoster = css`
  width: 280px;
  height: 420px;
  background-color: #f14066;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  display: grid;

  @media screen and (max-width: 900px) {
    display: none !important;
    width: 0;
    height: 0;
  }
`;
export const iconWrapper = css`
  display: flex;
  align-items: center;
  margin: 1.6em 0;
  line-height: 1.2em;
  & ${'.MuiSvgIcon-root'}{
   font-size: 2.35rem;
   color: #c9173d;
  }
  & > span {
    margin: 0 2em;
  }
`;

export const taglineContainer = css`
  margin-bottom: 0.3em;
  font-size: 1.2rem;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.5em;
  }
`;

export const crewWrapper = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  margin-top: 1.5em;
  & > li p:first-child{
    font-weight: bold;
    line-height: 1.3em;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const crewDepartment = css`
  font-style: italic;
`;
export const ratingContainer = css`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 0.35em;
`;
export const releaseDateContainer = css`
  font-size: 12px;
  padding: 0.2em 0.45em;
  background-color: #c9173d;
  border-radius: 10px;
`;

export const overviewContainer = css`
  @media screen and (max-width: 900px) {
    /* width: 85%; */
    max-height: 125px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;
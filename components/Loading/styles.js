import { css, cx } from '@emotion/css';

export const loadingContainer = css`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  text-align: center;
`

export const loadingIcon = css`
  font-size: 3em;
  display: grid;
  justify-self: center;
  margin-bottom: 0.3em;
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 

  -webkit-animation: loadingIcon 1s infinite linear;
	animation: loadingIcon 1s infinite linear;

  @-webkit-keyframes loadingIcon {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
  }

  @keyframes loadingIcon {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
  }
`
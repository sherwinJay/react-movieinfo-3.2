import { css, cx } from '@emotion/css';

export const mobileMenuContainer = css`
  background-color: #1b1f3a;
  height: 100%;
  width: 100%;
  padding: 1em;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  & form > ul {
    background-color: transparent;
  }

  & form li {
    color: #fff;
    border-bottom: #292e51 1px solid;
    padding: 0.35em 0;
  }

  & form li a{
    padding: 0.3em 0;
    &:hover{
      background-color: #424a85;
    }
  }

  & form li p{
    color: #d7677f;
  }
`;

export const closeContainer = css`
  display: grid;
  justify-content: end;
  margin-bottom: 1.2em;

  & .MuiSvgIcon-root{
    font-size: 2rem;
  }
`;
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
  box-sizing: border-box;
  width: 100vw;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  /* text-align: center; */
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  align-items: center;
  /* font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
  Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif; */
  color: #212121;
  background-color: #ffffff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
h1,
h2,
h3,
h4,
h5,
p,
ul,
li,
a {
  list-style: none;
  margin: 0px;
  padding: 0px;
  color: inherit; 
  text-decoration: inherit;
  user-select: none;
}
`;

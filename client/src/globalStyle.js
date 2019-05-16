import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
 input {
  outline: none;
  border: none;
}
input:focus::-webkit-input-placeholder {
  color: transparent;
}

input::-webkit-input-placeholder {
  color: #ffffff;
}

input:-ms-input-placeholder {
  color: #ffffff;
}

button {
  outline: none !important;
  border: none;
  background: transparent;
}

button:hover {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
  color: #fff;
}
`;

export default GlobalStyle;

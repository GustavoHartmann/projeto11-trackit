import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

*{
    box-sizing: border-box;
	text-decoration: none;
}

body {
	line-height: 1;
	font-family: 'Lexend Deca', sans-serif;
	background-color: #E5E5E5;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

h1 {
	font-size: 23px;

	color: #126BA5;
}

h2 {
	font-size: 20px;

	color: #666666;
}

h3 {
	font-size: 18px;
}

input {
    width: 100%;
    height: 45px;

    font-size: 20px;

    color: #666666;

    border: 1px solid #d4d4d4;
    border-radius: 5px;

	margin-bottom: 10px;
    padding-left: 10px;
  }

  input::placeholder {
    font-style: italic;

    color: #dbdbdb;
  }

  input:focus {
    outline-color: #666666;
  }

button:disabled, input:disabled {
    opacity: 0.7;
}
`;

export default GlobalStyles;

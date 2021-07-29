import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   :root {
   --white: #ffffff;
 
   --gray-100: #e1e1e6;
   --gray-300: #a8a8b3;
   --gray-700: #323238;
   --gray-800: #2A2F32;
   --gray-850: #1f2729;
   --gray-900: #121214;
 
   --cyan-500: #61dafb;
   --yellow-500: #eba417;
 }
 
 @media (max-width: 1080px) {
   html {
     font-size: 93.75%;
   }
 }
 
 @media (max-width: 720px) {
   html {
     font-size: 87.5%;
   }
 }
 
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
 
 body {
   background: var(--gray-800);
   color: var(--white);
 }
 
 body, input, textarea, select, button {
   font: 400 1rem 'Poppins', sans-serif;
 }
 
 button {
   cursor: pointer;
 }
 
 a {
   color: inherit;
   text-decoration: none;
 }
   [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
   }
`
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
   background: var(--white);
   color: var(#121214);
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
   
   .react-modal-overlay {
      background: rgba(0, 0, 0, 0.5);

      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (min-width: 768px) {
        display: none;
    }
   }

  .react-modal-content {
      width: 100%;
      max-width: 576px;
      background: var(--background);
      padding: 3rem;
      position: relative;
      border-radius: 0.24rem;

      @media screen and (min-width: 768px) {
        display: none;
    }
  }
  .react-modal-close {
     position: absolute;
     right: 1.5rem;
     top:1.5rem;
     border: 0;
     background: transparent;
     
     transition: filter 0.2s;

     &:hover {
        filter: brightness(0.8);
     }
  }
`
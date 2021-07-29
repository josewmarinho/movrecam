import styled from 'styled-components';

export const Container = styled.header`
   background: #FFFF;
`;
export const Nav = styled.div`
   background: #FFFF;
   height: 80px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0.5rem calc((100vw - 1300px) / 2);
   z-index: 10;
   position: relative;
   img {
      margin-top: 1.5rem;
      margin-left: 1.5rem;
      width: 50px;
      height: 50px;
      border-radius: 50%;
   }
  
`;
export const Bars = styled.div`
   display: none;
   color: #121214;
   svg {
     width:30px;
     height:30px;
   }
   button {
      background: transparent;
      border: 0;
      color: (--gray-900);
      border-radius: 0.25rem;
      transition: filter 0.2s;

      &:hover {
         filter: brightness(0.7);
      }
   }

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
   display: flex;
   align-items: center;
   margin-right: -48px;

   a {
    color: #121214;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

   }

  @media screen and (max-width:768px) {
    display: none;
  }
`;

export const Whatsapp = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 24px;
   color: #FFF;
   width: 130px;
   height: 38px;
   background-color: #256ce1;
   border-radius: 20px;
   cursor: pointer;
   transition: 0.2s;

   a {
    margin-left: 5px;
    font-size: 1rem;
   }

   &:hover {
    background-color: #48C857;
   }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


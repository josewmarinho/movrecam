
import {
   Container,
   Nav,
   Bars,
   NavMenu,
   Whatsapp,
} from './styles';

import Logo from '../../assets/logo.svg';
import {FaBars} from 'react-icons/fa'

import { Link } from 'react-router-dom'

interface HeaderProps {
   onOpenNewMenuModal: () => void;
 }
 
export function Header({ onOpenNewMenuModal }: HeaderProps) {
   return (
      <Container>
         <Nav>
            <Link to="/">
               <img src={Logo} alt="" />
            </Link>
            <Bars >
               <button type="button" onClick={onOpenNewMenuModal}>
                  <FaBars/>
               </button>
            </Bars>
            <NavMenu>
               <Link to="/">Inicio</Link>
               <Link to="/sobre">Sobre</Link>
               <Link to="/aulas">Aulas</Link>
               <Link to="/padre">Padre Ticão</Link>
               <Link to="/">Contato</Link>
            </NavMenu>
            <Whatsapp>
               <a href="/" target="_blank" rel="noreferrer">Inscreva-se</a>
            </Whatsapp>
         </Nav>
      </Container>
   );
}
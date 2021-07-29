import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';

import {
 Container,
} from './styles';

interface NewMenuModalProps {
   isOpen: boolean;
   onRequestClose: () => void;
 }

export function Modall({isOpen, onRequestClose}:NewMenuModalProps){
   return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>
        <Container>
          <div>
            <a href="/">Inicio</a>
            <a href="/sobre">Sobre</a>
            <a href="/aulas">Aulas</a>
            <a href="/padre">Padre Ticão</a>
            <a href="/contato">Contato</a>
          </div>
        </Container>
      </Modal>
    );
  };
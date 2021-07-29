import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from 'react-router-dom';
import { Modall } from './components/Modall';
import { Header } from "./components/Header";
import { useState } from 'react';

import Modal from 'react-modal';


import { Routes } from './routes';

Modal.setAppElement('#root')

export function App() {
  const [isNewMenuModalOpen, setIsNewMenuModalOpen] = useState(false);

  function handleOpenNewMenuModal(): void {
    setIsNewMenuModalOpen(true);
  }

  function handleCloseNewMenuModal(): void {
    setIsNewMenuModalOpen(false);
  }
  return (
    <BrowserRouter>
      <Header onOpenNewMenuModal={handleOpenNewMenuModal}/>
  
      <Routes />
      
      <Modall
        isOpen={isNewMenuModalOpen}
        onRequestClose={handleCloseNewMenuModal}
      />
      <GlobalStyle />
    </BrowserRouter>
  );
};

import MainContato from "../components/Contato/Main";
import Header from "../components/PaginaInicial/Header/Header";
import InputModal from "../components/PaginaInicial/loginModal/InputModal";
import React, { useState } from "react";
import Footer from "../components/PaginaInicial/Footer/footer";


interface HeaderProps{
    onOpenModal: () => void;
}

export default function Contato ({ onOpenModal }: HeaderProps){
const [modal, setModal] = useState(false);
const [cadastreModalOpen, setCadastreModalOpen] = useState(false);

function openModal(){
    setModal(true);
}

function closeModal(){
    setModal(false);
}

    return(
        <div>
      <Header onOpenModal={openModal} />
        <InputModal
          isOpen={modal}
          onRequestClose={closeModal}
        />
        <MainContato/>
        <Footer/>
        </div>
    )
}



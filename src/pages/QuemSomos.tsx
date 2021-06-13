import MainQuemSomos from "../components/QuemSomos/Main";
import React, { useState } from "react";
import InputModal from "../components/PaginaInicial/loginModal/InputModal";
import Header from "../components/PaginaInicial/Header/Header";
import Footer from "../components/PaginaInicial/Footer/footer";


interface HeaderProps{
    onOpenModal: () => void;
}


export default function QuemSomos({ onOpenModal }: HeaderProps){
    const [modal, setModal] = useState(false);
    const [cadastreModalOpen, setCadastreModalOpen] = useState(false);

    function openModal(){
        setModal(true);
    }

    function closeModal(){
        setModal(false);
    }
    return(
        <>
        <Header onOpenModal={openModal} />
        <InputModal
          isOpen={modal}
          onRequestClose={closeModal}
        />
        <MainQuemSomos/>
        <Footer/>
        </>
    )
}
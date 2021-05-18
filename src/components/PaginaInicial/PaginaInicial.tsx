import React, { useState } from "react";
import CadastreSeModal from "./cadastreSeModal/inputModal";
import Footer from "./Footer/footer";
import Header from "./Header/Header";
import InputModal from "./loginModal/InputModal";
import Principal from "./Main/Principal";
import Section from "./Section/section";
import SectionMotivos from "./Section_motivos/sectionMotivos";
import SectionNovidades from "./Section_novidades/sectionNovidades";

export default function PaginaInicial (){
    const [modal, setModal] = useState(false);
    const [cadastreModalOpen, setCadastreModalOpen] = useState(false);

    function openModal(){
        setModal(true);
    }
  
    function closeModal(){
        setModal(false);
    }

    function openModalCadastre(){
        setCadastreModalOpen(true);
    }
  
    function closeModalCadastre(){
        setCadastreModalOpen(false);
    }

    return(
        <>
        <Header onOpenModal={openModal} />
        <InputModal
          isOpen={modal}
          onRequestClose={closeModal}
        />
        <Principal onOpenModalCadastro={openModalCadastre}/>
        <CadastreSeModal
            isOpen={cadastreModalOpen}
            onRequestClose={closeModalCadastre}
        />
       <Section/>
       <SectionMotivos/>
       <SectionNovidades/>
       <Footer/>
       </>
    )
}
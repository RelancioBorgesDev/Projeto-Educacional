import React, { useState } from "react";
import Footer from "./Footer/footer";
import Header from "./Header/Header";
import InputModal from "./loginModal/InputModal";
import Principal from "./Main/Principal";
import Section from "./Section/section";
import SectionMotivos from "./Section_motivos/sectionMotivos";
import SectionNovidades from "./Section_novidades/sectionNovidades";

export default function PaginaInicial (){
    const [modal, setModal] = useState(false);

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
        <Principal/>
       <Section/>
       <SectionMotivos/>
       <SectionNovidades/>
       <Footer/>
       </>
    )
}
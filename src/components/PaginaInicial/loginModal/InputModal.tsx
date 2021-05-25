import React from "react";
import Modal from 'react-modal';
import styles from './styles.module.scss' 

interface newModalOpen{
    isOpen: boolean;
    onRequestClose: () => void; 
}


export default function inputModal({ isOpen, onRequestClose }: newModalOpen){
    return(
    <div className={styles.container}>
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName={styles.react_modal_overlay}
        className="react_modal_content"
        >
            <form action="">
                <h3>Login</h3>
                <label htmlFor="">Email:</label>
                <input type="email" name="" id="" />
                <label htmlFor="">Senha:</label>
                <input type="password" name="" id="" />

                <a href="">
                    <small>Esqueceu sua senha ?</small>
                </a>
               
                <button type="submit">Entrar</button>
            </form>

        </Modal>
    </div>
    )
}



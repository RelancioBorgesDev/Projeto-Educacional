import * as React from 'react';
import styles from './styles.module.scss' 
import { useState } from 'react';

interface HeaderProps{
    onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps){

    return(
        <header className={styles.header}>
            <img className={styles.header_logo} src="/logo.svg" 
            alt="logo do site" 
            width={200}  
            height={100}
            />
            
                <ul className={styles.bar_list}>
                    <li className={styles.bar_list_item}>
                        <a href="#" className={styles.bar_list_item_link}>Planos</a>
                    </li>
                    <li className={styles.bar_list_item}>
                        <a href="#" className={styles.bar_list_item_link}>Quem Somos</a>
                    </li>
                    <li className={styles.bar_list_item}>
                        <a href="#" className={styles.bar_list_item_link}>Contato</a>
                    </li>
                        <a href="#">
                            <button 
                            type="button" 
                            className={styles.btn_login}
                            onClick={onOpenModal}
                            >
                                Entrar
                            </button>
                        </a>
                  
                
                </ul>
            
        </header>
    );
}
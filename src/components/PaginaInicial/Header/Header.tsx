import * as React from 'react';
import styles from './styles.module.scss' 
import Link from 'next/link';

interface HeaderProps{
    onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps){

    return(
        <header className={styles.header}>
           <Link href="/PaginaInicial"><img className={styles.header_logo} src="/logo.svg" 
            alt="logo do site" 
            width={200}  
            height={100}
            />
            </Link> 
            
                <ul className={styles.bar_list}>
        
                    <li className={styles.bar_list_item}>
                    <Link href="/QuemSomos" >Quem Somos</Link>
                    </li>
                    <li className={styles.bar_list_item}>
                    <Link href="/Contato">Contato</Link>
                    </li>
                        <Link href="">
                            <button 
                            type="button" 
                            className={styles.btn_login}
                            onClick={onOpenModal}
                            >
                                Entrar
                            </button>
                        </Link>
                  
                
                </ul>
            
        </header>
    );
}
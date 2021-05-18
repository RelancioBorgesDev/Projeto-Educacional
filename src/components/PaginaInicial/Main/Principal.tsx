import * as React from 'react';
import styles from './styles.module.scss' 

interface MainProps{
    onOpenModalCadastro: () => void;
}

export default function Principal({ onOpenModalCadastro }: MainProps){
    return(
        <main className={styles.principal}>
            <div className={styles.principal_left}>
                <h2>Projeto class aula de projetos</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati officia temporibus sequi est esse incidunt quaerat.</p>
               
                 <button 
                    type="button" 
                    className={styles.btn_login}
                     onClick={onOpenModalCadastro}
                     >
                    Cadastre-se
                    </button>
            </div>
            <div className={styles.principal_right}>
                <img src="/professor.svg" alt="" width={500} height={500}/>
            </div>
        </main>
        
    )
}
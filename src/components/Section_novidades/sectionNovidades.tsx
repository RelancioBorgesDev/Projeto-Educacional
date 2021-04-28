import * as React from 'react';
import styles from './styles.module.scss' 

export default function SectionNovidades(){
    return(
        <section className={styles.principal_area}>
            <div>
                <h1>Quer saber as novidades do projeto ?</h1>
                <p>Faça parte da nossa comunidade !</p>
            </div>
            <form action="">
                <input type="email" placeholder="Seu Email"/>
                <button type="submit">Me Inscrever</button>
            </form>

        </section>
    )
}
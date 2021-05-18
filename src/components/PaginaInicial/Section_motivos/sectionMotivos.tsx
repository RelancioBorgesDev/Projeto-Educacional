import * as React from 'react';
import styles from './styles.module.scss' 

export default function SectionMotivos(){
    return(
        <section className={styles.secao_secundaria}>
            <div>
                <h1>Utilize nossa plataforma para organizar suas tarefas </h1>
            </div>
            <div className={styles.principal_motivs}>
                <div className={styles.numbers}> 
                    <span className={styles.number}>1</span>
                    <span className={styles.number}>2</span>
                    <span className={styles.number}>3</span>
                </div>
                <div className={styles.images}>
                    <img src="/blank.png" alt="" width={120} height={120}/>
                    <img src="/blank.png" alt="" width={120} height={120}/>
                    <img src="/blank.png" alt="" width={120} height={120}/>
                </div>
                <div className={styles.texts}>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div> 
                </div>
            </div>     
        </section>
    )
}
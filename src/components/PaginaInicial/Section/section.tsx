import * as React from 'react';
import styles from './styles.module.scss' 

export default function Section(){
    return(
        <section className={styles.secao}>
            <div className={styles.secao_img}>
                <img src="/lampada.svg" alt="icone lampada"  width={50} height={50}/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, tenetur odit. Omnis laboriosam voluptatem quaerat deleniti consequuntur voluptate quasi repudiandae? Fuga, molestiae ipsam illo laudantium ex possimus dignissimos nihil iusto!</p>
            </div>
            <div className={styles.secao_img}>
                <img src="/livro.svg" alt="icone livro" width={50} height={50}/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, tenetur odit. Omnis laboriosam voluptatem quaerat deleniti consequuntur voluptate quasi repudiandae? Fuga, molestiae ipsam illo laudantium ex possimus dignissimos nihil iusto!</p>
            </div>
            <div className={styles.secao_img}>
                <img src="/youtube.svg" alt="icone youtube" width={50} height={50}/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, tenetur odit. Omnis laboriosam voluptatem quaerat deleniti consequuntur voluptate quasi repudiandae? Fuga, molestiae ipsam illo laudantium ex possimus dignissimos nihil iusto!</p>
            </div>
        </section>
    )
}
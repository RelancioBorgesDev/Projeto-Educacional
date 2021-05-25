import styles from './styles.module.scss'

export default function MainQuemSomos (){
    return(
        <main className={styles.main}>
            <div className={styles.card}>
                <h1>Cristiano Afonso</h1>
                <span>
                    foto
                    <img src="" alt="" />
                </span>
                <div className={styles.socials}>
                <a href="">
                        <img src="/instagram.svg" width={40} height={40}/>
                    </a>
                    <a href="">
                        <img src="/facebook.svg" width={40} height={40}/>
                    </a>
                    <a href="">
                        <img src="/twitter.svg" width={40} height={40}/>
                    </a>
                </div> 
            </div>

            <div className={styles.card}>
                <h1>João Pedro</h1>
                <span>
                    foto
                    <img src="" alt="" />
                </span>
                <div className={styles.socials}>
                <a href="">
                        <img src="/instagram.svg" width={40} height={40}/>
                    </a>
                    <a href="">
                        <img src="/facebook.svg" width={40} height={40}/>
                    </a>
                    <a href="">
                        <img src="/twitter.svg" width={40} height={40}/>
                    </a>
                </div> 
                
            </div>

            <div className={styles.card}>
                <h1>Relancio Borges</h1>
                <span>
                    foto
                    <img src="" alt="" />
                </span>
                <div className={styles.socials}>
                <a href="">
                        <img src="/instagram.svg" width={40} height={40}/>
                    </a>
                    <a href="">
                        <img src="/facebook.svg" width={40} height={40}/>
                    </a>
                    <a href="">
                        <img src="/twitter.svg" width={40} height={40}/>
                    </a>
                </div> 
            </div>

        </main>
    )
}
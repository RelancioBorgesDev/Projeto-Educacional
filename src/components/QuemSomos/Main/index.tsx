import styles from './styles.module.scss'
import {FaInstagram, FaFacebook, FaTwitter} from 'react-icons/fa'
import Link from 'next/link'

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
                <Link href="#">
                        <FaInstagram color="#bc1888 " className={styles.icon}/>
                    </Link>
                    <Link href="">
                        <FaFacebook color="blue" className={styles.icon}/>
                    </Link>
                    <Link href="">
                        <FaTwitter color="#1DA1F2" className={styles.icon}/>
                    </Link>
                </div> 
            </div>

            <div className={styles.card}>
                <h1>João Pedro</h1>
                <span>
                    foto
                    <img src="" alt="" />
                </span>
                <div className={styles.socials}>
                <Link href="#">
                        <FaInstagram color="#bc1888 " className={styles.icon}/>
                    </Link>
                    <Link href="">
                        <FaFacebook color="blue" className={styles.icon}/>
                    </Link>
                    <Link href="">
                        <FaTwitter color="#1DA1F2" className={styles.icon}/>
                    </Link>
                </div> 
            </div>

            <div className={styles.card}>
                <h1>Relancio Borges</h1>
                <span>
                    foto
                    <img src="" alt="" />
                </span>
                <div className={styles.socials}>
                <Link href="#">
                        <FaInstagram color="#bc1888 " className={styles.icon}/>
                    </Link>
                    <Link href="">
                        <FaFacebook color="blue" className={styles.icon}/>
                    </Link>
                    <Link href="">
                        <FaTwitter color="#1DA1F2" className={styles.icon}/>
                    </Link>
                </div> 
            </div>

        </main>
    )
}
import * as React from 'react';
import styles from './styles.module.scss' 

export default function Footer (){
    return(
        <footer className={styles.footer}>
        <div className={styles.footer_items}>
                <img className={styles.header_logo} src="/logo.svg" 
                alt="logo do site" 
                width={200}  
                height={100}
                />
                <div className={styles.social}>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Twitter</a></li>
                    </ul>
                </div>
                <div className={styles.social}>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Twitter</a></li>
                    </ul>
                </div>
        </div>
        <div className={styles.copy}>   
            <p>
                <img src="" alt="" />
                Brasil
            </p>
            <p>Copyright &copy;</p>
        </div> 
        </footer>
    )
}
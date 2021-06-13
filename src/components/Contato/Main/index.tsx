import styles from './styles.module.scss'

export default function MainContato (){
    return(
        <main className={styles.main}>
            <form action="">
                <label htmlFor="">Nome</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" />
                <label htmlFor="">Assunto</label>
                <input type="text" name="" id="" />
                <textarea name="" id="" cols={50} rows={20} placeholder="Dúvida"></textarea>
                <button type="submit">Enviar</button>
               
            </form>
        </main>
    )
}
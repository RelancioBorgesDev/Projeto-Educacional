import Modal from 'react-modal'
import styles from './styles.module.scss'

interface newModalOpen{
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function CadastreSeModal({ isOpen, onRequestClose }: newModalOpen){
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName={styles.react_modal_overlay}
        className="react_modal_content"
        >
                <form action="">
                <h3>Cadastro</h3>
                <label htmlFor="">Email:</label>
                <input type="email" name="" id="" />
                <label htmlFor="">Senha:</label>
                <input type="password" name="" id="" />
                <label htmlFor="">Repita a Senha:</label>
                <input type="password" name="" id="" />
                <button type="submit">Cadastrar</button>
            </form>
        </Modal>
    )
}
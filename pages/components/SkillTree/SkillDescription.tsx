import styles from '../../../styles/Skills.module.css'
import Overlay from '../Overlay';

const SkillDescription = ({close, handleClick, description}: any) => {
    return(
        <Overlay close={close}>
            <div className={styles.SkillDescription}>
                <p>{description}</p>
                <button onClick={handleClick}>Start</button>
            </div>
        </Overlay>
    )
}

export default SkillDescription;
import styles from '../../../styles/Skills.module.css'
import Overlay from '../Overlay';

const SkillDescription = ({close}: any) => {
    return(
        <Overlay close={close}>
            <div className={styles.SkillDescription}>
                <p>Intro To JavaScript will cover everything in the latest version of JavaScript including variables, classes and functions.</p>
                <button>Start</button>
            </div>
        </Overlay>
    )
}

export default SkillDescription;
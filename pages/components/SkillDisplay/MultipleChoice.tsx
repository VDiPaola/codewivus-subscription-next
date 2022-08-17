import styles from "../../../styles/SkillDisplay/MultipleChoice.module.css"

const MultipleChoice = (props:any)=>{
    return (
        <div className={styles.container}>
            <h3 className={styles.question}>{props.question}</h3>
            {props.choices && props.choices.map((choice:any) => (
            <div className={styles.choice}>
                {choice.text}
            </div>))}
        </div> 
    )
}

export default MultipleChoice;
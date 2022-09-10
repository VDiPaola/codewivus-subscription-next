import styles from "../../../styles/SkillDisplay/SkillDisplay.module.css"

const SkillDisplay = (props:any) => {

    return (
        <div className={styles.container}>
            {...props.children}
            {/* <MultipleChoice question="somethine" choices={[{text:"asldfjk"}]}></MultipleChoice> */}
            {/* <CodeView styles="h1{color:red}" body="<h1>HELLO</h1>" script="" title="title" content="content" horizontal /> */}
        </div>
    )
}

export default SkillDisplay;
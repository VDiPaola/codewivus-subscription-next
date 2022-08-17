import MultipleChoice from "./MultipleChoice";
import styles from "../../../styles/SkillDisplay/SkillDisplay.module.css"
import CodeView from "./CodeView";

const SkillDisplay = () => {

    return (
        <div className={styles.container}>
            {/* <MultipleChoice question="somethine" choices={[{text:"asldfjk"}]}></MultipleChoice> */}
            <CodeView styles="h1{color:red}" body="<h1>HELLO</h1>" script="" title="title" content="content" horizontal />
        </div>
    )
}

export default SkillDisplay;
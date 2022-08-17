import styles from "../../../styles/SkillDisplay/CodeView.module.css"

let html_boilerplate = "<html><head><style>STYLE</style></head><body>BODY<script>SCRIPT</script></body></html>"

const CodeView = (props:any)=>{
    return (
        <div className={`${styles.container} ${props.horizontal ? styles.vertical : styles.horizontal}`}>
            <div className={styles.contentContainer}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.content}>{props.content}</p>
            </div>
            <div className={`${styles.codeViewContainer} ${props.horizontal ? styles.horizontal : styles.vertical}`}>
                <input type={"textbox"} className={styles.codeContainer}/>
                <iframe className={styles.viewContainer} 
                srcDoc={html_boilerplate.replace("STYLE", props.styles).replace("BODY", props.body).replace("SCRIPT", props.script)}
                />
            </div>
        </div> 
    )
}

export default CodeView;
import { useState } from 'react';
import styles from '../../../styles/SideBar.module.css'

const SideBar = (props:any) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={styles.container}>
            {props.skillTrees && 
            props.skillTrees.map((tree:any, i:number) => (
            <p key={i} className={`${styles.treeItem} ${i == activeIndex ? styles.active : ""}`}>{tree.title}</p>
            ))}
        </div>
    )
}

export default SideBar;
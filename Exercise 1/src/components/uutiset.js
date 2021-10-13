import React from 'react'
import styles from './uutiset.module.css';


export default function NEWS(props) {
    return(
        <div className={styles.backside}>
        <span className={styles.number}>{props.abc}
        </span>    
        <span className={styles.header}>{props.fat}  
        </span>{props.slim}
        </div>
    )
}
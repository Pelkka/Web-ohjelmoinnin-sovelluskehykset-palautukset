import React from 'react'
import styles from './timantit.module.css';


export default function Diamond(props) {
    return(
        <div className={styles.diamondbackground}>
        <div>
        <span className={styles.header}>{props.fat} : 
        </span>{props.slim}
        </div>
        </div>
    )
}
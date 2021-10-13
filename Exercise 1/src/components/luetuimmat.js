import React from 'react'
import styles from './luetuimmat.module.css';


export default function Most(props) {
   
    return(
        
        <div className={styles.newsbackground}>
        <div className={styles.newsborder}>
           <div className={ styles.mainarticle}>Koronavirus</div>
           <img src="/images/aaa.jpg" alt="aaa"/>
         <div className={styles.lefttext}>
         <span className={styles.newsflexleft}>{props.O} |</span >
         {props.U}
         
         </div>
         </div>
        </div>
        
    )
}
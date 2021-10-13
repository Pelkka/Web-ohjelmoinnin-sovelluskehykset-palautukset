import React from 'react'
import styles from './otsikko.module.css';

export default function Header() {

    
    return(
        
        <div className={styles.headerbackground}>
            <div className={styles.headerflex2}>
            <div className={styles.headerflex}>
            <div className={ styles.helsinki}>HELSINGIN SANOMAT</div>
            <div className={ styles.space}> Etusivu </div>
            <div className={ styles.space}>Uutiset</div>
            <div className={ styles.space}>Lehdet</div>
            <div className={ styles.space}>Asiakaspalvelu</div>
            </div>
         
         <div className={styles.headerflex3}>
         <div className={ styles.space}>Tilaa</div>
         <div className={ styles.space}>Kirjaudu</div>
         <div className={ styles.space}>Valikko</div>
         </div>
         </div>
        </div>
        
    )
}
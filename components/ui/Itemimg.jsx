import React from "react";
import styles from '../../styles/ui.module.css'
import ItemPrice from "./Itemprice";
import Image from 'next/image'

const Itemimg = (props) =>{

    return(
        <div className={styles.imgItem}>
            <img className={styles.imgCenter} src={props.src} alt={props.alt} />
            <ItemPrice title={props.title} old={props.old} new={props.new} />
        </div>
    )
}
export default Itemimg;
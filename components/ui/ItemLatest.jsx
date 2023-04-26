import React from "react";
import styles from '../../styles/ui.module.css'
import ItemPrice from "./Itemlatestprice";
import Image from 'next/image'
import { useRouter } from 'next/router';
const Itemimg = (props) =>{
    const router = useRouter();
    const goToView = () =>{
        router.push({
            pathname: '/Products/ProductView',
            query: {
              id: props.id,
            }
          })
            
    }
    return(
        <div className={styles.imgItem} >
            <Image
                className={styles.imgCenter}
                src={'/'+props.src}
                alt={props.alt}
                loading="eager"
                width={200}
                height={200}
                onClick={() =>goToView()}
            />
            {/* <img className={styles.imgCenter} src={props.src} alt={props.alt} onClick={() =>goToView()}/> */}
            <ItemPrice title={props.title} price={props.price} id={props.id}/>
        </div>
    )
}
export default Itemimg;
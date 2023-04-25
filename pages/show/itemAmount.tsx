import styles from '../../styles/show.module.css'
import { useDispatch } from 'react-redux';
import {increase,decrease} from '../../Cart/cartSlice';




interface data{
    id:string,
    title:string,
    description:string|undefined,
    type?:string|undefined,
    src:string,
    alt:string,
    price:number,
    amount:number
  }

export default function itemShow({id,src,title,description,price,amount}:data) {
    const dispatch = useDispatch();
    return(
        <div className={styles.CartItemCon}>
            <img className={styles.cartItemImgCon} src={src} alt='' />
            <div className={styles.cartItemDetailCon}>
                <h2>{title}</h2>
                <p>{description}</p>
                <h2>{price}</h2>
            </div>
            <div className={styles.itemRemove}>
                <svg onClick={()=>dispatch(increase(id))} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                </svg>
                <h5>{amount}</h5>
                <svg onClick={()=>dispatch(decrease(id))} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
        </div>
    )
}

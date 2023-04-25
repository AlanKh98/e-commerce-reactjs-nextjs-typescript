import Header from '../../components/Header/Header'
import styles from '../../styles/show.module.css'
import {  useSelector,useDispatch } from 'react-redux';
import ItemShow from './item'
import ItemAmount from './itemAmount'
import { useRouter } from 'next/router';
import {calculateTotals} from '../../Cart/cartSlice';



interface item{
    id:string,
    title:string,
    description:string|undefined,
    type?:string|undefined,
    src:string,
    alt:string,
    price:number,
    amount:number
  }

export default function Show() {
    const router = useRouter();
    const dispatch = useDispatch();
    dispatch(calculateTotals());
    const totalPrice = useSelector((store:any) => store.cart.total);
    let {type} = router.query;
    let data;
    let num;
    let Title:string;
    let divTotal;
    if(type == 'Fav'){
        const items = useSelector((store:any) => store.cart.favItems);
        data = items.map((it:item) => (<ItemShow key={it.id} {...it} />));
        Title = 'FAVORITE ITEMS';
        num = items.length;
    }
    
    else{
        const items = useSelector((store:any) => store.cart.cartItems);
        data = items.map((it:item) => (<ItemAmount key={it.id} {...it} />));
        Title = 'CART SHOPPING';
        num = items.length;
        divTotal = <div className={styles.totalPrice}>
                        <h3>Price : <span className={styles.totalPriceText}>${totalPrice.toFixed(2)}</span></h3>
                        <hr/>
                        <h3>Tax :<span className={styles.totalPriceText}>&nbsp;&nbsp;%5</span> </h3>
                        <hr/>
                        <h3>Total Price :<span className={styles.totalPriceText}>&nbsp;&nbsp;{(totalPrice+(0.05*totalPrice)).toFixed(2)}</span> </h3>
                        <hr/>
                    </div>
    }
    return(
        <div className={styles.show}>
            <Header />
            <div className={styles.itemsContainer}>
                <h1>{Title}&nbsp;({num}&nbsp;Items)</h1>
                {data}
                {type!='Fav'?divTotal:''}
            </div>
        </div>
    )
}

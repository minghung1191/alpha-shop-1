import styles from "./CartItems.module.scss" ;
import plus from "../../../icons/plus.svg";
import minus from "../../../icons/minus.svg";

function CartItem ( {id, name, img, price, quantity, increase1, increase2, decrease1, decrease2}) {
    if (quantity > 0 ) {
    return (
    <div 
        className={`${styles.productContainer} col col-12`} 
        data-count={quantity} 
        data-price={price}
    >
        <img 
        className={styles.imgContainer} 
        src={img} 
        alt= " product img"
        />
        <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
            <div className={styles.productControl}>
            <img
                onClick={id === "1" ? decrease1 : decrease2 } 
                className={`${styles.productAction} minus`} 
                src= {minus}
                alt= "minus.svg"
            />
            <span className={styles.productCount}>{quantity}</span>
            <img 
                onClick={id === "1" ? increase1 : increase2}
                className={`${styles.productAction} plus`} 
                src= {plus}
                alt= "plus.svg"
            />
            </div>
            </div>
        <div className={styles.price}>{price * quantity}</div>
        </div>
        </div>
    )
    }
}

export default function CartItems ({data,increase1, increase2, decrease1, decrease2 }) {
    return(
    <>
        {data.map (cartItem => 
            <CartItem {...cartItem} key={cartItem.id} increase1={increase1} increase2={increase2} decrease1={decrease1} decrease2={decrease2}/>    
        )}
    </>
    )
}
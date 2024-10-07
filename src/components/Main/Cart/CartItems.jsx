import styles from "./CartItems.module.scss" ;
import plus from "../../../icons/plus.svg";
import minus from "../../../icons/minus.svg";

function CartItem ( {id, name, img, price, quantity, handleClickChangeItemNum}) {
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
            <input
                type= "image"
                value= {-1}
                onClick= { e => { handleClickChangeItemNum(id, Number(e.target.value)) }} 
                className={`${styles.productAction} minus`} 
                src= {minus}
                alt= "minus.svg"
            />
            <span className={styles.productCount}>{quantity}</span>
            <input 
                type= "image"
                value= {1}
                onClick={ e => { handleClickChangeItemNum(id, Number(e.target.value)) }}
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

export default function CartItems ({data, handleClickChangeItemNum }) {
    return(
    <>
        {data.map (cartItem => 
            <CartItem {...cartItem} key={cartItem.id} handleClickChangeItemNum={handleClickChangeItemNum} />    
        )}
    </>
    )
}
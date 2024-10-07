import styles from "./Cart.module.scss" ;
import { useState } from "react";
import CartItems from "./CartItems";

const cartItemsData = [
    {
        id: '1',
        name: '貓咪罐罐',
        img: 'https://picsum.photos/300/300?text=1',
        price: 100,
        quantity: 2,
    },
    {
        id: '2',
        name: '貓咪干干',
        img: 'https://picsum.photos/300/300?text=2',
        price: 200,
        quantity: 1,
    },
]

export default function Cart () {
  const [cartItems, setCartItems] = useState(cartItemsData)
  //運費先以0計算
  const deliveryFee = 0
  const totalPrice = cartItems.reduce((current, next) => current + next.price * next.quantity , deliveryFee)

  function handleClickChangeItemNum (id, numChange) {
    setCartItems(cartItems.map (cartItem => {
      if (cartItem.id === id) {
        return {...cartItem, quantity: cartItem.quantity + numChange}
      } else {
        return cartItem
      }
    })
  )}

    return (
        <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
          <h3 className={styles.cartTitle}>購物籃</h3>
          <section className={`${styles.productList} col col-12`} data-total-price={0}>
          <CartItems data={cartItems} handleClickChangeItemNum={handleClickChangeItemNum}/>
          </section>
          <section className={`${styles.cartInfo} shipping col col-12`}>
            <div className={styles.text}>運費</div>
            <div className={styles.price}>{deliveryFee}</div>
          </section>
          <section className={`${styles.cartInfo} total col col-12`}>
            <div className={styles.text}>小計</div>
            <div className={styles.price}>{totalPrice}</div>
          </section>
        </section>
    )
}
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
const cartItemsDataCal = cartItemsData.map (cartItemData => {
  return {...cartItemData}
})

export default function Cart () {
  const [quantity1, setQuantity1] = useState(cartItemsDataCal[0].quantity)
  const [quantity2, setQuantity2] = useState(cartItemsDataCal[1].quantity)
  const totalPrice = cartItemsDataCal[0].quantity * cartItemsDataCal[0].price + cartItemsDataCal[1].quantity * cartItemsDataCal[1].price
  //運費先以0計算
  const deliveryFee = 0

  function handleIncreaseItem1Click() {
    setQuantity1(
      cartItemsDataCal[0].quantity = cartItemsDataCal[0].quantity + 1
    )
  }
  function handleIncreaseItem2Click() {
    setQuantity2(
      cartItemsDataCal[1].quantity = cartItemsDataCal[1].quantity + 1
    )
  }
  function handleDecreaseItem1Click() {
    if (cartItemsDataCal[0].quantity > 0) {
      setQuantity1(
        cartItemsDataCal[0].quantity = cartItemsDataCal[0].quantity - 1
      )
    }
  }
  function handleDecreaseItem2Click() {
    if (cartItemsDataCal[1].quantity > 0) {
      setQuantity2(
        cartItemsDataCal[1].quantity = cartItemsDataCal[1].quantity - 1
      )
    }
  }
    return (
        <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
          <h3 className={styles.cartTitle}>購物籃</h3>
          <section className={`${styles.productList} col col-12`} data-total-price={0}>
          <CartItems data={cartItemsDataCal} increase1={handleIncreaseItem1Click} increase2={handleIncreaseItem2Click} decrease1={handleDecreaseItem1Click} decrease2={handleDecreaseItem2Click}/>
          </section>
          <section className={`${styles.cartInfo} shipping col col-12`}>
            <div className={styles.text}>運費</div>
            <div className={styles.price}>{deliveryFee}</div>
          </section>
          <section className={`${styles.cartInfo} total col col-12`}>
            <div className={styles.text}>小計</div>
            <div className={styles.price}>{totalPrice + deliveryFee}</div>
          </section>
        </section>
    )
}
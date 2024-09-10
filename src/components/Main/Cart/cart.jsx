import styles from "./cart.module.scss" ;
import plus from "../../../icons/plus.svg";
import minus from "../../../icons/minus.svg";

const productItemData = [
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

function Product ( {_id, name, img, price, quantity}) {
    return (
        <div className={`${styles.productContainer} col col-12`} data-count={quantity} data-price={price}>
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
                        className={`${styles.productAction} minus`} 
                        src= {minus}
                        alt= "minus.svg"
                    />
                    <span className={styles.productCount}>1</span>
                    <img 
                        className={`${styles.productAction} plus`} 
                        src= {plus}
                        alt= "plus.svg"
                    />
                  </div>
                </div>
                <div className={styles.price}>{price}</div>
              </div>
            </div>
    )
}


export default function Cart () {
    return (
        <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
          <h3 className={styles.cartTitle}>購物籃</h3>
          <section className={`${styles.productList} col col-12`} data-total-price={0}>
           {productItemData.map (productItem =>
            <Product {...productItem} key={productItem.id} />
           )}
          </section>
          <section className={`${styles.cartInfo} shipping col col-12`}>
            <div className={styles.text}>運費</div>
            <div className={styles.price}>免費</div>
          </section>
          <section className={`${styles.cartInfo} total col col-12`}>
            <div className={styles.text}>小計</div>
            <div className={styles.price}>$300</div>
          </section>
        </section>
    )
}
import styles from "./Step2.module.scss";
import {useState} from "react";

function ShippingType ({ id, price, text, period }) {
  const [select, setSelect] = useState("標準運送");
  const handleSelectChange = event => {
    const value = event.target.value;
    setSelect(value);
  };
  return (
  <label className={`${styles.radioGroup} col col-12`} data-price={price}>
    <input
      id ={id}
      type ="radio"
      name = "shipping"
      value = {text}
      defaultChecked = {select === text}
      onClick={event => handleSelectChange(event)}
    />
    <div className={styles.radioInfo}>
      <div className={`${styles.textPriceContainer} col col-12`}>
        <div className={styles.text}>{text}</div>
        <div className={styles.price}>{price > 0 ? `${price}` : "免費" }</div>
        <div className={`${styles.period} col col-12`}>{period}</div>
      </div>
    </div>
    <div className={styles.radioBoxBorder}></div>
  </label>
  )
}

export default function Step2 ( ) {
    return (
        <form className={`${styles.step2} col col-12`} data-phase="shipping">
              <h3 className={styles.formTitle}>運送方式</h3>
              <section className={`${styles.formBody} col col-12`}>
                <ShippingType id="shipping-standard" text="標準運送" price={0} period="約3~7個工作天"/>
                <ShippingType id="shipping-dhl" text="DHL貨運" price={500} period="48小時內送達"/>
              </section>
            </form>
    )
}
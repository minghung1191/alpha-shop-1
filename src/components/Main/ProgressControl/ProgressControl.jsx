import styles from "./ProgressControl.module.scss";
import rightArrow from "../../../icons/right-arrow.svg";
import leftArrow from "../../../icons/left-arrow.svg";

function PreviousStep() {
  return (
    <button className={styles.prev}>
      <img 
        className="cursorPoint" 
        src= {leftArrow} 
        alt="left-arrow.svg" 
      />
      上一步
    </button>
  )
}
function NextStep () {
  //忘記加上return導致畫面才沒呈現button畫面
  return (
  <button className={styles.next}>
    下一步
    <img 
      className="cursorPoint" 
      src= {rightArrow} 
      alt="right-arrow.svg" 
    />
  </button>
  )
}
//目前只出現Step1畫面
export default function ProgressControl () {
    return (
        <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}>
        <section className={`${styles.buttonGroup} col col-12`} data-phase="address">
          <NextStep />
        </section>
        {/*<section className="button-group col col-12" data-phase="shipping">
          <PreviousStep />
        </section>
        <section className="button-group col col-12" data-phase="credit-card">
          <PreviousStep />
          <button className="next">確認下單</button>
        </section>*/}
      </section>
    )
}
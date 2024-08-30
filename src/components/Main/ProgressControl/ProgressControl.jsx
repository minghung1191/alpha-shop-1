import rightArrow from "../../../icons/right-arrow.svg";
import leftArrow from "../../../icons/left-arrow.svg";
import styles from "./ProgressControl.scss"

function PreviousStep () {
  return (
    <button className={styles.prev}>
      <img className="cursor-point" src={leftArrow} alt="left-arrow.svg" />
        上一步
    </button>
  )
}
function NextStep () {
  <button className="next">
    下一步
    <img className={styles.next} src={rightArrow} alt="right-arrow.svg" />
  </button>
}

export default function ProgressControl () {
    return (
        <section className="progress-control-container col col-lg-6 col-sm-12">
        <section className="button-group col col-12" data-phase="address">
          <NextStep />
        </section>
        <section className="button-group col col-12" data-phase="shipping">
          <PreviousStep />
        </section>
        <section className="button-group col col-12" data-phase="credit-card">
          <PreviousStep />
          <button className="next">確認下單</button>
        </section>
      </section>
    )
}
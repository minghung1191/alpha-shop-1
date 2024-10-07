import styles from "./ProgressControl.module.scss";
import rightArrow from "../../../icons/right-arrow.svg";
import leftArrow from "../../../icons/left-arrow.svg";

function PreviousStep({handleClickPrevious}) {
  return (
    <button className={`${styles.prev} cursorPoint`} onClick = {handleClickPrevious}>
      <img 
        className={styles.svg} 
        src= {leftArrow} 
        alt="left-arrow.svg" 
      />
      上一步
    </button>
  )
}
function NextStep ({handleClickNext}) {
  return (
  <button className={`${styles.next} cursorPoint`} onClick = {handleClickNext}>
    下一步
    <img 
      className={styles.svg} 
      src= {rightArrow} 
      alt="right-arrow.svg" 
    />
  </button>
  )
}
//3步驟畫面切換
export default function ProgressControl ({handleClickPrevious, handleClickNext, stepPhase}) {
    return (
        <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}>
        {stepPhase === 1 &&
          <section className={`${styles.buttonGroup} col col-12`} data-phase="address">
          <NextStep handleClickNext={handleClickNext} />
        </section>}
        {stepPhase === 2 &&
          <section className={`${styles.buttonGroup} col col-12`} data-phase="shipping">
          <PreviousStep handleClickPrevious={handleClickPrevious} />
          <NextStep handleClickNext={handleClickNext} />
        </section>
        }
        {stepPhase === 3 &&
          <section className={`${styles.buttonGroup} col col-12`} data-phase="credit-card">
          <PreviousStep handleClickPrevious={handleClickPrevious} />
          <button className={`${styles.next} cursorPoint`}>確認下單</button>
        </section>
        } 
      </section>
    )
}
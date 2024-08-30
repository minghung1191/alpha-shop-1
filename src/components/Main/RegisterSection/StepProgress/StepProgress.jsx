import pgComplete from "../../../../icons/pg-complete.svg";
import styles from "./StepProgress.scss"

function StepNotcie ({dataPhase, text, label}) {
  return (
    <span class={styles.progessGroup} data-phase={dataPhase}>
      <span class={styles.progessIcon}>
        <span class={styles.text}>{text}</span>
          <img className={`${styles.icon} cursorPoint`} src={pgComplete} alt="pg-complete.svg"/>
        </span>
      <span class={styles.progressLabel}>{label}</span>
    </span>
  )
}

export default function StepProgress () {
    return (
      <div>
        <section className={`${styles.progressContainer} col col-12`}>
          <StepNotcie dataPhase="address" text="1" label="寄送地址" />
            <span className={styles.progressBar} data-order={1}></span>
          <StepNotcie dataPhase="shipping" text="2" label="運送方式" />
            <span className={styles.progressBar} data-order={2}></span>
          <StepNotcie dataPhase="credit-card" text="3" label="付款資訊" />
        </section>
      </div>
    )
}
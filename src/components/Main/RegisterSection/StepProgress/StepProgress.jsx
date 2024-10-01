import pgComplete from "../../../../icons/pg-complete.svg";
import styles from "./StepProgress.module.scss";

function StepNotice ({dataPhase, text, label}) {
  return (
    <span className={styles.progressGroup} dataPhase={dataPhase}>
      <span className={styles.progressIcon}>
        <span className={styles.text}>{text}</span>
          <img className={`${styles.icon} cursorPoint`} src={pgComplete} alt="pg-complete.svg"/>
        </span>
      <span className={styles.progressLabel}>{label}</span>
    </span>
  )
}

export default function StepProgress () {
    return (
      <div>
        <section className={`${styles.progressContainer} col col-12`}>
          <StepNotice dataPhase="address" text=" " label="寄送地址" />
            <span className={styles.progressBar} data-order={1}/>
          {/*<StepNotcie dataPhase="shipping" text="2" label="運送方式" />*/}
          <span className={styles.progressGroup} data-phase='shipping'>
          <span className={styles.progressIcon}>
            <span className={styles.text}>2</span>
          </span>
          <span className={styles.progressLabel}>運送方式</span>
          </span>
          <span className={styles.progressBar} data-order={2} />
          {/*<StepNotcie dataPhase="credit-card" text="3" label="付款資訊" />*/}
          <span className={styles.progressGroup} data-phase='credit-card'>
          <span className={styles.progressIcon}>
            <span className={styles.text}>3</span>
          </span>
          <span className={styles.progressLabel}>付款資訊</span>
          </span>
        </section>
      </div>
    )
}
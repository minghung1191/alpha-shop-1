import pgComplete from "../../../../icons/pg-complete.svg";
import styles from "./StepProgress.module.scss";

function StepProgressNotice ({dataPhase, text, textClass, label, labelClass, imgDisplay}) {
  return (
    <span className={styles.progressGroup} dataPhase={dataPhase}>
      <span className={styles.progressIcon}>
        {imgDisplay ? <img className={`${styles.icon} cursorPoint`} src={pgComplete} alt="pg-complete.svg"/> : <span className={styles[textClass]}>{text}</span>}
      </span>
      <span className={styles[labelClass]}>{label}</span>
    </span>
  )
}

function StepProgressBar ({dataOder, progressBarClass}) {
  return (
    <span className={styles[progressBarClass]} data-order={dataOder} />
  )
}

export default function StepProgress ({stepPhase}) {
    return (
      <div>
        <section className={`${styles.progressContainer} col col-12`}>
          {stepPhase === 1 && <>
            <StepProgressNotice stepPhase={stepPhase} dataPhase="address" imgDisplay={false} textClass="textBgcBlack" text="1" labelClass="progressLabel" label="寄送地址" />
            <StepProgressBar progressBarClass="progressBar" dataOrder={1} />
            <StepProgressNotice stepPhase={stepPhase} dataPhase="shipping" imgDisplay={false} textClass="textUndone" text="2" labelClass="labelUndone" label="運送方式" />
            <StepProgressBar progressBarClass="progressBarUndone" dataOrder={2} />
            <StepProgressNotice stepPhase={stepPhase} dataPhase="credit-card" imgDisplay={false} textClass="textUndone" text="3" labelClass="labelUndone" label="付款資訊" />
          </>}
          {stepPhase === 2 && <>
            <StepProgressNotice stepPhase={stepPhase} dataPhase="address" imgDisplay={true} textClass="textBgcBlack" text="1" labelClass="progressLabel" label="寄送地址" />
            <StepProgressBar progressBarClass="progressBar" dataOrder={1}/>
            <StepProgressNotice stepPhase={stepPhase} dataPhase="shipping" imgDisplay={false} textClass="textBgcBlack" text="2" labelClass="progressLabel" label="運送方式" />
            <StepProgressBar progressBarClass="progressBar" dataOrder={2}/>
            <StepProgressNotice stepPhase={stepPhase} dataPhase="credit-card" imgDisplay={false} textClass="textUndone" text="3" labelClass="labelUndone" label="付款資訊" />
          </>}
          {stepPhase === 3 && <>
            <StepProgressNotice stepPhase={stepPhase} dataPhase="address" imgDisplay={true} textClass="textBgcBlack" text="1" labelClass="progressLabel" label="寄送地址" />
            <StepProgressBar progressBarClass="progressBar" dataOrder={1}/>
            <StepProgressNotice stepPhase={stepPhase} dataPhase="shipping" imgDisplay={true} textClass="textBgcBlack" text="2" labelClass="progressLabel" label="運送方式" />
            <StepProgressBar progressBarClass="progressBar" dataOrder={2}/>
            <StepProgressNotice stepPhase={stepPhase} dataPhase="credit-card" imgDisplay={false} textClass="textUndone" text="3" labelClass="progressLabel" label="付款資訊" />
          </>}
        </section>
      </div>
    )
}
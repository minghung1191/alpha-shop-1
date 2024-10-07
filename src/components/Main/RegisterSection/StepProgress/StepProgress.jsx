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

//3步驟渲染畫面之函式
function StepProgressPresent ({imgDisplay1, imgDisplay2, imgDisplay3, textClass1, textClass2, textClass3, labelClass1, labelClass2, labelClass3, progressBarClass1, progressBarClass2}) {
  return (
  <>
    <StepProgressNotice dataPhase="address" imgDisplay={imgDisplay1} textClass={textClass1} text="1" labelClass={labelClass1} label="寄送地址" />
    <StepProgressBar progressBarClass={progressBarClass1} dataOrder={1} />
    <StepProgressNotice dataPhase="shipping" imgDisplay={imgDisplay2} textClass={textClass2} text="2" labelClass={labelClass2} label="運送方式"/>
    <StepProgressBar progressBarClass={progressBarClass2} dataOrder={2} />
    <StepProgressNotice dataPhase="credit-card" imgDisplay={imgDisplay3} textClass={textClass3} text="3" labelClass={labelClass3} label="付款資訊" />
  </>
  )
}

export default function StepProgress ({stepPhase}) {
    return (
      <div>
        <section className={`${styles.progressContainer} col col-12`}>
          {stepPhase === 1 && 
            <StepProgressPresent 
              imgDisplay1={false} imgDisplay2={false} imgDisplay3={false} 
              textClass1="textBgcBlack" textClass2="textUndone" textClass3="textUndone" 
              labelClass1="progressLabel" labelClass2="labelUndone" labelClass3="labelUndone" 
              progressBarClass1="progressBar" progressBarClass2="progressBarUndone"
            />
          }
          {stepPhase === 2 && 
            <StepProgressPresent 
              imgDisplay1={true} imgDisplay2={false} imgDisplay3={false} 
              textClass1="textBgcBlack" textClass2="textBgcBlack" textClass3="textUndone" 
              labelClass1="progressLabel" labelClass2="progressLabel" labelClass3="labelUndone" 
              progressBarClass1="progressBar" progressBarClass2="progressBar"
            />
          }
          {stepPhase === 3 && 
            <StepProgressPresent 
              imgDisplay1={true} imgDisplay2={true} imgDisplay3={false} 
              textClass1="textBgcBlack" textClass2="textBgcBlack" textClass3="textUndone" 
              labelClass1="progressLabel" labelClass2="progressLabel" labelClass3="progressLabel" 
              progressBarClass1="progressBar" progressBarClass2="progressBar"
            />
          }
        </section>
      </div>
    )
}
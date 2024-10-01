import styles from "./StepForm.module.scss";
import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";

export default function StepForm ({stepPhase}) {
    return (
        //3步驟畫面切換
        <section className= {`${styles.formContainer} col col-12`}>
            {stepPhase === 1 && <Step1 />}
            {stepPhase === 2 && <Step2 />}
            {stepPhase === 3 && <Step3/>}
        </section>
    )
}
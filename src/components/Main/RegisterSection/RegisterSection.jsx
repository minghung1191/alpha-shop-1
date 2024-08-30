import styles from "./RegisterSection.scss"
import StepProgress from "./StepProgress/StepProgress.jsx"
import StepForm from "./StepForm/StepForm.jsx"

export default function RegisterSection () {
    return (
        <section className={`${styles.registerConatiner} col col-lg-6 col-sm-12`} data-phase="1" data-total-price="0">   
            <h2 className={styles.registerTitle}>結帳</h2>
            <StepProgress />
            <StepForm />
        </section>
    )
}
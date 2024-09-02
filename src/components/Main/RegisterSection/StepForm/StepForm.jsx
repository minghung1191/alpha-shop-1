import styles from "./StepForm.module.scss";
import Step1 from "./Step1.jsx";
// import Step2 from "./Step2.jsx";
// import Step3 from "./Step3.jsx";

export default function StepForm () {
    return (
        //先不顯示step2.step3
        <section className= {`${styles.formContainer} col col-12`}>
            <Step1 />
            {/*<Step2 />
            <Step3 />*/}
        </section>
    )
}
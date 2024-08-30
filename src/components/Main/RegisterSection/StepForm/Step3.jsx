import styles from "./Step3.scss";

function CardInfo ({ class2, class3, label, placeHolder }) {
  return (
    <div class={`${styles.inputGroup} ${class2} ${class3}`}>
    <div class={styles.inputLabel}>{label}</div>
    <input type="text" placeholder={placeHolder} />
    </div>
  )
}

export default function Step3 () {
    return (
        <form className="col col-12" data-phase="credit-card">
              <h3 className={styles.formTitle}>付款資訊</h3>
              <section className={`${styles.formBody} col col-12`}>
                <div className="col col-12">
                  <CardInfo class2="input-w-lg-4" class3="input-w-sm-full" label="持卡人姓名" placeHolder="John Doe" />
                </div>
                <div className="col col-12">
                <CardInfo class2="input-w-lg-4" class3="input-w-sm-full" label="卡號" placeHolder="1111 2222 3333 4444" />
                </div>
                <div className="col col-12">
                <CardInfo class2="input-w-lg-3" class3="input-w-sm-s3" label="有效期限" placeHolder="MM/YY" />
                <CardInfo class2="input-w-lg-3" class3="input-w-sm-s3" label="CVC / CCV" placeHolder="123" />
                </div>
              </section>
            </form>
    )
}
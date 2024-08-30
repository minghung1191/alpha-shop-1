import styles from "./Main.scss";

export default function Main({children}) {
    return (
        <main className= {styles.siteMain}>
            <div className= {styles.mainContainer}>
                {children}
            </div>
        </main>
    )
}
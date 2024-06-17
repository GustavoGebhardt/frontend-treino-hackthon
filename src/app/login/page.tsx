import styles from "./page.module.css"

export default function Login(){
    return(
        <>
            <div className={styles.divBackground}>
                <div className={styles.divBackgroundLeft}>

                </div>
                <div className={styles.divBackgroundRight}>
                    <form action="../api/auth" method="post" className={styles.formLogin}>
                        <p className={styles.textTituloLogin}>Login</p>
                        <div className={styles.divInput}>
                            <input name="email" type="email" placeholder="Email" className={styles.inputLogin} required/>
                            <input name="passwd" type="password" placeholder="Password" className={styles.inputLogin} required/>
                        </div>
                        <input type="submit" className={styles.btnLogin}/>
                    </form>
                </div>
            </div>
        </>
    );
}
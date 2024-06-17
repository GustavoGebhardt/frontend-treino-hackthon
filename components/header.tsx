"use client"

import { useEffect, useState } from "react";
import { authToken } from "@/app/api/auth/authToken";
import styles from "../styles/page.module.css"
import userName from "./user-name";

export default function Header(){

    const [name, setName] = useState("")

    useEffect(() => {
        const login = document.getElementById("divLogin");
        const user = document.getElementById("divUser");
        const none = document.getElementById("divNone")
        const val = async () => { 
            if (await authToken() == true) {
                if(login && user && none){
                    setName(await userName() ?? "")
                    login.style.display = "none"
                    user.style.display = "flex"
                    none.style.display = "none"
                }
            } else{
                if(login && user && none){
                    login.style.display = "flex"
                    user.style.display = "none"
                    none.style.display = "none"
                }
            }
        }
        val()
    }, [])

    return(
        <>
            <div className={styles.divHeader}>
                <p className={styles.textLogo}>Logo</p>
                <div className={styles.divMenu}>
                    <div id="divLogin" className={styles.divLogin}>
                        <a href="/login" className={styles.btnSignIn}>Sign-in</a>
                        <a className={styles.btnSignUp}>Sign-up</a>
                    </div>
                    <div id="divUser" className={styles.divUser}>
                        <p>Olá, {name}!</p>
                    </div>
                    <div id="divNone" className={styles.divNone}>
                        <p></p>
                    </div>
                </div>
            </div>
        </>
    );
}
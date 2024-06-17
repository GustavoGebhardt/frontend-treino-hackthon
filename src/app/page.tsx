"use client"

import { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import gemini from "./api/gemini/route";
import styles from "./page.module.css";

export default function Home() {

  const [ask, setAsk] = useState("")
  const [res, setRes] = useState("")

  async function sendGemini(){
    const resGemini = gemini(ask)
    setRes(await resGemini)
  }
  return (
    <>
      <Header />
        <input 
          type="text"
          value={ask}
          onChange={(e) => setAsk(e.target.value)}
        />
        <button onClick={sendGemini}>Enviar</button>
        <p>{res}</p>
      <Footer />
    </>
  );
}

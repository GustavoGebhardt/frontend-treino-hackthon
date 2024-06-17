import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers'

export async function POST(req: NextRequest) {
  try {
    const valor = await req.text()
    const valorArray = valor.split("&")

    let email = valorArray[0].substring(6, valorArray[0].length)
    for(let i = 0; i < email.length; i++){
        if(email.charAt(i) == "%" && email.charAt(i+1) == "4" && email.charAt(i+2) == "0"){
            email = email.substring(0, i) + "@" + email.substring(i+3, email.length)
        }
    }
    let passwd = valorArray[1].substring(7, valorArray[1].length)

    const response = await fetch("https://backend-treino-hackathon.onrender.com/session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            senha: passwd
        })
    })
    const responseData = await response.json()
    cookies().set('token', responseData.token,)
    cookies().set('name', responseData.usuario.nome)

    return NextResponse.redirect(new URL("/", req.url))
  } catch (error) {
    return NextResponse.redirect(new URL("/", req.url))
  }
}

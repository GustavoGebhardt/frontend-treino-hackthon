"use server"

import { cookies } from 'next/headers'

export async function authToken(){
    const token = cookies().get("token")?.value
    const response = await fetch("https://backend-treino-hackathon.onrender.com/verificarToken", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
    })
    const responseData = await response.json()
    if(responseData.auth == true){
        return true
    } else{
        return false
    }
}
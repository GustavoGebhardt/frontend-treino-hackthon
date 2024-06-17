import { NextRequest, NextResponse } from "next/server"
import { authToken } from "./app/api/auth/authToken"

export default async function middleware(request: NextRequest){
  //URL da pagina de erro
  const erroURL = new URL("/", request.url)

  //Validando o token
  if(await authToken() != true){
    //Retornar pagina de erro
    return NextResponse.redirect(erroURL)
  }
  console.log(await authToken())
}

export const config = {
  //Caminhos que serão controlados
  matcher: [
    "/dashboard",
  ]
}
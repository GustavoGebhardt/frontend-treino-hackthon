"use server"

import { cookies } from 'next/headers'

export default async function userName(){
    const name = cookies().get("name")?.value
    return name
}
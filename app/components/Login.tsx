'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"

 

function Login() {
  return (
    <div className="bg-[#74AA9C] h-screen flex flex-col items-center justify-center text-center  ">
        <Image 
        src= "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/2048px-ChatGPT_logo.svg.png"
        width ={300} height = {300}
        alt = "logo"
        >
        </Image>
        <button 
        // signin 
        onClick={() => signIn("google")} 
        className="tex-white font-bold text-3xl animate-pulse "> Sign in to our AI Bot</button>
    </div>
  )
}

export default Login
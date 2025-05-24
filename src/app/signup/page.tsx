/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"
import Dashboard from "@/components/dashboard"


export default function SignUpPage(){
    const router = useRouter();
    const [user,setUser] = useState({
        email:"",
        password:"",
        username:""
    })
    const [buttonDisabled,setButtonDisabled] = useState(false)
    const [loader,setLoader] = useState(false)
    const onSignUp = async () => {
        try {
            setLoader(true)
        const response = await axios.post("api/users/signup",user);
        console.log("Signup success",response.data);
        router.push("/login");
        } catch (error:any) {
            console.log("Sign-up failed",error.message)
            toast.error(error.message)
        }
        finally{
            setLoader(false)
        }
    }
    
    useEffect(()=>{
        if(user.email.length > 0 && user.password.length>0 && user.username.length>0)
        {
            setButtonDisabled(false)
        }
        else
        {
            setButtonDisabled(true)
        }
    },[user])
    
    return <div className="flex flex-col items-center
    justify-center min-h-screen py-2">
        <Dashboard/>
        <h1>{ loader ? "Processing": "Sign-up"}</h1>
        <hr />
        <label htmlFor="username">username</label>
        <input className="p-2 border border-gray-300 rounded-lg
        mb-4 focus:outline:none focus:border-gray-600 text-black"
        id="username"
        type="text"
        placeholder="username"
        value={user.username}
        onChange={(e)=>setUser({...user,username:e.target.value})}
        />
        <label htmlFor="email">email</label>
        <input className="p-2 border border-gray-300 rounded-lg
        mb-4 focus:outline:none focus:border-gray-600 text-black"
        id="email"
        type="text"
        placeholder="email"
        value={user.email}
        onChange={(e)=>setUser({...user,email:e.target.value})}
        />
        <label htmlFor="password">password</label>
        <input className="p-2 border border-gray-300 rounded-lg
        mb-4 focus:outline:none focus:border-gray-600 text-black"
        id="password"
        type="password"
        placeholder="password"
        value={user.password}
        onChange={(e)=>setUser({...user,password:e.target.value})}
        />
        <button 
        onClick={onSignUp}
        className="p-2 border border-gray-300
        rounded-lg mb-4 focus:outline-none
        focus:border-gray-600">
            { buttonDisabled ? "No sign-up" : "Sign-up here"}
        </button>
        <Link href = "/login">Visit login page</Link>
    </div>
}
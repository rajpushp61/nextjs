/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function VerifyEmailPage() {

    const[token, setToken] = useState("");
    const[verified, setVerified] = useState(false);
    const[error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            const response = await axios.post("/api/users/verifyemail", { token });
            console.log(response);
            
            setVerified(true);
            
        } catch (error:any) {
            setError(true);
            console.log(error.response.data);
            
        }
    }
    useEffect(() => {
        const urltoken = window.location.search.split("=")[1];
        setToken(urltoken || "");
    },[]);


    useEffect(() => {
    if (token.length > 0) {
        verifyUserEmail();
    }
}, [token]);

return (
    <div className="flex flex-col items-center 
    justify-center min-h-screen py-2"> 
    <h1 className="text-4xl font-bold">Verify Email</h1>
    <h2 className="p-2 bg-orange-500 text-black">
        {token ? `${token}`:"no token"}</h2> 
     {verified && (
        <div> 
    <h2 className="text-2xl">Email Verified</h2>
    <Link href="/login">
       <button>Login</button> 
    </Link>
        </div>
     )}
     {error && (
        <div> 
    <h2 className="text-2xl bg-red-500
    text-black">Error </h2>
        </div>
     )}                                                                                                  
    </div>
  );
}
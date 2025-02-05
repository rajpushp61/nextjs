/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs"

export const sendEmail = async({email,emailType,userId}:any)=>
    {
        try {
            //create a hased token 
          const hasedToken = await  bcryptjs.hash(userId.toString(),10)
        if(emailType==="VERIFY"){
            await User.findByIdAndUpdate(userId,
                {
                    verifyToken:hasedToken,
                    verifyTokenExpiry:Date.now()+3600000
                }
            )
        }
        else if(emailType==="RESET")
        {
            await User.findByIdAndUpdate(userId,
                {
                    forgotPasswordToken:hasedToken,
                    forgotPasswordTokenExpiry:Date.now()+3600000
                }
            )
        }
       // Looking to send emails 
            const  transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
        user: process.env.USER,
        pass: process.env.PASS

        }
  });  
        const mailOptions = {
            from:"pushp@hitman.com",
            to:email,
            subject:emailType==="VERIFY"?"verify your email":"reset your password",
            html:`<p>click <a href="http://localhost:3000/verifymail?token=${hasedToken}">here</a> to 
            ${emailType === "VERIFY" ? "verify your email":
                "reset your password"}
                or copy and paste the link below in your
                browser.<br>${process.env.DOMAIN}/verifyemail?
                    token=${hasedToken}
                </p>`
        }
      const mailresponse = await transport.sendMail(mailOptions)
       return mailresponse
        } catch (error:any) {
            throw new Error(error.message);
        }
}
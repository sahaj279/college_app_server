const express=require('express')
const sendEmail=require('../utils/sendEmail')
const authRouter=express.Router()

//AUTH ROUTE
authRouter.get('/auth',(req,res)=>{
    res.json({'page':'auth'})
})

//GENERATING OTP AND SENDING MAIL
authRouter.get('/auth/generate-otp',async(req,res)=>{
    try {
        const email=req.headers.email;
        const otp=1234; //TODO Implement a logic to generate otp
        const message = `Please find the OTP to login to your account\n\n${otp}\n\nPlease ignore if the above request was not made by you.`;
        await sendEmail({
            email: email,
            subject: "OTP for Ietian's Desk ",
            message,
          });
          res.status(200).json({
            success: true,
            message: `Email sent to ${email}`
          });

    } catch (error) {
        res.status(500).json({error:error.message});
    }
})

module.exports=authRouter
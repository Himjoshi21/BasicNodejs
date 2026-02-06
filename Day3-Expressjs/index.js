import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app=express();

// using the signed cookie with secert key in env file
app.use(cookieParser(process.env.COOKIE_SECERT)) // to parse the incoming cookies in the request

// How you can set cookies

app.get("/set-cookie",(req,res)=>{
    res.cookie("name","Himanshu",{
        signed:true,
        maxAge:1000*60*6024*30
    
    });// to set a cookie with name "theme" and value "dark" and signed it with the secert key

    res.send("Cookie has been set!")
})

// How you can read cookies
app.get("/read-cookie",(req,res)=>{
    //const rawCookies=req.headers.cookie; bad approach to read cookies
    const parsedCookie=req.cookies.theme;
    console.log(req.signedCookies)

    res.send(`Raw Cookies:${JSON.stringify(req.signedCookies)}`); // to read the cookies from the request
})
 
app.listen(3000,(req,res)=>{
    console.log("port is running on 3000")
})
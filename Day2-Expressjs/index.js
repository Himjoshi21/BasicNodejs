import express from "express";
import userRouter from "./routes/user.routes.js";

const app = express();
// Global Middleware-> this applies to all routes

const logReq=(req,res,next)=>{
    console.log(req.url,req.method)
    next()
}
//app.use(logReq); // to apply the middleware globally

app.get("/ping",(req,res)=>{
    res.send("Pong");
})

// this way to use specific middleware for specific route
app.get("/hello",logReq,(req,res,next)=>{
    res.send("World");
})

app.use("/api/v1/users",userRouter); // to use the user router for all routes starting with "/users"

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

// use case of middleware
// 1.authentication
// 2.error
// 3.protected routes
// 4.validation
// 5.parsing
// 6.rate limiting
// 7.compression
// 8.CORS
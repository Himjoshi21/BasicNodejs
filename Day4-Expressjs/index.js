import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import authRoutes from "./routers/auth.routes.js";
import taskRoutes from "./routers/task.routes.js";


const app = express();
app.use(express.json());

app.use(cookieParser());

app.use(
    session(
        {
            secret: "mysecret",
            saveUninitialized:false,//don't create session until something stored
            resave:false,//don't save session if unmodified
            cookie:{
                maxAge: 1000 * 60 * 60 * 24
            }

        }
))


app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/task",taskRoutes)













// app.get("/",(req,res)=>{
//   console.log(req.session);
//   console.log(req.session.id);

//   res.send("Hello World")

// })
// // how to store data in session
// app.get("/login",(req,res)=>{
//   req.session.user={
//     name:"Himanshu",
//     age:21
//   }
//   res.json({
//     user:req.session.user
//   })
// })

// // how to access session data
// app.get("/user", (req,res)=>{
//   res.json({
//     user:req.session.user
//   })
// })



app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000")
})
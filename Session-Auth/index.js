import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.routes.js";
import protectedRoutes from "./routes/protected.routes.js";


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
    session({
        secret: "my_secret_key",
        resave: false,
        saveUninitialized: false,
        cookie:{
            maxAge: 1000 * 60 * 60 * 24, // 1 day
             secure: false, // Set to true if using HTTPS
             httpOnly: true
        }
    })
);

app.use("/api/auth",authRoutes);
app.use("/api",protectedRoutes);


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
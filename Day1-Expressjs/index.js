 import express from "express";

 const app =express();

 app.use(express.json()); // to parse the incoming request body as JSON

app.get("/:id",(req,res)=>{
    // const {id} =req.params;
    // const {name,age} =req.query;
    console.log({
       params:req.params, // to accept we have sent parameter in "/"
       query:req.query,

    });
    // 1 req.params
    // 2 req.query
    // 3 req.body
    // 4 req.headers
    // 5 req.cookies
    res.json({
        message:"Hello Ji"
    })

})

app.post("/create",(req,res)=>{
    const{username}=req.body; 
    res.json({
        message:"Hello from create endpoint",
        data:username
    })

})
 

 app.listen(3000,()=>{
    console.log("Server is up and running")
 })




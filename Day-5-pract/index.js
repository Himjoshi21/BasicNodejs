const http=require("node:http");
const fs=require("node:fs");
const server = http.createServer((req,res)=>{
    //1. downloading file in a bad way
    // fs.readFile("./sample.txt", "utf-8",(err,data)=>{
    //     if(err){
    //         console.log(err);
    //         res.end()
    //     } else {
    //         res.end(data) 
    //     }
    // })
    //* 2. Downloading file in a good way using streams
    // const readStream=fs.createReadStream("./sample.txt","utf-8")
    // readStream.on("data",(chunk)=>{
    //     res.write(chunk)
    // })
    // readStream.on("end",()=>{
    //     res.end()
    // })
    // 3.copying file from sample.txt to sample2.txt using streams and fs
    const readStream = fs.createReadStream("./sample.txt", "utf-8");
    const writeStream = fs.createWriteStream("./sample2.txt", "utf-8");
    readStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("File copied successfully");
})
});

server.listen(3000,()=>{
    console.log("server is listening on port 3000")
})
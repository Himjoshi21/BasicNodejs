const {Readable}=require("stream");
const {Writable}=require("stream");

const readableStream=new Readable({
    read(){

    }
})


readableStream.on("data",(chunk)=>{
        console.log(chunk)
        writeableStream.write(chunk)
})

readableStream.push("hello World my name is himanshu joshi")

const writeableStream=new Writable({
    write(chunk){
     console.log("writing",chunk.toString())
    }
})
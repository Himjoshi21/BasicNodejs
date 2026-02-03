process.env.UV_THREADPOOL_SIZE=4; // no of threadpool can be increase fthrough cli
const os= require("os")
console.log(os.cpus().length)


console.log("hello world from top level");





setTimeout(() => {
    console.log("Hello from timer-1")
},0);

console.log("hello world from top level2")
const os= require("os")
console.log(os.cpus().length)


console.log("hello world from top level");





setTimeout(() => {
    console.log("Hello from timer-1")
},0);

console.log("hello world from top level2")
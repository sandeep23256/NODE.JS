const h=require('http')
h.createServer((req,res)=>{
    res.write("welcome to node js 1234 and ")
    res.end()
}).listen(3000,console.log("server start localhost:3000"))

const h = require('http')
//console.log(h)
h.createServer((req,res)=>{
    res.write("Welcome node js")
    res.end()

}).listen(3000,console.log("server start localhost:3000"))

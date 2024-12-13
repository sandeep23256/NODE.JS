const f = require('fs')
//console.log(f)

//async
// f.readFile(__dirname+"/pn.txt","utf8",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

// console.log("web design full stack")

//sync
const data = f.readFileSync(__dirname +"/pn.txt","utf8");
console.log(data)
console.log("hello sir")
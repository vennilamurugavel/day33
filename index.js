
const data1=new Date();
console.log(data1);
const fs=require('fs')
 fs.readFile('current date-time.txt','utf-8',(err,data)=>{
    if(err)
    console.log(err)
else
console.log(data)})


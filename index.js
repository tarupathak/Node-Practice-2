// const colors= require('colors');
// console.log('package.json'.red);
// console.warn('Try taru');
// node js is async and single threaded

// const http = require('http');
// const data= require('./data');
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5000);

// console.log(process.argv)

// const fs = require("fs");
// const input = process.argv;
// fs.writeFileSync(input[2], input[3]);

// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("Invalid input");
// }

// console.log(process.argv[2])

const fs = require('fs');
const path = require('path');
const dirPath =path.join(__dirname,'files');
// console.warn(dirPath)

// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt", "a simple text file"); //or fs.writeFileSync("hello${i}.txt", "a simple text file")
// }

fs.readdir(dirPath,(err,files)=>{
    // console.warn(files)
    files.forEach((item)=>{
          console.log("file name is",item)
    })
})
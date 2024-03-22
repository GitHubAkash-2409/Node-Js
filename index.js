//  const main = require('./main')

//  console.log(main)

// const fs = require('fs');
// fs.writeFileSync("akash.txt", "This is my name")

// fs.writeFileSync("kumar.txt", "this is my title")

// console.log(__dirname)//how to know directory name
// console.log(__filename)//how to know file name

//Creation Of Server
// const http = require('http');
// http.createServer((req, res)=>{
//     res.writeHead("<p>Hello This is my name</p>");
//     res.end();
// }).listen(4500);

// const http = require('http');
// function dataControl(req, res)
// {
//     res.write("Hello World");
//     res.end();
// }
// http.createServer(dataControl).listen(4500);
// const http = require('http')

// const colors = require('colors');
// console.log("hello".red);

// import chalk from "chalk";
// console.log(chalk);

// const chalk = require("chalk");
// console.log(chalk);

// const colors = require('colors');
// console.warn("Code Step By Step".bgYellow);

// console.log(100+100);

// creation of server with api with static data/////////////
// const http = require('http');
// const data = require('./data');
// http.createServer((req,res)=>{
// res.writeHead(200,{'Content-Type':'application/json'});
// res.write(JSON.stringify(data));
// res.end();
// }).listen(5000);
// ////////////////////////////////////////////////////

//Input from command line//////////////////
// console.log(process.argv[2])

// const fs = require('fs');

// const input = process.argv;
// fs.writeFileSync(input[2],input[3])

// const fs = require('fs');
// const input = process.argv;
// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4])
// }else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("Invalid Input")
// }
/////////////////////////////////////////

/////////Display File List From Folder////////

// const fs  = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');
// // console.log(dirPath);
// // for (i=0;i<5;i++){
// //     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple text file");
// // }

// fs.readdir(dirPath,(err,files)=>{
//     // console.warn(files);
//     files.forEach((items)=>{
//         console.warn("file name is:-",items);
//     })
// })

//////////////////////////////////////////////////

///////CRUD Operation with file system/////////////

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/apple.txt`
// fs.writeFileSync(filePath,'this is a simple text');

////how to read file////
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// });
////how to update file////
// fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//     if(!err) console.log("File is updated")
// })
////how to rename file////
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("File is updated")
// })
////how to delete file////
// fs.unlinkSync(`${dirPath}/fruit.txt`);

//Buffer --->> temporary memory location

/////////////////////////////////////////////////

//////////////Asynchronous Basics in NodeJs//////////

// console.log("first");

// setTimeout(()=>{
//     console.log("middle");
// },2000);

// console.log("last");

//////////////////////////////////////////////////

//////////Handle Asynchronous Data///////////////

// let a = 20;
// let b = 0;

// let waitingData = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },2000)
// })

// waitingData.then((data)=>{
//     b = data;
//     console.log(a+b)
// })

/////////////////////////////////////////////////////

/////////how Node Js Works//////////

//---> first code go in callstack
//---> and after that it go on node apis
//---> and after that it go in callback queue and it contineousily run again and again.

//////////////////////////////////////////////////////

// //////////Express Js Into//////////////////
// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//     res.send("Hello this is Home Page");
// });
// app.get('/aboutUs',(req,res)=>{
//     res.send("Hello this is About Us Page");
// });
// app.get('/help',(req,res)=>{
//     res.send("Hello this is Help Page");
// });
// app.get('/contact',(req,res)=>{
//     res.send("Hello this is Contact Page");
// });

// app.listen(5000);

// ////////////////////////////////////////////

/////Routing Params (Request and Response)/////
// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//     console.log("data sent by browser ===>",req.query.name);
//     res.send("Welcome,"+req.query.name);
// });

// app.listen(5000);

// get by browser (http://localhost:5000/?name=akash)
// ////////////////////////////////////////////

/////Render HTML and JSON/////
// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//     res.send(`
//     <h1>Welcome to Home Page</h1>
//     <a href="aboutUs">go to about page</a>
//     `);
// });
// app.get('/aboutUs',(req,res)=>{
//     res.send(`
//     <input type="text" placeholder="About US Page"/>
//     <a href="/">go to home page</a>
//     `);
// });
// app.get('/help',(req,res)=>{
//     res.send(`
//     [
//         {
//             "id":1,
//             "name":"akash",
//             "email":"akash@test.com"
//         },
//         {
//             "id":2,
//             "name":"gaurav",
//             "email":"gaurav@test.com"
//         },
//         {
//             "id":3,
//             "name":"santosh",
//             "email":"santosh@test.com"
//         }
//     ]
//     `);
// });
// app.listen(5000);
//////////////////////////////////////////////

/////Make HTML Page and make folder for HTML file and access it/////
// const express = require('express');
// const path = require('path');
// const app = express();
// const publicPath = path.join(__dirname, 'public');
// console.log(publicPath);
// app.use(express.static(publicPath));
// app.listen(5000);
/////////////////////////////////////////////

/////Remove Extension from URL/////
// const express = require("express");
// const path = require("path");
// const app = express();
// const publicPath = path.join(__dirname, "public");
// app.get("/", (req, res) => {
//   res.sendFile(`${publicPath}/index.html`);
// });
// app.get("/about", (req, res) => {
//   res.sendFile(`${publicPath}/about.html`);
// });
// app.get("/help", (req, res) => {
//   res.sendFile(`${publicPath}/help.html`);
// });
// app.get("*", (req, res) => {
//   res.sendFile(`${publicPath}/pnf.html`);
// });
// app.listen(5000);
/////////////////////////////////////////////

/////EJS Template Engine/////
// const express = require("express");
// const path = require("path");
// const app = express();
// const publicPath = path.join(__dirname, "public");
// app.set('view engine', 'ejs');
// app.get("/", (req, res) => {
//   res.sendFile(path.join(publicPath, "index.html"));
// });
// app.get("/profile", (req, res) => {
//     const user = {
//         name: "akash kumar",
//         email: "akash@test.com",
//         city: "noida"
//     };
//   res.render('profile', { user });
// });
// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });
///////////////////////////////////////////////////

//////Dynamic Page with EJS//////////
// const express = require("express");
// const path = require("path");
// const app = express();
// const publicPath = path.join(__dirname, "public");
// app.set('view engine', 'ejs');
// app.get("/", (req, res) => {
//   res.sendFile(path.join(publicPath, "index.html"));
// });
// app.get("/profile", (req, res) => {
//     const user = {
//         name: "akash kumar",
//         email: "akash@test.com",
//         city: "noida",
//         skills:['React','node','javascript','php']
//     };
//   res.render('profile', { user });
// });

// app.get("/login",(req,res)=>{
//     res.render('login');
// })
// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });
/////////////////////////////////////////////////

////////Middleware////////////
// const express = require('express');
// const app = express();

// const reqFilter = (req,res,next)=>{
//     if(!req.query.age)
//     {
//         res.send("Please Provide Age");
//     }
//     else if(req.query.age<18)
//     {
//         res.send("You can not access this page");
//     }
//     else
//     {
//         next();
//     }
// }

// app.use(reqFilter)

// app.get('/',(req,res)=>{
//     res.send("Welcome to Home Page");
// })
// app.get('/users',(req,res)=>{
//     res.send("Welcome to Users Page");
// })

// app.listen(5000);
// /////////////////////////////////////////////

// //////Route Level Middleware/////////
// const express = require('express');
// const reqFilter = require('./middleware')
// const app = express();
// const route = express.Router();

// route.use(reqFilter);
// app.get('/',(req,res)=>{
//     res.send("Welcome to Home Page");
// })
// route.get('/users',(req,res)=>{
//     res.send("Welcome to Users Page");
// })
// app.get('/contact',(req,res)=>{
//     res.send("Welcome to Contact Page");
// })
// route.get('/about',(req,res)=>{
//     res.send("Welcome to About Page");
// })

// app.use('/',route);

// app.listen(5000);
///////////////////////////////////////////////////

////////////Connection of mongodb with node from another file using two methods///////////

//  const dbConnect = require('./mongodb')

/////Using .then function//////
// dbConnect().then((res)=>{
//     res.find({}).toArray().then((data)=>{
//         console.log(data);
//     })
// })
/////////////////////////////////

/////Using Async Await///////
//  const main = async ()=>{
//     let data = await dbConnect();
//     data = await data.find({}).toArray();
//     console.log(data);
//  }
//  main();
//////////////////////////////

/////////////////////////////////////////////////////////

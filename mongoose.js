// ////Mongoose with node with Static data////
// const mongoose = require("mongoose");

// const main = async () => {
//   await mongoose.connect("mongodb://localhost:27017/e-comm");
//   const productSchema = new mongoose.Schema({
//     name: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     brand: {
//       type: String,
//       required: true,
//     },
//     category: {
//       type: String,
//       required: true,
//     },
//   });

//   const productsModel = mongoose.model("products", productSchema);
//   let data = new productsModel({
//     name: "m12",
//     price: 1000,
//     brand: "India",
//     category: "mobile",
//   });
//   let result = await data.save();
//   console.log(result);
// };
// main();
// /////////////////////////////////////////////

// ///////CRUD With Mongoose////////
// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/e-comm");
// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   brand: String,
//   category: String,
// });
///////////////////////////////////
// const saveInDB = async () => {
//   const Product = mongoose.model("products", productSchema);
//   let data = new Product({
//     name: "max 100",
//     price: 200,
//     brand: "maxx",
//     category: "Mobile",
//   });
//   const result = await data.save();
//   console.log(result);
// };
// saveInDB();
///////////////////////////////////
///////////////////////////////////
// const updateInDB = async () => {
//   const Product = mongoose.model("products", productSchema);
//   let data = await Product.updateOne(
//     { name: "max4" },
//     {
//       $set: { price: 550, name: "max pro 6" },
//     }
//   );
//   console.log(data);
// };
// updateInDB();
///////////////////////////////////
///////////////////////////////////
// const deleteInDB = async () => {
//   const Product = mongoose.model("products", productSchema);
//   let data = await Product.deleteOne({ name: "max 100" });
//   console.log(data);
// };
// deleteInDB();
///////////////////////////////////
///////////////////////////////////
// const findInDB = async () => {
//   const Product = mongoose.model("products", productSchema);
//   let data = await Product.find({ name: "max2" });
//   console.log(data);
// };
// findInDB();
///////////////////////////////////

/////////Post API with Mongoose by the help of schemas and model ///////////
// const express = require("express");
// require("./config");
// const Product = require("./product");
// const app = express();
// app.use(express.json());

// app.post("/create", async (req, res) => {
//   let data = new Product(req.body);
//   const result = await data.save();
//   console.log(result);
//   res.send(result);
// });

// app.get("/list", async (req, res) => {
//   let data = await Product.find();
//   res.send(data);
// });

// app.delete("/delete/:_id", async (req, res) => {
//   console.log(req.params);
//   let data = await Product.deleteOne(req.params);
//   res.send(data);
// });

// app.put("/update/:_id", async (req, res) => {
//   console.log(req.params);
//   let data = await Product.updateOne(req.params, { $set: req.body });
//   res.send(data);
// });

// app.listen(5000);

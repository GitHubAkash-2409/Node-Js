const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require("mongodb");
const app = express();

/////Using Middleware for parsing JSON data from requests/////////
app.use(express.json());
///////////////////////////////////////////

////////Get API Method//////////
app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  res.send(data);
});
////////////////////////////////

////////Post API Method//////////
app.post("/", async (req, res) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  res.send(result);
});
//////////////////////////////////

////////Put API Method//////////
app.put("/", async (req, res) => {
  let data = await dbConnect();
  let result = await data.updateOne(
    {
      name: req.body.name,
    },
    { $set: req.body }
  );
  res.send({ result: "update" });
});

///If you want to update name then you need to change in link like this -->> localhost:5000/any_name
///and one more thing, you have to change {name:req.body.name} to {name:req.params.name}.
//////////////////////////////////

////////Delete API Method//////////
app.delete("/:id", async (req, res) => {
  let data = await dbConnect();
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send(result);
});
///If you want to delete anything then you need to change the url according to your need like (name/id)
///////////////////////////////////
app.listen(5000);

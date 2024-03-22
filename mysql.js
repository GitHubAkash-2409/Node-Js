//NodeJs with MYSQL Database//
const express = require("express");
const conn = require("./mysql_conn");
const app = express();
app.use(express.json());

//Get API in nodeJS  with mysql//
// app.get("/", (req, res) => {
//   conn.query("select * from user", (err, result) => {
//     if (err) {
//       res.send("error in api");
//     } else {
//       res.send(result);
//     }
//   });
// });
//////////////////////////////////
//Post API in nodeJS  with mysql//
// app.post("/", (req, res) => {
//   //   const data = { admin: "sjjkhsd", password: "3675673" };//this for static data
//   const data = req.body; //this for dynamic data
//   conn.query("INSERT INTO user SET ?", data, (error, result, fields) => {
//     if (error) throw error;
//     res.send(result);
//   });
// });
//////////////////////////////////
//Post API in nodeJS  with mysql//
//This IS For Static Data//
// app.put("/", (req, res) => {
//   const data = ["Gaurav Kumar", "123123", 3];
//   conn.query(
//     "UPDATE user SET admin = ?, password = ? where id = ?",
//     data,
//     (error, result, fields) => {
//       if (error) throw error;
//       res.send(result);
//     }
//   );
// });
////////////////////////////
//This Is For Dynamic Data//
// app.put("/:id", (req, res) => {
//   const data = [req.body.admin, req.body.password, req.params.id];
//   conn.query(
//     "UPDATE user SET admin = ?, password = ? WHERE id = ?",
//     data,
//     (error, result, fields) => {
//       if (error) throw error;
//       res.send(result);
//     }
//   );
// });
///////////////////////////////
//NodeJs Delete API with mysql//
// app.delete("/:id", (req, res) => {
//   conn.query(
//     "DELETE FROM user WHERE id =" + req.params.id,
//     (error, result, field) => {
//       if (error) throw error;
//       res.send(result);
//     }
//   );
// });
///////////////////////////////////
app.listen(5000);

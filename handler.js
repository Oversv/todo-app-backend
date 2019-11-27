const express = require("express");
const serverlessHttp = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");


const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "todo_app"
});

app.get("/tasks", function(request, response){

  connection.query("SELECT * FROM task", function(err, data) {
    if (err) {
      console.log("Error fetching tasks", err);
      response.status(500).json({
        error: err
      });
    } else {
      response.json({
        tasks: data
      });
    }
  });

});

app.post("/tasks", function(request, response){
  //INSERT
  
});

app.delete("/tasks/:taskId", function (request, response) {
  //DELETE
});

app.put("/tasks/:taskId", function (request, response) {
  //UPDATE
});

module.exports.tasks = serverlessHttp(app);
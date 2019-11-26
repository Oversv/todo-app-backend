const express = require("express");
const serverlessHttp = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/tasks", function(request, response){
  //Do the logic for getting all the tasks from the DB

  response.status(200).send("Getting all the tasks! Yay!");
});

app.post("/tasks", function(request, response){
  const task = request.body;
  //{text: "do the dishes", completed: true, date: "2019"}

  response.status(201).send("Succesfully created task:" + task.text);
});

app.delete("/tasks/:taskId", function (request, response) {
  const taskId = request.params.taskId;
  response.status(200).send("Deleted task with id " + taskId);
});

app.put("/tasks/:taskId", function (request, response) {
  const taskId = request.params.taskId;
  const updatedTask = request.body;
  response.status(200).send("Updated task with id " + taskId);
});

module.exports.tasks = serverlessHttp(app);
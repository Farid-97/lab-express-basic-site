const { response } = require("express");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/home", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + "/views/site.html");
});
app.get("/About", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + "/views/about.html");
});
app.get("/Works", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + "/views/works.html");
});
app.get("/Photo Gallery", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + "/viewsPhotoGallery.html");
});

app.listen(3000, () => console.log("My first site created"));

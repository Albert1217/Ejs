console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");

// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3 Views code
app.set("views", "views");
app.set("views engine", "ejs");

// 4 Routing code
app.set("/create-item", (req, res) => {
  console.log(req);
  res.json({ tes: "success" });
});

// app.get("/author", (req, res) => {
//   res.render("author");
// });

app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});

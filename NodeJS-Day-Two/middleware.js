const express = require("express");
const app = express();

app.use(express.json());

const check = (req, res, next) => {
  console.log("Middleware function executed");
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", check, (req, res) => {
  res.send("This is the about page");
});

app.get("/products", check, (req, res) => {
  res.send("This is the products page");
});

app.post("/data", (req, res) => {
  console.log("Received data:", req.body);
  res.send("Data received");
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

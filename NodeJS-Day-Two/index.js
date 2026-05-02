const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.get("/products", (req, res) => {
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

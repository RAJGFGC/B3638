const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.all("/test", (req, res) => {
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Headers:", req.headers);
  console.log("Query Params:", req.query);
  console.log("Body:", req.body);
  res.send({
    message: "Request received",
    method: req.method,
    url: req.url,
    headers: req.headers,
    query: req.query,
    body: req.body,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

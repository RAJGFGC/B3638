const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is the about page");
    res.end();
  } else if (req.url === "/data" && req.method === "POST") {
    let body =
      "asgdf wgefiwgefklbdf giu    eiugf df ;  uwegf iuidfsbd fuwef ugwe ufbkBF    IUEGF ";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log("Received data:", body);
      res.write("Data received");
      res.end();
    });
  } else {
    res.write("Page not found");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

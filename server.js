const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

const app = express();

app.use("/", serveStatic(path.join(__dirname, "/dist")));

app.get(/.*/, function(req, res) {
  console.log("req.originalUrl", req.originalUrl)
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log("fullUrl", fullUrl )
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`app is listening on port: ${port}`);
console.log(`env api ${process.env.VUE_APP_API_URL}`);
console.log(`VUE_APP_DOMAINURL ${process.env.VUE_APP_DOMAINURL}`);

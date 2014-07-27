var app = require("express")();
var http = require("http");
var server = http.createServer(app);

app.use(require("connect-assets")());

app.get("/", function (req, res) {
  res.render("index.html.ejs");
});

server.listen(process.env.PORT || 3000);

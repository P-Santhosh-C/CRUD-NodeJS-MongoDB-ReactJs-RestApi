var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Users", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./routers");
routes(app);

app.use((req, res) => {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

// app.listen(port);
app.listen(port, () => {
  console.log("server is running on PORT 3000....");
});

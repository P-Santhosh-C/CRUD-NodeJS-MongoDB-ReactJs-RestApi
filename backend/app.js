const express = require("express");
const app = express();
port = process.env.PORT || 3001;
const mongoose = require("mongoose");
const cors = require("cors");
const url = "mongodb://localhost:27017/poc";
const employeeRoutes = require("./routes/employe");

mongoose.Promise = global.Promise;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB is connected"));

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use("/employee", employeeRoutes);

app.use((req, res) => {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port, () => {
  console.log("Server is Runing on " + port);
});

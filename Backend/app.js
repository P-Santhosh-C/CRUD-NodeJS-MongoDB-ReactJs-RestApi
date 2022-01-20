const express = require("express");
const app = express();
port = process.env.PORT || 5001;
const mongoose = require("mongoose");
const cors = require("cors");
const url = "mongodb://localhost:27017/CurdEmp";
const employeeRoutes = require("./routes/employe");

mongoose.Promise = global.Promise;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() =>
    app.listen(port, () => {
      console.log(`Server Running on Port: http://localhost:${port}/employee`);
    })
  )
  .catch((error) => console.log(error.message));

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use("/employee", employeeRoutes);

app.use((req, res) => {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

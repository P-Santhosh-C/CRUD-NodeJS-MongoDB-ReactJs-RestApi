const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/poc", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB is connected"));

app.use(express.json());

app.use(cors({ origin: "*" }));

app.get("/", async (req, res) => {
  try {
    const users = await User.find()
      .exec()
      .then((docs) => {
        const response = {
          count: docs.length,
          products: docs.map((doc) => {
            return {
              name: doc.name,
              price: doc.price,
              _id: doc._id,
              request: {
                type: "GET",
                url: "http://localhost:3000/products/" + doc._id,
              },
            };
          }),
        };
        res.status(200).json(response);
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message, error: err });
  }
});

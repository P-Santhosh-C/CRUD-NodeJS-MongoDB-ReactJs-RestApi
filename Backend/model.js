"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Schema = new Schema({
  firstname: { type: String, required: [true, "Category required"] },
  lastName: { type: String, required: [true, "Category required"] },
  email: { type: String, Required: "edition must be filled" },
  status: { type: Boolean, Required: "Book status is required" },
  dop: { type: Date, Required: "Publishers date is required" },
});

module.exports = mongoose.model("Books", Schema);

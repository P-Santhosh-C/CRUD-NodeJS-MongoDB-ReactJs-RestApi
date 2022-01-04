"use strict";
const mongoose = require("mongoose");

let employeeSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    minlength: [3, "First Name Must be at least 3"],
    maxlength: 20,
  },

  Surname: {
    type: String,
    required: [true, "Surname is required"],
    minlength: [3, "Surname Name Must be at least 3"],
    maxlength: 20,
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },

  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: {
      values: ["male", "female"],
      message: "{VALUE} is not supported",
    },
  },

  address: {
    type: String,
    required: [true, "Address is required"],
    maxlength: [50],
  },

  dob: {
    type: Date,
    required: [true, "Date Of Birth is required"],
    max: new Date(),
  },

  mobile: {
    type: String,
    required: [true, "Mobile is required"],
    minlength: [10, "enter valid moblie number"],
    maxlength: [12, "enter valid moblie number"],
  },

  skills: {
    type: String,
    required: [true, "Skills is required"],
    enum: {
      values: ["C", "C++", "java", "php", "python", "html", "css", "JS", "JQ"],
      message: "{VALUE} is not supported",
    },
  },
});

module.exports = mongoose.model("employee ", employeeSchema);

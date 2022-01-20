"use strict";
const mongoose = require("mongoose");

let employeeSchema = mongoose.Schema({

  employeeId:{
    type: String,
    required: [true, 'Employee Id is required'],
    unique: true,
  },

  firstName: {
    type: String,
    required: [true, "First Name is required"],
    minlength: [3, "First Name Must be at least 3"],
    maxlength: 20,
  },
  
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    minlength: [3, "Last Name Name Must be at least 3"],
    maxlength: 20,
  },

  location: {
    type: String,
    required: [true, "Location is required"],
    maxlength: [50],
  },

  mobile: {
    type: String,
    required: [true, "Mobile is required"],
    minlength: [10, "enter valid moblie number"],
    maxlength: [12, "enter valid moblie number"],
  },

  department: {
    type: String,
    required: [true, "Department is required"],
  },
});

module.exports = mongoose.model("employee ", employeeSchema);

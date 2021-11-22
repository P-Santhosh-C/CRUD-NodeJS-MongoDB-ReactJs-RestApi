const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  firstName: {
    type: String,
    required: [true, "First Name is required"],
    min: [3, "First Name Must be at least 3"],
    max: 20,
  },

  Surname: {
    type: String,
    required: [true, "Surname is required"],
    min: [3, "Surname Name Must be at least 3"],
    max: 20,
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
    max: [50],
  },

  dob: {
    type: Date,
    default: Date.now,
    required: [true, "Date Of Birth is required"],
  },

  mobile: {
    type: String,
    required: [true, "Mobile is required"],
    max: 18,
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

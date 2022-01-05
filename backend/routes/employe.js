const express = require("express");
const router = express.Router();
const Employee = require("../models/employeeSchema");
const {
  getEmploye,
  getEmployeById,
  createEmploye,
  updateEmploye,
  deleteEmploye,
} = require("../controllers/employe");

router.get("/", getEmploye);

router.get("/:id", getEmployeById);

router.post("/", createEmploye);

router.put("/:id", updateEmploye);

router.delete("/:id", deleteEmploye);

module.exports = router;

const express = require("express");
const router = express.Router();
const Employee = require("../models/employeeSchema");

router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({
      Count: employees.length,
      employees,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const employees = await Employee.findById(req.params.id);
    if (employees === null) {
      res.json({ error: `No Empolyee found with id ${req.params.id}` });
    } else {
      res.status(200).json({
        employees,
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const add_employees = new Employee(req.body);
  try {
    const new_employees = await add_employees.save();
    res.status(200).json({
      status: "New post has bee added",
      new_employees,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const data = await Employee.findByIdAndUpdate(req.params.id, req.body);
    if (!data)
      res.json({ error: `No Empolyee found with id ${req.params.id}` });
    res.status(200).json({ message: `Employee ${Employee.name} updated` });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Employee.findByIdAndDelete(req.params.id);
    if (!data)
      res.json({ error: `No Empolyee found with id ${req.params.id}` });
    res.status(200).json({ message: `Employee ${Employee.name} deleted` });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

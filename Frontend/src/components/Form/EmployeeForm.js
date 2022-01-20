import React, { useState, useEffect } from "react";
import { Typography, TextField, Paper, Button } from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";

import { createEmployee, updateEmployee } from "../../actions/employees";

const EmployeeForm = ({ currentId, setCurrentId }) => {
  const [employeeData, setEmployeeData] = useState({
    employeeId: "",
    firstName: "",
    lastName: "",
    gender: "",
    location: "",
    mobile: "",
    department: "",
  });
  const employee = useSelector((state) =>
    currentId
      ? state.employees.find((message) => message._id === currentId)
      : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (employee) setEmployeeData(employee);
  }, [employee]);

  const clear = () => {
    setCurrentId(0);
    setEmployeeData({
      employeeId: "",
      firstName: "",
      lastName: "",
      gender: "",
      location: "",
      mobile: "",
      department: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createEmployee(employeeData));
      clear();
    } else {
      dispatch(updateEmployee(currentId, employeeData));
      clear();
    }
  };

  return (
    <Paper elevation={6} className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing Emp "${employee.firstName}"` : "Add Employee"}
        </Typography>
        <TextField
          name="employeeId"
          variant="outlined"
          label="Employee Id"
          fullWidth
          value={employeeData.employeeId}
          onChange={(e) =>
            setEmployeeData({ ...employeeData, employeeId: e.target.value })
          }
        />

        <TextField
          name="firstName"
          variant="outlined"
          label="First Name"
          fullWidth
          value={employeeData.firstName}
          onChange={(e) =>
            setEmployeeData({ ...employeeData, firstName: e.target.value })
          }
        />

        <TextField
          name="lastName"
          variant="outlined"
          label="Last Name"
          fullWidth
          value={employeeData.lastName}
          onChange={(e) =>
            setEmployeeData({ ...employeeData, lastName: e.target.value })
          }
        />

        <TextField
          name="location"
          variant="outlined"
          label="location"
          fullWidth
          value={employeeData.location}
          onChange={(e) =>
            setEmployeeData({ ...employeeData, location: e.target.value })
          }
        />

        <TextField
          name="mobile"
          variant="outlined"
          label="Mobile"
          fullWidth
          value={employeeData.mobile}
          onChange={(e) =>
            setEmployeeData({ ...employeeData, mobile: e.target.value })
          }
        />

        <TextField
          name="department"
          variant="outlined"
          label="Department"
          fullWidth
          value={employeeData.department}
          onChange={(e) =>
            setEmployeeData({
              ...employeeData,
              department: e.target.value,
            })
          }
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          className={classes.buttonSubmit}
          fullWidth
        >
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default EmployeeForm;

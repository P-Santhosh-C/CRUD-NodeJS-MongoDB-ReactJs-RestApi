import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core/";

import { deleteEmployee } from "../../actions/employees";

const Employees = ({ setCurrentId }) => {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Mobile</TableCell>
              <TableCell align="center">Dept</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((emp, index) => (
              <TableRow key={index}>
                <TableCell align="center">{emp.employeeId}</TableCell>
                <TableCell align="center">
                  {emp.firstName}&nbsp;{emp.lastName}
                </TableCell>
                <TableCell align="center">{emp.location}</TableCell>
                <TableCell align="center">{emp.mobile}</TableCell>
                <TableCell align="center">{emp.department}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => setCurrentId(emp._id)}
                    variant="contained"
                    color="secondary"
                    size="small"
                  >
                    Edit
                  </Button>
                  &nbsp;
                  <Button
                    onClick={() => dispatch(deleteEmployee(emp._id))}
                    variant="contained"
                    color="secondary"
                    size="small"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Employees;

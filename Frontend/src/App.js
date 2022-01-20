import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getEmployees } from "./actions/employees";
import { Container, Grow, Grid, AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import Employees from "./components/Employees/Employees";
import EmployeeForm from "./components/Form/EmployeeForm";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getEmployees());
  }, [currentId, dispatch]);

  return (
    <>
      <Container MaxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h3" align="center">
            Employees Data
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={{ xs: 2, md: 3 }}
            >
              <Grid item xs={12} sm={7}>
                <Employees setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <EmployeeForm
                  currentId={currentId}
                  setCurrentId={setCurrentId}
                />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};

export default App;

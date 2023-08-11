import React from "react";
import * as Yup from "yup";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogIn } from "../../features/slice/FormSlice";
import { useEffect } from "react";
import { useLazyGetAllUsersQuery } from "../../features/api/UserApi";
import { getAllUsers } from "../../features/slice/FormSlice";

const theme = createTheme({
  palette: {
    primary: {
      main: "#cc9966",
    },
  },
});

function Login() {
  const [trigger, { data }] = useLazyGetAllUsersQuery();
  useEffect(() => {
    trigger();
  }, []);
  
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(getAllUsers(data));

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is Required")
      .test("valid", "Email not found", function (item) {
        const dataUser = data || [];
        const check = dataUser.some((items) => items.email === item);
        return check;
      }),
    password: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required")
      .test("valid", "Invalid Password", function (item, ctx) {
        const userdata = data || [];
        const user = userdata.find((items) => items.email === ctx.parent.email);

        return user ? user.password == item : false;
      }),
  });

  const handleSubmit = (values, props) => {
    dispatch(LogIn(values, props));
    if (!props.isSubmitting) {
      Navigate("/");
      props.resetForm();
    }
  };

  return (
    <>
      <Box className="loginPage">
        <Box>
          <div className="banner">
            <Box className="bannerImg"></Box>
          </div>
        </Box>
        <Box className="contents">
          <Container>
            <Grid container>
              <Grid item sm={3} md={4}  xs={false}></Grid>
              <Grid item sm={6} md={4}  xs={12}>
                <Box className="form-container">
                  <Paper className="form-contents">
                    <Box>
                      <Typography className="loginHead">LogIn</Typography>
                    </Box>

                    <Formik
                      initialValues={initialValues}
                      onSubmit={handleSubmit}
                      validationSchema={validationSchema}
                    >
                      {(props) => {
                        return (
                          <ThemeProvider theme={theme}>
                            <Form>
                              <Box align="center">
                                <Field
                                  className="Inputfield"
                                  as={TextField}
                                  name="email"
                                  label="email"
                                  type="text"
                                  fullWidth
                                  margin="dense"
                                  helperText={<ErrorMessage name="email" />}
                                  error={
                                    props.errors.email && props.touched.email
                                  }
                                />
                              </Box>
                              <Box align="center">
                                <Field
                                  className="Inputfield"
                                  as={TextField}
                                  name="password"
                                  label="password"
                                  type="password"
                                  fullWidth
                                  margin="dense"
                                  helperText={<ErrorMessage name="password" />}
                                  error={
                                    props.errors.password &&
                                    props.touched.password
                                  }
                                />
                              </Box>
                              <Box align="center">
                                <Button
                                  className="Submitbtn hvr-bounce-to-right mb-18"
                                  variant="outlined"
                                  fullWidth
                                  type="submit"
                                  disabled={props.isSubmitting}
                                >
                                  LOG IN
                                </Button>
                              </Box>
                              <Box align="right">
                                <Button
                                  className="signupbtn hvr-bounce-to-right"
                                  variant="text"
                                  type="submit"
                                >
                                  <Link
                                    to={{ pathname: "/signup" }}
                                    className="signuplink"
                                  >
                                    OR Sign up
                                  </Link>
                                </Button>
                              </Box>
                            </Form>
                          </ThemeProvider>
                        );
                      }}
                    </Formik>
                  </Paper>
                </Box>
              </Grid>
              <Grid item sm={3} md={4}  xs={false}></Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Login;

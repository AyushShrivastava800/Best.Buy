import React from "react";
import * as Yup from "yup";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  FormLabel,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  Checkbox,
  Slider,
} from "@mui/material";
import { Container } from "@mui/system";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import {
  useLazyGetAllUsersQuery,
  useAddUserMutation,
} from "../../features/api/UserApi";
import { useEffect } from "react";
const theme = createTheme({
  palette: {
    primary: {
      main: "#cc9966",
    },
  },
});
const initialValues = {
  name: "",
  email: "",
  password: "",
  gender: "",
  city: "",
  acceptedTerms: false,
};


function SignUp() {
  const [trigger, result] = useLazyGetAllUsersQuery();
  const dispatch = useDispatch();

  const [addUser, { isSuccess }] =
    useAddUserMutation();
  
  const HandleSubmit = (values, props) => {
    props.resetForm();
    dispatch(addUser(values));
  };

  useEffect(() => {
    trigger();
  },[]);

  

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    password: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Required")
      .test("unique", "Email is already present", function (item) {
        const data = result.data || [];
        const check = !data.some((items) => items.email === item);
        return check;
      }),
    acceptedTerms: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required("Required"),
    city: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
  });


  return (
    <>
      <Box className="signupPage">
        <Box>
          <div className="banner">
            <Box className="bannerImg"></Box>
          </div>
        </Box>
        <Box className="contents">
          <Container>
            <Grid container>
              <Grid item sm={3}  md={4} xs={false}></Grid>
              <Grid item sm={6}  md={4} xs={12}>
                <Box className="form-container">
                  <Paper className="form-contents">
                    <Box>
                      <Typography className="loginHead">SignUp</Typography>
                    </Box>
                    <Formik
                      initialValues={initialValues}
                      onSubmit={HandleSubmit}
                      validationSchema={validationSchema}
                    >
                      {(props) => {
                        return (
                          <ThemeProvider theme={theme}>
                            <Form>
                              <Box align="center">
                                <Field
                                  as={TextField}
                                  name="name"
                                  label="name"
                                  type="text"
                                  fullWidth
                                  margin="dense"
                                  helperText={<ErrorMessage name="name" />}
                                  error={
                                    props.errors.name && props.touched.name
                                  }
                                />
                              </Box>
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
                              <Box className="mb-12">
                                <Field
                                  as={FormControl}
                                  error={
                                    props.errors.gender && props.touched.gender
                                  }
                                >
                                  <Field as={FormLabel}>Gender</Field>
                                  <Field
                                    as={RadioGroup}
                                    name="gender"
                                    row
                                    defaultValue="female"
                                    margin="dense"
                                  >
                                    <Field
                                      as={FormControlLabel}
                                      value="female"
                                      control={<Radio />}
                                      label="Female"
                                    />
                                    <Field
                                      as={FormControlLabel}
                                      value="male"
                                      control={<Radio />}
                                      label="Male"
                                    />
                                    <Field
                                      as={FormControlLabel}
                                      value="other"
                                      control={<Radio />}
                                      label="Other"
                                    />
                                  </Field>
                                  <FormHelperText>
                                    <ErrorMessage name="gender" />
                                  </FormHelperText>
                                </Field>
                              </Box>
                              <Box align="center">
                                <Field
                                  as={FormControl}
                                  fullWidth
                                  error={
                                    props.errors.city && props.touched.city
                                  }
                                >
                                  <InputLabel>city</InputLabel>
                                  <Field
                                    as={Select}
                                    name="city"
                                    label="city"
                                    margin="dense"
                                  >
                                    <MenuItem value="Gwalior" id="Gwalior">
                                      Gwalior
                                    </MenuItem>
                                    <MenuItem value="Indore" id="Indore">
                                      Indore
                                    </MenuItem>
                                    <MenuItem value="Bhopal" id="bhopal">
                                      Bhopal
                                    </MenuItem>
                                  </Field>
                                  <FormHelperText>
                                    <ErrorMessage name="city" />
                                  </FormHelperText>
                                </Field>
                              </Box>
                              <Box>
                                <Field
                                  type="checkbox"
                                  name="acceptedTerms"
                                  as={FormControlLabel}
                                  control={<Checkbox />}
                                  label="accept the terms and conditions"
                                />
                                <FormHelperText className="error">
                                  <ErrorMessage name="acceptedTerms" />
                                  {props.errors.acceptedTerms &&
                                    props.touched.acceptedTerms}
                                </FormHelperText>
                              </Box>
                              <Box align="center">
                                <Button
                                  className="Submitbtn hvr-bounce-to-right mb-18"
                                  variant="outlined"
                                  fullWidth
                                  type="submit"
                                >
                                  signUP
                                </Button>
                              </Box>
                              <Box align="right">
                                <Button
                                  className="signupbtn hvr-bounce-to-right"
                                  variant="text"
                                  type="submit"
                                >
                                  <Link
                                    to={{ pathname: "/login" }}
                                    className="signuplink"
                                  >
                                    OR Login
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

export default SignUp;

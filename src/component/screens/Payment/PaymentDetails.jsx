import React from "react";
import * as Yup from "yup";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,

} from "@mui/material";
import { Container } from "@mui/system";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
  lastname: "",
  address: "",
  pincode: "",
  city:"",
  country:"",
  contact: "",
};

function PaymentDetails() {
  const [trigger, result] = useLazyGetAllUsersQuery();
  const dispatch = useDispatch();

  const [addUser, { isSuccess }] = useAddUserMutation();

  const HandleSubmit = (values, props) => {
    props.resetForm();
    dispatch(addUser(values));
  };

  useEffect(() => {
    trigger();
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastname: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),

    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),

    pincode: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
  });

  return (
    <>
      <Box className="DetailsForm">
        <Box className="contents">
          <Container>
            <Grid container>
              <Grid item sm={3} md={4} xs={false}></Grid>
              <Grid item sm={6} md={4} xs={12}>
                <Box className="form-container">
                  <Paper className="form-contents">
                    <Box>
                      <Typography className="">xxxxxxxxxxxxxxxxxx</Typography>
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
                                  label="Name"
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
                                  name="lastname"
                                  label="Last Name"
                                  type="text"
                                  fullWidth
                                  margin="dense"
                                  helperText={<ErrorMessage name="lastname" />}
                                  error={
                                    props.errors.lastname &&
                                    props.touched.lastname
                                  }
                                />
                              </Box>
                              <Box align="center">
                                <Field
                                  multiline={true}
                                  rows={4}
                                  className="Inputfield"
                                  as={TextField}
                                  name="address"
                                  label="Address"
                                  type="text"
                                  fullWidth
                                  margin="dense"
                                  helperText={<ErrorMessage name="address" />}
                                  error={
                                    props.errors.address &&
                                    props.touched.address
                                  }
                                />
                              </Box>
                              <Box align="center">
                                <Field
                                  className="Inputfield"
                                  as={TextField}
                                  name="country"
                                  label="Country"
                                  type="text"
                                  fullWidth
                                  margin="dense"
                                  helperText={<ErrorMessage name="country" />}
                                  error={
                                    props.errors.country &&
                                    props.touched.country
                                  }
                                />
                              </Box>
                              <Box align="center">
                                <Field
                                  className="Inputfield"
                                  as={TextField}
                                  name="city"
                                  label="City"
                                  type="number"
                                  fullWidth
                                  margin="dense"
                                  helperText={<ErrorMessage name="city" />}
                                  error={
                                    props.errors.city &&
                                    props.touched.city
                                  }
                                />
                              </Box>
                              <Box align="center">
                                <Field
                                  className="Inputfield"
                                  as={TextField}
                                  name="pincode"
                                  label="Pin Code"
                                  type="number"
                                  fullWidth
                                  margin="dense"
                                  helperText={<ErrorMessage name="pincode" />}
                                  error={
                                    props.errors.pincode &&
                                    props.touched.pincode
                                  }
                                />
                              </Box>

                              <Box align="center">
                                <Button
                                  className="Submitbtn hvr-bounce-to-right mb-18"
                                  variant="outlined"
                                  fullWidth
                                  type="submit"
                                >
                                  Proceed
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
              <Grid item sm={3} md={4} xs={false}></Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default PaymentDetails;

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
import {
  useLazyGetAllUsersQuery,
  useAddUserMutation,
} from "../../features/api/UserApi";
import { useEffect } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const theme = createTheme({
  palette: {
    primary: {
      main: "#cc9966",
    },
  },
});
const initialValues = {
    
};

function PaymentDetails() {
  const [trigger, result] = useLazyGetAllUsersQuery();
  const dispatch = useDispatch();

  const [addUser, { isSuccess }] = useAddUserMutation();

  const HandleSubmit = (values, props) => {
    console.log(values);
  };

  useEffect(() => {
    trigger();
  }, []);

  const validationSchema = Yup.object({});

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
                        console.log(props);
                        return (
                          <ThemeProvider theme={theme}>
                            <Form>
                              <Box className="mb-12">
                                <Field
                                  as={FormControl}
                                  error={
                                    props.errors.Mode && props.touched.Mode
                                  }
                                >
                                  <Field as={FormLabel}>Payment</Field>

                                  <Field
                                    as={RadioGroup}
                                    row
                                    name="Modeofpay"
                                    defaultValue="credit Card"
                                    margin="dense"
                                  >
                                    <Box>
                                      <Field
                                        as={FormControlLabel}
                                        value="creditCard"
                                        control={<Radio />}
                                        label="credit Card"
                                      />
                                    </Box>
                                    <Box>
                                      <Field
                                        as={FormControlLabel}
                                        value="DebitCard"
                                        control={<Radio />}
                                        label="Debit Card"
                                      />
                                    </Box>
                                    <Box>
                                      <Field
                                        as={FormControlLabel}
                                        value="Upi"
                                        control={<Radio />}
                                        label="Upi"
                                      />
                                    </Box>
                                    {props.values.Modeofpay === "creditCard" ? (
                                      <>
                                        <Field
                                          className="Inputfield"
                                          as={TextField}
                                          name="CbcardNumb"
                                          label="CreditCard Number"
                                          type="text"
                                          fullWidth
                                          margin="dense"
                                          helperText={
                                            <ErrorMessage name="CbcardNumb" />
                                          }
                                          error={
                                            props.errors.CbcardNumb &&
                                            props.touched.CbcardNumb
                                          }
                                        />
                                        <Box sx={{display:'flex',justifyContent:"center",alignContent:'center',gap:'10px'}}>
                                          <Box>
                                            <Field
                                              className="cvvInputfield"
                                              as={TextField}
                                              name="cvv"
                                              label="CVV"
                                              type="number"
                                              margin="dense"
                                              helperText={
                                                <ErrorMessage name="cvv" />
                                              }
                                              error={
                                                props.errors.cvv &&
                                                props.touched.cvv
                                              }
                                            />
                                          </Box>
                                          <Box className="expdate">
                                            <LocalizationProvider
                                              dateAdapter={AdapterDayjs}
                                            >
                                              <DatePicker
                                                label={'year'}
                                                views={["year"]}
                                              />
                                            </LocalizationProvider>
                                          </Box>
                                          <Box className="expdate">
                                            <LocalizationProvider
                                              dateAdapter={AdapterDayjs}
                                            >
                                              <DatePicker
                                                label={'month'}
                                                views={["month"]}
                                              />
                                            </LocalizationProvider>
                                          </Box>
                                        </Box>
                                      </>
                                    ) :  
                                    props.values.Modeofpay ===
                                      "DebitCard" ? (
                                        <>
                                 
                                        <Field
                                          className="Inputfield"
                                          as={TextField}
                                          name="dbcardNumb"
                                          label="DebitCard Number"
                                          type="text"
                                          fullWidth
                                          margin="dense"
                                          helperText={
                                            <ErrorMessage name="dbcardNumb" />
                                          }
                                          error={
                                            props.errors.dbcardNumb &&
                                            props.touched.dbcardNumb
                                          }
                                        />
                                        <Box sx={{display:'flex',justifyContent:"center",alignContent:'center',gap:'10px'}}>
                                          <Box>
                                            <Field
                                              className="cvvInputfield"
                                              as={TextField}
                                              name="cvv"
                                              label="CVV"
                                              type="number"
                                              margin="dense"
                                              helperText={
                                                <ErrorMessage name="cvv" />
                                              }
                                              error={
                                                props.errors.cvv &&
                                                props.touched.cvv
                                              }
                                            />
                                          </Box>
                                          <Box className="expdate">
                                            <LocalizationProvider
                                              dateAdapter={AdapterDayjs}
                                            >
                                              <DatePicker
                                                label={'year'}
                                                views={["year"]}
                                              />
                                            </LocalizationProvider>
                                          </Box>
                                          <Box className="expdate">
                                            <LocalizationProvider
                                              dateAdapter={AdapterDayjs}
                                            >
                                              <DatePicker
                                                label={'month'}
                                                views={["month"]}
                                              />
                                            </LocalizationProvider>
                                          </Box>
                                        </Box>
                                      </>
                                    ) : null}
                                  </Field>
                                  <FormHelperText>
                                    <ErrorMessage name="cards" />
                                  </FormHelperText>
                                </Field>
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

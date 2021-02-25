import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
import firebase from "firebase/app";
import { Link } from "react-router-dom";
import "firebase/auth";

const useStyles = makeStyles((theme) => ({
   "@global": {
      body: {
         backgroundColor: theme.palette.common.white,
      },
   },
   paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
   },
   avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
   },
   form: {
      width: "100%",
      marginTop: theme.spacing(3),
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
   },
}));

let SignupSchema = yup.object().shape({
   firstName: yup.string().required("This field is required."),
   lastName: yup.string().required("This field is required."),
   email: yup.string().email().required("This field is required."),
   password: yup
      .string()
      .min(6, "Password is too short.")
      .max(20, "Password is too long.")
      .required("This field is required."),
});

export default function SignUp() {
   const classes = useStyles();
   let history = useHistory();

   return (
      <Container component="main" maxWidth="xs">
         <CssBaseline />
         <div className={classes.paper}>
            <Typography component="h1" variant="h3">
               Sign up
            </Typography>

            <Formik
               initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
               }}
               validationSchema={SignupSchema}
               onSubmit={(values) => {
                  console.log("Submit===>");
                  firebase
                     .auth()
                     .createUserWithEmailAndPassword(
                        values.email,
                        values.password
                     )
                     .then((result) => {
                        console.log(result);
                     })
                     .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorMessage);
                        console.log(errorCode);
                     });

                  history.push("/home");
               }}
            >
               {({ errors, handleChange, touched }) => (
                  <Form className={classes.form}>
                     <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              error={errors.firstName && touched.firstName}
                              autoComplete="fname"
                              name="firstName"
                              variant="outlined"
                              fullWidth
                              onChange={handleChange}
                              id="firstName"
                              label="First Name"
                              autoFocus
                              helperText={
                                 errors.firstName && touched.firstName
                                    ? errors.firstName
                                    : null
                              }
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              error={errors.lastName && touched.lastName}
                              variant="outlined"
                              fullWidth
                              onChange={handleChange}
                              id="lastName"
                              label="Last Name"
                              name="lastName"
                              autoComplete="lname"
                              helperText={
                                 errors.lastName && touched.lastName
                                    ? errors.lastName
                                    : null
                              }
                           />
                        </Grid>
                        <Grid item xs={12}>
                           <TextField
                              error={errors.email && touched.email}
                              variant="outlined"
                              fullWidth
                              onChange={handleChange}
                              id="email"
                              label="Email Address"
                              name="email"
                              autoComplete="email"
                              helperText={
                                 errors.email && touched.email
                                    ? errors.email
                                    : null
                              }
                           />
                        </Grid>
                        <Grid item xs={12}>
                           <TextField
                              error={errors.password && touched.password}
                              variant="outlined"
                              fullWidth
                              onChange={handleChange}
                              name="password"
                              label="Password"
                              type="password"
                              id="password"
                              autoComplete="current-password"
                              helperText={
                                 errors.password && touched.password
                                    ? errors.password
                                    : null
                              }
                           />
                        </Grid>
                     </Grid>
                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                     >
                        Sign Up
                     </Button>
                     <p>Already an account? {<Link to="/login">login</Link>}</p>
                  </Form>
               )}
            </Formik>
         </div>
      </Container>
   );
}

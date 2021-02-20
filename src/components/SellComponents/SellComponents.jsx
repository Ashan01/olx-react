import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Formik, Form } from "formik";
import * as yup from "yup";

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

export default function SellForm() {
   const classes = useStyles();

   return (
      <Container component="main" maxWidth="xs">
         <CssBaseline />
         <div className={classes.paper}>
            <Typography component="h1" variant="h3">
               POST YOUR AD
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
                  console.log(values);
               }}
            >
               {({ errors, handleChange, touched }) => (
                  <Form className={classes.form}>
                     <Grid container spacing={2}>
                        <Grid item xs={12}>
                           <TextField
                              error={errors.firstName && touched.firstName}
                              autoComplete="fname"
                              name="firstName"
                              variant="outlined"
                              fullWidth
                              onChange={handleChange}
                              id="firstName"
                              label="Ad title *"
                              autoFocus
                              helperText={
                                 errors.firstName && touched.firstName
                                    ? errors.firstName
                                    : null
                              }
                           />
                        </Grid>
                        <Grid item xs={12}>
                           <TextField
                              error={errors.lastName && touched.lastName}
                              variant="outlined"
                              fullWidth
                              onChange={handleChange}
                              id="lastName"
                              label="Description *"
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
                              label="Set Prices *"
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
                              label="City *"
                              type="text"
                              id="password"
                              autoComplete="current-password"
                              helperText={
                                 errors.password && touched.password
                                    ? errors.password
                                    : null
                              }
                           />
                        </Grid>
                        <Grid>
                            <h2>Upload Image</h2>
                        </Grid>
                     </Grid>
                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                     >
                        Post
                     </Button>
                  </Form>
               )}
            </Formik>
         </div>
      </Container>
   );
}

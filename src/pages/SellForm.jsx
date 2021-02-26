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
import firebase from "../Config/firebaseConfig";
import Swal from "sweetalert2";

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
   root: {
      "& > *": {
         margin: theme.spacing(1),
      },
   },
   input: {
      display: "none",
   },
}));

let SignupSchema = yup.object().shape({
   title: yup.string().required("This field is required."),
   desc: yup.string().required("This field is required."),
   city: yup.string().required("This field is required."),
   price: yup.string().required("This field is required."),
});

export default function SellForm() {
   let files = [];

   const handleImageChange = (e) => {
      files = e.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
   };

   const classes = useStyles();
   let errorMessage;
   return (
      <Container component="main" maxWidth="xs">
         <CssBaseline />
         <div className={classes.paper}>
            <Typography component="h1" variant="h4">
               POST YOUR AD
            </Typography>

            <Formik
               initialValues={{
                  title: "",
                  desc: "",
                  price: "",
                  city: "",
               }}
               validationSchema={SignupSchema}
               onSubmit={(values, { resetForm }) => {
                  try {
                     let database = firebase.database().ref("sellIteam");
                     var key = database.push().key;
                     let inpPrice = values.price;
                     let inpDesc = values.desc;
                     let inpCity = values.city;

                     var uploadTask = firebase
                        .storage()
                        .ref(`images1/imageName${key}.png`)
                        .put(files[0]);

                     uploadTask.on("state_changed", function () {
                        uploadTask.snapshot.ref
                           .getDownloadURL()
                           .then(function (downlaodURL) {
                              database.child(key).set({
                                 inpPrice_1: inpPrice,
                                 inpDesc_1: inpDesc,
                                 inpCity_1: inpCity,
                                 key,
                                 ImageUrl_1: downlaodURL,
                              });
                           });
                     });
                  } catch (error) {
                     errorMessage = error.message;
                  }
                  if (errorMessage) {
                     return Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: errorMessage,
                     });
                  } else {
                     Swal.fire({
                        icon: "success",
                        title: "Done",
                     });
                  }
               }}
            >
               {({ errors, handleChange, touched }) => (
                  <Form className={classes.form}>
                     <Grid container spacing={2}>
                        <Grid item xs={12}>
                           <TextField
                              error={errors.title && touched.title}
                              autoComplete="title"
                              name="title"
                              variant="outlined"
                              fullWidth
                              onChange={handleChange}
                              id="title"
                              label="Ad title *"
                              autoFocus
                              helperText={
                                 errors.title && touched.title
                                    ? errors.title
                                    : null
                              }
                           />
                        </Grid>
                        <Grid item xs={12}>
                           <TextField
                              error={errors.desc && touched.desc}
                              variant="outlined"
                              fullWidth
                              id="desc"
                              label="Description *"
                              name="desc"
                              autoComplete="desc"
                              onChange={handleChange}
                              helperText={
                                 errors.desc && touched.desc
                                    ? errors.desc
                                    : null
                              }
                           />
                        </Grid>
                        <Grid item xs={12}>
                           <TextField
                              error={errors.price && touched.price}
                              variant="outlined"
                              fullWidth
                              onChange={handleChange}
                              type="number"
                              id="price"
                              label="Set Prices *"
                              name="price"
                              autoComplete="price"
                              helperText={
                                 errors.price && touched.price
                                    ? errors.email
                                    : null
                              }
                           />
                        </Grid>
                        <Grid item xs={12}>
                           <TextField
                              error={errors.city && touched.city}
                              variant="outlined"
                              fullWidth
                              onChange={handleChange}
                              name="city"
                              label="City *"
                              type="text"
                              id="city"
                              autoComplete="current-city"
                              helperText={
                                 errors.city && touched.city
                                    ? errors.city
                                    : null
                              }
                           />
                        </Grid>

                        <Grid item xs={12}>
                           <h3>Upload Image</h3>
                           <div>
                              <input
                                 type="file"
                                 required
                                 accept="image/*"
                                 onChange={handleImageChange}
                              />
                           </div>
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

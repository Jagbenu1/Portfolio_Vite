import React from "react";
import Layout from "../../hoc/Layout/Layout";
import classes from "./Contact.module.css";

import { Box, Typography } from "@mui/material";

const Contact = () => {
    return (
      <Layout>
        <Box className={classes.Container}>
          <Box className={classes.Contact}>
            <Typography sx={{ marginBottom: "20px" }} variant="h2">
              Contact me
            </Typography>
            <Typography sx={{ marginBottom: "20px" }} variant="h5">
              Email: jacqueskagbenu@gmail.com
            </Typography>
            <Typography variant="h5">Phone: 678-343-1252</Typography>
          </Box>
        </Box>
      </Layout>
    );
}

export default Contact;

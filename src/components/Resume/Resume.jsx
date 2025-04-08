import React from 'react';
import classes from './Resume.module.css';
import { Box, Button } from '@mui/material';

const resume = (props) =>{
    return (
      <Button
        sx={{ backgroundColor: "#569c73", marginTop: "10px" }}
        variant="contained"
        href="./Jacques_Agbenu_Resume.pdf"
        alt="Resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume&#x2192;
      </Button>
    );
}

export default resume;
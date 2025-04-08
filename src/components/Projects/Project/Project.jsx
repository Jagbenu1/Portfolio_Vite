import React from "react";
import classes from "./Project.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Project = (props) => {
  let seeMe = null;

  if (props.disabled) {
    seeMe = null;
  } else {
    seeMe = (
      <Button
        target="_blank"
        rel="noopener noreferrer"
        href={props.exLink}
        variant="text"
        size="small"
      >
        <i className="fas fa-external-link-alt"></i> &nbsp; View Live
      </Button>
    );
  }

  return (
    <Card>
      <CardMedia
        sx={{height: 200, width: "100%" }}
        image={props.image}
        title={props.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.project}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.describe}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
          href={props.gitLink}
          size="small"
        >
          <i className="fab fa-github-alt"></i> &nbsp; Github
        </Button>
        {seeMe}
      </CardActions>
    </Card>
  );
};

export default Project;

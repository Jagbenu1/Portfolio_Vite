import { useNavigate } from "react-router";
import classes from "./Home.module.css";
import 'animate.css';
import { Typography, Button, Box } from "@mui/material";

const Home = () => {
  let navigate = useNavigate();

  return (
    <Box className={classes.Banner}>
      <Box className={classes.Inner}>
        <Typography
          className={classes.Title + " animate__animated animate__fadeInUp"}
          variant="h3"
        >
          Hi, I'm Jacques Agbenu
        </Typography>
        <Typography
          className={
            classes.Para +
            " animate__animated animate__fadeInUp animate__delay-1s"
          }
          variant="h6"
          sx={{marginTop: '10px'}}
        >
          Front-end Software Developer
        </Typography>
        <Button
          className={
            classes.Button +
            " animate__animated animate__fadeInUp animate__delay-2s"
          }
          variant="contained"
          sx={{marginTop: '10px', backgroundColor: '#569c73'}}
          onClick={() => navigate("/about")}
        >
          Let's Begin
        </Button>
      </Box>
    </Box>
  );
};

export default Home;

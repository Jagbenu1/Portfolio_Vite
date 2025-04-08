import { useState } from "react";
import Projects from "../../components/Projects/Projects";
import Layout from "../../hoc/Layout/Layout";
import classes from "./Portfolio.module.css";
import { Box, Typography } from "@mui/material";

const Portfolio = () => {
  const [project, setProject] = useState([
    {
      id: 1,
      image: "./images/Shopping_List.png",
      project: "Shopping List",
      describe:
        "Shopping list app created with es5 JavaScript, HTML and CSS. You can create, delete and update items in the list.",
      gitLink: "https://github.com/Jagbenu1/Shopping-List",
      exLink: "https://pensive-murdock-b5705c.netlify.app",
      disabled: false,
    },
    {
      id: 2,
      image: "./images/15_Puzzle.png",
      project: "15 Puzzle",
      describe:
        "15 puzzle game created using React.js, and CSS modules. It has all the workings of a normal 15 puzzle game.",
      gitLink: "https://github.com/Jagbenu1/15-Puzzle",
      exLink: "https://wonderful-boyd-25d709.netlify.app",
      disabled: false,
    },
    {
      id: 3,
      image: "./images/Forkify.png",
      project: "Forkify",
      describe:
        "Recipe finder SPA created using es6 JavaScript, webpack and Babel. It uses axios to obtain data from a third-party API.",
      gitLink: "https://github.com/Jagbenu1/forkify",
      exLink: "https://adoring-ardinghelli-6603f4.netlify.app",
      disabled: false,
    },
    {
      id: 4,
      image: "./images/Pig-game.png",
      project: "Pig-Game",
      describe:
        "Simple game created using es5 Javascript, HTML and CSS. Two players are able to play this game without issue.",
      gitLink: "https://github.com/Jagbenu1/Pig-Game",
      exLink: "https://reverent-visvesvaraya-a80cfc.netlify.app",
      disabled: false,
    },
    {
      id: 5,
      image: "./images/Budgety.png",
      project: "Budgety",
      describe:
        "Budget app created using HTML, CSS, and es5 Javascript. The user can accurately balance their budget with ease.  ",
      gitLink: "https://github.com/Jagbenu1/Budgety",
      exLink: "https://youthful-swanson-742b21.netlify.app",
      disabled: false,
    },
    {
      id: 6,
      image: "./images/Storm-Gazer2.0.png",
      project: "Storm-Gazer3.0",
      describe:
        "Weather SPA made with React.js and Redux Toolkit. Both OpenWeather and Zipcodebase APIs are used to get weather data from user input.",
      gitLink: "https://github.com/Jagbenu1/Storm-Gazer3.0",
      exLink: "https://gifted-montalcini-65af03.netlify.app",
      disabled: false,
    },
    {
      id: 7,
      image: "./images/Rent-a-Car.png",
      project: "Rent-a-Car",
      describe:
        "Simple CRUD application that my group and I created during Web Programming course. Created with PHP, MySql, CSS, and Javascript.",
      gitLink: "https://github.com/Jagbenu1/Rent-a-car",
      exLink: "/",
      disabled: true,
    },
    {
      id: 8,
      image: "./images/ListVid.jpg",
      project: "ListVid",
      describe:
        "Video player made in android studio operating system course. Gets permission from user to list stored videos on SD-cards and storage.",
      gitLink: "https://github.com/Jagbenu1/ListVid",
      exLink: "/",
      disabled: true,
    },
  ]);

  return (
    <Layout>
      <Box className={classes.Container}>
        <Typography variant="h2" className={classes.Title}>Projects</Typography>
        <Box className={classes.Row}>
          <Projects project={project} />
        </Box>
      </Box>
    </Layout>
  );
};

export default Portfolio;

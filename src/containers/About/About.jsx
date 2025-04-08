import { useState } from "react";
import classes from "./About.module.css";
import Layout from "../../hoc/Layout/Layout";
import Skills from "../../components/Skills/Skills";
import Resume from "../../components/Resume/Resume";
import { Box, Typography } from "@mui/material";
import Social from "../../components/Social/Social";

const About = () => {
  const [skillList] = useState([
    {
      id: 1,
      image: "./images/css3.png",
      alt: "CSS_logo",
      name: "CSS3",
    },
    {
      id: 2,
      image: "./images/git.png",
      alt: "GIT_logo",
      name: "Git",
    },
    {
      id: 3,
      image: "./images/html.png",
      alt: "HTML_logo",
      name: "HTML5",
    },
    {
      id: 4,
      image: "./images/javascript.png",
      alt: "JavaScript_logo",
      name: "JavaScript",
    },
    {
      id: 5,
      image: "./images/logo512.png",
      alt: "REACT_logo",
      name: "React.js",
    },
    {
      id: 6,
      image: "./images/MySQL.png",
      alt: "MySQL_logo",
      name: "MySQL",
    },
    {
      id: 7,
      image: "./images/php.png",
      alt: "PHP_logo",
      name: "PHP",
    },
    {
      id: 8,
      image: "./images/sass.png",
      alt: "SASS_logo",
      name: "Sass",
    },
    {
      id: 9,
      image: "./images/node.png",
      alt: "Node_logo",
      name: "Node.js",
    },
    {
      id: 10,
      image: "./images/MongoDB.png",
      alt: "MondgoDB_logo",
      name: "MongoDB",
    },
    {
      id: 11,
      image: "./images/postgresql.png",
      alt: "PostgreSQL_logo",
      name: "PostgreSQL",
    },
    {
      id: 12,
      image: "./images/express.png",
      alt: "Express_logo",
      name: "Express",
    },
  ]);

  return (
    <Layout>
      <Box className={classes.About}>
        <Box className={classes.Octo}>
          <Box className={classes.Octo1}>
            <img src="./images/me.jpeg" alt="Jacques Agbenu" />
          </Box>
        </Box>

        <Box className={classes.Headline}>
          <Typography sx={{marginTop: '30px'}} variant="h4">Who Am I?</Typography>
          <Typography sx={{marginTop: '20px'}}>
            I am a Front-end Software Developer who specializes in Front-End web
            technologies. Technology has been a passion of mine since I was
            little but I started my journey in the world of Coding and Web
            Development when I entered college in the fall of 2015.
          </Typography>
          <Social />
        </Box>

        <Resume />

        <Typography variant="h4" className={classes.Title}>
          Skills
        </Typography>

        <Box className={classes.Grid_container}>
          <Skills skill={skillList} />
        </Box>
      </Box>
    </Layout>
  );
};

export default About;

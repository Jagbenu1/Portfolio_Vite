import Project from "./Project/Project";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Projects = (props) => {
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <Grid
        sx={{ alignItems: 'center', }}
        container
        spacing={4}
      >
        {props.project.map((project) => {
          return (
            <Grid size={{xs: 12, sm: 12, md: 6, lg: 4, xl: 4}}>
              <Project
                key={project.id}
                image={project.image}
                project={project.project}
                describe={project.describe}
                gitLink={project.gitLink}
                exLink={project.exLink}
                disabled={project.disabled}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Projects;

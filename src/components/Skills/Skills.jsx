import Skill from "./Skill/Skill";
import classes from "../../containers/About/About.module.css";

const Skills = ({ skill }) => {
  return skill.map((skill) => {
    return (
      <div className={classes.Grid_item} key={skill.id}>
        <Skill image={skill.image} alt={skill.alt} name={skill.name} />
      </div>
    );
  });
};

export default Skills;

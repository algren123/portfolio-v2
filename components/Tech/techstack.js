import { Card, Category, Skills } from './techstack.style';

export const Techs = ({ category, skills }) => {
  skills = skills.split(', ');
  return (
    <Card>
      <Category>{category}</Category>
      <ul>
        {skills.map((skill, index) => {
          return <Skills key={index}>{skill}</Skills>;
        })}
      </ul>
    </Card>
  );
};

import {
    Card,
    Category,
    Skills
} from './techstack.style'

export const Techs = ({ category, skills }) => {
    skills = skills.split(', ');
    console.log(skills);
    return (
        <Card>
            <Category>{category}</Category>
            <ul>
                { skills.map((skill) => {
                    return <Skills key="">{ skill }</Skills>
                })}
            </ul>
        </Card>
    )
}
import {
    Card,
    Category,
    Skills
} from './techstack.style'

export const Techs = ({ category, skillOne, skillTwo, skillThree }) => {
    return (
        <Card>
            <Category>{category}</Category>
            <Skills>{skillOne}</Skills>
            <Skills>{skillTwo}</Skills>
            <Skills>{skillThree}</Skills>
        </Card>
    )
}
import {
    Container,
    Card,
    Course,
    Universtiy,
    Duration,
    Description
} from './education.styles'

export const Education = ({ course, university, duration, description }) => {
    return (
        <Container>
            <Card>
                <Course>{course}</Course>
                <Universtiy>{university}</Universtiy>
                <Duration>{duration}</Duration>
                <Description>{description}</Description>
            </Card>
        </Container>
    )
}
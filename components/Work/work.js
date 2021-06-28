import {
    Card,
    Title,
    Company,
    Duration,
    Description
} from './work.styles'

export const Works = ({ title, company, duration, description }) => {
    return (
        <Card>
            <Title>{title}</Title>
            <Company>{company}</Company>
            <Duration>{duration}</Duration>
            <Description>{description}</Description>
        </Card>
    )
}
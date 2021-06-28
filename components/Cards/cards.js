import { Container, Card, Title, Description, Actions, Button } from "./cards.styles"
import Image from 'next/image'

export const Cards = ({ img, title, description, live, github}) => {
    return (
            <Card>
                <Image 
                    src={img}
                    alt={title}
                    width={500}
                    height={250}
                />
                <Title>{ title }</Title>
                <Description>{ description}</Description>
                <Actions>
                    <Button><a href={live} target="_blank">Live Link</a></Button>
                    <Button><a href={github} target="_blank">Github Repo Link</a></Button>
                </Actions>
            </Card>
    )
}
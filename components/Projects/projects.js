import Image from 'next/image';
import { Card, Title, Description, Actions, Button } from './projects.styles';

export const Projects = ({ img, title, description, live, github }) => {
  return (
    <Card>
      <Image src={img} alt={title} width={300} height={150} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Actions>
        <Button>
          <a href={live} target="_blank" rel="noreferrer">
            Live Link
          </a>
        </Button>
        <Button>
          <a href={github} target="_blank" rel="noreferrer">
            Github Repo Link
          </a>
        </Button>
      </Actions>
    </Card>
  );
};

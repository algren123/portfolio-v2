// Helpers
import { scrollToElement } from '../../helpers/index.tsx';

// Styles
import {
  Container,
  HeroTitle,
  HeroDescription,
  Highlight,
  Button,
  TitleHighlight,
} from './hero.styles';

export default function Hero() {
  return (
    <div className="home">
      <Container>
        <HeroTitle>
          Hi, I&apos;m <TitleHighlight>Algren</TitleHighlight>
        </HeroTitle>
        <HeroDescription>
          As a{' '}
          <Highlight inputColor="#1DB954"> senior software engineer</Highlight>{' '}
          I thrive on discovering optimal solutions and pushing the boundaries
          of development. Proficient in TypeScript, React, React Native, Node
          and GraphQL
        </HeroDescription>
        <Button onClick={() => scrollToElement('.projects', 'start')}>
          View Projects
        </Button>
      </Container>
    </div>
  );
}

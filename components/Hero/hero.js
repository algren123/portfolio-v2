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
          a <Highlight inputColor="#1DB954">software engineer</Highlight> that
          is passionate about finding optimal solutions and discovering new and
          better ways of doing things. My favourite tools to use are TypeScript,
          Next.JS, React, Node and Golang.
        </HeroDescription>
        <Button onClick={() => scrollToElement('.projects', 'start')}>
          View Projects
        </Button>
      </Container>
    </div>
  );
}

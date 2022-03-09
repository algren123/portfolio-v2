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
          Hi, I&apos;m <TitleHighlight>Algren</TitleHighlight>.{' '}
        </HeroTitle>
        <HeroDescription>
          A software engineer with a focus on{' '}
          <Highlight inputColor="#fa387f">front-end</Highlight> that has
          professional experience in creating and maintaining websites. I work
          with technologies such as Angular, React, JavaScript, TypeScript and
          Node.JS
        </HeroDescription>
        <Button onClick={() => scrollToElement('.projects', 'start')}>
          View Projects
        </Button>
      </Container>
    </div>
  );
}

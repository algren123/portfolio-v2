import { useRef, useState, useEffect } from "react";

// Helpers
import { scrollToElement } from "../../helpers/index.tsx";

// Styles
import {
  Container,
  HeroTitle,
  HeroDescription,
  Highlight,
  Button,
  TitleHighlight,
  CardContainer,
} from "./hero.styles";

export default function Hero() {
  return (
    <div className="home">
      <Container>
        <div>
          <HeroTitle>
            Hi, I&apos;m <TitleHighlight>Algren</TitleHighlight>
          </HeroTitle>
          <HeroDescription>
            As a{" "}
            <Highlight inputColor="#1DB954">
              {" "}
              senior software engineer
            </Highlight>{" "}
            I thrive on discovering optimal solutions and pushing the boundaries
            of development. Proficient in TypeScript, React, React Native, Node
            and GraphQL
          </HeroDescription>
          <Button onClick={() => scrollToElement(".projects", "start")}>
            View Projects
          </Button>
        </div>
      </Container>
    </div>
  );
}

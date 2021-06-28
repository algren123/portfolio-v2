import styled from 'styled-components'
import { Container, HeroTitle, HeroDescription, Highlight, Button, TitleHighlight } from './hero.styles'
import Link from 'next/link'

export default function Hero() {

    function scrollTo(element) {
        document.querySelector(`${element}`).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    }

    return (
        <div className="home">
            <Container>
                <HeroTitle>Hi, I&apos;m <TitleHighlight>Algren</TitleHighlight>. </HeroTitle>
                <HeroDescription>
                    A <Highlight>software developer</Highlight> with professional experience that specializes in creating and maintaining <Highlight>websites</Highlight>.
                    I work on a daily basis with technologies such as Angular, React, JavaScript, TypeScript and Node.JS
                </HeroDescription>
                <Button onClick={() => scrollTo('.projects')}>View Work</Button>
            </Container>
        </div>
    )
}
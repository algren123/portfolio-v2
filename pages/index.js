import Head from 'next/head';

// Components
import Navbar from '../components/Navbar/navbar';
import Hero from '../components/Hero/hero';
import { Projects } from '../components/Projects/projects';
import { Works } from '../components/Work/work';
import { Techs } from '../components/Tech/techstack';
import { Contact } from '../components/Contact/contact';
import Footer from '../components/Footer/footer';

// Styles
import styled from 'styled-components';
import styles from '../styles/Home.module.css';

const Title = styled.h1`
  font-size: 80px;
  text-align: center;
  text-decoration: underline;
  text-decoration-thickness: 12px;
  text-decoration-color: #1db954;
  margin-top: 1.25em;
  cursor: default;

  @media only screen and (max-width: 1000px) {
    font-size: 40px;
    text-decoration-thickness: 6px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>Algren Pauna</title>
        <meta
          name="description"
          content="Algren Pauna's personal portfolio where you can find his work, experience and contact."
        />
        <link rel="icon" href="/jake.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className={styles.main}>
        <Hero />

        <Title className="projects">Projects</Title>
        <Container>
          <Projects
            img="/refinr.jpg"
            title="Refinr AI"
            description="A web application using OpenAI's API that acts as a digital Business Analyst and helps you refine your tickets. It is built using Next.JS 14, TypeScript, TailwindCSS, Vercel KV for database storage."
            live="https://refinr.vercel.app/"
            github="https://github.com/algren123/refinr"
          />
          <Projects
            img="/cashsnap.jpg"
            title="CashSnap"
            description="CashSnap is a platform where users can log their income and expenses and get a visual report of where their money is going. It is made to be shareable which makes it easy to show financial advisors or accountants. It's built using SvelteKit and Supabase."
            live="https://cashsnap.vercel.app/"
            github="https://github.com/algren123/cashsnap"
          />
          <Projects
            img="/protor.JPG"
            title="Protor"
            description="A full-stack application created with the MERN stack together with NextJS. It is a public board where people can post requests for tradesmen services or professionals can create posts to advertise their services."
            live="https://protor.uk/"
            github="https://github.com/algren123/protor"
          />
        </Container>

        <Title className="work-experience">Work Experience</Title>
        <Container>
          <Works
            title="Senior Software &nbsp; Engineer"
            company="Sky Betting & Gaming"
            duration="May 2023 - Present"
            description="Received an internal promotion after leading the technical revamp of one of Sky Vegas's main pages. I am now working across squads to help them with their technical challenges and to help them deliver value to the business. I am also part of the maintainers of our Inner Source repository."
          />
          <Works
            title="Software &nbsp; Engineer"
            company="Sky Betting & Gaming"
            duration="January 2022 - May 20223"
            description="Taking on a new challenge and opportunity with Sky Betting & Gaming where I'll be working in the 2nd biggest tribe Sky Vegas. Working with
            cutting edge technology and dwelving into a new stack that includes Next.JS, TypeScript, AWS, Docker and many more."
          />
          <Works
            title="Junior Web Developer"
            company="Vertu Motors"
            duration="February 2021 - December 2021"
            description="Working with Angular, TypeScript, JavaScript and of course HTML, CSS & SASS to maintain Vertu Motor's 14 websites.
            I had the opportunity to work on various different parts of software development, from fixing bugs on the websites, to creating a chatbot"
          />
          <Works
            title="Code Hero Volunteer"
            company="Cartea Daliei"
            duration="March 2021 - September 2021"
            description="Cartea Daliei is a non-profit organization that works with children from Romania. I teach a class of 4 children aged between 11-12 the fundamentals of coding with Scratch.
            After 6 weeks of lessons, I have prepared them for a Hackathon-type project where they got to work together as a team and create an animation."
          />
        </Container>

        <Title className="tech-stack">Tech Stack</Title>
        <Container crossOrigin="true">
          <Techs
            category="Frontend"
            skills={[
              'HTML/CSS/Sass',
              'TypeScript',
              'React',
              'Next.JS',
              'TDD - Jest and React Testing Library',
              'styled-components',
              'TailwindCSS',
            ]}
          ></Techs>
          <Techs
            category="Backend"
            skills={['Node', 'Python', 'PostgreSQL', 'Vercel KV']}
          ></Techs>
          <Techs
            category="Middleware/Others"
            skills={[
              'AWS (ECS, EC2)',
              'GraphQL',
              'Apollo',
              'Docker',
              'Jenkins',
              'Kuzzle',
            ]}
          ></Techs>
        </Container>
        <Title className="contact">Contact me!</Title>
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

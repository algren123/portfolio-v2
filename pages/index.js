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
  text-decoration-color: #fa387f;
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
            img="/protor.JPG"
            title="Protor"
            description="A full-stack application created with the MERN stack together with NextJS. It is a public board where people can post requests for tradesmen services or professionals can create posts to advertise their services."
            live="https://protor.uk/"
            github="https://github.com/algren123/protor"
          />
          <Projects
            img="/chattyio.JPG"
            title="Chattyio"
            description="A real-time chat application created with Next.JS, TypeScript, GraphQL, Node and styled-components. It uses WebSockets to make sending and receiving messages in real-time without having to refresh the page."
            live="https://algren-realtime-chat.vercel.app/"
            github="https://github.com/algren123/realtime-chat-app"
          />
          <Projects
            img="/top-spotify-stats.JPG"
            title="Top Spotify Stats"
            description="A website that uses Spotify's API to display the user's listening statistics, such as top artists or songs of the week/month/all time. It uses Angular, TypeScript and TailwindCSS"
            live="https://top-spotify-stats.herokuapp.com/"
            github="https://github.com/algren123/top-spotify-stats"
          />
          <Projects
            img="/gulag-bot.JPG"
            title="Gulag Bot"
            description="A Discord bot created in Node.JS. I created it for my own server where I spend time with my friends. It features moderation and can also play music from YouTube"
            live="https://discord.com/oauth2/authorize?client_id=858052116751974420&scope=bot"
            github="https://github.com/algren123/gulag-bot"
          />
          <Projects
            img="/odeko-replica.JPG"
            title="Odeko Replica Website"
            description="A fully responsive website that is a recreation of Odeko's (now) old website. It is primarily frontend focused and was built with React, JavaScript and Material-UI"
            live="https://odeko-replica-react.netlify.app/"
            github="https://github.com/algren123/odeko-replica-website"
          />
        </Container>

        <Title className="work-experience">Work Experience</Title>
        <Container>
          <Works
            title="Software &nbsp; Engineer"
            company="Sky Betting & Gaming"
            duration="January 2022 - Present"
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
            duration="March 2021 - Present"
            description="Cartea Daliei is a non-profit organization that works with children from Romania. I teach a class of 4 children aged between 11-12 the fundamentals of coding with Scratch.
            After 6 weeks of lessons, I have prepared them for a Hackathon-type project where they got to work together as a team and create an animation."
          />
        </Container>

        <Title className="tech-stack">Tech Stack</Title>
        <Container crossOrigin="true">
          <Techs
            category="Frontend"
            skills={[
              'HTML/CSS and Sass',
              'JavaScript',
              'TypeScript',
              'React (Redux, Context, custom hooks)',
              'Next.JS',
              'Angular',
              'styled-components',
              'TailwindCSS',
            ]}
          ></Techs>
          <Techs
            category="Backend"
            skills={[
              'Node.JS',
              'Express',
              'Currently learning GO',
              'MongoDB',
              'Firebase',
              'AirTable',
            ]}
          ></Techs>
          <Techs
            category="Others"
            skills={[
              'AWS (Terraform, ECS, EC2)',
              'GraphQL',
              'Apollo',
              'Docker',
              'Jest and React Testing Library',
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

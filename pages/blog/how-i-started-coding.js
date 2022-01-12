import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import BlogPost from '../../components/BlogPost/blogPost';
import { Outro, Paragraph } from '../../components/Typography/typography';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1000px;
  cursor: default;

  @media screen and (max-width: 1000px) {
    max-width: 300px;
  }
`;

const WhyICode = () => {
  const intro =
    "So a brief introduction on myself - Hello, I am Algren Pauna, I am 23 years old and a Software Engineer. Have I always wanted to become a software engineer? No, definitely not. At one point, my parents were trying to convince me that I should start following the Computer Science route since I was good at math, and I have rejected the idea every time. I didn't want to be a cog in someone's wheel and work tirelessly at a desk. I wanted to be creative and express myself through art. At the time, I thought that's the only way to express yourself creatively - I was wrong.";
  const paragraph1 =
    "I enrolled on a Games Development course, which featured programming, 3D Modelling and game art. I didn't do too well in my programming modules, it was the 3D modelling that I discovered a passion for. Later on in the course I have found out more about the Games Industry: the crunch time, spending hours and hours fixing bugs and analyzing game features and as with most games, a very critical fanbase. I still wanted to pursue 3D modelling, so after finishing college, I started my new journey in De Montfort University's Visual Effects (VFX) course.";
  const paragraph2 =
    "My interest for 3D Modelling grew more and more, but once again, I was met with the harsh reality of the industry. Very difficult to enter the workforce and most of the roles are contract-based. You have to always network and constantly focus on finding the next gig. It wasn't something I am interested in. Coming close to finishing university, I was feeling helpless, and was coming to terms that I won't achieve much in life. I wanted to start something fresh, something that could develop in a career and find fulfilment.";
  const paragraph3 =
    "I started writing down things that I would like from an ideal job: solving problems, a good work-life balance, freedom to express myself. The answer to that was coding and I was disappointed. Before throwing out the idea completely, I said I'll give it a try. I bought a course on Udemy, and my coding journey started. Weirdly, I started enjoying it. HTML and CSS were okay, but once I got to the JavaScript chapters, that's when I knew what I wanted to do with my life. I felt a huge relief as I just discovered a clear goal of what I want to do.";
  const paragraph4 =
    "The next 9 months were spent self-teaching programming. I was working full-time during this time, so every day after work I would try to spend 3 to 4 hours working on new projects and building a strong foundation. Some days I wouldn't code at all; some days I would code for 10 hours straight. It was difficult to juggle life outside work, work itself and coding as well, but I really thought it will pay off. And I am so thankful it did. After 9 months, I received the phone call that rewarded all my efforts - I landed my first Junior Web Developer role.";
  return (
    <div>
      <Navbar />
      <BlogPost title="How I started coding" date="09/01/2022" />
      <Container>
        <Paragraph content={intro} />
        <Paragraph content={paragraph1} />
        <Paragraph content={paragraph2} />
        <Paragraph content={paragraph3} />
        <Paragraph content={paragraph4} />
        <Outro />
      </Container>
      <Footer />
    </div>
  );
};

export default WhyICode;

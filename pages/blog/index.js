import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Components
import Navbar from '../../components/Navbar/navbar';

// Styles
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;
`;

const Title = styled.h1`
  margin: 0.25em auto 0;
  font-size: 80px;
  text-decoration: underline;
  text-decoration-color: #fa387f;
  text-decoration-thickness: 10px;

  @media only screen and (max-width: 1000px) {
    font-size: 62px;
    text-align: center;
    text-decoration-thickness: 8px;
  }
`;

const ArticleContainer = styled.div`
  margin: 2rem 0;
`;

const Article = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto 10px;
  width: 40rem;
  text-align: center;
  background-color: #fa387f;
  border-radius: 20px;
  cursor: pointer;
  color: #fff;

  :hover {
    transform: scale(1.08);
    box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.6);
    transition: all 0.5s ease;
    background: #db0654;
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 880px) {
    width: 22rem;
  }
`;

const ArticleTitle = styled.h2``;

const ArticleDate = styled.h2`
  margin: auto;
`;

const Blog = () => {
  const articles = [
    {
      title: 'How I started coding',
      date: '09/01/2022',
      link: '/blog/how-i-started-coding',
    },
  ];

  return (
    <div>
      <Navbar />
      <Head>
        <title>Algren Pauna</title>
        <meta
          name="description"
          content="Algren Pauna's personal blog where you can find content about coding, cooking and many more."
        />
        <link rel="icon" href="/jake.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <Container>
          <Title>Algren&apos;s Blog</Title>
          <ArticleContainer>
            {articles.map((article, index) => (
              <Link href={article.link} key={index}>
                <Article>
                  <ArticleTitle>{article.title}</ArticleTitle>
                  <ArticleDate>{article.date}</ArticleDate>
                </Article>
              </Link>
            ))}
          </ArticleContainer>
        </Container>
      </main>
    </div>
  );
};

export default Blog;

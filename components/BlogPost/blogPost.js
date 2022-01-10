import Head from 'next/head';
import { Container, Content, Date, Title } from './blogPost.style';

const BlogPost = ({ title, date }) => {
  return (
    <div>
      <Head>
        <title>Algren Pauna</title>
        <meta
          name="description"
          content="Algren Pauna's personal blog where you can find content about coding, cooking and many more."
        />
        <link rel="icon" href="/jake.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Container>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </Container>
    </div>
  );
};

export default BlogPost;

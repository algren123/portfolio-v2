import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
  }

  /* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #1db954 #191414;
  color: white;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 20px;
}

*::-webkit-scrollbar-track {
  background: #191414;
}

*::-webkit-scrollbar-thumb {
  background-color: #1db954;
  border-radius: 10px;
  border: 4px solid #191414;
}

  html {
    background-color: #191414;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .logo-img {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: 600;

    &:hover {
      color: #1db954;
      transition: all .3s ease;
    }
  }
`;

export const Button = styled.button`
  background: #1db954;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  font-weight: 700;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.6);
    transition: all 0.5s ease;
    background: #1db954;
    transition: all 0.5s ease;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

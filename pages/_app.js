import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
  }

  /* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #fa387f #F3F5F7;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 20px;
}

*::-webkit-scrollbar-track {
  background: #F3F5F7;
}

*::-webkit-scrollbar-thumb {
  background-color: #fa387f;
  border-radius: 10px;
  border: 4px solid #F3F5F7;
}

  html {
    background-color: #F3F5F7;
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
      color: #FA387F;
      transition: all .3s ease;
    }
  }
`;

export const Button = styled.button`
  background: #fa387f;
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
    background: #db0654;
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

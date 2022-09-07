import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  cursor: default;
`;

export const Title = styled.h1`
  margin-top: 0.25em;
  margin-bottom: 0;
  font-size: 62px;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #1db954;
  text-decoration-thickness: 8px;

  @media only screen and (max-width: 1000px) {
    font-size: 40px;
    margin-bottom: 0.3em;
  }
`;

export const Date = styled.h2`
  margin-top: 0.25em;
  font-size: 36px;
  text-align: center;

  @media only screen and (max-width: 1000px) {
    font-size: 24px;
    margin-bottom: 1em;
  }
`;

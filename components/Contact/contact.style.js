import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Card = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  width: 300px;
  height: 250px;
  padding: 0.5rem 1rem;
  background-color: #272727;
  border-radius: 8px;
  box-shadow: 0 12px 32px 4px rgba(black, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Intro = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  color: #90a9b7;
  cursor: default;
`;

export const Link = styled.a`
  color: #1db954;
  font-size: 18px;
  font-weight: 700;
  margin-left: 0.3em;

  &:hover {
    text-decoration: underline 4px;
  }
`;

export const Outro = styled.span`
  font-size: 18px;
  color: #90a9b7;
  font-weight: 700;
  align-self: baseline;
  margin-left: 0.3em;
`;

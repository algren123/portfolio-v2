import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  margin: 1rem;
  width: 300px;
  min-width: 300px;
  height: 500px;
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

export const Title = styled.h2`
  color: #90a9b7;
  cursor: default;
`;
export const Description = styled.div`
  color: white;
  text-align: left;
  margin-bottom: auto;
  cursor: default;
`;
export const Actions = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 2em;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 1em;
  }
`;
export const Button = styled.button`
  padding: 0.5rem 0.6rem;
  font-size: 14px;
  margin: 0 4px;
  border-radius: 1rem;
  cursor: pointer;
  background-color: #1db954;
  border: none;
  outline: 0;
  transition: background-color 0.4s, color 0.4s, transform 0.1s;

  &:hover {
    a {
      color: #191414;
      box-shadow: 0 0 24px rgba(black, 0.2);
      transition: 0.2s ease;
    }
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 16px rgba(black, 0.3);
  }

  @media screen and (max-width: 800px) {
    margin: 10px 4px;
  }
`;

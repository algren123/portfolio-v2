import styled from 'styled-components';

export const Card = styled.div`
  margin: 1rem;
  width: 300px;
  height: 500px;
  padding: 0.5rem 1rem;
  background-color: #272727;
  border-radius: 8px;
  box-shadow: 0 12px 32px 4px rgba(black, 0.2);
  display: flex;
  flex-direction: column;
  transition: 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;
export const Title = styled.h1`
  margin: 1em 0;
  text-align: left;
  color: #90a9b7;
  cursor: default;
`;
export const Company = styled.h2`
  color: #90a9b7;
  text-align: left;
  width: 100%;
  margin: 0;
  cursor: default;
`;
export const Duration = styled.h3`
  color: #fa387f;
  text-align: left;
  width: 100%;
  margin: 0;
  cursor: default;
`;
export const Description = styled.p`
  margin-top: 0.5em;
  margin-bottom: 0;
  color: white;
  text-align: left;
  cursor: default;
`;

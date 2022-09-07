import styled from 'styled-components';

export const Text = styled.p`
  font-size: 22px;
  font-weight: 600;
  text-align: left;
  margin: 12px 0;

  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }
`;

export const OutroText = styled.h2`
  text-align: center;
  font-size: 32px;
  text-decoration: underline;
  text-decoration-thickness: 6px;
  text-decoration-color: #1db954;
`;

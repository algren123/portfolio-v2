import styled from "styled-components";

export const Container = styled.div`
  cursor: default;
  padding: 0 0 2em 16em;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 1400px) {
    padding: 0 2em;
    text-align: center;
    flex-direction: column-reverse;
  }
`;

export const HeroTitle = styled.h1`
  margin-top: 0.25em;
  font-size: 80px;

  @media only screen and (max-width: 1000px) {
    font-size: 62px;
    text-align: center;
    margin-bottom: 1em;
  }
`;

export const Highlight = styled.span`
  color: ${(props) => props.inputColor};
`;

export const HeroDescription = styled.h3`
  @media only screen and (max-width: 1000px) {
    text-align: center;
    font-size: 22px;
  }

  @media only screen and (min-width: 1300px) {
    font-size: 30px;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 40px;
  }
`;

export const Button = styled.button`
  background: #1db954;
  color: #fff;
  border: none;
  padding: 24px 50px;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 24px;
  font-weight: 700;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.6);
    transition: all 0.5s ease;
    background: #1db954;
    transition: all 0.5s ease;
  }
`;

export const TitleHighlight = styled.span`
  text-decoration: underline;
  text-decoration-color: #1db954;
  text-decoration-thickness: 10px;

  @media only screen and (max-width: 1000px) {
    text-decoration-thickness: 8px;
  }
`;

export const CardContainer = styled.div`
  @media only screen and (max-width: 1400px) {
    width: 100%;
  }

  @media only screen and (min-width: 1400px) {
    margin-top: 30px;
    margin-left: -400px;
    width: 300%;
  }
`;

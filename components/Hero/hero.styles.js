import styled from 'styled-components';

export const Container = styled.div`
    cursor: default;
    padding: 0 24em 2em 18em;

    @media only screen and (max-width: 1024px) {
        padding: 0 2em;
        text-align: center;
    }
`

export const HeroTitle = styled.h1`
    margin-top: .25em;
    font-size: 80px;

    @media only screen and (max-width: 1000px) {
        font-size: 62px;
        text-align: center;
        margin-bottom: 1em;
    }
`

export const Highlight = styled.span`
    color: #FA387F;

    &:hover, &:focus {
        text-decoration: underline;
        text-decoration-thickness: 8px;

        @media only screen and (max-width: 1000px) {
            text-decoration-thickness: 5px;
        }
    }
`
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

    @media only screen and (min-width: 1900px) {
        font-size: 50px;
    }
`

export const Button = styled.button`
    background: #FA387F;
    color: #333;
    border: none;
    padding: 24px 50px;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 500;
    font-size: 24px;
    font-weight: 700;

    &:hover {
        transform: scale(1.08);
        box-shadow: 0px 0px 15px -3px rgba(0,0,0,0.6);
        transition: all .5s ease;
        color: #fff;
        transition: all .5s ease;
    }
`

export const TitleHighlight = styled.span`
    text-decoration: underline;
    text-decoration-color: #FA387F;
    
    @media only screen and (max-width: 1000px) {
        text-decoration-thickness: 8px;
    }
`
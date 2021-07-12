import styled from "styled-components"

export const Card = styled.div`
    margin: 1rem;
    width: 300px;
    height: 300px;
    padding: .5rem 1rem;
    background-color: #272727;
    border-radius: 8px;
    box-shadow: 0 12px 32px 4px rgba(black, .2);
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    transition: .2s;

    &:hover {
        transform: translateY(-5px);
    };
`
export const Category = styled.h1`
    margin: 0.75em 0;
    text-align: center;
    color: #90A9B7;
    cursor: default;
    text-decoration: underline #FA387F;
    text-decoration-thickness: 4px;
`
export const Skills = styled.p`
    margin-top: .5em;
    margin-bottom: 0;
    font-size: 16px;
    color: white;
    text-align: center;
    cursor: default;
`
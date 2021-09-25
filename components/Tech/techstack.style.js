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
    transition: .2s;

    &:hover {
        transform: translateY(-5px);
    };
`
export const Category = styled.h2`
    margin-top: 0.5em;
    margin-bottom: 0;
    text-align: center;
    color: #FA387F;
    cursor: default;
`
export const Skills = styled.li`
    margin-bottom: 0;
    font-size: 16px;
    color: white;
    text-align: left;
    cursor: default;
`
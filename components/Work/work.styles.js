import styled from "styled-components"

export const Card = styled.div`
    margin: 1rem;
    width: 300px;
    height: 500px;
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
export const Title = styled.h1`
    margin: 1em 0;
    text-align: left;
    color: #90A9B7;
    cursor: default;
    text-decoration: underline #FA387F;
    text-decoration-thickness: 4px;
`
export const Company = styled.h2`
    color: #90A9B7;
    text-align: left;
    width: 100%;
    margin: 0;
    cursor: default;
`
export const Duration = styled.h3`
    color: #FA387F;
    text-align: left;
    width: 100%;
    margin: 0;
    cursor: default;
`
export const Description = styled.p`
    margin-top: .5em;
    margin-bottom: 0;
    color: white;
    text-align: left;
    cursor: default;
`
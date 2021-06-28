import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
export const Card = styled.div`
    margin: 1rem;
    width: 300px;
    min-width: 300px;
    height: 500px;
    padding: .5rem 1rem;
    background-color: #272727;
    border-radius: 8px;
    box-shadow: 0 12px 32px 4px rgba(black, .2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: .2s;

    &:hover {
        transform: translateY(-5px);
    };
`

export const Title = styled.h2`
    color: #90A9B7;
    cursor: default;
    text-decoration: underline #FA387F;
    text-decoration-thickness: 4px;
`
export const Description = styled.div`
    color: white;
    text-align: left;
    margin-bottom: auto;
    cursor: default;
`
export const Actions = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 2em;
`
export const Button = styled.button`
    padding: .5rem .8rem;
    margin: 0 4px;
    border-radius: 1rem;
    cursor: pointer;
    background-color: #90A9B7;
    border: none;
    outline: 0;
    transition: background-color .4s, color .4s, transform .1s;

    &:hover {

        a {
            color: #FA387F;
            box-shadow: 0 0 24px rgba(black, .2);
            transition: .2s ease;
        }
    };

    &:active {
        transform: scale(.95);
        box-shadow: 0 0 16px rgba(black, .3);
    }
`

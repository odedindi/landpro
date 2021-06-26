import styled from 'styled-components';

export const Header = styled.header`
    padding: 1rem 0.5rem;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 1280px;
    padding-right: 25px;
    padding-left: 25px;
    margin-right: auto;
    margin-left: auto;
`;

export const Span = styled.span`
    cursor: pointer;
`;

export const PageLink = styled.div `
    display: inline-block;
    text-align: center;
    font-size: 1rem;
    color: #000000;
    transition: color 0.2s ease-in;
    margin: 0.25rem 2rem;

    @media only screen and (max-width: 768px) {
        margin: 1.25rem 2rem;
    };
`;

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Col = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 12.5rem;
`
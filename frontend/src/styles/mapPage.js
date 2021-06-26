import styled from 'styled-components';
import { Button } from '../components/Button/styles';

export const MapPageWrapper = styled.div `
    display: flex;
    flex-direction: column;
    margin: 1.5em;
` ;

export const MapWrapper = styled.div `
    display: flex;
    flex-direction: row;
    align-self: center;
    height: 700px;
    max-height: 70rem;
    padding: 1rem;
    #map {
        height: 100%;
        max-height: none;
        width: 100%;
        max-width: none;
    }; 
`;


export const SubmitPolygons = styled(Button) `
    background-color: ${ props => props.active === false ? 'gray' : '' };
    border: ${ props => props.active === false ? 'none' : '' };    
    pointer-events: ${ props => props.active === false ? 'none' : '' };
`;

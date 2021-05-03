import styled from 'styled-components';
import { LandProButton } from '.';

export const HomePageWrapper = styled.div `
    display: flex;
    flex-direction: column;
    margin: 1.5em;
` ;

export const MapWrapper = styled.div `
    display: flex;
    flex-direction: row;
    align-self: center;
    height: 65vh;
    width: 95%;
    margin: 1em;

    #mapContainer {
        height: 100%;
        width: 100%;
    };
`;


export const SubmitPolygons = styled(LandProButton) `
    width: 7.5em;
    height: 3.5em;
    margin: 0 0 0 1.5em;
`;

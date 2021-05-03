import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import { SpinnerWrapper } from '../../styles';


const SpinningLoading = () => {
    return (
        <SpinnerWrapper>
            <Spinner animation='border' variant='info' role='status'>
                <span>Loading...</span>
            </Spinner>
        </SpinnerWrapper>
    );
};

export default SpinningLoading;

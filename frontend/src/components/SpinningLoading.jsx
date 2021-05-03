import Spinner from 'react-bootstrap/Spinner'
import { SpinnerWrapper } from '../styles';


const SpinningLoading = () => 
    {
        <SpinnerWrapper>
            <Spinner 
                animation='border' 
                variant='info' 
                role='status'
            >
                <span>Loading...</span>
            </Spinner>
        </SpinnerWrapper>
    };

export default SpinningLoading;
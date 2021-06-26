// ======================== react =========================
import React from 'react';
// ======================== react =========================
import styled from 'styled-components';
// ===================== components =======================
import makeCarousel from 'react-reveal/makeCarousel';
import Fade from 'react-reveal/Fade';
// ===================== sat images =======================
import june13 from '../../../assets/imgs/satellite/1june2013.png'
import july13 from '../../../assets/imgs/satellite/2july2013.png'
import august13 from '../../../assets/imgs/satellite/3august2013.png'
import november13 from '../../../assets/imgs/satellite/4november2013.png'
import march14 from '../../../assets/imgs/satellite/5march2014.png'
import april14 from '../../../assets/imgs/satellite/6april2014.png'
import may14 from '../../../assets/imgs/satellite/7may2014.png'
import june14 from '../../../assets/imgs/satellite/8june2014.png'
// ========================================================
const Container = styled.div`
    width: 600px;
    height: 20rem;
    @media only screen and (max-width: 768px) {
        width: 400px;
    };
    @media only screen and (max-width: 480px) {
        width: 275px;
    }
`;
const CarouselUI = ({ children }) => <Container>{children}</Container>;

const Carousel = makeCarousel(CarouselUI);

    const AyoraExample = () => {    
        const satImages = [
            { src: june13, alt: 'June 2013' },
            { src: july13, alt: 'July 2013' },
            { src: august13, alt: 'August 2013' },
            { src: november13, alt: 'November 2013' },
            { src: march14, alt: 'March 2014' },
            { src: april14, alt: 'April 2014' },
            { src: may14, alt: 'May 2014' },
            { src: june14, alt: 'June 2014' } 
        ]

        const Image = ({ alt, src }) => (   
            <img
                src={ src }
                width="100%"
                alt={`Ayora ${ alt }`}
            />
        );

    return (
        <Carousel defaultWait={2500}>
            {
                satImages.map(image =>  
                    <Fade key={ image.alt }>
                        <Image src={ image.src } alt={ image.alt } />
                    </Fade> 
                )
            }
        </Carousel>
    );
}
export default AyoraExample;

// ======================== react =========================
import React, { lazy } from 'react';
// ======================== styles ========================
import Slide from 'react-reveal/Slide';
// ===================== translations =====================
import { useTranslation } from 'react-i18next';
// ======================== images ========================
import lp1 from '../../../assets/imgs/landProBase/Landpro1.png'
import lp2 from '../../../assets/imgs/landProBase/Landpro2.png'
import lp3 from '../../../assets/imgs/landProBase/Landpro3.png'
// ====================== components ======================
const Card = lazy(() => import('../../LandProCard'));
const Carousel = lazy(() => import('../'));
// =========================================================


const LandProCarousel = () => {
    const [t] = useTranslation();
    return (
        <Carousel>
            {
                [
                    { img: lp1, title: '1Title', text: '1Text' }, 
                    { img: lp2, title: '2Title', text: '2Text' }, 
                    { img: lp3, title: '3Title', text: '3Text' }, 
                ].map(stage => 
                    <Slide key={ stage.title } right>
                        <Card 
                            img={ stage.img }
                            title={ t(`homePage.how.stages.${ stage.title }`) }
                            text={ t(`homePage.how.stages.${ stage.text }`) }
                        />
                    </Slide>
                )
            }
        </Carousel>
    );
};

export default LandProCarousel;

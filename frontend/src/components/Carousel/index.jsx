import makeCarousel from 'react-reveal/makeCarousel';

import * as S from './styles';


const CarouselUI = ({ position, total, handleClick, children }) => (
    <S.Container>
      <S.Children>
        { children }
        <S.Arrow onClick={ handleClick } data-position={ position - 1 }>{ '<' }</S.Arrow>
        <S.Arrow right onClick={ handleClick } data-position={ position + 1 }>{ '>' }</S.Arrow>
      </S.Children>
      <S.Dots>
        { Array(...Array(total)).map( (val, index) =>
          <S.Dot key={ index } onClick={ handleClick } data-position={ index }>
            { index === position ? '● ' : '○ ' }
          </S.Dot>
        )}
      </S.Dots>
    </S.Container>
);
const Carousel = makeCarousel(CarouselUI);

export default Carousel;
import { Card as CardWrapper } from 'antd';


const Card = ({ img, text, title }) => (

  <CardWrapper hoverable style={{ width: "100%" }}
    cover={ <img src={ img } alt={ title } /> }
  >
    <CardWrapper.Meta title={ title } description={ text } />
  </CardWrapper>
);
  
export default Card;

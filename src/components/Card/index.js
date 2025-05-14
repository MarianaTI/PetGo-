import React from 'react';
import { CardStyled, ProductStyle } from "./Card.style";

const Card = ({description}) => {
    return (
        <CardStyled>
           <ProductStyle>HOLA {description}</ProductStyle> 
        </CardStyled>
    );
}

export default Card;

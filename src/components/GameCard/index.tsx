import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Game } from "types";
import { StyledLink  } from './styles'


interface Props {
    content: Game;
}


const GameCard = ({ content }: Props): ReactElement => {

    const { id, title, thumbnail, short_description, genre } = content;
    // console.log('log for the image ', content);
    

    const link = `/game/${id}`;

    return (
        <StyledLink to={link}>
            <img alt={`${title} logo`} src={thumbnail} />
            <h2>{title}</h2>
            <p>{short_description}</p>
            <p>{genre}</p>
        </StyledLink>
    )
}


export default GameCard;



import GameCard from 'components/GameCard';
import React, { ReactElement } from 'react';
import { Game } from 'types';
import { List, ListItem } from './styles';


interface Props {
    err?: string
    /* Game type is defined in the types/index.tsx  */
    games: Game[]
}


const GameListRender = ({ err, games }: Props): ReactElement => {


    /* if an error  */
    if (err) {
        return <p>Unable to fetch games</p>;
    }
    /* if game length is < 1 */
    if (!games?.length) {
        return <p>No games abilable</p>;
    }

    return (
        <List>
            {games.map(game => (
                <ListItem key={game.id}>
                    <GameCard content={game} />
                </ListItem>
            ))}
        </List>
    );

}


export default GameListRender;
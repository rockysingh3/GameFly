import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import { Game } from "types";
import { API_KEY, HOST } from "./constants";
import GameListRender from "./GameList.render";


const GameList = (): ReactElement => {

    const [games, setGames] = useState<Game[]>([]);
    const [err, setErr] = useState<string>('')

    useEffect(() => {
        axios
            .get('/games', {
                baseURL: `https://${HOST}/api`,
                headers: {
                    'x-rapidapi-key': API_KEY,
                    'x-rapidapi-host': HOST
                },
                params: {
                    platform: 'browser'
                }
            })
            /* update the state after fetching data from the api */
            .then(res => setGames(res.data))
            .catch(e => setErr(e.message))
    }, [])

    return <GameListRender err={err} games={games} />
}

export default GameList;
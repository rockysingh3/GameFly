import GameList from 'components/GameList';
import withErrorBoundary from 'hoc/withErrorBoundary';
import React, { ReactElement } from 'react';


const Home = (): ReactElement => <GameList />;



export default withErrorBoundary(Home);
import GlobalStyles from 'components/GlobalStyles';
import Home from 'components/Home';
import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App = (): ReactElement => {

    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App;
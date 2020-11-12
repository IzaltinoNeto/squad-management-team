import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home/index';
import CreateTeam from './Pages/CreateTeam/index';



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create-team" exact component={CreateTeam} />
              
            </Switch>
        </BrowserRouter>  
    );
}
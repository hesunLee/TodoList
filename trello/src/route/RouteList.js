import React from 'react';
import { Route } from 'react-router-dom';
import {Home, Hs_Board} from "./SetExport";


const RouteList = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/Hs_Board" component={Hs_Board} />
    </div>
)

export default RouteList;
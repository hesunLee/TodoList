import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Header from "./Header";
import {Home, Hs_Board} from "./SetExport";

const Root = () => (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/Hs_Board" component={Hs_Board} />
        </div>
    </Router>
);

export default Root;


/*
    Header.js 는 main title 과, 카테고리 이동을 담당
*/
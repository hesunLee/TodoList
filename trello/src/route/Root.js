import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from "./Header";
import RouteList from "./RouteList";

const Root = () => (
    <Router>
        <div>
            <Header />
            <RouteList />
        </div>
    </Router>
);

export default Root;


/*
    Header.js 는 main title 과, 카테고리 이동을 담당
*/
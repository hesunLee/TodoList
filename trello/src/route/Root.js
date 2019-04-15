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
    Header.js �� main title ��, ī�װ� �̵��� ���
*/
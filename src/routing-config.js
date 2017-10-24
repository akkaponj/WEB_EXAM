import React from 'react'
import { Redirect } from 'react-router'
import { Home, FetchPage } from './components'
import fakeAuth from './Auth'
import {Page1, Page2} from "./components/index";

const routes = [
    {
        'path':'/',
        'component': Page1,
        'exact': true
    },
    {
        'path': '/Fetch',
        'component': Page2
    }
];

export default routes;

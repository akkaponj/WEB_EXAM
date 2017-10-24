import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import routes from './routing-config'
import Page1  from './components/Page1.component';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <ul>
                            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                            <li><NavLink to="/Page2" activeClassName="active">Page2</NavLink></li>
                        </ul>
                    </div>
                    <div className="App-intro">
                        <Switch>
                            {/*
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/BasicRouting" component={BasicRouting} />
                        <Route path="/Blocking" component={Blocking} />
                        <Route path="/Miss" component={Miss} />
                        <Route path="/QueryParams" component={QueryParams} />
                        <Route path="/Recursive" component={Recursive} />
                        <Route path="/login" component={Login} />
                        <Route path="/Protected" component={
                          () => (fakeAuth.isAuthenticated ?
                            (<ProtectedPage />) :
                            (<Redirect to={{pathname: "/login", state: {from: "/Protected"}}}/> ))} />
              */}
                            {routes.map((route,index) => (<Route key={index} path={route.path} component={route.component} exact={route.exact} />))}
                            <Route component={Page1} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;


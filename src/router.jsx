import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Index from './components/pages/index';
import Login from './components/pages/login';
import Register from './components/pages/register';
import Dashboard from './components/pages/dashboard';

export default class router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" strict exact={true} component={Index}/>
                    <Route path="/login" strict exact={true} component={Login}/>
                    <Route path="/register" strict exact={true} component={Register}/>
                    <Route path="/dashboard" strict exact={true} component={Dashboard}/>
                </Switch>
            </div>
        )
    }
}

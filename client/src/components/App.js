import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';

import { connect } from 'react-redux';
import * as actions from '../actions';

const Data = () => <div>Data</div>;

const SurveyNew = () => <div>Survey New</div>

class App extends Component  {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" component={Landing} exact />
                        <Route exact path="/surveys" component={Data} />
                        <Route exact path="/data/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);

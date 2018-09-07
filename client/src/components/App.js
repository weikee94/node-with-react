import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

import { connect } from 'react-redux';
import * as actions from '../actions';

const Data = () => <div>Data</div>;

const Landing = () => <div>Landing</div>;

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
                        <Route exact path="/data" component={Data} />
                        <Route exact path="/data/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);

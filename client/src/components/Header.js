import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import Payments from './Payments';


class Header extends Component {

    // helper methods
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login with Google</a></li>
                );
            default: 
                return [
                    <li key="1"><Payments /></li>,
                    <li key="2" style={{ margin: '0 10px' }}>Credits: { this.props.auth.credits }</li>,
                    <li key="3"><a href="/api/logout">Logout</a></li>
                ];
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    {/* <NavLink to="/"> */}
                        <Link 
                            to={this.props.auth ? '/surveys' : '/' } 
                            className="left brand-logo">
                            Emaily
                        </Link>
                    {/* </NavLink> */}
                    <ul className="right">
                            {this.renderContent()}
                            {/* <a>Login With Google</a> */}
                    </ul>
                </div>
            </nav>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         auth: state.auth
//     }
// }

function mapStateToProps({ auth }) {
    return {
        auth
    }
}

export default connect(mapStateToProps)(Header);
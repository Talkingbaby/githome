import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar justify-content-end navbar-expand-lg">
                <a href={this.props.userInfo.html_url} target="_blank">
                    <img
                        src={this.props.userInfo.avatar_url}
                        className="rounded nav-img"
                    />
                </a>
            </nav>
        );
    }
}

export default Navbar;
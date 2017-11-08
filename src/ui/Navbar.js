import React, { Component } from 'react';

const style = {
    ul: {
        width: '100%',
    },
    li: {
        border: 'none',
        width: '20rem'
    }
};

const Search = (props) => {

    return (
        <li style={style.li} className="list-group-item align-self-center">
            <input
                type="text"
                className="form-control"
                placeholder="Search for a GitHub User"
                value={props.userName}
                onChange={props.handleChange}
            />
        </li>
    );
}

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar justify-content-end navbar-expand-lg">
                <ul style={style.ul} className="list-group">
                    <Search
                        userName={this.props.userName}
                        handleChange={this.props.handleChange}
                    />
                </ul>
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
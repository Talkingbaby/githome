import React, { Component } from 'react';

// "hireable": null,
// "bio": null,
// "public_repos": 33,
// "public_gists": 1,
// "followers": 2,
// "following": 0,

const style = {
    ul: {
        width: '100%',
        flexDirection: 'row'
    },
    li: {
        border: 'none',
        // width: '20rem'
    }
};

const Avatar = () => {
    return (
        <li style={style.li} className="list-group-item">
            <img
                src={this.props.userInfo.avatar_url}
                className="rounded nav-img"
            />
            <sub>{this.props.userInfo.login}</sub>
        </li>
    );
}

const Search = (props) => {
    return (
        <li style={style.li} className="list-group-item d-flex flex-row mr-auto">
            <input
                type="text"
                className="form-control"
                placeholder="Search for a GitHub User"
                value={props.userName}
                onChange={props.handleChange}
            />
            <button onClick={props.handleSearch} className="btn btn-default ml-1">Send</button>
        </li>
    );
}

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <ul style={style.ul} className="list-group justify-content-between align-items-center">
                    <Search
                        userName={this.props.userName}
                        handleChange={this.props.handleChange}
                        handleSearch={this.props.handleSearch}
                    />
                    <li style={style.li} className="list-group-item">
                        <a href={this.props.userInfo.html_url} target="_blank">
                            { this.props.userInfo.html_url ? <i className="fa fa-github" aria-hidden="true"></i> : null }
                        </a>
                    </li>
                    { this.props.userInfo.avatar_url ? <Avatar /> : null }
                </ul>
            </nav>
        );
    }
}

export default Navbar;
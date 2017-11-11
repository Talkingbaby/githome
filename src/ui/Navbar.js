import React, { Component } from 'react';

const Avatar = (props) => {
    return (
        <a className="list-group-item" href={props.userInfo.html_url} target="_blank">
            <img
                src={props.userInfo.avatar_url}
                className="rounded nav-img"
            />
        </a>
    );
}

const Search = (props) => {
    return (
        <div className="d-flex flex-row w-25">
            <input
                type="text"
                className="form-control searchbar"
                placeholder="Search for a User"
                value={props.userName}
                onChange={props.handleChange}
            />
            {/* <button onClick={props.handleSearch} className="btn btn-default ml-1">Search</button> */}
        </div>
    );
}

class Navbar extends Component {
    render() {
        return (
            <nav style={{backgroundColor: 'white'}} className="navbar fixed-top navbar-expand-lg justify-content-center">
                <Avatar userInfo={this.props.userInfo} />
                <Search
                    userName={this.props.userName}
                    handleChange={this.props.handleChange}
                    handleSearch={this.props.handleSearch}
                />
            </nav>
        );
    }
}

export default Navbar;
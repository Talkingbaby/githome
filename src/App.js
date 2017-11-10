import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import Navbar from './ui/Navbar';
import Body from './ui/Body';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userName: 'freeCodeCamp',
        userInfo: '',
        results: ''
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);
    this.callUser = this.callUser.bind(this);
    this.callUserRepos = this.callUserRepos.bind(this);
}

  componentWillMount() {
    this.callUser(this.state.userName);
    this.callUserRepos(this.state.userName);
  }

  callUser(user) {
    axios.get(`https://api.github.com/users/${user}`)
    .then((response) => {
        console.log(response);
        this.setState({userInfo: response.data});
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  callUserRepos(user) {
    axios.get(`https://api.github.com/users/${user}/repos`)
        .then((response) => {
            console.log(response);
            this.setState({results: response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
  }

  handleChange(event) {
    this.setState({userName: event.target.value});
    const userSearch = _.debounce((term) => { this.callUser(this.state.userName) }, 1500);
    const repoSearch = _.debounce((term) => { this.callUserRepos(this.state.userName) }, 1500);
    userSearch();
    repoSearch();
  }

  // handleSearch() {
  //   this.callUser(this.state.userName);
  //   this.callUserRepos(this.state.userName);
  // }

  render() {

    return (
      <div>
        <Navbar
          userInfo={this.state.userInfo}
          userName={this.state.userName}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          /* onSearchTermChange={callUser} */ 
        />
        <Body
          user={this.state.userName}
          repos={this.state.results} />
      </div>
    );
  }
}

export default App;

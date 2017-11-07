import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './ui/Navbar';
import Body from './ui/Body';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo: ''
    };
}

  componentWillMount() {
    axios.get(`https://api.github.com/users/Talkingbaby`)
    .then((response) => {
        console.log(response);
        this.setState({userInfo: response.data});
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  render() {
    console.log(this.state.userInfo);
    return (
      <div>
        <Navbar userInfo={this.state.userInfo}/>
        <Body />
      </div>
    );
  }
}

export default App;

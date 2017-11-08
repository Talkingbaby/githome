import React, { Component } from 'react';
import axios from 'axios';

// import SearchBar from './SearchBar';
import RepoResults from './RepoResults';

class Body extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         results: ''
    //     };

    //     // this.callUserRepos = this.callUserRepos.bind(this);
    // }

    // callUserRepos() {
    //     axios.get(`https://api.github.com/users/${this.props.userName}/repos`)
    //         .then((response) => {
    //             console.log(response);
    //             this.setState({results: response.data});
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

  render() {
      let results;

      if(typeof this.props.repos === 'object'){
        results = <RepoResults results={this.props.repos}/>;
      } else {
        results = null;
      }
      console.log('body repos: ', this.props.repos);
    return (
      <div id="body" className="container-fluid">
          <div className="row">
            { results }
          </div>
      </div>
    );
  }
}

export default Body;

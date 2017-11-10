import React, { Component } from 'react';
import axios from 'axios';

import RepoResults from './RepoResults';
import Commits from './Commits';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
        commits: '',
        repoName: ''
    };

    this.callCommits = this.callCommits.bind(this);
}

// callCommits() {
//   axios.get(`https://api.github.com/repos/${this.props.user}/${this.state.repoName}/commits`)
//   .then((response) => {
//       console.log('commits!!!! ',response);
//       this.setState({commits: response.data});
//   })
//   .catch(function (error) {
//       console.log(error);
//   });
// }

callCommits(e) {
  let repoName = e.target.innerText;

  axios.get(`https://api.github.com/repos/${this.props.user}/${repoName}/commits`)
  .then((response) => {
      console.log('commits!!!! ',response.data);
      this.setState({
        commits: response.data,
        repoName
      });
  })
  .catch(function (error) {
      console.log(error);
  });
}

  render() {
      let results;

      if(typeof this.props.repos === 'object'){
        results = <RepoResults
                    callCommits={this.callCommits}
                    results={this.props.repos}/>;
      } else {
        results = null;
      }
      console.log('body repos: ', this.props.repos);
    return (
      <div id="body" className="container-fluid">
          <div className="row">
            { results }
            <Commits
              repoName={this.state.repoName}
              commits={this.state.commits}
            />
          </div>
      </div>
    );
  }
}

export default Body;

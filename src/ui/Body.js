import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import RepoResults from './RepoResults';
import Commits from './Commits';
import Charts from './Charts';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commits: '',
      repoName: '',
      stats: ''
    };

    this.callCommits = this.callCommits.bind(this);
    this.callRepoStats = this.callRepoStats.bind(this);
  }

  callCommits(e) {
    let repoName = e.target.innerText;
    const user = this.props.user;

    axios.get(`https://api.github.com/repos/${user}/${repoName}/commits`)
      .then((response) => {
        this.setState({
          commits: response.data,
          repoName
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    const callRepoStats = _.debounce((term) => { this.callRepoStats(user, repoName); }, 1000);
    callRepoStats();
  }

  callRepoStats(user, repoName) {
    axios.get(`https://api.github.com/repos/${user}/${repoName}/stats/code_frequency`)
      .then((response) => {
        this.setState({
          stats: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    let results;

    if (typeof this.props.repos === 'object') {
      results = <RepoResults
        user={this.props.user}
        callCommits={this.callCommits}
        results={this.props.repos} />;
    } else {
      results = null;
    }

    return (
      <div id="body" className="container-fluid">
        <div className="row">
          {results}
          { this.state.commits === '' ? null : <Commits
            repoName={this.state.repoName}
            commits={this.state.commits}
          /> }
          { this.state.stats === '' ? null : <Charts stats={this.state.stats}/> }
        </div>
      </div>
    );
  }
}

export default Body;

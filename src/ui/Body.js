import React, { Component } from 'react';
import axios from 'axios';

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

  componentWillUpdate(nextProps, nextState) {
    console.log('nextstate: ', nextState);
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

    this.callRepoStats(user, repoName);
  }

  callRepoStats(user, repoName) {
    axios.get(`https://api.github.com/repos/${user}/${repoName}/stats/code_frequency`)
      .then((response) => {
        let data = response.data;

        this.setState({
          stats: data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    let repos;
    let charts;

    if (typeof this.props.repos === 'object') {
      repos = <RepoResults
        user={this.props.user}
        callCommits={this.callCommits}
        results={this.props.repos} />;
    } else {
      repos = null;
    }

    if (Object.keys(this.state.stats).length === 0) {
      charts = <h3>There are no stats :(</h3>;
    } else {
      charts = <Charts stats={this.state.stats} />;
    }

    return (
      <div id="body" className="container-fluid">
        <div className="row">
          {repos}
          {
            this.state.commits === ''
              ?
              null
              :
              <div className="col-7 repo-data">
                <div className="row">
                <Commits
                  repoName={this.state.repoName}
                  commits={this.state.commits}
                />
                {charts}
                </div>
              </div>
          }
        </div>
      </div>
    );
  }
}

export default Body;

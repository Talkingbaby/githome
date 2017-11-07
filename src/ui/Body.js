import React, { Component } from 'react';
import axios from 'axios';

// import SearchBar from './SearchBar';
import RepoResults from './RepoResults';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: ''
        };
    }

    componentWillMount() {
        axios.get(`https://api.github.com/users/Talkingbaby/repos`)
            .then((response) => {
                console.log(response);
                this.setState({results: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

  render() {
      let results;

      if(typeof this.state.results === 'object'){
        results = <RepoResults results={this.state.results}/>;
      } else {
        results = null;
      }

    return (
      <div id="body" className="container-fluid">
          <div className="row">
            { results }
          </div>
      </div>
    );
  }
}

export default App;

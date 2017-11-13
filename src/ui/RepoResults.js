import React, { Component } from 'react';

const ResultItem = (props) => {
    return (
        <li
            className="list-group-item d-flex justify-content-between align-items-center border-0"
            onClick={props.callCommits}
        >
            <div className="reponame" style={{cursor: 'pointer'}}>
                {props.info.name}
                { props.info.forked ? <i className="fa fa-cutlery ml-2" aria-hidden="true"></i> : null }
            </div>
            <div className="d-flex justify-content-around align-items-center w-50 repo-icons">
                <i className="fa fa-star" aria-hidden="true">{props.info.stars}</i>
                <i className="fa fa-binoculars" aria-hidden="true">{props.info.watchers}</i>
                <i className="fa fa-code-fork" aria-hidden="true">{props.info.forks}</i>
                <a href={props.info.url} target="_blanks">
                    <i className="fa fa-code" aria-hidden="true"></i>
                </a>
            </div>
        </li>
    );
}

class Results extends Component {
    render() {
        return (
            <div className="col-5 justify-content-between p-3 results">
                <h3>{`${this.props.user}'s Repos`}</h3>
                <ul className="list-group">
                    {this.props.results.map((repos, i) => {
                        return <ResultItem
                                    callCommits={this.props.callCommits}
                                    key={i}
                                    info={{
                                        name: repos.name,
                                        url: repos.html_url,
                                        stars: repos.stargazers_count,
                                        watchers: repos.watchers_count,
                                        forks: repos.forks_count,
                                        forked: repos.fork
                                    }}
                        />
                    })}
                </ul>
            </div>
        );
    }
}

export default Results;
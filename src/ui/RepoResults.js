import React, { Component } from 'react';

const ResultItem = (props) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center border-0">
            <p>{props.info.name}</p>
            <small><a href={props.info.url} target="_blanks">To the Repo</a></small>
        </li>
    );
}

class Results extends Component {
    render() {
        console.log('props: ', this.props.results);
        return (
            <div className="col-6 justify-content-between p-3 results">
                <ul className="list-group">
                    {this.props.results.map((repos) => {
                        return <ResultItem info={{
                            name: repos.name,
                            url: repos.html_url
                        }}
                        />
                    })}
                </ul>
            </div>
        );
    }
}

export default Results;
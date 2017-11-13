import React, { Component } from 'react';

const CommitItem = (props) => {
    return (
        <li className="list-group-item d-flex border-0">
            <ul className="list-group flex-row justify-content-around align-items-center">
                <li className="list-group-item ">
                    <a href={props.info.url} target="_blank">{props.info.name}</a>
                </li>
                <li className="list-group-item ">{props.info.message}</li>
            </ul>
        </li>
    );
}

class Commits extends Component {

    render() {
        return (
            <div className="col-12 justify-content-between p-3 commits">
                {
                    this.props.commits === ''
                        ?
                        null
                        :
                        <div className="card" >
                            <div className="card-header">{this.props.repoName} Commits</div>
                            <ul className="list-group list-group-flush">
                                {
                                    this.props.commits.map((commit, i) => {
                                        return <CommitItem
                                            key={i}
                                            info={{
                                                name: commit.commit.author.name,
                                                url: commit.html_url,
                                                message: commit.commit.message
                                            }}
                                        />
                                    })
                                }
                            </ul>
                        </div>
                }
            </div>
        );
    }
}

export default Commits;
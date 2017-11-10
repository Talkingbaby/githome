import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis,
    VictoryTheme, VictoryStack } from 'victory';

// const CommitItem = (props) => {
//     return (
//         <li className="list-group-item d-flex border-0">
//             <ul className="list-group flex-row justify-content-around align-items-center">
//                 <li className="list-group-item ">
//                     <a href={props.info.url} target="_blank">{props.info.name}</a>
//                 </li>
//                 <li className="list-group-item ">{props.info.message}</li>
//             </ul>
//         </li>
//     );
// }

class Charts extends Component {

    render() {
        let stats = this.props.stats;
        console.log('stats!!! ', stats);
        return (
            <div className="col-6 justify-content-between charts">
                    {
                        this.props.commits === '' ? 
                            null 
                            : 
                        <VictoryChart
                            theme={VictoryTheme.material}
                            domainPadding={30}
                        >
                            {/* <VictoryAxis
                                // tickValues specifies both the number of ticks and where
                                // they are placed on the axis
                                tickValues={stats.map((week, i) => i)}
                                tickFormat={stats.map((week, i) => `week ${i}`)}
                            />
                            <VictoryAxis
                                dependentAxis
                                // tickFormat specifies how ticks should be displayed
                                tickFormat={(x) => (x * 10)}
                            /> */}
                                        <VictoryLine
                                        style={{
                                          data: { stroke: "#c43a31" },
                                          parent: { border: "1px solid #ccc"}
                                        }}
                                        data={this.props.stats.map((week) => week[1])}
                                      />
                        </VictoryChart>
                    }
            </div>
        );
    }
}

export default Charts;
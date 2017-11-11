import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme, 
    VictoryTooltip, VictoryVoronoiContainer } from 'victory';

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
                                containerComponent={
                                    <VictoryVoronoiContainer voronoiDimension="x"
                                    labels={(datum) => datum.y}
                                    labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{fill: "white"}}/>}/>
                                }
                            >
                                <VictoryLine
                                    style={{
                                        data: { stroke: "green" },
                                        parent: { border: "1px solid #ccc" }
                                    }}
                                    data={this.props.stats.map((week) => week[1] || 0)}
                                />
                                <VictoryLine
                                    style={{
                                        data: { stroke: "red" },
                                        parent: { border: "1px solid #ccc" }
                                    }}
                                    data={this.props.stats.map((week) => Math.abs(week[2] || 0))}
                                />
                            </VictoryChart>
                    }
            </div>
        );
    }
}

export default Charts;
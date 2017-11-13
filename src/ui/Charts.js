import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme, 
    VictoryTooltip, VictoryVoronoiContainer } from 'victory';


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
                                    labels={(d) => `y: ${d.y}`}
                                    labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{fill: "white"}}/>}/>
                                }
                            >
                                <VictoryLine
                                    style={{
                                        data: { stroke: "green" },
                                        parent: { border: "1px solid #ccc" }
                                    }}
                                    data={stats.map((week) =>Math.abs(week[1]))}
                                />
                                <VictoryLine
                                    style={{
                                        data: { stroke: "red" },
                                        parent: { border: "1px solid #ccc" }
                                    }}
                                    data={stats.map((week) => Math.abs(week[2]))}
                                />
                                {/* <VictoryLine
                                    style={{
                                        data: { stroke: "black" },
                                        parent: { border: "1px solid #ccc" }
                                    }}
                                    data={this.props.stats.map((week) => Math.abs(week[3]))}
                                /> */}

                            </VictoryChart>
                    }
            </div>
        );
    }
}

export default Charts;
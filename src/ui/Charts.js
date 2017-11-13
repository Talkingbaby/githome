import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme, 
    VictoryTooltip, VictoryVoronoiContainer } from 'victory';


class Charts extends Component {

    render() {
        let stats = this.props.stats;
        let data1 = stats.map((week) =>Math.abs(week[1]));
        let data2 = stats.map((week) =>Math.abs(week[2]));

        return (
            <div className="col-12 justify-content-between charts">
                <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Commit code addition/deletions</h4>
                                <VictoryChart
                                theme={VictoryTheme.material}
                                height={250}
                                domainPadding={10}
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
                                    data={data1}
                                />
                                <VictoryLine
                                    style={{
                                        data: { stroke: "red" },
                                        parent: { border: "1px solid #ccc" }
                                    }}
                                    data={data2}
                                />
                            </VictoryChart>
                            </div>
                    </div>                            
            </div>
        );
    }
}

export default Charts;
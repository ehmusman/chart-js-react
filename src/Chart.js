import React from 'react'
import { Bar, HorizontalBar, Line, Doughnut, Radar, Polar, Pie } from 'react-chartjs-2'

function Chart(props) {

    return (
        <div>
            <Bar
                data={props.chartData}
                options={props.chartOptions}
            />
            <HorizontalBar
                data={props.chartData}
                options={props.chartOptions}
            />
            <Pie
                data={props.chartData}
                options={props.chartOptions}
            />
            <Line
                data={props.chartData}
                options={props.chartOptions}
            />
            <Doughnut
                data={props.chartData}
                options={props.chartOptions}
            />
            <Radar
                data={props.chartData}
                options={props.chartOptions}
            />
            <Polar
                data={props.chartData}
                options={props.chartOptions}
            />
        </div >
    )
}

export default Chart

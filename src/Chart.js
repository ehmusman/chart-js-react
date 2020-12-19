import React from 'react'
import { Bar } from 'react-chartjs-2'

function Chart(props) {

    return (
        <div>
            <Bar
                data={props.chartData}
                options={props.chartOptions}
            />
        </div >
    )
}

export default Chart

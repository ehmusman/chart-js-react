import { useEffect, useState } from "react";
import Chart from "./Chart";


function App() {
  const [chartData, setChartData] = useState({})
  const [chartOptions, setChartOptions] = useState({})
  useEffect(() => {
    getChartData();
    getChartOptions();
  }, [])
  const getChartData = () => {
    setChartData({
      labels: ['Karachi', 'Lahore', 'Faisalabad', 'Rawalpinde', 'Gujranwala', 'Peshawar', 'Multan', 'Hyderabad', 'Islamabad', 'Quetta'],
      datasets: [{
        label: 'Population',
        data: [
          14916456,
          11126285,
          3204726,
          2098231,
          2027001,
          1970042,
          1871843,
          1734309,
          1009832,
          1001205
        ],
        backgroundColor: [
          'rgb(23,342,56)',
          'rgb(253,34,56)',
          'rgb(234,34,56)',
          'rgb(23,34,256)',
          'rgb(23,144,56)',
          'rgb(223,34,56)',
          'rgb(23,234,56)',
          'rgb(23,134,253)',
          'rgb(223,134,153)',
          'rgb(233,134,236)'
        ],
        borderWidth: 1,
        borderColor: "#ddd",
        hoverBorderWidth: 3,
        hoverBorderColor: "#000"
      }]
    }
    )
  }
  const getChartOptions = () => {
    setChartOptions({
      title: {
        display: true,
        text: 'Largest Cities in Pakistan',
        fontSize: 25
      },
      legend: {
        display: true,
        position: 'right', // top, bottom ,left, right
        labels: {
          fontColor: '#000'
        }
      },
      layout: {
        padding: {
          left: 150,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
      tooltips: {
        enabled: true // true, false
      }

    })
  }
  return (
    <div>
      <Chart chartData={chartData} chartOptions={chartOptions} />
    </div>
  );
}

export default App;

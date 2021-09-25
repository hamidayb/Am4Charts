import Risk from './Risk'
import Analysis from './Analysis'

const Risk_Analysis = () => {
  const pieChartConfig = {
    chart1: {
      color: '#2a912a',
      percent: 30,
      observations: 510,
    },
    chart2: {
      color: '#22b8d6',
      percent: 45,
      observations: 765,
    },
    chart3: {
      color: '#c93b36',
      percent: 25,
      observations: 425,
    },
  }
  return (
    <div>
      <Analysis pieChartConfig={pieChartConfig} /> <br />
      <Risk />
    </div>
  )
}

export default Risk_Analysis

import { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { pieChartData } from '../data'

const PieChart = () => {
  useEffect(() => {
    // Create chart instance
    let chart = am4core.create('piechart', am4charts.PieChart)

    // Create pie series
    let series = chart.series.push(new am4charts.PieSeries())
    series.dataFields.value = 'litres'
    series.dataFields.category = 'country'

    chart.data = pieChartData

    chart.legend = new am4charts.Legend()

    return () => {
      if (chart) {
        chart.dispose()
      }
    }
  })

  // And, for a good measure, let's add a legend
  return <div id='piechart' style={{ width: '900px', height: '800px' }}></div>
}

export default PieChart

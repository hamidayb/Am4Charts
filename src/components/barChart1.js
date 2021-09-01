import { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import { barChartData } from '../data'

const BarChart1 = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated)
    // Create chart instance
    let chart = am4core.create('barchart1', am4charts.XYChart)
    chart.data = barChartData

    let title = chart.titles.create()
    title.text = 'Test Bar Chart from am4charts Documentation'
    title.fontSize = am4core.percent(150)
    title.marginBottom = 30

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = 'country'
    categoryAxis.title.text = 'Countries'
    categoryAxis.title.fontSize = 20
    categoryAxis.renderer.grid.template.location = 0
    categoryAxis.renderer.line.strokeOpacity = 1
    categoryAxis.renderer.minGridDistance = 30
    categoryAxis.renderer.cellStartLocation = 0.2
    categoryAxis.renderer.cellEndLocation = 0.8

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.title.text = 'Litres sold (M)'
    valueAxis.title.fontSize = 20

    let series = chart.series.push(new am4charts.ColumnSeries())
    series.name = 'Sales'
    series.dataFields.valueY = 'litres'
    series.dataFields.categoryX = 'country'
    series.columns.template.tooltipText =
      'Series: {name}\nCategory: {categoryX}\nValue: {valueY}'
    series.columns.template.width = am4core.percent(70)
  })
  return (
    <div
      className='barchart1 shadow p-3 mb-5 bg-white rounded'
      style={{ width: '100%', height: '600px', marginTop: '50px' }}
    ></div>
  )
}

export default BarChart1

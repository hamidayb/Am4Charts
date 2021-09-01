import { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import { barChartData } from '../data'

const BarChart = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated)
    // Create chart instance
    let chart = am4core.create('barchart', am4charts.XYChart)

    chart.data = barChartData

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = 'country'
    categoryAxis.title.text = 'Countries'
    categoryAxis.title.fontSize = 25

    // categoryAxis.tooltip.getFillFromObject = false
    // categoryAxis.tooltip.label.fill = '#ff0000'
    // categoryAxis.tooltip.label.fontFamily = 'Courier New'
    categoryAxis.tooltip.label.fontSize = 15

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.title.text = 'Litres sold (M)'
    valueAxis.title.fontSize = 25

    let series = chart.series.push(new am4charts.ColumnSeries())
    series.name = 'Sales'
    series.dataFields.valueY = 'litres'
    series.dataFields.categoryX = 'country'
    series.columns.template.tooltipText =
      'Series: {name}\nCategory: {categoryX}\nValue: {valueY}'
    series.columns.template.fill = am4core.color('#104547')
    // series.stacked = true

    // let series2 = chart.series.push(new am4charts.ColumnSeries())
    // series2.name = 'Investment'
    // series2.dataFields.valueY = 'litres'
    // series2.dataFields.categoryX = 'country'
    // series2.columns.template.tooltipText =
    //   'Series: {name}\nCategory: {categoryX}\nValue: {valueY}'
    // series2.columns.template.fill = am4core.color('#d90')
    // series2.stacked = true
  })
  return (
    <div
      className='barchart'
      style={{ width: '80%', height: '600px', marginTop: '50px' }}
    ></div>
  )
}

export default BarChart

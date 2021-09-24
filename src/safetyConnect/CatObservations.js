import { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

const CatObservations = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated)
    // Create chart instance
    let chart = am4core.create('chartdiv', am4charts.XYChart)
    chart.data = [
      {
        category: 'Welding and Cutting',
        value: 4,
      },
      {
        category: 'Vehicle and Equipment',
        value: 2,
      },
      {
        category: 'Transport Safety',
        value: 6,
      },
      {
        category: 'Slip, Trip and Falls',
        value: 7,
      },
      {
        category: 'Site Specific Safety',
        value: 4,
      },
    ]

    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = 'category'
    categoryAxis.fontSize = '12px'
    categoryAxis.renderer.cellStartLocation = 0.3
    categoryAxis.renderer.cellEndLocation = 0.7
    categoryAxis.renderer.grid.template.disabled = true
    categoryAxis.renderer.line.strokeOpacity = 0.1

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis())
    valueAxis.renderer.grid.template.strokeWidth = 0
    valueAxis.renderer.minGridDistance = 30
    valueAxis.renderer.line.strokeOpacity = 0.1
    valueAxis.min = 0
    valueAxis.max = 10
    valueAxis.strictMinMax = true

    let series = chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.valueX = 'value'
    series.dataFields.categoryY = 'category'
    series.fill = '#3ecf6c'
    series.columns.template.width = am4core.percent(10)
    series.columns.template.column.cornerRadiusBottomRight = '25px'
    series.columns.template.column.cornerRadiusTopRight = '25px'

    return () => {
      chart.dispose()
    }
  })
  return (
    <div
      className='chartdiv'
      style={{ width: '800px', height: '500px', marginTop: '50px' }}
    ></div>
  )
}

export default CatObservations

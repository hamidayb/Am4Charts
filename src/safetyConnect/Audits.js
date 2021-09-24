import { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

const Audits = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated)
    // Create chart instance
    let chart = am4core.create('chartdiv', am4charts.XYChart)
    chart.data = [
      {
        status: 'Schedule',
        value: 15,
        color: '#12b386',
      },
      {
        status: 'In Progress',
        value: 4,
        color: '#0d0533',
      },
      {
        status: 'Completed',
        value: 7,
        color: '#24870e',
      },
    ]

    chart.numberFormatter.numberFormat = '00'

    let title = chart.titles.create()
    title.text = 'Audits'
    title.fill = '#12b386'
    title.fontSize = am4core.percent(150)
    title.marginBottom = 30

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = 'status'
    categoryAxis.renderer.grid.template.location = 0
    categoryAxis.renderer.line.strokeOpacity = 1
    categoryAxis.renderer.minGridDistance = 80
    categoryAxis.renderer.cellStartLocation = 0.2
    categoryAxis.renderer.cellEndLocation = 0.8

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.renderer.baseGrid.disabled = true
    valueAxis.renderer.grid.template.strokeWidth = 0
    valueAxis.hidden = true

    let series = chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.valueY = 'value'
    series.dataFields.categoryX = 'status'
    series.columns.template.propertyFields.fill = 'color'
    series.columns.template.width = am4core.percent(60)
    series.columns.template.column.cornerRadiusTopLeft = 8
    series.columns.template.column.cornerRadiusTopRight = 8
    series.strokeWidth = 0

    let valueLabel = series.columns.template.createChild(am4core.Label)
    valueLabel.text = '{value}'
    valueLabel.fontSize = 20
    valueLabel.valign = 'top'
    valueLabel.fontWeight = 'bold'
    valueLabel.fill = am4core.color('#fff')
    valueLabel.dx = 10
    valueLabel.dy = 10
    valueLabel.strokeWidth = 0

    return () => {
      chart.dispose()
    }
  })
  return (
    <div
      className='chartdiv'
      style={{ width: '500px', height: '500px', marginTop: '50px' }}
    ></div>
  )
}

export default Audits

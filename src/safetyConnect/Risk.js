import { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

const Risk = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated)
    // Create chart instance
    let chart = am4core.create('chartdiv', am4charts.XYChart)
    chart.data = [
      {
        business: 'Chemical Safety',
        value: 18,
      },
      {
        business: 'SwipeWire',
        value: 28,
      },
      {
        business: 'SecureSmarter',
        value: 15,
      },
      {
        business: 'Web Security Services',
        value: 22,
      },
      {
        business: 'App Developer',
        value: 8,
      },
      {
        business: 'Formonix',
        value: 27,
      },
      {
        business: 'Real Estate',
        value: 22,
      },
      {
        business: 'Seekingon',
        value: 12,
      },
      {
        business: 'Cloudrevel',
        value: 17,
      },
      {
        business: 'App Developer',
        value: 8,
      },
      {
        business: 'D-Watson',
        value: 27,
      },
      {
        business: 'Nginx',
        value: 22,
      },
      {
        business: 'Washington',
        value: 12,
      },
      {
        business: 'Stock Market',
        value: 17,
      },
      {
        business: 'Apple',
        value: 27,
      },
      {
        business: 'Google',
        value: 22,
      },
      {
        business: 'Coca-Cola',
        value: 12,
      },
      {
        business: 'Microsoft',
        value: 17,
      },
      {
        business: 'Toyota',
        value: 8,
      },
      {
        business: 'IBM',
        value: 27,
      },
      {
        business: 'Honda',
        value: 22,
      },
      {
        business: 'Amazon',
        value: 12,
      },
      {
        business: 'Disney',
        value: 17,
      },
    ]

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.renderer.baseGrid.disabled = true
    valueAxis.renderer.grid.template.strokeWidth = 0
    valueAxis.fontSize = 12

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = 'business'
    categoryAxis.renderer.grid.template.location = 0
    categoryAxis.renderer.minGridDistance = 30
    categoryAxis.renderer.line.strokeOpacity = 0
    categoryAxis.renderer.cellStartLocation = 0.2
    categoryAxis.renderer.cellEndLocation = 0.8
    categoryAxis.fontSize = 12

    let catLabel = categoryAxis.renderer.labels.template
    catLabel.rotation = 270
    catLabel.horizontalCenter = 'middle'
    catLabel.verticalCenter = 'middle'
    categoryAxis.renderer.baseGrid.disabled = true
    categoryAxis.renderer.grid.template.strokeWidth = 0

    let series = chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.valueY = 'value'
    series.dataFields.categoryX = 'business'
    series.columns.template.fill = '#092959'
    series.columns.template.width = am4core.percent(60)
    series.columns.template.column.cornerRadiusTopLeft = 20
    series.columns.template.column.cornerRadiusTopRight = 20

    return () => {
      chart.dispose()
    }
  })
  return (
    <div className='chartdiv' style={{ width: '720px', height: '250px' }}></div>
  )
}

export default Risk

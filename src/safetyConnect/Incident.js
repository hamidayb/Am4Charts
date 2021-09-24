import { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

const Incident = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated)
    // Create chart instance
    let chart = am4core.create('chartdiv', am4charts.XYChart)
    chart.data = [
      {
        category: 'Warehouse',
        hro: 8,
        mro: 6,
        lro: 12,
        cum: 14,
      },
      {
        category: 'Storage Yard',
        hro: 12,
        mro: 15,
        lro: 9,
        cum: 4,
      },
      {
        category: 'Reformer Area',
        hro: 8,
        mro: 10,
        lro: 12,
        cum: 9,
      },
      {
        category: 'Mess Hall',
        hro: 12,
        mro: 13,
        lro: 8,
        cum: 5,
      },
      {
        category: 'Welding Shop',
        hro: 5,
        mro: 8,
        lro: 13,
        cum: 8,
      },
    ]

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = 'category'
    categoryAxis.fontSize = 14
    categoryAxis.renderer.minGridDistance = 30
    categoryAxis.renderer.cellStartLocation = 0.1
    categoryAxis.renderer.cellEndLocation = 0.9
    categoryAxis.renderer.grid.template.opacity = 0.4
    categoryAxis.renderer.grid.template.location = 0

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.renderer.grid.template.opacity = 0.4
    valueAxis.fontSize = 14
    valueAxis.min = 0
    valueAxis.max = 16

    function createSeries(field, name, color, stacked) {
      var series = chart.series.push(new am4charts.ColumnSeries())
      series.dataFields.valueY = field
      series.dataFields.categoryX = 'category'
      series.name = name
      series.stacked = stacked
      series.strokeWidth = 0
      series.columns.template.fill = color
      series.columns.template.tooltipText = '{name}: [bold]{valueY}[/]'
      series.columns.template.width = am4core.percent(30)
      series.columns.template.column.cornerRadiusTopLeft = 20
      series.columns.template.column.cornerRadiusTopRight = 20
    }

    createSeries('hro', 'High Risk Observation', '#cf2525', false)
    createSeries('mro', 'Medium Risk Observation', '#eb9100', false)
    createSeries('lro', 'Low Risk Observation', '#07940e', false)
    createSeries('cum', 'Cumulative', '#4188d9', false)

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'bottom'
    chart.legend.fontSize = 12

    return () => {
      chart.dispose()
    }
  })
  return (
    <div
      className='chartdiv'
      style={{ width: '1000px', height: '600px' }}
    ></div>
  )
}

export default Incident

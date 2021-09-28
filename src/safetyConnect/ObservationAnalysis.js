import { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

const ObservationAnalysis = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated)
    let chart = am4core.create('chartdiv', am4charts.RadarChart)
    chart.hiddenState.properties.opacity = 0
    chart.data = [
      {
        category: 'Concerns',
        value: 425,
        color: { fill: '#cf2525' },
      },
      {
        category: 'Positive',
        value: 362,
        color: { fill: '#eb9100' },
      },
      {
        category: 'LSR',
        value: 240,
        color: { fill: '#07940e' },
      },
      {
        category: 'Near Miss',
        value: 490,
        color: { fill: '#4188d9' },
      },
    ]

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = 'category'
    categoryAxis.renderer.labels.template.location = 0.5
    categoryAxis.renderer.labels.template.horizontalCenter = 'right'
    categoryAxis.fontSize = 12
    categoryAxis.renderer.grid.template.location = 0
    categoryAxis.renderer.tooltipLocation = 0.5
    categoryAxis.renderer.grid.template.strokeOpacity = 0
    categoryAxis.renderer.axisFills.template.disabled = true
    categoryAxis.interactionsEnabled = false
    categoryAxis.renderer.minGridDistance = 10
    // categoryAxis.renderer.inversed = true
    categoryAxis.hidden = true

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis())
    valueAxis.tooltip.disabled = true
    valueAxis.renderer.labels.template.horizontalCenter = 'left'
    valueAxis.min = 0
    valueAxis.max = 1000
    valueAxis.hidden = true
    valueAxis.strictMinMax = true
    valueAxis.renderer.maxLabelPosition = 0.99
    valueAxis.renderer.minGridDistance = 10
    valueAxis.renderer.grid.template.strokeOpacity = 0
    valueAxis.renderer.axisFills.template.disabled = true
    valueAxis.interactionsEnabled = false
    valueAxis.renderer.opposite = true

    let series = chart.series.push(new am4charts.RadarColumnSeries())
    series.name = 'Series'
    series.dataFields.categoryY = 'category'
    series.dataFields.valueX = 'value'
    series.columns.template.radarColumn.configField = 'color'
    series.columns.template.width = am4core.percent(30)
    series.strokeWidth = 0

    let valueLabel = series.bullets.push(new am4charts.LabelBullet())
    valueLabel.label.text = '{value}'
    valueLabel.locationX = 1
    valueLabel.dx = -30
    valueLabel.fontSize = 14

    chart.legend = new am4charts.Legend()
  })
  return (
    <div className="chartdiv" style={{ width: '100vw', height: '80vh' }}></div>
  )
}

export default ObservationAnalysis

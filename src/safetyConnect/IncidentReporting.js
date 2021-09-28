import { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

const IncidentReporting = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated)
    let chart = am4core.create('chartdiv', am4charts.RadarChart)
    chart.hiddenState.properties.opacity = 0
    chart.data = [
      {
        category: 'Concerns',
        value: 80,
        value2: 20,
        color: { fill: '#0d0533' },
        color2: { fill: '#e0e0e0' },
      },
      {
        category: 'Positive',
        value: 70,
        value2: 30,
        color: { fill: '#24870e' },
        color2: { fill: '#e0e0e0' },
      },
      {
        category: 'LSR',
        value: 50,
        value2: 50,
        color: { fill: '#12b386' },
        color2: { fill: '#e0e0e0' },
      },
    ]

    chart.innerRadius = 70

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
    categoryAxis.renderer.inversed = true
    categoryAxis.hidden = true

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis())
    valueAxis.tooltip.disabled = true
    valueAxis.renderer.labels.template.horizontalCenter = 'left'
    valueAxis.min = 0
    valueAxis.max = 100
    valueAxis.hidden = true
    valueAxis.strictMinMax = true
    valueAxis.renderer.maxLabelPosition = 0.99
    valueAxis.renderer.minGridDistance = 10
    valueAxis.renderer.grid.template.strokeOpacity = 0
    valueAxis.renderer.axisFills.template.disabled = true
    valueAxis.interactionsEnabled = false

    function createSeries(valueX, color) {
      let series = chart.series.push(new am4charts.RadarColumnSeries())
      series.name = 'Series'
      series.dataFields.categoryY = 'category'
      series.dataFields.valueX = valueX
      series.columns.template.radarColumn.configField = color
      series.columns.template.width = am4core.percent(40)
      series.strokeWidth = 0
      series.stacked = true

      let label = series.createChild(am4core.Label)
      label.html =
        '<div style="text-align: center"><p style="opacity: 0.5; padding: 0px; margin: 0px">Overall <br />Incidents</p><p style="font-size: 32px; font-weight: bold; padding: 0px; margin: 0px">27,23</p></div>'
      label.horizontalCenter = 'middle'
      label.verticalCenter = 'middle'
      label.fontSize = '1.1rem'
      label.marginBottom = 20
      label.adjustsFontSizeToFitWidth = true
    }

    createSeries('value', 'color')
    createSeries('value2', 'color2')

    // let valueLabel = series.bullets.push(new am4charts.LabelBullet())
    // valueLabel.label.text = '{value}'
    // valueLabel.locationX = 1
    // valueLabel.dx = -30
    // valueLabel.fontSize = 14

    chart.legend = new am4charts.Legend()
  })
  return (
    <div className="chartdiv" style={{ width: '400px', height: '400px' }}></div>
  )
}

export default IncidentReporting

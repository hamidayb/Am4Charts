import { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

const Audits = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated)
    // Create chart instance
    let container = am4core.create('container', am4core.Container)
    // container.width = am4core.percent(100)
    // container.height = '500px'
    container.layout = 'horizontal'

    function createXYChart(data, titleHTML, titleColor) {
      let chart = container.createChild(am4charts.XYChart)
      chart.data = chart.width = 500
      chart.height = 500
      chart.data = data
      chart.numberFormatter.numberFormat = '00'
      chart.paddingLeft = 0
      chart.paddingRight = 0

      let title = chart.titles.create()
      title.html = titleHTML
      title.fill = titleColor
      title.fontSize = am4core.percent(150)
      title.marginBottom = 30

      // Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
      categoryAxis.dataFields.category = 'status'
      categoryAxis.renderer.grid.template.location = 0
      categoryAxis.renderer.minGridDistance = 80
      categoryAxis.renderer.cellStartLocation = 0.2
      categoryAxis.renderer.cellEndLocation = 0.8
      categoryAxis.renderer.line.strokeOpacity = 0.2

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
      valueLabel.rotation = 270
      valueLabel.dx = 13
      valueLabel.dy = 10
      valueLabel.strokeWidth = 0
    }

    const chart1Data = [
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

    createXYChart(
      chart1Data,
      '<i class="fas fa-address-book"></i> Audits',
      '#12b386'
    )

    const chart2Data = [
      {
        status: 'Schedule',
        value: 12,
        color: '#12b386',
      },
      {
        status: 'In Progress',
        value: 7,
        color: '#0d0533',
      },
      {
        status: 'Completed',
        value: 4,
        color: '#24870e',
      },
    ]

    createXYChart(
      chart2Data,
      '<i class="fab fa-accusoft"></i> Inspections',
      '#4d91e3'
    )
  })
  return (
    <div className='container' style={{ width: '100%', height: '500px' }}></div>
  )
}

export default Audits

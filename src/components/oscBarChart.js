import { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import { oscData } from '../data'

const OutSchoolChildrenChart = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated)
    // Create chart instance
    let chart = am4core.create('outSchoolChildrenChart', am4charts.XYChart)
    chart.data = oscData

    let title = chart.titles.create()
    title.text = 'Out of School Children in Pakistan'
    title.fontSize = am4core.percent(150)
    title.marginBottom = 30

    let label = chart.createChild(am4core.Label)
    label.text = '(in millions)'
    label.fontSize = 16
    label.align = 'center'
    label.isMeasured = false
    label.x = 450
    label.y = 30

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = 'year'
    categoryAxis.title.text = 'Year'
    categoryAxis.title.fontSize = 20
    categoryAxis.renderer.grid.template.location = 0
    categoryAxis.renderer.line.strokeOpacity = 1
    categoryAxis.renderer.minGridDistance = 30
    categoryAxis.renderer.cellStartLocation = 0.2
    categoryAxis.renderer.cellEndLocation = 0.8

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.min = 0
    valueAxis.max = 18
    valueAxis.title.text = 'Population'
    valueAxis.title.fontSize = 20

    function createSeries(field, name, stacked) {
      var series = chart.series.push(new am4charts.ColumnSeries())
      series.dataFields.valueY = field
      series.dataFields.categoryX = 'year'
      series.name = name
      // series.columns.template.fill = am4core.color('#104547')
      series.columns.template.tooltipText = '{name}: [bold]{valueY}[/]'
      series.stacked = stacked
      series.columns.template.width = am4core.percent(90)

      let bullet = series.bullets.push(new am4charts.LabelBullet())
      bullet.label.text = '{valueY}'
      bullet.label.rotation = -20
      bullet.dy = -10
      bullet.fontSize = 13
    }

    createSeries('male', 'Male', false)
    createSeries('female', 'Female', false)
    createSeries('overall', 'Overall', false)

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    return () => {
      chart.dispose()
    }
  })
  return (
    <div
      className='outSchoolChildrenChart shadow p-3 mb-5 bg-white rounded'
      style={{ width: '100%', height: '600px', marginTop: '50px' }}
    ></div>
  )
}

export default OutSchoolChildrenChart

import { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import { outSchoolData } from '../data'

const OutSchoolProvinceChart = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated)
    // Create chart instance
    let chart = am4core.create('outSchoolProvinceChart', am4charts.XYChart)
    chart.data = outSchoolData

    let title = chart.titles.create()
    title.text = 'Out of School Children Provincially in Pakistan'
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
    categoryAxis.dataFields.category = 'province'
    categoryAxis.title.text = 'Province'
    categoryAxis.title.fontSize = 20
    categoryAxis.renderer.grid.template.location = 0
    categoryAxis.renderer.line.strokeOpacity = 1
    categoryAxis.renderer.minGridDistance = 30
    categoryAxis.renderer.cellStartLocation = 0.2
    categoryAxis.renderer.cellEndLocation = 0.8

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.min = 0
    valueAxis.max = 6
    valueAxis.title.text = 'Population'
    valueAxis.title.fontSize = 20

    function createSeries(field, name, stacked) {
      var series = chart.series.push(new am4charts.ColumnSeries())
      series.dataFields.valueY = field
      series.dataFields.categoryX = 'province'
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

    createSeries('y2010', '2010', false)
    createSeries('y2012', '2012', false)
    createSeries('y2014', '2014', false)
    createSeries('y2016', '2016', false)

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
  })
  return (
    <div
      className='outSchoolProvinceChart shadow p-3 mb-5 bg-white rounded'
      style={{ width: '100%', height: '600px', marginTop: '50px' }}
    ></div>
  )
}

export default OutSchoolProvinceChart

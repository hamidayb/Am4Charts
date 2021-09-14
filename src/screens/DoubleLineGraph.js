/* Imports */
import { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

const DoubleLineGraph = () => {
  const data = [
    { year: 2006, male: 67.65, female: 39.61 },
    { year: 2008, male: 68.87, female: 40.08 },
    { year: 2009, male: 68.63, female: 40.31 },
    { year: 2010, male: 68.9, female: 41.02 },
    { year: 2011, male: 66.9, female: 41.98 },
    { year: 2012, male: 69.86, female: 43.07 },
    { year: 2013, male: 68.63, female: 41.97 },
    { year: 2014, male: 69.07, female: 44.28 },
    { year: 2017, male: 71.12, female: 46.47 },
    { year: 2019, male: 70, female: 50 },
  ]

  useEffect(() => {
    am4core.useTheme(am4themes_animated)
    let chart = am4core.create('chartdiv', am4charts.XYChart)

    /* Create legend and enable default markers */
    chart.legend = new am4charts.Legend()
    chart.legend.useDefaultMarker = true

    /* Remove square from marker template */
    var marker = chart.legend.markers.template
    marker.disposeChildren()
    marker.width = 35
    marker.height = 30

    /* Add custom image instead */
    var flag = marker.createChild(am4core.Image)
    flag.width = 30
    flag.height = 30
    flag.verticalCenter = 'top'
    flag.horizontalCenter = 'left'
    flag.adapter.add('href', function (href, target) {
      if (
        target.dataItem &&
        target.dataItem.dataContext &&
        target.dataItem.dataContext.dummyData
      ) {
        return target.dataItem.dataContext.dummyData.flag
      } else {
        return href
      }
    })

    chart.colors.step = 2
    chart.data = generateChartData()

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.renderer.minGridDistance = 50

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.renderer.opposite = false

    let count = 0
    function createAxisAndSeries(field, name, color, characterImage) {
      let series = chart.series.push(new am4charts.LineSeries())
      series.stroke = am4core.color(color)
      series.fill = am4core.color(color)
      series.dataFields.valueY = field
      series.dataFields.dateX = 'date'
      series.strokeWidth = 2
      series.yAxis = valueAxis
      series.name = name
      series.tooltipText = '{name}: [bold]{valueY}[/]'
      series.tensionX = 0.8
      series.showOnInit = true
      series.dummyData = {
        flag: characterImage,
      }

      let interfaceColors = new am4core.InterfaceColorSet()
      let bullet = series.bullets.push(new am4charts.CircleBullet())
      bullet.circle.stroke = interfaceColors.getFor('background')
      bullet.circle.strokeWidth = 2

      let labelBullet = series.bullets.push(new am4charts.LabelBullet())
      labelBullet.label.text = '{valueY}%'
      labelBullet.dy = -20
      labelBullet.fontSize = 13
    }

    createAxisAndSeries('male', 'Male', '#005B8D', 'male.svg')
    createAxisAndSeries('female', 'Female', '#FFB800', 'female.svg')

    // Add legend
    // chart.legend = new am4charts.Legend()

    // Add cursor
    chart.cursor = new am4charts.XYCursor()

    // generate some random data, quite different range
    function generateChartData() {
      let chartData = []

      data.forEach((d) => {
        let newDate = new Date(d.year, null)

        chartData.push({
          date: newDate,
          male: d.male,
          female: d.female,
        })
      })
      return chartData
    }

    return () => {
      chart.dispose()
    }
  })
  return <div id='chartdiv' style={{ width: '100%', height: '500px' }}></div>
}

export default DoubleLineGraph

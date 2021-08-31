import { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

const GanttChart = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated)

    var chart = am4core.create('ganttChart', am4charts.XYChart)
    chart.hiddenState.properties.opacity = 0 // this creates initial fade-in

    chart.paddingRight = 30
    chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd HH:mm'

    let colorSet = new am4core.ColorSet()
    colorSet.saturation = 0.4
    chart.data = [
      {
        name: 'Monday',
        fromDate: '2018-01-01 08:00',
        toDate: '2018-01-01 10:00',
        msg: 'Create a MERN app performing CRUD operations',
        color: colorSet.getIndex(0).brighten(0),
      },
      {
        name: 'Tuesday',
        fromDate: '2018-01-01 12:00',
        toDate: '2018-01-01 15:00',
        msg: 'Become familiar with Am4Charts',
        color: colorSet.getIndex(0).brighten(0.4),
      },
      {
        name: 'Wednesday',
        fromDate: '2018-01-01 15:30',
        toDate: '2018-01-01 21:30',
        msg: 'Build a website with different types of Charts',
        color: colorSet.getIndex(0).brighten(0.8),
      },
      {
        name: 'Thursday',
        fromDate: '2018-01-01 09:00',
        toDate: '2018-01-01 12:00',
        msg: 'Think about your business and jot down notes',
        color: colorSet.getIndex(2).brighten(0),
      },
      {
        name: 'Friday',
        fromDate: '2018-01-01 13:00',
        toDate: '2018-01-01 17:00',
        msg: 'Start working on your personal portfolio website',
        color: colorSet.getIndex(2).brighten(0.4),
      },
      {
        name: 'Saturday',
        fromDate: '2018-01-01 11:00',
        toDate: '2018-01-01 16:00',
        msg: 'Build the UI/UX design of your personal website',
        color: colorSet.getIndex(4).brighten(0),
      },
      {
        name: 'Sunday',
        fromDate: '2018-01-01 16:00',
        toDate: '2018-01-01 19:00',
        msg: 'Code your personal website',
        color: colorSet.getIndex(4).brighten(0.4),
      },
      {
        name: 'Sunday',
        fromDate: '2018-01-01 9:00',
        toDate: '2018-01-01 12:00',
        msg: 'Code your personal website',
        color: colorSet.getIndex(4).brighten(0.4),
      },
    ]
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = 'name'
    categoryAxis.renderer.grid.template.location = 0
    categoryAxis.renderer.inversed = true

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.dateFormatter.dateFormat = 'yyyy-MM-dd HH:mm'
    dateAxis.renderer.minGridDistance = 70
    dateAxis.baseInterval = { count: 30, timeUnit: 'minute' }
    dateAxis.max = new Date(2018, 0, 1, 24, 0, 0, 0).getTime()
    dateAxis.strictMinMax = true
    dateAxis.renderer.tooltipLocation = 0

    let series1 = chart.series.push(new am4charts.ColumnSeries())
    series1.columns.template.width = am4core.percent(80)
    series1.columns.template.tooltipText = '{name}: {openDateX} - {dateX}'

    series1.dataFields.openDateX = 'fromDate'
    series1.dataFields.dateX = 'toDate'
    series1.dataFields.categoryY = 'name'
    series1.columns.template.propertyFields.fill = 'color' // get color from data
    series1.columns.template.propertyFields.stroke = 'color'
    series1.columns.template.strokeOpacity = 1

    chart.scrollbarX = new am4core.Scrollbar()
    // return () => {
    //   cleanup
    // }
  })
  return (
    <div
      className='ganttChart'
      style={{ width: '100%', height: '500px' }}
    ></div>
  )
}

export default GanttChart

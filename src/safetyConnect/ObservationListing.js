import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

const ObservationListing = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated)

    // Create chart instance
    let chart = am4core.create('chartdiv', am4charts.XYChart)
    // Add data
    chart.data = [
      {
        submitted: 1,
        progress: 4,
        completed: 6,
        value: 1,
      },
      {
        submitted: 1,
        progress: 6,
        completed: 8,
        value: 2,
      },
      {
        submitted: 2,
        progress: 5,
        completed: 5,
        value: 3,
      },
      {
        submitted: 3,
        progress: 7,
        completed: 6,
        value: 4,
      },
      {
        submitted: 4,
        progress: 8,
        completed: 2,
        value: 5,
      },
      {
        submitted: 5,
        progress: 2,
        completed: 5,
        value: 6,
      },
      {
        submitted: 6,
        progress: 5,
        completed: 9,
        value: 7,
      },
      {
        submitted: 7,
        progress: 7,
        completed: 8,
        value: 8,
      },
      {
        submitted: 8,
        progress: 9,
        completed: 5,
        value: 9,
      },
      {
        submitted: 9,
        progress: 8,
        completed: 6,
        value: 10,
      },
      {
        submitted: 8,
        progress: 5,
        completed: 7,
        value: 11,
      },
      {
        submitted: 9,
        progress: 6,
        completed: 5,
        value: 12,
      },
      {
        submitted: 2,
        progress: 9,
        completed: 6,
        value: 13,
      },
      {
        submitted: 3,
        progress: 2,
        completed: 4,
        value: 14,
      },
      {
        submitted: 4,
        progress: 3,
        completed: 3,
        value: 15,
      },
      {
        submitted: 1,
        progress: 4,
        completed: 2,
        value: 16,
      },
      {
        submitted: 1,
        progress: 6,
        completed: 5,
        value: 17,
      },
      {
        submitted: 2,
        progress: 5,
        completed: 4,
        value: 18,
      },
      {
        submitted: 3,
        progress: 7,
        completed: 7,
        value: 19,
      },
      {
        submitted: 4,
        progress: 8,
        completed: 6,
        value: 20,
      },
      {
        submitted: 5,
        progress: 2,
        completed: 5,
        value: 21,
      },
      {
        submitted: 6,
        progress: 5,
        completed: 2,
        value: 22,
      },
      {
        submitted: 7,
        progress: 7,
        completed: 8,
        value: 23,
      },
      {
        submitted: 8,
        progress: 9,
        completed: 7,
        value: 24,
      },
      {
        submitted: 9,
        progress: 8,
        completed: 3,
        value: 25,
      },
      {
        submitted: 8,
        progress: 5,
        completed: 6,
        value: 26,
      },
      {
        submitted: 9,
        progress: 6,
        completed: 3,
        value: 27,
      },
      {
        submitted: 2,
        progress: 9,
        completed: 6,
        value: 28,
      },
      {
        submitted: 3,
        progress: 2,
        completed: 7,
        value: 29,
      },
      {
        submitted: 4,
        progress: 3,
        completed: 8,
        value: 30,
      },
    ]

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.ValueAxis())
    dateAxis.renderer.minGridDistance = 25
    dateAxis.renderer.grid.template.disabled = true
    dateAxis.min = 0
    dateAxis.max = 30
    dateAxis.renderer.baseGrid.disabled = true
    dateAxis.renderer.grid.template.strokeWidth = 0

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.min = 0
    valueAxis.max = 10
    valueAxis.renderer.baseGrid.disabled = true
    valueAxis.renderer.grid.template.strokeWidth = 0

    function createSeries(valueY, name, color) {
      // Create series
      let series = chart.series.push(new am4charts.LineSeries())
      series.dataFields.valueY = valueY
      series.name = name
      series.dataFields.valueX = 'value'
      series.stroke = am4core.color(color)
      series.tensionX = 0.8
      series.strokeWidth = 4
    }

    createSeries('submitted', 'Submitted', '#1a8a16')
    createSeries('progress', 'In Progress', '#1996d4')
    createSeries('completed', 'Completed', '#78105a')

    // Add cursor
    chart.cursor = new am4charts.XYCursor()
    chart.cursor.fullWidthLineX = true
    chart.cursor.xAxis = dateAxis
    chart.cursor.lineX.strokeWidth = 0
    chart.cursor.lineX.fill = am4core.color('#000')
    chart.cursor.lineX.fillOpacity = 0.1

    chart.legend = new am4charts.Legend()
    chart.legend.useDefaultMarker = true
    let marker = chart.legend.markers.template.children.getIndex(0)
    marker.cornerRadius(12, 12, 12, 12)

    return () => {
      if (chart) {
        chart.dispose()
      }
    }
  })

  return (
    <div className='chartdiv' style={{ width: '100%', height: '500px' }}></div>
  )
}

export default ObservationListing

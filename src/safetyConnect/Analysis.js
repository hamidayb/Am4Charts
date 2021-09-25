import { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

const Analysis = ({ pieChartConfig }) => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated)

    let container = am4core.create('container', am4core.Container)
    // container.width = am4core.percent(100)
    // container.height = '500px'
    container.layout = 'horizontal'
    container.paddingLeft = 40

    function createPieChart(data) {
      let chart = container.createChild(am4charts.PieChart)
      chart.data = [
        {
          completion: data.percent,
          color: data.color,
        },
        {
          completion: 100 - data.percent,
          color: '#e0e0e0',
        },
      ]
      chart.width = 200
      chart.height = 230
      chart.marginRight = 30
      chart.innerRadius = am4core.percent(60)

      // Create pie series
      let series = chart.series.push(new am4charts.PieSeries())
      series.dataFields.value = 'completion'
      series.slices.template.propertyFields.fill = 'color'
      series.labels.template.disabled = true
      series.tooltip.disabled = true

      let label = series.createChild(am4core.Label)
      label.html = `<div style=' display: flex; align-items: center; justify-content: center; width: ${
        0.4 * chart.width
      }px; height: ${0.4 * chart.width}px; border: 2px solid ${
        data.color
      }; border-radius: 50%;'><div><p style='font-size: ${
        0.12 * chart.width
      }px; font-weight: bold; padding: 0px; margin: 0px; color:${data.color}'>${
        data.percent
      }%</p></div>`
      label.horizontalCenter = 'middle'
      label.verticalCenter = 'middle'
      label.fontSize = '1.1rem'
      label.marginBottom = 20
      label.adjustsFontSizeToFitWidth = true

      label = chart.createChild(am4core.Label)
      label.verticalCenter = 'bottom'
      label.x = 0.28 * chart.width
      // label.y = am4core.percent(100)
      label.html = `<div style='text-align: center;'><p style='font-size: ${
        0.12 * chart.width
      }px; font-weight: bold; padding: 0px; margin: 0px;'>${
        data.observations
      }</p><p style='font-size: 12px; opacity: 0.6; padding: 0px; margin: 0px'>Observations</p><div>`
    }

    createPieChart(pieChartConfig.chart1)
    createPieChart(pieChartConfig.chart2)
    createPieChart(pieChartConfig.chart3)
  })
  return (
    <div
      className='container'
      style={{ width: '100vw', height: '250px', paddingRight: '200px' }}
    ></div>
  )
}

export default Analysis

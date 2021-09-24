import { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

const Observations = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated)

    let chart = am4core.create('observations', am4charts.PieChart)
    chart.data = [
      {
        status: 'Completed',
        value: 280,
      },
      {
        status: 'In Progress',
        value: 240,
      },
      {
        status: 'Draft',
        value: 253,
      },
    ]
    chart.innerRadius = am4core.percent(60)
    // Create pie series
    let series = chart.series.push(new am4charts.PieSeries())
    series.dataFields.value = 'value'
    series.dataFields.category = 'status'
    series.slices.template.propertyFields.fill = 'color'
    series.labels.template.disabled = true
    series.tooltip.disabled = true

    chart.legend = new am4charts.Legend()
    chart.legend.valueLabels.template.text = '{value}\n{strength}'
    // chart.legend.valueLabels.template.paddingLeft = '15px'
    chart.legend.fontSize = '13px'
    chart.legend.valueLabels.template.fontSize = '24px'
    chart.legend.valueLabels.template.fontWeight = 'bold'
    // chart.legend.itemContainers.template.paddingBottom = '20px'
    // chart.legend.position = 'right'

    let label = series.createChild(am4core.Label)
    label.text = 'Overall'
    label.horizontalCenter = 'middle'
    label.verticalCenter = 'middle'
    label.fontSize = '1.4rem'
    label.opacity = 0.5
    label.marginBottom = 20
    label.adjustsFontSizeToFitWidth = true

    let label2 = series.createChild(am4core.Label)
    label2.text = 'Observations'
    label2.horizontalCenter = 'middle'
    label2.verticalCenter = 'middle'
    label2.fontSize = '1.4rem'
    label2.paddingTop = 40
    label2.opacity = 0.5
    label2.adjustsFontSizeToFitWidth = true

    let label3 = series.createChild(am4core.Label)
    label3.text = '31,20'
    label3.horizontalCenter = 'middle'
    label3.verticalCenter = 'middle'
    label3.fontSize = '2rem'
    label3.paddingTop = 100
    label3.adjustsFontSizeToFitWidth = true

    return () => {
      chart.dispose()
    }
  })
  return (
    <div
      className='observations'
      style={{ width: '500px', height: '500px' }}
    ></div>
  )
}

export default Observations

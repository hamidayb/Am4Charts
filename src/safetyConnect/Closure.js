import { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

const Closure = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated)

    let chart = am4core.create('chartdiv', am4charts.PieChart)
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
    // Put a thick white border around each Slice
    series.slices.template.stroke = am4core.color('#fff')
    series.slices.template.strokeWidth = 3
    series.slices.template.strokeOpacity = 1
    // change the cursor on hover to make it apparent the object can be interacted with
    series.slices.template.cursorOverStyle = [
      {
        property: 'cursor',
        value: 'pointer',
      },
    ]

    chart.legend = new am4charts.Legend()
    chart.legend.valueLabels.template.text = '{value}\n{strength}'
    // chart.legend.valueLabels.template.paddingLeft = '15px'
    chart.legend.fontSize = '13px'
    chart.legend.valueLabels.template.fontSize = '24px'
    chart.legend.valueLabels.template.fontWeight = 'bold'
    // chart.legend.itemContainers.template.paddingBottom = '20px'
    // chart.legend.position = 'right'

    let label = series.createChild(am4core.Label)
    label.html =
      '<div style="text-align: center"><p style="opacity: 0.5; padding: 0px; margin: 0px">Total <br />Observations</p><p style="font-size: 32px; font-weight: bold; padding: 0px; margin: 0px">103</p></div>'
    label.horizontalCenter = 'middle'
    label.verticalCenter = 'middle'
    label.fontSize = '1.1rem'
    label.marginBottom = 20
    label.adjustsFontSizeToFitWidth = true

    return () => {
      chart.dispose()
    }
  })
  return (
    <div className='chartdiv' style={{ width: '300px', height: '500px' }}></div>
  )
}

export default Closure

import { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

const Observations = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated)

    let chart = am4core.create('observations', am4charts.PieChart);
    chart.data = [
      {
        status: 'completed',
        value: 280,
      },
      {
        status: 'in progress',
        value: 240,
      },
      {
        status: 'draft',
        value: 253,
      }
    ]
    chart.innerRadius = am4core.percent(50);
    // Create pie series
    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = 'value';
    series.dataFields.category = 'status';
    series.slices.template.propertyFields.fill = 'color';
    series.labels.template.disabled = true;
    // series.ticks.template.disabled = true;
    series.tooltip.disabled = true;

    chart.legend = new am4charts.Legend();
    chart.legend.valueLabels.template.text = '{strength}';
    chart.legend.valueLabels.template.paddingLeft = '15px';
    chart.legend.valueLabels.template.fontSize = '18px';
    chart.legend.valueLabels.template.fontWeight = 'bold';
    chart.legend.itemContainers.template.paddingBottom = '20px';
    chart.legend.position = 'right';

    return () => {
      chart.dispose();
    };
  });
  return (
    <div
      className='observations'
      style={{ width: '500px', height: '500px' }}
    ></div>
  );
};

export default Observations;

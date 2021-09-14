import { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

const Donut = ({ data, className }) => {
  useEffect(() => {
    console.log(data, className);
    let chart = am4core.create(className, am4charts.PieChart);
    chart.data = data;
    chart.innerRadius = am4core.percent(50);
    // Create pie series
    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = 'strength';
    series.dataFields.category = 'category';
    series.slices.template.propertyFields.fill = 'color';
    series.labels.template.disabled = true;
    // series.ticks.template.disabled = true;
    series.tooltip.disabled = true;

    chart.legend = new am4charts.Legend();
    chart.legend.valueLabels.template.text = '{strength}';

    chart.legend.position = 'right';

    return () => {
      chart.dispose();
    };
  });
  return (
    <div
      className={className}
      style={{ width: '500px', height: '500px' }}
    ></div>
  );
};

export default Donut;

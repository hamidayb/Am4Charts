import { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const InstituteChart = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated);
    // Create chart instance
    let chart = am4core.create('instituteChart', am4charts.XYChart);
    chart.data = [
      {
        year: '2017-18',
        primary: 172.5,
        middle: 46.7,
        high: 31.4,
      },
      {
        year: '2018-19',
        primary: 182.7,
        middle: 47.3,
        high: 31.7,
      },
      {
        year: '2019-20',
        primary: 187.1,
        middle: 48.3,
        high: 32.0,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'year';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.line.strokeOpacity = 1;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.cellStartLocation = 0.2;
    categoryAxis.renderer.cellEndLocation = 0.8;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.title.text = 'In Thousand';
    valueAxis.title.fontSize = 20;
    valueAxis.title.fontWeight = 'bold';

    function createSeries(field, name, color, stacked) {
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = 'year';
      series.name = name;

      categoryAxis.renderer.labels.template.fontWeight = 'bold';

      series.columns.template.tooltipText = '{name}: [bold]{valueY}[/]';
      series.columns.template.fill = am4core.color(color);
      series.columns.template.width = am4core.percent(100);
      series.columns.template.strokeWidth = 0;
      series.stacked = stacked;

      let bullet = series.bullets.push(new am4charts.LabelBullet());
      bullet.label.text = '{valueY}';
      bullet.dy = -10;
      bullet.fontSize = 13;
    }

    createSeries('primary', 'Primary', '#005B8D', false);
    createSeries('middle', 'Middle', '#FFB800', false);
    createSeries('high', 'High', '#00263D', false);

    chart.legend = new am4charts.Legend();
    // chart.legend.position = 'top';
    return () => {
      chart.dispose();
    };
  });
  return (
    <div
      className='instituteChart'
      style={{ width: '100%', height: '600px', marginTop: '50px' }}
    ></div>
  );
};

export default InstituteChart;

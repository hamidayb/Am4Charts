import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import Donut from '../components/donut';

const DonutChart = () => {
  const data = [
    [
      {
        category: 'Primary',
        strength: 409496,
        color: am4core.color('#AFB32A'),
      },
      {
        category: 'Middle',
        strength: 380785,
        color: am4core.color('#D54216'),
      },
      {
        category: 'High',
        strength: 514158,
        color: am4core.color('#FFC437'),
      },
    ],
    [
      {
        category: 'Primary',
        strength: 422791,
        color: am4core.color('#AFB32A'),
      },
      {
        category: 'Middle',
        strength: 394231,
        color: am4core.color('#D54216'),
      },
      {
        category: 'High',
        strength: 529520,
        color: am4core.color('#FFC437'),
      },
    ],
    [
      {
        category: 'Primary',
        strength: 453641,
        color: am4core.color('#AFB32A'),
      },
      {
        category: 'Middle',
        strength: 455445,
        color: am4core.color('#D54216'),
      },
      {
        category: 'High',
        strength: 560642,
        color: am4core.color('#FFC437'),
      },
    ],
  ];
  // And, for a good measure, let's add a legend
  return (
    <React.Fragment>
      {data.map((d, i) => (
        <Donut key={i} data={d} className={'donutchart' + i} />
      ))}
    </React.Fragment>
  );
};

export default DonutChart;

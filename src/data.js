import * as am4core from '@amcharts/amcharts4/core'

const pieChartData = [
  {
    country: 'Pakistan',
    litres: 200.5,
  },
  {
    country: 'Austria',
    litres: 128.3,
  },
  {
    country: 'UK',
    litres: 99,
  },
  {
    country: 'The Netherlands',
    litres: 50,
  },
  {
    country: 'Lithuania',
    litres: 501.9,
  },
  {
    country: 'Ireland',
    litres: 201.1,
  },
  {
    country: 'Germany',
    litres: 165.8,
  },
  {
    country: 'Australia',
    litres: 139.9,
  },
]

let colorSet = new am4core.ColorSet()
colorSet.saturation = 0.4

export { pieChartData }

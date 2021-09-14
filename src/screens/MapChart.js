import { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4maps from '@amcharts/amcharts4/maps'
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow'
import am4geodata_usaLow from '@amcharts/amcharts4-geodata/usaLow'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import am4geodata_region_usa_caLow from '@amcharts/amcharts4-geodata/region/usa/caLow'

const MapChart = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated)
    const chart = am4core.create('mapchart', am4maps.MapChart)
    // Set map definition
    chart.geodata = am4geodata_worldLow
    // Set projection
    chart.projection = new am4maps.projections.Miller()

    // Series for World map
    let worldSeries = chart.series.push(new am4maps.MapPolygonSeries())
    worldSeries.exclude = ['AQ']
    worldSeries.useGeodata = true

    const polygonTemplate = worldSeries.mapPolygons.template
    polygonTemplate.tooltipText = '{name}'
    polygonTemplate.fill = chart.colors.getIndex(0)
    polygonTemplate.nonScalingStroke = true

    // Hover state
    let hs = polygonTemplate.states.create('hover')
    hs.properties.fill = am4core.color('#367B25')

    // Series for United States map
    const usaSeries = chart.series.push(new am4maps.MapPolygonSeries())
    usaSeries.geodata = am4geodata_usaLow

    const usPolygonTemplate = usaSeries.mapPolygons.template
    usPolygonTemplate.tooltipText = '{name}'
    usPolygonTemplate.fill = chart.colors.getIndex(1)
    usPolygonTemplate.nonScalingStroke = true

    // Hover state
    hs = usPolygonTemplate.states.create('hover')
    hs.properties.fill = am4core.color('#367B25')

    return () => {
      chart.dispose()
    }
  })

  return (
    <div
      className='mapchart'
      style={{ width: '100%', height: '600px', marginTop: '50px' }}
    ></div>
  )
}

export default MapChart

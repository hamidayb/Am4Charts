import BarChart1 from '../components/barChart1'
import RU_BarChart from '../components/RU_BarChart'
import OutSchoolProvinceChart from '../components/ospBarChart'
import OutSchoolChildrenChart from '../components/oscBarChart'

const BarChart = () => {
  return (
    <div className='container barchart'>
      <div>
        <BarChart1 />
      </div>
      <div>
        <RU_BarChart />
      </div>
      <div>
        <OutSchoolProvinceChart />
      </div>
      <div>
        <OutSchoolChildrenChart />
      </div>
    </div>
  )
}

export default BarChart

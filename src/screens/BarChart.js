import BarChart1 from '../components/barChart1'
import RU_BarChart from '../components/RU_BarChart'
import OutSchoolBarChart from '../components/outSchoolBarChart'

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
        <OutSchoolBarChart />
      </div>
    </div>
  )
}

export default BarChart

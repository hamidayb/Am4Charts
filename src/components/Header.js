import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand' to='/'>
        Charts
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          {/* <li className='nav-item'>
            <Link className='nav-link' to='/piechart'>
              PieChart
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/barchart'>
              Bar Chart
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/mapchart'>
              Map Chart
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='donutchart'>
              Donut Chart
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/linegraph'>
              Line Graph
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/doublelinegraph'>
              Double Line Graph
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='ganttchart'>
              GanttChart
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/venndiagram'>
              Venn Diagram
            </Link>
          </li> */}
          <li className='nav-item'>
            <Link className='nav-link' to='/safetyconnect/observations'>
              Observations
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/safetyconnect/observationlisting'>
              ObservationListing
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/safetyconnect/catobservations'>
              Categories Observations
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/safetyconnect/audits'>
              Audits
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/safetyconnect/incidents'>
              Incidents Potential Area
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/safetyconnect/risk-analysis'>
              Risk Analysis
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/safetyconnect/closure'>
              Closure Statistics
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/safetyconnect/observation-analysis'>
              Observation Analysis
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header

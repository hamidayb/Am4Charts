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
          <li className='nav-item'>
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
            <Link className='nav-link' to='/linegraph'>
              Line Graph
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
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header

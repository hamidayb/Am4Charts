import { BrowserRouter as Router, Route } from 'react-router-dom'
// import PieChart from './screens/PieChart'
// import GanttChart from './screens/GanttChart'
// import BarChart from './screens/BarChart'
// import DonutChart from './screens/DonutChart'
// import MapChart from './screens/MapChart'
// import LineGraph from './screens/LineGraph'
// import DoubleLineGraph from './screens/DoubleLineGraph'
// import VennDiagram from './screens/VennDiagram'
import Header from './components/Header'
import Home from './screens/Home'
import Observations from './safetyConnect/Observations'
import Audits from './safetyConnect/Audits'
import ObservationListing from './safetyConnect/ObservationListing'
import CatObservations from './safetyConnect/CatObservations'
import Incident from './safetyConnect/Incident'
import Risk_Analysis from './safetyConnect/Risk_Analysis'
import ObservationAnalysis from './safetyConnect/ObservationAnalysis'
import Closure from './safetyConnect/Closure'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/' component={Home} exact />
        {/* <Route path='/piechart' component={PieChart} exact />
        <Route path='/ganttchart' component={GanttChart} exact />
        <Route path='/mapchart' component={MapChart} exact />
        <Route path='/linegraph' component={LineGraph} exact />
        <Route path='/doublelinegraph' component={DoubleLineGraph} exact />
        <Route path='/venndiagram' component={VennDiagram} exact />
        <Route path='/barchart' component={BarChart} exact />
        <Route path='/donutchart' component={DonutChart} exact /> */}
        <Route
          path='/safetyconnect/observations'
          component={Observations}
          exact
        />
        <Route
          path='/safetyconnect/observationlisting'
          component={ObservationListing}
          exact
        />
        <Route path='/safetyconnect/audits' component={Audits} exact />
        <Route
          path='/safetyconnect/catobservations'
          component={CatObservations}
          exact
        />
        <Route path='/safetyconnect/incidents' component={Incident} exact />
        <Route
          path='/safetyconnect/risk-analysis'
          component={Risk_Analysis}
          exact
        />
        <Route path='/safetyconnect/closure' component={Closure} exact />
        <Route
          path='/safetyconnect/observation-analysis'
          component={ObservationAnalysis}
          exact
        />
        {/*<Route path='/donutchart' component={DonutChart} exact /> */}
      </main>
    </Router>
  )
}

export default App

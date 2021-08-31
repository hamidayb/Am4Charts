import { BrowserRouter as Router, Route } from 'react-router-dom'
import PieChart from './screens/PieChart'
import GanttChart from './screens/GanttChart'
import LineGraph from './screens/LineGraph'
import VennDiagram from './screens/VennDiagram'
import Header from './components/Header'
import Home from './screens/Home'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/' component={Home} exact />
        <Route path='/piechart' component={PieChart} exact />
        <Route path='/ganttchart' component={GanttChart} exact />
        <Route path='/linegraph' component={LineGraph} exact />
        <Route path='/venndiagram' component={VennDiagram} exact />
      </main>
    </Router>
  )
}

export default App

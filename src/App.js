import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import NavBar from './components/layout/navbar'
import Home from './components/pages/home'
import About from './components/pages/about'
import Contact from './components/pages/contact'
import Adduser from './components/users/AddUser'
import EditUser from './components/users/Edit'
import ViewUser from './components/users/User'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/adduser' component={Adduser} />
          <Route exact path='/edit/:id' component={EditUser} />
          <Route exact path='/:id' component={ViewUser} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

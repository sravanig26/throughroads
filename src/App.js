import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import AddTransport from './components/addtransport'
import ManageTransport from './components/managetransport'
import EditTransport from './components/editTransport'
import CreateUser from './components/newuser'
import ManageUser from './components/manageuser'
import User from './user'
import Admin from './admin'
import Nav2 from './navbar'
import Home from './home'
import Contact from './contact'
import Dashboard from './dashboard'
import Nav from './mainnav'
import Result from './result'
import About from './about'
import ReactTable from './reactTable'

const Main =withRouter(({location})=>{
  return (
    <div> 
      {
        location.pathname !== '/' && location.pathname !== '/admin' && location.pathname !== '/newuser' && location.pathname !== '/edit/:id' &&
        location.pathname !== '/addtransport' && location.pathname !== '/dash' && location.pathname !== '/managetransport' && location.pathname !== '/manageuser' && <Nav />,
        location.pathname === '/' && <Nav2 /> 
      }
      {location.pathname === '/admin' && <Nav2 />}
      {
         location.pathname === '/newuser' && <Nav2 />
      }
      {location.pathname==='/edit/:id' && <Nav2 />}
      {location.pathname==='/addtransport' && <Nav2 />}
      {location.pathname==='/managetransport' && <Nav2 />}
      {location.pathname==='/manageuser' && <Nav2 />}
      {location.pathname==='/dash' && <Nav2 />}
      {location.pathname==='/result' && <Nav />}
      {location.pathname==='/home' && <Nav />}
      {location.pathname==='/about' && <Nav />}
      {location.pathname==='/contact' && <Nav />}

        <Route path='/' exact component={User} />
        <Route path='/dash' exact component={Dashboard} />
        <Route path='/about' exact component={About} />
        <Route path='/home' exact component={Home} />
        <Route path='/edit/:id' component={EditTransport} />
        <Route path='/newuser' component={CreateUser} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path='/contact' component={Contact} />
        <Route path='/addtransport' component={AddTransport} />
        <Route path='/managetransport' component={ManageTransport} />
        <Route path='/manageuser' component={ManageUser} />
        <Route path='/result' component={Result} />
        <Route path='/table' component={ReactTable}/>

    </div>
  )
})
function App() {
  return (
    <div className="transport">
     <Router>  
           <Main />  
       </Router>  
    </div>
  );
}

export default App;

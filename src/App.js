import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './App.css';
/*Layouts */
import Header from './layouts/header/Header'
import Footer from './layouts/footer/Footer';

/*Screens */
import Login from './screens/Login'
import Home from './screens/Home';
import Checkout from './screens/Checkout';
import Purchase from './screens/Purchase'
import Sale from './screens/Sale'
import Prueba from './screens/Prueba';


const App = ()=>{
  return(
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' render={()=><Redirect to='/Login'/>}/>
        <Route path='/home' component={Home}/>
        <Route path='/Login' component={Login}/>
        <Route path='/checkout' component={Checkout} />
        <Route path='/prueba' component={Prueba} />
        <Route path='/sales' component={Sale} />
        <Route path='/purchase' component={Purchase} />
      </Switch>
      <Footer />
    </Router>
    
  )
}

export default App;

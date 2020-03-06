import React, {Component} from 'react';
import Menu from './components/Menu'
import Cargo from './components/Cargo'
import Rent from './components/Rent'
import Deals from './components/Deals'
import Hail from './components/Hail'
import {Switch,Route} from 'react-router-dom'

class App extends Component {
  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Menu}/>
          <Route path='/cargo' component={Cargo}/>
          <Route path='./hail' component={Hail}/>
          <Route path='/rent' component={Rent}/>
          <Route path='/deals' component={Deals}/>
        </Switch>
      </div>
    )
  }
}
export default App 
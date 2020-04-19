import React, { Component } from 'react';
import LoginForm from './LoginForm'
import IndexPage from './IndexPage'
import Show from './Show'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component= {LoginForm} />
            <Route path='/index' component= {IndexPage} />
            <Route path='/show/:id' component= {Show} />

          </Switch>
          
        </div>
      </BrowserRouter>
     
    )
  }
}


export default App;

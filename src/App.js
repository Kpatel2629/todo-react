import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Todos from './containers/Todos';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import About from './containers/About/About';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">    
          <Switch> 
            
          <Route path = "/signup" component={SignUp}/>
          <Route path = "/todos"  component={Todos}/>  
          <Route path = "/about" component= {About}/>
          <Route path = "/" exact component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

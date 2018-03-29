import React, { Component } from 'react';
import {BrowserRouter, Router, Route} from 'react-router-dom';
import './App.css';
import Kavi from './Table';
import './Kavi.css'
import Login from './Login'
// import Kavi from './Table.js'

// import './Kavi.css'
 // import './Login.css'
class App extends Component {
  
  render() {
    return (
    	<BrowserRouter history>
    	<div>
   			
      		<Route exact path='/' render={(props) => <Login {...props} />}/>
	      	<Route  path='/Table'  render={(props)=> <Kavi  {...props}   />} />
   		
  	</div>
  	</BrowserRouter>
    );
  }
}

export default App;

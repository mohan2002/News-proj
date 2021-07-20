import React from "react";
import Signup from "./AuthPages/Signup";
import { AuthProvider } from "./Context/AuthContext";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Homepage from "./Pages/Homepage";
import Login from './AuthPages/Login'
import PrivateRoute from "./AuthPages/PrivateRoute";
import Buisness from './Pages/Buisness'
import Technology from './Pages/Technology'
import Sports from './Pages/Sports'
import Entertainment from './Pages/Entertainment'
import Health  from './Pages/Health'
import Science from './Pages/Science'
import ForgotPassword from './AuthPages/ForgotPassword'
function App() {
  return (
    
    <div>
    <Router>
      <AuthProvider>
        <Switch>
          
          <PrivateRoute exact path='/homepage' component={Homepage}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/password' component={ForgotPassword}/>
          <Route path='/buisness' component={Buisness}/>
          <Route path='/technology' component={Technology}></Route>
          <Route path='/sports' component={Sports}/>
          <Route path='/entertainment' component={Entertainment}/>
          <Route path='/health' component={Health}/>
          <Route path='/science' component={Science}/>
          <Route path='/' component={Login}/>
         
        </Switch>
      </AuthProvider>
    </Router>
    </div>
      
  );
}

export default App;

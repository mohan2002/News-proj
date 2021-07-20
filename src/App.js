import React from "react";
import Signup from "./AuthPages/Signup";
import { AuthProvider } from "./Context/AuthContext";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Homepage from "./Pages/Homepage";
import Login from './AuthPages/Login'
import PrivateRoute from "./AuthPages/PrivateRoute";
import ForgotPassword from "./AuthPages/ForgotPassword";
function App() {
  return (
    
    <div>
    <Router>
      <AuthProvider>
        <Switch>
          
          <PrivateRoute exact path='/' component={Homepage}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
          <Route path= '/forgot-password' component={ForgotPassword}/>
          
        </Switch>
      </AuthProvider>
    </Router>
    </div>
      
  );
}

export default App;

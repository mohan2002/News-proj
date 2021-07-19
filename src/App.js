import './App.css';
import { AuthProvider } from './Context/AuthContext';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Signup from './AuthPages/Signup'
import { Container } from 'react-bootstrap';
import Login from './AuthPages/Login';
import ForgotPassword from './AuthPages/ForgotPassword';
import PrivateRoute from './AuthPages/PrivateRoute';
import Homepage from './Pages/Homepage';
function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center"
    style={{minHeight : "100vh"}}>
    <div className="w-100" style={{maxWidth : "400px"}}>
    
    
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Homepage}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
          <Route path='/forgot-password' component={ForgotPassword}/>
        
        </Switch>
      </Router>
    </AuthProvider>
    </div>
    </Container>
  );
}

export default App;

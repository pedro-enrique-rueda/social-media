import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Router>
        <Route path="/" exact render={()=><Home />} />
        <Route path="/register" exact render={()=><Register />} />
        <Route path="/login" exact render={()=><Login />} />
      </Router>
    </div>
  );
}

export default App;

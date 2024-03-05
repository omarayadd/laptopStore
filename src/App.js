import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import Headerr from './components/Headerr';
import { RegisteredEmailProvider } from './components/RegisteredEmailProvider';
function App() {
  return (
    <div className="App">
        <Router>
          <Headerr/>
          <RegisteredEmailProvider>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/favourites' element={<Favourites/>}/>
            <Route path='/home' element={<Home/>}/>
          </Routes>
          </RegisteredEmailProvider>
        </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import Headerr from './components/Headerr';
import { RegisteredEmailProvider } from './components/RegisteredEmailProvider';
import { CartProvider } from './components/CartContext';
import  {FavoriteProvider} from './components/FavouriteContext'
function App() {
  return (
    <div className="App">
        <Router>
        <RegisteredEmailProvider>
        <CartProvider>
        <FavoriteProvider>
          <Headerr/>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/favourites' element={<Favourites/>}/>
            <Route path='/laptopStore' element={<Home/>}/>
            <Route path="*"  element={<h2>Page Not Found</h2>}/>
          </Routes>
          </FavoriteProvider>
          </CartProvider>
          </RegisteredEmailProvider>
        </Router>
    </div>
  );
}

export default App;

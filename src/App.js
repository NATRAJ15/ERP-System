import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import Order from './components/Order';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<NavBar/>}>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/products" element={<Product/>} />
            <Route path="/orders" element={<Order/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

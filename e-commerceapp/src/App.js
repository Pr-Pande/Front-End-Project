import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/products';
import Menubar from './components/menubar';
import ProductDetails from './components/productdetails';
import Cart from './components/cart';

function App() {

  return (
    <div className="App" style={{ backgroundColor: '#f5f5f5' }}>
      <Router>
        <Menubar />
        <Routes>
          <Route exact path='/' element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

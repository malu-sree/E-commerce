import { Route, Routes } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Correct imports for React Router v6
import Login from './components/auth/login';
import Register from './components/auth/register';
import ProductList from './components/products/productlist';
function App() {
  return (
    <div>
      <Routes> {/* Use Routes instead of Switch in React Router v6 */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/list' element={<ProductList/>}/>
        
      </Routes>
    </div>
  );
}

export default App;

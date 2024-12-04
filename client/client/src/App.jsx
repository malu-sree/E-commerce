import { Route, Routes } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Correct imports for React Router v6
import HomePage from './pages/home';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import About from './pages/about';
import Contact from './pages/contact';
import Policy from './pages/policy';
import Pagenotfound from './pages/pagenotfound';
import Dashboard from "./pages/dashboard";  
import PrivateRoute from './components/layout/privateRoute';
function App() {
  return (
    <div>
   
     <Routes>
      
      <Route path='/' element={<HomePage/>}/>
      <Route path="/register" element={<Register />} />
      <Route path='/login' element={<Login/>}/>
      
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/policy" element={<Policy/>} />
      <Route path="*" element={<Pagenotfound/>} />
      <Route path="/dashboard/*" element={<PrivateRoute />}>
            
          </Route>
        <Route path="*" element={<Pagenotfound />} />

     </Routes>
    
    </div>
  );
}

export default App;

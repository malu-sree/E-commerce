import { Route, Routes } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Correct imports for React Router v6
import HomePage from './pages/home';
import Register from './pages/auth/register';
import About from './pages/about';
import Contact from './pages/contact';
import Policy from './pages/policy';
import Pagenotfound from './pages/pagenotfound';
function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/policy" element={<Policy/>} />
      <Route path="*" element={<Pagenotfound/>} />

     </Routes>
    </div>
  );
}

export default App;

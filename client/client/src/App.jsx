import { Route, Routes } from 'react-router-dom';  // Correct imports for React Router v6
import Login from './components/auth/login';
import Register from './components/auth/register';
function App() {
  return (
    <div>
      <Routes> {/* Use Routes instead of Switch in React Router v6 */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </div>
  );
}

export default App;

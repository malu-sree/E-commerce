import { Route, Routes } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Correct imports for React Router v6
import HomePage from './pages/home';
function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
     </Routes>
    </div>
  );
}

export default App;

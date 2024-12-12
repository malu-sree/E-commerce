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
//  import PrivateRoute from './components/layout/privateRoute';
// import AdminPrivateRoute from './components/routes/adminRoute';
import AdminDashboard from './pages/admin/adminDashboard';
import ForgotPassword from './pages/auth/forgotPassword';
import PrivateRoute from './components/routes/privateRoutes';
import CreateProduct from './pages/admin/createProduct';
import CreateCategory from './pages/admin/createCategory';
import Users from './pages/admin/users';
import Orders from './pages/orders';
import Profile from './pages/profile';
function App() {
  return (
    <div>
   
     <Routes>
      
      <Route path='/' element={<HomePage/>}/>
      <Route path="/register" element={<Register />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/policy" element={<Policy/>} />
      <Route path="*" element={<Pagenotfound/>} />
      {/* <Route path="/dashboard" element={<PrivateRoute />}>
                <Route path='user' element={<Dashboard/>}/>
             
            
          </Route> */}
        {/* <Route path="*" element={<Pagenotfound />} /> */}
{/* <Route path='/dash' element={<Dashboard/>}/> */}
{/* <Route path="/dashboard" element={<PrivateRoute />}/> */}
{/* <Route path="/admin" element={<AdminPrivateRoute />}>
  <Route path="dashboard" element={<adminDashboard />} /> */}
  {/* other admin routes */}
{/* </Route> */}
{/* <Route path='/admin' element={<AdminDashboard/>}/> */}

{/* <Route path='/admin/dashboard' element={<PrivateRoute adminOnly={true}/>}>
 <Route path='/' element={<AdminDashboard/>}/>

</Route>
<Route path='/user/dashboard' element={<PrivateRoute adminOnly={false}/>}>
 <Route path='/' element={<Dashboard/>}/>

</Route> */}

<Route path="/admin/dashboard" element={<PrivateRoute adminOnly />}>
        <Route index element={<AdminDashboard />} /> {/* Use index for default child */}
        <Route path="create-product" element={<CreateProduct/>}/>
        <Route path='create-category' element={<CreateCategory/>}/>
        <Route path='users' element={<Users/>}/>

      </Route>
      <Route path="/user/dashboard" element={<PrivateRoute />}>
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders/>}/>
        <Route path='profile' element={<Profile/>}/>

      </Route>
     </Routes>
    
    </div>
  );
}

export default App;

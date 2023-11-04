import Gallery from './components/Gallery';
import Landing from './components/Landing';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import { useLocation } from 'react-router-dom'
<<<<<<< HEAD
import Register from './components/Register';
import ForgotPassword from './components/LandingComponents/ForgotPassword';
=======
import Register from './components/Register'
>>>>>>> d17d4003bb5c2a547b55665af35b8b42334d7e1a

function App() {
  const location = useLocation();

  // Define CSS imports based on the current route
  const getCSSImports = () => {
    if (location.pathname === '/') {
      import('./css/styles.css');
    } else if (location.pathname === '/gallery') {
      import('./css/shop_styles.css');
    }
    else if (location.pathname === '/login') {
      import('./css/login.css');
    }
    else if (location.pathname === '/register') {
      import('./css/register.css');
    }
    else if(location.pathname=== '/ForgotPassword'){
      import('./css/Forgot.css');
    }
  };

  getCSSImports();
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/ForgotPassword' element={<ForgotPassword/>} />
      </Routes>
      {/* <span>{location.pathname}</span> */}
    </div>
  );
}

export default App;

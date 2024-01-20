import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/navbar'
import Login from './pages/login'
import SignUp from './pages/signup'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
      path='/'
      element={<Home/>}
      />
      <Route 
      path='/login'
      element={<Login/>}
      />
      <Route
      path='/signup'
      element={<SignUp/>}
      />
    </Routes>
    
    </BrowserRouter>

  );
}

export default App;

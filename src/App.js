
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Component/Login';
import Register from './Component/Register';
import Dashboard from './Component/Dashboard';
import Fotgot from './Component/Fotgot';
import Reset from './Component/Reset';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/fotgot' element={<Fotgot />}></Route>
          <Route path='/reset' element={<Reset />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

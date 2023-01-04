import Streetmap from './components/Streetmap';
import './App.css';
import Register from './page/register/Register';
import { Route, Routes } from 'react-router-dom';
import Login from './page/login/Login';

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path="/" element={<Streetmap />} /> 
         <Route path="/signup" element={<Register />} />
         <Route path="/login" element={  <Login />} />
      </Routes>

     
    </div>
  );
}

export default App;

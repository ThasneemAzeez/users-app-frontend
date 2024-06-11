import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;

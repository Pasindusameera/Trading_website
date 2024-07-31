
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Trade from './Components/Trade';
import Market from './Components/Market';
import About from './Components/About';
import Login from './Components/Login/Login';
import Support from './Components/Support';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
        
        <Route path='/'  element={<Trade/>}/>
        <Route path='/market'  element={<Market/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/Support'  element={<Support/>}/>
       
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

import './App.css';
import Home from './pages/Home';
import Casefile from './pages/Casefile';
import Add from './pages/Add';
import { Route, Routes } from 'react-router-dom';


function App() {
  //Login + Signup + Auth


  return (
    <div>
      <Home />

      <Routes>
        {/* Login / Sign up */}

        {/* Casefile  */}
        <Route path='/casefiles/:id' element={<Casefile />}/>
        <Route path='casefiles/new' element={<Add />}/>

        {/* Investigator + Evidence */}
        <Route/>
      </Routes>
    </div>
  );
}

export default App;

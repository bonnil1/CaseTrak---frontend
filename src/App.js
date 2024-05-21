import Home from './pages/Home';
import Casefile from './pages/Casefile';
import Add from './pages/Add';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';


function App() {
  //Login + Signup + Auth


  return (
    <div>
      <Header />
      <Routes>
        {/* Login / Sign up */}

        <Route path='/' element={<Home />}/>

        {/* Casefile  */}
        <Route path='/casefiles/:id' element={<Casefile />}/>
        <Route path='/casefiles/:id/evidence/:evidenceId' element={<Casefile />}/>
        <Route path='/casefiles/new' element={<Add />}/>

        {/* Investigator + Evidence */}
        <Route/>
      </Routes>
    </div>
  );
}

export default App;

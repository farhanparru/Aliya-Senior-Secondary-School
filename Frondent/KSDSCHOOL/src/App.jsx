import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navabar from './page/Navabar';
import Home from './page/Home';
import Footer from './page/Footer';

function App() {
  

  return (
    <div>
       <Router>
       <Navabar/>
        <Routes>
        
          <Route path='/' element={<Home />} />
        
        </Routes>
    <Footer/>
    </Router>
    </div>
  )
}

export default App

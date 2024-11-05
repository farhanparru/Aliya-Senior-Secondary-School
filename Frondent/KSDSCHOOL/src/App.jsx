import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navabar from "./page/Navabar";


// import Footer from "./page/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navabar />} />
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;

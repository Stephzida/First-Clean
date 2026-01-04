import { Routes, Route } from "react-router-dom";
import Landingpage from "./component/Landingpage";
import './App.css';

function App() {
  

  return (
     <Routes>
      <Route path="/" element={<Landingpage/>} />
      {/* <Route path="/about" element={<h1>About</h1>} /> */}
    </Routes>  
  )
}

export default App

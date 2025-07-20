import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import PortfolioGUI from './PortfolioGUI'
import PortfolioTerminal from './ProtfolioTerminal'

function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<PortfolioGUI/>}/>
      <Route path="/portfolio" element={<PortfolioTerminal/>}/>  
    </Routes>
   </Router>
  );
}

export default App;

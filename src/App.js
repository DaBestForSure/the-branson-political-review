import './App.css';
import TopBar from './components/TopBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PastReviews from './pages/PastReviews';
import MainContent from './pages/MainContent';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div className="App">
      
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<MainContent />} /> {/* Your main page */}
          <Route path="/past-reviews" element={<PastReviews />} /> {/* Route to PastReviews page */}
        </Routes>
    </Router>
      
    < SpeedInsights />
    
    </div>
  );
}

export default App;

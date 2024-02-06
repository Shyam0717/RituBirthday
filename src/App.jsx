// App.jsx
import './App.css';
import Homepage from './components/Homepage';
import WishesPage from './components/WishesPage';
import PhotoGallery from './components/PhotoGallery';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import TimelinePage from './components/TimelinePage';
import Quiz from './components/Quiz';
import FinalPage from './components/FinalPage';

function App() {
  // Set her birthday date (YYYY-MM-DD)
  const birthdayDate = '2024-02-07';
  // Set the birthday time (HH:MM:SS)
  const birthdayTime = '00:00:00';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage birthdayDate={birthdayDate} birthdayTime={birthdayTime} />} />
        <Route path="/wishes" element={<WishesPage />} />
        <Route path="/gallery" element={<PhotoGallery />} />
        {/* <Route path="/timeline" element={<TimelinePage />} /> */}
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </Router>
  );
}

export default App;

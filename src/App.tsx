import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Welcome from './Welcome';
import Homepage from './Homepage';

function App() {
  return (
    <BrowserRouter>
    <div className="h-full App">
      <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/home" element={<Homepage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

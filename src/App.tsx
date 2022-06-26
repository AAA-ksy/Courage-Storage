import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Welcome from './Welcome';

function App() {
  return (
    <BrowserRouter>
    <div className="h-full App">
      <Routes>
          <Route path="/" element={<Welcome/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

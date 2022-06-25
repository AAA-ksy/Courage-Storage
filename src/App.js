import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Welcome from './Welcome';

function App() {
  return (
    <BrowserRouter>
    <div className="App h-full">
      <Routes>
          <Route exact path="/" element={<Welcome/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

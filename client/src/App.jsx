import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth, Home } from './page';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exaxt element={<Auth />} />
        <Route path="/home" exaxt element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

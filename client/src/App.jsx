import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import Auth from './components/Auth/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exaxt element={<Auth/>} />
      </Routes>
  </BrowserRouter>
  )
}

export default App

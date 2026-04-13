import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import CreateMatch from './pages/CreateMatch.jsx';
import Profile from './pages/Profile.jsx';
import Main from './pages/Main.jsx';
import Lobby from './pages/Lobby.jsx';
import JoinMatch from './pages/JoinMatch.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-match" element={<CreateMatch />} />
        <Route path="/join" element={<JoinMatch />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

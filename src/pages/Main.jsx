import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateMatch.css';

function Main() {
  const navigate = useNavigate();

  return (
    <div className="create-match-bg">
      <div className="create-match-container">
        <div className="create-match-header">
          <span className="generic-icon" title="Logo">🎮</span>
        </div>
        <div className="create-match-options">
          <button className="match-option" onClick={() => navigate('/create-match')}>
            Crear partida
          </button>
          <button className="match-option" onClick={() => navigate('/join')}> 
            Unirse a partida
          </button>
          <button className="match-option" onClick={() => navigate('/profile')}>
            Ver perfil
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;

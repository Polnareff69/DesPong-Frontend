import React, { useState } from 'react';
import './CreateMatch.css';

function CreateMatch() {
  const [selected, setSelected] = useState('1vs1');
  const [selectedSet, setSelectedSet] = useState(5);
  const [selectedPoint, setSelectedPoint] = useState(9);

  return (
    <div className="create-match-bg">
      <div className="create-match-container">
        <div className="create-match-header">
          <span className="generic-icon" title="Logo">🎮</span>
        </div>


        <div className="sets-points-section" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          <div className="sets-section" style={{ flex: 1, marginRight: '1rem' }}>
            <h3 style={{ fontFamily: 'cursive', color: '#00bcd4', fontSize: '1.5rem', textAlign: 'center', marginBottom: '1rem' }}>Sets</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                className={`match-option${selectedSet === 5 ? ' selected' : ''}`}
                onClick={() => setSelectedSet(5)}
              >
                5
              </button>
              <button
                className={`match-option${selectedSet === 7 ? ' selected' : ''}`}
                onClick={() => setSelectedSet(7)}
              >
                7
              </button>
            </div>
          </div>
          <div className="points-section" style={{ flex: 1, marginLeft: '1rem' }}>
            <h3 style={{ fontFamily: 'cursive', color: '#00bcd4', fontSize: '1.5rem', textAlign: 'center', marginBottom: '1rem' }}>Puntos</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                className={`match-option${selectedPoint === 9 ? ' selected' : ''}`}
                onClick={() => setSelectedPoint(9)}
              >
                9
              </button>
              <button
                className={`match-option${selectedPoint === 11 ? ' selected' : ''}`}
                onClick={() => setSelectedPoint(11)}
              >
                11
              </button>
            </div>
          </div>
        </div>

        <button className="confirm-btn" style={{ marginTop: '2rem' }}>Confirmar</button>
      </div>
    </div>
  );
}

export default CreateMatch;

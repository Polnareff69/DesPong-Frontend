import React, { useState } from "react";
import "./JoinMatch.css";

const JoinMatch = () => {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para unirse a la partida
    alert(`Código ingresado: ${code}`);
  };

  return (
    <div className="join-bg">
      <form className="join-container" onSubmit={handleSubmit}>
        <label htmlFor="room-code" className="join-label">
          Introduce código de partida
        </label>
        <input
          id="room-code"
          className="join-input"
          type="text"
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder="Ej: ABCD1234"
          autoComplete="off"
          required
        />
        <button className="join-btn" type="submit">Confirmar</button>
      </form>
    </div>
  );
};

export default JoinMatch;

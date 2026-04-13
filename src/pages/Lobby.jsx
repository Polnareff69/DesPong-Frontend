import React from "react";
import "./Lobby.css";

const Lobby = () => {
  // Ejemplo de datos quemados
  const roomCode = "ABCD1234";
  const creator = {
    name: "Juan Pérez",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    email: "juan.perez@email.com",
  };
  const guest = {
    name: "Invitado",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "invitado@email.com",
  };

  return (
    <div className="lobby-bg">
      <div className="lobby-container">
        <h2 className="room-code">Código de sala: <span>{roomCode}</span></h2>
        <div className="lobby-columns">
          <div className="lobby-user-card">
            <img src={creator.avatar} alt="Avatar creador" className="lobby-avatar" />
            <h3>{creator.name}</h3>
            <p>{creator.email}</p>
            <span className="lobby-role">Creador</span>
          </div>
          <div className="lobby-user-card">
            <img src={guest.avatar} alt="Avatar invitado" className="lobby-avatar" />
            <h3>{guest.name}</h3>
            <p>{guest.email}</p>
            <span className="lobby-role">Invitado</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lobby;

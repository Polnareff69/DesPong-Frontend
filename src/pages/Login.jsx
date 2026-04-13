import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPromo, setAcceptPromo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    alert('Login enviado');
  };

  return (
    <div className="login-container">
      <div className="login-image-section">
        <div className="login-welcome-text">
          <h2>HI THERE!</h2>
          <p>join us and enjoy</p>
        </div>
      </div>
      <div className="login-form-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <h3>REGISTRATION <span className="login-switch">/ LOGIN</span></h3>
          <label>Email</label>
          <input type="email" placeholder="Enter your Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <label>Password</label>
          <input type="password" placeholder="********" value={password} onChange={e => setPassword(e.target.value)} required />
          <div className="login-checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" checked={acceptTerms} onChange={e => setAcceptTerms(e.target.checked)} required />
              <span> I am 18 years old and I have read and accept <a href="#">Terms and conditions</a> and <a href="#">Privacy Policy</a></span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" checked={acceptPromo} onChange={e => setAcceptPromo(e.target.checked)} />
              <span> I would like to receive emails about betting and promotions from loot.bet.</span>
            </label>
          </div>
          <button type="submit" className="login-btn">REGISTRATION</button>
          <div className="login-or">or via social network</div>
          <div className="login-socials">
            <button type="button" className="social-btn gplus">G+</button>
            <button type="button" className="social-btn vk">VK</button>
            <button type="button" className="social-btn ok">OK</button>
            <button type="button" className="social-btn fb">F</button>
            <button type="button" className="social-btn tw">T</button>
          </div>
          <div className="login-footer">
            Have an account? <a href="#">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

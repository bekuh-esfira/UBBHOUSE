import React, { useState } from 'react';
import "./Login.css";

function Login() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 4000); // 4 секунды и исчезает
  };

  return (
    <div className="auth-container">
      {success && (
        <div className="success-overlay">
          <div className="confetti"></div>
          <div className="success-content">
            <img
              src="https://cdn-icons-png.flaticon.com/512/616/616408.png" 
              alt="welcome"
              className="success-image"
            />
            <h5 className="typewriter-text">Вы успешно зарегестрированы!!!</h5>
          </div>
        </div>
      )}

      <div className="cute-animal">
      </div>

      <h2>Вход</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Пароль" required />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default Login;

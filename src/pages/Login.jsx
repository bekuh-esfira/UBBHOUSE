import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Ошибка регистрации');
      }

      setSuccess(true);
      setPhone('');
      setPassword('');

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
            <h5 className="typewriter-text">Вы успешно зарегистрированы!</h5>
          </div>
        </div>
      )}

      {error && <div className="error-message">{error}</div>}

      <div className="cute-animal"></div>

      <h2>Регистрация</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="tel"
          placeholder="Номер телефона (+79991234567)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          pattern="\+7[0-9]{10}"
          title="Введите номер в формате +79991234567"
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Загрузка...' : 'Зарегистрироваться'}
        </button>
      </form>
    </div>
  );
}

export default Login;
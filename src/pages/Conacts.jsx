import React, { useState } from 'react';
import './Contacts.css';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Сообщение отправлено!');
  };

  return (
    <>
      <section className="contact-info-section">
        <div className="container">
          <h2 className="section-title">Контактная информация</h2>
          <p className="section-description">
            Мы всегда готовы помочь вам с вашими запросами. Свяжитесь с нами любым удобным способом.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <h3>Адрес</h3>
              <p>Окурмен, Бишкек, Кыргызстан</p>
            </div>
            <div className="contact-item">
              <h3>Телефон</h3>
              <p>+996 508 148 962</p>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <p>UBBHouse@company.kg</p>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Наша локация</h2>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.076290146345!2d69.2452290153144!3d42.87556767919596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38baf7a3b4a649dd%3A0x62ff0d4a22a99d92!2sBishkek%2C%20Kyrgyzstan!5e0!3m2!1sen!2sus!4v1676033253085!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <h2 className="section-title">Отправьте нам сообщение</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Введите ваше имя"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Ваш email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Введите ваш email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Сообщение</label>
              <textarea
                id="message"
                name="message"
                placeholder="Введите ваше сообщение"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Отправить
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contacts;

import React from 'react';
import './Footer.css';
import ono from '../../img/ono.webp';
import bakai from '../../img/bakai.webp';
import paypal from '../../img/paypal.webp';
import mbank from '../../img/mbank.jpg';
import UBB from '../../img/UBB.png'

function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-top">
        <div className="footer-brand">
          <h2>UBBHomes</h2>
          <p>Надежное строительство домов и коммерческих объектов по всей стране.</p>
          <img className='UBB' src={UBB} alt="" />
        </div>

        <div className="footer-links">
          <h3>Навигация</h3>
          <ul>
            <li><a href="#">Главное</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>

        <div className="footer-contacts">
          <h3>Контакты</h3>
          <p>г. Бишкек, ул. Строителей, 10</p>
          <p>+996 700 000 000</p>
          <p>info@ubbhomes.kg</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 UBBHomes. Все права защищены.</p>
        <div className="payment-icons">
          <img src={ono} alt="Visa" />
          <img src={bakai} alt="MasterCard" />
          <img src={paypal} alt="PayPal" />
          <img src={mbank} alt="МИР" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

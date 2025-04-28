import React, { useState } from 'react';
import './Header.css';
import UBB from '../../img/UBB.png';
import { Link, useNavigate } from 'react-router-dom';
import love1 from '../../img/love1.png';
import facebook from "../../img/facebook.png";
import telegram from "../../img/telegram.png";
import whatsapp from "../../img/whatsapp.png";
import Bron from "../../img/Bron.png";


function Header() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const query = searchValue.toLowerCase().trim();

      if (query.includes('район') || query.includes('районы')) {
        navigate('/districts');
      } else if (query.includes('аренда') || query.includes('аренды') || query.includes('снять')) {
        navigate('/rentals');
      } else if (query.includes('о нас') || query.includes('компания') || query.includes('мы')) {
        navigate('/about');
      } else if (query.includes('контакты') || query.includes('связь') || query.includes('телефон')) {
        navigate('/contacts');
      } else if (query.includes('новостройки') || query.includes('новые дома') || query.includes('новые здания')) {
        navigate('/new-buildings');
      } else if (query.includes('новости') || query.includes('новость')) {
        navigate('/news');
      } else if (query.includes('главное') || query.includes('главная')) {
        navigate('/Banner');
      } else if (query.includes('избранное') || query.includes('любимые') || query.includes('сохраненные')) {
        navigate('/Favorites');
      } else if (query.includes('чат') || query.includes('договориться')) {
        navigate('/Chat');
      } else {
        navigate(`/districts?search=${encodeURIComponent(searchValue)}`);
      }

      setSearchValue('');
    }
  };

  return (
    <header className="header">
      <div className='seedra'>
        <Link to="/UBBHomesPage">
          <img className='LoGo' src={UBB} alt="Логотип" />
        </Link>
        <img className='menu-toggle' src="https://cdn-icons-png.flaticon.com/512/6499/6499731.png" alt="" />
        
        <input
          className='input'
          type="text"
          placeholder='НАЙТИ...'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleSearch}
        />

        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img className="fs" src={facebook} alt="Facebook" />
        </a>

        <a href="https://wa.me/ваш_номер" target="_blank" rel="noopener noreferrer">
          <img className="wat" src={whatsapp} alt="WhatsApp" />
        </a>

        <a href="https://t.me/ваш_username" target="_blank" rel="noopener noreferrer">
          <img className="tg" src={telegram} alt="Telegram" />
        </a>

        <Link to="/Login">
          <button className='btn'>Вход</button>
        </Link>
      </div>

      <div className="header-top">
        <Link to="/HumorousPage">
          <div className='kvadrat'></div>
        </Link>
        <nav className="span">
          <Link to="/Banner"><h3>Главное</h3></Link>
          <Link to="/districts"><h3>Районы</h3></Link>
          <Link to="/rentals"><h3>Аренды</h3></Link>
          <Link to="/about"><h3>О нас</h3></Link>
          <Link to="/news"><h3>Новости</h3></Link>
          <Link to="/contacts"><h3>Контакты</h3></Link>
          <Link to="/new-buildings"><h3>Новостройки</h3></Link>
          <Link to="/Favorites">
            <img className='love' src={love1} alt="избранные" />
          </Link>
        </nav>
        <Link to="/Bron">
        <img className='select1' src={Bron} alt="Pf,hjy" />
        </Link>
        <Link to="/Chat">
          <button className='biggest'>Договориться!</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;

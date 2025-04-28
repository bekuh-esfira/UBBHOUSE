import React from 'react'
import "./Banner.css"
import gram from "../../img/gram.png"
import gram2 from "../../img/gram2.jpeg"
import gram3 from "../../img/gram3.jpeg"
import gram4 from "../../img/gram4.jpeg"
import { Link } from 'react-router-dom'
import ono from '../../img/ono.webp';
import bakai from '../../img/bakai.webp';
import paypal from '../../img/paypal.webp';
import mbank from '../../img/mbank.jpg';
import UBB from '../../img/UBB.png'

function Banner() {
  return <>
<main className="main">
  <div className="content-wrapper">
    
    {/* Сайдбар слева
    <aside className="sidebar">
      <h2 className="sidebar-title">Категории</h2>
      <ul className="category-list">
        <li>Двухэтажные дома</li>
        <li>Одноэтажные дома</li>
        <li>Таунхаусы</li>
        <li>Коттеджи</li>
        <li>Дуплексы</li>
        <li>Двухэтажные дома</li>
        <li>Одноэтажные дома</li>
        <li>Таунхаусы</li>
        <li>Коттеджи</li>
        <li>Дуплексы</li>
        <li>Маленькие дома</li>
        <li>С мансардой</li>
        <li>С гаражом</li>
        <li>С террасой</li>
        <li>С подвалом</li>
        <li>Коммерческие здания</li>
        <li>Сауны и бани</li>
        <li>Гостевые дома</li>
        <li>Модульные дома</li>
        <li>Каркасные дома</li>
        <li>Бетонные дома</li>
        <li>Дома из кирпича</li>
        <li>Дома из газобетона</li>
        <li>Дома из дерева</li>
        <li>Энергоэффективные дома</li>
        <li>Дома из дерева</li>
        <li>Энергоэффективные дома</li>
        <li>Мини дома</li>
        <li>Элитные дома</li>
        <li>Дома на склоне</li>
        <li>Проекты с бассейном</li>
        <li>С солнечными панелями</li>
        <li>Проекты под ипотеку</li>
        <li>Недорогие дома</li>
        <li>Классические дома</li>
        <li>Современные дома</li>
        <li>Смарт-дома</li>
      </ul>
    </aside> */}

    {/* Основной контент справа */}
    <div className="main-content">
      <section className="about-section">
        <div className="about-text">
          <h2>Строим с уверенностью</h2>
          <p>
            Мы — строительная компания с более чем 10-летним опытом в реализации жилых и коммерческих объектов.
            Наша команда предлагает современные решения, качественные материалы и строгое соблюдение сроков.
          </p>
          <Link to="/about"> <button className="about-btn">Подробнее о нас</button></Link>
        </div>
        <div className="about-image">
          <img src={gram} alt="Строительство" />
        </div>
      </section>

      <section className="services-section">
        <h2 className="services-title">Наши услуги</h2>
        <div className="services-cards">
          <div className="service-card">
            <img src={gram2} alt="Проектирование" />
            <h3>Проектирование</h3>
            <p>Создание чертежей и визуализаций для любых типов зданий. Индивидуальный подход к каждому клиенту.</p>
          </div>

          <div className="service-card">
            <img src={gram3} alt="Строительство под ключ" />
            <h3>Строительство под ключ</h3>
            <p>Полный цикл строительства: от фундамента до отделки. Без задержек и скрытых расходов.</p>
          </div>

          <div className="service-card">
            <img src={gram4} alt="Ремонт и реконструкция" />
            <h3>Ремонт и реконструкция</h3>
            <p>Обновим старые здания или помещения с учетом современных стандартов и дизайна.</p>
          </div>
          <div className="service-card">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEvTVfYAP4ydSfDMJxwF_rvvTRZ0uvzZEHA&s" alt="Строительство домов" />
  <h3>Строительство домов</h3>
  <p>Построим дом вашей мечты с использованием современных материалов и технологий.</p>
</div>

        </div>
      </section>
      <section className="why-us-section">
  <h2 className="why-title">Почему выбирают нас</h2>
  <div className="why-cards">

    <div className="why-card">
      <i className="fas fa-hard-hat icon"></i>
      <h3>Опытная команда</h3>
      <p>Профессионалы с более чем 10-летним стажем работы в строительстве.</p>
    </div>

    <div className="why-card">
      <i className="fas fa-clock icon"></i>
      <h3>Соблюдение сроков</h3>
      <p>Всегда выполняем проекты вовремя — без задержек и переносов.</p>
    </div>

    <div className="why-card">
      <i className="fas fa-shield-alt icon"></i>
      <h3>Гарантия качества</h3>
      <p>Работаем с проверенными поставщиками и сертифицированными материалами.</p>
    </div>
    <div className="why-card">
  <i className="fas fa-cogs icon"></i>
  <h3>Современные технологии</h3>
  <p>Используем новейшие технологии для эффективного и качественного строительства.</p>
</div>

<div className="why-card">
  <i className="fas fa-tools icon"></i>
  <h3>Качество и надёжность</h3>
  <p>Каждый проект выполняется с высокой ответственностью и вниманием к деталям.</p>
</div>


    <div className="why-card">
      <i className="fas fa-wallet icon"></i>
      <h3>Прозрачные цены</h3>
      <p>Никаких скрытых расходов — вы сразу знаете, за что платите.</p>
    </div>

    <div className="why-card">
      <i className="fas fa-building icon"></i>
      <h3>Современные технологии</h3>
      <p>Применяем новейшие технологии строительства и управления проектами.</p>
    </div>

    <div className="why-card">
      <i className="fas fa-thumbs-up icon"></i>
      <h3>Довольные клиенты</h3>
      <p>Более 500 успешно завершённых объектов и благодарные отзывы заказчиков.</p>
    </div>

  </div>
</section>
    </div>



  </div>
      <footer className="footer">
        
        <div className="footer-top">
          <div className="footer-brand">
            <h2>UBBHomes</h2>
            <p>Надежное строительство домов и коммерческих объектов по всей стране.</p>
      <Link to="/UBBHomesPage"><img className='UBB' src={UBB} alt="Логотип" /></Link>
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
  <a href="https://www.visa.com/" target="_blank" rel="noopener noreferrer">
    <img src={ono} alt="Visa" />
  </a>
  <a href="https://www.mastercard.com/" target="_blank" rel="noopener noreferrer">
    <img src={bakai} alt="MasterCard" />
  </a>
  <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
    <img src={paypal} alt="PayPal" />
  </a>
  <a href="https://www.mironline.ru/" target="_blank" rel="noopener noreferrer">
    <img src={mbank} alt="МИР" />
  </a>
</div>

        </div>
      </footer>
</main>
  
  </>
 
}

export default Banner

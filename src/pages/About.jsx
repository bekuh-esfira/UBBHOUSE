import React from 'react';
import { Link } from 'react-router-dom';
import "./About.css"  

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">UBBHomes — Ultimate Building & Beyond</h1>
          <p className="hero-subtitle">
            Ваш путь к дому мечты начинается здесь. Мы строим не просто дома — мы создаем будущее.
          </p>
          <Link to="/ProjectsPage" className="hero-btn">Смотреть проекты</Link>
        </div>
      </header>

      <section className="about-section">
  <h2>О компании UBBHomes</h2>

  <div className="about-highlights">
    <div className="highlight-box">
      <h3>🏆 Более 15 лет опыта</h3>
      <p>Мы гордимся нашим наследием и сотнями успешно завершённых проектов.</p>
    </div>
    <div className="highlight-box">
      <h3>👷 Команда экспертов</h3>
      <p>Наши архитекторы и инженеры — лучшие в своём деле.</p>
    </div>
    <div className="highlight-box">
      <h3>🎯 Миссия</h3>
      <p>Создавать не просто здания, а пространство для жизни и вдохновения.</p>
    </div>
  </div>

  <p className="about-description">
    UBBHomes (Ultimate Building & Beyond) — это строительная компания нового поколения, сочетающая в себе современные технологии, надежность и эстетический подход. Мы предлагаем клиентам дома, которые не только удобны для жизни, но и становятся инвестициями в будущее.
  </p>
</section>

      <section className="advantages-section">
        <h2>Наши преимущества</h2>
        <div className="advantage-grid">
          <Link to="/technologies">
            <div className="advantage-box">🏗 Современные технологии строительства</div>
          </Link>   
          <Link to="/IndividualApproach">
          <div className="advantage-box">💼 Индивидуальный подход к каждому клиенту</div>
          </Link>
          <Link to="/EcoMaterials">
          <div className="advantage-box">🌍 Экологичные материалы</div>
          </Link>
          <Link to="/OnTimeDelivery">
          <div className="advantage-box">⏱ Сдача проектов точно в срок</div>
          </Link>
        </div>
      </section>

      <section className="projects-preview">
        <h2>Популярные проекты</h2>
        <div className="projects-container">
          <div className="project-card">
            <img src="https://s0.rbk.ru/v6_top_pics/media/img/1/66/756381982615661.jpg" alt="UBB Sky Villas" className="project-image" />
            <div className="project-info">
              <h3>UBB Sky Villas</h3>
              <p>Современные небоскребы с видом на город и горы.</p>
            </div>
          </div>
          
          <div className="project-card">
            <img src="https://journal.totdom.com/upload/webp/100/upload/iblock/5e3/is5ev4urp2w35ea70bs2qpz4iu04s2xo/1-dom-Raita.webp" alt="UBB Family Town" className="project-image" />
            <div className="project-info">
              <h3>UBB Family Town</h3>
              <p>Уютные дома для семейной жизни с парками и школами рядом.</p>
            </div>
          </div>

          <div className="project-card">
            <img src="https://krisha-photos.kcdn.online/content/58/95662f0f08a29411386-krisha-pr-08-08-8.jpg" alt="UBB Green Line" className="project-image" />
            <div className="project-info">
              <h3>UBB Green Line</h3>
              <p>Экологически чистые коттеджи у подножия гор.</p>
            </div>
          </div>
          <div className="project-card">
  <img src="https://terrarealestate.com/img/2343/2343-modern-interior-features-and-panoramic-sea-view-from-new-alanya-flats-63d0d17141989.jpg" alt="UBB Urban Heights" className="project-image" />
  <div className="project-info">
    <h3>UBB Urban Heights</h3>
    <p>Современные апартаменты с панорамным видом на город.</p>
  </div>
</div>

        </div>

        <Link to="/ProjectsPage" className="view-more">Смотреть все проекты →</Link>
      </section>

      <footer className="footer">
        <p>© 2025 UBBHomes — Строим мечты. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default Home;
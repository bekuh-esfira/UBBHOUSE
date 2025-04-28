import React from 'react';
import "./Ubb.css";
import UBB from "../img/UBB.png";
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Урмат',
    title: 'Вдохновляющий Лидер',
    description:
      'Урмат — это человек, который зажигает сердца. Его энергия, решительность и умение находить решения даже в самых сложных ситуациях делают его незаменимым. Он ведёт за собой команду, где каждый чувствует себя важным.',
    color: '#ffd700',
    emoji: '🔥',
  },
  {
    name: 'Бекболсун',
    title: 'Креативный Стратег',
    description:
      'Бекболсун — мозг команды. У него невероятное чувство стиля, стратегическое мышление и всегда есть нестандартные идеи. Он видит возможности там, где другие видят преграды. Настоящий генератор креативности.',
    color: '#7fffd4',
    emoji: '🎯',
  },
  {
    name: 'Бекмырза',
    title: 'Сердце и Надёжность',
    description:
      'Бекмырза — тот, кто создаёт тепло в команде. Он честный, надёжный и заботится о каждом. Его мудрость и умение слушать делают его не просто участником команды, а её душой.',
    color: '#ff69b4',
    emoji: '💖',
  },
];

function MainPage() {
  return (
    <div className="main-container">
      <header className="main-header">
        <img src={UBB} alt="UBBHomes" className="logo" />
        <h1 className="title">UBBHomes — Urban Building Bureau</h1>
        <p className="slogan">Надёжные дома, построенные с любовью и стилем</p>
      </header>

      <section className="section about">
        <h2>О нас</h2>
        <p>
          UBBHomes — компания с более чем 15-летним опытом в строительстве жилых и коммерческих объектов.
          Мы объединяем архитектурную элегантность с инженерной точностью, чтобы создавать дома мечты.
        </p>
      </section>

      <section className="section values">
        <h2>Наши принципы</h2>
        <ul>
          <li><strong>Устойчивость:</strong> Экологичные и энергоэффективные материалы</li>
          <li><strong>Стиль:</strong> Современные дизайны и эргономика</li>
          <li><strong>Надёжность:</strong> Гарантия качества на все объекты</li>
          <li><strong>Доступность:</strong> Прозрачная ценовая политика</li>
        </ul>
      </section>

      <section className="section services">
        <h2>Наши услуги</h2>
        <div className="cards">
          <div className="card">
            <h3>Жилые комплексы</h3>
            <p>Проектирование и строительство жилых кварталов с полной инфраструктурой.</p>
          </div>
          <div className="card">
            <h3>Коттеджные посёлки</h3>
            <p>Уютные загородные дома в окружении природы, с продуманной логистикой.</p>
          </div>
          <div className="card">
            <h3>Коммерческая недвижимость</h3>
            <p>Офисы, торговые и бизнес-центры с высоким уровнем комфорта.</p>
          </div>
          <div className="card">
  <h3>Архитектурное проектирование</h3>
  <p>Создание уникальных дизайн-проектов от классики до футуризма, с учётом всех пожеланий клиента.</p>
</div>

<div className="card">
  <h3>Ремонт и реконструкция</h3>
  <p>Профессиональный подход к обновлению старых зданий с новыми технологиями и стилем.</p>
</div>

<div className="card">
  <h3>Ландшафтный дизайн</h3>
  <p>Озеленение территорий, благоустройство дворов и установка малых архитектурных форм.</p>
</div>

        </div>
      </section>

      <section className="section team">
        <h2 className="team-title">Наша Великая Тройка</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index} style={{ borderColor: member.color }}>
              <div className="emoji" style={{ backgroundColor: member.color }}>{member.emoji}</div>
              <h3>{member.name}</h3>
              <h4>{member.title}</h4>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section contact">
        <h2>Связаться с нами</h2>
        <p>Email: <a href="mailto:info@ubbhomes.com">info@ubbhomes.com</a></p>
        <p>Телефон: +996 508 148 962</p>
        <Link to="/Review"><button className="contact-btn">Оставить заявку</button></Link>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} UBBHomes. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default MainPage;

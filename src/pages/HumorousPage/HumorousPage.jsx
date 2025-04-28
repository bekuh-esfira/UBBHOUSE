import React from 'react';
import "./HumorousPage.css"

const AuthorityPage = () => {
  return (
    <div className="authority-container">
      {/* Заголовок */}
      <header className="header">
        <h1>Наше место среди лидеров рынка</h1>
        <p>UBBHomes — это не просто строительная компания. Мы гордимся нашим вкладом в развитие строительной отрасли как в Кыргызстане, так и в мире.</p>
      </header>

      {/* Достижения */}
      <section className="achievement-section">
        <div className="achievement-box">
          <h2>🏆 15+ лет опыта</h2>
          <p>Мы уже более 15 лет строим надежные и комфортные дома, которые становятся воплощением мечты для наших клиентов.</p>
        </div>
        <div className="achievement-box">
          <h2>👷 Команда профессионалов</h2>
          <p>Наши архитекторы, инженеры и дизайнеры — это специалисты мирового уровня, создающие проекты, которые вдохновляют.</p>
        </div>
        <div className="achievement-box">
          <h2>🌍 Международное признание</h2>
          <p>UBBHomes присутствует не только в Кыргызстане, но и за рубежом, обеспечивая доступ к высококачественному строительству для международных клиентов.</p>
        </div>
      </section>

      {/* Статистика компании */}
      <section className="stats-section">
        <div className="stats-box">
          <div className="stats-card">
            <div className="circle-box">
              <span className="stat-circle">500+</span>
            </div>
            <h3>Завершенных проектов</h3>
            <p>Мы с гордостью завершили более 500 крупных проектов по всему миру.</p>
          </div>
          <div className="stats-card">
            <div className="circle-box">
              <span className="stat-circle">200+</span>
            </div>
            <h3>Сотрудников</h3>
            <p>Наша команда — это более 200 профессионалов, которые обеспечивают качество и надежность на всех этапах строительства.</p>
          </div>
          <div className="stats-card">
            <div className="circle-box">
              <span className="stat-circle">10</span>
            </div>
            <h3>Международных наград</h3>
            <p>Мы получили 10 престижных международных наград за вклад в строительство и инновационные проекты.</p>
          </div>
        </div>
      </section>

      {/* О нас */}
      <section className="about-section">
        <h2>О компании</h2>
        <p>
          UBBHomes (Ultimate Building & Beyond) — это компания, которая активно внедряет новые технологии в строительстве. Мы создали уникальную концепцию «умного строительства», которая включает не только экологические стандарты, но и интеграцию передовых технологий в каждый проект.
        </p>
        <p>
          Мы стремимся не просто строить дома, а создавать уютные и безопасные пространства для жизни, которые станут основой для будущих поколений.
        </p>
      </section>

      {/* Отзывы клиентов */}
      <section className="testimonials-section">
        <h2>Отзывы наших клиентов</h2>
        <div className="testimonial">
          <p>«UBBHomes строили наш дом, и это было великолепно! От начала до конца, весь процесс был на высшем уровне!»</p>
          <h4>- Алексей Иванов, владелец дома в Бишкеке</h4>
        </div>
        <div className="testimonial">
          <p>«Компания с огромным опытом и отличными проектами. Мы довольны результатом, дом стал настоящим домом мечты!»</p>
          <h4>- Наталья Ким, владельца элитной квартиры в Алматы</h4>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <p>UBBHomes © 2025 | Все права защищены</p>
        <p>Наши офисы: Бишкек, Алматы, Москва, Лондон</p>
      </footer>
    </div>
  );
}

export default AuthorityPage;

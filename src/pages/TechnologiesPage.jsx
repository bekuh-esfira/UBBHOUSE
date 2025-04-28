import React from 'react';
import './TechnologiesPage.css';
import { Link } from 'react-router-dom';

function TechnologiesPage() {
  return (
    <div className="technologies-page">
      <h1>Современные технологии строительства</h1>
      <p className="intro">
        Мы используем передовые технологии и инновационные решения, чтобы строить быстрее, безопаснее и экологичнее.
      </p>

      <div className="tech-grid">
        <div className="tech-card">
          <h3>Монолитно-каркасная технология</h3>
          <p>
            Обеспечивает прочность, долговечность и сейсмоустойчивость зданий. Позволяет проектировать свободные планировки.
          </p>
        </div>
        <div className="tech-card">
          <h3>Энергоэффективные материалы</h3>
          <p>
            Используем утеплённые блоки, стеклопакеты нового поколения и теплоизоляцию для экономии энергии.
          </p>
        </div>
        <div className="tech-card">
          <h3>Зелёные технологии</h3>
          <p>
            Солнечные панели, системы сбора дождевой воды, экосады и материалы из вторсырья — для устойчивого будущего.
          </p>
        </div>
        <div className="tech-card">
          <h3>Умные системы</h3>
          <p>
            Интеграция «умного дома»: автоматизация света, безопасности, отопления и вентиляции.
          </p>
        </div>
      </div>

      <div className="tech-cta">
      {/* <Link to="/technologiesPage"><button>Подробнее о технологиях</button></Link>   */}
      </div>
    </div>
  );
}

export default TechnologiesPage;

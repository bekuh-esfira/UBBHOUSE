import React from 'react';
import { Link } from 'react-router-dom';
import './LearnMorePage.css';

function LearnMore() {
  return (
    <div className="learn-more-page">
      <h1>Узнать больше о проектах</h1>

      <section className="info-section">
        <h2>Почему выбирают UBBHomes?</h2>
        <p>
          Мы предлагаем инновационные и качественные решения для строительства домов, жилых комплексов, экопроектов и коммерческой недвижимости. Наша цель — создавать удобные и экологичные пространства для жизни и бизнеса.
        </p>
      </section>

      <section className="project-highlights">
        <h2>Наши лучшие проекты</h2>
        <div className="project-gallery">
          <div className="highlight-card">
            <img src="https://lavrushinskiy.ru/upload/iblock/382/3nlnjhnxiddf64xml9v3o07adv8y8y2j.jpg" alt="UBB Sky Villas" />
            <h3>UBB Sky Villas</h3>
            <p>Элитные квартиры с потрясающим видом на город.</p>
          </div>
          <div className="highlight-card">
            <img src="https://www.stroy-kotedj.ru/upload/resize_cache/webp/iblock/f5f/680_340_2/f5ffc4bf09e6d648e949b322893c727c.webp" alt="UBB Eco Village" />
            <h3>UBB Eco Village</h3>
            <p>Экологичные дома в живописных локациях, гармония с природой.</p>
          </div>
          <div className="highlight-card">
            <img src="https://data.kaktus.media/image/big/2025-03-04_17-21-07_231709.jpg" alt="UBB Tower Business" />
            <h3>UBB Tower Business</h3>
            <p>Современные бизнес-центры с первоклассной инфраструктурой.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Готовы начать?</h2>
        <p>Независимо от того, хотите ли вы приобрести дом своей мечты или инвестировать в коммерческую недвижимость, мы готовы помочь вам на каждом этапе.</p>
        <Link to="/contacts">
          <button className="cta-button">Связаться с нами</button>
        </Link>
      </section>
    </div>
  );
}

export default LearnMore;

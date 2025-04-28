import React from 'react';
import './News.css';

function News() {
  return (
    <>
      <section className="news-section">
        <div className="container">
          <h2 className="section-title">Новости в строительстве</h2>
          <p className="section-description">
            Узнайте о последних тенденциях и событиях в мире строительства, инновационных технологиях и изменениях в законодательстве, которые влияют на отрасль.
          </p>

   
          <div className="news-card">
            <div className="news-card-img">
              <img
                src="https://darstroy-yug.ru/upload/editor-files/a0c1304e91b58544f7e8.jpg"
                alt="Строительные технологии"
              />
            </div>
            <div className="news-card-content">
              <h3>Инновационные строительные технологии</h3>
              <p>
                В последние годы строительная отрасль значительно изменилась благодаря внедрению новых технологий. Это включает использование
                экологически чистых материалов, автоматизацию строительных процессов, а также внедрение 3D-печати для создания зданий.
              </p>
              {/* <button className="btn">Читать далее</button> */}
            </div>
          </div>

    
          <div className="news-card">
            <div className="news-card-img">
              <img
                src="https://images.unsplash.com/photo-1629726797843-618688139f5a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29sYXIlMjBwdnxlbnwwfHwwfHx8MA%3D%3D?size=300x0"
                alt="Энергосбережение"
              />
            </div>
            <div className="news-card-content">
              <h3>Энергосбережение в строительстве</h3>
              <p>
                Современные тенденции в строительстве ориентированы на создание энергоэффективных зданий. Использование солнечных панелей, 
                утепленных фасадов и инновационных систем отопления позволяет значительно снизить потребление энергии.
              </p>
              {/* <button className="btn">Читать далее</button> */}
            </div>
          </div>

          
          <div className="news-card">
            <div className="news-card-img">
              <img
                src="https://img.goodfon.ru/wallpaper/big/b/8f/interer-komnata-kvartira-6205.webp"
                alt="Тренды в дизайне"
              />
            </div>
            <div className="news-card-content">
              <h3>Тренды в строительном дизайне 2025 года</h3>
              <p>
                В 2025 году в дизайне интерьеров и экстерьеров зданий будет преобладать минимализм с акцентом на естественные материалы, 
                такие как дерево и камень. Также будут популярны умные дома, которые интегрируются с системой управления климатом и энергопотреблением.
              </p>
              {/* <button className="btn">Читать далее</button> */}
            </div>
          </div>
        </div>
      </section>

      <section className="green-building-section">
        <div className="container">
          <h2 className="section-title">Зеленое строительство: новые стандарты</h2>
          <p className="section-description">
            Зелёное строительство приобретает все большую популярность благодаря своей экологичности и энергосбережению. В этой секции мы расскажем о лучших практиках и примерах.
          </p>

          <div className="green-card">
            <div className="green-card-content">
              <h3>Что такое зелёное строительство?</h3>
              <p>
                Зелёное строительство — это процесс проектирования, строительства и эксплуатации зданий с использованием экологически чистых материалов и технологий, которые снижают воздействие на окружающую среду.
              </p>
              {/* <button className="btn">Подробнее</button> */}
            </div>
          </div>
        </div>
      </section>

      <section className="eco-materials-section">
        <div className="container">
          <h2 className="section-title">Экологические строительные материалы</h2>
          <p className="section-description">
            В строительной отрасли начинается использование новых экологически безопасных материалов, которые помогают снижать углеродный след и уменьшают загрязнение окружающей среды.
          </p>

          <div className="eco-card">
            <div className="eco-card-content">
              <h3>Использование переработанных материалов</h3>
              <p>
                Переработанные материалы, такие как стекло, пластик и металл, находят всё большее применение в строительстве. Это не только снижает нагрузку на природу, но и экономит ресурсы.
              </p>
              {/* <button className="btn">Читать далее</button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default News;

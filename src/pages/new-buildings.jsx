import React from 'react';
import "./new-buildings.css"

function NewBuildings() {
  return (
    <>
      <section className="news-header">
        <div className="container">
          <h1 className="news-title">Новостройки</h1>
          <p className="news-subtitle">Будьте в курсе самых последних событий и тенденций в мире новостроек.</p>
        </div>
      </section>

      <section className="news-section trends">
        <div className="container">
          <h2 className="section-title">Тренды в строительстве</h2>
          <p className="section-description">
            Узнайте о самых актуальных трендах в строительстве, которые определяют будущее жилых и коммерческих объектов.
          </p>

          <div className="news-item">
            <div className="news-img">
              <img
                src="https://kcsons.ru/wp-content/uploads/2024/07/dall%C2%B7e-2024-07-10-10.53.49-a-futuristic-construction-site-showcasing-modern-building-designs-eco-friendly-materials-smart-home-technology-and-sustainable-architectural-featur.webp"
                alt="Тренд 1"
              />
            </div>
            <div className="news-content">
              <h3>Умные дома и технологии</h3>
              <p>
                Внедрение умных технологий в строительстве позволяет сделать дома более удобными и энергоэффективными. Узнайте, как такие технологии меняют индустрию.
              </p>
              {/* <button className="btn-more">Читать больше</button> */}
            </div>
          </div>

          <div className="news-item">
            <div className="news-img">
              <img
                src="https://energo-audit.com/wp-content/uploads/2019/04/energosberezhenie-doma.jpg"
                alt="Тренд 2"
              />
            </div>
            <div className="news-content">
              <h3>Энергосберегающие материалы</h3>
              <p>
                Современные материалы, такие как теплоизоляционные панели и окна с повышенной энергоэффективностью, значительно снижают эксплуатационные расходы.
              </p>
              {/* <button className="btn-more">Читать больше</button> */}
            </div>
          </div>
        </div>
      </section>

      <section className="news-section upcoming-projects">
        <div className="container">
          <h2 className="section-title">Предстоящие проекты</h2>
          <p className="section-description">
            Ознакомьтесь с нашими предстоящими проектами, которые уже завоевали внимание инвесторов и покупателей.
          </p>

          <div className="news-item">
            <div className="news-img">
              <img
                src="https://pn.ru/u/images/origwm/f9596a4ff338664c2269ab46a4131bcf.jpg"
                alt="Проект 1"
              />
            </div>
            <div className="news-content">
              <h3>Жилой комплекс "Солнечный"</h3>
              <p>
                Новейший жилой комплекс с продуманной инфраструктурой и расположением в центре города. Отличается современными инженерными решениями и комфортными условиями.
              </p>
              {/* <button className="btn-more">Читать больше</button> */}
            </div>
          </div>

          <div className="news-item">
            <div className="news-img">
              <img
                src="https://luckywings.ru/wp-content/uploads/2023/10/42.jpg"
                alt="Проект 2"
              />
            </div>
            <div className="news-content">
              <h3>Элитные коттеджи "Горный Вид"</h3>
              <p>
                Престижный коттеджный посёлок у подножия гор с панорамными видами. Каждое жильё оснащено высококачественными отделочными материалами.
              </p>
              {/* <button className="btn-more">Читать больше</button> */}
            </div>
          </div>
        </div>
      </section>

      <section className="news-section industry-news">
        <div className="container">
          <h2 className="section-title">Новости отрасли</h2>
          <p className="section-description">
            Следите за важнейшими событиями в строительной отрасли и изменениям в законодательстве, которые могут повлиять на рынок недвижимости.
          </p>

          <div className="news-item">
            <div className="news-img">
              <img
                src="https://s0.rbk.ru/v6_top_pics/media/img/8/89/347381279158898.jpg"
                alt="Новости 1"
              />
            </div>
            <div className="news-content">
              <h3>Новое законодательство о строительстве</h3>
              <p>
                Внесение изменений в закон о градостроительстве значительно упростит процесс получения разрешений для застройщиков.
              </p>
              {/* <button className="btn-more">Читать больше</button>  */}
            </div>
          </div>

          <div className="news-item">
            <div className="news-img">
              <img
                src="https://ichef.bbci.co.uk/news/1024/branded_russian/AD40/production/_121025344_yemen4.png"
                alt="Новости 2"
              />
            </div>
            <div className="news-content">
              <h3>Возвращение старых зданий на рынок</h3>
              <p>
                Рынок реставрации исторических зданий переживает бум. Мы расскажем, как старинные дома становятся частью современных жилых комплексов.
              </p>
              {/* <button className="btn-more">Читать больше</button> */}
            </div>
          </div>
        </div>
      </section>

      <section className="news-section customer-feedback">
        <div className="container">
          <h2 className="section-title">Отзывы клиентов</h2>
          <p className="section-description">
            Узнайте, что наши довольные клиенты говорят о своём опыте покупки недвижимости у нас.
          </p>

          <div className="feedback-item">
            <p>"Покупка квартиры была лёгкой и удобной. Все этапы были прозрачны, и мы получили именно то, что искали!"</p>
            <h4>- Ирина и Павел</h4>
          </div>

          <div className="feedback-item">
            <p>"Коттедж, который мы купили в посёлке "Горный Вид", превзошёл все ожидания. Отличное качество и вид на горы!"</p>
            <h4>- Екатерина и Сергей</h4>
          </div>
        </div>
      </section>

      <section className="news-section contact-us">
        <div className="container">
          <h2 className="section-title">Свяжитесь с нами</h2>
          <p className="section-description">
            Если у вас есть вопросы, мы готовы помочь. Напишите нам через форму ниже, и наши специалисты свяжутся с вами.
          </p>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
              <input type="text" id="name" placeholder="Введите ваше имя" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Ваш email</label>
              <input type="email" id="email" placeholder="Введите ваш email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Сообщение</label>
              <textarea id="message" placeholder="Введите ваше сообщение" required></textarea>
            </div>

            <button type="submit" className="btn-submit">Отправить</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default NewBuildings;

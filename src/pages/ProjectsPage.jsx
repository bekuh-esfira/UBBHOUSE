import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';

function Projects() {
  return (
    <div className="projects-page">
      <h1>Проекты UBBHomes</h1>
      <section className="section">
        <h2>Современные жилые комплексы</h2>
        <p>Мы создаем уникальные жилые пространства с продуманной инфраструктурой, парками и удобствами для всей семьи.</p>
        <div className="project-gallery">
          <div className="project-card">
            <img src="https://virtualland.ru/images/uploads/opengraph/Poklonnaya-9-AntTeq-c4-min.jpg" alt="UBB Sky Villas" />
            <h3>UBB Sky Villas</h3>
            <p>Небоскребы с панорамными окнами и видом на город.</p>
          </div>
          <div className="project-card">
            <img src="https://domtut.uz/resources/uploads/post/kakie-detskie-ploschadki-sozdayut-v-sovremennyh-novostroykah.jpg" alt="UBB Family Town" />
            <h3>UBB Family Town</h3>
            <p>Комфортные дома с детскими площадками и школами поблизости.</p>
          </div>
          <div className="project-card">
            <img src="https://content.cdn-cian.ru/realty/uploads/froala_editor/images/apartriver-novosibirsk-jk-1150613901-6.jpg" alt="UBB River Park" />
            <h3>UBB River Park</h3>
            <p>Современные апартаменты с видом на реку и парковыми зонами.</p>
          </div>
          <div className="project-card">
            <img src="https://cdnn21.img.ria.ru/images/07e8/07/19/1961996399_0:0:2560:1440_1920x0_80_0_0_aa5428924174226ce42a42aa24c22ff6.jpg" alt="UBB Park Residence" />
            <h3>UBB Park Residence</h3>
            <p>Эко-комплекс с зелеными дворами и парковыми аллеями.</p>
          </div>
        </div>
      </section>
      {/* юююююююююююююююююююю */}
      <section className="section">
        <h2>Экологические проекты</h2>
        <p>Мы заботимся об окружающей среде, создавая дома из природных материалов.</p>
        <div className="project-gallery">
          <div className="project-card">
            <img src="https://ic.pics.livejournal.com/pavel_vladiv/35889576/158569/158569_original.jpg" alt="UBB Green Line" />
            <h3>UBB Green Line</h3>
            <p>Коттеджи у подножия гор с солнечными панелями и автономным водоснабжением.</p>
          </div>
          <div className="project-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnG-A21E3ACd-AEzF8K0ZO7xhY-ri1WblSfw&s" alt="UBB Eco Village" />
            <h3>UBB Eco Village</h3>
            <p>Экодеревни в живописных локациях с минимальным воздействием на природу.</p>
          </div>
          <div className="project-card">
            <img src="https://static.euronews.com/articles/stories/07/67/36/40/1200x675_cmsv2_ad3ea8d4-9ecb-5ea3-a8d8-a727183b4a17-7673640.jpg" alt="UBB Solar House" />
            <h3>UBB Solar House</h3>
            <p>Дома с солнечными панелями и системой рекуперации воздуха.</p>
          </div>
          <div className="project-card">
            <img src="https://designerdreamhomes.ru/wp-content/uploads/house-with-green-roof-08.jpg" alt="UBB Green Horizon" />
            <h3>UBB Green Horizon</h3>
            <p>Эко-дома с зелеными крышами и природным ландшафтом.</p>
          </div>
        </div>
      </section>

      {/*юююююююююююююююююююююююююююююююююююююююююююююююююю*/}
      <section className="section">
        <h2>Коммерческая недвижимость</h2>
        <p>Пространства для бизнеса с современной архитектурой и инженерными решениями.</p>
        <div className="project-gallery">
          <div className="project-card">
            <img src="https://digis.kg/upload/iblock/418/czmou4wyp1dtbfpiuus4q6iblgpfmd0e/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%BA%D0%BE%D0%BD%D1%84%D0%B5%D1%80%D0%B5%D0%BD%D1%86_%D0%B7%D0%B0%D0%BB_6.png" alt="UBB Tower Business" />
            <h3>UBB Tower Business</h3>
            <p>Деловой центр с офисами и конференц-залами.</p>
          </div>
          <div className="project-card">
            <img src="https://lh3.googleusercontent.com/proxy/-2LWQFeQbRgZvJ5xS2VAbTlQUus9pm-BuYNCsQwbrtNZRnUsrKhI9LJqX0r7qJ78uorIxyx49_P6KKqz0hZg7_GsYm8_NkUIJHb8aBtnIqeJqZdMyUd3JcBC_6ZyrdAgBw" alt="UBB Plaza" />
            <h3>UBB Plaza</h3>
            <p>Современный торгово-развлекательный комплекс.</p>
          </div>
          <div className="project-card">
            <img src="https://icdn.lenta.ru/images/2015/06/22/16/20150622160109034/pic_fe147dbd3eb3ee51f6a6255d53f0f701.jpg" alt="UBB Commerce Park" />
            <h3>UBB Commerce Park</h3>
            <p>Инновационный бизнес-парк с высококлассными офисами.</p>
          </div>
          <div className="project-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVOygtNd3_XlO1bsvbErDf5Wcr0eZwPIIP7A&s" alt="UBB Business District" />
            <h3>UBB Business District</h3>
            <p>Центр коммерции с удобным доступом к транспорту и инфраструктуре.</p>
          </div>
        </div>
      </section>

      <div className="cta">
        <Link to="/learnMore">
        <button>Узнать больше о проектах</button>
        </Link>
        <Link to="/Review">
          <button style={{ marginLeft: '20px' }}>Оставить заявку</button>
        </Link>
      </div>
    </div>
  );
}

export default Projects;

import React, { useState } from 'react';
import './Rentals.css';

function Rentals() {
  const [price, setPrice] = useState('');
  const [area, setArea] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);

  const cardsData = [
    {
      title: "Ленинский район, Бишкек",
      description:
        "Современные жилые комплексы с детскими площадками и охраняемой территорией.",
      image:
        "https://realt.by/typo3temp/pics/ff/01/ff012aaab099a24656eec6a6e3672779.jpg",
      details:
        "Парковка, школа рядом, супермаркет, детский сад, видеонаблюдение, лифт, охрана 24/7.",
      price: "от 55 000 сом/месяц",
      location: "Бишкек, Ленинский район",
      area: "от 45 м² до 130 м²",
      rooms: "2–5 комнат",
      yearBuilt: "Построено в 2018 году",
    },
    {
      title: "Сулайман-Тоо, Ош",
      description:
        "Коттеджные посёлки в тихом районе у подножия гор. Индивидуальные дома с садом и парковкой.",
      image:
        "https://realt.by/typo3temp/pics/2f/2d/2f2d45743aeb61715d556d175b5b1c9e.jpg",
      details:
        "Зелёная зона, индивидуальный участок, круглогодичный доступ, красивый вид на горы, терраса, гараж.",
      price: "от 80 000 сом/месяц",
      location: "Ош, район Сулайман-Тоо",
      area: "от 90 м² до 200 м²",
      rooms: "3–6 комнат",
      yearBuilt: "Построено в 2020 году",
    },
    {
      title: "Чолпон-Ата, Иссык-Куль",
      description:
        "Элитные дома возле озера. Панорамные окна, тёплые полы, дизайнерская отделка.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      details:
        "Близость к пляжу, тёплый пол, бассейн, зона BBQ, туристический потенциал, балкон с видом на озеро.",
      price: "от 120 000 сом/месяц",
      location: "Чолпон-Ата, Иссык-Куль",
      area: "от 110 м² до 250 м²",
      rooms: "3–5 комнат",
      yearBuilt: "Построено в 2022 году",
    },
    {
      title: "Аламединский район, Бишкек",
      description:
        "Тихий и уютный район с удобной транспортной развязкой и развитой инфраструктурой.",
      image:
        "https://elitka.kg/images/object/78/1.jpg",
      details:
        "Парковка, магазины в шаговой доступности, спортивная площадка, детская зона, развитая инфраструктура.",
      price: "от 60 000 сом/месяц",
      location: "Бишкек, Аламединский район",
      area: "от 50 м² до 140 м²",
      rooms: "2–4 комнаты",
      yearBuilt: "Построено в 2017 году",
    },
    {
      title: "Каракол, Иссык-Кульская область",
      description:
        "Комфортные дома в туристическом городе с видом на горы и удобным доступом к горнолыжным курортам.",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
      details:
        "Рядом горнолыжные трассы, камин, современный интерьер, зона отдыха на крыше, большая кухня.",
      price: "от 100 000 сом/месяц",
      location: "Каракол, Иссык-Куль",
      area: "от 100 м² до 220 м²",
      rooms: "3–5 комнат",
      yearBuilt: "Построено в 2021 году",
    }
  ];

  const openModal = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <section className="rent-section">
        <div className="container">
          <div className="section-header">
            <h2>Аренда недвижимости в Кыргызстане</h2>
            <p>
              Выберите район и найдите лучший вариант для аренды. Мы предлагаем
              качественные дома и квартиры по доступным ценам.
            </p>
          </div>

          <div className="cards">
            {cardsData.map((card, index) => (
              <div className="card" key={index}>
                <img src={card.image} alt={card.title} />
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <button className="btn" onClick={() => openModal(card)}>
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="filter">
            <h3>Фильтровать по цене и площади</h3>
            <form>
              <input
                type="number"
                placeholder="Минимальная цена"
                className="input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="number"
                placeholder="Минимальная площадь"
                className="input"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
              <button type="button" className="btn apply-btn">
                Применить фильтры
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Модальное окно */}
      {selectedCard && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <img src={selectedCard.image} alt={selectedCard.title} />
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.details}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Rentals;

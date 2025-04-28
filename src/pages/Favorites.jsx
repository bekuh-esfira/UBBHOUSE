import React, { useState, useEffect } from "react";
import "./Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState(150000);

  // Load districts data (same as in Districts component)
  const districts = [
    {
      title: "Ленинский район, Бишкек",
      img: "https://realt.by/typo3temp/pics/ff/01/ff012aaab099a24656eec6a6e3672779.jpg",
      desc: "Современные жилые комплексы с детскими площадками и охраняемой территорией. 2–5 комнатные квартиры от 45 м² до 130 м².",
      price: "от 65 000 $",
      location: "г. Бишкек, Ленинский район",
      details: "Развитая инфраструктура, рядом школы и торговые центры."
    },
    {
      title: "Сулайман-Тоо, Ош",
      img: "https://realt.by/typo3temp/pics/2f/2d/2f2d45743aeb61715d556d175b5b1c9e.jpg",
      desc: "Коттеджные посёлки в тихом районе у подножия гор. Индивидуальные дома с садом и парковкой. Площадь от 90 м².",
      price: "от 80 000 $",
      location: "г. Ош, Сулайман-Тоо",
      details: "Живописная природа, 10 минут до центра города."
    },
    {
      title: "Чолпон-Ата, Иссык-Куль",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      desc: "Элитные дома возле озера. Панорамные окна, тёплые полы, дизайнерская отделка. Идеально для загородной жизни или сдачи в аренду.",
      price: "от 120 000 $",
      location: "г. Чолпон-Ата, Иссык-Кульская область",
      details: "Пешая доступность до пляжа, закрытая территория."
    },
    {
      title: "Центральный район, Бишкек",
      img: "https://cdn.realt.by/img/55/03398380-439f-11ef-a7fb-2236ceb6d16d",
      desc: "Современные жилые комплексы с развитой инфраструктурой, магазинами и кафе. Квартиры от 50 м² до 150 м², с балконами и панорамными окнами.",
      price: "от 70 000 $",
      location: "г. Бишкек, Центральный район",
      details: "Центр города, удобный доступ к общественному транспорту."
    },
    {
      title: "Каракол, Иссык-Куль",
      img: "https://cdn.realt.by/img/55/e7393890-9b57-11ef-ae9e-2236ceb6d16d",
      desc: "Домики у подножия гор с живописными видами на озеро. Площадь от 70 м², с террасами и возможностью установки камина.",
      price: "от 85 000 $",
      location: "г. Каракол, Иссык-Кульская область",
      details: "Подходит для зимнего и летнего отдыха, развитая туристическая инфраструктура."
    },
    {
      title: "Ждановка, Бишкек",
      img: "https://cdn.realt.by/img/55/9122875e-7a46-11ef-9550-2236ceb6d16d",
      desc: "Элитные таунхаусы с панорамным видом на город и горы. Площадь от 120 м², два этажа, закрытая охраняемая территория.",
      price: "от 110 000 $",
      location: "г. Бишкек, Ждановка",
      details: "Спокойный район, видеонаблюдение и охрана 24/7."
    },
    {
      title: "Токмок, Чуйская область",
      img: "https://cdn.realt.by/img/55/a172d002-f9ab-11ef-a0d3-2236ceb6d16d",
      desc: "Просторные дома с участками земли в экологически чистом районе. Площадь от 100 м², с зонами для отдыха и садом.",
      price: "от 60 000 $",
      location: "г. Токмок, Чуйская область",
      details: "Свежий воздух, рядом лесополоса, удобный выезд на трассу."
    },
    {
      title: "Нарын, Нарынская область",
      img: "https://static.realt.by/thumb/c/430x374/f03b0ae56c3ec069376e392db68e7fa5/88/0/newb536a9088/f9b2e173d9.jpg",
      desc: "Дома в горной местности, идеальны для любителей природы. Площадь от 80 м², с большими окнами и уютными верандами.",
      price: "от 55 000 $",
      location: "г. Нарын, Нарынская область",
      details: "Идеально для уединения, рядом пастбища и горные тропы."
    },
    {
      title: "Ала-Арча, Бишкек",
      img: "https://realt.by/typo3temp/pics/eb/ac/ebac06d17e09242ea4773452e2cc5fba.jpg",
      desc: "Современные жилые комплексы с высококачественной отделкой и инновационными технологиями. Площадь квартир от 60 м² до 120 м² с большим количеством зелёных зон.",
      price: "от 90 000 $",
      location: "г. Бишкек, посёлок Ала-Арча",
      details: "Закрытая территория, рядом парк и река Ала-Арча."
    },
    {
      title: "Талас, Таласская область",
      img: "https://realt.by/typo3temp/pics/05/d2/05d2bd538661a40154feb4bc773aca64.jpg",
      desc: "Уютные дома с участками земли для ведения садоводства. Площадь от 85 м², с отдельными входами и парковочными местами.",
      price: "от 48 000 $",
      location: "г. Талас, Таласская область",
      details: "Тихое место, идеально для семьи, плодородная земля."
    },
    {
      title: "Кадамжай, Баткенская область",
      img: "https://realt.by/typo3temp/pics/9a/85/9a85cdf654aea0608686a908b29cce2f.jpg",
      desc: "Дома с прекрасными видами на горы, экологически чистая территория. Площадь от 95 м², с участками для озеленения и небольшими садами.",
      price: "от 52 000 $",
      location: "г. Кадамжай, Баткенская область",
      details: "Спокойный климат, удобный доступ к рынку и школам."
    },
    {
      title: "Ош, Ошская область",
      img: "https://realt.by/typo3temp/pics/80/e5/80e530a6f838ab314359699d8e1c47cf.jpg",
      desc: "Уютные квартиры с панорамными окнами и закрытой охраняемой территорией. Площадь от 50 м² до 130 м², с современными удобствами и хорошей транспортной доступностью.",
      price: "от 58 000 $",
      location: "г. Ош, Ошская область",
      details: "Развитый городской район, рядом школы, магазины и парки."
    },
  ];

  // Initialize favorites from liked districts in local storage
  useEffect(() => {
    const likedTitles = JSON.parse(localStorage.getItem("likedDistricts")) || [];
    const likedDistricts = districts.filter((district) =>
      likedTitles.includes(district.title)
    );
    setFavorites(likedDistricts);
  }, []);

  const parsePrice = (priceStr) => {
    const match = priceStr.match(/от\s*([\d\s]+)\s*\$/);
    return match ? parseInt(match[1].replace(/\s/g, "")) : 0;
  };

  const handleRemove = (title) => {
    const updatedFavorites = favorites.filter((district) => district.title !== title);
    setFavorites(updatedFavorites);
    const updatedLikedTitles = updatedFavorites.map((district) => district.title);
    localStorage.setItem("likedDistricts", JSON.stringify(updatedLikedTitles));
  };

  return (
    <div className="favorites-page">
      <h2 className="favorites-title">💖 Избранные дома</h2>

      <div className="filter-bar">
        <label>Макс. цена: {filter.toLocaleString()} $</label>
        <input
          type="range"
          min="40000"
          max="150000"
          step="5000"
          value={filter}
          onChange={(e) => setFilter(parseInt(e.target.value))}
        />
      </div>

      <div className="favorites-list">
        {favorites
          .filter((district) => parsePrice(district.price) <= filter)
          .map((district) => (
            <div className="favorite-item sparkle" key={district.title}>
              <img src={district.img} alt={district.title} className="favorite-img" />
              <div className="favorite-info">
                <h3 className="favorite-name">{district.title}</h3>
                <p className="favorite-price">{district.price}</p>
                <p className="favorite-desc">{district.desc}</p>
                <button
                  className="remove-button"
                  onClick={() => handleRemove(district.title)}
                >
                  Удалить из избранного
                </button>
              </div>
            </div>
          ))}
        {favorites.length === 0 && (
          <p className="no-favorites">Нет избранных домов 😕</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Districts.css";

// function Districts() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [likedDistricts, setLikedDistricts] = useState([]);
//   const [selectedDistrict, setSelectedDistrict] = useState(null);
//   const [bookedDistricts, setBookedDistricts] = useState(
//     JSON.parse(localStorage.getItem("bookedDistricts")) || []
//   );

//   const navigate = useNavigate();

//   const districts = [
//     {
//       title: "Ленинский район, Бишкек",
//       img: "https://realt.by/typo3temp/pics/ff/01/ff012aaab099a24656eec6a6e3672779.jpg",
//       desc: "Современные жилые комплексы с детскими площадками и охраняемой территорией. 2–5 комнатные квартиры от 45 м² до 130 м².",
//       price: "от 65 000 $",
//       location: "г. Бишкек, Ленинский район",
//       details: "Развитая инфраструктура, рядом школы и торговые центры."
//     },
//     {
//       title: "Сулайман-Тоо, Ош",
//       img: "https://realt.by/typo3temp/pics/2f/2d/2f2d45743aeb61715d556d175b5b1c9e.jpg",
//       desc: "Коттеджные посёлки в тихом районе у подножия гор. Индивидуальные дома с садом и парковкой. Площадь от 90 м².",
//       price: "от 80 000 $",
//       location: "г. Ош, Сулайман-Тоо",
//       details: "Живописная природа, 10 минут до центра города."
//     },
//     {
//       title: "Чолпон-Ата, Иссык-Куль",
//       img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
//       desc: "Элитные дома возле озера. Панорамные окна, тёплые полы, дизайнерская отделка. Идеально для загородной жизни или сдачи в аренду.",
//       price: "от 120 000 $",
//       location: "г. Чолпон-Ата, Иссык-Кульская область",
//       details: "Пешая доступность до пляжа, закрытая территория."
//     },
//     {
//       title: "Центральный район, Бишкек",
//       img: "https://cdn.realt.by/img/55/03398380-439f-11ef-a7fb-2236ceb6d16d",
//       desc: "Современные жилые комплексы с развитой инфраструктурой, магазинами и кафе. Квартиры от 50 м² до 150 м², с балконами и панорамными окнами.",
//       price: "от 70 000 $",
//       location: "г. Бишкек, Центральный район",
//       details: "Центр города, удобный доступ к общественному транспорту."
//     },
//     {
//       title: "Каракол, Иссык-Куль",
//       img: "https://cdn.realt.by/img/55/e7393890-9b57-11ef-ae9e-2236ceb6d16d",
//       desc: "Домики у подножия гор с живописными видами на озеро. Площадь от 70 м², с террасами и возможностью установки камина.",
//       price: "от 85 000 $",
//       location: "г. Каракол, Иссык-Кульская область",
//       details: "Подходит для зимнего и летнего отдыха, развитая туристическая инфраструктура."
//     },
//     {
//       title: "Ждановка, Бишкек",
//       img: "https://cdn.realt.by/img/55/9122875e-7a46-11ef-9550-2236ceb6d16d",
//       desc: "Элитные таунхаусы с панорамным видом на город и горы. Площадь от 120 м², два этажа, закрытая охраняемая территория.",
//       price: "от 110 000 $",
//       location: "г. Бишкек, Ждановка",
//       details: "Спокойный район, видеонаблюдение и охрана 24/7."
//     },
//     {
//       title: "Токмок, Чуйская область",
//       img: "https://cdn.realt.by/img/55/a172d002-f9ab-11ef-a0d3-2236ceb6d16d",
//       desc: "Просторные дома с участками земли в экологически чистом районе. Площадь от 100 м², с зонами для отдыха и садом.",
//       price: "от 60 000 $",
//       location: "г. Токмок, Чуйская область",
//       details: "Свежий воздух, рядом лесополоса, удобный выезд на трассу."
//     },
//     {
//       title: "Нарын, Нарынская область",
//       img: "https://static.realt.by/thumb/c/430x374/f03b0ae56c3ec069376e392db68e7fa5/88/0/newb536a9088/f9b2e173d9.jpg",
//       desc: "Дома в горной местности, идеальны для любителей природы. Площадь от 80 м², с большими окнами и уютными верандами.",
//       price: "от 55 000 $",
//       location: "г. Нарын, Нарынская область",
//       details: "Идеально для уединения, рядом пастбища и горные тропы."
//     },
//     {
//       title: "Ала-Арча, Бишкек",
//       img: "https://realt.by/typo3temp/pics/eb/ac/ebac06d17e09242ea4773452e2cc5fba.jpg",
//       desc: "Современные жилые комплексы с высококачественной отделкой и инновационными технологиями. Площадь квартир от 60 м² до 120 м² с большим количеством зелёных зон.",
//       price: "от 90 000 $",
//       location: "г. Бишкек, посёлок Ала-Арча",
//       details: "Закрытая территория, рядом парк и река Ала-Арча."
//     },
//     {
//       title: "Талас, Таласская область",
//       img: "https://realt.by/typo3temp/pics/05/d2/05d2bd538661a40154feb4bc773aca64.jpg",
//       desc: "Уютные дома с участками земли для ведения садоводства. Площадь от 85 м², с отдельными входами и парковочными местами.",
//       price: "от 48 000 $",
//       location: "г. Талас, Таласская область",
//       details: "Тихое место, идеально для семьи, плодородная земля."
//     },
//     {
//       title: "Кадамжай, Баткенская область",
//       img: "https://realt.by/typo3temp/pics/9a/85/9a85cdf654aea0608686a908b29cce2f.jpg",
//       desc: "Дома с прекрасными видами на горы, экологически чистая территория. Площадь от 95 м², с участками для озеленения и небольшими садами.",
//       price: "от 52 000 $",
//       location: "г. Кадамжай, Баткенская область",
//       details: "Спокойный климат, удобный доступ к рынку и школам."
//     },
//     {
//       title: "Ош, Ошская область",
//       img: "https://realt.by/typo3temp/pics/80/e5/80e530a6f838ab314359699d8e1c47cf.jpg",
//       desc: "Уютные квартиры с панорамными окнами и закрытой охраняемой территорией. Площадь от 50 м² до 130 м², с современными удобствами и хорошей транспортной доступностью.",
//       price: "от 58 000 $",
//       location: "г. Ош, Ошская область",
//       details: "Развитый городской район, рядом школы, магазины и парки."
//     },
//   ];

//   const filteredDistricts = districts.filter((district) =>
//     district.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const toggleLike = (title) => {
//     setLikedDistricts((prev) =>
//       prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
//     );
//   };

//   const handleBooking = (district) => {
//     let updatedBookedDistricts;
//     if (bookedDistricts.some((d) => d.title === district.title)) {
//       updatedBookedDistricts = bookedDistricts.filter((d) => d.title !== district.title);
//     } else {
//       updatedBookedDistricts = [...bookedDistricts, district];
//     }
//     setBookedDistricts(updatedBookedDistricts);
//     localStorage.setItem("bookedDistricts", JSON.stringify(updatedBookedDistricts));
//     navigate("/bron", { state: { district } });
//   };

//   const goToFavorites = () => {
//     navigate("/favorites");
//   };

//   return (
//     <section className="districts">
//       <div className="districts-header">
//         <h2>🏘️ Районы Кыргызстана</h2>
//         <input
//           type="text"
//           placeholder="🔍 Поиск по району..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={goToFavorites}>Перейти в избранное</button>
//       </div>

//       <div className="districts-list">
//         {filteredDistricts.length > 0 ? (
//           filteredDistricts.map((district, idx) => (
//             <div className="district-card" key={idx}>
//               <img src={district.img} alt={district.title} />
//               <h3>
//                 {district.title}
//                 <span
//                   className={`heart ${likedDistricts.includes(district.title) ? "liked" : ""}`}
//                   onClick={() => toggleLike(district.title)}
//                   title="Добавить в избранное"
//                 >
//                   ♥
//                 </span>
//               </h3>
//               <p>{district.desc}</p>
//               <div className="buttons">
//                 <button onClick={() => setSelectedDistrict(district)}>Подробнее</button>
//                 <button
//                   className={`district-button ${bookedDistricts.some((d) => d.title === district.title) ? "booked" : ""}`}
//                   onClick={() => handleBooking(district)}
//                 >
//                   {bookedDistricts.some((d) => d.title === district.title) ? "Забронировано" : "Забронировать"}
//                 </button>
//                 <Link to="/rentals">
//                   <button>Аренда</button>
//                 </Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="no-results">Ничего не найдено 😕</p>
//         )}
//       </div>

//       {selectedDistrict && (
//         <div className="modal-overlay" onClick={() => setSelectedDistrict(null)}>
//           <div className="modal" onClick={(e) => e.stopPropagation()}>
//             <h2>{selectedDistrict.title}</h2>
//             <img src={selectedDistrict.img} alt={selectedDistrict.title} />
//             <p>{selectedDistrict.desc}</p>
//             <p>{selectedDistrict.price}</p>
//             <p>{selectedDistrict.location}</p>
//             <p>{selectedDistrict.details}</p>
//             <button className="close-btn" onClick={() => setSelectedDistrict(null)}>
//               Закрыть
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Districts;





import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Districts.css";

function Districts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [likedDistricts, setLikedDistricts] = useState(
    JSON.parse(localStorage.getItem("likedDistricts")) || []
  );
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [bookedDistricts, setBookedDistricts] = useState(
    JSON.parse(localStorage.getItem("bookedDistricts")) || []
  );

  const navigate = useNavigate();

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

  useEffect(() => {
    localStorage.setItem("likedDistricts", JSON.stringify(likedDistricts));
  }, [likedDistricts]);

  const filteredDistricts = districts.filter((district) =>
    district.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleLike = (title) => {
    setLikedDistricts((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const handleBooking = (district) => {
    let updatedBookedDistricts;
    if (bookedDistricts.some((d) => d.title === district.title)) {
      updatedBookedDistricts = bookedDistricts.filter((d) => d.title !== district.title);
    } else {
      updatedBookedDistricts = [...bookedDistricts, district];
    }
    setBookedDistricts(updatedBookedDistricts);
    localStorage.setItem("bookedDistricts", JSON.stringify(updatedBookedDistricts));
    navigate("/bron", { state: { district } });
  };

  const goToFavorites = () => {
    navigate("/favorites");
  };

  return (
    <section className="districts">
      <div className="districts-header">
        <h2>🏘️ Районы Кыргызстана</h2>
        <input
          type="text"
          placeholder="🔍 Поиск по району..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={goToFavorites}>Перейти в избранное</button>
      </div>

      <div className="districts-list">
        {filteredDistricts.length > 0 ? (
          filteredDistricts.map((district, idx) => (
            <div className="district-card" key={idx}>
              <img src={district.img} alt={district.title} />
              <h3>
                {district.title}
                <span
                  className={`heart ${likedDistricts.includes(district.title) ? "liked" : ""}`}
                  onClick={() => toggleLike(district.title)}
                  title="Добавить в избранное"
                >
                  ♥
                </span>
              </h3>
              <p>{district.desc}</p>
              <div className="buttons">
                <button onClick={() => setSelectedDistrict(district)}>Подробнее</button>
                <button
                  className={`district-button ${bookedDistricts.some((d) => d.title === district.title) ? "booked" : ""}`}
                  onClick={() => handleBooking(district)}
                >
                  {bookedDistricts.some((d) => d.title === district.title) ? "Забронировано" : "Забронировать"}
                </button>
                <Link to="/rentals">
                  <button>Аренда</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">Ничего не найдено 😕</p>
        )}
      </div>

      {selectedDistrict && (
        <div className="modal-overlay" onClick={() => setSelectedDistrict(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedDistrict.title}</h2>
            <img src={selectedDistrict.img} alt={selectedDistrict.title} />
            <p>{selectedDistrict.desc}</p>
            <p>{selectedDistrict.price}</p>
            <p>{selectedDistrict.location}</p>
            <p>{selectedDistrict.details}</p>
            <button className="close-btn" onClick={() => setSelectedDistrict(null)}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Districts;
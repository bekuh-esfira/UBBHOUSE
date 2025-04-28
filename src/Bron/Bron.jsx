import React, { useState } from "react";
import  './Booked.css'

function Booked() {
  const [bookedDistricts, setBookedDistricts] = useState(
    JSON.parse(localStorage.getItem("bookedDistricts")) || []
  );

  return (
    <section className="booked">
      <h2>🏠 Забронированные районы</h2>
      {bookedDistricts.length > 0 ? (
        <div className="booked-list">
          {bookedDistricts.map((district, idx) => (
            <div className="booked-card" key={idx}>
              <img src={district.img} alt={district.title} />
              <h3>{district.title}</h3>
              <p>{district.desc}</p>
              <p>{district.price}</p>
              <button
                onClick={() => {
                  setBookedDistricts(bookedDistricts.filter((_, i) => i !== idx));
                  localStorage.setItem("bookedDistricts", JSON.stringify(bookedDistricts.filter((_, i) => i !== idx)));
                }}
              >
                Удалить из забронированных
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-bookings">Нет забронированных районов 😕</p>
      )}
    </section>
  );
}

export default Booked;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { categoryName } = useParams();
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://path.to.your/api'; // Путь к твоему API

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        const filtered = data.filter(
          (house) => house.category.toLowerCase() === categoryName.toLowerCase()
        );
        setHouses(filtered);
        setLoading(false);
      })
      .catch((error) => {
        setError(`Не удалось загрузить данные: ${error.message}`);
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div className="category-page">
      <h1>Категория: {categoryName}</h1>
      <div className="houses-list">
        {houses.length === 0 ? (
          <p>Нет домов в этой категории.</p>
        ) : (
          houses.map((house) => (
            <div key={house.id} className="house-card">
              <img src={house.img} alt={house.title} />
              <h3>{house.title}</h3>
              <p>{house.desc}</p>
              <p>Цена: {house.price}</p>
              <h4>Локация: {house.location}</h4>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CategoryPage;

import React, { useState } from 'react';
import "./Reviev.css";

const initialReviews = [
  { name: 'Анна', text: 'Очень понравился проект UBB Sky Villas! Всё качественно и удобно.', project: 'UBB Sky Villas' },
  { name: 'Илья', text: 'Отличная команда и современный подход к строительству.', project: 'UBB Modern Town' },
  { name: 'Марина', text: 'Рекомендую! Особенно понравился проект Green Line.', project: 'Green Line' },
  { name: 'Алексей', text: 'UBBHomes — это воплощение качества и стиля! Дом получился именно таким, как мечтали.', project: 'Family Comfort' },
  { name: 'Светлана', text: 'Очень довольны строительством! Всё на высоком уровне — от проекта до сдачи ключей.', project: 'UBB Premium Homes' },
  { name: 'Дмитрий', text: 'Современные технологии, внимательное отношение к деталям. Настоящие профессионалы!', project: 'TechBuild' },
  { name: 'Наталья', text: 'Наш дом от UBBHomes — это уют, надёжность и эстетика. Спасибо всей команде!', project: 'UBB Family House' },
  { name: 'Руслан', text: 'Огромное спасибо за качественную работу! Проект "UBB Family House" превзошёл ожидания.', project: 'UBB Family House' },
  { name: 'Ольга', text: 'Очень понравился сервис и скорость работы. Дом построили быстрее, чем планировали!', project: 'FastHome' },
  { name: 'Евгений', text: 'Архитектура, материалы, подход — всё на высоте. Чувствуется, что компания заботится о клиенте.', project: 'Design District' },
  { name: 'Кристина', text: 'UBBHomes умеют строить не просто дома, а пространство для жизни. Очень довольны!', project: 'UBB Sky Villas' },
  { name: 'Тимур', text: 'Спасибо за качественный подход и внимание к нашим пожеланиям. Настоящие мастера!', project: 'Eco Build' },
  { name: 'Вероника', text: 'От проекта до финиша — всё идеально. Жить в таком доме — настоящее удовольствие.', project: 'Green Line' }
];

function ReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && text.trim()) {
      setReviews([{ name, text, project: 'Без указания' }, ...reviews]);
      setName('');
      setText('');
    }
  };

  return (
    <div className="reviews-page">
      <h1>Отзывы клиентов UBBHomes</h1>

      <form className="review-form" onSubmit={handleSubmit}>
        <h2>Оставьте свой отзыв</h2>
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Ваш отзыв..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <button type="submit">Добавить отзыв</button>
      </form>

      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <h3>{review.name}</h3>
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
            <p className="location">🏠 Проект: {review.project}</p>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsPage;

import houses from '../data/houses.json';

// Получить все категории домов
export const getCategories = async () => {
  try {
    // Берём все уникальные категории из массива домов
    const categories = [...new Set(houses.map(house => house.категория))];
    return categories;
  } catch (error) {
    console.error('Ошибка при загрузке категорий:', error);
    throw error;
  }
};

// Получить дома по выбранной категории
export const getCategoryHouses = async (category) => {
  try {
    // Фильтруем дома по категории
    const categoryHouses = houses.filter(house => house.категория === category);
    return categoryHouses;
  } catch (error) {
    console.error('Ошибка при загрузке домов по категории:', error);
    throw error;
  }
};

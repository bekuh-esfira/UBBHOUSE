// import React from "react";
// import { useNavigate } from "react-router-dom";
// import houses from "../../data/houses.json";
// import "./Categories.css";

// function Categories() {
//   const navigate = useNavigate();
//   const categories = [...new Set(houses.map((house) => house.category))];

//   return (
//     <div className="categories-page">
//      <Link to="/CategoryPage">
//      <h2>🏡 Категории домов</h2>
//      </Link> 
//       <div className="category-list">
//         {categories.map((cat, idx) => (
//           <button
//             key={idx}
//             onClick={() => navigate(`/categories/${encodeURIComponent(cat)}`)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Categories;

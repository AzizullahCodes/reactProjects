import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const categories = [
    "computers",
    "shoes",
    "clothes",
    "books",
    "mobiles"
  ];

  return (
    <div className="home">

      <h1>Welcome To ShopEasy</h1>

      <p>
        Choose Your Favorite Category
      </p>

      <div className="category-grid">

        {categories.map((category) => (
          <Link
            key={category}
            to={`/category/${category}`}
            className="category-card"
          >
            {category.toUpperCase()}
          </Link>
        ))}

      </div>

    </div>
  );
}

export default Home;
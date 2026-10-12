import { Link } from "react-router-dom";

function DishCard({ dish }) {
  return (
    <Link to={`/dish/${dish.id}`} className="dish-card">
      <h3>{dish.name}</h3>
      <p>Rs. {dish.price.toFixed(2)}</p>
      <small>
        {dish.category}
        {!dish.available && <span className="sold-out"> — Sold out</span>}
      </small>
    </Link>
  );
}

export default DishCard;

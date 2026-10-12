import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function DishDetailPage() {
  const { id } = useParams();
  const { data: dishes, isLoading, error } = useFetch("/menu.json");

  const dish = (dishes || []).find((item) => item.id === Number(id));

  if (isLoading) {
    return (
      <div className="detail-container">
        <h2>Dish Details</h2>
        <p>Loading dish details…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="detail-container">
        <h2>Dish Details</h2>
        <p>Could not load dish details: {error}</p>
      </div>
    );
  }

  if (!dish) {
    return (
      <div className="detail-container">
        <h2>Dish Details</h2>
        <p>No dish found for this selection.</p>
        <Link to="/">← Back to menu</Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <p className="detail-badge">{dish.category}</p>
      <h2>{dish.name}</h2>
      <p className="detail-price">Rs. {dish.price.toFixed(2)}</p>
      <p className="detail-status">
        {dish.available ? "Available now" : "Currently unavailable"}
      </p>
      <p className="detail-description">
        {dish.available
          ? `${dish.name} is a popular ${dish.category.toLowerCase()} option with a fresh campus-style preparation.`
          : `${dish.name} is currently unavailable, but it is still listed under ${dish.category.toLowerCase()} for future orders.`}
      </p>
      <Link to="/">← Back to menu</Link>
    </div>
  );
}

export default DishDetailPage;




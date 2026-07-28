import { useState } from "react";
import Button from "../Button/Button";
import "./Cards.css";
import DummyImg from "./flower_pic.png";
import { useNavigate } from "react-router-dom";

function Cards({
  id,
  name,
  colors,
  cost,
  rating,
  reviews,
  owner,
}) {
  const navigate = useNavigate();

  const [currentRating, setCurrentRating] = useState(rating);

  return (
    <div className="categories-card">
      <img src={DummyImg} alt={name} className="flower_img" />

      <div className="rating-info">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= currentRating ? "star active" : "star"}
            onClick={() => setCurrentRating(star)}
          >
            ★
          </span>
        ))}
      </div>

      <h2>{name}</h2>

      <p>
        <strong>Colors:</strong>
        <span>{colors?.join(", ")}</span>
      </p>

      <p>
        <strong>Cost:</strong>
        <span>₹{cost}</span>
      </p>

      <p>
        <strong>Reviews:</strong>
        <span>{reviews}</span>
      </p>

      <p>
        <strong>Owner:</strong>
        <span>{owner?.name}</span>
      </p>

      <div className="card-actions">
        <Button
          title="Know More"
          onClick={() => navigate(`/categories/${id}`)}
        />
      </div>
    </div>
  );
}

export default Cards;
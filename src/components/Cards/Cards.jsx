import { useState } from "react";
import Button from "../Button/Button";
import "./Cards.css";
import { useNavigate } from "react-router-dom";

function Cards({
  id,
  name,
  colors,
  cost,
  rating,
  reviews,
  owner,
  image,
}) {
  const navigate = useNavigate();

  const [currentRating, setCurrentRating] = useState(rating);

  return (
    <div className="categories-card">

      {/* Flower Image */}
      <div className="flower-image-box">
        <img
          src={image}
          alt={name}
          className="flower_img"
        />
      </div>

      {/* Rating */}
      <div className="rating-info">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={
              star <= currentRating
                ? "star active"
                : "star"
            }
            onClick={() => setCurrentRating(star)}
          >
            ★
          </span>
        ))}
      </div>

      {/* Flower Name */}
      <h2 className="flower-title">
        {name}
      </h2>

      {/* Flower Information */}
      <div className="flower-info">

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

      </div>

      {/* Button */}
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
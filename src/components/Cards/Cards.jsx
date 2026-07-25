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

  return (
    <div className="categories-card">
      <img src={DummyImg} alt="Categories" className="flower_img" />

      <h2>{name}</h2>

      <p>Colors: {colors?.join(", ")}</p>

      <p>Cost: ₹{cost}</p>

      <p className="rating-info">{rating}/5</p>

      <p>Review: {reviews}</p>

      <p>Owner: {owner?.name}</p>

      <div className="card-actions">
        <Button
          title="Know More"
          onClick={() => {
            navigate(`/categories/${id}`);
          }}
        />
      </div>
    </div>
  );
}

export default Cards;
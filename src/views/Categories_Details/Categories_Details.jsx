import { useEffect, useState } from "react";
import "./Categories_Details.css";
import { useParams } from "react-router-dom";
import DummyImg from "./flower_pic.png";
import { CATEGORIES } from "../../data";

function Categories_Details() {
  const { id } = useParams();
  const [categories_Details, setCategories_Details] = useState({});

  useEffect(() => {
    const categories = CATEGORIES.find(
      (prop) => prop.id === parseInt(id)
    );

    if (categories) {
      setCategories_Details(categories);
    }
  }, [id]);

  return (
    <div className="details-page">

      {/* Top Section */}
      <div className="top-section">
       

        <img
          src={DummyImg}
          alt="Flower"
          className="flower-img"
        />

        <h2 className="flower-name">
          {categories_Details.name}
        </h2>
      </div>

      {/* Cards */}
      <div className="cards-container">

        {/* Flower Details Card */}
        <div className="details-card">

          <h2 className="card-heading">
            🌼 Flower Information
          </h2>

          <div className="info-box">

            <p>
              <span>🎨 Colors :</span>
              {categories_Details.colors?.join(", ")}
            </p>

            <p>
              <span>🎉 Festivals :</span>
              {categories_Details.festivals?.join(", ")}
            </p>

            <p>
              <span>🎭 Theme :</span>
              {categories_Details.theme}
            </p>

            <p>
              <span>💰 Cost :</span>
              ₹{categories_Details.cost}
            </p>

            <p>
              <span>📂 Category :</span>
              {categories_Details.categoryType}
            </p>

            <p>
              <span>🌺 Decoration :</span>
              {categories_Details.decoration}
            </p>

            <p>
              <span>🏡 Use In :</span>
              {categories_Details.useIn?.join(", ")}
            </p>

            <p>
              <span>💍 Ceremony :</span>
              {categories_Details.ceremony?.join(", ")}
            </p>

            <p>
              <span>⭐ Rating :</span>
              {categories_Details.rating}
            </p>

            <p>
              <span>📝 Reviews :</span>
              {categories_Details.reviews}
            </p>

          </div>
        </div>

        {/* Owner Card */}
        <div className="owner-card">

          <h2>👨‍🌾 Owner Details</h2>

          <div className="owner-info">

            <p>
              <span>👤 Name :</span>
              {categories_Details.owner?.name}
            </p>

            <p>
              <span>📞 Phone :</span>
              {categories_Details.owner?.phone}
            </p>

            <p>
              <span>📧 Email :</span>
              {categories_Details.owner?.email}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Categories_Details;
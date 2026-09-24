
import { useEffect, useState } from "react";
import "./Categories_Details.css";
import { useParams } from "react-router-dom";

import {
  CATEGORIES,
  FLOWER_IMAGES
} from "../../data";

function Categories_Details() {

  const { id } = useParams();

  const [categories_Details, setCategories_Details] =
    useState({});

  const [currentImage, setCurrentImage] =
    useState("");


  useEffect(() => {

    // Details page open hote hi page top par jayega
    window.scrollTo(0, 0);

    const categories = CATEGORIES.find(
      (prop) => prop.id === parseInt(id)
    );

    if (categories) {

      setCategories_Details(categories);

      const images = FLOWER_IMAGES[categories.id];

      if (Array.isArray(images)) {

        setCurrentImage(images[0]);

      } else if (images) {

        setCurrentImage(images);

      } else {

        setCurrentImage("");

      }

    }

  }, [id]);


  const images = FLOWER_IMAGES[categories_Details.id];

  const photos = Array.isArray(images)
    ? images
    : images
      ? [images]
      : [];


  return (
    <div className="details-page">


      {/* =========================
            TOP SECTION
      ========================= */}

      <div className="top-section">


        {/* MAIN IMAGE */}

        {currentImage && (
          <img
            src={currentImage}
            alt={categories_Details.name || "Flower"}
            className="flower-img"
          />
        )}


        {/* =========================
             SUB IMAGES
        ========================= */}

        {photos.length > 0 && (
          <div className="gallery-container">

            {photos.map((photo, index) => (

              <img
                key={index}
                src={photo}
                alt={`${categories_Details.name || "Flower"} ${index + 1}`}
                className={
                  currentImage === photo
                    ? "gallery-small-img active-image"
                    : "gallery-small-img"
                }
                onClick={() => setCurrentImage(photo)}
              />

            ))}

          </div>
        )}


        {/* FLOWER NAME */}

        <h2 className="flower-name">
          {categories_Details.name}
        </h2>

      </div>


      {/* =========================
            ALL CARDS
      ========================= */}

      <div className="cards-container">


        {/* =========================
          FLOWER INFORMATION
        ========================= */}

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


        {/* =========================
             OWNER DETAILS
        ========================= */}

        <div className="owner-card">

          <h2>
            👨‍🌾 Owner Details
          </h2>


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

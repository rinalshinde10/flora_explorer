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
    <div>
      <h1>Flower Details</h1>

      <img src={DummyImg} alt="Categories" className="flower-img" />

      <h2>{categories_Details.name}</h2>

      <p>Colors : {categories_Details.colors?.join(", ")}</p>

      <p>Festivals : {categories_Details.festivals?.join(", ")}</p>

      <p>Theme : {categories_Details.theme}</p>

      <p>Cost : ₹{categories_Details.cost}</p>

      <p>Category Type : {categories_Details.categoryType}</p>

      <p>Decoration : {categories_Details.decoration}</p>

      <p>Use In : {categories_Details.useIn?.join(", ")}</p>

      <p>Ceremony : {categories_Details.ceremony?.join(", ")}</p>

      <p>Rating : ⭐ {categories_Details.rating}</p>

      <p>Reviews : {categories_Details.reviews}</p>

      <p>Owner Name : {categories_Details.owner?.name}</p>

      <p>Owner Phone : {categories_Details.owner?.phone}</p>

      <p>Owner Email : {categories_Details.owner?.email}</p>
    </div>
  );
}

export default Categories_Details;
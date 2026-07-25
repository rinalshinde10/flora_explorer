import { useState } from "react";
import "./Categories_Details.css";
import { useParams } from "react-router-dom";
import DummyImg from "./flower_pic.png";

function Categories_Details() {
  const { id } = useParams();
  const [categories_Details, setCategories_Details] = useState({});

  return (
    <div>
      <h1>Flower Details</h1>
      <h2>Flower ID : {id}</h2>
      <img src={DummyImg} alt="Categories" className="flower-img" />

    </div>
  );
}

export default Categories_Details;
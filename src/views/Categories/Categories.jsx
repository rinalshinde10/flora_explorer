import "./Categories.css";
import { CATEGORIES, FLOWER_IMAGES } from "../../data";
import Cards from "../../components/Cards/Cards";
import { useEffect, useState } from "react";
import Input from "./../../components/Input/Input";


function Categories() {
const [categories, setCategories] = useState(CATEGORIES);
const [searchTerm, setSearchTerm] = useState("");

useEffect(() => {}, [searchTerm]);

  return (
    <div>

      <h1>Categories</h1>
      <Input />

      <div className="categories-container">

        {categories.map((categoriesObj) => {

          const {
            id,
            name,
            colors,
            cost,
            rating,
            reviews,
            owner,
          } = categoriesObj;

          return (
            <Cards
              key={id}
              id={id}
              name={name}
              colors={colors}
              cost={cost}
              rating={rating}
              reviews={reviews}
              owner={owner}
              image={FLOWER_IMAGES[id]}
            />
          );

        })}

      </div>

    </div>
  );
}

export default Categories;
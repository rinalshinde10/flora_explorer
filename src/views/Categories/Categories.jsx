import "./Categories.css";
import { CATEGORIES } from "../../data";
import Cards from "../../components/Cards/Cards";

function Categories() {
  return (
    <div>
      <h1>Categories</h1>

      <div className="categories-container">
        {CATEGORIES.map((categoriesObj) => {
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
            />
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
import "./Categories.css";
import { CATEGORIES } from "../../data";
import Cards from "../../components/Cards/Cards";

function Categories() {
  return (
    <div>
      <h1>Categories</h1>

      {CATEGORIES.map((categoriesObj) => {
        const {
          id,
          name,
          colors,
          festivals,
          theme,
          cost,
          categoryType,
          decoration,
          useIn,
          ceremony,
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
            festivals={festivals}
            theme={theme}
            cost={cost}
            categoryType={categoryType}
            decoration={decoration}
            useIn={useIn}
            ceremony={ceremony}
            rating={rating}
            reviews={reviews}
            owner={owner}
          />
        );
      })}
    </div>
  );
}

export default Categories;
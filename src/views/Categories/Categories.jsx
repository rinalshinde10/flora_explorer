import "./Categories.css";
import { CATEGORIES, FLOWER_IMAGES } from "../../data";
import Cards from "../../components/Cards/Cards";
import { useEffect, useState } from "react";
import Input from "./../../components/Input/Input";
import Select from "./../../components/Select/Select";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Categories() {
  const [categories, setCategories] = useState(CATEGORIES);
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredValues, setFilteredValues] = useState({
    name: "",
    colors: "",
    cost: ""
  });

  // Convert colors into separate values
  const getColors = (colors) => {
    if (Array.isArray(colors)) {
      return colors
        .flatMap((color) => String(color).split(","))
        .map((color) => color.trim())
        .filter((color) => color !== "");
    }

    return String(colors)
      .split(",")
      .map((color) => color.trim())
      .filter((color) => color !== "");
  };

  // FILTER DATA
  useEffect(() => {
    let filteredCategories = [...CATEGORIES];

    // SEARCH FILTER
    if (searchTerm.trim() !== "") {
      const searchText = searchTerm.toLowerCase().trim();

      filteredCategories = filteredCategories.filter((category) => {
        const name = String(category.name).toLowerCase();

        const colors = getColors(category.colors)
          .join(" ")
          .toLowerCase();

        const cost = String(category.cost);

        return (
          name.includes(searchText) ||
          colors.includes(searchText) ||
          cost.includes(searchText)
        );
      });
    }

    // FLOWER NAME FILTER
    if (filteredValues.name !== "") {
      filteredCategories = filteredCategories.filter(
        (category) =>
          String(category.name).toLowerCase() ===
          filteredValues.name.toLowerCase()
      );
    }

    // COLOR FILTER
    if (filteredValues.colors !== "") {
      filteredCategories = filteredCategories.filter((category) => {
        const categoryColors = getColors(category.colors);

        return categoryColors.some(
          (color) =>
            color.toLowerCase() ===
            filteredValues.colors.toLowerCase()
        );
      });
    }

    // COST FILTER
    if (filteredValues.cost !== "") {
      filteredCategories = filteredCategories.filter(
        (category) =>
          Number(category.cost) ===
          Number(filteredValues.cost)
      );
    }

    setCategories(filteredCategories);
  }, [searchTerm, filteredValues]);

  // UNIQUE FLOWER NAME LIST
  const nameList = [
    ...new Set(
      CATEGORIES.map((category) => category.name)
    )
  ];

  // UNIQUE COLOR LIST
  const colorsList = [
    ...new Set(
      CATEGORIES.flatMap((category) =>
        getColors(category.colors)
      )
    )
  ];

  // UNIQUE COST LIST
  const costList = [
    ...new Set(
      CATEGORIES.map((category) => category.cost)
    )
  ].sort((a, b) => Number(a) - Number(b));

  // CLEAR ALL FILTERS
  const clearFilters = () => {
    setFilteredValues({
      name: "",
      colors: "",
      cost: ""
    });

    setSearchTerm("");
  };

  return (
    <div className="categories-page">

      {/* =========================
            NAVBAR
      ========================= */}

      <Navbar />


      {/* =========================
            SEARCH
      ========================= */}

      <div className="search-container">

        <Input
          placeholder="Search For Flower"
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />

      </div>


      {/* =========================
            FILTERS
      ========================= */}

      <div className="filters-container">

        {/* FLOWER NAME */}
        <div className="filter-box">

          <Select
            value={filteredValues.name}
            onChange={(e) =>
              setFilteredValues({
                ...filteredValues,
                name: e.target.value
              })
            }
            options={nameList}
            placeholder="Select Flower"
          />

        </div>


        {/* COLOR */}
        <div className="filter-box">

          <Select
            value={filteredValues.colors}
            onChange={(e) =>
              setFilteredValues({
                ...filteredValues,
                colors: e.target.value
              })
            }
            options={colorsList}
            placeholder="Select Colors"
          />

        </div>


        {/* COST */}
        <div className="filter-box">

          <Select
            value={filteredValues.cost}
            onChange={(e) =>
              setFilteredValues({
                ...filteredValues,
                cost: e.target.value
              })
            }
            options={costList}
            placeholder="Select Cost"
          />

        </div>


        {/* CLEAR FILTER BUTTON */}
        <button
          className="clear-filter-button"
          onClick={clearFilters}
        >
          Clear Filters
        </button>

      </div>


      {/* =========================
            FLOWER CARDS
      ========================= */}

      <div className="categories-container">

        {categories.length > 0 ? (

          categories.map((category) => {

            const {
              id,
              name,
              colors,
              cost,
              rating,
              reviews,
              owner
            } = category;

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

          })

        ) : (

          <h2 className="no-flowers-found">
            No Flowers Found
          </h2>

        )}

      </div>


      {/* =========================
            FOOTER
      ========================= */}

      <Footer />

    </div>
  );
}

export default Categories;
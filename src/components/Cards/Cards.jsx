import "./Cards.css";

function Cards({
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
}) {
  return (
    <div className="categories-card">
      <h2>{name}</h2>

      <p>Colors: {colors?.join(", ")}</p>

      <p>Festivals: {festivals?.join(", ")}</p>

      <p>Theme: {theme}</p>

      <p>Cost: ₹{cost}</p>

      <p>Type: {categoryType}</p>

      <p>Decoration: {decoration}</p>

      <p>Used: {useIn?.join(", ")}</p>

      <p>Ceremony: {ceremony?.join(", ")}</p>

      <p>Rating: {rating}</p>

      <p>Review: {reviews}</p>

      <p>Owner: {owner?.name}</p>
    </div>
  );
}

export default Cards;
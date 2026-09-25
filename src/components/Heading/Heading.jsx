import "./Heading.css";

function Heading({ title, subtitle }) {
    return (
        <div className="heading-container">
            <h1 className="heading-title">{subtitle}</h1>
        </div>
    );
}
export default Heading;
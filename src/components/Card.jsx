// Props: image, title, onClick
import "./../styles/Card.css"; // Assuming you have styles for Card component
function Card({ image, title, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
export default Card;

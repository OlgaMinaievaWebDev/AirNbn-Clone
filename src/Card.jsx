import katie from "./assets/katie-zaferes.png";
import star from "./assets/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={katie} className="card--image" alt="main card image" />
      <div className="card--stats">
        <img src={star} className="card--star" alt="star icon" />
        <span>{props.rating}</span>
        <span className="grey">{props.reviewCount} •  </span>
        <span className="grey">{props.country}</span>
      </div>
      <h2>{props.title}</h2>
      <p>
        <span className="bold">{props.price}</span>/ person
      </p>
    </div>
  );
}

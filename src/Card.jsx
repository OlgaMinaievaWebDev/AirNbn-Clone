export default function Card(props) {
 let badgeText;
 if (props.openSpots === 0) {
   badgeText = "SOLD OUT";
 } else if (props.location === "Online") {
   badgeText = "ONLINE";
 }
  return (
    <div className="card">
      {props.openSpots === 0 && <div className="card--badge">Sold Out</div>}
      <img src={`../public/images/${props.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src="../public/images/star.png" className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

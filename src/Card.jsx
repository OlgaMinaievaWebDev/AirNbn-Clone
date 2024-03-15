import katie from './assets/katie-zaferes.png'
import star from './assets/star.png'

export default function Card() {
 return (
   <div className="card">
     <img src={katie} className="card--image" />
     <div className="card--stats">
       <img src={star} className="card--star" />
       <span>5.0</span>
       <span className="grey">(6) • </span>
       <span className="grey">USA</span>
     </div>
     <p>Life Lessons with Katie Zaferes</p>
     <p>
       <span className="bold">From $136 </span>/ person
     </p>
   </div>
 );
}
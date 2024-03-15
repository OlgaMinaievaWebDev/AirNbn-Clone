import katie from './assets/katie-zaferes.png'
import star from './assets/star.png'

export default function Card() {
 return (
   <div className="card">
     <img src={katie} className="card--image" alt='main card image'/>
     <div className="card--stats">
       <img src={star} className="card--star" alt='star icon' />
       <span>5.0</span>
       <span className="grey">(6) • </span>
       <span className="grey">USA</span>
     </div>
     <h2>Life Lessons with Katie Zaferes</h2>
     <p>
       <span className="bold">From $136 </span>/ person
     </p>
   </div>
 );
}
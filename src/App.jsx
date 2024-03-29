import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <Card
        key ={item.id}
        {...item}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

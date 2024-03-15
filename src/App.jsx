import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'

function App() {
  

  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img="./assets/katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="Canada"
        title="Life Lessons with Katie Zaferes"
        price = {136}
      />
    </div>
  );
}

export default App

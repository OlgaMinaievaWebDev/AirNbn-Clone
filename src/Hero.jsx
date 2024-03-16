import image from '../public/images/photo-grid.png'


export default function Hero() {
  return (
    <section className='hero'>
      <img src={image} className='hero--photo'/>
      <h1 className='hero--header'>Online Experiences</h1>
      <p className='hero--text'>
        Join unique interactive led by one-of-a-kind host-all without leaving
        home.
      </p>
    </section>
  );
}

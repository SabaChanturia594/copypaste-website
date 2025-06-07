import ProductGrid from '../components/ProductGrid';
import styles from '../styles/Home.module.css';
import productImg from '../assets/images/js.png';

const sampleProducts = Array(20).fill({
  id: '1',
  title: 'React UI Kit',
  description: 'A clean and flexible UI Kit for React.',
  price: '$15',
  views: 123,
  image: productImg,
});

export default function Home() {
  return (
    <div className={`${styles.home} py-5`}>
      <section className={styles.hero}>
        <h1>Build faster with <span>BitPack</span></h1>
        <p>Your store for developer scripts, modules & code packs.</p>
        <button>Explore Now</button>
      </section>
      <section>
        <h2>Popular Products</h2>
        <ProductGrid products={sampleProducts} />
      </section>
      
    </div>
  );
}

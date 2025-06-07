import ProductGrid from '../components/ProductGrid';
import styles from '../styles/Products.module.css';
import productImg from '../assets/images/js.png';

const allProducts = Array(12).fill().map((_, idx) => ({
  id: String(idx + 1),
  title: `Product #${idx + 1}`,
  description: 'Reusable code for your next project.',
  price: idx % 2 === 0 ? 'Free' : `$${(idx + 1) * 3}`,
  views: Math.floor(Math.random() * 100),
  image: productImg,
}));

export default function Products() {
  return (
    <div className={`${styles.products} mt-5`}>
      <h1>All Products</h1>
      <ProductGrid products={allProducts} />
    </div>
  );
}

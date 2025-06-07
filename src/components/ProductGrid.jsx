import ProductCard from './ProductCard';
import styles from '../styles/ProductGrid.module.css';

export default function ProductGrid({ products }) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

import { useParams } from 'react-router-dom';
import styles from '../styles/ProductDetails.module.css';

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div className={styles.details}>
      <h1>Product #{id}</h1>
      <p>Detailed information about this product will be shown here.</p>
    </div>
  );
}

import { useNavigate } from 'react-router-dom';
import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ id, title, description, price, views, image }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className={`${styles.card} cursor-pointer`}
    >
      <img src={image} alt={title} />

      <h3>{title}</h3>
      <p>{description}</p>

      <div className={styles.footer}>
        <span>{price}</span>
        <span>👁 {views}</span>
      </div>

      <div className={styles.viewMore}>View Details</div>
    </div>
  );
}

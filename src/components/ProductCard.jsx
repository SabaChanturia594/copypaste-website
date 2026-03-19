import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/productCard.module.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const lang = pathname.startsWith("/en") ? "en" : "ka";

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={product.image} alt={product.title || "Product"} loading="lazy" />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{product.title}</h3>

        {product.price ? <div className={styles.price}>{product.price}</div> : null}

        <button
          className={styles.detailsBtn}
          type="button"
          onClick={() => navigate(`/${lang}/product/${product.id}`)}
        >
          {lang === "ka" ? "დეტალურად" : "View details"}
        </button>
      </div>
    </article>
  );
}
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from '../styles/ProductDetails.module.css';
import productImg from '../assets/images/js.png';

/**
 * ✅ ეს არის დროებითი კატალოგი (იგივე ლოგიკით როგორც Products-ში).
 * მერე ამას Backend/DB-დან წამოვიღებთ.
 */
const allProducts = Array(12).fill().map((_, idx) => ({
  id: String(idx + 1),
  title: `Poster Design #${idx + 1}`,
  description: 'Ready design poster • A4 / A3 / A3+',
  price: `${15 + (idx % 5) * 5} ₾`,
  views: 120 + idx * 7,
  image: productImg,
}));

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const lang = pathname.startsWith('/en') ? 'en' : 'ka';

  const t = {
    ka: {
      back: 'უკან დაბრუნება',
      title: 'პოსტერის დეტალები',
      size: 'ზომები',
      paper: 'ქაღალდი',
      note: 'ეს არის ჩვენი დიზაინის პოსტერი. სურვილისამებრ შეგვიძლია ჩარჩოთიც.',
      cta: 'ნახე კიდევ პოსტერები',
      sizes: 'A4 / A3 / A3+',
      papers: 'პრიალა ან მატოვი',
    },
    en: {
      back: 'Back',
      title: 'Poster details',
      size: 'Sizes',
      paper: 'Paper',
      note: 'This is one of our ready designs. Framing options can be added later.',
      cta: 'Browse more posters',
      sizes: 'A4 / A3 / A3+',
      papers: 'Glossy or matte',
    },
  }[lang];

  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className={`${styles.productDetails} mt-5`}>
        <h1>{t.title}</h1>
        <p className={styles.muted}>
          {lang === 'ka' ? 'პროდუქტი ვერ მოიძებნა.' : 'Product not found.'}
        </p>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          {t.back}
        </button>
      </div>
    );
  }

  return (
    <div className={`${styles.productDetails} mt-5`}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        ← {t.back}
      </button>

      <div className={styles.card}>
        <div className={styles.imageWrap}>
          <img src={product.image} alt={product.title} />
        </div>

        <div className={styles.info}>
          <h1 className={styles.h1}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>

          <div className={styles.row}>
            <span className={styles.label}>{t.size}</span>
            <span className={styles.value}>{t.sizes}</span>
          </div>

          <div className={styles.row}>
            <span className={styles.label}>{t.paper}</span>
            <span className={styles.value}>{t.papers}</span>
          </div>

          <div className={styles.priceRow}>
            <div className={styles.price}>{product.price}</div>
            <div className={styles.views}>
              {lang === 'ka' ? 'ნახვები' : 'Views'}: {product.views}
            </div>
          </div>

          <p className={styles.note}>{t.note}</p>

          <button
            className={styles.ctaBtn}
            onClick={() => navigate('/products')}
          >
            {t.cta}
          </button>
        </div>
      </div>
    </div>
  );
}

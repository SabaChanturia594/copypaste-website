import ProductGrid from '../components/ProductGrid';
import styles from '../styles/Home.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';
import p4 from '../assets/images/p4.png';
import p5 from '../assets/images/p5.png';
import p6 from '../assets/images/p6.png';
import p7 from '../assets/images/p7.png';


/**
 * ✅ არ შევცვალე: კლასები, სტრუქტურა, ProductGrid, sampleProducts სახელი.
 * ✅ დავამატე:
 *  - Home grid-ზე ფოტოები იცვლება (p1,p2,p3...)
 *  - CTA გადადის სწორ ენაზე: /ka/products ან /en/products
 */
const TEXT = {
  ka: {
    heroTitle: 'ატვირთე ფოტო და',
    heroTitleAccent: 'მოარგე ჩარჩოს',
    heroSubtitle:
      'შექმენი შენი პოსტერი A4–დან A3+–მდე • პრიალა ან მატოვი • ჩარჩო / პასპარტუ',
    cta: 'ნახე ჩვენი დიზაინის პოსტერები',
    popular: 'პოპულარული პოსტერები',
    cardDesc: 'მზად დიზაინი • A4 / A3 / A3+',
  },
  en: {
    heroTitle: 'Upload your photo &',
    heroTitleAccent: 'choose a frame',
    heroSubtitle:
      'Create your poster from A4 to A3+ • Glossy or matte • Frame / mat options',
    cta: 'Browse our poster designs',
    popular: 'Popular posters',
    cardDesc: 'Ready designs • A4 / A3 / A3+',
  },
};

const IMAGES = [p1, p2, p3, p4, p5, p6, p7];
function imageByIndex(idx) {
  return IMAGES[idx % IMAGES.length];
}

// ❗ sampleProducts სახელი უცვლელია
const sampleProducts = Array.from({ length: 9 }, (_, i) => ({
  id: String(i + 1),
  title: `Poster Design #${i + 1}`,
  description: '',
  price: `${15 + (i % 5) * 5} ₾`,
  image: imageByIndex(i), // ✅ აქ იცვლება ფოტოები
}));

export default function Home() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const lang = pathname.startsWith('/en') ? 'en' : 'ka';
  const t = TEXT[lang];

  const localizedProducts = sampleProducts.map((p) => ({
    ...p,
    description: t.cardDesc,
  }));

  return (
    <div className={`${styles.home} py-5`}>
      <section className={styles.hero}>
        <h1>
          {t.heroTitle} <span>{t.heroTitleAccent}</span>
        </h1>
        <p>{t.heroSubtitle}</p>

        {/* ✅ CTA სწორ ენაზე */}
        <button onClick={() => navigate(`/${lang}/products`)}>
          {t.cta}
        </button>
      </section>

      <section>
        <h2>{t.popular}</h2>
        <ProductGrid products={localizedProducts} />
      </section>
    </div>
  );
}

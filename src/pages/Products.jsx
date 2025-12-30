import ProductGrid from '../components/ProductGrid';
import styles from '../styles/Products.module.css';
import { useLocation } from 'react-router-dom';

import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';

/**
 * ❗ არ შეცვლილა:
 * - allProducts სახელი
 * - ProductGrid
 * - styles.products
 *
 * ✅ გამზადებულია:
 * - ყველა ქარდი განსხვავებულია
 * - ორენოვანი
 * - ფოტოები ბრუნავს (p1,p2,p3...)
 */

const IMAGES = [p1, p2, p3];

function imageByIndex(idx) {
  return IMAGES[idx % IMAGES.length];
}

const TITLES = [
  { ka: 'აბსტრაქტული ტალღები', en: 'Abstract Waves' },
  { ka: 'თბილისი ღამით', en: 'Tbilisi at Night' },
  { ka: 'მინიმალური ხაზები', en: 'Minimal Lines' },
  { ka: 'საბავშვო Safari', en: 'Kids Safari' },
  { ka: 'ქალაქის სტილი', en: 'City Style' },
  { ka: 'ფერადი ფორმები', en: 'Color Shapes' },
  { ka: 'გეომეტრია', en: 'Geometry' },
  { ka: 'მთები და ბუნება', en: 'Mountains & Nature' },
  { ka: 'Vintage პლაკატი', en: 'Vintage Poster' },
  { ka: 'ტიპოგრაფია', en: 'Typography' },
  { ka: 'მხიარული ფერები', en: 'Happy Colors' },
  { ka: 'შავი-თეთრი მინიმალი', en: 'Black & White Minimal' },
];

const PRICES = ['15 ₾', '20 ₾', '25 ₾', '30 ₾', '35 ₾'];

function viewsByIndex(idx) {
  return 90 + idx * 11 + (idx % 3) * 9;
}

// ❗ allProducts — სახელი უცვლელია
const allProducts = Array(12)
  .fill()
  .map((_, idx) => ({
    id: String(idx + 1),
    title: 'Poster', // რეალურად ქვემოთ ენის მიხედვით იცვლება
    description: '',
    price: PRICES[idx % PRICES.length],
    views: viewsByIndex(idx),
    image: imageByIndex(idx), // ✅ აქ იცვლება ფოტოები
    metaTitle: TITLES[idx % TITLES.length], // ✅ აქაც safe არის
  }));

export default function Products() {
  const { pathname } = useLocation();
  const lang = pathname.startsWith('/en') ? 'en' : 'ka';

  const t = {
    ka: {
      title: 'ჩვენი დიზაინის პოსტერები',
      desc: 'აირჩიე კატალოგიდან და შეუკვეთე სასურველი ზომით.',
      cardDesc: 'მზად დიზაინი • A4 / A3 / A3+',
    },
    en: {
      title: 'Our Poster Designs',
      desc: 'Browse our catalog and order in your preferred size.',
      cardDesc: 'Ready designs • A4 / A3 / A3+',
    },
  }[lang];

  const localizedProducts = allProducts.map((p, idx) => ({
    ...p,
    title:
      lang === 'ka'
        ? `${p.metaTitle.ka} #${idx + 1}`
        : `${p.metaTitle.en} #${idx + 1}`,
    description: t.cardDesc,
  }));

  return (
    <div className={`${styles.products} mt-5`}>
      <h1>{t.title}</h1>
      <p style={{ marginTop: '8px', color: '#475569' }}>{t.desc}</p>
      <ProductGrid products={localizedProducts} />
    </div>
  );
}

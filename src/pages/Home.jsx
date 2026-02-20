import { useLocation, Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import { DATA } from "../data/productsData";
import { useCart } from "../context/CartContext";

function getLang(pathname) {
  const seg = pathname.split("/").filter(Boolean)[0];
  return seg === "en" ? "en" : "ka";
}

function pickFeatured() {
  const out = [];

  // აიღე 1-2 პროდუქტი რამდენიმე კატეგორიიდან
  const keys = Object.keys(DATA);
  for (const key of keys) {
    const list = DATA[key];
    if (Array.isArray(list) && list.length) {
      const first = list[0];
      out.push({ categoryKey: key, ...first, routeId: `${key}-${first.id}` });
    }
    if (out.length >= 6) break;
  }

  return out;
}

export default function Home() {
  const { pathname } = useLocation();
  const lang = getLang(pathname);
  const base = `/${lang}`;

  const { addToCart } = useCart();

  const t = {
    ka: {
      title: "Print Studio Copy Paste",
      sub: "პოსტერები • კარიკატურები • მაისურები • კალენდრები და სხვა",
      featured: "პოპულარული",
      details: "დეტალურად",
      add: "კალათაში",
      products: "პროდუქცია",
    },
    en: {
      title: "Copy Paste",
      sub: "Posters • Caricatures • T-Shirts • Calendars & more",
      featured: "Featured",
      details: "View details",
      add: "Add to cart",
      products: "Products",
    },
  }[lang];

  const featured = pickFeatured();

  return (
    <main className={styles.page}>
      {/* HERO (თუ შენთან სხვაა, დატოვე შენი სტრუქტურა; აქ მაგალითია) */}
      <section className={styles.hero}>
        <h1>{t.title}</h1>
        <p>{t.sub}</p>

        <Link className={styles.heroBtn} to={`${base}/products`}>
          {t.products}
        </Link>
      </section>

      {/* FEATURED */}
      <section className={styles.section}>
        <div className={styles.head}>
          <h2>{t.featured}</h2>
          <Link to={`${base}/products`}>{t.products} →</Link>
        </div>

        <div className={styles.grid}>
          {featured.map((p) => (
            <article key={p.routeId} className={styles.card}>
              <div className={styles.imgWrap}>
                <img className={styles.img} src={p.img} alt={p.title} />
              </div>

              <div className={styles.body}>
                <h3>{p.title}</h3>
                <div className={styles.price}>{p.price}</div>

                <div className={styles.actions}>
                  <Link className={styles.detailsBtn} to={`${base}/product/${p.routeId}`}>
                    {t.details}
                  </Link>

                  <button
                    className={styles.cartBtn}
                    type="button"
                    onClick={() =>
                      addToCart({
                        routeId: p.routeId,
                        title: p.title,
                        price: p.price,
                        img: p.img,
                      })
                    }
                  >
                    {t.add}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

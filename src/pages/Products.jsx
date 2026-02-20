import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/Products.module.css";

import { CATEGORIES, DATA } from "../data/productsData";
import { useCart } from "../context/CartContext";

function getLang(pathname) {
  const seg = pathname.split("/").filter(Boolean)[0];
  return seg === "en" ? "en" : "ka";
}

export default function Products() {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const lang = getLang(pathname);
  const base = `/${lang}`;

  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);

  const t = {
    ka: {
      title: "პროდუქცია",
      subtitle:
        "თქვენი დიზაინის შესაკვეთად დაგვიკავშირდით მეილზე ან WhatsApp",
      cta: "კონტაქტი",
      details: "დეტალურად",
      add: "კალათაში",
      added: "დაემატა ✓",
    },
    en: {
      title: "Products",
      subtitle:
        "To order your design, contact us via email or WhatsApp.",
      cta: "Contact",
      details: "View details",
      add: "Add to cart",
      added: "Added ✓",
    },
  }[lang];

  const label = (c) => (lang === "en" ? c.en : c.ka);

  const scrollToKey = (key) => {
    document.getElementById(key)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Supports /products?cat=posters
  useEffect(() => {
    const params = new URLSearchParams(search);
    const cat = params.get("cat");
    if (!cat) return;

    const normalized = cat === "business" ? "businessCards" : String(cat).trim();
    if (document.getElementById(normalized)) {
      requestAnimationFrame(() => scrollToKey(normalized));
    }
  }, [search]);

  const onAdd = (routeId, p) => {
    addToCart({
      routeId,
      title: p.title,
      price: p.price,
      img: p.img,
    });

    setAddedId(routeId);
    window.setTimeout(() => setAddedId(null), 1100);
  };

  return (
    <main className={styles.page}>
      {/* TOP */}
      <header className={styles.top}>
        <div className={styles.topInner}>
          <div>
            <h1 className={styles.title}>{t.title}</h1>
            <p className={styles.subtitle}>{t.subtitle}</p>
          </div>

          <button
            type="button"
            className={styles.topCta}
            onClick={() => navigate(`${base}/contact`)}
          >
            {t.cta}
          </button>
        </div>
      </header>

      {/* CHIPS */}
      <nav className={styles.chipsWrap} aria-label="Categories">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            type="button"
            className={styles.chip}
            onClick={() => scrollToKey(c.key)}
          >
            {label(c)}
          </button>
        ))}
      </nav>

      {/* SECTIONS */}
      <div className={styles.sections}>
        {CATEGORIES.map((c) => {
          const items = DATA[c.key] || [];

          return (
            <section key={c.key} id={c.key} className={styles.section}>
              <div className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>{label(c)}</h2>
              </div>

              <div className={styles.grid}>
                {items.map((p) => {
                  const routeId = `${c.key}-${p.id}`;

                  return (
                    <article key={routeId} className={styles.card}>
                      <div className={styles.imgWrap}>
                        <img
                          className={styles.img}
                          src={p.img}
                          alt={p.title}
                          loading="lazy"
                        />
                      </div>

                      <div className={styles.body}>
                        <h3 className={styles.cardTitle}>{p.title}</h3>
                        <div className={styles.price}>{p.price}</div>

                        <div className={styles.actions}>
                          <Link
                            className={styles.detailsBtn}
                            to={`${base}/product/${routeId}`}
                          >
                            {t.details}
                          </Link>

                          <button
                            type="button"
                            className={styles.addBtn}
                            onClick={() => onAdd(routeId, p)}
                          >
                            {addedId === routeId ? t.added : t.add}
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
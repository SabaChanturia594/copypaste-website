import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/Products.module.css";

import { CATEGORIES, DATA } from "../data/productsData";

function getLang(pathname) {
  const seg = pathname.split("/").filter(Boolean)[0];
  return seg === "en" ? "en" : "ka";
}

export default function Products() {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const lang = getLang(pathname);
  const base = `/${lang}`;

  const t = {
    ka: {
      title: "პროდუქცია",
      subtitle:
        "თქვენი დიზაინის შესაკვეთად დაგვიკავშირდით მეილზე ან WhatsApp-ზე",
      cta: "კონტაქტი",
      details: "დეტალურად",
    },
    en: {
      title: "Products",
      subtitle:
        "To order your design, contact us via email or WhatsApp.",
      cta: "Contact",
      details: "View details",
    },
  }[lang];

  const label = (c) => (lang === "en" ? c.en : c.ka);

  const scrollToKey = (key) => {
    document.getElementById(key)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(search);
    const cat = params.get("cat");
    if (!cat) return;

    const normalized =
      cat === "business" ? "businessCards" : String(cat).trim();

    if (document.getElementById(normalized)) {
      requestAnimationFrame(() => scrollToKey(normalized));
    }
  }, [search]);

  return (
    <main className={styles.page}>
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

      <div className={styles.sections}>
        {CATEGORIES.map((c) => {
          const items = DATA[c.key] || [];

          return (
            <section key={c.key} id={c.key} className={styles.section}>
              <div className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>{label(c)}</h2>
              </div>

              <div className={styles.grid}>
                {items.map((p, index) => {
                  const routeId = `${c.key}-${p.id || index + 1}`;

                  return (
                    <article key={`${routeId}-${index}`} className={styles.card}>
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
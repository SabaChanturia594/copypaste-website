// src/pages/ProductDetails.jsx

import { useLocation, useParams, Link } from "react-router-dom";
import { useState } from "react";
import { getProductByRouteId, getCategoryLabel } from "../data/productsData";
import styles from "../styles/ProductDetails.module.css";
import { useCart } from "../context/CartContext";

function getLang(pathname) {
  const seg = pathname.split("/").filter(Boolean)[0];
  return seg === "en" ? "en" : "ka";
}

export default function ProductDetails() {
  const { id } = useParams(); // App.jsx-ში :id არის
  const { pathname } = useLocation();

  const lang = getLang(pathname);
  const base = `/${lang}`;

  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const t = {
    ka: {
      notFoundTitle: "ვერ მოიძებნა",
      notFoundText: "პროდუქტი ვერ მოიძებნა.",
      backToProducts: "პროდუქციაზე დაბრუნება",
      back: "უკან",
      details: "დეტალები",
      material: "მასალა",
      sizes: "ზომები",
      printer: "ბეჭდვა",
      note: "შენიშვნა",
      add: "კალათაში დამატება",
      added: "დაემატა ✓",
    },
    en: {
      notFoundTitle: "Not found",
      notFoundText: "Product not found.",
      backToProducts: "Back to products",
      back: "Back",
      details: "Details",
      material: "Material",
      sizes: "Sizes",
      printer: "Printer",
      note: "Note",
      add: "Add to cart",
      added: "Added ✓",
    },
  }[lang];

  const product = getProductByRouteId(id);

  const onAdd = () => {
    addToCart({
      routeId: id,
      title: product.title,
      price: product.price,
      img: product.img,
    });

    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);

    // თუ გინდა რომ დაუყოვნებლივ კალათაზე გადაიყვანოს, ჩართე:
    // navigate(`${base}/cart`);
  };

  if (!product) {
    return (
      <main className={styles.page}>
        <div className={styles.shell}>
          <div className={styles.empty}>
            <h1 className={styles.title}>{t.notFoundTitle}</h1>
            <p className={styles.sub}>{t.notFoundText}</p>
            <Link className={styles.backBtn} to={`${base}/products`}>
              {t.backToProducts}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const catLabel = getCategoryLabel(product.categoryKey, lang);

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.top}>
          <div>
            <div className={styles.kicker}>{catLabel}</div>
            <h1 className={styles.title}>{product.title}</h1>
            <div className={styles.price}>{product.price}</div>
          </div>

          <Link className={styles.backLink} to={`${base}/products`}>
            {t.back}
          </Link>
        </div>

        <div className={styles.grid}>
          <section className={styles.media}>
            <div className={styles.imgWrap}>
              <img className={styles.img} src={product.img} alt={product.title} />
            </div>

            {Array.isArray(product.badges) && product.badges.length > 0 && (
              <div className={styles.badges}>
                {product.badges.map((b) => (
                  <span key={b} className={styles.badge}>
                    {b}
                  </span>
                ))}
              </div>
            )}
          </section>

          <section className={styles.panel}>
            <h2 className={styles.h2}>{t.details}</h2>

            <div className={styles.rows}>
              <div>
                <span>{t.material}</span>
                <p>{product.details?.material || "—"}</p>
              </div>
              <div>
                <span>{t.sizes}</span>
                <p>{product.details?.sizes || "—"}</p>
              </div>
              <div>
                <span>{t.printer}</span>
                <p>{product.details?.printer || "—"}</p>
              </div>
              <div>
                <span>{t.note}</span>
                <p>{product.details?.note || "—"}</p>
              </div>
            </div>

            <button className={styles.cartBtn} type="button" onClick={onAdd}>
              {added ? t.added : t.add}
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}

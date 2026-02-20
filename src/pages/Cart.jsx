import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "../styles/Cart.module.css";

function getLang(pathname) {
  const seg = pathname.split("/").filter(Boolean)[0];
  return seg === "en" ? "en" : "ka";
}

export default function Cart() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const lang = getLang(pathname);
  const base = `/${lang}`;

  const { items, removeFromCart, incQty, decQty, clearCart, total } = useCart();

  const t = {
    ka: {
      title: "კალათა",
      emptyTitle: "კალათა ცარიელია",
      emptyText: "დაამატე პროდუქტები და მერე გადადი გადახდაზე.",
      goProducts: "პროდუქციაზე გადასვლა",
      remove: "წაშლა",
      clear: "კალათის გასუფთავება",
      total: "ჯამი",
      checkout: "გადახდაზე გადასვლა",
      continue: "შოპინგის გაგრძელება",
      qty: "რაოდენობა",
      currency: "₾",
    },
    en: {
      title: "Cart",
      emptyTitle: "Your cart is empty",
      emptyText: "Add items and then proceed to checkout.",
      goProducts: "Go to products",
      remove: "Remove",
      clear: "Clear cart",
      total: "Total",
      checkout: "Proceed to checkout",
      continue: "Continue shopping",
      qty: "Quantity",
      currency: "₾",
    },
  }[lang];

  if (!items.length) {
    return (
      <main className={styles.page}>
        <div className={styles.shell}>
          <div className={styles.empty}>
            <h1>{t.emptyTitle}</h1>
            <p>{t.emptyText}</p>
            <button
              className={styles.primary}
              type="button"
              onClick={() => navigate(`${base}/products`)}
            >
              {t.goProducts}
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.top}>
          <h1 className={styles.title}>{t.title}</h1>

          <div className={styles.topActions}>
            <Link className={styles.linkBtn} to={`${base}/products`}>
              {t.continue}
            </Link>

            <button className={styles.ghost} type="button" onClick={clearCart}>
              {t.clear}
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          <section className={styles.list}>
            {items.map((item) => (
              <article key={item.routeId} className={styles.item}>
                <div className={styles.thumbWrap}>
                  <img className={styles.thumb} src={item.img} alt={item.title} />
                </div>

                <div className={styles.meta}>
                  <div className={styles.row1}>
                    <div>
                      <h3 className={styles.name}>{item.title}</h3>
                      <div className={styles.price}>{item.price}</div>
                    </div>

                    <button
                      className={styles.remove}
                      type="button"
                      onClick={() => removeFromCart(item.routeId)}
                    >
                      {t.remove}
                    </button>
                  </div>

                  <div className={styles.row2}>
                    <div className={styles.qty}>
                      <span>{t.qty}</span>
                      <div className={styles.stepper}>
                        <button type="button" onClick={() => decQty(item.routeId)}>
                          −
                        </button>
                        <div>{item.qty}</div>
                        <button type="button" onClick={() => incQty(item.routeId)}>
                          +
                        </button>
                      </div>
                    </div>

                    <div className={styles.subtotal}>
                      {(Number(String(item.price).replace(/[^\d.]/g, "")) || 0) *
                        (item.qty || 1)}{" "}
                      {t.currency}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <aside className={styles.summary}>
            <div className={styles.sumCard}>
              <div className={styles.sumTitle}>{t.total}</div>
              <div className={styles.sumValue}>
                {total} {t.currency}
              </div>

              {/* Checkout შემდეგ ეტაპზე გავაკეთებთ. ახლა უბრალოდ place-holder */}
              <button
                type="button"
                className={styles.primary}
                onClick={() => alert(lang === "en" ? "Checkout next step" : "Checkout შემდეგ ეტაპზე")}
              >
                {t.checkout}
              </button>

              <p className={styles.note}>
                {lang === "en"
                  ? "Guest checkout — account not required."
                  : "შეგიძლია იყიდო ლოგინის გარეშე (Guest checkout)."}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

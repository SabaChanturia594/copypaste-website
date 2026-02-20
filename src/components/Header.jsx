import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Header.module.css';
import logo from '../assets/images/logo.png';
import { useCart } from "../context/CartContext";

function getLang(pathname) {
  const seg = pathname.split('/').filter(Boolean)[0];
  return seg === 'en' ? 'en' : 'ka';
}

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const lang = getLang(pathname);
  const base = `/${lang}`;
  const { count } = useCart();

  const [menuOpen, setMenuOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const prodRef = useRef(null);
  const langRef = useRef(null);

  const t = {
    ka: {
      home: 'მთავარი',
      products: 'პროდუქტები',
      items: {
        posters: 'პოსტერები',
        caricatures: 'კარიკატურები',
        tshirts: 'მაისურები',
        shirts: 'პერანგები',
        bags: 'ჩანთები',
        calendars: 'კალენდრები',
        mugs: 'ჭიქები',
        shirts: 'პერანგები',
        bags: 'ჩანთები',
      },
      contact: 'კონტაქტი',
    },
    en: {
      home: 'Home',
      products: 'Products',
      items: {
        posters: 'Posters',
        caricatures: 'Caricatures',
        tshirts: 'T-Shirts',
        shirts: 'Shirts',
        bags: 'Bags',
        calendars: 'Calendars',
        mugs: 'Mugs',
        shirts: 'Shirts',
        bags: 'Bags',
      },
      contact: 'Contact',
    },
  }[lang];

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
    setProdOpen(false);
    setLangOpen(false);
  };

  const switchLang = (lng) => {
    if (lng === lang) return;
    navigate(pathname.replace(`/${lang}`, `/${lng}`));
    setLangOpen(false);
    setMenuOpen(false);
    setProdOpen(false);
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setProdOpen(false);
    setLangOpen(false);
  };

  const onProductClick = () => {
    setMenuOpen(false);
    setProdOpen(false);
  };

  // ✅ close dropdowns on outside click
  useEffect(() => {
    const onDown = (e) => {
      if (prodRef.current && !prodRef.current.contains(e.target)) setProdOpen(false);
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);

  // ✅ close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        closeAllMenus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // ✅ body scroll lock when menu is open (mobile)
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (!menuOpen || !isMobile) {
      document.body.style.overflow = "";
      return;
    }

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <Link to={base} onClick={scrollTop} className={styles.logoContainer}>
        <img src={logo} alt="Copy Paste Logo" className={styles.logo} />
      </Link>

      <nav className={styles.nav}>
        {/* LEFT/MAIN LINKS (desktop inline, mobile slide menu) */}
        <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <Link to={base} onClick={scrollTop}>{t.home}</Link>

          {/* Products dropdown */}
          <div ref={prodRef} className={styles.productsWrap}>
            <button
              type="button"
              className={styles.productsBtn}
              onClick={() => setProdOpen(v => !v)}
            >
              {t.products} <span>▾</span>
            </button>

            {prodOpen && (
              <div className={styles.productsMenu}>
                <Link to={`${base}/products?cat=posters`} onClick={onProductClick}>
                  {t.items.posters}
                </Link>

                <Link to={`${base}/products?cat=caricatures`} onClick={onProductClick}>
                  {t.items.caricatures}
                </Link>

                <Link to={`${base}/products?cat=tshirts`} onClick={onProductClick}>
                  {t.items.tshirts}
                </Link>

                <Link to={`${base}/products?cat=shirts`} onClick={onProductClick}>
                  {t.items.shirts}
                </Link>

                <Link to={`${base}/products?cat=bags`} onClick={onProductClick}>
                  {t.items.bags}
                </Link>

                <Link to={`${base}/products?cat=calendars`} onClick={onProductClick}>
                  {t.items.calendars}
                </Link>

                <Link to={`${base}/products?cat=mugs`} onClick={onProductClick}>
                  {t.items.mugs}
                </Link>
              </div>
            )}
          </div>

          <Link to={`${base}/contact`} onClick={closeAllMenus}>{t.contact}</Link>

          <Link to={`${base}/cart`} className={styles.cart} onClick={closeAllMenus}>
            🛒
            {count > 0 && <span className={styles.badge}>{count}</span>}
          </Link>
        </div>

        {/* RIGHT ACTIONS (always visible) */}
        <div className={styles.actions}>
          {/* Language always visible */}
          <div ref={langRef} className={styles.langWrap}>
            <button
              type="button"
              className={`${styles.langBtn} ${langOpen ? styles.langBtnOpen : ''}`}
              onClick={() => setLangOpen(v => !v)}
            >
              {lang.toUpperCase()} <span>▾</span>
            </button>

            {langOpen && (
              <div className={styles.langMenu}>
                <button className={styles.langItem} onClick={() => switchLang('ka')}>
                  ქართული <span>{lang === 'ka' && '✓'}</span>
                </button>
                <button className={styles.langItem} onClick={() => switchLang('en')}>
                  English <span>{lang === 'en' && '✓'}</span>
                </button>
              </div>
            )}
          </div>

          {/* burger (3 lines) */}
          <button
            className={`${styles.burger} ${menuOpen ? styles.active : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* overlay for mobile menu */}
        {menuOpen && (
          <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
        )}
      </nav>
    </header>
  );
}
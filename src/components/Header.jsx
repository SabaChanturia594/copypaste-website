import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Header.module.css';
import logo from '../assets/images/logo.png';
import notification from '../assets/images/notification.png';

function getLang(pathname) {
  const seg = pathname.split('/').filter(Boolean)[0];
  return seg === 'en' ? 'en' : 'ka';
}

export default function Header() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const { pathname } = useLocation();
  const lang = getLang(pathname);
  const base = `/${lang}`;

  const t = {
    ka: { home: 'მთავარი', products: 'პოსტერები', contact: 'კონტაქტი' },
    en: { home: 'Home', products: 'Posters', contact: 'Contact' },
  }[lang];

  // ✅ dropdown state
  const [open, setOpen] = useState(false);
  const ddRef = useRef(null);

  // ✅ close on outside click
  useEffect(() => {
    const onDown = (e) => {
      if (!ddRef.current) return;
      if (!ddRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);

  // ✅ close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={styles.header}>
      <Link to={base} onClick={scrollTop}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Copy Paste Logo" className={styles.logo} />
          {/* ❌ ბრენდის ტექსტი ამოვიღე */}
        </div>
      </Link>

      <nav className={styles.nav}>
        <div className={styles.links}>
          <Link to={base} onClick={scrollTop}>{t.home}</Link>
          <Link to={`${base}/products`}>{t.products}</Link>
          <Link to={`${base}/contact`}>{t.contact}</Link>

          {/* ✅ Original language switch (dropdown) */}
          <div ref={ddRef} style={{ position: 'relative', display: 'inline-block' }}>
           <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              style={{
                background: 'transparent',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '6px 10px',
                cursor: 'pointer',
                font: 'inherit',
                color: 'inherit',
                display: 'inline-flex',
                color:'black',
                alignItems: 'center',
                gap: '6px',
              }}
              aria-haspopup="menu"
              aria-expanded={open}
              title="Language"
            >
              {lang === 'ka' ? 'KA' : 'EN'} <span aria-hidden>▾</span>
          </button>


            {open && (
              <div
                role="menu"
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 'calc(100% + 8px)',
                  minWidth: '150px',
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  boxShadow: '0 12px 30px rgba(15, 23, 42, 0.10)',
                  padding: '8px',
                  zIndex: 9999,
                }}
              >
                <Link
                  to="/ka"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    color: '#0f172a',
                  }}
                >
                  ქართული <span style={{ opacity: lang === 'ka' ? 1 : 0.2 }}>✓</span>
                </Link>

                <Link
                  to="/en"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    color: '#0f172a',
                    marginTop: '4px',
                  }}
                >
                  English <span style={{ opacity: lang === 'en' ? 1 : 0.2 }}>✓</span>
                </Link>
              </div>
            )}
          </div>
        </div>

        <img src={notification} alt="notification" />
      </nav>
    </header>
  );
}

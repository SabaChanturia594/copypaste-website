import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Footer.module.css";

function getLang(pathname) {
  const seg = pathname.split("/").filter(Boolean)[0];
  return seg === "en" ? "en" : "ka";
}

export default function Footer() {
  const { pathname } = useLocation();
  const lang = getLang(pathname);
  const base = `/${lang}`;

  const t = {
    ka: {
      about:
        "Copy Paste — პოსტერების ბეჭდვა, ფოტოების დამუშავება და კედლის დეკორი ინდივიდუალური დიზაინით.",
      menu: "მენიუ",
      posters: "პოსტერები",
      builder: "ატვირთე ფოტო",
      contact: "კონტაქტი",
      info: "ინფო",
      addressTitle: "მისამართი",
      addressValue: "ჭავჭავაძის 26, თბილისი",
      hoursTitle: "სამუშაო საათები",
      hoursValue: "ორშ–პარ • 11:00–20:00",
      legal: "წესები და პირობები",
      terms: "მომსახურების პირობები",
      privacy: "კონფიდენციალურობის პოლიტიკა",
      refund: "დაბრუნების პოლიტიკა",
      note: "© 2026 Copy Paste • ყველა უფლება დაცულია",
      extra: "გადახდა და მიწოდება ეტაპობრივად დაემატება",

      // mobile labels
      mobileTitle: "სწრაფი კონტაქტი",
      mobileGift: "საჩუქრები / ბეჭდვა",
      mobileHours: "სამუშაო საათები",
      mobilePhone: "დარეკვა / WhatsApp",
    },
    en: {
      about: "Copy Paste — poster printing, photo processing, and custom wall decor.",
      menu: "Menu",
      posters: "Posters",
      builder: "Upload Photo",
      contact: "Contact",
      info: "Info",
      addressTitle: "Address",
      addressValue: "26 Chavchavadze Ave, Tbilisi",
      hoursTitle: "Working hours",
      hoursValue: "Mon–Fri • 11:00–20:00",
      legal: "Legal",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      refund: "Refund Policy",
      note: "© 2026 Copy Paste • All rights reserved",
      extra: "Payments and delivery options will be added soon",

      // mobile labels
      mobileTitle: "Quick contact",
      mobileGift: "Gifts / Printing",
      mobileHours: "Working hours",
      mobilePhone: "Call / WhatsApp",
    },
  }[lang];

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* ✅ DESKTOP GRID (შენი ძველი) */}
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-logo" />
            <p>{t.about}</p>
          </div>

          <nav className="footer-nav">
            <h4>{t.menu}</h4>
            <Link to={`${base}/posters`}>{t.posters}</Link>
            <Link to={`${base}/builder`}>{t.builder}</Link>
            <Link to={`${base}/contact`}>{t.contact}</Link>
          </nav>

          <div className="footer-info">
            <h4>{t.info}</h4>
            <div className="info-block">
              <span>{t.addressTitle}</span>
              <p>{t.addressValue}</p>
            </div>
            <div className="info-block">
              <span>{t.hoursTitle}</span>
              <p>{t.hoursValue}</p>
            </div>
          </div>

          <div className="footer-legal">
            <h4>{t.legal}</h4>
            <Link to={`${base}/terms`}>{t.terms}</Link>
            <Link to={`${base}/privacy`}>{t.privacy}</Link>
            <Link to={`${base}/refund`}>{t.refund}</Link>
          </div>
        </div>

        {/* ✅ MOBILE FOOTER (სქრინივით) */}
        <div className="footer-mobile">
          <div className="footer-mobile-brand">
            <div className="brand-logo" />
            <p>{t.about}</p>
          </div>

          <div className="footer-mobile-actions">
            <div className="footer-mobile-row">
              <span className="footer-ic">🎁</span>
              <div>
                <div className="footer-mobile-k">{t.mobileGift}</div>
                <div className="footer-mobile-v">
                  <Link to={`${base}/products`}>Products</Link>
                </div>
              </div>
            </div>

            <div className="footer-mobile-row">
              <span className="footer-ic">🕒</span>
              <div>
                <div className="footer-mobile-k">{t.mobileHours}</div>
                <div className="footer-mobile-v">{t.hoursValue}</div>
              </div>
            </div>

            <div className="footer-mobile-row">
              <span className="footer-ic">📞</span>
              <div>
                <div className="footer-mobile-k">{t.mobilePhone}</div>
                <div className="footer-mobile-v">
                  <a href="tel:+995555966815">+995 555 96 68 15</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-mobile-links">
            <Link to={`${base}/terms`}>{t.terms}</Link>
            <Link to={`${base}/privacy`}>{t.privacy}</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t.note}</span>
          <span>{t.extra}</span>
        </div>
      </div>
    </footer>
  );
}
import { useLocation } from "react-router-dom";
import styles from "../styles/Footer.module.css";

import logo from "../assets/images/logo.png";
import facebook from "../assets/images/Facebook.png";
import instagram from "../assets/images/instagram.jpg";
import whatsapp from "../assets/images/whatsapp.png";
import tiktok from "../assets/images/tiktok.png";

function getLang(pathname) {
  const seg = pathname.split("/").filter(Boolean)[0];
  return seg === "en" ? "en" : "ka";
}

export default function Footer() {
  const { pathname } = useLocation();
  const lang = getLang(pathname);

  const t = {
    ka: {
      contacts: "საკონტაქტოები",
      socials: "სოციალური ქსელები",
      phone: "ტელეფონი",
      email: "ელ-ფოსტა",
      address: "მისამართი",
      addressValue: "ჭავჭავაძის 26, თბილისი",
      rights: "© 2026 Copy Paste • ყველა უფლება დაცულია",
    },
    en: {
      contacts: "Contacts",
      socials: "Social media",
      phone: "Phone",
      email: "Email",
      address: "Address",
      addressValue: "26 Chavchavadze Ave, Tbilisi",
      rights: "© 2026 Copy Paste • All rights reserved",
    },
  }[lang];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <img src={logo} alt="Copy Paste Logo" className={styles.logo} />
          </div>

          <div className={styles.block}>
            <h4>{t.contacts}</h4>
            <a href="tel:+995555966815">{t.phone}: +995 555 96 68 15</a>
            <a href="mailto:CopyPasteTbilisi@gmail.com">
              {t.email}: CopyPasteTbilisi@gmail.com
            </a>
            <span>
              {t.address}: {t.addressValue}
            </span>
          </div>

          <div className={styles.block}>
            <h4>{t.socials}</h4>

            <div className={styles.socials}>
              <a
                href="https://www.facebook.com/profile.php?id=61584105217639"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className={styles.social}
              >
                <img src={facebook} alt="Facebook" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className={styles.social}
              >
                <img src={instagram} alt="Instagram" />
              </a>

              <a
                href="https://wa.me/995555966815"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className={styles.social}
              >
                <img src={whatsapp} alt="WhatsApp" />
              </a>

              <a
                href="https://www.tiktok.com/@copypastetbilisi26?lang=en"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className={styles.social}
              >
                <img src={tiktok} alt="TikTok" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>{t.rights}</span>
        </div>
      </div>
    </footer>
  );
}
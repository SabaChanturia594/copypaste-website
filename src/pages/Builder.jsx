import { useLocation } from "react-router-dom";
import styles from "../styles/Builder.module.css";
import ProBuilder from "../components/builders/ProBuilder";

function getLang(pathname) {
  const seg = pathname.split("/").filter(Boolean)[0];
  return seg === "en" ? "en" : "ka";
}

export default function Builder() {
  const { pathname } = useLocation();
  const lang = getLang(pathname);

  const t = {
    ka: {
      title: "მაისურის დიზაინის აწყობა",
      subtitle:
        "ატვირთე ფოტო, დაამატე ტექსტი, მოარგე დიზაინი მაისურის წინა ან უკანა მხარეს და დაასქრინშოთე შეკვეთისთვის.",
    },
    en: {
      title: "T-shirt Design Builder",
      subtitle:
        "Upload an image, add text, place your design on the front or back side, then take a screenshot for ordering.",
    },
  }[lang];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </section>

      <ProBuilder lang={lang} />
    </main>
  );
}
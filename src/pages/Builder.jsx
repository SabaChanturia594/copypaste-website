import { useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/Builder.module.css";
import SimpleBuilder from "../components/builders/SimpleBuilder";
import ProBuilder from "../components/builders/ProBuilder";

function getLang(pathname) {
  const seg = pathname.split("/").filter(Boolean)[0];
  return seg === "en" ? "en" : "ka";
}

export default function Builder() {
  const { pathname } = useLocation();
  const lang = getLang(pathname);
  const [mode, setMode] = useState("simple");

  const t = {
    ka: {
      title: "მაისურის დიზაინის აწყობა",
      subtitle:
        "აირჩიე მარტივი ან პროფესიონალური რეჟიმი და მოარგე დიზაინი მაისურს.",
      simple: "მარტივი დიზაინი",
      pro: "პროფესიონალური დიზაინი",
      simpleDesc: "ატვირთე ერთი დიზაინი და სწრაფად მოარგე მაისურს",
      proDesc:
        "შექმენი დიზაინი რამდენიმე ფოტოთი, ტექსტით და ზუსტი ზომებით",
    },
    en: {
      title: "T-shirt Design Builder",
      subtitle:
        "Choose a simple or professional mode and place your design on a T-shirt.",
      simple: "Simple Design",
      pro: "Professional Design",
      simpleDesc: "Upload one design and quickly place it on a T-shirt",
      proDesc: "Build a design with multiple images, text and exact sizes",
    },
  }[lang];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>

        <div className={styles.modeSwitch}>
          <button
            type="button"
            className={`${styles.modeBtn} ${
              mode === "simple" ? styles.modeBtnActive : ""
            }`}
            onClick={() => setMode("simple")}
          >
            <span className={styles.modeEmoji}>🎨</span>
            <span>{t.simple}</span>
          </button>

          <button
            type="button"
            className={`${styles.modeBtn} ${
              mode === "pro" ? styles.modeBtnActive : ""
            }`}
            onClick={() => setMode("pro")}
          >
            <span className={styles.modeEmoji}>🔥</span>
            <span>{t.pro}</span>
          </button>
        </div>

        <p className={styles.modeDesc}>
          {mode === "simple" ? t.simpleDesc : t.proDesc}
        </p>
      </section>

      {mode === "simple" ? (
        <SimpleBuilder lang={lang} />
      ) : (
        <ProBuilder lang={lang} />
      )}
    </main>
  );
}
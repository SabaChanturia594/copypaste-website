import { useMemo, useRef, useState } from "react";
import html2canvas from "html2canvas";
import styles from "../../styles/Builder.module.css";

import tshirtWhiteFront from "../../assets/mockups/tshirt-white-front.jpg";
import tshirtBlackFront from "../../assets/mockups/tshirt-black-front.jpg";
import tshirtWhiteBack from "../../assets/mockups/tshirt-white-back.png";
import tshirtBlackBack from "../../assets/mockups/tshirt-black-back.png";

const COLORS = [
  { key: "white", label: { ka: "თეთრი", en: "White" } },
  { key: "black", label: { ka: "შავი", en: "Black" } },
];

const SIZES = ["S", "M", "L", "XL", "XXL"];

const MOCKUPS = {
  front: {
    white: tshirtWhiteFront,
    black: tshirtBlackFront,
  },
  back: {
    white: tshirtWhiteBack,
    black: tshirtBlackBack,
  },
};

const PRINT_SIZES_MM = {
  S: { width: 297, height: 420 },
  M: { width: 297, height: 420 },
  L: { width: 297, height: 420 },
  XL: { width: 297, height: 420 },
  XXL: { width: 297, height: 420 },
};

function getPrintArea(size) {
  const map = {
    S: { x: 32, y: 30, w: 38, h: 55 },
    M: { x: 34, y: 30, w: 34, h: 51 },
    L: { x: 36, y: 30, w: 30, h: 47 },
    XL: { x: 37, y: 30, w: 28, h: 43 },
    XXL: { x: 40, y: 30, w: 24, h: 39 },
  };

  return map[size] || map.M;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

function distance(t1, t2) {
  const dx = t2.clientX - t1.clientX;
  const dy = t2.clientY - t1.clientY;
  return Math.sqrt(dx * dx + dy * dy);
}

function getLayerSizeInMM(layer, area, size) {
  const maxMm = PRINT_SIZES_MM[size];
  return {
    widthMM: Math.round((layer.w / area.w) * maxMm.width),
    heightMM: Math.round((layer.h / area.h) * maxMm.height),
  };
}

export default function SimpleBuilder({ lang = "ka" }) {
  const t = {
    ka: {
      color: "ფერი",
      size: "ზომა",
      upload: "დიზაინის ატვირთვა",
      reset: "საწყისზე დაბრუნება",
      remove: "წაშლა",
      download: "სქრინშოტის შენახვა",
      downloading: "იტვირთება...",
      empty: "ატვირთე დიზაინი",
      tip: "მარტივი რეჟიმი — ერთი დიზაინი, სწრაფი მორგება",
      width: "სიგანე",
      height: "სიმაღლე",
      whatsapp: "WhatsApp",
      email: "Email",
      sendTitle: "შეკვეთისთვის გამოგვიგზავნე",
      bigger: "გადიდება",
      smaller: "დაპატარავება",
      rotateLeft: "-90°",
      rotateRight: "90°",
      rotation: "მობრუნება",
      front: "წინა",
      back: "ზურგი",
    },
    en: {
      color: "Color",
      size: "Size",
      upload: "Upload design",
      reset: "Reset",
      remove: "Remove",
      download: "Save screenshot",
      downloading: "Downloading...",
      empty: "Upload a design",
      tip: "Simple mode — one design, quick placement",
      width: "Width",
      height: "Height",
      whatsapp: "WhatsApp",
      email: "Email",
      sendTitle: "Send us your order via",
      bigger: "Bigger",
      smaller: "Smaller",
      rotateLeft: "-90°",
      rotateRight: "90°",
      rotation: "Rotation",
      front: "Front",
      back: "Back",
    },
  }[lang];

  const [side, setSide] = useState("front");
  const [color, setColor] = useState("white");
  const [size, setSize] = useState("M");
  const [designs, setDesigns] = useState({
    front: null,
    back: null,
  });
  const [boxes, setBoxes] = useState({
    front: { x: 30, y: 24, w: 18, h: 18, rotation: 0 },
    back: { x: 30, y: 24, w: 18, h: 18, rotation: 0 },
  });
  const [downloading, setDownloading] = useState(false);
  const [showGuides, setShowGuides] = useState(false);

  const previewRef = useRef(null);
  const gestureRef = useRef({
    mode: null,
    offsetX: 0,
    offsetY: 0,
    startX: 0,
    startY: 0,
    startW: 0,
    startH: 0,
    startDistance: 0,
  });

  const area = useMemo(() => getPrintArea(size), [size]);
  const mockup = MOCKUPS[side][color];
  const design = designs[side];
  const box = boxes[side];

  const getPoint = (clientX, clientY) => {
    const rect = previewRef.current?.getBoundingClientRect();
    if (!rect) return null;

    return {
      x: ((clientX - rect.left) / rect.width) * 100,
      y: ((clientY - rect.top) / rect.height) * 100,
    };
  };

  const clampBox = (next) => {
    const safeW = clamp(next.w, 6, area.w);
    const safeH = clamp(next.h, 6, area.h);

    const maxX = area.x + area.w - safeW;
    const maxY = area.y + area.h - safeH;

    return {
      ...next,
      w: safeW,
      h: safeH,
      x: clamp(next.x, area.x, maxX),
      y: clamp(next.y, area.y, maxY),
    };
  };

  const updateCurrentBox = (updater) => {
    setBoxes((prev) => {
      const current = prev[side];
      const next = typeof updater === "function" ? updater(current) : updater;
      return {
        ...prev,
        [side]: clampBox(next),
      };
    });
  };

  const onUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setDesigns((prev) => ({
        ...prev,
        [side]: reader.result,
      }));

      setShowGuides(true);

      setBoxes((prev) => ({
        ...prev,
        [side]: clampBox({
          x: area.x + 3,
          y: area.y + 3,
          w: Math.min(18, area.w - 4),
          h: Math.min(18, area.h - 4),
          rotation: 0,
        }),
      }));
    };

    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const startDrag = (e) => {
    if (!design) return;
    e.stopPropagation();

    const point = getPoint(
      e.clientX ?? e.touches?.[0]?.clientX,
      e.clientY ?? e.touches?.[0]?.clientY
    );
    if (!point) return;

    setShowGuides(true);
    gestureRef.current = {
      mode: "drag",
      offsetX: point.x - box.x,
      offsetY: point.y - box.y,
      startX: box.x,
      startY: box.y,
      startW: box.w,
      startH: box.h,
      startDistance: 0,
    };
  };

  const startResize = (e) => {
    if (!design) return;
    e.stopPropagation();
    e.preventDefault();

    const point = getPoint(
      e.clientX ?? e.touches?.[0]?.clientX,
      e.clientY ?? e.touches?.[0]?.clientY
    );
    if (!point) return;

    setShowGuides(true);
    gestureRef.current = {
      mode: "resize",
      offsetX: 0,
      offsetY: 0,
      startX: point.x,
      startY: point.y,
      startW: box.w,
      startH: box.h,
      startDistance: 0,
    };
  };

  const onMove = (e) => {
    const g = gestureRef.current;
    if (!g.mode) return;

    const point = getPoint(
      e.clientX ?? e.touches?.[0]?.clientX,
      e.clientY ?? e.touches?.[0]?.clientY
    );
    if (!point) return;

    if (g.mode === "drag") {
      updateCurrentBox((prev) => ({
        ...prev,
        x: point.x - g.offsetX,
        y: point.y - g.offsetY,
      }));
    }

    if (g.mode === "resize") {
      updateCurrentBox((prev) => ({
        ...prev,
        w: g.startW + (point.x - g.startX),
        h: g.startH + (point.y - g.startY),
      }));
    }
  };

  const onTouchStartBox = (e) => {
    if (!design) return;
    setShowGuides(true);

    if (e.touches.length === 1) {
      startDrag(e);
      return;
    }

    if (e.touches.length === 2) {
      gestureRef.current = {
        mode: "pinch",
        offsetX: 0,
        offsetY: 0,
        startX: box.x,
        startY: box.y,
        startW: box.w,
        startH: box.h,
        startDistance: distance(e.touches[0], e.touches[1]),
      };
    }
  };

  const onTouchMove = (e) => {
    const g = gestureRef.current;
    if (!g.mode) return;

    if (g.mode === "pinch" && e.touches.length === 2) {
      const currentDistance = distance(e.touches[0], e.touches[1]);
      const ratio = currentDistance / g.startDistance;

      updateCurrentBox((prev) => ({
        ...prev,
        w: g.startW * ratio,
        h: g.startH * ratio,
      }));
      return;
    }

    onMove(e);
  };

  const stopActions = () => {
    gestureRef.current.mode = null;
  };

  const resizeBy = (dw, dh) => {
    setShowGuides(true);
    updateCurrentBox((prev) => ({
      ...prev,
      w: prev.w + dw,
      h: prev.h + dh,
    }));
  };

  const rotateBy = (deg) => {
    setShowGuides(true);
    updateCurrentBox((prev) => ({
      ...prev,
      rotation: prev.rotation + deg,
    }));
  };

  const resetDesign = () => {
    setShowGuides(true);
    setBoxes((prev) => ({
      ...prev,
      [side]: clampBox({
        x: area.x + 3,
        y: area.y + 3,
        w: Math.min(18, area.w - 4),
        h: Math.min(18, area.h - 4),
        rotation: 0,
      }),
    }));
  };

  const removeDesign = () => {
    setDesigns((prev) => ({
      ...prev,
      [side]: null,
    }));
    setShowGuides(false);
  };

  const mm = design ? getLayerSizeInMM(box, area, size) : null;

  const handleScreenshot = async () => {
    if (!previewRef.current) return;

    const prevGuides = showGuides;
    setShowGuides(false);

    try {
      setDownloading(true);
      await new Promise((r) => setTimeout(r, 50));

      const canvas = await html2canvas(previewRef.current, {
        backgroundColor: "#ffffff",
        scale: 2,
        useCORS: true,
      });

      const link = document.createElement("a");
      link.download = `copy-paste-${side}-${color}-${size}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error(err);
    } finally {
      setDownloading(false);
      setShowGuides(prevGuides);
    }
  };

  return (
    <section className={styles.builderShell}>
      <div className={styles.builderGrid}>
        <aside className={styles.panelCard}>
          <div className={styles.panelScroll}>
            <div className={styles.section}>
              <div className={styles.sectionTitle}>
                <span className={styles.sectionEmoji}>🎨</span>
                <span>{t.color}</span>
              </div>
              <div className={styles.choiceGrid}>
                {COLORS.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    className={`${styles.choiceBtn} ${
                      color === item.key ? styles.choiceBtnActive : ""
                    }`}
                    onClick={() => setColor(item.key)}
                  >
                    {lang === "ka" ? item.label.ka : item.label.en}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionTitle}>
                <span className={styles.sectionEmoji}>📏</span>
                <span>{t.size}</span>
              </div>
              <div className={styles.sizeGrid}>
                {SIZES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`${styles.choiceBtn} ${
                      size === item ? styles.choiceBtnActive : ""
                    }`}
                    onClick={() => setSize(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sideSwitch}>
                <button
                  type="button"
                  className={side === "front" ? styles.activeSide : ""}
                  onClick={() => {
                    setSide("front");
                    setShowGuides(false);
                  }}
                >
                  {t.front}
                </button>

                <button
                  type="button"
                  className={side === "back" ? styles.activeSide : ""}
                  onClick={() => {
                    setSide("back");
                    setShowGuides(false);
                  }}
                >
                  {t.back}
                </button>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionTitle}>
                <span className={styles.sectionEmoji}>🖼️</span>
                <span>{t.upload}</span>
              </div>
              <label className={styles.uploadBox}>
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  className={styles.fileInput}
                  onChange={onUpload}
                />
                <span className={styles.uploadInner}>
                  <span className={styles.toolIcon}>🖼️</span>
                  <span>{t.upload}</span>
                </span>
              </label>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionTitle}>
                <span className={styles.sectionEmoji}>🧰</span>
                <span>Tools</span>
              </div>
              <div className={styles.toolsGrid}>
                <button
                  type="button"
                  className={styles.toolBtn}
                  onClick={() => resizeBy(2, 2)}
                  disabled={!design}
                >
                  {t.bigger}
                </button>
                <button
                  type="button"
                  className={styles.toolBtn}
                  onClick={() => resizeBy(-2, -2)}
                  disabled={!design}
                >
                  {t.smaller}
                </button>
                <button
                  type="button"
                  className={styles.toolBtn}
                  onClick={() => rotateBy(-90)}
                  disabled={!design}
                >
                  {t.rotateLeft}
                </button>
                <button
                  type="button"
                  className={styles.toolBtn}
                  onClick={() => rotateBy(90)}
                  disabled={!design}
                >
                  {t.rotateRight}
                </button>
                <button
                  type="button"
                  className={styles.toolBtn}
                  onClick={resetDesign}
                  disabled={!design}
                >
                  {t.reset}
                </button>
                <button
                  type="button"
                  className={`${styles.toolBtn} ${styles.dangerBtn}`}
                  onClick={removeDesign}
                  disabled={!design}
                >
                  {t.remove}
                </button>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.infoBox}>
                <div className={styles.infoRow}>
                  <span>{t.width}</span>
                  <strong>{mm ? `${mm.widthMM} mm` : "-"}</strong>
                </div>
                <div className={styles.infoRow}>
                  <span>{t.height}</span>
                  <strong>{mm ? `${mm.heightMM} mm` : "-"}</strong>
                </div>
                <div className={styles.infoRow}>
                  <span>{t.rotation}</span>
                  <strong>{design ? `${box.rotation}°` : "-"}</strong>
                </div>
              </div>
              <p className={styles.tip}>{t.tip}</p>
            </div>
          </div>
        </aside>

        <section className={styles.previewSection}>
          <div className={styles.previewCard}>
            <div
              ref={previewRef}
              className={styles.preview}
              onMouseMove={onMove}
              onMouseUp={stopActions}
              onMouseLeave={stopActions}
              onTouchMove={onTouchMove}
              onTouchEnd={stopActions}
              onClick={() => setShowGuides(false)}
            >
              <img
                src={mockup}
                alt={`tshirt ${side} ${color}`}
                className={styles.mockup}
                draggable={false}
              />

              {showGuides && design && (
                <div
                  className={styles.printArea}
                  style={{
                    left: `${area.x}%`,
                    top: `${area.y}%`,
                    width: `${area.w}%`,
                    height: `${area.h}%`,
                  }}
                />
              )}

              {design ? (
                <div
                  className={`${styles.layerBox} ${
                    showGuides ? styles.layerBoxEditing : ""
                  }`}
                  style={{
                    left: `${box.x}%`,
                    top: `${box.y}%`,
                    width: `${box.w}%`,
                    height: `${box.h}%`,
                    transform: `rotate(${box.rotation}deg)`,
                    transformOrigin: "center center",
                  }}
                  onMouseDown={startDrag}
                  onTouchStart={onTouchStartBox}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowGuides(true);
                  }}
                >
                  <div className={styles.layerImageInner}>
                    <img
                      src={design}
                      alt="Uploaded design"
                      className={styles.layerImage}
                      draggable={false}
                    />
                  </div>

                  {showGuides && (
                    <span
                      className={styles.resizeHandle}
                      onMouseDown={startResize}
                      onTouchStart={startResize}
                    />
                  )}
                </div>
              ) : (
                <div className={styles.emptyPreview}>{t.empty}</div>
              )}

              <div className={styles.badges}>
                <span className={styles.badge}>{size}</span>
                <span className={styles.badge}>{side}</span>
                {mm && (
                  <span className={styles.badge}>
                    {mm.widthMM}mm × {mm.heightMM}mm
                  </span>
                )}
              </div>
            </div>

            <div className={styles.bottomActions}>
              <button
                type="button"
                className={styles.downloadBtn}
                onClick={handleScreenshot}
                disabled={downloading}
              >
                {downloading ? t.downloading : t.download}
              </button>
            </div>
          </div>

          <div className={styles.sendCard}>
            <h2 className={styles.sendTitle}>{t.sendTitle}</h2>
            <div className={styles.sendActions}>
              <a
                href="https://wa.me/995555966815"
                target="_blank"
                rel="noreferrer"
                className={styles.whatsappBtn}
              >
                {t.whatsapp}
              </a>
              <a
                href="mailto:CopyPasteTbilisi@gmail.com"
                className={styles.emailBtn}
              >
                {t.email}
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
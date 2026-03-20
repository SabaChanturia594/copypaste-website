import { useMemo, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";
import styles from "../styles/Builder.module.css";

import tshirtWhite from "../assets/mockups/tshirt-white-front.jpg";
import tshirtBlack from "../assets/mockups/tshirt-black-front.jpg";

function getLang(pathname) {
  const seg = pathname.split("/").filter(Boolean)[0];
  return seg === "en" ? "en" : "ka";
}

const COLORS = [
  { key: "white", label: { ka: "თეთრი", en: "White" } },
  { key: "black", label: { ka: "შავი", en: "Black" } },
];

const SIZES = ["S", "M", "L", "XL", "XXL"];

const MOCKUPS = {
  white: tshirtWhite,
  black: tshirtBlack,
};

const FONT_OPTIONS = [
  "Arial",
  "Georgia",
  "Times New Roman",
  "Verdana",
  "Trebuchet MS",
  "Impact",
  "Courier New",
];
const PRINT_SIZES_MM = {
  S: { width: 297, height: 380 },
  M: { width: 297, height: 380 },
  L: { width: 297, height: 380 },
  XL: { width: 297, height: 380 },
  XXL: { width: 297, height: 380 },
};

function getPrintArea() {
  return {
    x: 30.8,  // მარცხნიდან დაშორება
    y: 25,  // ყელიდან ქვემოთ დაწყება
    w: 38,  // სიგანე
    h: 55,  // სიმაღლე
  };
}
function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

function getLayerBox(layer) {
  const width = layer.baseWidth * layer.scaleX;
  const height = layer.baseHeight * layer.scaleY;
  return { width, height };
}

function clampLayerToArea(layer, area) {
  const { width, height } = getLayerBox(layer);

  return {
    ...layer,
    x: clamp(layer.x, area.x, area.x + area.w - width),
    y: clamp(layer.y, area.y, area.y + area.h - height),
  };
}

function distance(t1, t2) {
  const dx = t2.clientX - t1.clientX;
  const dy = t2.clientY - t1.clientY;
  return Math.sqrt(dx * dx + dy * dy);
}

function getLayerSizeInMM(layer, area, size) {
  const mm = PRINT_SIZES_MM[size];
  const { width, height } = getLayerBox(layer);

  const widthMM = (width / area.w) * mm.width;
  const heightMM = (height / area.h) * mm.height;

  return {
    widthMM: Math.round(widthMM),
    heightMM: Math.round(heightMM),
  };
}

function toolIcon(type) {
  const icons = {
    upload: "🖼️",
    text: "T",
    bigger: "＋",
    smaller: "－",
    wider: "↔",
    narrower: "⇔",
    taller: "↕",
    shorter: "⇕",
    rotate90: "⤵",
    rotate180: "↻",
    rotate270: "⤴",
    front: "⬆",
    back: "⬇",
    reset: "⟲",
    remove: "✕",
    copy: "⧉",
    download: "⬇",
    layers: "☰",
    color: "🎨",
    size: "📏",
  };

  return icons[type] || "•";
}

function sectionTitleIcon(type) {
  const icons = {
    colors: "🎨",
    sizes: "📏",
    upload: "🖼️",
    text: "✍️",
    elements: "☰",
    actions: "🧰",
    textSettings: "🔤",
  };

  return icons[type] || "•";
}

export default function Builder() {
  const { pathname } = useLocation();
  const lang = getLang(pathname);

  const t = {
    ka: {
      title: "მაისურის დიზაინის მორგება",
      subtitle:
        "ატვირთე ფოტოები, დაამატე ტექსტი, შეცვალე ზომები და გადმოწერე პრევიუ სრული მონაცემებით.",
      color: "ფერი",
      size: "ზომა",
      upload: "ფოტოების ატვირთვა",
      uploadMany: "შეგიძლია რამდენიმე ფოტო ერთად ატვირთო",
      addText: "ტექსტის დამატება",
      elements: "ელემენტები",
      noElements: "ჯერ ელემენტები არ გაქვს დამატებული",
      imageLabel: "ფოტო",
      textLabel: "ტექსტი",
      selected: "მონიშნული",
      front: "წინა მხარე",
      quality: "საბეჭდად რეკომენდებულია მაღალი ხარისხის PNG/JPG.",
      tip: "შეგიძლია ელემენტი გადაადგილო, გაადიდო, გაწელო, მოაბრუნო. ტელეფონზე მუშაობს drag და pinch zoom.",
      bigger: "გადიდება",
      smaller: "დაპატარავება",
      wider: "სიგანე +",
      narrower: "სიგანე -",
      taller: "სიმაღლე +",
      shorter: "სიმაღლე -",
      rotate90: "90°",
      rotate180: "180°",
      rotate270: "270°",
      moveFront: "წინ წამოწევა",
      moveBack: "უკან ჩაწევა",
      reset: "გადაყენება",
      remove: "წაშლა",
      text: "ტექსტი",
      textPlaceholder: "ჩაწერე ტექსტი",
      textColor: "ფერი",
      font: "ფონტი",
      textSize: "ზომა",
      normal: "ჩვეულებრივი",
      bold: "გამუქებული",
      download: "პრევიუს გადმოწერა",
      downloading: "იტვირთება...",
      copyOrder: "ინფორმაციის კოპირება",
      emptyPreview: "ატვირთე ფოტო ან დაამატე ტექსტი",
      sendTitle: "შეკვეთისთვის გამოგვიგზავნე",
      whatsapp: "WhatsApp",
      email: "Email",
      actions: "ქმედებები",
      textSettings: "ტექსტის პარამეტრები",
      orderCopied: "ინფორმაცია დაკოპირდა",
      width: "სიგანე",
      height: "სიმაღლე",
      mm: "მმ",
      currentSize: "მიმდინარე ზომა",
    },
    en: {
      title: "T-shirt Design Builder",
      subtitle:
        "Upload images, add text, change sizes, and download the preview with full order details.",
      color: "Color",
      size: "Size",
      upload: "Upload images",
      uploadMany: "You can upload multiple images at once",
      addText: "Add text",
      elements: "Elements",
      noElements: "No elements added yet",
      imageLabel: "Image",
      textLabel: "Text",
      selected: "Selected",
      front: "Front side",
      quality: "High-quality PNG/JPG is recommended for printing.",
      tip: "You can move, enlarge, stretch and rotate elements. Touch drag and pinch zoom work on mobile.",
      bigger: "Bigger",
      smaller: "Smaller",
      wider: "Width +",
      narrower: "Width -",
      taller: "Height +",
      shorter: "Height -",
      rotate90: "90°",
      rotate180: "180°",
      rotate270: "270°",
      moveFront: "Bring forward",
      moveBack: "Send backward",
      reset: "Reset",
      remove: "Remove",
      text: "Text",
      textPlaceholder: "Type your text",
      textColor: "Color",
      font: "Font",
      textSize: "Size",
      normal: "Normal",
      bold: "Bold",
      download: "Download preview",
      downloading: "Downloading...",
      copyOrder: "Copy order info",
      emptyPreview: "Upload an image or add text",
      sendTitle: "Send us your order via",
      whatsapp: "WhatsApp",
      email: "Email",
      actions: "Actions",
      textSettings: "Text settings",
      orderCopied: "Order info copied",
      width: "Width",
      height: "Height",
      mm: "mm",
      currentSize: "Current size",
    },
  }[lang];

  const [color, setColor] = useState("white");
  const [size, setSize] = useState("M");
  const [layers, setLayers] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [downloading, setDownloading] = useState(false);

  const previewRef = useRef(null);
  const gestureRef = useRef({
    mode: null,
    layerId: null,
    offsetX: 0,
    offsetY: 0,
    startDistance: 0,
    startScaleX: 1,
    startScaleY: 1,
  });

  const area = useMemo(() => getPrintArea(), []);
  const mockup = MOCKUPS[color];
  const selectedLayer = layers.find((layer) => layer.id === selectedId) || null;

  const selectedLayerMM = selectedLayer
    ? getLayerSizeInMM(selectedLayer, area, size)
    : null;

  const updateLayer = (id, updater) => {
    setLayers((prev) =>
      prev.map((layer) => {
        if (layer.id !== id) return layer;
        const nextLayer = typeof updater === "function" ? updater(layer) : updater;
        return clampLayerToArea(nextLayer, area);
      })
    );
  };

  const handleFiles = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    files.forEach((file, idx) => {
      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();

        img.onload = () => {
          const aspect = img.width / img.height || 1;
          const baseWidth = 16;
          const baseHeight = baseWidth / aspect;

          const newLayer = {
            id: `${Date.now()}-${idx}-${Math.random().toString(36).slice(2, 8)}`,
            type: "image",
            name: file.name,
            src: reader.result,
            x: area.x + 2 + idx * 1.4,
            y: area.y + 2 + idx * 1.4,
            baseWidth,
            baseHeight,
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
          };

          setLayers((prev) => [...prev, clampLayerToArea(newLayer, area)]);
          setSelectedId(newLayer.id);
        };

        img.src = reader.result;
      };

      reader.readAsDataURL(file);
    });

    e.target.value = "";
  };

  const addTextLayer = () => {
    const newLayer = {
      id: `${Date.now()}-text-${Math.random().toString(36).slice(2, 8)}`,
      type: "text",
      name: `${t.textLabel} ${layers.filter((l) => l.type === "text").length + 1}`,
      text: lang === "ka" ? "ჩემი ტექსტი" : "My text",
      x: area.x + 4,
      y: area.y + 4,
      baseWidth: 24,
      baseHeight: 10,
      scaleX: 1,
      scaleY: 1,
      rotation: 0,
      textColor: "#111111",
      fontFamily: "Arial",
      fontWeight: 400,
      fontSize: 32,
    };

    setLayers((prev) => [...prev, clampLayerToArea(newLayer, area)]);
    setSelectedId(newLayer.id);
  };

  const removeSelected = () => {
    if (!selectedId) return;
    setLayers((prev) => prev.filter((layer) => layer.id !== selectedId));
    setSelectedId(null);
  };

  const resetSelected = () => {
    if (!selectedId) return;

    updateLayer(selectedId, (layer) => ({
      ...layer,
      x: area.x + 4,
      y: area.y + 4,
      scaleX: 1,
      scaleY: 1,
      rotation: 0,
      ...(layer.type === "text" ? { fontSize: 32 } : {}),
    }));
  };

  const bringForward = () => {
    if (!selectedId) return;

    setLayers((prev) => {
      const index = prev.findIndex((l) => l.id === selectedId);
      if (index === -1 || index === prev.length - 1) return prev;
      const next = [...prev];
      [next[index], next[index + 1]] = [next[index + 1], next[index]];
      return next;
    });
  };

  const sendBackward = () => {
    if (!selectedId) return;

    setLayers((prev) => {
      const index = prev.findIndex((l) => l.id === selectedId);
      if (index <= 0) return prev;
      const next = [...prev];
      [next[index], next[index - 1]] = [next[index - 1], next[index]];
      return next;
    });
  };

  const scaleSelected = (delta) => {
    if (!selectedId) return;

    updateLayer(selectedId, (layer) => {
      if (layer.type === "text") {
        return {
          ...layer,
          fontSize: clamp(layer.fontSize + delta * 18, 12, 140),
        };
      }

      return {
        ...layer,
        scaleX: clamp(layer.scaleX + delta, 0.2, 5),
        scaleY: clamp(layer.scaleY + delta, 0.2, 5),
      };
    });
  };

  const stretchSelectedX = (delta) => {
    if (!selectedId) return;
    updateLayer(selectedId, (layer) => ({
      ...layer,
      scaleX: clamp(layer.scaleX + delta, 0.2, 5),
    }));
  };

  const stretchSelectedY = (delta) => {
    if (!selectedId) return;
    updateLayer(selectedId, (layer) => ({
      ...layer,
      scaleY: clamp(layer.scaleY + delta, 0.2, 5),
    }));
  };

  const rotateSelected = (deg) => {
    if (!selectedId) return;
    updateLayer(selectedId, (layer) => ({
      ...layer,
      rotation: deg,
    }));
  };

  const getRelativePoint = (clientX, clientY) => {
    const rect = previewRef.current?.getBoundingClientRect();
    if (!rect) return null;

    return {
      x: ((clientX - rect.left) / rect.width) * 100,
      y: ((clientY - rect.top) / rect.height) * 100,
    };
  };

  const startDrag = (e, layer) => {
    e.stopPropagation();

    const point = getRelativePoint(
      e.clientX ?? e.touches?.[0]?.clientX,
      e.clientY ?? e.touches?.[0]?.clientY
    );
    if (!point) return;

    setSelectedId(layer.id);

    gestureRef.current = {
      mode: "drag",
      layerId: layer.id,
      offsetX: point.x - layer.x,
      offsetY: point.y - layer.y,
      startDistance: 0,
      startScaleX: layer.scaleX,
      startScaleY: layer.scaleY,
    };
  };

  const startResize = (e, layer) => {
    e.stopPropagation();
    e.preventDefault();

    if (e.touches && e.touches.length > 1) return;

    setSelectedId(layer.id);

    const point = getRelativePoint(
      e.clientX ?? e.touches?.[0]?.clientX,
      e.clientY ?? e.touches?.[0]?.clientY
    );
    if (!point) return;

    gestureRef.current = {
      mode: "resize",
      layerId: layer.id,
      offsetX: point.x,
      offsetY: point.y,
      startDistance: 0,
      startScaleX: layer.scaleX,
      startScaleY: layer.scaleY,
    };
  };

  const onMouseMove = (e) => {
    const g = gestureRef.current;
    if (!g.mode || !g.layerId) return;

    const point = getRelativePoint(e.clientX, e.clientY);
    if (!point) return;

    if (g.mode === "drag") {
      updateLayer(g.layerId, (layer) => ({
        ...layer,
        x: point.x - g.offsetX,
        y: point.y - g.offsetY,
      }));
    }

    if (g.mode === "resize") {
      updateLayer(g.layerId, (layer) => ({
        ...layer,
        scaleX: clamp(g.startScaleX + (point.x - g.offsetX) * 0.03, 0.2, 5),
        scaleY: clamp(g.startScaleY + (point.y - g.offsetY) * 0.03, 0.2, 5),
      }));
    }
  };

  const onMouseUp = () => {
    gestureRef.current.mode = null;
    gestureRef.current.layerId = null;
  };

  const onTouchStartLayer = (e, layer) => {
    e.stopPropagation();
    setSelectedId(layer.id);

    if (e.touches.length === 1) {
      const touch = e.touches[0];
      const point = getRelativePoint(touch.clientX, touch.clientY);
      if (!point) return;

      gestureRef.current = {
        mode: "drag",
        layerId: layer.id,
        offsetX: point.x - layer.x,
        offsetY: point.y - layer.y,
        startDistance: 0,
        startScaleX: layer.scaleX,
        startScaleY: layer.scaleY,
      };
    }

    if (e.touches.length === 2) {
      gestureRef.current = {
        mode: "pinch",
        layerId: layer.id,
        offsetX: 0,
        offsetY: 0,
        startDistance: distance(e.touches[0], e.touches[1]),
        startScaleX: layer.scaleX,
        startScaleY: layer.scaleY,
      };
    }
  };

  const onTouchMove = (e) => {
    const g = gestureRef.current;
    if (!g.mode || !g.layerId) return;

    if (g.mode === "drag" && e.touches.length === 1) {
      const touch = e.touches[0];
      const point = getRelativePoint(touch.clientX, touch.clientY);
      if (!point) return;

      updateLayer(g.layerId, (layer) => ({
        ...layer,
        x: point.x - g.offsetX,
        y: point.y - g.offsetY,
      }));
    }

    if (g.mode === "pinch" && e.touches.length === 2) {
      const currentDistance = distance(e.touches[0], e.touches[1]);
      const ratio = currentDistance / g.startDistance;

      updateLayer(g.layerId, (layer) => ({
        ...layer,
        scaleX: clamp(g.startScaleX * ratio, 0.2, 5),
        scaleY: clamp(g.startScaleY * ratio, 0.2, 5),
      }));
    }
  };

  const onTouchEnd = () => {
    gestureRef.current.mode = null;
    gestureRef.current.layerId = null;
  };

  const handleDownload = async () => {
    if (!previewRef.current) return;

    try {
      setDownloading(true);

      const canvas = await html2canvas(previewRef.current, {
        backgroundColor: null,
        scale: 3,
        useCORS: true,
      });

      const link = document.createElement("a");
      link.download = `copy-paste-tshirt-${color}-${size}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error(err);
    } finally {
      setDownloading(false);
    }
  };

  const generateOrderText = () => {
    const lines = [
      "COPY PASTE T-SHIRT ORDER",
      "",
      `Color: ${color}`,
      `Size: ${size}`,
      `Print area max: ${PRINT_SIZES_MM[size].width} mm × ${PRINT_SIZES_MM[size].height} mm`,
      `Elements count: ${layers.length}`,
      "",
    ];

    layers.forEach((layer, index) => {
      const mm = getLayerSizeInMM(layer, area, size);
      lines.push(
        `${index + 1}. ${layer.type === "text" ? "Text" : "Image"}`
      );
      lines.push(`Name: ${layer.name}`);
      lines.push(`Width: ${mm.widthMM} mm`);
      lines.push(`Height: ${mm.heightMM} mm`);
      lines.push(`Rotation: ${layer.rotation}°`);

      if (layer.type === "text") {
        lines.push(`Text: ${layer.text}`);
        lines.push(`Font: ${layer.fontFamily}`);
        lines.push(`Color: ${layer.textColor}`);
        lines.push(`Weight: ${layer.fontWeight}`);
        lines.push(`Font size: ${layer.fontSize}`);
      }

      lines.push("");
    });

    return lines.join("\n");
  };

  const copyOrderInfo = async () => {
    try {
      await navigator.clipboard.writeText(generateOrderText());
      alert(t.orderCopied);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </section>

      <section className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.panelCard}>
            <div className={styles.panelScroll}>
              <div className={styles.section}>
                <div className={styles.sectionTitle}>
                  <span className={styles.sectionEmoji}>
                    {sectionTitleIcon("colors")}
                  </span>
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
                  <span className={styles.sectionEmoji}>
                    {sectionTitleIcon("sizes")}
                  </span>
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
                <div className={styles.sectionTitle}>
                  <span className={styles.sectionEmoji}>
                    {sectionTitleIcon("upload")}
                  </span>
                  <span>{t.upload}</span>
                </div>

                <label className={styles.uploadBox}>
                  <input
                    type="file"
                    multiple
                    accept="image/png,image/jpeg,image/webp"
                    className={styles.fileInput}
                    onChange={handleFiles}
                  />
                  <span className={styles.uploadInner}>
                    <span className={styles.toolIcon}>{toolIcon("upload")}</span>
                    <span>{t.upload}</span>
                  </span>
                </label>

                <p className={styles.help}>{t.uploadMany}</p>
                <p className={styles.help}>{t.quality}</p>
              </div>

              <div className={styles.section}>
                <div className={styles.sectionTitle}>
                  <span className={styles.sectionEmoji}>
                    {sectionTitleIcon("text")}
                  </span>
                  <span>{t.text}</span>
                </div>

                <button
                  type="button"
                  className={styles.primaryWideBtn}
                  onClick={addTextLayer}
                >
                  <span className={styles.toolIcon}>{toolIcon("text")}</span>
                  <span>{t.addText}</span>
                </button>
              </div>

              <div className={styles.section}>
                <div className={styles.sectionTitle}>
                  <span className={styles.sectionEmoji}>
                    {sectionTitleIcon("elements")}
                  </span>
                  <span>{t.elements}</span>
                </div>

                <div className={styles.layersList}>
                  {layers.length === 0 ? (
                    <div className={styles.emptyLayers}>{t.noElements}</div>
                  ) : (
                    layers.map((layer, index) => {
                      const mm = getLayerSizeInMM(layer, area, size);

                      return (
                        <button
                          key={layer.id}
                          type="button"
                          className={`${styles.layerItem} ${
                            selectedId === layer.id ? styles.layerItemActive : ""
                          }`}
                          onClick={() => setSelectedId(layer.id)}
                        >
                          <span className={styles.layerIndex}>{index + 1}</span>

                          <span className={styles.layerMeta}>
                            <span className={styles.layerName}>
                              {layer.type === "text" ? t.textLabel : t.imageLabel}:{" "}
                              {layer.name}
                            </span>
                            <span className={styles.layerDims}>
                              {mm.widthMM}mm × {mm.heightMM}mm
                            </span>
                          </span>
                        </button>
                      );
                    })
                  )}
                </div>
              </div>

              <div className={styles.section}>
                <div className={styles.sectionTitle}>
                  <span className={styles.sectionEmoji}>
                    {sectionTitleIcon("actions")}
                  </span>
                  <span>{t.actions}</span>
                </div>

                <div className={styles.toolsGrid}>
                  <button
                    type="button"
                    className={styles.toolBtn}
                    onClick={() => scaleSelected(0.1)}
                    disabled={!selectedLayer}
                    title={t.bigger}
                  >
                    <span className={styles.toolIcon}>{toolIcon("bigger")}</span>
                    <span>{t.bigger}</span>
                  </button>

                  <button
                    type="button"
                    className={styles.toolBtn}
                    onClick={() => scaleSelected(-0.1)}
                    disabled={!selectedLayer}
                    title={t.smaller}
                  >
                    <span className={styles.toolIcon}>{toolIcon("smaller")}</span>
                    <span>{t.smaller}</span>
                  </button>

                  <button
                    type="button"
                    className={styles.toolBtn}
                    onClick={() => stretchSelectedX(0.1)}
                    disabled={!selectedLayer}
                    title={t.wider}
                  >
                    <span className={styles.toolIcon}>{toolIcon("wider")}</span>
                    <span>{t.wider}</span>
                  </button>

                  <button
                    type="button"
                    className={styles.toolBtn}
                    onClick={() => stretchSelectedX(-0.1)}
                    disabled={!selectedLayer}
                    title={t.narrower}
                  >
                    <span className={styles.toolIcon}>{toolIcon("narrower")}</span>
                    <span>{t.narrower}</span>
                  </button>

                  <button
                    type="button"
                    className={styles.toolBtn}
                    onClick={() => stretchSelectedY(0.1)}
                    disabled={!selectedLayer}
                    title={t.taller}
                  >
                    <span className={styles.toolIcon}>{toolIcon("taller")}</span>
                    <span>{t.taller}</span>
                  </button>

                  <button
                    type="button"
                    className={styles.toolBtn}
                    onClick={() => stretchSelectedY(-0.1)}
                    disabled={!selectedLayer}
                    title={t.shorter}
                  >
                    <span className={styles.toolIcon}>{toolIcon("shorter")}</span>
                    <span>{t.shorter}</span>
                  </button>

                  <button
                    type="button"
                    className={styles.toolBtn}
                    onClick={() => rotateSelected(90)}
                    disabled={!selectedLayer}
                    title={t.rotate90}
                  >
                    <span className={styles.toolIcon}>{toolIcon("rotate90")}</span>
                    <span>{t.rotate90}</span>
                  </button>

                  <button
                    type="button"
                    className={styles.toolBtn}
                    onClick={() => rotateSelected(180)}
                    disabled={!selectedLayer}
                    title={t.rotate180}
                  >
                    <span className={styles.toolIcon}>{toolIcon("rotate180")}</span>
                    <span>{t.rotate180}</span>
                  </button>

                  <button
                    type="button"
                    className={styles.toolBtn}
                    onClick={() => rotateSelected(270)}
                    disabled={!selectedLayer}
                    title={t.rotate270}
                  >
                    <span className={styles.toolIcon}>{toolIcon("rotate270")}</span>
                    <span>{t.rotate270}</span>
                  </button>

                  <button
                    type="button"
                    className={styles.toolBtn}
                    onClick={bringForward}
                    disabled={!selectedLayer}
                    title={t.moveFront}
                  >
                    <span className={styles.toolIcon}>{toolIcon("front")}</span>
                    <span>{t.moveFront}</span>
                  </button>

                  <button
                    type="button"
                    className={styles.toolBtn}
                    onClick={sendBackward}
                    disabled={!selectedLayer}
                    title={t.moveBack}
                  >
                    <span className={styles.toolIcon}>{toolIcon("back")}</span>
                    <span>{t.moveBack}</span>
                  </button>

                  <button
                    type="button"
                    className={styles.toolBtn}
                    onClick={resetSelected}
                    disabled={!selectedLayer}
                    title={t.reset}
                  >
                    <span className={styles.toolIcon}>{toolIcon("reset")}</span>
                    <span>{t.reset}</span>
                  </button>

                  <button
                    type="button"
                    className={`${styles.toolBtn} ${styles.dangerBtn}`}
                    onClick={removeSelected}
                    disabled={!selectedLayer}
                    title={t.remove}
                  >
                    <span className={styles.toolIcon}>{toolIcon("remove")}</span>
                    <span>{t.remove}</span>
                  </button>
                </div>
              </div>

              {selectedLayer?.type === "text" && (
                <div className={styles.section}>
                  <div className={styles.sectionTitle}>
                    <span className={styles.sectionEmoji}>
                      {sectionTitleIcon("textSettings")}
                    </span>
                    <span>{t.textSettings}</span>
                  </div>

                  <textarea
                    className={styles.textarea}
                    value={selectedLayer.text}
                    placeholder={t.textPlaceholder}
                    onChange={(e) =>
                      updateLayer(selectedLayer.id, (layer) => ({
                        ...layer,
                        text: e.target.value,
                        name: e.target.value.trim() || layer.name,
                      }))
                    }
                  />

                  <div className={styles.textControls}>
                    <div className={styles.field}>
                      <span className={styles.fieldLabel}>{t.textColor}</span>
                      <input
                        type="color"
                        className={styles.colorInput}
                        value={selectedLayer.textColor}
                        onChange={(e) =>
                          updateLayer(selectedLayer.id, (layer) => ({
                            ...layer,
                            textColor: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <div className={styles.field}>
                      <span className={styles.fieldLabel}>{t.font}</span>
                      <select
                        className={styles.select}
                        value={selectedLayer.fontFamily}
                        onChange={(e) =>
                          updateLayer(selectedLayer.id, (layer) => ({
                            ...layer,
                            fontFamily: e.target.value,
                          }))
                        }
                      >
                        {FONT_OPTIONS.map((font) => (
                          <option key={font} value={font}>
                            {font}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.field}>
                      <span className={styles.fieldLabel}>{t.textSize}</span>
                      <input
                        type="range"
                        min="12"
                        max="140"
                        value={selectedLayer.fontSize}
                        onChange={(e) =>
                          updateLayer(selectedLayer.id, (layer) => ({
                            ...layer,
                            fontSize: Number(e.target.value),
                          }))
                        }
                      />
                    </div>

                    <div className={styles.field}>
                      <span className={styles.fieldLabel}>Weight</span>

                      <div className={styles.inlineButtons}>
                        <button
                          type="button"
                          className={`${styles.smallBtn} ${
                            selectedLayer.fontWeight === 400
                              ? styles.smallBtnActive
                              : ""
                          }`}
                          onClick={() =>
                            updateLayer(selectedLayer.id, (layer) => ({
                              ...layer,
                              fontWeight: 400,
                            }))
                          }
                        >
                          {t.normal}
                        </button>

                        <button
                          type="button"
                          className={`${styles.smallBtn} ${
                            selectedLayer.fontWeight === 700
                              ? styles.smallBtnActive
                              : ""
                          }`}
                          onClick={() =>
                            updateLayer(selectedLayer.id, (layer) => ({
                              ...layer,
                              fontWeight: 700,
                            }))
                          }
                        >
                          {t.bold}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className={styles.section}>
                <div className={styles.infoBox}>
                  <div className={styles.infoRow}>
                    <span>{t.currentSize}</span>
                    <strong>{size}</strong>
                  </div>
                  <div className={styles.infoRow}>
                    <span>Max area</span>
                    <strong>
                      {PRINT_SIZES_MM[size].width}mm × {PRINT_SIZES_MM[size].height}mm
                    </strong>
                  </div>

                  {selectedLayerMM && (
                    <>
                      <div className={styles.infoRow}>
                        <span>{t.width}</span>
                        <strong>{selectedLayerMM.widthMM} {t.mm}</strong>
                      </div>
                      <div className={styles.infoRow}>
                        <span>{t.height}</span>
                        <strong>{selectedLayerMM.heightMM} {t.mm}</strong>
                      </div>
                    </>
                  )}
                </div>

                <p className={styles.tip}>{t.tip}</p>
              </div>
            </div>
          </div>
        </aside>

        <section className={styles.previewSection}>
          <div className={styles.previewCard}>
            <div
              ref={previewRef}
              className={styles.preview}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onClick={() => setSelectedId(null)}
            >
              <img
                src={mockup}
                alt={`tshirt ${color}`}
                className={styles.mockup}
                draggable={false}
              />

              <div
                className={styles.printArea}
                style={{
                  left: `${area.x}%`,
                  top: `${area.y}%`,
                  width: `${area.w}%`,
                  height: `${area.h}%`,
                }}
              />

              {layers.length === 0 && (
                <div className={styles.emptyPreview}>{t.emptyPreview}</div>
              )}

              {layers.map((layer) => {
                const { width, height } = getLayerBox(layer);
                const isActive = layer.id === selectedId;

                if (layer.type === "text") {
                  return (
                    <div
                      key={layer.id}
                      className={`${styles.textLayer} ${
                        isActive ? styles.textLayerActive : ""
                      }`}
                      style={{
                        left: `${layer.x}%`,
                        top: `${layer.y}%`,
                        width: `${width}%`,
                        minHeight: `${height}%`,
                        color: layer.textColor,
                        fontFamily: layer.fontFamily,
                        fontWeight: layer.fontWeight,
                        fontSize: `${layer.fontSize}px`,
                        transform: `rotate(${layer.rotation}deg)`,
                      }}
                      onMouseDown={(e) => startDrag(e, layer)}
                      onTouchStart={(e) => onTouchStartLayer(e, layer)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedId(layer.id);
                      }}
                    >
                      {layer.text}
                      {isActive && (
                        <span
                          className={styles.resizeHandle}
                          onMouseDown={(e) => startResize(e, layer)}
                          onTouchStart={(e) => startResize(e, layer)}
                        />
                      )}
                    </div>
                  );
                }

                return (
                  <div
                    key={layer.id}
                    className={`${styles.layerBox} ${
                      isActive ? styles.layerBoxActive : ""
                    }`}
                    style={{
                      left: `${layer.x}%`,
                      top: `${layer.y}%`,
                      width: `${width}%`,
                      height: `${height}%`,
                      transform: `rotate(${layer.rotation}deg)`,
                    }}
                    onMouseDown={(e) => startDrag(e, layer)}
                    onTouchStart={(e) => onTouchStartLayer(e, layer)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedId(layer.id);
                    }}
                  >
                    <img
                      src={layer.src}
                      alt={layer.name}
                      className={styles.layerImage}
                      draggable={false}
                    />
                    {isActive && (
                      <span
                        className={styles.resizeHandle}
                        onMouseDown={(e) => startResize(e, layer)}
                        onTouchStart={(e) => startResize(e, layer)}
                      />
                    )}
                  </div>
                );
              })}

              <div className={styles.badges}>
                <span className={styles.badge}>{size}</span>
                <span className={styles.badge}>{t.front}</span>
                {selectedLayer && <span className={styles.badge}>{t.selected}</span>}
                {selectedLayerMM && (
                  <span className={styles.badge}>
                    {selectedLayerMM.widthMM}mm × {selectedLayerMM.heightMM}mm
                  </span>
                )}
              </div>
            </div>

            <div className={styles.bottomActions}>
              <button
                type="button"
                className={styles.downloadBtn}
                onClick={handleDownload}
                disabled={downloading}
              >
                <span className={styles.toolIcon}>{toolIcon("download")}</span>
                <span>{downloading ? t.downloading : t.download}</span>
              </button>

              <button
                type="button"
                className={styles.copyBtn}
                onClick={copyOrderInfo}
              >
                <span className={styles.toolIcon}>{toolIcon("copy")}</span>
                <span>{t.copyOrder}</span>
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

              <a href="mailto:copypaste.tb@gmail.com" className={styles.emailBtn}>
                {t.email}
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
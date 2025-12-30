import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { calcPrice } from "../lib/calcPrice";

function getLang(pathname) {
  const seg = pathname.split("/").filter(Boolean)[0];
  return seg === "en" ? "en" : "ka";
}

const TEXT = {
  ka: {
    title: "ატვირთე ფოტო და მოარგე ჩარჩოს",
    upload: "ატვირთე ფოტო",
    size: "ზომა",
    paper: "ქაღალდი",
    type: "ტიპი",
    frame: "ჩარჩო",
    qty: "რაოდენობა",
    add: "დაამატე კალათაში",
    own: "საკუთარი ფოტო",
    design: "ჩვენი დიზაინი",
    glossy: "პრიალა",
    matte: "მატოვი",
    noframe: "სადა",
    frameOnly: "ჩარჩო",
    frameMat: "ჩარჩო + პასპარტუ",
    note: "დაბალი ხარისხის შემთხვევაში დაგიკავშირდებით ბეჭდვამდე.",
  },
  en: {
    title: "Upload your photo & choose a frame",
    upload: "Upload photo",
    size: "Size",
    paper: "Paper",
    type: "Type",
    frame: "Frame",
    qty: "Quantity",
    add: "Add to cart",
    own: "Your photo",
    design: "Our design",
    glossy: "Glossy",
    matte: "Matte",
    noframe: "No frame",
    frameOnly: "Frame",
    frameMat: "Frame + mat",
    note: "If image quality is low, we’ll contact you before printing.",
  },
};

export default function Builder() {
  const { pathname } = useLocation();
  const lang = getLang(pathname);
  const t = TEXT[lang];

  const [file, setFile] = useState(null);
  const [size, setSize] = useState("A3");
  const [paper, setPaper] = useState("matte");
  const [type, setType] = useState("own"); // own | design
  const [frame, setFrame] = useState("noframe"); // noframe | frame | frame+mat
  const [qty, setQty] = useState(1);

  const price = useMemo(
    () =>
      calcPrice({
        size,
        paper,
        type: type === "design" ? "design" : "own",
        frame,
      }) * qty,
    [size, paper, type, frame, qty]
  );

  const previewUrl = file ? URL.createObjectURL(file) : null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold">{t.title}</h1>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {/* Preview */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5">
          <div className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="preview"
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <span className="text-sm text-slate-400">
                {lang === "ka" ? "პრევიუ" : "Preview"}
              </span>
            )}
          </div>
          <p className="mt-3 text-xs text-slate-500">{t.note}</p>
        </div>

        {/* Options */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5 space-y-4">
          <div>
            <label className="text-sm font-medium">{t.upload}</label>
            <input
              type="file"
              accept="image/*"
              className="mt-2 w-full text-sm"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>

          <div>
            <label className="text-sm font-medium">{t.size}</label>
            <select
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option>A3+</option>
              <option>A3</option>
              <option>A4</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">{t.paper}</label>
            <select
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2"
              value={paper}
              onChange={(e) => setPaper(e.target.value)}
            >
              <option value="glossy">{t.glossy}</option>
              <option value="matte">{t.matte}</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">{t.type}</label>
            <select
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="own">{t.own}</option>
              <option value="design">{t.design}</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">{t.frame}</label>
            <select
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2"
              value={frame}
              onChange={(e) => setFrame(e.target.value)}
              disabled={size === "A3+"}
            >
              <option value="noframe">{t.noframe}</option>
              <option value="frame">{t.frameOnly}</option>
              <option value="frame+mat">{t.frameMat}</option>
            </select>
            {size === "A3+" && (
              <p className="mt-1 text-xs text-slate-500">
                {lang === "ka"
                  ? "A3+ ზომაზე ჩარჩო V1-ში მიუწვდომელია."
                  : "Frames are not available for A3+ in V1."}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">{t.qty}</label>
            <input
              type="number"
              min={1}
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value || 1))}
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="text-lg font-semibold">{price} ₾</div>
            <button
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
              onClick={() => alert("Cart (frontend)")}
            >
              {t.add}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

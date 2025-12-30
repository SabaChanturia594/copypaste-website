import { Link, useLocation } from "react-router-dom";

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
      note: "© Copy Paste • Printing & Posters",
      posters: "პოსტერები",
      builder: "ატვირთე ფოტო",
      contact: "კონტაქტი",
      addressTitle: "მისამართი",
      addressValue: "ჭავჭავაძის 26, თბილისი",
      hoursTitle: "სამუშაო საათები",
      hoursValue: "ორშ–პარ • 11:00–20:00",
    },
    en: {
      note: "© Copy Paste • Printing & Posters",
      posters: "Posters",
      builder: "Upload & Frame",
      contact: "Contact",
      addressTitle: "Address",
      addressValue: "26 Chavchavadze Ave, Tbilisi",
      hoursTitle: "Working hours",
      hoursValue: "Mon–Fri • 11:00–20:00",
    },
  }[lang];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl border border-slate-200 bg-white shadow-sm" />
            </div>

            <p className="mt-3 text-sm text-slate-600">
              {lang === "ka"
                ? "პოსტერები, ბეჭდვა და კადრების ლამაზი გაფორმება."
                : "Posters, printing, and beautiful framing."}
            </p>

            <p className="mt-4 text-xs text-slate-500">{t.note}</p>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-semibold">
              {lang === "ka" ? "მენიუ" : "Menu"}
            </div>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link className="text-slate-700 hover:text-slate-500" to={`${base}/posters`}>
                {t.posters}
              </Link>
              <Link className="text-slate-700 hover:text-slate-500" to={`${base}/builder`}>
                {t.builder}
              </Link>
              <Link className="text-slate-700 hover:text-slate-500" to={`${base}/contact`}>
                {t.contact}
              </Link>
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="text-sm font-semibold">
              {lang === "ka" ? "ინფო" : "Info"}
            </div>

            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <div>
                <div className="text-xs text-slate-500">{t.addressTitle}</div>
                <div>{t.addressValue}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">{t.hoursTitle}</div>
                <div>{t.hoursValue}</div>
              </div>

              {/* სურვილისამებრ: ტელეფონი/მეილი */}
              {/* <div>
                <div className="text-xs text-slate-500">{lang === "ka" ? "ტელეფონი" : "Phone"}</div>
                <div>+995 XXX XXX XXX</div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center">
          <div>
            {lang === "ka"
              ? "გადახდა და მიწოდება მოგვიანებით დაემატება."
              : "Payments and delivery options will be added later."}
          </div>

          <div className="flex gap-4">
            <Link className="hover:text-slate-400" to={base}>
              {lang === "ka" ? "მთავარი" : "Home"}
            </Link>
            <Link className="hover:text-slate-400" to="/cart">
              {lang === "ka" ? "კალათა" : "Cart"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

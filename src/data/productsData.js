// src/data/productsData.js
//posterebi
import p1 from "../assets/images/posterebi/p1.png";
import p2 from "../assets/images/posterebi/p2.png";
import p3 from "../assets/images/posterebi/p3.png";
import p4 from "../assets/images/posterebi/p4.png";
import p5 from "../assets/images/posterebi/p5.png";
import p6 from "../assets/images/posterebi/p6.png";

//kalendari
// import k1 from "../assets/images/karikaturebi/karikatura1.png";
// import k2 from "../assets/images/karikaturebi/karikatura2.png";
// import k3 from "../assets/images/karikaturebi/karikatura3.png";
// import k4 from "../assets/images/karikaturebi/karikatura4.png";
// import k5 from "../assets/images/karikaturebi/karikatura5.png";
// import k6 from "../assets/images/karikaturebi/karikatura6.png";

// //maiusrebi
import t1 from "../assets/images/maisurebi/maisuri1.png";
import t2 from "../assets/images/maisurebi/maisuri2.png";
import t3 from "../assets/images/maisurebi/maisuri3.png";
import t4 from "../assets/images/maisurebi/maisuri4.png";
import t5 from "../assets/images/maisurebi/maisuri5.png";
import t6 from "../assets/images/maisurebi/maisuri6.png";

// //perangi
import s1 from "../assets/images/perangi/perangi1.png";
import s2 from "../assets/images/perangi/perangi2.png";
import s3 from "../assets/images/perangi/perangi3.png";
import s4 from "../assets/images/perangi/perangi4.png";
import s5 from "../assets/images/perangi/perangi5.png";
import s6 from "../assets/images/perangi/perangi6.png";

// //wika
// import w1 from "../assets/images/maisurebi/maisuri2.png";
// import w2 from "../assets/images/maisurebi/maisuri2.png";
// import w3 from "../assets/images/maisurebi/maisuri2.png";
// import w4 from "../assets/images/maisurebi/maisuri2.png";
// import w5 from "../assets/images/maisurebi/maisuri2.png";
// import w6 from "../assets/images/maisurebi/maisuri2.png";

// //caricature
import c1 from "../assets/images/karikaturebi/karikatura1.png";
import c2 from "../assets/images/karikaturebi/karikatura2.png";
import c3 from "../assets/images/karikaturebi/karikatura3.png";
import c4 from "../assets/images/karikaturebi/karikatura4.png";
import c5 from "../assets/images/karikaturebi/karikatura5.png";
import c6 from "../assets/images/karikaturebi/karikatura6.png";

// //chanta
// import b1 from "../assets/images/maisurebi/maisuri2.png";
// import b2 from "../assets/images/maisurebi/maisuri2.png";
// import b3 from "../assets/images/maisurebi/maisuri2.png";
// import b4 from "../assets/images/maisurebi/maisuri2.png";
// import b5 from "../assets/images/maisurebi/maisuri2.png";
// import b6 from "../assets/images/maisurebi/maisuri2.png";

export const CATEGORIES = [
  { key: "posters", ka: "პოსტერები", en: "Posters" },
  { key: "caricatures", ka: "კარიკატურები", en: "Caricatures" },
  { key: "tshirts", ka: "მაისურები", en: "T-Shirts" },
  { key: "shirts", ka: "პერანგები", en: "Shirts" },
  { key: "bags", ka: "ჩანთები", en: "Bags" },
  { key: "calendars", ka: "კალენდრები", en: "Calendars" },
  { key: "mugs", ka: "ჭიქები", en: "Mugs" },
];

export const DATA = {
  posters: [
    {
      id: "1",
      title: "Poster #1",
      price: "10₾-დან",
      img: p1,
      badges: ["A4", "Matte/Glossy"],
      details: {
        material: "glossy/matte paper",
        sizes: "A4 / A3 / A3+",
        printer: "Epson (Inkjet Photo)",
        note: "ჩარჩო სურვილის მიხედვით",
      },
    },
    {
      id: "2",
      title: "Poster #2",
      price: "10₾-დან ",
      img: p2,
      badges: ["Premium", "Sharp Colors"],
      details: {
        material: "glossy/matte paper",
        sizes: "A4 / A3 / A3+",
        printer: "Epson (Inkjet Photo)",
        note: "სწრაფი შესრულება",
      },
    },
    {
      id: "3",
      title: "Poster #3",
      price: "10₾-დან",
      img: p3,
      badges: ["Design Ready"],
      details: {
        material: "glossy/matte paper",
        sizes: "A4 / A3 / A3+",
        printer: "Epson (Inkjet Photo)",
        note: "დიზაინი მზადაა",
      },
    },
     {
      id: "4",
      title: "Poster #4",
      price: "10₾-დან ",
      img: p4,
      badges: ["Design Ready"],
      details: {
        material: "glossy/matte paper",
        sizes: "A4 / A3 / A3+",
        printer: "Epson (Inkjet Photo)",
        note: "დიზაინი მზადაა",
      },
    },
     {
      id: "5",
      title: "Poster #5",
      price: "10₾-დან",
      img: p5,
      badges: ["Design Ready"],
      details: {
        material: "glossy/matte paper",
        sizes: "A4 / A3 / A3+",
       printer: "Epson (Inkjet Photo)",
        note: "დიზაინი მზადაა",
      },
    },
     {
      id: "6",
      title: "Poster #6",
      price: "10₾-დან ",
      img: p6,
      badges: ["Design Ready"],
      details: {
        material: "glossy/matte paper",
        sizes: "A4 / A3 / A3+",
        printer: "Epson (Inkjet Photo)",
        note: "დიზაინი მზადაა",
      },
    },
  ],

  caricatures: [
    {
      id: "1",
      title: "Caricature A4/A3",
      price: "5ლ-დან",
      img: c1,
      badges: ["B/W or Color"],
      details: {
        material: "Glossy/matte/plein peper",
        sizes: "A4",
        printer: "Epson Photo / Laser",
        note: "ფასი დამოკიდებულია ფერზე/ზომაზე",
      },
    },
    {
      id: "2",
      title: "Caricature A4/A3",
      price: "5₾-დან",
      img: c2,
      badge: ["Gift Idea"],
      details: {
        material: "Glossy/matte/plein peper",
        sizes: "A3",
        printer: "Epson Photo",
        note: "შეგიძლია გამოგზავნო ფოტო და ვაკეთებთ",
      },
    },
    {
      id: "3",
      title: "Caricature A4/A3",
      price: "5₾-დან",
      img: c3,
      badges: ["Gift Idea"],
      details: {
        material: "Glossy/matte/plein peper",
        sizes: "A3",
        printer: "Epson Photo",
        note: "შეგიძლია გამოგზავნო ფოტო და ვაკეთებთ",
      },
    },
    {
      id: "4",
      title: "Caricature A4/A3",
      price: "5₾-დან",
      img: c4,
      badges: ["Gift Idea"],
      details: {
        material: "Glossy/matte/plein peper",
        sizes: "A3",
        printer: "Epson Photo",
        note: "შეგიძლია გამოგზავნო ფოტო და ვაკეთებთ",
      },
    },
    {
      id: "5",
      title: "Caricature A4/A3",
      price: "5₾-დან",
      img: c5,
      badges: ["Gift Idea"],
      details: {
        material: "Glossy/matte/plein peper",
        sizes: "A3",
        printer: "Epson Photo",
        note: "შეგიძლია გამოგზავნო ფოტო და ვაკეთებთ",
      },
    },
    {
      id: "6",
      title: "Caricature A4/A3",
      price: "5₾-დან",
      img: c6,
      badges: ["Gift Idea"],
      details: {
        material: "Glossy/matte/plein peper",
        sizes: "A3",
        printer: "Epson Photo",
        note: "შეგიძლია გამოგზავნო ფოტო და ვაკეთებთ",
      },
    },
  ],

  tshirts: [
    {
      id: "1",
      title: "T-Shirt Print",
      price: "50₾-დან",
      img: t1,
      badges: ["Your Design"],
      details: {
        material: "ტექსტილი + თერმო გადატანა",
        sizes: "S / M / L / XL (და სხვა)",
        printer: "DTF / Heat Press",
        note: "შენი დიზაინით",
      },
    },
    {
      id: "2",
      title: "T-Shirt (DTF)",
      price: "50₾-დან",
      img: t2,
      badges: ["Durable"],
      details: {
        material: "DTF transfer + heat press",
        sizes: "S / M / L / XL",
        printer: "DTF Printer",
        note: "გამძლე და სუფთა პრინტი",
      },
    },
     {
      id: "3",
      title: "T-Shirt Print",
      price: "50₾-დან",
      img: t3,
      badges: ["Your Design"],
      details: {
        material: "ტექსტილი + თერმო გადატანა",
        sizes: "S / M / L / XL (და სხვა)",
        printer: "DTF / Heat Press",
        note: "შენი დიზაინით",
      },
    },
    {
      id: "4",
      title: "T-Shirt (DTF)",
      price: "50₾-დან",
      img: t4,
      badges: ["Durable"],
      details: {
        material: "DTF transfer + heat press",
        sizes: "S / M / L / XL",
        printer: "DTF Printer",
        note: "გამძლე და სუფთა პრინტი",
      },
    },
     {
      id: "5",
      title: "T-Shirt Print",
      price: "50₾-დან",
      img: t5,
      badges: ["Your Design"],
      details: {
        material: "ტექსტილი + თერმო გადატანა",
        sizes: "S / M / L / XL (და სხვა)",
        printer: "DTF / Heat Press",
        note: "შენი დიზაინით",
      },
    },
    {
      id: "6",
      title: "T-Shirt (DTF)",
      price: "50₾-დან",
      img: t6,
      badges: ["Durable"],
      details: {
        material: "DTF transfer + heat press",
        sizes: "S / M / L / XL",
        printer: "DTF Printer",
        note: "გამძლე და სუფთა პრინტი",
      },
    },
  ],
//perangi
  shirts: [
    {
      id: "1",
      title: "Business Cards (100 pcs)",
      price: "50₾დან",
      img: s1,
      badges: ["Matte"],
      details: {
        material: "Transfer paper",
        shirt:"white shirts",
        sizes: "90×50mm / 85×55mm",
        printer: "Laser",
        note: "დიზაინი თქვენით ან ჩვენით",
      },
    },
    {
      id: "2",
      title: "Business Cards (200 pcs)",
      price: "—",
      img: s2,
      badges: ["Premium Paper"],
      details: {
        material: "Premium cardstock",
        sizes: "90×50mm / 85×55mm",
        printer: "Laser",
        note: "ორმხრივი/ერთმხრივი",
      },
    },
     {
      id: "3",
      title: "Business Cards (100 pcs)",
      price: "50₾დან",
      img: s3,
      badges: ["Matte"],
      details: {
        material: "Transfer paper",
        shirt:"white shirts",
        sizes: "90×50mm / 85×55mm",
        printer: "Laser",
        note: "დიზაინი თქვენით ან ჩვენით",
      },
    },
    {
      id: "4",
      title: "Business Cards (200 pcs)",
      price: "—",
      img: s4,
      badges: ["Premium Paper"],
      details: {
        material: "Premium cardstock",
        sizes: "90×50mm / 85×55mm",
        printer: "Laser",
        note: "ორმხრივი/ერთმხრივი",
      },
    },
     {
      id: "5",
      title: "Business Cards (100 pcs)",
      price: "50₾დან",
      img: s5,
      badges: ["Matte"],
      details: {
        material: "Transfer paper",
        shirt:"white shirts",
        sizes: "90×50mm / 85×55mm",
        printer: "Laser",
        note: "დიზაინი თქვენით ან ჩვენით",
      },
    },
    {
      id: "6",
      title: "Business Cards (200 pcs)",
      price: "—",
      img: s6,
      badges: ["Premium Paper"],
      details: {
        material: "Premium cardstock",
        sizes: "90×50mm / 85×55mm",
        printer: "Laser",
        note: "ორმხრივი/ერთმხრივი",
      },
    },
  ],

  bags: [
    {
      id: "1",
      title: "Calendar 2026",
      price: "—",
      img: t2,
      badges: ["Custom Photos"],
      details: {
        material: "ქაღალდი + ბეჭდვა",
        sizes: "A4 / A3",
        printer: "Epson Photo",
        note: "ოჯახის ფოტოებით",
      },
    },
    {
      id: "2",
      title: "Wall Calendar",
      price: "—",
      img: t2,
      badges: ["A4/A3"],
      details: {
        material: "ქაღალდი + ბეჭდვა",
        sizes: "A4 / A3",
        printer: "Epson Photo",
        note: "გე/ენ ვარიანტიც",
      },
    },
    {
      id: "2",
      title: "Wall Calendar",
      price: "—",
      img: t2,
      badges: ["A4/A3"],
      details: {
        material: "ქაღალდი + ბეჭდვა",
        sizes: "A4 / A3",
        printer: "Epson Photo",
        note: "გე/ენ ვარიანტიც",
      },
    },
    {
      id: "2",
      title: "Wall Calendar",
      price: "—",
      img: t2,
      badges: ["A4/A3"],
      details: {
        material: "ქაღალდი + ბეჭდვა",
        sizes: "A4 / A3",
        printer: "Epson Photo",
        note: "გე/ენ ვარიანტიც",
      },
    },
    {
      id: "2",
      title: "Wall Calendar",
      price: "—",
      img: t2,
      badges: ["A4/A3"],
      details: {
        material: "ქაღალდი + ბეჭდვა",
        sizes: "A4 / A3",
        printer: "Epson Photo",
        note: "გე/ენ ვარიანტიც",
      },
    },
    {
      id: "2",
      title: "Wall Calendar",
      price: "—",
      img: t2,
      badges: ["A4/A3"],
      details: {
        material: "ქაღალდი + ბეჭდვა",
        sizes: "A4 / A3",
        printer: "Epson Photo",
        note: "გე/ენ ვარიანტიც",
      },
    },
  ],

  calendars: [
    {
      id: "1",
      title: "Calendar 2026",
      price: "—",
      img: t2,
      badges: ["Custom Photos"],
      details: {
        material: "ქაღალდი + ბეჭდვა",
        sizes: "A4 / A3",
        printer: "Epson Photo",
        note: "ოჯახის ფოტოებით",
      },
    },
    {
      id: "2",
      title: "Wall Calendar",
      price: "—",
      img: t2,
      badges: ["A4/A3"],
      details: {
        material: "ქაღალდი + ბეჭდვა",
        sizes: "A4 / A3",
        printer: "Epson Photo",
        note: "გე/ენ ვარიანტიც",
      },
    },
  ],

  mugs: [
    {
      id: "1",
      title: "Mug Print",
      price: "20 ₾",
      img: t2,
      badges: ["Full Color"],
      details: {
        material: "კერამიკა",
        sizes: "სტანდარტული 330ml",
        printer: "Sublimation / Mug Press",
        note: "ფოტო/ლოგო/ტექსტი",
      },
    },
    {
      id: "2",
      title: "Magic Mug",
      price: "—",
      img: p1,
      badges: ["Surprise Effect"],
      details: {
        material: "Magic mug (თერმო ეფექტი)",
        sizes: "330ml",
        printer: "Sublimation / Mug Press",
        note: "შავი ფერის ჭიქა, სურათი ჩნდება გათბობისას",
      },
    },
  ],
};

// ✅ named export (არ არის default!)
export function getProductByRouteId(routeId) {
  if (typeof routeId !== "string") return null;

  const [catKey, itemId] = routeId.split("-");
  if (!catKey || !itemId) return null;

  const list = DATA[catKey] || [];
  const item = list.find((x) => String(x.id) === String(itemId));
  if (!item) return null;

  return { ...item, categoryKey: catKey };
}

export function getCategoryLabel(catKey, lang = "ka") {
  const c = CATEGORIES.find((x) => x.key === catKey);
  if (!c) return "";
  return lang === "en" ? c.en : c.ka;
}

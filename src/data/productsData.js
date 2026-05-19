// src/data/productsData.js
//posterebi
import p1 from "../assets/images/posterebi/p1.png";
import p2 from "../assets/images/posterebi/p2.png";
import p3 from "../assets/images/posterebi/p3.png";
import p4 from "../assets/images/posterebi/p4.png";
import p5 from "../assets/images/posterebi/p5.png";
import p6 from "../assets/images/posterebi/p6.png";

//kalendari
import k1 from "../assets/images/kalendari/kalendari1.png";
import k2 from "../assets/images/kalendari/kalendari2.png";
import k3 from "../assets/images/kalendari/kalendari3.png";
import k4 from "../assets/images/kalendari/kalendari4.png";
import k5 from "../assets/images/kalendari/kalendari5.png";
import k6 from "../assets/images/kalendari/kalendari6.png";

// //maiusrebi
import t1 from "../assets/images/maisurebi/maisuri1.png";
import t2 from "../assets/images/maisurebi/maisuri2.png";
import t3 from "../assets/images/maisurebi/maisuri3.png";
import t4 from "../assets/images/maisurebi/maisuri4.png";
import t5 from "../assets/images/maisurebi/maisuri5.png";
import t6 from "../assets/images/maisurebi/maisuri6.png";
import t7 from "../assets/images/maisurebi/maisuri7.png";
import t8 from "../assets/images/maisurebi/maisuri8.png";
import t9 from "../assets/images/maisurebi/maisuri9.png";
import t10 from "../assets/images/maisurebi/maisuri10.png";
import t12 from "../assets/images/maisurebi/maisuri12.png";
import t11 from "../assets/images/maisurebi/maisuri11.png";

// //perangi
import s1 from "../assets/images/perangi/perangi1.png";
import s2 from "../assets/images/perangi/perangi2.png";
import s3 from "../assets/images/perangi/perangi3.png";
import s4 from "../assets/images/perangi/perangi4.png";
import s5 from "../assets/images/perangi/perangi5.png";
import s6 from "../assets/images/perangi/perangi6.png";

// //wika
import w1 from "../assets/images/wiqa/wiqa1.png";
import w2 from "../assets/images/wiqa/wiqa2.png";
import w3 from "../assets/images/wiqa/wiqa3.png";


// //caricature
import c1 from "../assets/images/karikaturebi/karikatura1.png";
import c3 from "../assets/images/karikaturebi/karikatura3.png";
import c5 from "../assets/images/karikaturebi/karikatura5.png";

// //chanta
import b1 from "../assets/images/chanta/chanta1.png";
import b2 from "../assets/images/chanta/chanta2.png";
import b3 from "../assets/images/chanta/chanta3.png";

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
     {
      id: "7",
      title: "T-Shirt (DTF)",
      price: "50₾-დან",
      img: t7,
      badges: ["Durable"],
      details: {
        material: "DTF transfer + heat press",
        sizes: "S / M / L / XL",
        printer: "DTF Printer",
        note: "გამძლე და სუფთა პრინტი",
      },
    }, {
      id: "8",
      title: "T-Shirt (DTF)",
      price: "50₾-დან",
      img: t8,
      badges: ["Durable"],
      details: {
        material: "DTF transfer + heat press",
        sizes: "S / M / L / XL",
        printer: "DTF Printer",
        note: "გამძლე და სუფთა პრინტი",
      },
    }, {
      id: "9",
      title: "T-Shirt (DTF)",
      price: "50₾-დან",
      img: t9,
      badges: ["Durable"],
      details: {
        material: "DTF transfer + heat press",
        sizes: "S / M / L / XL",
        printer: "DTF Printer",
        note: "გამძლე და სუფთა პრინტი",
      },
    }, {
      id: "10",
      title: "T-Shirt (DTF)",
      price: "50₾-დან",
      img: t10,
      badges: ["Durable"],
      details: {
        material: "DTF transfer + heat press",
        sizes: "S / M / L / XL",
        printer: "DTF Printer",
        note: "გამძლე და სუფთა პრინტი",
      },
    },
     {
      id: "11",
      title: "T-Shirt (DTF)",
      price: "50₾-დან",
      img: t11,
      badges: ["Durable"],
      details: {
        material: "DTF transfer + heat press",
        sizes: "S / M / L / XL",
        printer: "DTF Printer",
        note: "გამძლე და სუფთა პრინტი",
      },
    }, {
      id: "12",
      title: "T-Shirt (DTF)",
      price: "50₾-დან",
      img: t12,
      badges: ["Durable"],
      details: {
        material: "DTF transfer + heat press",
        sizes: "S / M / L / XL",
        printer: "DTF Printer",
        note: "გამძლე და სუფთა პრინტი",
      },
    },
  ],
  posters: [
    {
      id: "1",
      title: "აბსტრაქცია",
      price: "25 ₾არი",
      img: p1,
      badges: ["A3 ზომის", "პრიალა ქაღალდი"],
      details: {
        material: "glossy",
        sizes: "A3 (297mm X 420mm)",
        printer: "Epson (Inkjet Photo)",
        note: "ფასი ჩარჩოს გარეშე",
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
      title: "ფერადი კარიკატურა A4" ,
      price: "5 ლარი",
      img: c1,
      badges: ["B/W or Color"],
      details: {
        material: "Glossy/matte/plein peper",
        sizes: "A4",
        printer: "Epson Photo / Laser",
        note: "ფასები განპირონებულია ქაღალდის ტიპზე, ვაკეთებთ ინდივიდულურად",
      },
    },
   
    {
      id: "3",
      title: "ფანქრის სტილის ფერადი კარიკატურა A4",
      price: "5₾",
      img: c3,
      badges: ["Gift Idea"],
      details: {
        material: "Glossy/matte/plein peper",
        sizes: "A4",
        printer: "Epson Photo",
        note: "ფასები განპირონებულია ქაღალდის ტიპზე, ვაკეთებთ ინდივიდულურად",
      },
    },

    {
      id: "5",
      title: "შავ-თეთრი კარიკატურა A3",
      price: "10 ₾არი",
      img: c5,
      badges: ["Gift Idea"],
      details: {
        material: "Glossy/matte/plein peper",
        sizes: "A3",
        printer: "Epson Photo",
        note: "ფასები განპირონებულია ქაღალდის ტიპზე, ვაკეთებთ ინდივიდულურად",
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
      title: "შავი ჩანთა",
      price: "50 ₾არი",
      img: b1,
      details: {
        material: "DTF, Flex, Inkjet",
        sizes: "პრინტის ზომა A4",
        printer: "Epson L8180",
        note: "კლასიკური ნაჭრის ჩანთა იმავე ფერის და ქსოვილის გრძელი სახელურით (70სმ). ინდივიდუალრუი დიზაინით",
      },
    },
    {
      id: "2",
      title: "ნაცრისფერი ჩანთა",
      price: "50 ₾არი",
      img: b2,
      details: {
        material: "DTF, Flex, Inkjet",
        sizes: "პრინტის ზომა A4",
        printer: "Epson L8180",
        note: "კლასიკური ნაჭრის ჩანთა იმავე ფერის და ქსოვილის გრძელი სახელურით (70სმ). ინდივიდუალრუი დიზაინით",
      },
    },
    {
      id: "3",
      title: "ბეჟე ჩანთა",
      price: "50 ₾არი",
      img: b3,
      details: {
        material: "DTF, Flex, Inkjet",
        sizes: "პრინტის ზომა A4",
        printer: "Epson L8180",
        note: "კლასიკური ნაჭრის ჩანთა იმავე ფერის და ქსოვილის გრძელი სახელურით (70სმ). ინდივიდუალრუი დიზაინით",
      },
    },
    
    
  ],

  calendars: [
    {
      id: "1",
      title: "საოჯახო კალენდარი A4 ზომის",
      price: "5 ₾არი",
      img: k1,
      badges: ["საოჯახო კალენდარი"],
      details: {
        material: "მატოვის თხელი ქაღალდი",
        sizes: "A4",
        printer: "Epson L8180",
        note: "ოჯახის ფოტოებით, ინდივიდუალრი დიზაინი",
      },
    },
    {
     id: "2",
      title: "საოჯახო კალენდარი A4 ზომის",
      price: "5 ₾არი",
      img: k2,
      badges: ["საოჯახო კალენდარი"],
      details: {
        material: "მატოვის სქელი ქაღალდი",
        sizes: "A4",
        printer: "Epson L8180",
        note: "ოჯახის ფოტოებით, ინდივიდუალრი დიზაინი",
      },
    },
    {
     id: "3",
      title: "საოჯახო კალენდარი A3 ზომის",
      price: "15 ₾არი",
      img: k3,
      badges: ["საოჯახო კალენდარი"],
      details: {
        material: "მატოვის სქელი ქაღალდი",
        sizes: "A3",
        printer: "Epson L8180",
        note: "ოჯახის ფოტოებით, ინდივიდუალრი დიზაინი",
      },
    },
    {
     id: "4",
      title: "საოჯახო კალენდარი A3 ზომის",
      price: "15 ₾არი",
      img: k4,
      badges: ["საოჯახო კალენდარი"],
      details: {
        material: "მატოვის სქელი ქაღალდი",
        sizes: "A3",
        printer: "Epson L8180",
        note: "ოჯახის ფოტოებით, ინდივიდუალრი დიზაინი",
      },
    },
     {
     id: "5",
      title: "საოჯახო კალენდარი A3 ზომის",
      price: "15 ₾არი",
      img: k5,
      badges: ["საოჯახო კალენდარი"],
      details: {
        material: "მატოვის სქელი ქაღალდი",
        sizes: "A3",
        printer: "Epson L8180",
        note: "ოჯახის ფოტოებით, ინდივიდუალრი დიზაინი",
      },
    },
    
  ],

  mugs: [
    {
      id: "1",
      title: "თეთრი ჭიქა",
      price: "20 ₾არი",
      img: w1,
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
      title: "ქამელეონის ჭიქა",
      price: "30 ₾არი",
      img: w2,
      badges: ["Surprise Effect"],
      details: {
        material: "Magic mug (თერმო ეფექტი)",
        sizes: "330ml",
        printer: "Sublimation / Mug Press",
        note: "შავი ფერის ჭიქა, სურათი ჩნდება გათბობისას",
      },
    },
    {
      id: "3",
      title: "ჭიქა წითელი სახელურით",
      price: "20 ₾არი",
      img: w3,
      badges: ["Full Color"],
      details: {
        material: "კერამიკა",
        sizes: "სტანდარტული 330ml",
        printer: "Sublimation / Mug Press",
        note: "ფოტო/ლოგო/ტექსტი",
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

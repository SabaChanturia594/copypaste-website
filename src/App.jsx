import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";


import Home from "./pages/Home";
import Builder from "./pages/Builder";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
    <CartProvider>
      <Header />

      <main>
        <Routes>
          {/* default redirect */}
          <Route path="/" element={<Navigate to="/ka" replace />} />

          {/* HOME */}
          <Route path="/ka" element={<Home />} />
          <Route path="/en" element={<Home />} />

          {/* PRODUCTS */}
          <Route path="/ka/products" element={<Products />} />
          <Route path="/en/products" element={<Products />} />

          {/* PRODUCT DETAILS (View details) */}
         <Route path="/ka/product/:id" element={<ProductDetails />} />
         <Route path="/en/product/:id" element={<ProductDetails />} />


          {/* CONTACT */}
          <Route path="/ka/contact" element={<Contact />} />
          <Route path="/en/contact" element={<Contact />} />

          {/* BUILDER */}
          <Route path="/ka/builder" element={<Builder />} />
          <Route path="/en/builder" element={<Builder />} />

          <Route path="/ka/cart" element={<Cart />} />
          <Route path="/en/cart" element={<Cart />} />


          {/* OPTIONAL / TEMP PAGES (თუ გინდა დატოვე) */}
          <Route
            path="/ka/posters"
            element={<div className="mx-auto max-w-6xl px-4 py-10">Posters (KA)</div>}
          />
          <Route
            path="/en/posters"
            element={<div className="mx-auto max-w-6xl px-4 py-10">Posters (EN)</div>}
          />
          <Route
            path="/ka/caricature"
            element={<div className="mx-auto max-w-6xl px-4 py-10">Caricature (KA)</div>}
          />

          {/* CART */}
          <Route
            path="/cart"
            element={<div className="mx-auto max-w-6xl px-4 py-10">Cart</div>}
          />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/ka" replace />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
    </div>
  );
}

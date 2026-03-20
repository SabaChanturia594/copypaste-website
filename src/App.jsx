import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Builder from "./pages/Builder";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/ka" replace />} />

          <Route path="/ka" element={<Home />} />
          <Route path="/en" element={<Home />} />

          <Route path="/ka/products" element={<Products />} />
          <Route path="/en/products" element={<Products />} />

          <Route path="/ka/product/:id" element={<ProductDetails />} />
          <Route path="/en/product/:id" element={<ProductDetails />} />

          <Route path="/ka/contact" element={<Contact />} />
          <Route path="/en/contact" element={<Contact />} />

          <Route path="/ka/builder" element={<Builder />} />
          <Route path="/en/builder" element={<Builder />} />

          <Route path="*" element={<Navigate to="/ka" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
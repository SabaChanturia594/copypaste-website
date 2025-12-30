import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import ProductDetails from './pages/ProductDetails';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/ka" replace />} />

          <Route path="/ka" element={<Home />} />
          <Route path="/en" element={<Home />} />

          {/* დროებითი გვერდები */}
          <Route path="/ka/builder" element={<div className="mx-auto max-w-6xl px-4 py-10">Builder (KA)</div>} />
          <Route path="/en/builder" element={<div className="mx-auto max-w-6xl px-4 py-10">Builder (EN)</div>} />

          <Route path="/ka/posters" element={<div className="mx-auto max-w-6xl px-4 py-10">Posters (KA)</div>} />
          <Route path="/en/posters" element={<div className="mx-auto max-w-6xl px-4 py-10">Posters (EN)</div>} />

          <Route path="/ka/contact" element={<div className="mx-auto max-w-6xl px-4 py-10">Contact (KA)</div>} />
          <Route path="/en/contact" element={<div className="mx-auto max-w-6xl px-4 py-10">Contact (EN)</div>} />

          <Route path="/cart" element={<div className="mx-auto max-w-6xl px-4 py-10">Cart</div>} />
          <Route path="/ka/builder" element={<Builder />} />
          <Route path="/en/builder" element={<Builder />} />

          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

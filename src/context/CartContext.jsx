import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product) => {
    if (!product?.routeId) return;

    setItems((prev) => {
      const existing = prev.find((i) => i.routeId === product.routeId);

      if (existing) {
        return prev.map((i) =>
          i.routeId === product.routeId
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (routeId) => {
    setItems((prev) => prev.filter((i) => i.routeId !== routeId));
  };

  const incQty = (routeId) => {
    setItems((prev) =>
      prev.map((i) =>
        i.routeId === routeId ? { ...i, qty: i.qty + 1 } : i
      )
    );
  };

  const decQty = (routeId) => {
    setItems((prev) =>
      prev.map((i) =>
        i.routeId === routeId
          ? { ...i, qty: Math.max(1, i.qty - 1) }
          : i
      )
    );
  };

  const clearCart = () => setItems([]);

  const total = useMemo(() => {
    return items.reduce((sum, i) => {
      const priceNumber = Number(
        String(i.price).replace(/[^\d.]/g, "")
      );
      return sum + priceNumber * i.qty;
    }, 0);
  }, [items]);

  const count = useMemo(() => {
    return items.reduce((sum, i) => sum + i.qty, 0);
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        incQty,
        decQty,
        clearCart,
        total,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 🔥 ეს იყო პრობლემა — უნდა იყოს export
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}

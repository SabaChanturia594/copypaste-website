import { useState } from 'react';
import styles from './App.module.css';

const products = [
  { id: 1, name: 'shirt', price: 12 },
  { id: 2, name: 'dress', price: 5 },
  { id: 3, name: 'hat', price: 13 },
];

function App() {
  const [cart, setCart] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');
  const [editPrice, setEditPrice] = useState('');

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const openEditPopup = (index) => {
    setEditIndex(index);
    setEditName(cart[index].name);
    setEditPrice(cart[index].price);
    setPopupVisible(true);
  };

  const submitEdit = () => {
    const updatedCart = [...cart];
    updatedCart[editIndex] = { ...updatedCart[editIndex], name: editName, price: Number(editPrice) };
    setCart(updatedCart);
    setPopupVisible(false);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.container}>
      <h1>Shop</h1>

      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
            <button onClick={() => addToCart(p)} style={{ marginLeft: '10px' }}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>

      <h2>
        Cart ({cart.length}) - Total: ${total}
      </h2>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            {item.name} - ${item.price}
            <button onClick={() => removeCart(i)}>Remove</button>
            <button onClick={() => openEditPopup(i)}>Edit</button>
          </li>
        ))}
      </ul>

      {isPopupVisible && (
        <>
          <div className={styles.popup}>
            <h3>Edit Item</h3>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              placeholder="Name"
            />
            <input
              type="number"
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
              placeholder="Price"
            />
            <button onClick={submitEdit}>Submit</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

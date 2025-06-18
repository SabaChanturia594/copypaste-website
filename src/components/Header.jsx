import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import logo from '../assets/images/logo.png';
import menue from '../assets/images/Rectangle.png'
import notification from '../assets/notification.png'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logoContainer}>
          <img src={logo} alt="BitPack Logo" className={styles.logo} />
          <span className={styles.brand}>BitPack</span>

  
        </div>
      </Link>
      <nav className={styles.nav}>
        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </div>
        {/* <div className={styles.actions}>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/register"><button>Register</button></Link>
        </div> */}
        <img src={notification} alt="." />
        <img src={menue} alt="." />
      </nav>
    </header>
    
  );
}
